
import { IXObjectData, XObjectPack } from "./src/XObject"
import {Xpell as _x} from "./src/Xpell"
import {XData} from "./src/XData"
import {X3D, X3DObject} from "./src/X3D/X3D"
import {XLabel} from "./src/XUI/XUICoreObjects"
import {XGLTFLoader as _gltf,GLTFEvents} from "./src/X3D/XGLTFLoader"

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
                _position: { x: -0.3, y: 16, z: 0 }
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
    "x3d-objects": {
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
                side: 2,
                // roughness: 0.5,
            },
            _position: { x: 0, y: 0, z: 0 },
            _rotation: { x: 0, y: 0, z: 0 },
            castShadow: true,
            onframe: `follow-joystick`
        }
    }
}


X3D.loadWorld(world)

_gltf.load("/Drummer.glb",{_id:"bot",name:"bot",_scale:{x:0.1,y:0.1,z:0.1}},()=>{
    console.log("loaded calback")

})

document.addEventListener("bot-loaded",(e) => {
    // document.removeEventListener("bot-loaded")
    console.log("loaded")
    _gltf.load("/DrumsKit.glb",{_scale:{x:0.1,y:0.1,z:0.1},})
    const bot:X3DObject = X3D.om.getObject("bot")
    //bot.playAnimation("Idle")
    //X3D.run(`bot play:"Idle"`)
})



