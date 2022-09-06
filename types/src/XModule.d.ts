import XObjectManager from "./XObjectManager";
import { XObjectPack } from "./XObject";
export interface ModuleData {
    name: string;
}
/**
 * Xpell Base Module
 * This class represents xpell base module to be extends
 * @class XModule
 *
 */
export declare class XModule {
    _id: string;
    name: string;
    protected objectManger: XObjectManager;
    constructor(data: ModuleData);
    load(): void;
    /**
     * Creates new XObject from data object
     * @param data - The data of the new object (JSON)
     * @return {XObject|*}
     */
    create(data: any): any;
    _info(xCommand: any): void;
    /**
     * Run xpell command -
     * CLI mode, parse the command to XCommand JSON format and call execute method
     * @param {string} XCommand input - text
     * @returns command execution result
     */
    run(stringXCommand: any): Promise<any>;
    /**
     * execute xpell command - CLI mode
     * @param {XCommand} XCommand input (JSON)
     * @returns command execution result
     */
    execute(xCommand: any): Promise<any>;
    /**
     * This method triggers every frame from the Xpell engine.
     * The method can be override by the extending module to support extended onFrame functionality
     * @param frameNumber Current frame number
     */
    onFrame(frameNumber: number): Promise<void>;
    /**
     * X Object Manager
     */
    get om(): XObjectManager;
    /**
     * Imports external object pack to the engine
     * The object class should be like XObjects with static implementation of getObjects() method
     * @param {XObjects} xObjectPack
     */
    importObjectPack(xObjectPack: XObjectPack | any): void;
    /**
     * Imports external object pack to the engine
     * @deprecated - use importObjectPack instead
     * @param xObjectPack
     */
    importObjects(xObjectPack: XObjectPack | any): void;
    /**
     * Imports external objects to the engine
     * The object class should be like XObjects with static implementation of getObjects() method
     * @param {XObjects} xObjectPack
     */
    importObject(xObjectName: any, xObject: any): void;
}
export default XModule;
