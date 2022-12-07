
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
// _x.loadModule(X3D)
XUI.importObject("joystick", XJoystick)
XUI.importObjectPack(XEditor)

_x.start()



XUI.importObject("top-bar", TopBar)

const topBar = XUI.create({
    _type: "top-bar",
    _id: "top-bar"
})


topBar.attach("player")



export class Comp extends XUIObject {
    constructor(data) {
        const defaults = {
            _type: "comp",
            _html_tag: "div"
        };
        super(data, defaults);

        const lbl = XUI.create({
            _id: "my-lbl",
            _type: "label",
            text: this._label_text,
            // style:"position:absolute;top:100px"
        })
        const txt = XUI.create({
            _id: "my-txt",
            _type: "text",
            placeholder: "Your name here",
            // style:"position:absolute;top:100px"
        })
        const btn = XUI.create({
            _id: "my-btn",
            _type: "button",
            text: "Submit",
            // style:"position:absolute;top:100px"
        })

        this.append(lbl)
        this.append(txt)
        this.append(btn)
    }
}

XUI.importObject("comp", Comp)



const view = XUI.create({
    _id: "my-comp",
    _type: "comp",
    _label_text:"this is my label",
    style: "position:absolute;top:100px;display:flex",
})


view.attach("player")





