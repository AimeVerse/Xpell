/**
 * This file contains all the Basic Nano Commands of the Xobject
*/

import { XNanoCommandPack, XCommand, _xlog, XObject, _xem, _xd } from "../Core/Xpell"
// import { _xem } from "../XEM/XEventManager"
import XUIObject from "./XUIObject"



/**
 * XUINanoCommand Pack
 */
export const _xuiobject_basic_nano_commands: XNanoCommandPack = {
    "hide": (xCommand, xObject?: XObject) => {
        (<XUIObject>xObject).hide()
    },
    "show": (xCommand, xObject?: XObject) => {
        (<XUIObject>xObject).show()
    },
    "set-text-from-data": (xCommand, xObject?: XObject) => {
        if (xObject && xObject._data_source) {
            if (_xd._o[xObject._data_source]) {
                let text = _xd._o[xObject._data_source]
                if (xCommand._params) {
                    if (xCommand._params.pattern) {
                        const pattern = xCommand._params.pattern
                        let data = _xd._o[xObject._data_source]
                        text = (<any>pattern).replace("$data", data)
                    }
                    if (xCommand._params.empty && xCommand._params.empty === "true") {

                        xObject.emptyDataSource()
                    }
                }
                (<XUIObject>xObject).setText(text)

            }
        }
        // console.log("set-text",xCommand);

        // (<XUIObject>xObject).setText(xCommand.data)
    }
}

export default (_xuiobject_basic_nano_commands)




