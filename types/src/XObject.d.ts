import XCommand from "./XCommand";
export declare type wordsList = {
    [k: string]: string;
};
export interface IXObjectData {
    [k: string]: any;
    _id?: string | null;
    id?: string | null;
    name?: string;
    _type?: string;
    _children: Array<XObject>;
}
export declare class XObject implements IXObjectData {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {};
    _children: Array<XObject>;
    constructor(data: IXObjectData, defaults?: IXObjectData);
    /**
     * occurs on Xpell.init
     * must override
     */
    init(): void;
    parse(data: IXObjectData, ignore?: wordsList): void;
    onCreate(): Promise<void>;
    onMount(): Promise<void>;
    /**
     * triggers from Xpell frame
     * @param {int} frameNumber
     *
     *
     */
    onFrame(frameNumber: number): Promise<void>;
    execute(xCommand: XCommand): Promise<void>;
}
export declare class XObjectPack {
    static getObjects(): object;
}
export default XObject;
