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
    version: string;
    engineId: string;
    frameNumber: number;
    parser: typeof XParser;
    constructor();
    /**
     * Enable Xpell logs to console
     */
    verbose(): void;
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
}
/**
 * Xpell Engine instance
 * @public Xpell Engine instance
 */
export declare const Xpell: XpellEngine;
export default Xpell;
