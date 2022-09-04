import XObject, { XObjectPack } from "./XObject";
export declare class XObjectManager {
    objectClasses: {};
    xObjects: {};
    namesIndex: {};
    constructor();
    init(): void;
    /**
     *
     * @param xObjects - key value list -> \{"view":XView,...\}
     */
    registerObjects(xObjects: XObjectPack): void;
    registerObject(name: string, xObjects: XObject): void;
    hasObjectClass(name: any): boolean;
    getObjectClass(name: any): any;
    getAllClasses(): {};
    addObject(xObjects: any): void;
    removeObject(xObjectId: any): void;
    getObject(xObjectId: any): any;
    getObjectByName(objectName: any): any;
}
export default XObjectManager;
