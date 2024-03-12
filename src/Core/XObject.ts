/**
 * XObject - Base Xpell object for Xpell modules
 */

import { XUtils } from "./XUtils"
import XCommand, { XCommandData } from "./XCommand";
import XParser from "./XParser"
import { XLogger as _xlog } from "./XLogger";
import { XEventListenerOptions, XEventManager as _xem } from "./XEventManager";
import { _xobject_basic_nano_commands, XNanoCommandPack, XNanoCommand } from "./XNanoCommands";
import _xd, { XDataObject } from "./XData";

export interface IXData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {}
}

export type wordsList = {
    [k: string]: string
}

const reservedWords: wordsList = { _children: "child nodes" }
// const xpell_object_html_fields_mapping = { "_id": "id", "css-class": "class", "animation": "xyz", "input-type": "type" };

/**
 * XObject constructor data interface 
 * @interface IXObjectData
 * @param _xversion - minimum Xpell interpreter version (optional default value is 1.0)
 * @deprecated use XObjectData type instead instead
 */
export interface IXObjectData extends IXData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {}
    _id?: string;
    _type: string;
    _children?: Array<XObject | XObjectData>
    _name?: string
    _data_source?: string
    _on?: XObjectOnEventIndex
    _on_create?: string | Function | undefined
    _on_mount?: string | Function | undefined
    _on_frame?: string | Function | undefined
    _on_data?: string | Function | undefined
    _process_frame?: boolean
    _process_data?: boolean

}

export interface XDataXporterHandler {
    (inst: any): any
}

export type XDataInstanceXporter = {
    cls: any, //the Object Class to replace with the exporter output
    handler: XDataXporterHandler //the class handler (exporter function)
}

export type XDataXporter = {
    _ignore_fields: string[],
    _instance_xporters: {
        [id: string]: XDataInstanceXporter
    }
}

export type XObjectOnEventHandler = (xObject: XObject, data?: any) => void
export interface XObjectOnEventIndex {
    [eventName: string]: XObjectOnEventHandler
}

export type XObjectData = {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {}
    _id?: string;
    _type: string;
    _children?: Array<XObject | XObjectData>
    _name?: string
    _data_source?: string
    _on?: XObjectOnEventIndex
    _once?: XObjectOnEventIndex
    _on_create?: string | Function | undefined
    _on_mount?: string | Function | undefined
    _on_frame?: string | Function | undefined
    _on_data?: string | Function | undefined
    _process_frame?: boolean
    _process_data?: boolean
}

/**
 * XObject class
 * @class XObject
 */
export class XObject {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {} | null
    _id: string;
    _type: string;
    _children: Array<XObject | XObjectData> = []
    _parent: XObject | null = null
    _name?: string
    _data_source?: string //XData source
    _on: XObjectOnEventIndex = {}
    _once: XObjectOnEventIndex = {}
    _on_create?: string | Function | undefined
    _on_mount?: string | Function | undefined
    _on_frame?: string | Function | undefined
    _on_data?: string | Function | undefined
    _on_event?: string | Function | undefined


    //real-time controllers
    _process_frame: boolean = true
    _process_data: boolean = true


    protected _xem_options: XEventListenerOptions

    //local cache for nano commands

    protected _nano_commands: { [k: string]: XNanoCommand } = {}
    protected _cache_cmd_txt?: string;
    protected _cache_jcmd?: any;
    protected _event_listeners_ids: { [eventName: string]: string } = {}
    protected _xporter: XDataXporter = {
        _ignore_fields: ["_to_xdata_ignore_fields", "_xporter", "_children", "_on", "_once", 
        "_on_create", "_on_mount", "_on_frame", "_on_data", "_process_frame", "_process_data", 
        "_parent","_event_listeners_ids","_event_parsed"],
        _instance_xporters: {}
    }


