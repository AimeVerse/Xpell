
import * as THREE from 'three'
import { IXObjectData, XObjectPack } from "./src/XObject"
import { Xpell as _x } from "./src/Xpell"
import { XData } from "./src/XData"
import { X3D, X3DObject } from "./src/X3D/X3D"
import { XLabel } from "./src/XUI/XUICoreObjects"
import { X3DLoader as _loader, } from "./src/X3D/X3DLoader"

import { XUI } from "./src/XUI/XUI"
import { XUIObject } from "./src/XUI/XUIObject"
import XJoystick from "./src/XUI/XJoystick"
import { TopBar } from "./src/XUI/XDashboard"
import { Object3D, Scene } from 'three'


//display Xpell engine info
_x.verbose()
_x.info()

//load Xpell UI (XUI) Module
_x.loadModule(XUI)
_x.loadModule(X3D)
XUI.importObject("joystick", XJoystick)

_x.start()

const world = {
    "html-tag-id": "x3d-player",
    helper: {
        axes: 5
    },
    physics: {
        engine: "cannon.js",
        _active: false
    },
    scene: {
        "lights": {
            "main": {
                _type: "light",
                _light: "ambient",
                color: 0xffffff
            },

            "p1": {
                _type: "light",
                _light: "directional",
                color: "hsl(200, 100%, 50%)",
                //_helper:true,
                intensity: 1,
                _position: { x: 0, y: 1, z: 0 },

            },
            "p2": {
                _type: "light",
                _light: "directional",
                //_helper:true,
                color: "hsl(300, 100%, 50%)",
                intensity: 1,
                _position: { x: 6, y: 10, z: -23.21 },

            },
            "p3": {
                _type: "light",
                _light: "directional",
                color: "hsl(100, 100%, 50%)",
                //_helper:true,
                intensity: 1,
                _position: { x: 21, y: 10, z: 16 }

            },
            "p4": {
                _type: "light",
                _light: "spotlight",
                color: "hsl(250, 100%, 50%)",
                //_helper:true,
                intensity: 1,
                _position: { x: 12, y: 12, z: 22 }
            }
        },
        cameras: {
            "main-cam": {
                _id: "main-cam",
                _type: "perspective-camera",
                _helper: false,
                fov: 40,
                ratio: window.innerWidth / window.innerHeight,
                _clipping: {
                    far: 5000,
                    close: 0.01
                },
                _position: { x: 0, y: 0, z: -5 },
                _rotation: { x: 0, y: 0, z: 0 },
                _disable_frame_3d_state: true, //set true for cam-controls
                _3d_set_once: true,
                _add_audio_listener: true
            }
        },
        controls: {
            "cam-control": {
                _type: "orbit",
                _active: true,
                _params: {
                    enableDamping: true,
                    minPolarAngle: Math.PI / 3.5,
                    maxPolarAngle: Math.PI,
                    minDistance: 2,
                    maxDistance: 10,
                    rotateSpeed: 0.3,
                }
            }
        }

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
            _on_frame: `follow-joystick`
        },
        "spr": {
            _type: "sphere",
            _id: "spr",
            _geometry: {
                _type: "sphere-geometry",
                widthSegments: 16,
                heightSegments: 16,
                radius: 0.5
            },
            _material: {
                _type: "basic-material",
                color: 0x00bb00,
                side: 2,
                // _normal_map:{
                //     texture:"/normal-map.gif"
                // },
                // roughness: 0.5,
            },
            _position: { x: 2, y: 0, z: -1 },
            _rotation: { x: 0, y: 0, z: 0 },
            _enable_physics: true,
            _mass: 0.5
        },


        "floor": {
            _id: "floor",

            _type: "box",
            _geometry: {
                _type: "box-geometry",
                width: 10,
                height: 10,
                depth: 0.3,
                widthSegments: 50,
                heightSegments: 50,
                depthSegments: 50
            },
            _material: {
                _type: "standard-material",
                color: 0xff00ff,
                side: 2
            },
            _position: { x: 0, y: -1, z: 0 },
            _rotation: { x: Math.PI / 2, y: 0, z: 0 },
            _enable_physics: true,
            _mass: 0,
        }
    }
}


await X3D.loadWorld(world)

XUI.importObject("top-bar", TopBar)

const topBar = XUI.create({
    _type: "top-bar",
    _id: "top-bar"
})


topBar.attach("player")


XUI.enableFirstUserGestureEvent()

