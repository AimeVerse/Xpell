/**
 * XObject - Base Xpell object for Xpell modules
 */
import XCommand, { XCommandData } from "./XCommand";
import { XEventListenerOptions } from "./XEventManager";
import { XNanoCommandPack, XNanoCommand } from "./XNanoCommands";
export interface IXData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {};
}
export type wordsList = {
    [k: string]: string;
};
/**
 * XObject constructor data interface
 * @interface IXObjectData
 * @param _xversion - minimum Xpell interpreter version (optional default value is 1.0)
 * @deprecated use XObjectData type instead instead
 */
export interface IXObjectData extends IXData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {};
    _id?: string;
    _type: string;
    _children?: Array<XObject | XObjectData>;
    _name?: string;
    _data_source?: string;
    _on?: XObjectOnEventIndex;
    _on_create?: string | Function | undefined;
    _on_mount?: string | Function | undefined;
    _on_frame?: string | Function | undefined;
    _on_data?: string | Function | undefined;
    _process_frame?: boolean;
    _process_data?: boolean;
}
export interface XDataXporterHandler {
    (inst: any): any;
}
export type XDataInstanceXporter = {
    cls: any;
    handler: XDataXporterHandler;
};
export type XDataXporter = {
    _ignore_fields: string[];
    _instance_xporters: {
        [id: string]: XDataInstanceXporter;
    };
};
export type XObjectOnEventHandler = (xObject: XObject, data?: any) => void;
export interface XObjectOnEventIndex {
    [eventName: string]: XObjectOnEventHandler;
}
export type XObjectData = {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {};
    _id?: string;
    _type?: string;
    _children?: Array<XObject | XObjectData>;
    _name?: string;
    _data_source?: string;
    _on?: XObjectOnEventIndex;
    _once?: XObjectOnEventIndex;
    _on_create?: string | Function | undefined;
    _on_mount?: string | Function | undefined;
    _on_frame?: string | Function | undefined;
    _on_data?: string | Function | undefined;
    _process_frame?: boolean;
    _process_data?: boolean;
    _nano_commands?: XNanoCommandPack;
};
/**
 * XObject class
 * @class XObject
 */
export declare class XObject {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {} | null;
    _id: string;
    _type: string;
    _children: Array<XObject | XObjectData>;
    _parent: XObject | null;
    _name?: string;
    _data_source?: string;
    _on: XObjectOnEventIndex;
    _once: XObjectOnEventIndex;
    _on_create?: string | Function | undefined;
    _on_mount?: string | Function | undefined;
    _on_frame?: string | Function | undefined;
    _on_data?: string | Function | undefined;
    _on_event?: string | Function | undefined;
    _process_frame: boolean;
    _process_data: boolean;
    protected _xem_options: XEventListenerOptions;
    protected _nano_commands: {
        [k: string]: XNanoCommand;
    };
    protected _cache_cmd_txt?: string;
    protected _cache_jcmd?: any;
    protected _event_listeners_ids: {
        [eventName: string]: string;
    };
    protected _xporter: XDataXporter;
    /**
     * XObject constructor is creating the object and adding all the data keys to the XObject instance
     * @param data constructor input data (object)
     * @param defaults - defaults to merge with data
     * @param skipParse - skip data parsing
     * if override this method make sure to call super.init(data,skipParse) and to set skipParse to true
     */
    constructor(data: XObjectData, defaults?: any, skipParse?: boolean);
    /**
     * Initialize the XObject
     * @param data - data to parse (XObjectData)
     * @param skipParse - skip data parsing
     * @deprecated - use parse method instead
     */
    init(data?: any, skipParse?: boolean): void;
    parseEvents(options?: XEventListenerOptions): void;
    addEventListener(eventName: string, handler: XObjectOnEventHandler, options?: XEventListenerOptions): void;
    removeEventListener(eventName: string): void;
    removeAllEventListeners(): void;
    /**
     * Append a child XObject to this XObject
     * @param xobject
     */
    append(xobject: XObject): void;
    /**
     * Add single nano command to the object
     * @param commandName - the nano command name
     * @param nanoCommandFunction
     */
    addNanoCommand(commandName: string, nanoCommandFunction: XNanoCommand): void;
    addNanoCommandPack(ncPack: XNanoCommandPack): void;
    /**
     * List of fields to ignore when exporting the xobject to XData or string format
     * @param <string[]> ignoreFields - an array with all the fields to ignore
     */
    addXporterDataIgnoreFields(ignoreFields: string[]): void;
    /**
     * Add XData Xporter instance handler
     * @param <XDataInstanceXporter> ie - the instance exporter object
     */
    addXporterInstanceXporter(classOfInstance: any, handler: XDataXporterHandler): void;
    /**
     * Parse data to the XObject
     * @param data data to parse
     * @param ignore - lis of words to ignore in the parse process
     */
    parse(data: XObjectData, ignore?: wordsList): void;
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
    parseFieldsFromXDataObject(data: XObjectData, fields: {
        [name: string]: any;
    }): void;
    /**
     * Parse list of fields from IXObjectData to the class
     * @param {IXObjectData} data -  the data
     * @param {Array<string>} fields - array of field names (string)
     * @param checkNonXParams - also check non Xpell fields (fields that not starting with "_" sign)
     */
    parseFields(data: XObjectData, fields: Array<string>, checkNonXParams?: boolean): void;
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
    onCreate(): Promise<void>;
    protected checkAndRunInternalFunction(func: any, ...params: any): Promise<void>;
    /**
     * Triggers when the object is being mounted to other element
     * support external _on_create anonymous function in the , example:
     * _on_mount: async (xObject) => {
     *      // xObject -> The XObject parent of the _on_mount function, use instead of this keyword
     *      // write code that will be executed each frame.
     *      // make sure to write async anonymous function.
     * }
     */
    onMount(): Promise<void>;
    emptyDataSource(): void;
    /**
     * Triggers when new data is being received from the data source
     * @param data - the data
     * if override this method make sure to call super.onData(data) to run the _on_data attribute
     */
    onData(data: any): Promise<void>;
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
    onFrame(frameNumber: number): Promise<void>;
    /**
     * Runs object nano commands
     * @param nanoCommand - object nano command (string)
     * @param cache - cache last command to prevent multiple parsing on the same command
     */
    run(nanoCommand: string, cache?: boolean): Promise<void>;
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
    execute(xCommand: XCommand | XCommandData): Promise<void>;
    /**
     * Return an IXObjectData JSON representation of the XObject
     * @returns IXObjectData
     */
    toXData(): IXData;
    /**
     * Return a string representation of the XObject
     * @returns string
     */
    toString(): string;
    clearAttributes(attributes: Array<string>): void;
    /**
     * Dispose the XObject and all its children
     */
    dispose(): Promise<void>;
}
/**
 * ObjectPack class for multi object registration
 */
export declare class XObjectPack {
    [k: string]: any;
    /**
     * Get all registered object in this ObjectPack
     * @returns XObject dictionary
     */
    static getObjects(): object;
}
export default XObject;
