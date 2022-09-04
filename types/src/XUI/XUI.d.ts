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
export declare class XUIModule extends XModule {
    vm: XViewManager;
    constructor(data: ModuleData);
    /**
     * Loads Xpell application object
     * @param xpellApp
     */
    loadApp(xpellApp: any): void;
    openUrl(url: any, target?: any): void;
    loadControl(data: any): void;
    createFromTemplate(xpell2json: any): any;
    onFrame(frameNumber: any): Promise<void>;
}
export declare const XUI: XUIModule;
export default XUI;
export { XUIObject, XUICoreObjects, XViewManager };
