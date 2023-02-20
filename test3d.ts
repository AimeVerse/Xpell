
import * as THREE from 'three'
import { _x, IXObjectData, XObjectPack, XData } from "xpell-core"
// import { Xpell as _x } from "./src/Xpell"
// import { XData } from "./src/XData"
import { X3D, X3DApp, X3DObject } from "./src/X3D/X3D"
import { XCameraData, XLightData } from './src/X3D/X3DCoreObjects'
import { XLabel } from "./src/XUI/XUICoreObjects"
import { X3DLoader as _loader, } from "./src/X3D/X3DLoader"

import { XUI } from "./src/XUI/XUI"
import { XUIObject } from "./src/XUI/XUIObject"
import XJoystick from "./src/XUI/XJoystick"
import { TopBar } from "./src/XUI/XDashboard"
import { XEditor, XTransformControls } from "./src/XUI/XEditor"


// export const world: X3DApp = {
//     _parent_element: "x3d-player",
//     _physics: {
//         _engine: "cannon.js",
//         _active: true,
//         _debug: true
//     },
//     _scene: {
//         _helpers: {
//             "axes": {
//                 _type: "axes",
//                 _active: false,
//                 _params: { size: 5 }
//             }
//         },
//         _lights: {
//             "main": {
//                 _type: "light",
//                 _light: "ambient"
//             },
//             "p1": {
//                 _type: "light",
//                 _light: "directional",
//                 color: "#aaffff",
//                 intensity: 1,
//                 _position: { x: 0, y: 2, z: 0 },

//             }

//         },
//         _cameras: {
//             "main-cam": {
//                 _id: "main-cam",
//                 _type: "camera",
//                 _camera: "perspective",
//                 _position: { x: 0, y: 1.75, z: 10 },
//                 _rotation: { x: 0, y: 0, z: 0 },
//                 _disable_frame_3d_state: true,
//                 _3d_set_once: true,
//                 fov: 30,
//                 ratio: window.innerWidth / window.innerHeight,
//                 far: 3000,
//                 close: 0.01
//                 //_positio_audio_listener: false
//             }
//         },
//         _controls: {
//             "cam-control": {
//                 _type: "orbit",
//                 _active: true,
//                 _params: {
//                     enableDamping: true,
//                     minPolarAngle: Math.PI / 2.5,
//                     maxPolarAngle: Math.PI / 1.5,
//                     minZoom: 1,
//                     minDistance: 1,
//                     maxDistance: 30,
//                     rotateSpeed: 0.3,

//                 }
//             },
//             "transform": {
//                 _type: "transform",
//                 _active: true
//             },

//         },
//         _objects: {
//             "pointer": {
//                 _type: "sphere",
//                 _id: "pointer",
//                 _geometry: {
//                     _type: "sphere-geometry",
//                     widthSegments: 8,
//                     heightSegments: 8,
//                     radius: 0.1
//                 },
//                 _material: {
//                     _type: "basic-material",
//                     color: 0xff99ff,
//                     side: 1,
//                     // roughness: 0.5,
//                 },
//                 _position: { x: 0, y: 0.75, z: 0 },
//                 _rotation: { x: 0, y: 0, z: 0 },
//                 // castShadow: true,
//                 _on_frame: `follow-joystick`
//             },
//             "model": {
//                 _id: "my-model",
//                 _type: "xmodel",
//                 _model_url: "http://cdn.aimeverse.com:1030/u/desert-env",
//                 _position:{x:0,y:-1,z:0},
//                 _rotation:{x:1.5,y:-1,z:0},
//             }



//         }
//     },

// }


