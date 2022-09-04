import XUIObject from "./XUIObject";
export declare class TopBar extends XUIObject {
    constructor(data: any);
    /**
     * sample override onFrame to add the time to XData
     * @param frameNumber
     */
    onFrame(frameNumber: number): Promise<void>;
}
