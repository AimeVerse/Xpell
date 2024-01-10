/**
 * This file contains all the Basic Nano Commands of the Xobject
*/

import { XNanoCommandPack,XCommand,_xlog,XObject ,_xem} from "../Core/Xpell"
// import { _xem } from "../XEM/XEventManager"
import XUIObject from "./XUIObject"



/**
 * XUINanoCommand Pack
 */
export const _xuiobject_basic_nano_commands:XNanoCommandPack = {
    "hide": (xCommand, xObject?: XObject) => {
        (<XUIObject>xObject).hide()
    },
    "show": (xCommand, xObject?: XObject) => {
        (<XUIObject>xObject).show()
    }
}

export default(_xuiobject_basic_nano_commands)




