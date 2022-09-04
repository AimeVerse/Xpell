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
    verbose(): void;
    loadModule(xModule: XModule): void;
    loadModules(xModulesArray: []): void;
    load(): void;
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
