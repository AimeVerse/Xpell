

/**
 * @class XViewManager
 * @description manage views activities
 * */

 import * as _XEM from "../XEventManager"
 import {Xpell as _X} from "../Xpell"
 import * as _XC from "../XConst"
 import XUI from "./XUI"
 import {XUtils as _XU} from "../XUtils"
 import XView  from "./XUICoreObjects"
 import XUIObject  from "./XUIObject"
 import IXObjectData  from "../XObject"
 
 
 
 
 export class XViewManager {
     rawViews: Record<string,IXObjectData> ={}
     views:Record<string,XView>= {}
     activeView: string  
     parentHTMLElement: string = "xplayer" 
 
     /**
      * Spell View Manager constructor
      * @member raw_views This object contains the textual JSON representation of views (these are not SpellView objects, uses for caching views before loading)
      * @member views SpellView objects that are ready to use (show, hide...)
      */
     constructor() { 
         this.init();
     }
 
    

     init() {
         //handle back functionality for browser
         window.addEventListener('hashchange', this.hashchange)
         _XEM.XEventManager.fire(_XEM.XEventList.vm_loaded)
     }
 
     /**
      * Creates new SpellView 
      * @description turns view-data (JSON) to a spell object 
      * @param view_data
      * @param auto_add - if true and the view data {view_data} contains a "name" string the new view will be added automatically to the view manager
      * @return {XView}
      */
     createView(view_data, auto_add = true) {
 
         let new_view:XUIObject = XUI.create(view_data);
         if (auto_add && view_data.hasOwnProperty("name")) {
             document.querySelector("#" + this.parentHTMLElement)?.append(new_view.getDOMObject());
             new_view.onMount()
             this.addView(new_view, view_data.name)
         }
         return new_view;
     }
 
 
     addView(view, view_name) {
         this.views[view_name] = view;
     }
 
     getView(view_name):XView {
         return this.views[view_name];
     }
 
     hasView(view_name):boolean {
         return this.views.hasOwnProperty(view_name)
     }
 
     addRawViews(vuz):void {
         let rvuz = Object.keys(vuz);
         rvuz.forEach((vu) => this.rawViews[vu] = vuz[vu]);
     }
 
     addRawView(view_name, view_data):void {
         this.rawViews[view_name] = view_data
     }
 
     loadPage(default_view_name):void {
         let anc = window.location.hash
         if (anc && anc.length > 1) {
             this.activeView = anc.substring(1);
         } else {
             this.activeView = default_view_name;
         }
         this.showPage(this.activeView)
     }
 
 
     /**
      * handle the hashchange browser event, used to support Back functionality.
      */
     hashchange():void {
         let anc = window.location.hash
         if (anc && anc.length > 1) {
             let v_name = anc.substring(1);
             if (this.activeView != v_name) {
                 XUI.vm.showPage(v_name)
             }
         }
     }
 
 
     
     /**
      * Show view on screen
      * @param {*} viewName 
      */
     showView(viewName:string):void {
         let newView;
         let oncreate = false;
         if (this.hasView(viewName)) {
             newView = this.getView(viewName);
         }
         else {
             let vu = this.rawViews[viewName];
             vu.name = viewName;
             newView = this.createView(vu) 
             oncreate = true;
         }
         newView.show()
     }
 
 
     /**
      * Show view as page (set as active view and dismiss former active)
      * @param {*} viewName 
      */
     showPage(viewName:string):void {
         let vu:IXObjectData , newView;
         let oncreate = false;
         if (this.hasView(viewName)) {
             newView = this.getView(viewName);
         }
         else {
             vu = this.rawViews[viewName];
             vu.name = viewName;
             newView = this.createView(vu) 
             oncreate = true;
         }
 
         //get the active view
         let v_active = this.getView(this.activeView);
         if (v_active) {
             v_active["hide"]();
         }
         newView.show();
         this.activeView = viewName;
 
         
         XUI.openUrl("#" + this.activeView);
     }
 
 
    
 }
 
 export default XViewManager