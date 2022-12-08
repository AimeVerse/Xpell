
import XEventManager from "./src/XEventManager"
import { Xpell as _x } from "./src/Xpell"
import { XUI } from "./src/XUI/XUI"

//display Xpell engine info
_x.verbose()


//load Xpell UI (XUI) Module
_x.loadModule(XUI)

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

document.addEventListener("custom",(e)=>{console.log("custom event fired")})

XUI.loadControl(view)

