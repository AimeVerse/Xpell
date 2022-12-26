import XUtils from "./XUtils"



export type XCommandData = {
    id:string,
    _module?: string | null ,
    _object?:string | null ,
    _op?:string ,
    _run_on_frame?: string | number ,
    _run_on_event?: string ,
    _date_created?: number
    _params?: {
        [k:string] : string | number | Function
    },
}


/**
 * @class XCommand
 */


export  class XCommand {
    private id:string  = XUtils.guid()
    _module?: string | null 
    _object?:string | null 
    _op?:string 
    _params: {
        [k:string] : string | number | Function
    }
    _run_on_frame: string | number = 0
    _run_on_event: string ;
    _date_created: number;
    
    constructor() {
        this._run_on_frame = 0;  //frame number/logic to run the command 
        this._date_created = Date.now()
    }

    /**
     * Gets th parameter value from the XCommand whether it has a name or just a position
     * There are 2 ways to send XCommand with parameters: 
     *  1. <module> <op> <param-0> <param-1> <param-2>     // position is for this case
     *  2. <module> <op> param-name:param-value            // name is for this case
     * @param position the position of the parameter if no name is send 
     * @param name the name of the parameter 
     * @param cmd the XCommand
     * @returns {any} the actual parameter value
     */
    getParam = (position, name) => {
        return (this._params[name]) ? this._params[name] : this._params[position]
    }
}

export default  XCommand