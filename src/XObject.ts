
import XUtils from "./XUtils"
//import * as _XC from "./XConst"
import XCommand from "./XCommand";

export type wordsList = {
    [k:string]:string
}

const reservedWords:wordsList = {_children:"child nodes"  }
const xpell_object_html_fields_mapping = { "_id": "id", "css-class": "class", "animation": "xyz", "input-type": "type" };

export interface IXObjectData{
    [k:string]: any
    _id?:string | null
    id?:string | null
    name?:string
    _type?:string
    _children:Array<XObject>
    
}

export class XObject implements IXObjectData {
    [k:string]: string | null | [] | undefined | Function | boolean | number | {}
    _children:Array<XObject>

    constructor(data:IXObjectData , defaults?:IXObjectData ) {
        if (defaults) {
            XUtils.mergeDefaultsWithData(data, defaults)
        }
        
        this._id = (data && data._id) ? data._id : "so-" + XUtils.guid();
        this._type = "object" //default type
        this._children = [];

        
        if (data) {
            delete data._id
            // if (data.hasOwnProperty("_ignore")) {
            //     this._ignore = reserved_words
            // }
            this.parse(data, reservedWords);
        }
    }


    //get _id() {return this.#_id}

    /**
     * occurs on Xpell.init
     * must override
     */
    init():void {
        throw "init method not implemented"
    }


    parse(data:IXObjectData, ignore = reservedWords) {
        let cdata = Object.keys(data);
        cdata.forEach(field => {
            if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
                this[field] = <string>data[field];
            }
        });
    }

    log() {
        let keys = Object.keys(this);
        keys.forEach(key => {
            if (this[key]) {
                console.log(key + ":" + this[key]);
            }
        });
        console.log(this);
    }


    // /**
    //  * this method triggered after the HTML DOM object has been created and added to the parent element
    //  */
    // async onCreate() {
    // }


    /**
     * triggers from Xpell frame
     * @param {int} frameNumber 
     * 
     * 
     */
    async onFrame(frameNumber:number){
        
        this._children.forEach((child:XObject) => {
            if(child.onFrame && typeof child.onFrame === 'function') {
                child.onFrame(frameNumber)
            }})
    }

    async execute(xCommand:XCommand) {
    }
    
}


export class XObjectPack {
    static getObjects():object {
        return {
            "object":XObject
        }
    }
}


export default XObject
