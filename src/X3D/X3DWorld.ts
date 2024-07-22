

import * as THREE from 'three'
import * as CANNON from 'cannon-es'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'
// import {TWEEN} from "three/examples/jsm/libs/tween.module.min.js"
import { CannonDebugRenderer } from './X3DUtils';

// import XUtils from '../XUtils';
// import XData from '../XData';
import {_xlog,_xu,XData,_xem} from '../Core/Xpell';
import {X3D,X3DObject} from "./X3D"
// import { _xem } from '../XEM/XEventManager';

import X3DLoader from './X3DLoader';
import {X3DSceneBackground,X3DSceneBackgroundTypes as _bg_types,
X3DSceneBackgroundHandler,createSceneBackgroundBasicHandlers} from "./X3DWorldSceneBackground"
import {X3DApp} from "./X3DApp"
/**
 * Spell3dWorld
 */


export const XWorldStatus = {
    New: 0,
    Running: 1,
    Paused: 2
}

const CWORLD_STEP = 1.0/60.0 






export class X3DWorld {
    status: number;
    worldRowData: X3DApp;
    scene: THREE.Scene;
    clock: THREE.Clock;
    renderer: THREE.WebGLRenderer;
    frameNumber: number;
    raycaster: THREE.Raycaster;
    transformControls!: TransformControls
    private transformControlX3dObject!:X3DObject | null
    private transformControlsListenerAdded!: boolean;
    lights: {};
    x3dObjects: {[k:string]:X3DObject};
    defaultCamera: any;
    controls!: OrbitControls | PointerLockControls | FirstPersonControls;
    frameProcessTime!: number;
    audioListener!:THREE.AudioListener
    enablePhysics:boolean = true
    private _physics_world!:CANNON.World
    _log_rules:{
        _add:boolean,
        _remove:boolean,
        
    } = {
        _add:false,
        _remove:false
    }
    private _cannon_debug_renderer!: CannonDebugRenderer;

    private _bg_handlers:Record<string,X3DSceneBackgroundHandler>  = {}

