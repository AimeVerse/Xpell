/**
 * This file contains all the Basic Nano Commands of the Xobject
*/
export declare type XNanoCommandPack = {
    [k: string]: (XCommand: any, XObject?: any) => void;
};
/**
 * XNanoCommand Pack
 */
export declare const _xobject_basic_nano_commands: XNanoCommandPack;
declare const _default: XNanoCommandPack;
export default _default;
