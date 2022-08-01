
import XUtils from "./XUtils"
import * as _XC from "./XConst"
import XCommand from "./XCommand";

const reserved_words = {  }
const xpell_object_html_fields_mapping = { "_id": "id", "css-class": "class", "animation": "xyz", "input-type": "type" };

export interface IXObjectData{
    _id?:string | null
    id?:string | null
    name?:string
    _type?:string
    _children:[]
    
}

export class XObject {
    
    _id: string
    id: string | null
    name:string 
    _ignore:{}

    constructor(data:IXObjectData , defaults?:{} ) {
        if (defaults) {
            XUtils.mergeDefaultsWithData(data, defaults)
        }
        
        this._id = (data && data._id) ? data._id : "so-" + XUtils.guid();
        reserved_words[_XC.NODES.children] = "child objects"
        this[_XC.NODES.type] = null
        this[_XC.NODES.children] = [];
        this._ignore = reserved_words;

        
        if (data) {
            delete data._id
            if (data.hasOwnProperty("_ignore")) {
                this._ignore = XUtils.createIgnoreList(data["_ignore"],reserved_words)
            }
            this.parse(data, this._ignore);
        }
    }


    //get _id() {return this.#_id}

    /**
     * occurs on XPell.init
     * must override
     */
    init() {
        throw "init method not implemented"
    }


    parse(data, ignore = reserved_words) {
        let cdata = Object.keys(data);
        cdata.forEach(field => {
            if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
                this[field] = data[field];
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
     * triggers from XPell frame
     * @param {int} frameNumber 
     * 
     * 
     */
    async onFrame(frameNumber:number){
        
        this[_XC.NODES.children].forEach(child => {
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