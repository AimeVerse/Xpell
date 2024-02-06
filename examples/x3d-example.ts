
import * as THREE from 'three'
import { _x,IXObjectData, XObjectPack,XData } from "xpell-core"
// import { Xpell as _x } from "./src/Xpell"
// import { XData } from "./src/XData"
import { X3D, X3DApp, X3DObject } from "./src/X3D/X3D"
import { XCameraData,XLightData } from './src/X3D/X3DCoreObjects'
import { XLabel } from "./src/XUI/XUICoreObjects"
import { X3DLoader as _loader, } from "./src/X3D/X3DLoader"

import { XUI } from "./src/XUI/XUI"
import { XUIObject } from "./src/XUI/XUIObject"
import XJoystick from "./src/XUI/XJoystick"
import { TopBar } from "./src/XUI/XDashboard"
import { XEditor, XTransformControls } from "./src/XUI/XEditor"


//display Xpell engine info
_x.verbose()

_x.info()

//load Xpell UI (XUI) Module
// _x.loadModule(XUI)
_x.loadModule(X3D)
// XUI.importObject("joystick", XJoystick)
// XUI.importObjectPack(XEditor)

_x.start()




export const world:X3DApp = {
    _parent_element: "x3d-player",
    _physics: {
        _engine: "cannon.js",
        _active: true,
        _debug: true
    },
    _scene: {
        _helpers:{
            "axes":{
                _type:"axes",
                _active:false,
                _params:{size:5}
            }
        },
        _lights: {
            "main":{
                _type: "light",
                _light:"ambient"
            },
            "p1": {
                _type: "light",
                _light: "directional",
                color: "#aaffff",
                intensity: 1,
                _position: { x: 0, y: 2, z: 0 },

            }

        },
        _cameras: {
            "main-cam": {
                _id: "main-cam",
                _type: "camera",
                _camera:"perspective",
                _position: { x: 0, y: 1.75, z: 10 },
                _rotation: { x: 0, y: 0, z: 0 },
                _disable_frame_3d_state: true,
                _3d_set_once: true,
                fov: 30,
                ratio: window.innerWidth / window.innerHeight,
                far: 3000,
                close: 0.01
                //_positio_audio_listener: false
            }
        },
        _controls: {
            "cam-control": {
                _type: "orbit",
                _active: true,
                _params: {
                    enableDamping: true,
                    minPolarAngle: Math.PI / 2.5,
                    maxPolarAngle: Math.PI / 1.5,
                    minZoom: 1,
                    minDistance: 1,
                    maxDistance: 30,
                    rotateSpeed: 0.3,
                    
                }
            },
            "transform": {
                _type:"transform",
                _active: true
            },

        },
        _objects: {
                "pointer": {
                    _type: "sphere",
                    _id: "pointer",
                    _geometry: {
                        _type: "sphere-geometry",
                        widthSegments: 8,
                        heightSegments: 8,
                        radius: 0.01
                    },
                    _material: {
                        _type: "basic-material",
                        color: 0xff99ff,
                        side: 1,
                        // roughness: 0.5,
                    },
                    _position: { x: 0, y: 0.75, z: 0 },
                    _rotation: { x: 0, y: 0, z: 0 },
                    // castShadow: true,
                    _on_frame: `follow-joystick`
                },
                floor: {
                    _id: "floor",
                    _type: "plane",
                    _geometry: {
                        _type: "plane-geometry",
                        width: 10,
                        height: 10,
                        widthSegments: 100,
                        heightSegments: 100,

                    },
                    _material: {
                        _type: "standard-material",
                        color: "#ffffff",
                        side: 2,
                        roughness:0.2,
                        _normal_map:{texture:"/public/nmap.png"}
                        // wireframe: true
                    },
                    _position: { x: 0, y: -0.01, z: 0 },
                    _rotation: { x: Math.PI / 2, y: 0, z: 0 },
                    _enable_physics: true,
                    _collider:"box",
                    _mass: 0
                },
                box: {
                    _id: "box",
                    _type: "box",
                    _geometry: {
                        width: 1,
                        height: 1,
                        depth:1

                    },
                    _material: {
                        _type: "standard-material",
                        color: "#ffffff",
                        side: 2,
                        roughness:0.2,
                        // wireframe: true
                    },
                    _position: { x: 0, y: 2, z: 0 },
                    _rotation: { x: Math.PI / 2, y: 0, z: 0 },
                    _enable_physics: false,
                    _collider:"box",
                    _mass: 0
                },
                cir: {
                    _id: "cir",
                    _type: "circle",
                    _geometry: {
                        radius: 1,
                        segments: 24,

                    },
                    _material: {
                        _type: "standard-material",
                        color: "#ffffff",
                        side: 2,
                        roughness:0.2,
                        // wireframe: true
                    },
                    _position: { x: -1, y: 1, z: 0 },
                    _rotation: { x: Math.PI / 2, y: 0, z: 0 },
                    _enable_physics: false,
                    _collider:"box",
                    _mass: 0
                }



            }
    },
    
}




await X3D.loadApp(world)

