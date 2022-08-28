/**
 * XJoystick
 * @description Joystick control for Xpell applications
 * Based on Nipple.js -  https://github.com/yoannmoinet/nipplejs
 */

import XUtils from "../XUtils"
import XUIObject from "./XUIObject"
import XData from "../XData"
import nipplejs from 'nipplejs' //NippleJS Joystick Controller




export class XJoystick extends XUIObject {
    private _joy_manager: any
    private _joy_options: any
    private _keyboard_down_listener: Function
    private _key_down: boolean
    
    constructor(data) {

        const ids = XUtils.guid()
        const defaults = {
            _type: "joystick",
            _html_tag: "div",
            class: "xjoystick",
            _title: "",
            _id: "som-" + ids,
            _parent_element:"body",
            _joy_manager: null,
            _joy_options: {
                size: 120,
                multitouch: true,
                maxNumberOfNipples: 1,
                mode: 'static',
                restJoystick: true,
                shape: 'circle',
                position: { bottom: '80px', left: '80px' },
                dynamicPage: true,
            }
        }
        super(data, defaults);
        


    }

    async onMount() {
        const dom_object = super.getDOMObject() //create dom element for fist time 
        if (!this._joy_manager) {
            this._joy_options.zone = document.getElementById(<string>this["_id"]) 
            this._joy_manager = nipplejs.create(this._joy_options);
            this._joy_manager['0'].on('move', function (evt, data) {
                const forward = data.vector.y
                const turn = data.vector.x

                const joy_move = {forward: 0,backward: 0,left: 0,right: 0,up:0,down:0}

                if (forward > 0) {
                    joy_move.forward = Math.abs(forward)
                    joy_move.backward = 0
                } else if (forward < 0) {
                    joy_move.forward = 0
                    joy_move.backward = Math.abs(forward)
                }

                if (turn > 0) {
                    joy_move.left = 0
                    joy_move.right = Math.abs(turn)
                } else if (turn < 0) {
                    joy_move.left = Math.abs(turn)
                    joy_move.right = 0
                }
                XData.objects["joy-move"] = joy_move
            })

            this._joy_manager['0'].on('end', function (evt) {
                const joy_move = {forward: 0,backward: 0,left: 0,right: 0}
                XData.objects["joy-move"] = joy_move
            })

            const sthis = this //strong this
            document.addEventListener('keydown', async (event) => {
                sthis._key_down = true
                const joy_move = {forward: 0,backward: 0,left: 0,right: 0,up:0,down:0}
                const vel = 0.2
                const pwr = (event.shiftKey) ? vel*2 : vel
                const lkey = event.key.toLowerCase()
                if(lkey == 'w') joy_move.forward = pwr
                if(lkey == 's') joy_move.backward = pwr
                if(lkey == 'a') joy_move.left = pwr
                if(lkey == 'd') joy_move.right = pwr
                if(lkey == ' ') joy_move.up = pwr
                if(lkey == 'x') joy_move.down = pwr



                //to-do handle multiple key press with keyup event 
                XData.objects["joy-move"] = joy_move
    
    
            }, false);

            document.addEventListener('keyup', async (event) => {
                if(sthis._key_down) {
                    sthis._key_down = false
                    const joy_move = {forward: 0,backward: 0,left: 0,right: 0,up:0,down:0}
                    XData.objects["joy-move"] = joy_move
                }
            }, false);



        }
        super.onCreate()
        //return dom_object
    }


}



export class XMoveControls {
    static get_objects() {
        return {
            "joystick": XJoystick
        }
    }
}





export default XJoystick