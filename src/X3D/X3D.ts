/**
 * Xpell3d 
 * @description Real-time User Interface (UI) Engine for Javascript supporting devices & browsers
 * Wrapper for THREE.JS engine
 
*  change-log:
 *  - events
 */

import * as THREE from 'three'

import { _xlog ,_xem,IXData,XData,XModule,XModuleData, XObject, XObjectData} from '../Core/Xpell';
// import { _xem } from '../XEM/XEventManager';
// import XModule from "../XModule"
// import { XEventManager, XEventList } from "../XEventManager"
// import  from "../XData";
// import { XLogger as _xlog } from '../XLogger'

import X3DObject, { IX3DObjectData } from "./X3DObject"
import { XCameraData, XLightData } from './X3DCoreObjects'
import X3DPrimitives from "./X3DPrimitives"
import X3DWorld from './X3DWorld'
import { X3DLoader } from './X3DLoader'
import { X3DSceneBackground } from './X3DWorldSceneBackground'
// import X3DNPC from './X3DNPC'
// import XObject from '../core/XObject';



const X3DEngineStatus = {
    New: 0,
    Ready: 1,
    Running: 2,
    Stopped: 3
}

export type X3DSceneControl = {
    _type: "orbit" | "pointer" | "first-person" | "transform",
    _active: boolean,
    _params?: {
        [k: string]: any
    }
}
export type X3DPhysicsEngines = "cannon.js"
export type X3DHelpers = "axes" | "skeleton"

/**
 * X3DHelper Data 
 */
export type X3AxesHelper = {
    size:number
}
/**
 * X3DHelper Data 
 */

export type XHelperData<Type> ={
    _type: X3DHelpers, //helper type
    _active: boolean, 
    _params?: {
        [Property in keyof Type]: Type[Property]
    }
}

export type X3DApp = {
    _parent_element: string , //id of the 3d player html tag 
    _physics: {
        _engine?: X3DPhysicsEngines,
        _active: boolean,
        _debug?: boolean //enable engine debugging by showing the cannon body shape
    },
    _scene: {
        _helpers?: {
            [k: string]: XHelperData<X3AxesHelper>
        },
        _lights?: {
            [k: string]: XLightData
        },
        _cameras?: {
            [k: string]: XCameraData
        },
        _background?: X3DSceneBackground
        _controls?: {
            [k: string]: X3DSceneControl
        }
        _objects?: {
            [k: string]: IX3DObjectData
        }
        _raycast?:boolean
    },

}


/**
 * @class X3DModule - Xpell 3D Module
 */
export class X3DModule extends XModule {
    world!: X3DWorld ;
    x3dObjects: {};
    status!: number;
    

    _raycast_event = "click"
    

    constructor() {
        super({ _name: "x3d" })
        this.importObjectPack(X3DPrimitives)

        //SpellObjects.load(this)
        XData.objects["x3d-om"] = this.om
        //this.world = null
        this.x3dObjects = {}
        _xem.fire("x3d-init")
        
    }


    /**
     * Loads XWorld from world data object
     * @param x3dWorldData World Data object
     * @param autoRun - start world running automatically 
     * @deprecated - use loadApp function instead
     */
    async loadWorld(x3dWorldData:X3DApp, autoRun:boolean = true) {

        await this.loadApp(x3dWorldData)
    }


