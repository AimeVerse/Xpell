
import { IXObjectData, XObjectPack } from "./src/XObject"
import {Xpell as _x} from "./src/Xpell"
import {XData} from "./src/XData"
import {X3D} from "./src/X3D/X3D"
import {XLabel} from "./src/XUI/XUICoreObjects"

_x.info()

_x.loadModule(X3D)


_x.start()




const world = {
    "html-wrapper": "x3d-player",
    scene: {
        "lights": {
            "main": {
            _type: "light",
            _light: "ambient",
            color: 0x444466
            }
        },
        cameras: {
            "main-cam": {
                _type: "perspective-camera",
                fov: 20,
                ratio: window.innerWidth / window.innerHeight,
                _clipping: {
                    far: 5000,
                    close: 0.01
                },
                _position: { x: 0, y: 0, z: 0 },
                _rotation: { x: 0, y: 0, z: 0 },
                _disable_frame_3d_state: true
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

    }

    ,
    html_binding: {
        wrapper_elemnt: "x3d-player"
    },
    "spell3d-objects": {
        "pointer": {
            _type: "sphere",
            _id: "pointer",
            _geometry: {
                _type: "sphere-geometry",
                widthSegments: 8,
                heightSegments: 8,
                radius: 1
            },
            _material: {
                _type: "basic-material",
                color: 0xff99ff,
                side: 2,
                // roughness: 0.5,
            },
            _position: { x: 0, y: 1.75, z: 0 },
            _rotation: { x: 0, y: 0, z: 0 },
            castShadow: true,
            onframe: `follow-joystick`
        },
        "boxy": {
            name: "boxy",
            _type: "box",
            _id: "boxy",
    
            _geometry: {
                _type: "box-geometry",
                width: 2,
                height: 0.01,
                depth: 2,
                widthSegments: 2,
                heightSegments: 2,
                depthSegments: 2
            },
            _material: {
                _type: "standard-material",
                color: 0x00ff00,
                side: 2
            },
            _position: { x: 0, y: 0.1, z: 0 },
            _rotation: { x: 0, y: 0, z: 0 },
            _transform_controls: false,
            _disable_frame_3d_state: true
        }
    }
}


X3D.loadWorld(world)