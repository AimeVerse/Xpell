
import {_xlog,IXObjectData,XObject,_xu,_xem } from "../Core/Xpell"
// import { _xem } from "../XEM/XEventManager"
// import XObject, { IXObjectData } from "../XObject"
// import * as _XC from "../XConst"

// import _xuiobject_basic_nano_commands from "./XUINanoCommands"
const reservedWords = { _children:"child objects" }



export class XAIObject extends XObject {
    // [k:string]: string | null | [] | undefined | Function | boolean | {}
    _ignore: {[k:string]:string}
    


    constructor(data:IXObjectData, defaults:any) {
        super(data,defaults,true)
        this._ignore = reservedWords;
        
        //this._base_display = "block"

        if (data) {
            this.parse(data, this._ignore);
        }

        // this.addNanoCommandPack(_xuiobject_basic_nano_commands)
    }





    
    

}

export default XAIObject