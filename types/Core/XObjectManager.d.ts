import XObject, { XObjectPack } from "./XObject";
/**
 * Xpell Module Object Manager
 * @description This manager holds the module XObjects that should be managed (XObject children will not be managed separately)
 * XModules uses the Object Manager to create new XObjects by providing the class of the object by name
 */
export type XObjectManagerIndex = {
    [name: string]: any;
};
export declare class XObjectManager {
    #private;
    constructor();
    get _objects(): XObjectManagerIndex;
    /**
     * Checks if an object is found in the object manager
     * @param xObjectId
     * @returns
     */
    hasObject(xObjectId: string): boolean;
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
    hasObjectClass(name: string): boolean;
    /**
     * Retrieves XObject class instance
     * @param name class name
     * @returns {XObject}
     */
    getObjectClass(name: string): any;
    /**
     * Retrieves all the classes dictionary
     * @returns XObjectManagerIndex
     */
    getAllClasses(): XObjectManagerIndex;
    get _classes(): XObjectManagerIndex;
    /**
     * Add XObject instance to the manager
     * @param xObject XObject to maintain
     */
    addObject(xObject: XObject): void;
    /**
     * Remove XObject from the manager
     * @param xObjectId object id to remove
     */
    removeObject(xObjectId: string): void;
    /**
     * Retrieves XObject instance
     * @param xObjectId XObject id
     * @returns {XObject}
     */
    getObject(xObjectId: string): XObject;
    /**
     * alias to getObject
     * @param id
     * @returns
     */
    go(id: string): XObject;
    /**
     * Retrieves XObject instance
     * @param objectName XObject name
     * @returns {XObject}
     */
    getObjectByName(objectName: string): XObject | null;
}
export default XObjectManager;
//# sourceMappingURL=XObjectManager.d.ts.map