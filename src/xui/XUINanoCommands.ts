/**
 * This file contains all the Basic Nano Commands of the Xobject
*/

import { XNanoCommandPack,XCommand,_xem,_xlog,XObject } from "xpell-core"

import XUIObject from "./XUIObject"



/**
 * XUINanoCommand Pack
 */
export const _xuiobject_basic_nano_commands:XNanoCommandPack = {
    "hide": (xCommand: XCommand, xObject?: XObject) => {
        (<XUIObject>xObject).hide()
    },
    "show": (xCommand: XCommand, xObject?: XObject) => {
        (<XUIObject>xObject).show()
    }
}

export default(_xuiobject_basic_nano_commands)




