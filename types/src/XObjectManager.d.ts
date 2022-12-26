import XObject, { XObjectPack } from "./XObject";
/**
 * Xpell Module Object Manager
 * @description This manager holds the module XObjects that should be managed (XObject children will not be managed separately)
 * XModules uses the Object Manager to create new XObjects by providing the class of the object by name
 */
export declare class XObjectManager {
    objectClasses: {};
    xObjects: {};
    namesIndex: {};
    constructor();
    /**
     * Register multiple classes dictionary into the object manager
     * @param xObjects - key value list -> \{"view":XView,...\}
     */
    registerObjects(xObjects: XObjectPack): void;
    /**
     * Registers single XObject
     * @param name - name of the object
     * @param xObjects The object class
     */
    registerObject(name: string, xObjects: XObject): void;
    /**
     * Checks if a class (name) is found in the object manager classes dictionary
     * @param name - class name
     * @returns {boolean}
     */
    hasObjectClass(name: any): boolean;
    /**
     * Retrieves XObject class instance
     * @param name class name
     * @returns {XObject}
     */
    getObjectClass(name: any): any;
    /**
     * Retrieves all the classes dictionary
     * @returns
     */
    getAllClasses(): {};
    /**
     * Add XObject instance to the manager
     * @param xObjects XObject to maintain
     */
    addObject(xObjects: any): void;
    /**
     * Remove XObject from the manager
     * @param xObjectId object id to remove
     */
    removeObject(xObjectId: any): void;
    /**
     * Retrieves XObject instance
     * @param xObjectId XObject id
     * @returns {XObject}
     */
    getObject(xObjectId: any): XObject;
    /**
     * Retrieves XObject instance
     * @param objectName XObject name
     * @returns {XObject}
     */
    getObjectByName(objectName: any): XObject | null;
}
export default XObjectManager;
