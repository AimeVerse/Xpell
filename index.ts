
import { IXObjectData, XObjectPack } from "./src/XObject"
import {Xpell as _x} from "./src/Xpell"
import {XData} from "./src/XData"
import {X3D, X3DObject} from "./src/X3D/X3D"
import {XLabel} from "./src/XUI/XUICoreObjects"
import {XGLTFLoader as _gltf,GLTFEvents} from "./src/X3D/XGLTFLoader"

import { XUI } from "./src/XUI/XUI"
import { XUIObject } from "./src/XUI/XUIObject"

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
                _add_audio_listener:true
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
            castShadow: true,
            _positional_audio_source:"drum-roll-with-cymbal-crash-at-end.mp3"  
            
        },
        "sound-2": {
            _type: "sphere",
            _id: "sound-2",
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
            _position: { x: -6, y: 1, z: 10 },
            _rotation: { x: 0, y: 0, z: 0 },
            castShadow: true,
            //_on_frame: `rotation y:++0.01 `,
            _positional_audio_source:"bass-drum-roll-2.mp3"
        }
    }
}


X3D.loadWorld(world)

_gltf.load("/Drummer.glb",{_id:"drummer",name:"drummer",_position:{x:0,y:0,z:0},_rotation:{x:0,y:3,z:0},_on_frame: ``},()=>{
    const drummer:X3DObject = X3D.om.getObject("drummer")
    drummer.playAnimation("Drumming")
    // const jcmd = {
    //     op:"play-sound"
    // }
    // drummer.execute(jcmd)
    
})

_gltf.load("/DrumsChair.glb",{_id:"chair",_position:{x:0,y:0,z:0},_rotation:{x:0,y:3,z:0}})
_gltf.load("/Drums.glb",{_id:"drums",name:"drums",_position:{x:0,y:0,z:-0.8},_rotation:{x:3,y:0,z:0}})
_gltf.load("/Halilit01.gltf",{_id:"speaker1",name:"speaker1",_position:{x: -9, y: 1, z: 10},_rotation:{x:3,y:0,z:0},_scale:{x:3.8,y:3.8,z:3.8}})
_gltf.load("/Halilit01.gltf",{_id:"speaker2",name:"speaker2",_position:{x: 9, y: 1, z: 10},_rotation:{x:3,y:0,z:0},_scale:{x:3.8,y:3.8,z:3.8}})