document.addEventListener("first-user-gesture", async (e) => {



    console.log(X3D.world)

    const stage = {
        x: 0,
        y: 1.5,
        z: 0,
    }

    const soundbox = X3D.addRaw(<any>{
        _id: "soundbox",
        _type: "box",
        _geometry: {
            _type: "box-geometry",
            width: 0.3,
            height: 0.3,
            depth: 0.3,
            widthSegments: 50,
            heightSegments: 50,
            depthSegments: 50
        },
        _material: {
            _type: "standard-material",
            color: 0xffbbcc,
            side: 2
        },
        _position: { x: 1.5, y: 1, z: 0 },
        _rotation: { x: Math.PI / 2, y: 0, z: 0 },
        _enable_physics: true,
        _mass: 3
    })

    const soundbox2 = X3D.addRaw(<any>{
        _id: "soundbox2",
        _type: "box",
        _geometry: {
            _type: "box-geometry",
            width: 0.3,
            height: 0.3,
            depth: 0.3,
            widthSegments: 50,
            heightSegments: 50,
            depthSegments: 50
        },
        _material: {
            _type: "standard-material",
            color: 0xaabbcc,
            side: 2
        },
        _position: { x: -1.5, y: 1, z: 0 },
        _rotation: { x: Math.PI / 2, y: 0, z: 0 },
        _enable_physics: true,
        _mass: 3
    })
    
    const soundbox3 = X3D.addRaw(<any>{
        _id: "soundbox3",
        _type: "box",
        _geometry: {
            _type: "box-geometry",
            width: 0.3,
            height: 0.3,
            depth: 0.3,
            widthSegments: 50,
            heightSegments: 50,
            depthSegments: 50
        },
        _material: {
            _type: "standard-material",
            color: 0x0000dd,
            side: 2
        },
        _position: { x: 0, y: 1, z: -1 },
        _rotation: { x: Math.PI / 2, y: 0, z: 0 },
        _enable_physics: true,
        _mass: 3
    })

    
    
    
    _loader.loadGLTF("/aime-avatar.glb", {
        _id: "aime",
        name: "aime",
        _position: { x: 0, y: -1, z: 0 }
        , _scale: { x: 1, y: 1, z: 1 },
        _enable_physics: true,
        _mass: 50
    }, (x3dObject) => {
        _loader.loadFBXAnimation("anim.fbx", x3dObject, () => {
            x3dObject.playAnimation("mixamo.com")
            soundbox.setPositionalAudioSource("hungarian_dance/01_AcousticGtr.mp3",{autoplay:true})
            soundbox2.setPositionalAudioSource("hungarian_dance/02_AcousticGtrDI.mp3",{autoplay:true})
            soundbox3.setPositionalAudioSource("hungarian_dance/03_Saxophone.mp3",{autoplay:true})
        })
        // x3dObject._three_obj.traverse((child) => {
        //     if (child.isBone) {
        //         console.log(child.name);
        //         if(child.name == "RightForeArm") {

        //             // console.log(child.position);
        //             // child.position.add(new THREE.Vector3(0.1,0,0))
        //             child.rotation.z = -Math.PI /2

        //         }
        //     // object.position.set(x,y,z);
        //     // …
        //     }
        // })
    })



    // _loader.loadGLTF("/arena.glb",{
    //     _id:"arena",name:"arena",_position:{x: 0, y: -5, z: 30},
    //     // _on_frame:"rotation y:++0.01"
    // },(arena:X3DObject)=>{
    //     // console.log(arena);

    //     // arena.playAnimation("Armature.001Action")
    //     //aimeModel.playAudio()
    // })




    XUI.loadControl({
        _id: "joystick-1",
        _type: "joystick",
        _parent_element: "xcontrols",
        _joy_options: {
            size: 120,
            multitouch: true,
            maxNumberOfNipples: 1,
            mode: 'static',
            restJoystick: true,
            shape: 'circle',
            position: { bottom: '90px', left: '90px' },
            dynamicPage: true,
            color: "green"
        }
    })





    // setInterval((e) => {
    //     const color = new THREE.Color(0xffffff);
    //     color.setHex(Math.random() * 0xffffff); //Random color

    //     const spr = {
    //         _type: "sphere",
    //         _geometry: {
    //             _type: "sphere-geometry",
    //             widthSegments: 16,
    //             heightSegments: 16,
    //             radius: THREE.MathUtils.randFloat(0.1, 0.2)
    //         },
    //         _material: {
    //             _type: "basic-material",
    //             color: color.getHex(),
    //             side: 2,
    //             // roughness: 0.5,
    //         },
    //         _position: { x: THREE.MathUtils.randFloat(-1, 1), y: THREE.MathUtils.randFloat(1, 2), z: THREE.MathUtils.randFloat(0, 2) },
    //         _rotation: { x: 0, y: 0, z: 0 },
    //         _enable_physics: true,
    //         _mass: 5
    //     }
    //     const obj: X3DObject = X3D.addRaw(<any>spr)

    //     setTimeout((e2) => {
    //         X3D.remove(<X3DObject>obj._id)
    //     }, 5000)

    //     //X3D.om.getObject("aime").position = {x:0,y:0,z:0}
    // }, 500)


})