    /**
     * XObject constructor is creating the object and adding all the data keys to the XObject instance
     * @param data constructor input data (object)
     * @param defaults - defaults to merge with data
     * @param skipParse - skip data parsing 
     * if override this method make sure to call super.init(data,skipParse) and to set skipParse to true
     */
    constructor(data: XObjectData, defaults?: any, skipParse?: boolean) {
        if (defaults) {
            XUtils.mergeDefaultsWithData(data, defaults)
        }

        this._id = (data && data._id) ? data._id : "xo-" + XUtils.guid();
        this._type = "object" //default type
        this._children = []
        this._nano_commands = {}
        this.addNanoCommandPack(_xobject_basic_nano_commands)

        //add Xporter ignore field and instance handler (uses as example also)
        this.addXporterDataIgnoreFields(["_nano_commands"])
        this.addXporterInstanceXporter(XObject, (objectInstance: XObject) => {
            return objectInstance.toXData()
        })
        this._xem_options = {
            // _instance:_xem
            // _object: this
            _support_html: true
        }
        this.init(data, skipParse)


    }

    init(data?: any, skipParse?: boolean) {

        if (!skipParse && data) {
            delete data._id // delete the _id field to remove duplication by the parse function
            this.parse(data, reservedWords);
            // this.parseEvents(this._xem_options)
        }
    }

    parseEvents(options?: XEventListenerOptions) {
        if (!this._event_parsed) {
            if (!options) options = this._xem_options
            Object.keys(this._on).forEach(eventName => {
                if (typeof this._on[eventName] === "function") {
                    this.addEventListener(eventName, this._on[eventName], options)
                }
                // else if(typeof this._on[eventName] === "string") {
                //     console.error("string event handler not supported yet")
                // }
                else {
                    throw new Error("event handler must be a function " + eventName)
                }
            })

            const onceOptions: XEventListenerOptions = {}
            Object.assign(onceOptions, options)
            onceOptions._once = true

            Object.keys(this._once).forEach(eventName => {
                if (typeof this._once[eventName] === "function") {
                    this.addEventListener(eventName, this._once[eventName], onceOptions)
                }
                // else if(typeof this._on[eventName] === "string") {
                //     console.error("string event handler not supported yet")
                // }
                else {
                    throw new Error("event handler must be a function")
                }
            })
            this._event_parsed = true
        }
    }


    addEventListener(eventName: string, handler: XObjectOnEventHandler, options?: XEventListenerOptions) {
        if (!options) {
            options = this._xem_options
        }
        const event_listener_id = _xem.on(eventName, (eventData: any) => { handler(this, eventData) }, options,this)
        this._event_listeners_ids[eventName] = event_listener_id
    }


    removeEventListener(eventName: string) {
        if (this._event_listeners_ids[eventName]) {
            _xem.remove(this._event_listeners_ids[eventName])
            delete this._event_listeners_ids[eventName]
        }
    }

    removeAllEventListeners() {
        const keys = Object.keys(this._event_listeners_ids)
        keys.forEach(key => this.removeEventListener(key))
    }



    /**
     * Append a child XObject to this XObject
     * @param xobject 
     */
    append(xobject: XObject) {
        this._children?.push(xobject)
        xobject._parent = this
    }

    /**
     * Add single nano command to the object
     * @param commandName - the nano command name
     * @param nanoCommandFunction 
     */
    addNanoCommand(commandName: string, nanoCommandFunction: XNanoCommand) {
        if (typeof nanoCommandFunction === 'function') {
            // _xlog.log("command " + commandName + " loaded to xobject " + this._id)
            this._nano_commands[commandName] = nanoCommandFunction
        }
    }

    addNanoCommandPack(ncPack: XNanoCommandPack) {
        if (ncPack) {
            Object.keys(ncPack).forEach((key: string) => {
                this.addNanoCommand(key, ncPack[key])
            })
        }
    }

    /**
     * List of fields to ignore when exporting the xobject to XData or string format
     * @param <string[]> ignoreFields - an array with all the fields to ignore 
     */
    addXporterDataIgnoreFields(ignoreFields: string[]) {
        this._xporter._ignore_fields = this._xporter._ignore_fields.concat(ignoreFields)
    }

