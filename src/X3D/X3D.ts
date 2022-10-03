/**
 * Xpell3d 
 * @description Real-time User Interface (UI) Engine for Javascript supporting devices & browsers
 * Wrapper for THREE.JS engine
 
*  change-log:
 *  - events
 */

import * as THREE from 'three'
import XModule from "../XModule"

import X3DObject, { IX3DObjectData } from "./X3DObject"
import { XEventManager, XEventList } from "../XEventManager"
import X3DPrimitives from "./X3DPrivitives"
import XData from "../XData";
import X3DWorld from './X3DWorld'
import {XLogger as _xlog} from '../XLogger'

const X3DEngineStatus = {
    New: 0,
    Ready: 1,
    Running: 2,
    Stopped: 3
}


/**
 * @class X3DModule - Xpell 3D Module
 */
export class X3DModule extends XModule {
    world: X3DWorld;
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


    /**
     * Loads XWorld from world data object
     * @param x3dWorldData World Data object
     * @param autoRun 
     */
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


    /**
     * Creates new X3DObject from data object
     * @param data - The data of the new object (JSON)
     * @return {X3DObject}
     * @override 
     */
    create(data) {

        if (this.om.hasObjectClass(data._type)) {
            const spell_class = this.om.getObjectClass(data._type)
            const obj = new spell_class(data)
            this.om.addObject(obj)
            return obj
        } else return null
    }


    /**
     * Removes X3DObject from X3D engine (including world and X3D object manager)
     * @param objectId th e_id of the X3D object to remove
     */
    async remove(objectId:string){
        const xobj = this.om.getObject(objectId)
        this.om.removeObject(objectId)
        await this.world.removeX3DObject(objectId)
        xobj.dispose()
        // console.log(xobj);
        
        //xobj.dispose()
    }

    //get spell3d object
    add(x3dObject:X3DObject) {
        this.om.addObject(x3dObject)
        this.world.addX3DObject(x3dObject)
    }

    addRaw(x3dJson:IX3DObjectData):X3DObject {
        const obj = X3D.create(x3dJson)
        X3D.add(obj)
        return obj
    }



    onWindowResize() {
        this.world.onWindowResize()
    }

    async start() {
        _xlog.log("Running 3d engine");
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
    }


    raycast(e) {
        const cam = this.world.defaultCamera;
        const mouse = { x: 0, y: 0 }

        const div = e.target


        if (div.tagName.toLowerCase() != this.world.renderer.domElement.tagName.toLowerCase()) return

        if (e.which != 1) return;


        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;


        this.world.raycaster.setFromCamera(mouse, cam);


        const intersects = this.world.raycaster.intersectObjects(this.world.scene.children);
        
        intersects.forEach((ints) => {

            if (ints?.object) {
                let obj = ints.object
                let found = false
                //search all child objects to find the root object
                while (obj.parent && !found) {
                    if (obj.parent.type == "Scene") {
                        
                        const x3dObject  = X3D.om.getObjectByName(obj.name)
                        if(x3dObject){
                            //console.log(x3dObject);
                            X3D.world.setTransformControls(x3dObject)
                        }
                        found = true
                    }
                    else {
                        obj = obj.parent
                    }
                }
            }
        })
        
    }

    set_world_control_target(cameraTarget) {

        if (this.world.controls) {
            //const cameraTarget = new THREE.Vector3(0.2,0.2,0)
            //this.world.controls.target = cameraTarget
            this.world.defaultCamera.position.set(cameraTarget.x, cameraTarget.y + 0.5, cameraTarget.z + 3)
        }
    }


 // document.addEventListener('keydown', (event) => {
        //     // const world = this.world;

        //     switch (event.code) {
        //         case 'KeyG':
        //             this.world.widgetControlls.setMode('translate')
        //             break
        //         case 'KeyR':
        //             this.world.widgetControlls.setMode('rotate')
        //             break
        //         case 'KeyS':
        //             this.world.widgetControlls.setMode('scale')
        //             break
        //     }
        // })


    /**
     * Add sky map (background to the world scene)
     * @param path - path to skymap
     * @param images - optional images array like ["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]
     */
    addEnvironmentMap(path, images?) {
       

        if(!images) images = ["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]
        const loader = new THREE.CubeTextureLoader();
        const environmentMap = loader
            .setPath(path)
            .load(images)

        this.world.addBackground(environmentMap)
    }

    // set_camera_path(data) {



    //     const pointsPath = new THREE.CatmullRomCurve3(this.world.cam_path, true);


    //     const material = new THREE.MeshBasicMaterial({
    //         color: 0x9132a8
    //     });

    //     const geometry = new THREE.BufferGeometry().setFromPoints(pointsPath.getPoints(50));


    //     const path_line = new THREE.Line(geometry, material);

    //     this.world.scene.add(path_line)

    //     XData.objects["cam-path"] = pointsPath

    // }

    // set_camera_path_point(data) {
    //     const po = XData.objects["joystick-vector"].clone() //push object
    //     if (!this.world.cam_path) {
    //         this.world.cam_path = []
    //     }
    //     this.world.cam_path.push(po)



    // }


    //   _add(scmd) {
    //     const oparams = scmd.params
    //     const so = this._create(oparams)
    //     this.engine.world.add_spell3d_object(so)
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
    //       world.controls.lock()
    //     }
    //   }

    //   _world_control_set_target(scmd) {
    //     const world = this.engine.world;
    //     if (world.controls) {
    //       const cameraTarget = new THREE.Vector3(0.2, 0.2, 0)
    //       world.controls.target = cameraTarget
    //     }
    //   }

    //   _load_gltf(scmd) {
    //     SpellGLTFLoader.load(scmd.params.file)
    //   }


    async onFrame(frameNumber) {
        if (this.status == X3DEngineStatus.Running) {
            this.world.onFrame(frameNumber)
        }

        super.onFrame(frameNumber) //bubble event to all the active objects in the object manager (om)
    }


}

let X3D = new X3DModule()

export default X3D
export { X3D, X3DEngineStatus, X3DObject }