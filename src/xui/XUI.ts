
/**
 * XUI Module - Xpell User Interface Module for HTML and CSS
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <fridman.tamir@gmail.com>
 * 
 */

import XUIObject from "./XUIObject"
import {XViewManager,XViewsPack} from "./XViewManager"
import { _xlog,XParser,_xem,XModule,XModuleData, XObjectData, _x, _xu } from "../Core/Xpell"

import XUICoreObjects from "./XUICoreObjects"
import "./Style/xui.css"


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
    _first_gesture_occurred : boolean
    

    _events = {
        _loaded: "xui-loaded",
    }

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
        this._first_gesture_occurred = false
        _xem.fire(this._events._loaded)


    }
    



    /**
     * Create a XUIObject and mount it to the DOM parent element.
     * if xData._parent_element is not provided the object will be appended to the player element or to the document body if player element is not provided
     * @param data - the XUIObject data
     * @returns XUIObject
     * 
     */
    add(xData:XObjectData) {
        const xobj = this.create(xData)
        const ctrl = xobj.getDOMObject()
        if (xobj._parent_element) {
            const hobj = document.querySelector("#" + xobj._parent_element)
            if(hobj) hobj.appendChild(ctrl)
            else {
                _xlog.log(`XUI.add| Parent object ${xobj._parent_element} not found for object ${xobj._id}`)
            }
        } else if (this._player_element) {
            this._player_element.appendChild(ctrl)
        } else {
            this._player_element = document.body
            this._player_element.appendChild(ctrl)
        }
        
        if (xobj.onMount && typeof xobj.onMount === 'function') {
            xobj.onMount()
        }

        if(xobj.onShow && typeof xobj.onShow === 'function') {
            xobj.onShow()
        }
        return xobj
    }

    /**
     * Append XUIObject to the parent XUI Object
     * @param xobj - XUIObject to append
     * @param parentXobjId - the parent XUIObject id
     */
    append(xobj:XUIObject | XObjectData,parentXobjId:string) {
        const parent = <XUIObject | undefined>this.getObject(parentXobjId)
        if(parent) {
            parent.append(xobj)
        } else {
            _xlog.log(`XUI.append| Parent object ${parentXobjId} not found for object ${xobj._id}`)
        }
    }


    /**
     * Create a XUIObject
     * @param data - XOjectData representing the XUIObject
     * @returns XUIObject
     */
    create(data?: XObjectData) {
        if(!data) {
            data = { _type: "view",_children:[]}
        }
        else if(!data.hasOwnProperty("_type")) {
            data._type = "view"
        }
        return super.create(data)
    }


    

    /**
     * Wraps an array of XObjectData objects with a wrapper object and returns the wrapper 
     * with the wrapped objects as children
     * @param xObjects - array of XObjectData objects to wrap
     * @param wrapper - the wrapper object to use, if not provided a default wrapper will be created
     * @returns - XObjectData
     */
    wrap(xObjects: (XObjectData)[], wrapper?:XObjectData) : XObjectData{
        if (!wrapper) {
            wrapper = { _type: "view", class: "xflex",_children:[]}
        } else {
            if (!wrapper._children) wrapper._children = []
            if (!wrapper.class) wrapper.class = "xflex"
            else wrapper.class += " xflex"
            if (!wrapper._type) wrapper._type = "view"
        }
        xObjects.forEach(xobj => {
            (<XObjectData>wrapper)._children?.push(xobj)
        })
        return wrapper
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
     * Removes the XUIObject from the DOM by ID and from the Object Manager
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
     * @deprecated use XUI.add instead
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
     * @deprecated use XUI.add instead
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
            XUI._first_gesture_occurred = true
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
        if(dobj) {
            dobj.style.margin = "0"
            dobj.style.padding = "0"
            dobj.appendChild(div)
        }
        return div
    }

    /**
     * Show's XUIObject that was loaded into the XUI Object Manager
     * @param objectId - the XUIObject id to show
     */
    show(objectId:string) {
        const obj = this.getObject(objectId)
        if(obj) {
            (<XUIObject>obj)?.show()
        }
    }

    /**
     * Hide's XUIObject that was loaded into the XUI Object Manager
     * @param objectId - the XUIObject id to hide
     */
    hide(objectId:string) {
        const obj = this.getObject(objectId)
        if(obj) {
            (<XUIObject>obj)?.hide()
        }
    }

    /**
     * Toggle's XUIObject that was loaded into the XUI Object Manager
     * @param objectId - the XUIObject id to toggle
     */
    toggle(objectId:string) {
        const obj = this.getObject(objectId)
        if(obj) {
            (<XUIObject>obj)?.toggle()
        }
    }


}

export const XUI = new XUIModule({ _name: "xui" })


export default XUI
export {
    XUIObject,
    XUICoreObjects,
    XViewManager
}