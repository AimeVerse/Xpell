/**
 * Xpell - Real-Time User Interface Platform
 * Typescript Edition   
 *      
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version
 * 3 of the License, or (at your option) any later version.
 *
 *
 */



/** interface */
import XCommand from "./XCommand"
import {XUtils,FPSCalc} from "./XUtils"
import {XLogger as _xlog} from "./XLogger"
import XData from "./XData"
import XParser from "./XParser"
import XModule from "./XModule"
import {XEventManager as XEM,XEventList,XEvent} from  "./XEventManager"







// class XpellMainModule extends XModule {

    

//     constructor(data) {
//         const defaults = {name:"xpell"}
//         super(data,defaults)
//     }

//     _info(xcmd:XCommand) {
//         _xlog.log("Xpell Engine V:" + Xpell.version)
//     }

//     _loadModule(xcmd:XCommand) {
//         _xlog.log(xcmd.params["name"])
//     }
// }

/**
 * @class  Xpell main engine
 */
export class XpellEngine {
    version : string
    engineId: string
    frameNumber: number
    #fpsCalc: FPSCalc

    #modules = {}
    parser: typeof XParser
    fps_mavg: number
    ts: number

    constructor() {
        this.version = "0.0.1"
        this.engineId = XUtils.guid()
        this.frameNumber = 0
        this.#fpsCalc = new FPSCalc()
        this.parser = XParser
        this.#modules = {}
        XEM.fire(XEventList.ENGINE_INIT)
        //this.load()
    }


   

    loadModule(xModule:XModule):void {
        if (this.#modules.hasOwnProperty(xModule.name)) {
            _xlog.log("module " + xModule.name + " already loaded")
        } else {
            this.#modules[xModule.name] = xModule;
            xModule.load()
        }
    }

    loadModules(xModulesArray:[]):void {
        const sthis = this //strong this
        xModulesArray.forEach(mod => sthis.loadModule(mod))
    }



    load() {
        //this.loadModule(new XpellMainModule({}))
    }

    info(){
        _xlog.log("Xpell version " + this.version)   
    }


     /**
     * Run textual xCommand -
     * @param {cmd} - text command
     */

    run(stringXCommand:string) {
        if(stringXCommand?.length>2) {
            let scmd = XParser.parse(stringXCommand)
            return this.execute(scmd)
        } else {
            throw "Unable to parse Xpell command"
        }
    }

    /**
     * Execute Xpell Command 
     * @param {XCommand} 
     */
    execute(xcmd:XCommand):any {
        if(xcmd && xcmd.module && this.#modules[xcmd.module]) {
            return this.#modules[xcmd.module].execute(xcmd)
        } else {
            throw "Xpell module " + xcmd.module + " not loaded"
        }
    }



    /**
     * Main onFrame method
     * calls all the sub-modules onFrame methods (if implemented)
     */
     onFrame():void {     
        this.frameNumber++
        Object.keys(this.#modules).forEach(mod => {
            if(this.#modules[mod].onFrame && typeof this.#modules[mod].onFrame === 'function') {
                this.#modules[mod].onFrame(this.frameNumber)
            }
        })
        XData.variables["frame-number"] = this.frameNumber
        XData.variables["fps"] = this.#fpsCalc.calc()
        
        requestAnimationFrame(() => {Xpell.onFrame()})         
    }


    getModule(moduleName:string):XModule{
        return this.#modules[moduleName]
    }

    /**
     * Start Xpell engine for web browsers using requestAnimationFrame
     */
    start() {
        _xlog.log("Starting Xpell")
        this.onFrame()
    }

}

/**
 * Xpell Engine instance
 * @public Xpell Engine instance
 */
export const Xpell = new XpellEngine()

export default Xpell