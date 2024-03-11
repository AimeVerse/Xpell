
/**
 * XUI Module - Xpell User Interface Module for HTML and CSS
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <fridman.tamir@gmail.com>
 *
 */

import XUIObject from "./XUIObject"
import {XViewManager,XViewsPack} from "./XViewManager"
import { _xlog,XParser,_xem,XModule,XModuleData, IXObjectData, XObjectData, _x, _xu } from "../Core/Xpell"

import XUICoreObjects from "./XUICoreObjects"



/**
 * XUIApp is the Xpell UI Application object, it can hold views and controls
 */
export type XUIApp = {
    xpell?: {
        version?: number //minimum xpell version for the app
    }
    _views?:XViewsPack,
    _controls?:{
        _parent_element:string |{} , //id of the controls (static objects) html tag 
        [k:string] : {} | string
    }
}
export const FIRST_USER_GESTURE = "first-user-gesture"

/**
 * XUI Module - Xpell User Interface Module for HTML and CSS
 */
export class XUIModule extends XModule {
    vm: XViewManager
    _first_gesture_occured : boolean
    private _controls_element!: string
    private _player_element!: any

    /**
     * @fires "xui-loaded" event
     * @param data module data
     */
    constructor(data: XModuleData) {

        super(data)
        //this.engine = SpellUI
        this.vm = new XViewManager()
        //register default objects
        this.importObjectPack(XUICoreObjects)
        this._first_gesture_occured = false
        _xem.fire("xui-loaded")


    }


    



    /**
     * Loads Xpell application object 
     * @param xuiApp 
     */
    loadApp(xuiApp:XUIApp) {
        if(xuiApp._views){
            this.vm.addViewPack(xuiApp._views);
        }
        if(xuiApp._controls){
            this.addControlsPack(xuiApp._controls)
        }
        _xem.fire("xui-app-loaded")
    }


    
    /**
     * 
     * @param url navigate the browser to new url
     * @param newWindow - if provided and true the url will be opened in a new window/tab
     */
    openUrl(url:string, newWindow?:boolean) {
        if (!newWindow) {
            document.location = url;
        }
        else {
            window.open(url);
        }
    }


    /**
     * Removes the 
     * @param objectId the XUIObject id to remove
     * @override
     */
    remove(objectId:string) {
        if (this._log_rules.removeObject) {
            _xlog.log("X3D remove object " + objectId)
        }
        document.getElementById(objectId)?.remove()
        super.remove(objectId)
    }



    addControlsPack(controls: {[name:string]:{}}) {
        Object.keys(controls).forEach(ctrl => {
            if(ctrl == "_parent_element") {this._controls_element = <string>controls[ctrl]}
            else {
                this.loadControl(<any>controls[ctrl])
            }
        })
    }

    /**
     * Create a XUIObject and mount it to the DOM parent element
     * @param data - the XUIObject data
     * @returns XUIObject
     */
    loadControl(data:XObjectData): XUIObject {
        const xobj = this.create(data)
        const ctrl = xobj.getDOMObject()
        
        
        const pe = (xobj._parent_element) ? xobj._parent_element : this._controls_element;
        
        document.querySelector("#" + pe)?.append(ctrl)
        if (xobj.onMount && typeof xobj.onMount === 'function') {
            xobj.onMount()
        }
        return xobj
    }

    /**
     * Create a XUIObject and mount it to the DOM parent element
     * @param data - the XUIObject data
     * @returns XUIObject
     */
    loadObject(data:XObjectData): XUIObject {
        const xobj = this.create(data)
        const ctrl = xobj.getDOMObject()
        
        
        if (xobj._parent_element) {
            document.querySelector("#" + xobj._parent_element)?.append(ctrl)
        } else if (this._player_element) {
            this._player_element.appendChild(ctrl)
        } else {
            throw "No parent element for the object"
        }
        
        if (xobj.onMount && typeof xobj.onMount === 'function') {
            xobj.onMount()
        }

        if(xobj.onShow && typeof xobj.onShow === 'function') {
            xobj.onShow()
        }


        return xobj
    }

    createFromTemplate(xpell2json:{[k:string]:any}) {
        const s = this.create(XParser.xpellify(xpell2json))
        return s
    }

    /**
     * The method fires "first-user-gesture" event 
     * This method is for all Web API that requires User Gesture event.
     * @fire "first-user-gesture"
     */
    enableFirstUserGestureEvent() {
        const vstyle = "position:absolute;z-index: 10000;width: 100%;height: 100vh;top:0;left: 0;background-color: transparent;"
        const obj = XUI.create({ _type: "view", _id: "first-gesture-overlay", style: vstyle })
        obj.onClick = `document.dispatchEvent(new CustomEvent("${FIRST_USER_GESTURE}"));`
        document.body.appendChild(obj.getDOMObject())
        document.addEventListener("first-user-gesture", (e) => {
            XUI.remove("first-gesture-overlay")
            XUI._first_gesture_occured = true
        })

    }

    // async onFrame(frameNumber:number) {
    //     super.onFrame(frameNumber) //bubble event to all the active objects in the object manager (om)
    // }

    /**
     * This method creates a player element and append it to the DOM
     * @param playerId - optional id of the player element
     * @param elementId - optional id of the element to append the player to, if not provided the player will be appended to the body
     * @returns HTMLDivElement
     */
    createPlayer(playerId:string = "xplayer",elementId?:string,cssClass?:string): HTMLDivElement {
        const dobj = (elementId) ? document.getElementById(elementId) : document.body
        const div = document.createElement("div")
        div.id = playerId
        div.className = (cssClass) ? cssClass : "xplayer"
        div.style.width = "100%"
        div.style.height = "100%"
        this._player_element = div
        if(dobj) dobj.appendChild(div)
        return div
    }
}

export const XUI = new XUIModule({ _name: "xui" })
_x.loadModule(XUI)

export default XUI
export {
    XUIObject,
    XUICoreObjects,
    XViewManager
}