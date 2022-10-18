/**
 * XJoystick
 * @description XEditor Scene editor controls
 */

import XUI from "./XUI"
import XUtils from "../XUtils"
import XUIObject from "./XUIObject"
import XData from "../XData"
import XEventManager from "../XEventManager"

export class XTransformControls extends XUIObject {
    private _keyboard_down_listener: Function
    private _key_down: boolean
    private _state: 'translate' | 'rotate' | 'scale' 

    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _type: "transform-controls",
            _html_tag: "div",
            class: "xtransform-controls",
            _title: "Transform",
            _id: "xtransform-controls",
            _parent_element: "body",
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


        const gridRowStyle = "text-align:center;flex:0 0 25%"

        this._grid_title = XUI.create({
            _type: "view",
            style: "width:100%;height:20px;left:0;top:0;display:flex",
            _children: [
                { _type: "view", text: "...", style: gridRowStyle },
                { _type: "view", text: "X", style: gridRowStyle },
                { _type: "view", text: "Y", style: gridRowStyle },
                { _type: "view", text: "Z", style: gridRowStyle },
            ]
        })

        this.append(this._grid_title)

        this._grid_position_row = XUI.create({
            _type: "view",
            style: "width:100%;height:20px;left:0;top:0;display:flex",
            _children: [
                { _type: "view", text: "Pos", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-pos-x", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-pos-y", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-pos-z", style: gridRowStyle },
            ]
        })

        this.append(this._grid_position_row)

        this._grid_rotation_row = XUI.create({
            _type: "view",
            style: "width:100%;height:20px;left:0;top:0;display:flex",
            _children: [
                { _type: "view", text: "Rot", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-rot-x", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-rot-y", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-rot-z", style: gridRowStyle },
            ]
        })

        this.append(this._grid_rotation_row)

        this._grid_scale_row = XUI.create({
            _type: "view",
            style: "width:100%;height:20px;left:0;top:0;display:flex",
            _children: [
                { _type: "view", text: "Scale", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-scale-x", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-scale-y", style: gridRowStyle },
                { _type: "view", text: "0", _data_source: "tc-scale-z", style: gridRowStyle },
            ]
        })

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
        XEventManager.fire("xtransform-controls-state-changed")

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

       


        const btn_pos = document.getElementById("tc-pos-button")
        btn_pos.addEventListener("click",(event) => {
            this.changeState('translate')
        })

        const btn_rot = document.getElementById("tc-rot-button")
        btn_rot.addEventListener("click",(event) => {
            this.changeState('rotate')
        })

        const btn_scale = document.getElementById("tc-scale-button")
        btn_scale.addEventListener("click",(event) => {
            this.changeState("scale")
        })


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