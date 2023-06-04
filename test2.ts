
import {XEventManager,_x} from "xpell-core"
// import { Xpell as _x } from "./src/Xpell"
import { XUI, XUIApp, XUIObject } from "./src/XUI/XUI"
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


class XE extends XUIObject {
    constructor(data){
        super(data,{_type:"xe"})
        this.append({_type:"view",style:"width:100%;height:20px;background-color:red"})
    }
}

XUI.importObject("xe",XE)

const xapp:XUIApp = {
    _views: {
        _parent_element:"player",
        "left-menu":{
            _id:"left-menu",
            _type:"view",
            // _parent_element_id:"info",
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
                    },
                    _on_show:(menu) => {
                        console.log("show")
                    },
                    _on_hide:(menu) => {
                        console.log("hide")
                    }

                },
                {
                    _type:"view",
                    _text:"menu2",
                    style:"text-align:center"
                },
                {
                    _type:"xe",
                    // _text:"menu3",
                    // style:"text-align:center"
                },
                {
                    "_type": "view",
                    "_id": "main-view",
                    "_text":"hoooo",
                    "style": "border: 1px solid black;background-color:yellow;color:red",
                    "_on_frame": (obj:XUIObject, frameNumber: number) => {
                      obj.getDOMObject().style.color = "rgb(" + (frameNumber % 256) + ", "+(frameNumber % 256)+", 0)";
                    }
                  }
            ]
        },
        "page-2":{
            _type:"view",
            style:"left:150px;width:50px;position:absolute;height:300px;background-color:green"
        },
        "gpt-page":{
            "_type": "view",
            "_id": "main-view",
            "_children": [
              {
                "_type": "label",
                "_id": "time-label",
                "style": "font-size: 15px",
                "_on_frame": (obj:XUIObject, frameNumber: number) => {
                  obj.getDOMObject().textContent = new Date().toLocaleTimeString();
                }
              },
              {
                "_type": "text",
                "_id": "my-text"
              },
              {
                "_type": "button",
                "_id": "my-button",
                "_text": "Log Text",
                "_on_click": (obj:XUIObject, e:HTMLEvent) => {
                  console.log(document.getElementById("my-text").value);
                }
              }
            ]
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


// XUI.vm.addRawView("third-view",{
//     _type:"view",
//     style:"left:200px;width:50px;position:absolute;height:300px;background-color:brown"
// })



// XUI.vm.showPage("left-menu")
//  XUI.vm.showView("third-view")
// XUI.vm.hidePage("menu")
// XUI.vm.showPage("page-2")
// XUI.vm.hidePage("page-2")
XUI.vm.showPage("left-menu")

// setTimeout(() => {
//   XUI.vm.hidePage("left-menu")
//   console.log("hide menu");
  
// }, 500);
// _x.execute()

// const ttso = XAI.create({_type:"tts",_voice:"Kathy"})


// document.addEventListener("tts-voices-loaded",(e)=>{
//     ttso.speak("Hey, my name is samantha,[[slnc 1000]] I am the voice of the local operating system " )
//     // console.log(ttso.getVoices());

// })
