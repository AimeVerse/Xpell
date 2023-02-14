import XUIObject from "./XUIObject";
import { IXObjectData } from "xpell-core";
export declare class TopBar extends XUIObject {
    constructor(data: IXObjectData);
    /**
     * sample override onFrame to add the time to XData
     * @param frameNumber
     */
    onFrame(frameNumber: number): Promise<void>;
}
