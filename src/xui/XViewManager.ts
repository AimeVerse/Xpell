

/**
 * @class XViewManager
 * @description manage views activities
 * */

import {_x, _xem,_xlog,_xu,IXObjectData} from "xpell-core"
// import * as _xem from "../XEventManager"
// import { XLogger as _xlog } from "../XLogger"
// import { Xpell as _x } from "../Xpell"
// import * as _xc from "../XConst"
// import { XUtils as _xu } from "../XUtils"
// import IXObjectData from "../XObject"
import XUI from "./XUI"
import XView from "./XUICoreObjects"
import XUIObject from "./XUIObject"

export type XViewsPack = {
    _parent_element:string | {}, //id of the view manager html tag 
    [k:string] : {} | string
}

export class XViewManager {
    viewMetadata: Record<string, IXObjectData> = {}
    views: Record<string, XView> = {}
    activeView!: string | null
    parentHTMLElement: string = "xplayer"

    /**
     * Xpell View Manager constructor
     * @member viewMetadata This object contains the textual JSON representation of views (these are not XView objects, uses for caching views before loading)
     * @member views View objects that are ready to use (show, hide...)
     * @member activeView The screen active view (page)
     */
    constructor() {
        this.init();
    }



    /**
     * Initialized the View Manager and register "hashchange" event on the window to control the url string
     * @fire "xvm-loaded" event
     */
    init() {
        //handle back functionality for browser
        window.addEventListener('hashchange', this.onBrowserUrlHashChanged)
        _xlog.log("View Manager has been initialized")
        _xem.fire("xui-vm-loaded")
    }

    /**
     * Creates new SpellView 
     * @description turns view-data (JSON) to a spell object 
     * @param viewData
     * @param auto_add - if true and the view data (view_data) contains a "name" string the new view will be added automatically to the view manager
     * @return {XView}
     */
    createView(viewData:IXObjectData, auto_add = true) {


        let new_view: XUIObject = XUI.create(viewData);
        if (auto_add && viewData.hasOwnProperty("_id")) {
            document.querySelector("#" + this.parentHTMLElement)?.append(new_view.getDOMObject());
            new_view.onMount()
            this.addView(new_view, <string>viewData._id)
        }
        return new_view;
    }


    /**
     * Adds an instance of a view (XView) to the View Manager
     * @param {XView}view The view instance
     * @param {string}viewName The view name
     */
    addView(view: XView, viewName: string) {
        this.views[viewName] = view;
    }

    /**
     * Retrieve the view instance from the View Manager
     * @param viewName The view name to retrieve
     * @returns XView
     */
    getView(viewName: string): XView {
        return this.views[viewName];
    }

    /**
     * Checks if there is an instance of a view in the View Manager
     * @param viewName The view name
     * @returns 
     */
    hasView(viewName: string): boolean {
        return this.views.hasOwnProperty(viewName)
    }

    addViewPack(vuz:XViewsPack): void {
        let rvuz = Object.keys(vuz);
        rvuz.forEach((vu) => {
        
            if(vu == "_parent_element") {this.parentHTMLElement = <string>vuz[vu]}
            else {this.viewMetadata[vu] = <IXObjectData>vuz[vu]}
        });
    }

    addRawView(viewName: string, viewData:IXObjectData): void {
        this.viewMetadata[viewName] = viewData
    }

    /**
     * Load page (entire screen) on top of the active page
     * This method handles the first routing where the view name is in the url (http://server:port/#view-name)
     * @param defaultViewName this param is the default view to load in case the url param is empty
     */
    loadPage(defaultViewName: string): void {
        let anc = window.location.hash
        if (anc && anc.length > 1) {
            this.activeView = anc.substring(1);
        } else {
            this.activeView = defaultViewName;
        }
        this.showPage(this.activeView)
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
            if (XUI.vm.activeView != viewNameFromUrl) { //prevent double call on showPage
                XUI.vm.showPage(viewNameFromUrl)
            }
        }
    }



    /**
     * Show view on screen
     * @param {*} viewName 
     */
    showView(viewName: string): void {
        let newView;
        let oncreate = false;
        if (this.hasView(viewName)) {
            newView = this.getView(viewName);
        }
        else {
            let vu = this.viewMetadata[viewName];
            vu.name = viewName;
            newView = this.createView(vu)
            oncreate = true;
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
        if (this.activeView == viewName) this.activeView = null
        this.hideView(viewName)
        XUI.openUrl("#");
    }

    /**
     * Show view as page (set as active view and dismiss former active)
     * @param {*} viewName 
     */
    showPage(viewName: string): void {
        let vu: IXObjectData, newView;
        let oncreate = false;
        if (this.hasView(viewName)) {
            newView = this.getView(viewName);
        }
        else {
            vu = this.viewMetadata[viewName];
            vu.name = viewName;
            newView = this.createView(vu)
            oncreate = true;
        }

        //get the active (former) view hide it
        // let activeView = this.getView(this.activeView);
        if (this.activeView) {
            this.getView(this.activeView).hide();
        }
        newView.show();
        this.activeView = viewName;
        XUI.openUrl("#" + this.activeView);
    }



}

export default XViewManager