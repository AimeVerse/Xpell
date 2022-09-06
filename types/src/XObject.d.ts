/**
 * XObject - Base Xpell object for Xpell modules
 */
import { IXData } from "./XUtils";
import XCommand from "./XCommand";
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
    _children: Array<XObject>;
}
/**
 * XObject class
 * @class XObject
 */
export declare class XObject implements IXObjectData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {};
    _children: Array<XObject>;
    /**
     * XObject constructor is creating the object and adding all the data keys to the XObject instance
     * @param data constructor input data (object)
     * @param defaults - defaults to merge with data
     */
    constructor(data: IXObjectData, defaults?: IXObjectData);
    destructor(): Promise<void>;
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
    onCreate(): Promise<void>;
    /**
     * Triggers when the object is being mounted to other element
     */
    onMount(): Promise<void>;
    /**
     * Triggers from Xpell frame every frame
     * @param {number} frameNumber
     *
     *
     */
    onFrame(frameNumber: number): Promise<void>;
    /**
     * Execute XCommand within the XObject
     * @param xCommand XCommand to execute
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
