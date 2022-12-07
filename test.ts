
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
import { XEditor, XTransformControls } from "./src/XUI/XEditor"

//display Xpell engine info
_x.verbose()

_x.info()

//load Xpell UI (XUI) Module
_x.loadModule(XUI)
_x.loadModule(X3D)
XUI.importObject("joystick", XJoystick)
XUI.importObjectPack(XEditor)

_x.start()




const world = {
    "html-tag-id": "x3d-player",
    helper: {
        //axes: 5
    },
    transformControls: {
        _active: true
    },
    physics: {
        engine: "cannon.js",
        _active: true,
        _debug: true
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
        // "spr": {
        //     _type: "sphere",
        //     _id: "spr",
        //     _geometry: {
        //         _type: "sphere-geometry",
        //         widthSegments: 16,
        //         heightSegments: 16,
        //         radius: 0.5
        //     },
        //     _material: {
        //         _type: "basic-material",
        //         color: 0x00bb00,
        //         side: 2,
        //         // _normal_map:{
        //         //     texture:"/normal-map.gif"
        //         // },
        //         // roughness: 0.5,
        //     },
        //     _position: { x: 2, y: 0, z: -1 },
        //     _rotation: { x: 0, y: 0, z: 0 },
        //     _enable_physics: true,
        //     _mass: 0.5
        // },


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
//X3D.world.logger.addObject = true
XUI.importObject("top-bar", TopBar)

const topBar = XUI.create({
    _type: "top-bar",
    _id: "top-bar"
})


topBar.attach("player")



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

XUI.loadControl({
    _id: "transform",
    _type: "transform-controls",
    _parent_element: "xcontrols",
    style: "position:absolute;width:200px;height:100px;left:50px;top:50px;border:1px solid white;background-color:rgba(0,0,0,0.4);color:white"
})

//XUI.enableFirstUserGestureEvent()



//document.addEventListener("first-user-gesture", async (e) => {



//console.log(X3D.world)

const stage = {
    x: 0,
    y: 1.5,
    z: 0,
}


_loader.loadGLTF("/keren-av.glb", {
    _id: "aime",
    name: "aime",
    _position: { x: 0.06, y: -0.5, z: -0.00 },
    _rotation: { x: 0, y: 0, z: 0 },
    _visible: false,
    _enable_physics: false,
    
    //example how to spin X3DObject with text command / JS functions
    //_on_frame:"spin z:0.01",
    // _on_frame:(xobj:X3DObject,frame) => {
    //     xobj._rotation.z += 0.01
    // },
    _collider: "box",
    _mass: 50
}, async (x3dObject: X3DObject) => {
    
    await x3dObject.importAnimationFromFBXFile("anim/Angry.fbx", "angry")
    
    //let t = x3dObject._three_obj.animations[0].tracks.shift();
	//         for (let i = 0; i < t.length; i += 4) {
    // 	        let q = new THREE.Quaternion(t[i], t[i+1], t[i+2], t[i+3]);
	//             let w = new THREE.Quaternion();
    // 	        w.setFromAxisAngle(new THREE.Vector3(0,0,1), Math.PI / 2);
    // 	        q.multiply(w);
    // 	        t[i] = q.x;
    //             t[i+1] = q.y;
    //             t[i+2] = q.z;
    //             t[i+3] = q.w;
	        // }
    // console.log(x3dObject._three_obj?.animations[0].tracks);
    // await x3dObject.importAnimationFromFBXFile("anim/Look Around.fbx", "look-around")
    // await x3dObject.importAnimationFromFBXFile("anim/Idle.fbx", "idle")
    console.log(x3dObject._three_obj.animations);
    // x3dObject._three_obj.animations[0].tracks.shift()
    // x3dObject._three_obj.animations[1].tracks.shift()
    // x3dObject._three_obj.animations[2].tracks.shift()

    x3dObject.setRotation( { x: -1.55, y: 0.01, z: -2.60 })
    x3dObject.playAnimation("angry",THREE.LoopRepeat)
    X3D.world.setTransformControls(x3dObject)    
    const helper = new THREE.SkeletonHelper( x3dObject.getThreeObject() );
    X3D.world.scene.add( helper );
    
})

const btn = XUI.loadControl({
    _type:"button",
    text:"change",
    _id:"changeAnim",
    style:"position:absolute;top:10;right:0",
    _parent_element: "xcontrols",
})


const animations = [ "idle","angry","look-around"]
let aidx = 0

btn.getDOMObject().addEventListener("click",(e) => {
    const a = animations[aidx]
    const o = X3D.om.getObject("aime")
    
    
    // o.playAnimation(a)
    o.playAnimation(a)
    aidx++
    if(aidx>=animations.length) {aidx =0;console.log("reset")}
})



document.addEventListener('dblclick', (e) => {
    X3D.raycast(e)
}, false)




document.addEventListener("raycast-data", (e) => {
    console.log(e);
}, false)


XData.variables["my-label"] = "This is a label"

const lbl = {
    _type:"label",
    _id:"my-label",
    text:"hey",
    _data_source:"my-label",
    _parent_element: "xcontrols",
    style:"color:white;background-color:black;position:absolute;top:200"
}

XUI.loadControl(lbl)



//})
