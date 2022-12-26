
import * as THREE from 'three'
import { IXObjectData, XObjectPack } from "./src/XObject"
import { Xpell as _x } from "./src/Xpell"
import { XData } from "./src/XData"
import { X3D, X3DApp, X3DObject } from "./src/X3D/X3D"
import { XCameraData,XLightData } from './src/X3D/X3DCoreObjects'
import { XLabel } from "./src/XUI/XUICoreObjects"
import { X3DLoader as _loader, } from "./src/X3D/X3DLoader"

import { XUI } from "./src/XUI/XUI"
import { XUIObject } from "./src/XUI/XUIObject"
import XJoystick from "./src/XUI/XJoystick"
import { TopBar } from "./src/XUI/XDashboard"
import { XEditor, XTransformControls } from "./src/XUI/XEditor"
import { NPCStates } from './src/X3D/X3DNPC'


//display Xpell engine info
_x.verbose()

_x.info()

//load Xpell UI (XUI) Module
_x.loadModule(XUI)
_x.loadModule(X3D)
XUI.importObject("joystick", XJoystick)
XUI.importObjectPack(XEditor)

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
                _active:true,
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
                color: "#ffffff",
                intensity: 1,
                _position: { x: 0, y: 5, z: 0 },

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
                        // wireframe: true
                    },
                    _position: { x: 0, y: -0.01, z: 0 },
                    _rotation: { x: Math.PI / 2, y: 0, z: 0 },
                    _enable_physics: false,
                    _mass: 0
                }

            }
    },
    
}




await X3D.loadApp(world)
//X3D.world.logger.addObject = true
XUI.importObject("top-bar", TopBar)

const topBar = XUI.create({
    _type: "top-bar",
    _id: "top-bar"
})


topBar.mount("player")



XUI.loadControl({
    _id: "joystick-1",
    _type: "joystick",
    _parent_element: "xcontrols",
    _move_speed: 0.2,
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


const getAnimationFileUrl = (name: string) => { return `public/anim/${name}.fbx` }

const gafu = (arr) => {
    const rv:Array<string> = []
    arr.forEach((item: string) => rv.push(<string>getAnimationFileUrl(item)))
    return rv
}

let npcData = {
    _type: "npc",
    _id: "smart-npc",
    _first_name: "smart",
    _last_name: "npc",
    _nick_name: "snpc",
    _voice: "Amy",
    _role: "just another smart npc",
    _general_information: "oooo yehhh",
    _motivation: "not at all",
    _avatar: {
        name: "Ginger*",
        modelUrl: "/public/637c949a5f29a9ec1a2df3dd_ginger_blendshapes.glb",
        profilePicture: "N/A"
    },
    _npc_state_animations: {
        Idle: gafu(["Idle",/* "Idle-2", "Standing-Idle"*/]),
         Talking: gafu(["Idle"/*, "Talking-2"*/]),
        // Floating: gafu(["Floating"]),
    },
    _position: { x: 0, y: 0, z: 0 },
    _fade_duration: 0.6,
    //_rotation: { x: 2.75, y: 0.16, z: 3.13 },
    _rotation: { x: 0, y: 0, z: 0 },
    _scale: { x: 1, y: 1, z: 1 },
    _physics: false,
    _show_controls: true,
    _disable_frame_3d_state: false,
    // _3d_set_once: true,
}


const myNpc = X3D.create(npcData)


await myNpc.load()
console.log(myNpc);


X3D.world.addX3DObject(myNpc)

myNpc.changeState(NPCStates.Talking)

// myNpc.speakAnimation()

// XUI.loadControl({
//     _id: "transform",
//     _type: "transform-controls",
//     _parent_element: "xcontrols",
//     style: "position:absolute;width:200px;height:100px;left:50px;top:50px;border:1px solid white;background-color:rgba(0,0,0,0.4);color:white"
// })

// //XUI.enableFirstUserGestureEvent()



// //document.addEventListener("first-user-gesture", async (e) => {



// //console.log(X3D.world)

// const stage = {
//     x: 0,
//     y: 1.5,
//     z: 0,
// }



// _loader.loadGLTF("/keren-av.glb", {
//     _id: "aime",
//     name: "aime",
//     _position: { x: 0, y: 0, z: 0.00 },
//     _rotation: { x: 0, y: 0, z: 0 },
//     _visible: false,
//     _enable_physics: false,
//     _fade_duration:0.3,
//     //example how to spin X3DObject with text command / JS functions
//     // _on_frame:"spin z:0.01",
//     // _on_frame:(xobj:X3DObject,frame) => {
//     //     xobj._rotation.z += 0.01
//     // },
//     _collider: "box",
//     _mass: 50,
//     _on_frame:"rotation x:0 y:++0.01 z:0"
// }, async (x3dObject: X3DObject) => {
    
//     X3D.world.setTransformControls(x3dObject)


//     // await x3dObject.importAnimationFromFBXFile("anim/Injured.fbx", "Injured")
    
  
//     // await x3dObject.importAnimationFromFBXFile("anim/Rapping.fbx", "Rapping")
//     // await x3dObject.importAnimationFromFBXFile("anim/Idle.fbx", "Idle")
//     // // x3dObject.setRotation( { x: -1.55, y: 0.01, z: -2.60 })
//     // x3dObject.playAnimation("Rapping",THREE.LoopRepeat)
//     // // X3D.world.setTransformControls(x3dObject)    
//     // // const helper = new THREE.SkeletonHelper( x3dObject.getThreeObject() );
//     // // X3D.world.scene.add( helper );
    
// })

// const btn = XUI.loadControl({
//     _type:"button",
//     text:"change",
//     _id:"changeAnim",
//     style:"position:absolute;top:10;right:0",
//     _parent_element: "xcontrols",
//     _on_click:(xObject:XUIObject,e) => {
//             const a = animations[aidx]
//             const o:X3DObject = X3D.om.getObject("aime")
            
            
//             // o.playAnimation(a)
//             o.playAnimation(a)
//             // o.stopAnimation()
//             aidx++
//             if(aidx>=animations.length) {aidx =0;console.log("reset")}

//     }
// })


// const animations = [ "Idle","Injured","Rapping"]
// let aidx = 0

// // btn.getDOMObject().addEventListener("click",(e) => {
// // })



// document.addEventListener('dblclick', (e) => {
//     X3D.raycast(e)
// }, false)




// document.addEventListener("raycast-data", (e) => {
//     console.log(e);
// }, false)


// XData.variables["my-label"] = "This is a label"

// const lbl = {
//     _type:"label",
//     _id:"my-label",
//     text:"hey",
//     _data_source:"my-label",
//     _parent_element: "xcontrols",
//     style:"color:white;background-color:black;position:absolute;top:200"
// }

// XUI.loadControl(lbl)



// //})
