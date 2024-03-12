
/**
 * XAI - Xpell AI Module
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <fridman.tamir@gmail.com>
 *
 */

// import XUIObject from "./XUIObject"
import {XModule,XModuleData,_x,_xem } from "../Core/Xpell"
// import { _xem } from "../XEM/XEventManager"
// import * as _xc from "../XConst"
import {XAIObjects} from "./XAICoreObjects"

export class XAIModule extends XModule {

    /**
     * @fires "xai-loaded" event
     * @param data module data
     */
    constructor(data: XModuleData) {

        super(data)
        this.importObjectPack(XAIObjects)
        _xem.fire("xai-loaded")
        
    }





    /**
     * un mark to implement on-frame functionality
     */

    // async onFrame(frameNumber) {        
    //     super.onFrame(frameNumber) //bubble event to all the active objects in the object manager (om)
    // }
}

export const XAI = new XAIModule({ _name: "xai" })
// _x.loadModule(XAI)
export default XAI
export {XAIObjects}