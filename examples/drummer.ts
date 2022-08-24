
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

    },
    "x3d-objects": {
        "pointer": {
            _type: "sphere",
            _id: "pointer",
            _geometry: {
                _type: "sphere-geometry",
                widthSegments: 8,
                heightSegments: 8,
                radius: 0.1
            },
            _material: {
                _type: "basic-material",
                color: 0xff99ff,
                side: 2,
                // roughness: 0.5,
            },
            _position: { x: 0, y: 1, z: -1 },
            _rotation: { x: 0, y: 0, z: 0 },
            castShadow: true
            
        }
    }
}


// X3D.loadWorld(world)

// _gltf.load("/Drummer.glb",{_id:"bot",name:"bot",_position:{x:0,y:0,z:0},_on_frame: `rotation y:++0.01 `},()=>{
//     // const bot:X3DObject = X3D.om.getObject("bot")
//     // bot.playAnimation("Sitting")
// })

// _gltf.load("/DrumsChair.glb",{_id:"chair"})
// _gltf.load("/Drums.glb",{_id:"drums",name:"drums"})





class InfoBar extends XUIObject  {   
    constructor(data) {
        
        const defaults = {
            _type:"info-bar",
            _html_tag:"div",
            _user_name:"unknown"
        }
        super(data,defaults)

        this._frameLable = XUI.create({
            _id:"name-label",
            _type:"label",
            _data_source:"frame-number",
            _format:"Frame: _$"
        })
        
        this.append(this._frameLable)

        this.fpsLabel = XUI.create({
            _id:"fps-label",
            _type:"label",
            _data_source:"fps",
            _format:"FPS: _$",
            style:"margin-left:20px"
        })
        
        this.append(this.fpsLabel)

        this.userName = XUI.create({
            _id:"username-label",
            _type:"label",
            text:"User :" + this._user_name,
            style:"margin-left:20px"
        })
        
        this.append(this.userName)
        
        this.animateButton = XUI.create({
            _id:"animateButton",
            _type:"button",
            style:"margin-left:20px",
            text:"Animate",
            onclick:"document.dispatchEvent(new CustomEvent('clickme'))",
            _pos:0
        })
        
        this.append(this.animateButton)


        

        

        document.addEventListener("clickme",(e) => {
            const anims = ["Sitting","Drumming","Angry","Clapping"]
            const bot:X3DObject = X3D.om.getObject("bot")
            const but:XUIObject = XUI.om.getObject("animateButton")
            bot.playAnimation(anims[but._pos++])
            if(but._pos == anims.length) but._pos = 0

        })
        
    }
}






class InfoObjects {
    
    static getObjects() {
        return  {
            "info-bar":InfoBar
        }
    }
}

XUI.importObjectPack(InfoObjects)

const _app = {
    xpell: {version: 1},
    views: {
        "hello-view": {
            _type: "info-bar",
            style:"display:block",
            _id: "hello-view",
            _user_name:"Tamir"
            
        }
    },
    defaults: {
        view: "hello-view"
    },
    "html-tag-id":"player"

}




//load Xpell application
XUI.loadApp(_app)

//load "hello-view" view into the page
XUI.vm.loadPage("hello-view")



