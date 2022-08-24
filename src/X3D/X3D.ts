/**
 * Xpell3d 
 * @description Universal User Interface (UI) Engine for Javascript supporting devices & browsers
 * Wrapper for THREE.JS engine
 
*  change-log:
 *  - events
 */

//import SpellUI from "../ui/spell-ui.js"
import * as THREE from 'three'
import XModule from "../XModule"
import XObjectManager from "../XObjectManager";
import XUtils from "../XUtils";

import X3DObject from "./X3DObject"
import { XEventManager, XEventList } from "../XEventManager"
// import Spell3dWorld from "./spell3d-world"
import X3DPrimitives from "./X3DPrivitives"
// import SpellGLTFLoader from "./s3d-objects/spell-gltf"
import XData from "../XData";
import X3DWorld from './X3DWorld'

const X3DEngineStatus = {
    New: 0,
    Ready: 1,
    Running: 2,
    Stopped: 3
}

class X3DEngine {



}


export class X3DModule extends XModule {
    world: any;
    x3dObjects: {};
    status: number;
    
    constructor() {
        super({ name: "x3d" })
        this.importObjectPack(X3DPrimitives)

        //SpellObjects.load(this)
        XData.objects["x3d-om"] = this.om
        this.world = null
        this.x3dObjects = {}
        XEventManager.fire(XEventList.engine3d_init)
    }


    async loadWorld(x3dWorldData, autoRun = true) {

        this.world = new X3DWorld(x3dWorldData)
        this.status = X3DEngineStatus.Ready



        window.addEventListener('resize', () => {
            X3D.onWindowResize()
        }, false);

        if (autoRun) {
            await this.start()
        }
    }


    //get spell3d object
    create(data) {

        if (this.om.hasObjectClass(data._type)) {
            const spell_class = this.om.getObjectClass(data._type)
            const obj = new spell_class(data)
            this.om.addObject(obj)
            return obj
        } else return null
    }

    //get spell3d object
    add(x3dObject) {
        this.world.addX3DObject(x3dObject)
        this.om.addObject(x3dObject)
    }



    onWindowResize() {
        this.world.onWindowResize()
    }

    async start() {
        console.log("Running 3d engine");
        this.status = X3DEngineStatus.Running
        await this.world.run()
        XEventManager.fire("spell3d-world-load")
    }

    get_objects_available() {
        const rejected_words = ["material", "geometry", "mesh"];
        const obj_names = Object.keys(X3DPrimitives.getObjects());
        let shapes_list = [];

        shapes_list = obj_names.filter((el) => !rejected_words.includes(el));
        return shapes_list
        // console.log(shapes_list);
    }


    raycast(e) {
        // const cam = this.world.default_camera;
        // const mouse = { x: 0, y: 0 }

        // const div = e.target


        // if (div.tagName.toLowerCase() != this.world.renderer.domElement.tagName.toLowerCase()) return

        // if (e.which != 1) return;


        // mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        // mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;


        // this.world.raycaster.setFromCamera(mouse, cam);


        // const intersects = this.world.raycaster.intersectObjects(this.world.scene.children);
        // if (intersects[0]?.object) {
        //     //to-do add op for 
        //     let obj = intersects[0].object
        //     if (intersects[0].object.parent.parent) {
        //         obj = intersects[0].object.parent
        //     }

        //     document.getElementById("spell-command").value = obj.name + " "
        //     //this.set_world_control_target(intersects[0].object.position)
        // }
    }

    set_world_control_target(cameraTarget) {

        if (this.world.controls) {
            //console.log('lock')
            //const cameraTarget = new THREE.Vector3(0.2,0.2,0)
            //this.world.controls.target = cameraTarget
            this.world.default_camera.position.set(cameraTarget.x, cameraTarget.y + 0.5, cameraTarget.z + 3)
        }
    }

    // To Move
    // Add environment_map
    add_environment_map(path, images) {
        document.addEventListener('keydown', (event) => {
            // const world = this.world;

            switch (event.code) {
                case 'KeyG':
                    this.world.widgetControlls.setMode('translate')
                    console.log("trans");
                    break
                case 'KeyR':
                    this.world.widgetControlls.setMode('rotate')
                    console.log("rota");
                    break
                case 'KeyS':
                    this.world.widgetControlls.setMode('scale')
                    console.log("scale");
                    break
            }
        })




        const loader = new THREE.CubeTextureLoader();
        const environmentMap = loader
            .setPath(path)
            .load(images)
        // console.log(environmentMap);

        // Add Fog
        // const color = 0xeeaaaa;
        // const near = 10;
        // const far = 100;
        // this.world.scene.fog = new THREE.Fog(color, near, far);

        this.world.scene.background = environmentMap;
    }

    set_camera_path(data) {
        console.log("building path");



        const pointsPath = new THREE.CatmullRomCurve3(this.world.cam_path, true);
        console.log(pointsPath);


        const material = new THREE.MeshBasicMaterial({
            color: 0x9132a8
        });

        const geometry = new THREE.BufferGeometry().setFromPoints(pointsPath.getPoints(50));


        const path_line = new THREE.Line(geometry, material);

        this.world.scene.add(path_line)

        XData.objects["cam-path"] = pointsPath
        //console.log(path_line);

    }

    set_camera_path_point(data) {
        const po = XData.objects["joystick-vector"].clone() //push object
        if (!this.world.cam_path) {
            this.world.cam_path = []
        }
        this.world.cam_path.push(po)



    }


    //   _add(scmd) {
    //     const oparams = scmd.params
    //     const so = this._create(oparams)
    //     this.engine.world.add_spell3d_object(so)
    //     //console.log(so)
    //   }

    //   _move(scmd) {
    //     const world = this.engine.world;
    //     if (world.controls) {
    //       if (scmd.params.dir == 'r') {
    //         world.controls.moveRight(scmd.params.step)
    //       }
    //       else if (scmd.params.dir == 'f') {
    //         world.controls.moveForward(scmd.params.step)
    //       }
    //     }
    //   }


    //   _world_lock_controls(scmd) {
    //     const world = this.engine.world;
    //     if (world.controls) {
    //       //console.log('lock')
    //       world.controls.lock()
    //     }
    //   }

    //   _world_control_set_target(scmd) {
    //     const world = this.engine.world;
    //     if (world.controls) {
    //       //console.log('lock')
    //       const cameraTarget = new THREE.Vector3(0.2, 0.2, 0)
    //       world.controls.target = cameraTarget
    //     }
    //   }

    //   _load_gltf(scmd) {
    //     //console.log(scmd.params.file)
    //     SpellGLTFLoader.load(scmd.params.file)
    //   }


    async onFrame(frameNumber) {
        if (this.status == X3DEngineStatus.Running) {
            //console.log("running frame " + this.frame_number);
            this.world.onFrame(frameNumber)
        }

        super.onFrame(frameNumber) //bubble event to all the active objects in the object manager (om)
        //console.log("frame " + frame_number)
    }


}

let X3D = new X3DModule()

export default X3D
export { X3D, X3DEngineStatus, X3DObject }