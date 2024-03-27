/**
 * This file contains all the Basic Nano Commands of the Xobject
*/

import XCommand, { XCommandData } from "./XCommand"
import { XEventManager as _xem } from "./XEventManager"
import { XLogger as _xlog } from "./XLogger"
import XObject from "./XObject"

/**
 * Single x-nano-command interface
 */
export interface XNanoCommand  {
    (xCommand: XCommand | XCommandData, xObject: XObject): any
}

/**
 * x-nano-command pack
 */
export type XNanoCommandPack = {
    [k:string] :XNanoCommand
}


/**
 * XNanoCommand Pack
 */
export const _xobject_basic_nano_commands:XNanoCommandPack = {
    "info": (xCommand, xObject?: XObject) => {
        _xlog.log("XObject id " + xObject?._id)
    },
    "log": (xCommand, xObject?: XObject) => {
        if (xCommand._params && xCommand._params["1"]) {
            _xlog.log(xCommand._params["1"])
        } else {
            _xlog.log(xObject)
        }
    },
    "fire":(xCommand, xObject ?: XObject) => {
        if (xCommand._params && xCommand._params["1"]) {
            _xem.fire(<string>xCommand._params["1"])
        } else if (xCommand._params &&  xCommand._params["event"]) {
            _xem.fire(<string>xCommand._params["event"])
        }
    }
}

export default(_xobject_basic_nano_commands)




