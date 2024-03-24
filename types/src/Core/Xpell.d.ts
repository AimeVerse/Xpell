/**
 * Xpell - Real-Time User Interface Platform
 * Typescript Edition
 *
 * This program is free software; you can redistribute it and/or
 * modify it under the terms of the GNU General Public License
 * as published by the Free Software Foundation; either version
 * 3 of the License, or (at your option) any later version.
 *
 *
 */
/** interface */
import XCommand from "./XCommand";
import XParser from "./XParser";
import XModule from "./XModule";
/**
 * @class  Xpell main engine
 */
export declare class XpellEngine {
    #private;
    _version: string;
    _engine_id: string;
    _frame_number: number;
    parser: typeof XParser;
    constructor();
    /**
     * Enable Xpell logs to console
     */
    set verbose(val: boolean);
    /**
     * Loads Xpell module into the engine
     * @param {XModule} xModule
     */
    loadModule(xModule: XModule): void;
    /**
     * Loads multiple module at ones
     * @param {Array<XModule>} xModulesArray
     */
    loadModules(xModulesArray: Array<XModule>): void;
    /**
     * Display information about the Xpell engine to the console
     */
    info(): void;
    /**
    * Run textual xCommand -
    * @param {cmd} - text command
    */
    run(stringXCommand: string): any;
    /**
     * Execute Xpell Command
     * @param {XCommand}
     */
    execute(xcmd: XCommand): any;
    /**
     * Main onFrame method
     * calls all the sub-modules onFrame methods (if implemented)
     */
    onFrame(): void;
    /**
     * Gets Xpell module by name
     * @param {string} moduleName - name of the loaded module
     * @returns {XModule}
     */
    getModule(moduleName: string): XModule;
    /**
     * Start Xpell engine for web browsers using requestAnimationFrame
     */
    start(): void;
    getParam(name: string, defaultValue?: string): any;
}
/**
 * Xpell Engine instance
 * @public Xpell Engine instance
 */
export declare const Xpell: XpellEngine;
export default Xpell;
export { Xpell as _x } from "./Xpell";
export { XUtils, XUtils as _xu } from "./XUtils";
export { XData, XData as _xd, type XDataObject, type XDataVariable, _XData } from "./XData";
export { XParser } from "./XParser";
export { XCommand, type XCommandData } from "./XCommand";
export { XLogger, XLogger as _xlog, _XLogger } from "./XLogger";
export { XModule, type XModuleData, } from "./XModule";
export { XObject, XObjectPack, type IXData, type IXObjectData, type XDataXporterHandler, type XObjectData, type XObjectOnEventIndex, type XObjectOnEventHandler } from "./XObject";
export { XObjectManager } from "./XObjectManager";
export { XEventManager, XEventManager as _xem, type XEventListener, type XEvent, type XEventListenerOptions, _XEventManager, type HTMLEventListenersIndex } from "./XEventManager";
export { type XNanoCommandPack, type XNanoCommand } from "./XNanoCommands";
