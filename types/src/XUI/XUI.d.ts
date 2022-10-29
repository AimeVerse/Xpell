/**
 * XUI.JS
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <tamirf@yahoo.com>
 *
 */
import XUIObject from "./XUIObject";
import XViewManager from "./XViewManager";
import XModule, { ModuleData } from "../XModule";
import XUICoreObjects from "./XUICoreObjects";
export declare const FIRST_USER_GESTURE = "first-user-gesture";
export declare class XUIModule extends XModule {
    vm: XViewManager;
    firstGestureOccured: boolean;
    constructor(data: ModuleData);
    /**
     * Loads Xpell application object
     * @param xpellApp
     */
    loadApp(xpellApp: any): void;
    openUrl(url: any, target?: any): void;
    remove(objectId: any): void;
    loadControl(data: any): XUIObject;
    createFromTemplate(xpell2json: any): any;
    /**
     * The method fires "first-user-gesture" event
     * This method is for all Web API that requires User Gesture event.
     * @fire "first-user-gesture"
     */
    enableFirstUserGestureEvent(): void;
    onFrame(frameNumber: any): Promise<void>;
}
export declare const XUI: XUIModule;
export default XUI;
export { XUIObject, XUICoreObjects, XViewManager };
