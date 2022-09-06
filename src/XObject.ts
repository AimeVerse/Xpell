/**
 * XObject - Base Xpell object for Xpell modules
 */

import {XUtils,IXData} from "./XUtils"
import XCommand from "./XCommand";



export type wordsList = {
    [k:string]:string
}

const reservedWords:wordsList = {_children:"child nodes"  }
const xpell_object_html_fields_mapping = { "_id": "id", "css-class": "class", "animation": "xyz", "input-type": "type" };

/**
 * XObject constructor data interface 
 * @interface IXObjectData
 */
export interface IXObjectData extends IXData {
    [k:string]: string | null | [] | undefined | Function | boolean | number | {}
    _id?:string | null
    id?:string | null
    name?:string
    _type?:string
    _children:Array<XObject>
    
}


/**
 * XObject class
 * @class XObject
 */
export class XObject implements IXObjectData {
    [k:string]: string | null | [] | undefined | Function | boolean | number | {}
    _children:Array<XObject>

    /**
     * XObject constructor is creating the object and adding all the data keys to the XObject instance
     * @param data constructor input data (object)
     * @param defaults - defaults to merge with data
     */
    constructor(data:IXObjectData , defaults?:IXObjectData ) {
        if (defaults) {
            XUtils.mergeDefaultsWithData(data, defaults)
        }
        
        this._id = (data && data._id) ? data._id : "so-" + XUtils.guid();
        this._type = "object" //default type
        this._children = [];

        
        if (data) {
            delete data._id // delete the _id field to remove duplication by the parse function
            this.parse(data, reservedWords);
        }
    }

    async destructor() {

    }

    //get _id() {return this.#_id}

    /**
     * occurs on Xpell.init
     * must override
     */
    init():void {
        throw "init method not implemented"
    }


    /**
     * Parse data to the XObject
     * @param data data to parse
     * @param ignore - lis of words to ignore in the parse process
     */
    parse(data:IXObjectData, ignore = reservedWords) {
        let cdata = Object.keys(data);
        cdata.forEach(field => {
            if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
                this[field] = <string>data[field];
            }
        });
    }

   


    // /**
    //  * this method triggered after the HTML DOM object has been created and added to the parent element
    //  */
    async onCreate() {}

    /**
     * Triggers when the object is being mounted to other element
     */
    async onMount() {}

    /**
     * Triggers from Xpell frame every frame
     * @param {number} frameNumber 
     * 
     * 
     */
    async onFrame(frameNumber:number){
        
        this._children.forEach((child:XObject) => {
            if(child.onFrame && typeof child.onFrame === 'function') {
                child.onFrame(frameNumber)
            }})
    }

    /**
     * Execute XCommand within the XObject
     * @param xCommand XCommand to execute
     */
    async execute(xCommand:XCommand) {
    }
    
}


/**
 * ObjectPack class for multi object registration
 */
export class XObjectPack {

    /**
     * Get all registered object in this ObjectPack
     * @returns XObject dictionary
     */
    static getObjects():object {
        return {
            "object":XObject
        }
    }
}


export default XObject
