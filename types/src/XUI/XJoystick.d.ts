/**
 * XJoystick
 * @description Joystick control for Xpell applications
 * Based on Nipple.js -  https://github.com/yoannmoinet/nipplejs
 */
import XUIObject from "./XUIObject";
export declare class XJoystick extends XUIObject {
    private _joy_manager;
    private _joy_options;
    private _keyboard_down_listener;
    private _key_down;
    constructor(data: any);
    onMount(): Promise<void>;
}
export declare class XMoveControls {
    static get_objects(): {
        joystick: typeof XJoystick;
    };
}
export default XJoystick;
