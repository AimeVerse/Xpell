/**
 * This file contains all the Basic Nano Commands of the Xobject
*/

import XCommand from "./XCommand"
import { XEventManager as _xem } from "./XEventManager"
import { XLogger as _xlog } from "./XLogger"
import XObject from "./XObject"


export type XNanoCommandPack = {
    [k:string] :(XCommand,XObject?) => void
}

/**
 * XNanoCommand Pack
 */
export const _xobject_basic_nano_commands:XNanoCommandPack = {
    "info": (xCommand: XCommand, xObject?: XObject) => {
        _xlog.log("XObject id " + xObject._id)
    },
    "log": (xCommand: XCommand, xObject?: XObject) => {
        if (xCommand._params["1"]) {
            _xlog.log(xCommand._params["1"])
        } else {
            _xlog.log(xObject)
        }
    },
    "fire":(xCommand: XCommand, xObject ?: XObject) => {
        if (xCommand._params["1"]) {
            _xem.fire(xCommand._params["1"])
        } else if (xCommand._params["event"]) {
            _xem.fire(xCommand._params["event"])
        }
    }
}

export default(_xobject_basic_nano_commands)




