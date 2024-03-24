import XUIObject from "./XUIObject";
import { IXObjectData } from "../Core/Xpell";
export declare class TopBar extends XUIObject {
    constructor(data: IXObjectData);
    /**
     * sample override onFrame to add the time to XData
     * @param frameNumber
     */
    onFrame(frameNumber: number): Promise<void>;
}
