import XObjectManager from "./XObjectManager";
import { XObjectData, XObject, XObjectPack } from "./XObject";
import XCommand, { XCommandData } from "./XCommand";
export type XModuleData = {
    _name: string;
};
/**
 * Xpell Base Module
 * This class represents xpell base module to be extends
 * @class XModule
 *
 */
export declare class XModule {
    #private;
    [k: string]: any;
    _id: string;
    _name: string;
    _log_rules: {
        createObject: boolean;
        removeObject: boolean;
    };
    constructor(data: XModuleData);
    load(): void;
    /**
     * Creates new XObject from data object
     * @param data - The data of the new object (JSON)
     * @return {XObject|*}
     */
    create(data: XObjectData): any;
    /**
     * removes and XObject from the object manager
     * @param objectId op
     */
    remove(objectId: string): void;
    _info(xCommand: XCommand): void;
    /**
     * Run xpell command -
     * CLI mode, parse the command to XCommand JSON format and call execute method
     * @param {string} XCommand input - text
     * @returns command execution result
     */
    run(stringXCommand: string): Promise<any>;
    /**
     * execute xpell command - CLI mode
     * @param {XCommand} XCommand input (JSON)
     * @returns command execution result
     */
    execute(xCommand: XCommand | XCommandData): Promise<any>;
    /**
     * This method triggers every frame from the Xpell engine.
     * The method can be override by the extending module to support extended onFrame functionality
     * @param frameNumber Current frame number
     */
    onFrame(frameNumber: number): Promise<void>;
    /**
     * X Object Manager
     */
    /**
     * getter for om (object manager) instance
     * @returns {XObjectManager}
     * @deprecated - use _object_manager instead
     * If you wish to get an object from the object manager use
     * getObject directly on the module instead of om.getObject
     */
    get om(): XObjectManager;
    get _object_manager(): XObjectManager;
    /**
     * Returns the XObject instance from the module Object Manager
     * @param objectId
     * @returns XObject
     */
    getObject(objectId: string): XObject;
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
     * @param xObjectName
     * @param xObject
     */
    importObject(xObjectName: string, xObject: XObject): void;
}
export default XModule;