    constructor(xworld:X3DApp) {
        
        // _xu.mergeDefaultsWithData(xworld, xWorldDefaults)

        this.status = XWorldStatus.New
        this.worldRowData = xworld
        this.scene = new THREE.Scene();
        this.clock = new THREE.Clock();
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);        
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        // this.renderer.setClearColor(0x000000, 1); // the default color
        this.renderer.setClearColor(0x000000, 0);
        this.frameNumber = 0
        this.raycaster = new THREE.Raycaster()
         
        
        this.lights = {}
        this.x3dObjects = {}
        this.defaultCamera = null
        
        
        this.enablePhysics = (xworld._physics) ? xworld._physics._active : false
        if(this.enablePhysics) {
            _xlog.log("Physics engine (Cannon.JS) is active")
            this._physics_world = new CANNON.World()
            
            // Tweak contact properties.
            // Contact stiffness - use to make softer/harder contacts
            this._physics_world.defaultContactMaterial.contactEquationStiffness = 1e9
            
            // Stabilization time in number of timesteps
            this._physics_world.defaultContactMaterial.contactEquationRelaxation = 4
            
            const solver = new CANNON.GSSolver()
            solver.iterations = 7
            solver.tolerance = 0.1
            this._physics_world.solver = new CANNON.SplitSolver(solver)
            // use this to test non-split solver
            // cWorld.solver = solver
            
            this._physics_world.gravity.set(0, -9.83, 0)
            
            this._physics_world.broadphase = new CANNON.NaiveBroadphase();

            if(xworld._physics._debug) {
                
                this._cannon_debug_renderer = new CannonDebugRenderer(this.scene,this._physics_world)
            }

        } else {
            _xlog.log("Physics engine is NOT Active")
        }
        X3DLoader.loadDraco()
        createSceneBackgroundBasicHandlers(this)




    }


    async run() {
        _xlog.log("Running 3d World")
        this.status = XWorldStatus.Running

        const xworld = this.worldRowData


        let idx = 0

        if(xworld._parent_element){
            const pe = <string>xworld._parent_element
            document.getElementById(pe)?.appendChild(this.renderer["domElement"]);
        }

        if(xworld._scene._helpers){
            Object.keys(xworld._scene._helpers).forEach( (helperIndex:string) => {
                if(xworld._scene._helpers && xworld._scene._helpers.hasOwnProperty(helperIndex)) {
                    let helper = xworld._scene._helpers[helperIndex]
                    if (helper._type == "axes" && helper._active) {
                        const  axesLength = (helper._params && helper._params["size"]) ?  helper._params["size"] : 5
                        
                        const axesHelper = new THREE.AxesHelper( axesLength );
                        this.scene.add( axesHelper )
                    }
                }
               
            })
        }
        if (xworld._scene._cameras) {
            const keys = Object.keys(xworld._scene._cameras)
            for (let i = 0; i < keys.length; ++i) {
                const camera = xworld._scene._cameras[keys[i]]
                // camera["name"] = keys[i]

                
                let cam = await X3D.create(camera)

                if(camera._helper) {
                    this.defaultCamera = cam.getThreeObject()
                    const helper = new THREE.CameraHelper( this.defaultCamera );
                    this.scene.add( helper );
                }
                else
                {
                    this.defaultCamera = await this.addX3DObject(cam)
                    
                }
                if(camera["_positional_audio_listener"]) {
                    // document.addEventListener("first-user-gesture",(e) => X3D.world.setAudioListener())
                    X3D.world?.setAudioListener()
                }
            }
        } else {
            _xlog.log("XWorld -> no Cameras defined")
        }

        //get lights
        if (xworld._scene._lights) {
            Object.keys(xworld._scene._lights).forEach(async (light_name) => {
                const lgt:any = (xworld._scene._lights) ? xworld._scene._lights[light_name] : null
                let light = await X3D.create(lgt)
                light.name = light_name
                await this.addX3DObject(light)
            })
        } else {
            _xlog.log("X3d world -> no Lights defined")
        }


        //get x3d-objects
        if(xworld._scene._objects) {

            Object.keys(xworld._scene._objects).forEach(async s3dobj => {
                let ob:any = (xworld._scene._objects) ? xworld._scene._objects[s3dobj] : null
                ob._name = s3dobj
                let obj = await X3D.create(ob)
                await this.addX3DObject(obj)
            })
        }
        //this.gui = new dat.GUI();
        if (xworld._scene._controls) {
            Object.keys(xworld._scene._controls).forEach(async ctrl => {
                let control = (xworld._scene._controls) ? <any>xworld._scene._controls[ctrl] :  null
                if (control._type == "orbit" && control._active) {
                    this.controls = new OrbitControls(this.defaultCamera, this.renderer["domElement"]);
                    if (control._params) {
                        Object.keys(control._params).forEach(key => (<any>this.controls)[key] = (<any>control._params)[key])
                    }
                    // this.controls.minPolarAngle = Math.PI/2.5
                    // this.controls.maxPolarAngle = Math.PI/1.5
                    // this.controls.minDistance = 2
                    // this.controls.maxDistance = 10
                    // this.controls.rotateSpeed = 0.3

                }
                else if (control._type == "pointer" && control._active) {
                    this.controls = new PointerLockControls(this.defaultCamera, this.renderer.domElement);
                }
                else if (control._type == "first-person" && control._active) {
                    this.controls = new FirstPersonControls(this.defaultCamera, this.renderer.domElement);
                    this.controls.activeLook = true
                    this.controls.lookSpeed = 0.3;
                    this.controls.movementSpeed = 50;
                    this.controls.lookVertical = true;
                    this.controls.constrainVertical = true;
                    this.controls.verticalMin = Math.PI / 2;
                    this.controls.verticalMax = 1.5;
                    this.controls.autoForward = false;
                }
                else if (control._type == "transform" && control._active) {
                    _xlog.log("Transforms controls enabled")
                    this.transformControls = new TransformControls(this.defaultCamera, this.renderer["domElement"])
                    this.transformControls.addEventListener("dragging-changed", (e) => {
                        (<any>this.controls)["enabled"] = ! e.value
                    })
                }
            })
        }
        
        if(xworld._scene._background) {
            await this.setSceneBackground(xworld._scene._background)
            
        }
      
        this.render();

    }

    addBackgroundHandler(type:string,handler:X3DSceneBackgroundHandler) {
        this._bg_handlers[type] = handler
    }

    async setSceneBackground(bg:X3DSceneBackground) {
        if(this._bg_handlers[bg._type]){
            this._bg_handlers[bg._type](this.scene,bg._params)
        }
    }


    
        

    setAudioListener(){
        _xlog.log("Setting camera audio listener")
        this.audioListener = new THREE.AudioListener()
        this.defaultCamera.add(this.audioListener)
    }

    onWindowResize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.defaultCamera.aspect = w / h;
        this.defaultCamera.updateProjectionMatrix();
        this.renderer["setSize"](w, h);
    }

    /**
     * Adds X3DObject to the world scene
     * @param {X3DObject}x3dObject - the X3DObject to add
     * @returns {X3DObject}X3DObject 
     */
    async addX3DObject(x3dObject:X3DObject) {
        if (x3dObject && !x3dObject._ignore_world) {
            if(this._log_rules._add) {_xlog.log("XWorld adding ", x3dObject._id)}

            this.x3dObjects[<string>x3dObject._id] = x3dObject
            const threeObject = await x3dObject.getThreeObject()
            
            this.scene.add(threeObject)

            // if physics engine is on and the X3DObject supports physics 
            // create new physics object (rigid body) and add it to the physics world
            if(this.enablePhysics && x3dObject._enable_physics) {
                const cannonObject = x3dObject.getCannonObject()
                if(cannonObject) {
                    this._physics_world.addBody(cannonObject)
                }
            }

            //call the X3DObject onMount function 
            x3dObject.onMount()
            return threeObject
        }
    }

    async removeX3DObject(objectId:string) {
        if(this._log_rules._remove) _xlog.log("XWorld Removing " + objectId)
        if(this.x3dObjects.hasOwnProperty(objectId)) {
            const x3dObject:X3DObject = <X3DObject>this.x3dObjects[objectId];
            (x3dObject.getThreeObject() as THREE.Object3D).removeFromParent()
            if(x3dObject._cannon_obj) this._physics_world.removeBody(x3dObject._cannon_obj)
            delete this.x3dObjects[objectId] 
        } else {
            if(this._log_rules._remove) _xlog.log("XWorld has no X3DObject => " + objectId)
        }
    
    }


    removeTransformControls(){
        this.transformControlX3dObject = null
        this.transformControls.detach()
    }

    setTransformControls(x3dObject:X3DObject) {
        this.transformControlX3dObject = x3dObject
        this.transformControls.attach(<THREE.Object3D>x3dObject.getThreeObject())
        if(!this.transformControlsListenerAdded) {
            this.transformControlsListenerAdded = true
            this.transformControls.addEventListener("objectChange",(e) => {
                if(this.transformControls.object){

                    const pos = this.transformControls.object.position
                    const rot = this.transformControls.object.rotation
                    const scale = this.transformControls.object.scale
                    this.transformControlX3dObject?.setPositionFromVector3(pos)
                    this.transformControlX3dObject?.setRotationFromEuler(rot)
                    this.transformControlX3dObject?.setScaleFromVector3(scale)
                }
    
            })
            
            _xem.on("xtransform-controls-state-changed",(data:any) => {            
                this.transformControls.setMode(<'translate' | 'rotate' | 'scale'>XData.variables["xtransform-controls-state"])
            })
            this.scene.add(this.transformControls)
        }
    }

    // being called on every frame 
    async onFrame(frameNumber:number) {

        if (this.status == XWorldStatus.Running) {
            this.clock.start()
            this.frameNumber = frameNumber
          
            this.render()
            if (this.controls && (<any>this.controls)["update"]) {
                
                (<any>this.controls)["update"](this.clock.getDelta());
                XData.variables["control-azimuth"] = (<any>this.controls)["getAzimuthalAngle"]()
                
                const controlTarget = XData.objects["control-target"]
                const cp = XData.objects["cam-path-pos"]

                if (controlTarget) {
                    // this.controls.target.set(tv)
                    this.defaultCamera.position.sub((<any>this.controls)["target"])
                    (<any>this.controls)["target"].copy(new THREE.Vector3(controlTarget.x,controlTarget.y,controlTarget.z))
                    this.defaultCamera.position.add(new THREE.Vector3(controlTarget.x,controlTarget.y,controlTarget.z))
                    delete XData.objects["control-target"]
                }
                else if (cp) {
                    // const tv = SpellData.objects["control-target"] 
                    // this.default_camera.position.sub(this.controls.target)
                    // this.controls.target.copy(cp)
                    this.defaultCamera.position.add(cp)
                    this.defaultCamera.lookAt(new THREE.Vector3(0,0,0))
                    // this.default_camera.rotation.set(SpellData.objects["cam-path-rotation"])
                }
            }

            if(this.enablePhysics && this._physics_world) {
                this._physics_world.step(CWORLD_STEP);
                if(this._cannon_debug_renderer) this._cannon_debug_renderer.update()
            }


            // TWEEN.update()
            this.clock.stop()
            this.frameProcessTime = this.clock.getElapsedTime()



        }
    }


    /**
     * Adds background to the scene
     * @param {THREE.Texture}bgTexture scene background
     */
    addBackground(bgTexture:THREE.Texture) {
        this.scene.background = bgTexture
    }

    //draw screen
    render() {
        if (this.defaultCamera) {
            this.renderer["render"](this.scene, this.defaultCamera);
        }

    }




}


export default X3DWorld