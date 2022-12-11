
import XEventManager from "./src/XEventManager"
import { Xpell as _x } from "./src/Xpell"
import { XUI, XUIApp } from "./src/XUI/XUI"
import { XEditor, XTransformControls } from "./src/XUI/XEditor"
//display Xpell engine info
_x.verbose()


//load Xpell UI (XUI) Module
_x.loadModule(XUI)
XUI.importObjectPack(XEditor)

// start Xpell frame engine
_x.start()


const view = {
    _type: "label",
    style:"position:relative",
    _on_frame: (xobj, frameNumber) => {
        xobj.getDOMObject().textContent = (new Date()).getMilliseconds()
    },
    _on_create: "info",
    _on_mount: "fire custom",
    _on_click:"hide"
}



const xapp:XUIApp = {
    _views: {
        _parent_element:"player2",
        "menu":{
            _type:"view",
            style:"width:50px;position:absolute;height:300px;background-color:red"
        },
        "page-2":{
            _type:"view",
            style:"left:50px;width:50px;position:absolute;height:300px;background-color:green"
        }
    },
    _controls:{
        _parent_element: "controls2",
        "tranform":{
            _id: "transform",
            _type: "transform-controls",
            style: "position:absolute;width:200px;height:100px;left:50px;top:50px;border:1px solid white;background-color:rgba(0,0,0,0.4);color:white"
        }
    }

}

XUI.loadApp(xapp)


document.addEventListener("custom",(e)=>{console.log("custom event fired")})

// XUI.loadControl(view)
XUI.vm.showPage("menu")
// XUI.vm.hidePage("menu")
// XUI.vm.showPage("page-2")
// XUI.vm.hidePage("page-2")

