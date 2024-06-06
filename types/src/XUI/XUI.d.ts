/**
 * XUI Module - Xpell User Interface Module for HTML and CSS
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <fridman.tamir@gmail.com>
 *
 */
import XUIObject from "./XUIObject";
import { XViewManager, XViewsPack } from "./XViewManager";
import { XModule, XModuleData, XObjectData } from "../Core/Xpell";
import XUICoreObjects from "./XUICoreObjects";
import "./Style/xui.css";
/**
 * XUIApp is the Xpell UI Application object, it can hold views and controls
 */
export type XUIApp = {
    xpell?: {
        version?: number;
    };
    _views?: XViewsPack;
    _controls?: {
        _parent_element: string | {};
        [k: string]: {} | string;
    };
};
export declare const FIRST_USER_GESTURE = "first-user-gesture";
/**
 * XUI Module - Xpell User Interface Module for HTML and CSS
 */
export declare class XUIModule extends XModule {
    vm: XViewManager;
    _first_gesture_occurred: boolean;
    _events: {
        _loaded: string;
    };
    private _controls_element;
    private _player_element;
    /**
     * @fires "xui-loaded" event
     * @param data module data
     */
    constructor(data: XModuleData);
    /**
     * Create a XUIObject and mount it to the DOM parent element.
     * if xData._parent_element is not provided the object will be appended to the player element or to the document body if player element is not provided
     * @param data - the XUIObject data
     * @returns XUIObject
     *
     */
    add(xData: XObjectData): any;
    /**
     * Append XUIObject to the parent XUI Object
     * @param xobj - XUIObject to append
     * @param parentXobjId - the parent XUIObject id
     */
    append(xobj: XUIObject | XObjectData, parentXobjId: string): void;
    /**
     * Create a XUIObject
     * @param data - XOjectData representing the XUIObject
     * @returns XUIObject
     */
    create(data?: XObjectData): any;
    /**
     * Wraps an array of XObjectData objects with a wrapper object and returns the wrapper
     * with the wrapped objects as children
     * @param xObjects - array of XObjectData objects to wrap
     * @param wrapper - the wrapper object to use, if not provided a default wrapper will be created
     * @returns - XObjectData
     */
    wrap(xObjects: (XObjectData)[], wrapper?: XObjectData): XObjectData;
    /**
     * Loads Xpell application object
     * @param xuiApp
     */
    loadApp(xuiApp: XUIApp): void;
    /**
     *
     * @param url navigate the browser to new url
     * @param newWindow - if provided and true the url will be opened in a new window/tab
     */
    openUrl(url: string, newWindow?: boolean): void;
    /**
     * Removes the XUIObject from the DOM by ID and from the Object Manager
     * @param objectId the XUIObject id to remove
     * @override
     */
    remove(objectId: string): void;
    addControlsPack(controls: {
        [name: string]: {};
    }): void;
    /**
     * Create a XUIObject and mount it to the DOM parent element
     * @param data - the XUIObject data
     * @returns XUIObject
     * @deprecated use XUI.add instead
     */
    loadControl(data: XObjectData): XUIObject;
    /**
     * Create a XUIObject and mount it to the DOM parent element
     * @param data - the XUIObject data
     * @returns XUIObject
     * @deprecated use XUI.add instead
     */
    loadObject(data: XObjectData): XUIObject;
    createFromTemplate(xpell2json: {
        [k: string]: any;
    }): any;
    /**
     * The method fires "first-user-gesture" event
     * This method is for all Web API that requires User Gesture event.
     * @fire "first-user-gesture"
     */
    enableFirstUserGestureEvent(): void;
    /**
     * This method creates a player element and append it to the DOM
     * @param playerId - optional id of the player element
     * @param elementId - optional id of the element to append the player to, if not provided the player will be appended to the body
     * @returns HTMLDivElement
     */
    createPlayer(playerId?: string, elementId?: string, cssClass?: string): HTMLDivElement;
    /**
     * Show's XUIObject that was loaded into the XUI Object Manager
     * @param objectId - the XUIObject id to show
     */
    show(objectId: string): void;
    /**
     * Hide's XUIObject that was loaded into the XUI Object Manager
     * @param objectId - the XUIObject id to hide
     */
    hide(objectId: string): void;
    /**
     * Toggle's XUIObject that was loaded into the XUI Object Manager
     * @param objectId - the XUIObject id to toggle
     */
    toggle(objectId: string): void;
}
export declare const XUI: XUIModule;
export default XUI;
export { XUIObject, XUICoreObjects, XViewManager };
