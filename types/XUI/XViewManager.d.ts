/**
 * @class XViewManager
 * @description manage views activities
 * */
import { XObjectData } from "../Core/Xpell";
import XView from "./XUICoreObjects";
import XUIObject from "./XUIObject";
export type XViewsPack = {
    _parent_element: string | {};
    [k: string]: {} | string;
};
export declare class XViewManager {
    #private;
    _log_rules: {
        _init: boolean;
        _create: boolean;
    };
    constructor();
    get _id(): string;
    get _active_view(): string | null;
    get _default_parent_element(): string;
    /**
     * Initialized the View Manager and register "hashchange" event on the window to control the url string
     * @fire "xui-vm-loaded" event
     */
    init(): void;
    /**
     * Creates new SpellView
     * @description turns view-data (JSON) to a spell object
     * @param viewData
     * @param auto_add - if true and the view data (view_data) contains a "name" string the new view will be added automatically to the view manager
     * @return {XView}
     */
    createView(viewData: XObjectData, auto_add?: boolean): Promise<XUIObject>;
    /**
     * Adds an instance of a view (XView) to the View Manager
     * @param {XView}view The view instance
     * @param {string}viewName The view name
     */
    addView(view: XView, viewName: string): void;
    /**
     * Retrieve the view instance from the View Manager
     * @param viewName The view name to retrieve
     * @returns XView
     */
    getView(viewName: string): XView;
    /**
     * Checks if there is an instance of a view in the View Manager
     * @param viewName The view name
     * @returns
     */
    hasView(viewName: string): boolean;
    addViewPack(vuz: XViewsPack): void;
    addRawView(viewName: string, viewData: XObjectData): void;
    /**
     * Load page (entire screen) on top of the active page
     * This method handles the first routing where the view name is in the url (http://server:port/#view-name)
     * @param defaultViewName this param is the default view to load in case the url param is empty
     */
    loadPage(defaultViewName: string): void;
    /**
     * handle the hashchange browser event, used to support Back functionality.
     */
    onBrowserUrlHashChanged(): void;
    /**
     * Show view on screen
     * @param {*} viewName
     */
    showView(viewName: string): Promise<void>;
    /**
         * Show view on screen
         * @param {*} viewName
         */
    hideView(viewName: string): void;
    /**
    * Hide the active page and the page URL
    * @param {*} viewName
    */
    hidePage(viewName: string): void;
    /**
     * Show view as page (set as active view and dismiss former active)
     * @param {*} viewName
     */
    showPage(viewName: string): Promise<XView>;
}
export default XViewManager;
//# sourceMappingURL=XViewManager.d.ts.map