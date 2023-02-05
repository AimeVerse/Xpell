
import {XEventManager,_x} from "xpell-core"
// import { Xpell as _x } from "./src/Xpell"
import { XUI, XUIApp } from "./src/XUI/XUI"
import {XAI} from "./src/XAI/XAI"
import { XEditor, XTransformControls } from "./src/XUI/XEditor"
import { XLabel } from "./src/XUI/XUICoreObjects"

//display Xpell engine info
_x.verbose()


//load Xpell UI (XUI) Module
_x.loadModule(XUI)
_x.loadModule(XAI)
XUI.importObjectPack(XEditor)


// start Xpell frame engine
_x.start()





const xapp:XUIApp = {
    _views: {
        _parent_element:"player",
        "left-menu":{
            _type:"view",
            style:"width:150px;position:absolute;height:300px;background-color:black;color:white;padding:10px",
            _children:[
                {
                    _type:"view",
                    _text:"menu1",
                    style:"text-align:center",
                    _on_click:(menu,e) => {
                        XUI.vm.showPage("page-2")
                    },
                    _on_mount:(menu) => {
                        console.log("mounted")
                    },
                    _on_frame:(menu,frameNumber:number) => {
                        //menu.getDOMObject().textContent = frameNumber
                    }

                },
                {
                    _type:"view",
                    _text:"menu2",
                    style:"text-align:center"
                },
                {
                    _type:"view",
                    _text:"menu3",
                    style:"text-align:center"
                }
            ]
        },
        "page-2":{
            _type:"view",
            style:"left:150px;width:50px;position:absolute;height:300px;background-color:green"
        }
    },
    // _controls:{
    //     _parent_element: "controls",
    //     "tranform":{
    //         _id: "transform",
    //         _type: "transform-controls",
    //         style: "position:absolute;width:200px;height:100px;left:50px;top:50px;border:1px solid white;background-color:rgba(0,0,0,0.4);color:white"
    //     }
    // }

}

XUI.loadApp(xapp)


// document.addEventListener("custom",(e)=>{console.log("custom event fired")})

// XUI.loadControl(view)


XUI.vm.addRawView("third-view",{
    _type:"view",
    style:"left:200px;width:50px;position:absolute;height:300px;background-color:brown"
})



XUI.vm.showPage("left-menu")
 XUI.vm.showView("third-view")
// XUI.vm.hidePage("menu")
// XUI.vm.showPage("page-2")
// XUI.vm.hidePage("page-2")



const ttso = XAI.create({_type:"tts",_voice:"Kathy"})


// document.addEventListener("tts-voices-loaded",(e)=>{
//     ttso.speak("Hey, my name is samantha,[[slnc 1000]] I am the voice of the local operating system " )
//     // console.log(ttso.getVoices());

// })
