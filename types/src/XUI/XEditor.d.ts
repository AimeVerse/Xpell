/**
 * XJoystick
 * @description XEditor Scene editor controls
 */
import XUIObject from "./XUIObject";
export declare class XTransformControls extends XUIObject {
    private _keyboard_down_listener;
    private _key_down;
    private _state;
    constructor(data: any);
    changeState(newState: 'translate' | 'rotate' | 'scale'): void;
    onMount(): Promise<void>;
}
export declare class X3DObjectViewer extends XUIObject {
    constructor(data: any);
    onMount(): Promise<void>;
}
export declare class XEditor {
    static getObjects(): {
        "transform-controls": typeof XTransformControls;
    };
}
export default XEditor;
