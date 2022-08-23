
import { IXObjectData, XObjectPack } from "./src/XObject"
import { Xpell as _x } from "./src/Xpell"
import { XData } from "./src/XData"
import { X3D, X3DObject } from "./src/X3D/X3D"
import { XLabel } from "./src/XUI/XUICoreObjects"
import { XGLTFLoader as _gltf, GLTFEvents } from "./src/X3D/XGLTFLoader"

import { XUI } from "./src/XUI/XUI"
import { XUIObject } from "./src/XUI/XUIObject"
import { Sphere } from "three"
import * as THREE from 'three'

//display Xpell engine info
_x.info()

//load Xpell UI (XUI) Module
_x.loadModule(XUI)
_x.loadModule(X3D)


_x.start()




const world = {
    "html-tag-id": "x3d-player",
    scene: {
        "lights": {
            "main": {
                _type: "light",
                _light: "ambient",
                color: 0x444466
            },
            "p1": {
                _type: "light",
                _light: "directional",
                _helper: true,
                color: "hsl(180, 0%, 60%)",
                intensity: 1,
                _position: { x: 5, y: 10, z: -30 },

            },
            "p2": {
                _type: "light",
                _light: "directional",
                color: "hsl(180, 0%, 60%)",
                intensity: 1,
                _position: { x: 5, y: 5, z: 30 },

            },
            "p3": {
                _type: "light",
                _light: "directional",
                color: "hsl(180, 0%, 60%)",
                intensity: 1,
                _position: { x: -20, y: 5, z: 0 }

            },
            "p4": {
                _type: "light",
                _light: "directional",
                color: "hsl(180, 0%, 60%)",
                intensity: 1,
                _position: { x: 20, y: 5, z: 0 }
            },
            "top-light": {
                _type: "light",
                _light: "directional",
                color: "hsl(180, 0%, 80%)",
                intensity: 1,
                _position: { x: 0, y: 16, z: -40 }
            }
        },
        cameras: {
            "main-cam": {
                _type: "perspective-camera",
                fov: 40,
                ratio: window.innerWidth / window.innerHeight,
                _clipping: {
                    far: 5000,
                    close: 0.01
                },
                _position: { x: 0, y: 1.75, z: -40 },
                _rotation: { x: 0, y: 0, z: 0 },
                _disable_frame_3d_state: true,
                _add_audio_listener: true
            }
        },
        controls: {
            "cam-control": {
                _type: "orbit",
                _active: true,
                _params: {
                    enableDamping: true,
                    minPolarAngle: Math.PI / 2.5,
                    maxPolarAngle: Math.PI / 1.5,
                    minDistance: 2,
                    maxDistance: 10,
                    rotateSpeed: 0.3,
                }
            }
        }

    },
    //--------------------------------------------------------------
    "x3d-objects": {
        "sound-1": {
            _type: "sphere",
            _id: "sound-1",
            _geometry: {
                _type: "sphere-geometry",
                widthSegments: 8,
                heightSegments: 8,
                radius: 0.1
            },
            _material: {
                _type: "standard-material",
                color: 0xff99ff,
                side: 2,
                // roughness: 0.5,
            },
            _position: { x: 6, y: 1, z: 10 },
            _rotation: { x: 0, y: 0, z: 0 },
            castShadow: true
        },
        "plane-1": {
            _id: "plane-1",
            name: "plane-1",
            _type: "plane",
            _geometry: {
                _type: "plane-geometry",
                width: 0.5,
                height: 2,
                widthSegments: 50,
                heightSegments: 50
            },
            _material: {
                _type: "basic-material",
                color: 0x8d5524,
                side: 2,
            },
            _position: { x: 5, y: 1, z: 0 },
            _rotation: { x: 0, y: 0, z: 0 },
            // "_on_frame":"rotation x:++0.02"
            // "_on_frame": "ns_cmd.s3d_object._rotation.x"
        },
        "sphere-eye-1": {
            name: "eye-1",
            _id: "eye-1",
            _type: "sphere",
            _geometry: {
                _type: "sphere-geometry",
                widthSegments: 20,
                heightSegments: 20,
                radius: 0.05
            },
            _material: {
                _type: "phong-material",
                color: 0x000000,
                side: 2
            },
            _position: {x: 5.08, y: 1.5, z: 0},
            _rotation: {x: 0, y: 0, z: 0}
        },
        "sphere-eye-2": {
            name: "eye-2",
            _id: "eye-2",
            _type: "sphere",
            _geometry: {
                _type: "sphere-geometry",
                widthSegments: 20,
                heightSegments: 20,
                radius: 0.05
            },
            _material: {
                _type: "phong-material",
                color: 0x000000,
                side: 2
            },
            _position: {x: 4.92, y: 1.5, z: 0},
            _rotation: {x: 0, y: 0, z: 0}
        },
        "cone-beak": {
            name: "beak",
            _id: "beak",
            _type: "cone",
            _geometry: {
                _type: "cone-geometry",
                radius: 0.1,
                height: 0.6,
                segments: 12
            },
            _material: {
                _type: "standard-material",
                color: 0xE4FF00,
                side: 2
            },
            _position: {x: 5, y: 1, z: -0.3},
            _rotation: {x: 55, y: 0, z: 0},
            //"_on_frame": "rotation z:++0.02"
        },
        "box-1": {
            _id: "box-1",
            name: "box-1",
            _type: "box",
            _geometry: {
                _type: "box-geometry",
                width: 1,
                height: 1,
                depth:1,
                widthSegments: 10,
                heightSegments: 1,
                depthSegments: 50
            },
            _material: {
                _type: "phong-material",
                color: 0x000000,
                side: 2,
            },
            _position: { x: THREE.MathUtils.randFloat(-4,4), y: 1, z: 0 },
            _rotation: { x: 0, y: 0, z: 0 },
            "_on_frame":"hover axis:y step:0.01 radius:0.5"
        },
        "sphere-1": {
            name: "sphere-1",
            _id: "sphere-1",
            _type: "sphere",
            _geometry: {
                _type: "sphere-geometry",
                widthSegments: 20,
                heightSegments: 20,
                radius: 0.3
            },
            _material: {
                _type: "standard-material",
                color: 0x811A1A,
                side: 2
            },
            _position: {x: 3, y: 2, z: 1.2},
            _rotation: {x: 90, y: 0, z: 0},
            //"_on_frame": "position x:++0.01"
        },
        "cylinder-1": {
            name: "cylinder-1",
            _id: "cylinder-1",
            _type: "cylinder",
            _geometry: {
                _type: "cylinder-geometry",
                radiusTop: 0.01,
                radiusBottom: 0.5,
                height: 1,
                radialSegments: 50
            },
            _material: {
                _type: "phong-material",
                color: 0x51CAA5,
                side: 2
            },
            _position: {x: 3, y: 2, z: 1.2},
            _rotation: {x: 80, y: 0, z: 0},
            //"_on_frame": "position x:++0.01"
        },
        "torus-1": {
            name: "torus-1",
            _id: "torus-1",
            _type: "torus",
            _geometry: {
                _type: "torus-geometry",
                radius: 0.7,
                tubeRadius: 0.11,
                radialSegments: 40,
                tubularSegments: 32,
                arc:90
            },
            _material: {
                _type: "basic-material",
                color: 0x36B612,
                side: 1
            },
            _position: {x: 1, y: 2, z: 1.2},
            _rotation: {x: 80, y: 0, z: 0},
            //"_on_frame": "rotation x:--0.03 y:++0.01 z:++0.004"
        },
        "cone-1": {
            name: "cone-1",
            _id: "cone-1",
            _type: "cone",
            _geometry: {
                _type: "cone-geometry",
                radius: 0.2,
                height: 1,
                segments: 4
            },
            _material: {
                _type: "standard-material",
                color: 0xE530E2,
                side: 2
            },
            _position: {x: 1, y: 2, z: 1.2},
            _rotation: {x: 80, y: 0, z: 0},
            "_on_frame": "rotation z:++0.02"
        }
        // "floor-1": {
        //     name: "floor-1",
        //     _id: "floor-1",
        //     _type: "floor",
        //     _geometry: {
        //         _type: "floor-geometry",
        //         radius: 0.2,
        //         height: 1,
        //         segments: 4
        //     },
        //     _material: {
        //         _type: "standard-material",
        //         color: 0xE530E2,
        //         side: 2
        //     },
        //     _position: {x: 1, y: 2, z: 1.2},
        //     _rotation: {x: 80, y: 0, z: 0},
        //     "_on_frame": "rotation z:++0.02"
        // }
    }
}


X3D.loadWorld(world)



