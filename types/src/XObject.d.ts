/**
 * XObject - Base Xpell object for Xpell modules
 */
import XCommand from "./XCommand";
import { XNanoCommandPack } from "./XNanoCommands";
export interface IXData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {};
}
export declare type wordsList = {
    [k: string]: string;
};
/**
 * XObject constructor data interface
 * @interface IXObjectData
 */
export interface IXObjectData extends IXData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {};
    _id?: string | null;
    id?: string | null;
    name?: string;
    _type?: string;
    _children?: Array<XObject>;
}
/**
 * XObject class
 * @class XObject
 */
export declare class XObject implements IXObjectData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {};
    _children: Array<XObject>;
    private _nano_commands;
    /**
     * XObject constructor is creating the object and adding all the data keys to the XObject instance
     * @param data constructor input data (object)
     * @param defaults - defaults to merge with data
     */
    constructor(data: IXObjectData, defaults?: IXObjectData);
    addNanoCommand(commandName: string, nanoCommandFunction: Function): void;
    addNanoCommandPack(ncPack: XNanoCommandPack): void;
    dispose(): Promise<void>;
    /**
     * occurs on Xpell.init
     * must override
     */
    init(): void;
    /**
     * Parse data to the XObject
     * @param data data to parse
     * @param ignore - lis of words to ignore in the parse process
     */
    parse(data: IXObjectData, ignore?: wordsList): void;
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
    execute(xCommand: XCommand): Promise<void>;
}
/**
 * ObjectPack class for multi object registration
 */
export declare class XObjectPack {
    /**
     * Get all registered object in this ObjectPack
     * @returns XObject dictionary
     */
    static getObjects(): object;
}
export default XObject;
