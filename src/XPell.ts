/**
 * XPell - Universal User Interface Platform
 * Javascript Edition
 * 
 * @description Universal User Interface (UI) Engine for Javascript supporting devices & browsers
 * @author Fridman Fridman <tamirf@yahoo.com>
 * @since  22/07/2022
 * @Copyright Fridman Tamir 2022, all right reserved
 *
 *      This program is free software; you can redistribute it and/or
 *		modify it under the terms of the GNU General Public License
 *		as published by the Free Software Foundation; either version
 *		3 of the License, or (at your option) any later version.
 *
 */

import XUtils from "./XUtils"


class XPellEngine {
    version : string
    engineId: string
    frameNumber: number
    fps: number
    #modules = {}

    constructor() {
        this.version = "1.0.0"
        this.engineId = XUtils.guid()
        this.frameNumber = 0
        this.fps = 0
        // this.fps_mavg = 0
        // this.ts = performance.now()
        // this.parser = SpellParser
        this.#modules = {}
        //SpellEventManager.fire(SpellEvents.ENGINE_INIT)
        //this.load()
    }

}
