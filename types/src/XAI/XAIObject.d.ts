import { XObjectData, XObject } from "../Core/Xpell";
export declare class XAIObject extends XObject {
    _ignore: {
        [k: string]: string;
    };
    constructor(data: XObjectData, defaults: any);
}
export default XAIObject;
