/**
 * XUI.JS
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <tamirf@yahoo.com>
 *
 */
import XUIObject from "./XUIObject";
import { XViewManager, XViewsPack } from "./XViewManager";
import { XModule, XModuleData, IXObjectData } from "xpell-core";
import XUICoreObjects from "./XUICoreObjects";
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
export declare class XUIModule extends XModule {
    vm: XViewManager;
    _first_gesture_occured: boolean;
    private _controls_element;
    /**
     * @fires "xui-loaded" event
     * @param data module data
     */
    constructor(data: XModuleData);
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
     * Removes the
     * @param objectId the XUIObject id to remove
     * @override
     */
    remove(objectId: string): void;
    addControlsPack(controls: {
        [name: string]: {};
    }): void;
    loadControl(data: IXObjectData): XUIObject;
    createFromTemplate(xpell2json: {
        [k: string]: any;
    }): any;
    /**
     * The method fires "first-user-gesture" event
     * This method is for all Web API that requires User Gesture event.
     * @fire "first-user-gesture"
     */
    enableFirstUserGestureEvent(): void;
    onFrame(frameNumber: number): Promise<void>;
}
export declare const XUI: XUIModule;
export default XUI;
export { XUIObject, XUICoreObjects, XViewManager };
