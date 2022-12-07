
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
        xobj.getDOMObject().textContent = frameNumber
    },
    _on_create: (xobj) => {
        console.log(xobj, "created")
    },
    _on_mount: (xobj) => {
        console.log(xobj, "mounted")
    },
    _on_click:(xobj,e) => {
        console.log("click on " + e.clientX + "," + e.clientY )
    }
}


XUI.loadControl(view)
