/**
 * XJoystick
 * @description XEditor Scene editor controls
 */

import XUI from "./XUI"
import XUtils from "../XUtils"
import XUIObject from "./XUIObject"
import XData from "../XData"

export class XTransformControls extends XUIObject {
    private _keyboard_down_listener: Function
    private _key_down: boolean

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

        this._top_bar = XUI.create ({
            _type:"view",
            _id:"xtransform-controls-top-bar",name:"xtransform-controls-top-bar",class:"xtransform-controls-top-bar",
            style:"width:100%;height:20px;left:0;top:0;text-align:center;border-bottom:1px white solid",
            text:this._title
        })

        this.append(this._top_bar)


        const gridRowStyle = "text-align:center;flex:0 0 25%"

        this._grid_title = XUI.create ({
            _type:"view",
            style:"width:100%;height:20px;left:0;top:0;display:flex",
            _children:[
                {_type:"view",text:"...",style:gridRowStyle},
                {_type:"view",text:"X",style:gridRowStyle},
                {_type:"view",text:"Y",style:gridRowStyle},
                {_type:"view",text:"Z",style:gridRowStyle},
            ]
        })

        this.append(this._grid_title)

        this._grid_position_row = XUI.create ({
            _type:"view",
            style:"width:100%;height:20px;left:0;top:0;display:flex",
            _children:[
                {_type:"view",text:"Pos",style:gridRowStyle},
                {_type:"view",text:"0",_data_source:"tc-pos-x",style:gridRowStyle},
                {_type:"view",text:"0",_data_source:"tc-pos-y",style:gridRowStyle},
                {_type:"view",text:"0",_data_source:"tc-pos-z",style:gridRowStyle},
            ]
        })

        this.append(this._grid_position_row)

        this._grid_rotation_row = XUI.create ({
            _type:"view",
            style:"width:100%;height:20px;left:0;top:0;display:flex",
            _children:[
                {_type:"view",text:"Rot",style:gridRowStyle},
                {_type:"view",text:"0",_data_source:"tc-rot-x",style:gridRowStyle},
                {_type:"view",text:"0",_data_source:"tc-rot-y",style:gridRowStyle},
                {_type:"view",text:"0",_data_source:"tc-rot-z",style:gridRowStyle},
            ]
        })

        this.append(this._grid_rotation_row)



    }

    async onMount() {
        const dom_object = super.getDOMObject() //create dom element for first time 

        const sthis = this //strong this
        document.addEventListener('keydown', async (event) => {
            sthis._key_down = true
            const joy_move = { forward: 0, backward: 0, left: 0, right: 0, up: 0, down: 0 }
            const vel = 0.2
            const pwr = (event.shiftKey) ? vel * 2 : vel
            const lkey = event.key.toLowerCase()
            // if (lkey == 'w') joy_move.forward = pwr
            // if (lkey == 's') joy_move.backward = pwr
            // if (lkey == 'a') joy_move.left = pwr
            // if (lkey == 'd') joy_move.right = pwr
            // if (lkey == ' ') joy_move.up = pwr
            // if (lkey == 'x') joy_move.down = pwr



            //to-do handle multiple key press with keyup event 
            


        }, false);

        document.addEventListener('keyup', async (event) => {
            if (sthis._key_down) {
                sthis._key_down = false
                const joy_move = { forward: 0, backward: 0, left: 0, right: 0, up: 0, down: 0 }
            }
        }, false);



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