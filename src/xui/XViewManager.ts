

/**
 * @class XViewManager
 * @description manage views activities
 * */

import {_x,_xlog,_xu,XObjectData} from "xpell-core"
import  _xem from "../XEM/XEventManager"
import XUI from "./XUI"
import XView from "./XUICoreObjects"
import XUIObject from "./XUIObject"

export type XViewsPack = {
    _parent_element:string | {}, //id of the view manager html tag 
    [k:string] : {} | string
}

export class XViewManager {
    #_id:string = _xu.guid()
    _log_rules = {
        _init: false,
        _create: false,
        
    }

    #_raw_views: Record<string, XObjectData> = {} //raw views data (XData)
    #_views: Record<string, XView> = {}
    #_active_view!: string | null
    #_default_parent_element: string = "xplayer" //default parent HTML element ID for views

   
    constructor() {
        this.init();
        
    }

    get _id():string {return this.#_id}
    get _active_view():string | null {return this.#_active_view}
    get _default_parent_element():string {return this.#_default_parent_element}

    /**
     * Initialized the View Manager and register "hashchange" event on the window to control the url string
     * @fire "xui-vm-loaded" event
     */
    init() {
        //handle back functionality for browser
        window.addEventListener('hashchange', this.onBrowserUrlHashChanged)
        if (this._log_rules._init) _xlog.log("View Manager has been initialized")
        _xem.fire("xui-vm-loaded")
    }

    /**
     * Creates new SpellView 
     * @description turns view-data (JSON) to a spell object 
     * @param viewData
     * @param auto_add - if true and the view data (view_data) contains a "name" string the new view will be added automatically to the view manager
     * @return {XView}
     */
    async createView(viewData:XObjectData, auto_add = true) {

        
        let newView: XUIObject = XUI.create(viewData);        
        if (this._log_rules._create) _xlog.log("View " + newView._id + " has been created in the View Manager")
        const elem:string  = (newView._parent_element) ?<string>newView._parent_element : this.#_default_parent_element
        document.querySelector("#" + elem)?.append(newView.getDOMObject());
        await newView.onMount()

        if (auto_add && newView.hasOwnProperty("_id")) {
            this.addView(newView, <string>newView._id)
        }
        return newView;
    }


    /**
     * Adds an instance of a view (XView) to the View Manager
     * @param {XView}view The view instance
     * @param {string}viewName The view name
     */
    addView(view: XView, viewName: string) {
        this.#_views[viewName] = view;
        console.log("View " + viewName + " has been added to the View Manager")
    }

    /**
     * Retrieve the view instance from the View Manager
     * @param viewName The view name to retrieve
     * @returns XView
     */
    getView(viewName: string): XView {
        return this.#_views[viewName];
    }

    /**
     * Checks if there is an instance of a view in the View Manager
     * @param viewName The view name
     * @returns 
     */
    hasView(viewName: string): boolean {
        return this.#_views.hasOwnProperty(viewName)
    }

    addViewPack(vuz:XViewsPack): void {
        let rvuz = Object.keys(vuz);
        rvuz.forEach((vu) => {
            if(vu == "_parent_element") {this.#_default_parent_element = <string>vuz[vu]}
            else {this.#_raw_views[vu] = <XObjectData>vuz[vu]}
        });
    }

    addRawView(viewName: string, viewData:XObjectData): void {
        this.#_raw_views[viewName] = viewData
    }

    /**
     * Load page (entire screen) on top of the active page
     * This method handles the first routing where the view name is in the url (http://server:port/#view-name)
     * @param defaultViewName this param is the default view to load in case the url param is empty
     */
    loadPage(defaultViewName: string): void {
        let anc = window.location.hash
        if (anc && anc.length > 1) {
            this.#_active_view = anc.substring(1);
        } else {
            this.#_active_view = defaultViewName;
        }
        this.showPage(this.#_active_view)
    }

    /*TO-DO remove view */

    


    /**
     * handle the hashchange browser event, used to support Back functionality.
     */
    onBrowserUrlHashChanged(): void {
        // this function is being called by event emitter therefore "this" is NOT View Manager
        let anc = window.location.hash
        if (anc && anc.length > 1) {
            let viewNameFromUrl = anc.substring(1);
            if (XUI.vm.#_active_view != viewNameFromUrl) { //prevent double call on showPage
                XUI.vm.showPage(viewNameFromUrl)
            }
        }
    }



    /**
     * Show view on screen
     * @param {*} viewName 
     */
    async showView(viewName: string): Promise<void> {
        let newView;
        if (this.hasView(viewName)) {
            newView = this.getView(viewName);
        }
        else {
            let vu = this.#_raw_views[viewName];
            vu.name = viewName;
            newView = await this.createView(vu)
        }
        newView.show()
    }


    /**
         * Show view on screen
         * @param {*} viewName 
         */
    hideView(viewName: string): void {
        if (this.hasView(viewName)) {
            (<XUIObject>this.getView(viewName)).hide()
        }
    }


    /**
    * Hide the active page and the page URL
    * @param {*} viewName 
    */
    hidePage(viewName: string): void {
        if (this.#_active_view == viewName) this.#_active_view = null
        this.hideView(viewName)
        XUI.openUrl("#");
    }

    /**
     * Show view as page (set as active view and dismiss former active)
     * @param {*} viewName 
     */
    async showPage(viewName: string): Promise<XView> {
        let vu: XObjectData, newView;
        if (this.hasView(viewName)) {
            newView = this.getView(viewName);
        }
        else {
            vu = this.#_raw_views[viewName];
            vu.name = viewName;
            newView = await this.createView(vu)
        }

        //get the active (former) view hide it
        // let activeView = this.getView(this.activeView);
        
        
        if (this.#_active_view) {
            const activeXView = this.getView(this.#_active_view)
            if(activeXView) activeXView.hide()
            else console.warn("XUI VM warning: active view not found 🧐",this.#_active_view);
        }
        newView.show();
        this.#_active_view = viewName;
        XUI.openUrl("#" + this.#_active_view);
        return newView
    }



}

export default XViewManager