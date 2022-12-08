/**
 * XObject - Base Xpell object for Xpell modules
 */

import { XUtils } from "./XUtils"
import XCommand from "./XCommand";
import XParser from "./XParser"
import {XLogger as _xlog} from "./XLogger";
import {XEventManager as _xem} from "./XEventManager";
import { _xobject_basic_nano_commands,XNanoCommandPack } from "./XNanoCommands";
import xNanoCommands from "./XNanoCommands";

export interface IXData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {}
}

export type wordsList = {
    [k: string]: string
}

const reservedWords: wordsList = { _children: "child nodes" }
const xpell_object_html_fields_mapping = { "_id": "id", "css-class": "class", "animation": "xyz", "input-type": "type" };

/**
 * XObject constructor data interface 
 * @interface IXObjectData
 */
export interface IXObjectData extends IXData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {}
    _id?: string | null
    id?: string | null
    name?: string
    _type?: string
    _children: Array<XObject>

}


/**
 * XObject class
 * @class XObject
 */
export class XObject implements IXObjectData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {}
    _children: Array<XObject>
    _nano_commands:{[k:string]:Function}
    /**
     * XObject constructor is creating the object and adding all the data keys to the XObject instance
     * @param data constructor input data (object)
     * @param defaults - defaults to merge with data
     */
    constructor(data: IXObjectData, defaults?: IXObjectData) {
        if (defaults) {
            XUtils.mergeDefaultsWithData(data, defaults)
        }

        this._id = (data && data._id) ? data._id : "so-" + XUtils.guid();
        this._type = "object" //default type
        this._children = []
        this._nano_commands ={}
        this.addNanoCommandPack(_xobject_basic_nano_commands)
        
        if (data) {
            delete data._id // delete the _id field to remove duplication by the parse function
            this.parse(data, reservedWords);
        }
    }


    addNanoCommand(commandName:string,nanoCommandFunction:Function) {
        if(typeof nanoCommandFunction === 'function'){
            // _xlog.log("command " + commandName + " loaded to xobject " + this._id)
            this._nano_commands[commandName] = nanoCommandFunction
        }
    }
    
    addNanoCommandPack(ncPack:XNanoCommandPack) {
        if(ncPack) {
            Object.keys(ncPack).forEach ((key:string) => {
                this.addNanoCommand(key,ncPack[key])
            })
        }

    }
   

    async dispose() {

    }

    //get _id() {return this.#_id}

    /**
     * occurs on Xpell.init
     * must override
     */
    init(): void {
        throw "init method not implemented"
    }


    /**
     * Parse data to the XObject
     * @param data data to parse
     * @param ignore - lis of words to ignore in the parse process
     */
    parse(data: IXObjectData, ignore = reservedWords) {
        let cdata = Object.keys(data);
        cdata.forEach(field => {
            if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
                this[field] = <string>data[field];
            }
        });
    }




    /**
     * this method triggered after the HTML DOM object has been created and added to the parent element
     * support external _on_create anonymous function in the , example:
     * _on_create: async (xObject) => {
     *      // xObject -> The XObject parent of the _on_create function, use instead of this keyword
     *      // write code that will be executed each frame.
     *      // make sure to write async anonymous function. 
     * }
     * 
    */
    async onCreate() {
        if (this._on_create) {
            if(typeof this._on_create == "function") {
                this._on_create(this)
            } else if (typeof this._on_create == "string") {
                this.run(this._id + " " + this._on_create) //
            }
        }
        //propagate event to children
        this._children.forEach((child: XObject) => {
            if (child.onCreate && typeof child.onCreate === 'function') {
                child.onCreate()
            }
        })

    }

    /**
     * Triggers when the object is being mounted to other element
     * support external _on_create anonymous function in the , example:
     * _on_mount: async (xObject) => {
     *      // xObject -> The XObject parent of the _on_mount function, use instead of this keyword
     *      // write code that will be executed each frame.
     *      // make sure to write async anonymous function. 
     * }
     */
    async onMount() { 
        if (this._on_mount ) {
            if(typeof this._on_mount == "function") {
                this._on_mount(this)
            } else if (typeof this._on_mount == "string") {
                this.run(this._id + " " + this._on_mount) //
            }
        }
        //propagate event to children
        this._children.forEach((child: XObject) => {
            if (child.onMount && typeof child.onMount === 'function') {
                child.onMount()
            }
        })
    }

    /**
     * Triggers from Xpell frame every frame
     * Support _on_frame atrribute that can be XCommand string or function
     * @param {number} frameNumber 
     * 
     * XObject supports
     * 1. External _on_frame anonymous function in the , example:
     * _on_frame: async (xObject,frameNumber) => {
     *      // xObject -> The XObject parent of the _on_frame function, use instead of this keyword
     *      // frameNumber = Xpell current frame number 
     *      // write code that will be executed each frame.
     *      // make sure to write async anonymous function. 
     *      // be wise with the function execution and try to keep it in the 15ms running time to support 60 FPS
     * }
     * 
     * 2. String execution of nano commands
     * 
     * _on_frame: "nano command text"
     * 
     */
    async onFrame(frameNumber: number) {
        //
        if (this._on_frame ) { 
            if (typeof this._on_frame == "function") {
                this._on_frame(this, frameNumber)
            } else if (typeof this._on_frame == "string") {
                this.run(this._id + " " + this._on_frame) //
            }
        }
        
        //propagate event to children
        this._children.forEach((child: XObject) => {
            if (child.onFrame && typeof child.onFrame === 'function') {
                child.onFrame(frameNumber)
            }
        })
    }
    
    /**
     * Runs object nano commands
     * @param nanoCommand - object nano command (string)
     * @param cache - cache last command to prevent multiple parsing on the same command
     */

    async run(nanoCommand:string,cache = true) {

        let jcmd:XCommand = (this._cache_cmd_txt && this._cache_cmd_txt == nanoCommand) ? <XCommand>this._cache_jcmd : XParser.parse(nanoCommand)
        //cache command to prevent parsing in every frame
        if(cache) {
            this._cache_cmd_txt = nanoCommand
            this._cache_jcmd = jcmd
        }
        this.execute(jcmd) //execute nano commands
        
    }


    /**
     * Execute XCommand within the XObject Nano Commands
     * @param xCommand XCommand to execute
     * 
     * Nano command example:
     * 
     * "set-text" : (xCommand,xObject) => {
     *      xObject.setText(xCommands.params.text)
     * }
     * 
     */
    async execute(xCommand: XCommand) {
        // run nano commands

        if (this._nano_commands[xCommand.op]) {
            this._nano_commands[xCommand.op](xCommand,this)
        } else {
            _xlog.error(this._id + " has no op name " + xCommand.op)
        }
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
    static getObjects(): object {
        return {
            "object": XObject
        }
    }
}


export default XObject
