
/**
 * XUI.JS
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <tamirf@yahoo.com>
 *
 */

import XUIObject from "./XUIObject"
import {XViewManager,XViewsPack} from "./XViewManager"
import { _xlog,XParser,_xem,XModule,XModuleData, IXObjectData, XObjectData } from "xpell-core";

import XUICoreObjects from "./XUICoreObjects"
//  import SpellDashboardObjects from "./spell-dashboard"
//  import SpellMoveControls  from "./sui-objects/spell-move-controls";
// import * as _xc from "../XConst"




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

export class XUIModule extends XModule {
    vm: XViewManager
    _first_gesture_occured : boolean
    private _controls_element!: string

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
    loadObject(data:IXObjectData): XUIObject {
        const xobj = this.create(data)
        const ctrl = xobj.getDOMObject()
        
        
        const pe = (xobj._parent_element) ? xobj._parent_element : this._object_element;
        
        document.querySelector("#" + pe)?.append(ctrl)
        if (xobj.onMount && typeof xobj.onMount === 'function') {
            xobj.onMount()
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

    async onFrame(frameNumber:number) {
        super.onFrame(frameNumber) //bubble event to all the active objects in the object manager (om)
    }
}

export const XUI = new XUIModule({ _name: "xui" })

export default XUI
export {
    XUIObject,
    XUICoreObjects,
    XViewManager
}