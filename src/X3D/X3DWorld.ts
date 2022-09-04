

import * as THREE from 'three'
import * as CANNON from 'cannon-es'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'



import XUtils from '../XUtils';
import XData from '../XData';
import {XLogger as _xlog} from '../XLogger'
import X3D from "./X3D"



/**
 * Spell3dWorld
 */


export const XWorldStatus = {
    New: 0,
    Running: 1,
    Paused: 2
}

const CWORLD_STEP = 1.0/60.0 


const xWorldDefaults = {
    "html-tag-id": "body",
    renderer: {
        _type: "webgl",
        settings: { antialias: true, alpha: true }
    },
    scene: {
        lights: {
            "main": {
                _type: "ambient",
                color: 0x444477
            }
        },
        cameras: {
            "main": {
                _type: "perspective",
                fov: 20,
                ratio: window.innerWidth / window.innerHeight,
                clipping: {
                    far: 5000,
                    close: 0.01
                },
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            }
        }
    }

}



export class X3DWorld {
    status: number;
    worldRowData: any;
    scene: THREE.Scene;
    clock: THREE.Clock;
    renderer: THREE.WebGLRenderer;
    frameNumber: number;
    raycaster: THREE.Raycaster;
    widgetControls: TransformControls;
    lights: {};
    x3dObjects: {};
    defaultCamera: any;
    controls: OrbitControls | PointerLockControls | FirstPersonControls;
    frameProcessTime: number;
    audioListener:THREE.AudioListener
    enablePhysics:boolean = true
    cWorld:CANNON.World

    constructor(xworld) {

        XUtils.mergeDefaultsWithData(xworld, xWorldDefaults)

        this.status = XWorldStatus.New
        this.worldRowData = xworld
        this.scene = new THREE.Scene();
        this.clock = new THREE.Clock();
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.setClearColor(0x000000, 1); // the default color
        this.frameNumber = 0
        this.raycaster = new THREE.Raycaster()
         
        this.audioListener = new THREE.AudioListener()
        this.lights = {}
        this.x3dObjects = {}
        this.defaultCamera = null
        
        
        this.enablePhysics = (xworld.physics) ? xworld.physics._active : false
        if(this.enablePhysics) {
            _xlog.log("Physics engine is active")
            this.cWorld = new CANNON.World()
            
            // Tweak contact properties.
            // Contact stiffness - use to make softer/harder contacts
            this.cWorld.defaultContactMaterial.contactEquationStiffness = 1e9
            
            // Stabilization time in number of timesteps
            this.cWorld.defaultContactMaterial.contactEquationRelaxation = 4
            
            const solver = new CANNON.GSSolver()
            solver.iterations = 7
            solver.tolerance = 0.1
            this.cWorld.solver = new CANNON.SplitSolver(solver)
            // use this to test non-split solver
            // cWorld.solver = solver
            
            this.cWorld.gravity.set(0, -9.83, 0)
            
            this.cWorld.broadphase = new CANNON.NaiveBroadphase();
        } else {
            _xlog.log("Physics engine is NOT Active")
        }






    }


