import XUtils from "./XUtils"





export  class XCommand {
    id:string
    module: string 
    op:string 
    executeOnFrame: string | number;
    executeOnEvent: string ;
    dateCreated: number;
    params: {};
    
    constructor() {
        this.id = XUtils.guid();
        this.executeOnFrame = 0;  //frame number/logic to run the command 
        this.dateCreated = Date.now()
    }
}

export default  XCommand