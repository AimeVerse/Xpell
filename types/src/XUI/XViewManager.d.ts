/**
 * @class XViewManager
 * @description manage views activities
 * */
import XView from "./XUICoreObjects";
import XUIObject from "./XUIObject";
import IXObjectData from "../XObject";
export declare class XViewManager {
    viewMetadata: Record<string, IXObjectData>;
    views: Record<string, XView>;
    activeView: string;
    parentHTMLElement: string;
    /**
     * Spell View Manager constructor
     * @member raw_views This object contains the textual JSON representation of views (these are not SpellView objects, uses for caching views before loading)
     * @member views SpellView objects that are ready to use (show, hide...)
     */
    constructor();
    /**
     * Initialized the View Manager and register "hashchange" event on the window to control the url string
     * @fire "xvm-loaded" event
     */
    init(): void;
    /**
     * Creates new SpellView
     * @description turns view-data (JSON) to a spell object
     * @param view_data
     * @param auto_add - if true and the view data (view_data) contains a "name" string the new view will be added automatically to the view manager
     * @return {XView}
     */
    createView(view_data: any, auto_add?: boolean): XUIObject;
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
    hasView(viewName: any): boolean;
    addViewsMetadataObject(vuz: any): void;
    addRawView(viewName: string, viewData: IXObjectData): void;
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
    showView(viewName: string): void;
    /**
     * Show view as page (set as active view and dismiss former active)
     * @param {*} viewName
     */
    showPage(viewName: string): void;
}
export default XViewManager;
