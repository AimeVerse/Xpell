import { IXObjectData, XObject } from "../Core/Xpell";
export declare class XAIObject extends XObject {
    _ignore: {
        [k: string]: string;
    };
    constructor(data: IXObjectData, defaults: any);
}
export default XAIObject;
