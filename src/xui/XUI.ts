
/**
 * XUI.JS
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <tamirf@yahoo.com>
 *
 */

 import XUIObject from "./XUIObject"
 import XViewManager from "./XViewManager"
 import XModule, { ModuleData } from "../XModule"
 import {XEventManager,XEventList} from  "../XEventManager"
 import XUICoreObjects from "./XUICoreObjects"
//  import SpellDashboardObjects from "./spell-dashboard"
//  import SpellMoveControls  from "./sui-objects/spell-move-controls";
 import XParser  from "../XParser";
 
 
 export class XUIModule extends XModule {
     vm: XViewManager
 
     constructor(data:ModuleData) {
         
         super(data)
         //this.engine = SpellUI
         this.vm = new XViewManager()
         //register default objects
         this.importObjects(XUICoreObjects)
         //this.importObjects(SpellDashboardObjects)
         //this.importObjects(SpellMoveControls)
 
         XEventManager.fire("xui-loaded")
 
     }
 
 
     
 
    
     loadApp(xpellApp) {
         if(xpellApp.player && xpellApp.player.html_element) {
             this.vm["parentHTMLElement"] = xpellApp.player.html_element
         }
         this.vm.addRawViews(xpellApp.views);
         XEventManager.fire(XEventList.app_loaded)
     }
 
     openUrl(url, target = null) {
         if (!target) {
             document.location = url;
         }
         else {
             window.open(url);
         }
     }
 
 
 
     
     
 
     
     
 
     loadControl(data) {
         const xobj = this.create(data)
         
         const ctrl = xobj.getDOMObject()
         const pe = (xobj._parent_element) ? xobj._parent_element : this.vm["parentHTMLElement"];
         document.querySelector("#" + pe)?.append(ctrl)
        //  if(xobj.onCreate && typeof xobj.onCreate === 'function') {
        //      xobj.onCreate()
        //  }
         
         
     }
 
     createFromTemplate(xpell2json) {
         const s = this.create(XParser.xpellify(xpell2json))
         return s
     }
 
     async onFrame(frameNumber) {
         super.onFrame(frameNumber) //bubble event to all the active objects in the object manager (om)
         //console.log("frame " + frame_number)
     }
 }
 
 export const XUI = new XUIModule({name:"xui"})
 
 export default XUI
 export {
     XUIObject,
     XUICoreObjects,
     XViewManager
 }