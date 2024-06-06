/**
 * This file contains all the Basic Nano Commands of the Xobject
*/
import XCommand, { XCommandData } from "./XCommand";
import XObject from "./XObject";
/**
 * Single x-nano-command interface
 */
export interface XNanoCommand {
    (xCommand: XCommand | XCommandData, xObject: XObject): any;
}
/**
 * x-nano-command pack
 */
export type XNanoCommandPack = {
    [k: string]: XNanoCommand;
};
/**
 * XNanoCommand Pack
 */
export declare const _xobject_basic_nano_commands: XNanoCommandPack;
declare const _default: XNanoCommandPack;
export default _default;