    async loadApp(x3dApp:X3DApp, autoRun = true) {
        this.world = new X3DWorld(x3dApp)
        this.status = X3DEngineStatus.Ready
        if(x3dApp._scene._raycast) this.enableRaycast()
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
    async create(data:IX3DObjectData ) {

        // if (this.om.hasObjectClass(<string>data._type)) {
            if (this._log_rules.createObject) {
                _xlog.log("X3D | creating " );
            }

        //     const xclass = this.om.getObjectClass(<string>data._type)
        //     const obj = new xclass(data)
        //     this.om.addObject(obj)
        //     return obj
        // } else return null

        
        return await super.create(<XObjectData>data)
    }


    /**
     * Removes X3DObject from X3D engine (including world and X3D object manager)
     * @param objectId th e_id of the X3D object to remove
     */
    async remove(objectId: string) {
        if (this._log_rules.removeObject) {
            _xlog.log("X3D remove object " + objectId)
        }
        await this.world?.removeX3DObject(objectId)
        //super class (XModule) will call dispose on the X3DObject
        super.remove(objectId)
    }

    /**
     * Add X3DObject to the object manager and world
     * @param x3dObject X3DObject 
     */
    async add(x3dObject: X3DObject) {
        //this.om.addObject(<any>x3dObject)
        this._object_manager.addObject(<any>x3dObject)
        await this.world?.addX3DObject(x3dObject)
    }

    /**
     * Add X3DObject to the object manager and world
     * @param x3dObject - The X3DObject to add
     * 
     */
    async loadObject(data: IX3DObjectData) {
        const obj = await this.create(data)
        await this.world.addX3DObject(obj)
        return obj
    }

    /**
     * Creates new X3DObject from data and add it to the world 
     * @param <IX3DObjectData> data  - the object to create data (json)
     * @returns 
     */
    async addRaw(data: IX3DObjectData): Promise<X3DObject> {
        const obj = await X3D.create(data)
        X3D.add(obj)
        return obj
    }



    onWindowResize() {
        this.world?.onWindowResize()
    }

    async start() {
        _xlog.log("Running 3d engine");
        this.status = X3DEngineStatus.Running
        await this.world?.run()
        _xem.fire("x3d-world-load")
    }

    // get_objects_available() {
    //     const rejected_words = ["material", "geometry", "mesh"];
    //     const obj_names = Object.keys(X3DPrimitives.getObjects());
    //     let shapes_list = [];

    //     shapes_list = obj_names.filter((el) => !rejected_words.includes(el));
    //     return shapes_list
    // }


    enableRaycast(event = "click") {
        this._raycast_event = event
        document.addEventListener(event, this.raycast, false);
    }


    disableRaycast() {
        document.removeEventListener(this._raycast_event, this.raycast, false);
    }

    raycast(e:any) {
        
        const cam = X3D.world?.defaultCamera;
        const mouse = { x: 0, y: 0 }
        
        const div = e.target
        
        // console.log("div",e.target,div.tagName.toLowerCase() == X3D.world.renderer.domElement.tagName.toLowerCase());

        if (div.tagName.toLowerCase() != X3D.world?.renderer.domElement.tagName.toLowerCase()) return
        // console.log("div",div);

        if (e.which != 1) return;

        

        mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
        mouse.y = - (e.clientY / window.innerHeight) * 2 + 1;


        X3D.world?.raycaster.setFromCamera(mouse, cam);


        const intersects = X3D.world?.raycaster.intersectObjects(X3D.world.scene.children);

        //array of all intersected x3d objects in the top level (parent.type = scene)
        const x3dIntersectedObjects:Record<string,X3DObject> = {}
        intersects?.forEach((ints) => {

            if (ints?.object) {
                let obj = ints.object
                // console.log("obj",obj.name);
                
                let found = false
                //search all child objects to find the root object
                while (obj.parent && !found) {
                    if (obj.parent.type == "Scene") {

                        const x3dObject:X3DObject = <any>X3D.getObject(obj.name)
                        x3dIntersectedObjects[x3dObject._id] = x3dObject
                        found = true
                    }
                    else {
                        obj = obj.parent
                    }
                }
            }
        })

        Object.keys(x3dIntersectedObjects).forEach((key) => {
            x3dIntersectedObjects[key].onClick(e)
        })

        

    }

    // set_world_control_target(cameraTarget:THREE.Vector3) {

    //     if (this.world?.controls) {
    //         //const cameraTarget = new THREE.Vector3(0.2,0.2,0)
    //         //this.world.controls.target = cameraTarget
    //         this.world.defaultCamera.position.set(cameraTarget.x, cameraTarget.y + 0.5, cameraTarget.z + 3)
    //     }
    // }


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
    addEnvironmentMap(path:string, images?:string[]) {


        if (!images) images = ["px.jpg", "nx.jpg", "py.jpg", "ny.jpg", "pz.jpg", "nz.jpg"]
        const loader = new THREE.CubeTextureLoader();
        const environmentMap = loader
            .setPath(path)
            .load(images)

        this.world?.addBackground(environmentMap)
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


    async onFrame(frameNumber:number) {
        if (this.status == X3DEngineStatus.Running) {
            this.world?.onFrame(frameNumber)
        }

        super.onFrame(frameNumber) //bubble event to all the active objects in the object manager (om)
    }


}

const X3D = new X3DModule()

export default X3D
export { X3D, X3DEngineStatus, X3DObject }