export const world: X3DApp = {
    "_parent_element": "x3d-player",
    _physics: {
        _engine: "cannon.js",
        _active: false,
        _debug: true
    },
    _scene: {
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
                color: 0x888888
            },
            "p1": {
                _id: "directional-light",
                _type: "light",
                _light: "directional",
                color: "hsl(0, 100%, 100%)",
                intensity: 0.5,
                _position: { x: 0, y: 3, z: 2 },
            },
            // "p2": {
            //     _type: "light",
            //     _light: "directional",
            //     color: "hsl(305, 68%, 65%)",
            //     intensity: 1,
            //     _position: { x: 0, y: 2, z: -3 },
            // }
        },
        _cameras: {
            "main-cam": {
                _id: "main-cam",
                _type: "camera",
                _camera: "perspective",
                _position: { x: 0, y: 2, z: 5 },
                _rotation: { x: 0, y: 0, z: 0 },
                _disable_frame_3d_state: true,
                _3d_set_once: true,
                fov: 30,
                ratio: window.innerWidth / window.innerHeight,
                far: 1000,
                close: 0.01,
                _positional_audio_listener: true
            }
        },
        _controls: {
            "cam-control": {
                _type: "orbit",
                _active: true,
                _params: {
                    enableDamping: true,
                    minPolarAngle: Math.PI / 6,
                    maxPolarAngle: Math.PI / 1.8,
                    minZoom: 1,
                    minDistance: 1,
                    maxDistance: 16,
                    rotateSpeed: 0.5,
                    autoRotateSpeed: 1,
                    target: new THREE.Vector3(0, 1.75, 0)
                }
            },
            "transform": {
                _type: "transform",
                _active: true
            },
        },
        _objects: {
            "pointer": {
                _type: "sphere",
                _id: "pointer",
                visible: true,
                _geometry: {
                    // _type: "sphere-geometry",
                    widthSegments: 8,
                    heightSegments: 8,
                    radius: 0.1,
                },
                _material: {
                    _type: "basic-material",
                    color: 0xffffff,
                    side: 2,
                    // roughness: 0.5,
                },
                _position: { x: 0, y: 1.3, z: 0 },
                _rotation: { x: 0, y: 0, z: 0 },
                // castShadow: true,
                _on_frame: `follow-joystick`,
                // _disable_frame_3d_state: true
            },
            "pointer2": {
                _type: "sphere",
                _id: "pointer2",
                visible: true,
                _geometry: {
                    // _type: "sphere-geometry",
                    widthSegments: 8,
                    heightSegments: 8,
                    radius: 0.1,
                },
                _material: {
                    _type: "basic-material",
                    color: 0xffffff,
                    side: 2,
                    // roughness: 0.5,
                },
                _position: { x: 1, y: 1, z: 0 },
                _rotation: { x: 0, y: 0, z: 0 },
                // castShadow: true,
                _on_frame: (xobj:X3DObject,fn:number) => {
                    const r = xobj._rotation
                    xobj.setRotation({x:r.x + 0.1,y:r.y,z:r.z})
                },
                // _disable_frame_3d_state: true
            },

           
            // floor: {
            //     _id: "floor",
            //     _type: "circle",
            //     // visible: false,
            //     // layers: { enable: 1 },
            //     _geometry: {
            //         // _type: "plane-geometry",
            //         radius: 5,
            //         segments: 24,
            //         // width: 10,
            //         // height: 10,
            //         // widthSegments: 50,
            //         // heightSegments: 50,

            //     },
            //     _material: {
            //         _type: "standard-material",
            //         color: "#ffffff",
            //         side: 1,
            //         transparent: true,
            //         opacity: 1,
            //         wireframe: true
            //     },
            //     _position: { x: 0, y: 0.01, z: 0 },
            //     _rotation: { x: Math.PI / 2, y: 0, z: 0 },
            //     _enable_physics: true,
            //     _mass: 0,
            //     _on_frame: `follow-joystick`
            // }

        }

    },
}


async function main() {
    //display Xpell engine info
    _x.verbose()

    _x.info()

    //load Xpell UI (XUI) Module
    // _x.loadModule(XUI)
    _x.loadModule(X3D)
    // XUI.importObject("joystick", XJoystick)
    // XUI.importObjectPack(XEditor)

    _x.start()



    const xx = { "_id": "floor", "_children": [], "_type": "circle", "_mass": 0, "_enable_physics": true, "_position": { "x": 0, "y": 0.01, "z": 0 }, "_rotation": { "x": 1.5707963267948966, "y": 0, "z": 0 }, "_scale": { "x": 1, "y": 1, "z": 1 }, "_on_frame": "follow-joystick", "_fade_duration": 0.25, "_name": "floor", "_geometry": { "_id": "83122cdc-f752-4b2e-89a5-024b6e473da1", "_children": [], "_type": "circle-geometry", "_position": { "x": 0, "y": 0, "z": 0 }, "_rotation": { "x": 0, "y": 0, "z": 0 }, "_scale": { "x": 1, "y": 1, "z": 1 }, "_fade_duration": 0.25, "_name": "83122cdc-f752-4b2e-89a5-024b6e473da1", "radius": 5, "segments": 24, "thetaStart": 0, "thetaLength": 6.283185307179586, "width": 0, "height": 0, "depth": 0, "_animation": true }, "_material": { "_id": "9c1452c3-75f0-4215-8361-62f97d64bfbd", "_children": [], "_type": "standard-material", "_position": { "x": 0, "y": 0, "z": 0 }, "_rotation": { "x": 0, "y": 0, "z": 0 }, "_scale": { "x": 1, "y": 1, "z": 1 }, "_fade_duration": 0.25, "_name": "9c1452c3-75f0-4215-8361-62f97d64bfbd", "color": "#ffffff", "side": 1, "transparent": true, "opacity": 1, "wireframe": true, "_animation": true }, "name": "floor", "_animation": true }
    
    // X3D._log_rules.createObject = true
    
    await X3D.loadApp(world)
    const xobj = await X3D.addRaw(xx)

   console.log(X3D.om.getObject("pointer2").toXData())

}
// console.log(X3D.world)


main().then(res => { })


