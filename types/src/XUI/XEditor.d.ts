/**
 * XJoystick
 * @description XEditor Scene editor controls
 */
import XUIObject from "./XUIObject";
import { IXObjectData } from "../Core/Xpell";
export declare class XTransformControls extends XUIObject {
    private _keyboard_down_listener;
    private _key_down;
    private _state;
    constructor(data: IXObjectData);
    changeState(newState: 'translate' | 'rotate' | 'scale'): void;
    onMount(): Promise<void>;
}
export declare class X3DObjectViewer extends XUIObject {
    constructor(data: IXObjectData);
    onMount(): Promise<void>;
}
export declare class XEditor {
    static getObjects(): {
        "transform-controls": typeof XTransformControls;
    };
}
export default XEditor;