    async run() {
        _xlog.log("Running 3d World")
        this.status = XWorldStatus.Running

        const xworld = this.worldRowData

        //get cameras

        let idx = 0

        // this.default_camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.01, 5000 );
        // this.default_camera.position.set(0,0,55)
        // this.scene.add(this.default_camera)

        if(xworld.helper && xworld.helper.axes){
            const axesHelper = new THREE.AxesHelper( xworld.helper.axes );
            this.scene.add( axesHelper );
        }
        if (xworld.scene.cameras) {
            const keys = Object.keys(xworld.scene.cameras)
            for (let i = 0; i < keys.length; ++i) {
                const camera = xworld.scene.cameras[keys[i]]
                camera.name = keys[i]

                
                let cam = X3D.create(camera)

                if(camera._helper) {
                    this.defaultCamera = cam.getThreeObject()
                    const helper = new THREE.CameraHelper( this.defaultCamera );
                    this.scene.add( helper );
                }
                else
                {
                    this.defaultCamera = await this.addX3DObject(cam)
                    
                }
                if(camera["_add_audio_listener"]) {
                    this.defaultCamera.add(this.audioListener)
                }
            }
        } else {
            _xlog.log("XWorld -> no Cameras defined")
        }

        //get lights
        if (xworld.scene.lights) {
            Object.keys(xworld.scene.lights).forEach(light_name => {
                const lgt = xworld.scene.lights[light_name]
                let light = X3D.create(lgt)
                light.name = light_name
                
                if (lgt._helper && lgt._light == "directional") {
                    
                    const helper = new THREE.DirectionalLightHelper(light.getThreeObject())
                    this.scene.add(helper)
                }
                else {
                    this.addX3DObject(light)
                }
            })
        } else {
            _xlog.log("X3d world -> no Lights defined")
        }


        //get x3d-objects
        Object.keys(xworld["x3d-objects"]).forEach(async s3dobj => {
            let ob = xworld["x3d-objects"][s3dobj]
            ob.name = s3dobj
            let obj = X3D.create(ob)
            await this.addX3DObject(obj)
        })

        document.getElementById(xworld["html-tag-id"]).appendChild(this.renderer["domElement"]);

        //this.gui = new dat.GUI();

        // Helpers
        //this.scene.add(new THREE.AxesHelper(5))


        if (xworld.scene.controls) {
            Object.keys(xworld.scene.controls).forEach(async ctrl => {
                let control = xworld.scene.controls[ctrl]
                if (control._type == "orbit" && control._active) {
                    this.controls = new OrbitControls(this.defaultCamera, this.renderer["domElement"]);
                    if (control._params) {
                        Object.keys(control._params).forEach(key => this.controls[key] = control._params[key])
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
            })
        }



        this.render();

    }

    onWindowResize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.defaultCamera.aspect = w / h;
        this.defaultCamera.updateProjectionMatrix();
        this.renderer["setSize"](w, h);
    }

    async addX3DObject(x3dObject) {
        
        if (x3dObject && !x3dObject._ignore_world) {
            if(!x3dObject._is_light) {_xlog.log("World adding ", x3dObject._id)}

            this.x3dObjects[x3dObject.name] = x3dObject
            const tobj = x3dObject.getThreeObject()
            
            this.scene.add(tobj)
            if(this.enablePhysics ) {
                
                const cannonObject = x3dObject.getCannonObject()
                if(cannonObject) {
                    this.cWorld.addBody(cannonObject)
                }
            }

            return tobj
        }


    }



    create_transform_controls(obj) {
        this.widgetControls = new TransformControls(this.defaultCamera, this.renderer["domElement"])
        this.widgetControls.addEventListener("dragging-changed", (e) => {

            this.controls["enabled"] = ! e.value
        })
        this.widgetControls["attach"](obj)
        this.scene.add(this.widgetControls)
    }

    // being called on every frame 
    onFrame(frame_number) {

        if (this.status == XWorldStatus.Running) {
            this.clock.start()
            this.frameNumber = frame_number
            Object.keys(this.x3dObjects).forEach(obj_name => {

                const off = this.x3dObjects[obj_name].onFrame
                if (off && (typeof off === 'function')) {
                    this.x3dObjects[obj_name].onFrame(frame_number)
                }
            })
            //update object move
            this.render()
            if (this.controls && this.controls["update"]) {
                
                this.controls["update"](this.clock.getDelta());
                XData.variables["control-azimuth"] = this.controls["getAzimuthalAngle"]()
                
                const controlTarget = XData.objects["control-target"]
                const cp = XData.objects["cam-path-pos"]

                if (controlTarget) {
                    // this.controls.target.set(tv)
                    this.defaultCamera.position.sub(this.controls["target"])
                    this.controls["target"].copy(new THREE.Vector3(controlTarget.x,controlTarget.y,controlTarget.z))
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

            if(this.enablePhysics && this.cWorld) {
                this.cWorld.step(CWORLD_STEP);
            }


            this.clock.stop()
            this.frameProcessTime = this.clock.getElapsedTime()



        }
    }


    /**
     * Adds background to the scene
     * @param {THREE.Texture}environmentMap scene background
     */
    addBackground(environmentMap:THREE.Texture) {
        this.scene.background = environmentMap
    }

    //draw screen
    render() {
        if (this.defaultCamera) {
            this.renderer["render"](this.scene, this.defaultCamera);
        }

    }




}


export default X3DWorld