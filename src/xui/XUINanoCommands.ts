/**
 * This file contains all the Basic Nano Commands of the Xobject
*/

import { XNanoCommandPack } from "../XNanoCommands"

import XCommand from "../XCommand"
import { XEventManager as _xem } from "../XEventManager"
import { XLogger as _xlog } from "../XLogger"
import XUIObject from "./XUIObject"



/**
 * XUINanoCommand Pack
 */
export const _xuiobject_basic_nano_commands:XNanoCommandPack = {
    "hide": (xCommand: XCommand, xObject?: XUIObject) => {
        xObject.hide()
    },
    "show": (xCommand: XCommand, xObject?: XUIObject) => {
        xObject.show()
    }
}

export default(_xuiobject_basic_nano_commands)




