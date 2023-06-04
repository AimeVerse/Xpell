/**
 * XJoystick
 * @description XEditor Scene editor controls
 */

import XUI from "./XUI"
import XUIObject from "./XUIObject"
import  {XData, _xu,IXObjectData} from "xpell-core"
import { _xem } from "../XEM/XEventManager"
export class XTransformControls extends XUIObject {
    private _keyboard_down_listener!: Function
    private _key_down!: boolean
    private _state: 'translate' | 'rotate' | 'scale' 

    constructor(data:IXObjectData) {

        const ids = _xu.guid()
        const defaults = {
            _type: "transform-controls",
            _html_tag: "div",
            class: "xtransform-controls",
            _title: "Transform",
            _id: "xtransform-controls",
            // _parent_element: "body",
        }
        super(data, defaults);

        this._state = "translate"

        this._top_bar = XUI.create({
            _type: "view",
            _id: "xtransform-controls-top-bar", name: "xtransform-controls-top-bar", class: "xtransform-controls-top-bar",
            style: "width:100%;height:20px;left:0;top:0;text-align:center;border-bottom:1px white solid",
            text: this._title
        })

        this.append(this._top_bar)



        const getCopy2ClipboardFunction = (type:'pos' | 'rot' | 'scale' ) => {
            return  `
            console.log(document.getElementById("tc-${type}-x"))
            const v = "{x:" + document.getElementById("tc-${type}-x").innerText + ",y:" + document.getElementById("tc-${type}-y").innerText + ",z:" + document.getElementById("tc-${type}-z").innerText + "}"
            navigator.clipboard.writeText(v)`
        }

        const getGridRow = (state : 'pos' | "rot" | "scale") => {
            return {
                _type: "view",
                style: gridRowStyle,
                _children: [
                    { _type: "view", text: state },
                    { id: "tc-"+ state + "-x" ,_type: "view", text: "0", _data_source: "tc-"+ state + "-x" },
                    { id: "tc-"+ state + "-y" ,_type: "view", text: "0", _data_source: "tc-"+ state + "-y" },
                    { id: "tc-"+ state + "-z" , _type: "view", text: "0", _data_source: "tc-"+ state + "-z" },
                    { _type: "button", text: "copy", style: "" ,onclick:getCopy2ClipboardFunction(state)},
                ]
            }
        }
        const gridRowStyle = "width:100%;height:20px;left:0;top:0;display:flex;justify-content:space-between;text-align:left"
        const gridColStyle = "text-align:left"

        this._grid_title = XUI.create({
            _type: "view",
            style:gridRowStyle ,
            _children: [
                { _type: "view", text: "..." },
                { _type: "view", text: "X" },
                { _type: "view", text: "Y" },
                { _type: "view", text: "Z" },
                { _type: "view", text: "..." },
            ]
        })

        this.append(this._grid_title)

        this._grid_position_row = XUI.create(getGridRow("pos"))

        this.append(this._grid_position_row)

        this._grid_rotation_row = XUI.create(getGridRow("rot"))

        this.append(this._grid_rotation_row)


        

        this._grid_scale_row = XUI.create(getGridRow("scale"))

        this.append(this._grid_scale_row)
        
        this._grid_buttons = XUI.create({
            _type: "view",
            style: "width:100%;height:20px;left:0;top:0;display:flex",
            _children: [
                { _id:"tc-pos-button" , _type: "button", text: "Position", style: "" },
                { _id:"tc-rot-button" , _type: "button", text: "Rotation", style: "" },
                { _id:"tc-scale-button" , _type: "button", text: "Scale", style: "" },
                
            ]
        })
        
        this.append(this._grid_buttons)

    }

    changeState(newState:'translate' | 'rotate' | 'scale') {
        this._state = newState
        XData.variables["xtransform-controls-state"] = this._state
        _xem.fire("xtransform-controls-state-changed")

    }

    async onMount() {
        const dom_object = super.getDOMObject() //create dom element for first time 

        const sthis = this //strong this
        this._key_down = true
        document.addEventListener('keypress', async (event) => {
            sthis._key_down = true
            //            const lkey = event.key.toLowerCase()
            if (event.altKey) {
                switch (event.code) {
                    case 'KeyG':
                        this.changeState('translate')
                        break
                    case 'KeyR':
                        this.changeState('rotate')
                        break
                    case 'KeyS':
                        this.changeState('scale')
                        break
                }

                
            }


        }, false);

       


        const btn_pos:HTMLElement = <HTMLElement>document.getElementById("tc-pos-button")
        btn_pos.addEventListener("click",(event) => {
            this.changeState('translate')
        })

        const btn_rot:HTMLElement = <HTMLElement>document.getElementById("tc-rot-button")
        btn_rot.addEventListener("click",(event) => {
            this.changeState('rotate')
        })

        const btn_scale:HTMLElement = <HTMLElement>document.getElementById("tc-scale-button")
        btn_scale.addEventListener("click",(event) => {
            this.changeState("scale")
        })


        super.onMount()
    }

    //return dom_object



}



export class X3DObjectViewer extends XUIObject {

    constructor(data:IXObjectData) {

        const ids = _xu.guid()
        const defaults = {
            _type: "x3d-object-viewer",
            _html_tag: "div",
            class: "x3d-object-viewer",
            _title: "Transform",
            _id: "x3d-object-viewer",
            _parent_element: "body",
        }
        super(data, defaults);

        this._state = "translate"

        this._top_bar = XUI.create({
            _type: "view",
            _id: "x3d-object-viewer-top-bar", name: "x3d-object-viewer-top-bar", class: "xtransform-controls-top-bar",
            style: "width:100%;height:20px;left:0;top:0;text-align:center;border-bottom:1px white solid",
            text: this._title
        })

        this.append(this._top_bar)


    }

    async onMount() {
        const dom_object = super.getDOMObject() //create dom element for first time 

        const sthis = this //strong this
        

        super.onMount()
    }

    //return dom_object



}



export class XEditor {
    static getObjects() {
        return {
            "transform-controls": XTransformControls
        }
    }
}





export default XEditor