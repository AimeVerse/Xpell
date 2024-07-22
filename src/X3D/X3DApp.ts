/**
 * X3D Application Template
 */


import { XCameraData, XLightData } from './X3DCoreObjects'
import { IX3DObjectData } from "./X3DObject"
import { X3DSceneBackground, X3DSceneBackgroundTypes } from "./X3DWorldSceneBackground"


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
    size: number
}
/**
 * X3DHelper Data 
 */

export type XHelperData<Type> = {
    _type: X3DHelpers, //helper type
    _active: boolean,
    _params?: {
        [Property in keyof Type]: Type[Property]
    }
}


export type X3DApp = {
    _parent_element: string, //id of the 3d player html tag 
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
        _raycast?: boolean
    },

}

export const X3DDefaultApp: X3DApp = {
    "_parent_element": "x3d-player",
    _physics: {
        _engine: "cannon.js",
        _active: false,
        _debug: true
    },
    _scene: {
        _raycast: false,
        _helpers: {
            "axes": {
                _type: "axes",
                _active: false,
                _params: { size: 5 }
            }
        },
        _lights: {
            "main": {
                _id: "ambient-light",
                _type: "light",
                _light: "ambient",
                _color: 0xffffff,
                _intensity: 0.5,
            },



        },
        _cameras: {
            "main-cam": {
                _id: "main-cam",
                _type: "camera",
                _camera: "perspective",
                _position: { x: 0, y: 2, z: 50 },
                _rotation: { x: 0, y: 0, z: 0 },
                _disable_frame_3d_state: true,
                _3d_set_once: true,
                _positional_audio_listener: false,
                _fov: 50,
                _ratio: window.innerWidth / window.innerHeight,
                _far: 1000,
                _close: 0.01,
            }
        },
        _controls: {
            "cam-control": {
                _type: "orbit",
                _active: false,
                _params: {
                    enableDamping: true,
                    minPolarAngle: Math.PI / 6,
                    maxPolarAngle: Math.PI / 1.8,
                    minZoom: 1,
                    minDistance: 1,
                    maxDistance: 16,
                    rotateSpeed: 0.5,
                    autoRotateSpeed: 1,                
                }
            },
            "transform": {
                _type: "transform",
                _active: false
            },
        },
        _objects: {

        },
        _background: {
            _type: X3DSceneBackgroundTypes._solid_color,
            _params: {
                _color1: "black",
            }
        }
    },
}

export class X3DAppGenerator {
    static getDefaultApp(orbitControls:boolean = true,bgColor:string="black",enablePhysics?:boolean): X3DApp {
        //deep clone the default app template
        const tmpApp = JSON.parse(JSON.stringify(X3DDefaultApp))
        //update the orbit controls
        tmpApp._scene._controls["cam-control"]._active = orbitControls
        //update the background color
        tmpApp._scene._background._params._color = bgColor
        //update the physics engine
        tmpApp._physics._active = enablePhysics
        return tmpApp as X3DApp
    }
}












            // floor: {
            //     _id: "floor",
            //     _type: "circle",
            //     // _on_mount: "hide-me",
            //     _nano_commands: {
            //         "hide-me": (xcmd, xobj) => {
            //             xobj.getThreeObject().visible = false
            //         }
            //     },
            //     // visible: false,
            //     // layers: { enable: 1 },
            //     _geometry: {
            //         // _type: "plane-geometry",
            //         radius: 5,
            //         segments: 4,
            //         width: 10,
            //         height: 10,
            //         widthSegments: 50,
            //         heightSegments: 50,

            //     },
            //     _material: {
            //         _type: "standard-material",
            //         color: "#ffff00",
            //         side: 2,
            //         // transparent: true,
            //         // opacity: 1,
            //         wireframe: false
            //     },
            //     _position: { x: 0, y: -2, z: 0 },
            //     _rotation: { x: Math.PI / 2, y: 0, z: 0 },
            //     // _enable_physics: true,
            //     // _mass: 0,
            //     _on_frame: "spin z:0.01"
            //     //"rotation  z:--0.01"

            //     // (obj,f) => {
            //     //     //rotate the object on the y axis
            //     //     obj._rotation.z += 0.001
            //     // }


            //     // "rotation x:0.01 y:++0.01 z:--0.01",

            // },
            // "robot": {
            //     _id: "robot",
            //     _type: "xmodel",
            //     _model_url: "https://cdn.aimeverse.com/u/cakering-level",
            //     // _load_animations: true,
            //     _auto_play_animation: true,
            // },

            // "pole": {
            //     _type: "cylinder",
            //     _geometry: {


            //         _type: "cylinder-geometry",
            //         radiusTop: 0.5,
            //         radiusBottom: 0.5,
            //         height: 6,
            //         radialSegments: 32,
            //         heightSegments: 1,
            //         openEnded: false
            //     },
            //     _material: {
            //         _type: "standard-material",
            //         color: 0xff0000,
            //         side: 2
            //     },
            //     _position: {x: 0, y: 3, z: 0},
            //     _rotation: {x: 0, y: 0, z: 0},
            //     _scale: {x: 1, y: 1, z: 1},
            //     _id: "cylinder-1"
            // },

            // "ball": {
            //     _id: "ball",
            //     _type: "dyna-sphere",
            //     _radius: 1,
            //     _points: 1280,
            //     _position: { x: 0, y: 2, z: 0 },
            //     _rotation: { x: 0, y: 0, z: 0 },


            //     _on_frame: "spin y:0.01",

            // },
        