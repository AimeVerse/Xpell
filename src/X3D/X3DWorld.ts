

import * as THREE from 'three'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'



import XUtils from '../XUtils';
import XData from '../XData';
import X3D from "./X3D"



/**
 * Spell3dWorld
 */


export const XWorldStatus = {
    New: 0,
    Running: 1,
    Paused: 2
}



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







    }


    async run() {
        console.log("Running 3d World")
        this.status = XWorldStatus.Running

        const xworld = this.worldRowData

        //get cameras

        let idx = 0

        // this.default_camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.01, 5000 );
        // this.default_camera.position.set(0,0,55)
        // this.scene.add(this.default_camera)

        if (xworld.scene.cameras) {
            const keys = Object.keys(xworld.scene.cameras)
            for (let i = 0; i < keys.length; ++i) {
                const camera = xworld.scene.cameras[keys[i]]
                camera.name = keys[i]

                let cam = X3D.create(camera)

                //console.log(cam._position);
                
                this.defaultCamera = await this.addX3DObject(cam)
                //cam.set3DState()
                //console.log(this.defaultCamera.position);
                
                if(camera["_add_audio_listener"]) {
                    this.defaultCamera.add(this.audioListener)
                }



            }
        } else {
            console.log("XWorld -> no Cameras defined")
        }

        //get lights
        if (xworld.scene.lights) {
            Object.keys(xworld.scene.lights).forEach(light_name => {
                const lgt = xworld.scene.lights[light_name]
                let light = X3D.create(lgt)
                light.name = light_name
                console.log(lgt);
                
                if (lgt._helper && lgt._light == "directional") {
                    console.log("helper " + light_name);
                    
                    const helper = new THREE.DirectionalLightHelper(light)
                    this.scene.add(helper)
                }
                else {
                    this.addX3DObject(light)
                }
            })
        } else {
            console.log("X3d world -> no Lights defined")
        }


        //get x3d-objects
        Object.keys(xworld["x3d-objects"]).forEach(async s3dobj => {
            let ob = xworld["x3d-objects"][s3dobj]
            ob.name = s3dobj
            let obj = X3D.create(ob)
            await this.addX3DObject(obj)
        })

        //console.log(xworld)
        document.getElementById(xworld["html-tag-id"]).appendChild(this.renderer["domElement"]);

        //this.gui = new dat.GUI();

        // Helpers
        //this.scene.add(new THREE.AxesHelper(5))


        if (xworld.scene.controls) {
            Object.keys(xworld.scene.controls).forEach(async ctrl => {
                let control = xworld.scene.controls[ctrl]
                if (control._type == "orbit" && control._active) {
                    this.controls = new OrbitControls(this.defaultCamera, this.renderer["domElement"]);
                    if (control._damp) {
                        this.controls.enableDamping = true;

                    }


                    if (control._params) {
                        Object.keys(control._params).forEach(key => {
                            this.controls[key] = control._params[key]
                        })
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

    async addX3DObject(obj) {

        if (obj && !obj._ignore_world) {
            if(!obj._is_light) {console.log("World adding ", obj._id)}

            this.x3dObjects[obj.name] = obj
            const tobj = await obj.getThreeObject()

            //console.log(tobj.name,tobj.position,obj._position);
            
            
            this.scene.add(tobj)

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
                
                const tv = XData.objects["control-target"]
                const cp = XData.objects["cam-path-pos"]

                if (tv) {
                    //this.controls.target.set(tv)
                    this.defaultCamera.position.sub(this.controls["target"])
                    this.controls["target"].copy(tv)
                    this.defaultCamera.position.add(tv)
                    delete XData.objects["control-target"]
                }
                else if (cp) {
                    //const tv = SpellData.objects["control-target"] 
                    // console.log(this.controls.target)
                    // this.default_camera.position.sub(this.controls.target)
                    // //console.log(cp);
                    // this.controls.target.copy(cp)
                    this.defaultCamera.position.add(cp)
                    // console.log(SpellData.objects["cam-path-rotation"]);
                    this.defaultCamera.lookAt(new THREE.Vector3(0,0,0))
                    // this.default_camera.rotation.set(SpellData.objects["cam-path-rotation"])
                }
            }




            this.clock.stop()
            this.frameProcessTime = this.clock.getElapsedTime()

            //console.log(this.frame_process_time)


        }
    }

    //draw screen
    render() {
        if (this.defaultCamera) {
            this.renderer["render"](this.scene, this.defaultCamera);
        }

    }




}


export default X3DWorld