    /**
     * Add XData Xporter instance handler
     * @param <XDataInstanceXporter> ie - the instance exporter object
     */
    addXporterInstanceXporter(classOfInstance: any, handler: XDataXporterHandler) {
        const xporterName = XUtils.guid()
        this._xporter._instance_xporters[xporterName] = {
            cls: classOfInstance,
            handler: handler
        }
    }







    /**
     * Parse data to the XObject
     * @param data data to parse
     * @param ignore - lis of words to ignore in the parse process
     */
    parse(data: XObjectData, ignore = reservedWords) {

        let cdata = Object.keys(data);
        cdata.forEach(field => {
            if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
                this[field] = <any>data[field];
            }
        });



    }

    /**
     * Parse data to the XObject
     * @param data data to parse
     * @param {object} fields- object with fields and default values (IXData format)
     * 
     * fields example = {
     *  _name : "default-name",
     * ...
     * }
     */
    parseFieldsFromXDataObject(data: XObjectData, fields: { [name: string]: any }) {

        let cdata = Object.keys(fields);
        cdata.forEach((field: string) => {
            if (data.hasOwnProperty(field)) {
                this[field] = <any>data[field];
            } else {
                this[field] = fields[field]
            }
        })
    }


    /**
     * Parse list of fields from IXObjectData to the class
     * @param {IXObjectData} data -  the data
     * @param {Array<string>} fields - array of field names (string)
     * @param checkNonXParams - also check non Xpell fields (fields that not starting with "_" sign)
     */
    parseFields(data: XObjectData, fields: Array<string>, checkNonXParams?: boolean) {

        fields.forEach(field => {
            if (data.hasOwnProperty(field)) {
                this[field] = <any>data[field];
            } else if (checkNonXParams && field.startsWith("_")) {
                const choppedField = field.substring(1) // remove "_" from field name "_id" = "id"
                if (data.hasOwnProperty(choppedField)) {
                    this[field] = <any>data[choppedField]
                    this[choppedField] = <any>data[choppedField] //add both to support Three arguments
                }
            }
        })
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
        // console.log("onCreate" + this._t);
        
        // if (this._on_create) {
        //     if (typeof this._on_create == "function") {
        //         this._on_create(this)
        //     } else if (typeof this._on_create == "string") {
        //         this.run(this._id + " " + this._on_create) //
        //     }
        // }
        if (this._on_create) {
            this.checkAndRunInternalFunction(this._on_create)
        } else if (this._on && this._on["create"]) {
            this.checkAndRunInternalFunction(this._on["create"])
        } else if (this._once && this._once["create"]) {
            this.checkAndRunInternalFunction(this._once["create"])
        }

    
    }

    protected async checkAndRunInternalFunction(func: any, ...params: any) {
        if (typeof func == "function") {
            await func(this, ...params)
        } else if (typeof func == "string") {
            await this.run(this._id + " " + func) //
        }
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

        this.parseEvents(this._xem_options)

        //run on mount event
        if (this._on_mount) {
            await this.checkAndRunInternalFunction(this._on_mount)
        } else if (this._on && this._on["mount"]) {
            await this.checkAndRunInternalFunction(this._on["mount"])
        } else if (this._once && this._once["mount"]) {
            await this.checkAndRunInternalFunction(this._once["mount"])
        }

        //propagate event to children
        this._children.forEach((child) => {
            if (child.onMount && typeof child.onMount === 'function') {
                child.onMount()
            }
        })
    }


    emptyDataSource() {
        if (this._data_source && typeof this._data_source === "string") {
            _xd.delete(this._data_source)
        }
    }


    /**
     * Triggers when new data is being received from the data source
     * @param data - the data
     * if override this method make sure to call super.onData(data) to run the _on_data attribute
     */
    async onData(data: any) {
        if (this._process_data) {
            if (this._on_data) {
                this.checkAndRunInternalFunction(this._on_data, data)
            } else if (this._on && this._on["data"]) {
                this.checkAndRunInternalFunction(this._on["data"], data)
            } else if (this._once && this._once["data"]) {
                this.checkAndRunInternalFunction(this._once["data"], data)
            }
        }
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
        // if (this._on_frame && this._process_frame) {
        //     if (typeof this._on_frame == "function") {
        //         await this._on_frame(this, frameNumber)
        //     } else if (typeof this._on_frame == "string") {
        //         await this.run(this._id + " " + this._on_frame) //
        //     }
        // }

        if (this._process_frame) {
            if (this._on_frame) {
                this.checkAndRunInternalFunction(this._on_frame, frameNumber)
            } else if (this._on && this._on["frame"]) {
                this.checkAndRunInternalFunction(this._on["frame"], frameNumber)
            } else if (this._once && this._once["frame"]) {
                this.checkAndRunInternalFunction(this._once["frame"], frameNumber)
            }
        }

        if (this._data_source && this._process_data) {
            if (_xd.has(this._data_source)) {
                await this.onData(_xd._o[this._data_source])
            }
        }

        //propagate event to children
        this._children.forEach((child) => {
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

    async run(nanoCommand: string, cache = true) {

        let jcmd: XCommand = (this._cache_cmd_txt && this._cache_cmd_txt == nanoCommand) ? <XCommand>this._cache_jcmd : <any>XParser.parseXpellCommand(nanoCommand) //XParser.parse(nanoCommand)        
        //cache command to prevent parsing in every frame
        if (cache) {
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
    async execute(xCommand: XCommand | XCommandData) {
        // run nano commands

        if (xCommand._op && this._nano_commands[xCommand._op]) {
            try {
                this._nano_commands[xCommand._op](<XCommand>xCommand, this)
            } catch (err) {
                _xlog.error(this._id + " has error with command name " + xCommand._op + " " + err)
            }
        } else {
            _xlog.error(this._id + " has no command name " + xCommand._op)
        }
    }

    /**
     * Return an IXObjectData JSON representation of the XObject
     * @returns IXObjectData
     */
    toXData(): IXData {
        const out: IXData = {}
        Object.keys(this).forEach(field => {
            if (!this._xporter._ignore_fields.includes(field) &&
                this.hasOwnProperty(field) && this[field] !== undefined) {
                const tf = this[field]
                if (typeof tf === "function") {
                    const funcStr = tf.toString()
                    if (!funcStr.startsWith("class")) { //in case of class reference it being ignored
                        out[field] = funcStr
                    }
                } else if (typeof tf === "object") {
                    const xporters = Object.keys(this._xporter._instance_xporters)
                    let regField = true
                    xporters.forEach(xporter => {
                        const xp = this._xporter._instance_xporters[xporter]
                        if (tf instanceof this._xporter._instance_xporters[xporter].cls) {
                            out[field] = this._xporter._instance_xporters[xporter].handler(tf)
                            regField = false
                        }
                    })

                    if (regField) {
                        out[field] = tf
                    }
                }
                else {
                    out[field] = tf
                }

            }
        })
        //children are being created separately
        out._children = []
        if (this._children.length > 0) {
            this._children.forEach(child => {
                if (typeof child.toXData === "function") {
                    (out._children as Array<IXData>)?.push(child.toXData())
                }
            })
        }

        return out
    }

    /**
     * Return a string representation of the XObject
     * @returns string
     */
    toString() {
        return JSON.stringify(this.toXData())
    }


    clearAttributes(attributes: Array<string>) {
        attributes.forEach(attr => {
            if (this.hasOwnProperty(attr)) {
                this[attr] = <any>null
                delete this[attr]
            }
        })
    }


    /**
     * Dispose the XObject and all its children
     */
    async dispose() {
        this._process_data = false
        this._process_frame = false
        this.removeAllEventListeners()
        this.clearAttributes(["_cache_cmd_txt", "_cache_jcmd", "_nano_commands", "_event_listeners_ids", "_parent", "_on", "_once", "_xem_options", "_xporter"])
        if (this._children) {
            this._children.forEach(child => {
                if (typeof child.dispose == "function") {
                    child.dispose()
                }
            })
        }
        this._children = []
    }

}


/**
 * ObjectPack class for multi object registration
 */
export class XObjectPack {
    [k: string]: any
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
