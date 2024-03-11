import XLogger from "./XLogger";
import XObject, { XObjectPack } from "./XObject";

/**
 * Xpell Module Object Manager
 * @description This manager holds the module XObjects that should be managed (XObject children will not be managed separately)
 * XModules uses the Object Manager to create new XObjects by providing the class of the object by name
 */

export type XObjectManagerIndex = {
    [name:string]:any
}

export class XObjectManager {
    #_object_classes: XObjectManagerIndex
    #_xobjects: XObjectManagerIndex
    #_names_index: XObjectManagerIndex
    constructor() {
        /**
         * Object Classes dictionary
         */
        this.#_object_classes = {};

        /**
         * Live XObject that is being maintained by the Object Manager
         */
        this.#_xobjects = {};

        /**
         * Object Names index - uses to get object by name
         */
        this.#_names_index = {}
    }


    get _objects():XObjectManagerIndex{
        return this.#_xobjects
    }
    

    /**
     * Checks if an object is found in the object manager
     * @param xObjectId 
     * @returns 
     */
    hasObject(xObjectId:string):boolean {
        return this.#_xobjects.hasOwnProperty(xObjectId)
    }

    /**
     * Register multiple classes dictionary into the object manager
     * @param xObjects - key value list -> \{"view":XView,...\}
     */
    registerObjects(xObjects:XObjectPack):void {
        let names = Object.keys(xObjects)
        names.forEach(name => this.registerObject(name, xObjects[name]))
    }

    /**
     * Registers single XObject
     * @param name - name of the object
     * @param xObjects The object class
     */
    registerObject(name:string, xObjects:XObject) {
        this.#_object_classes[name] = xObjects;
    }

    /**
     * Checks if a class (name) is found in the object manager classes dictionary
     * @param name - class name
     * @returns {boolean} 
     */
    hasObjectClass(name:string) {
        return this.#_object_classes.hasOwnProperty(name);
    }

    /**
     * Retrieves XObject class instance
     * @param name class name
     * @returns {XObject}
     */
    getObjectClass(name:string) {
        return this.#_object_classes[name];
    }

    /**
     * Retrieves all the classes dictionary
     * @returns XObjectManagerIndex
     */
    getAllClasses():XObjectManagerIndex {
        return this.#_object_classes
    }

    get _classes():XObjectManagerIndex {
        return this.#_object_classes
    }

    /**
     * Add XObject instance to the manager
     * @param xObject XObject to maintain
     */
    addObject(xObject:XObject) {
        if (xObject && xObject._id) {
            this.#_xobjects[<string>xObject._id] = xObject
            if (!xObject._name || (<string>xObject._name).length==0) {
                xObject._name = xObject._id
            }
            this.#_names_index[<string>xObject._name] = xObject._id
        }
        else {
            XLogger.log("unable to add object")
        }
    }

    /**
     * Remove XObject from the manager 
     * @param xObjectId object id to remove
     */
    removeObject(xObjectId:string) {
        const obj = this.#_xobjects[xObjectId]
        if(obj) {
            delete this.#_names_index[obj?.name] //= null
            delete this.#_xobjects[xObjectId] //= null;
        }
    }

    /**
     * Retrieves XObject instance
     * @param xObjectId XObject id 
     * @returns {XObject}
     */
    getObject(xObjectId:string):XObject {
        return this.#_xobjects[xObjectId]
    }

    /**
     * alias to getObject
     * @param id 
     * @returns 
     */
    go(id:string){
        return this.getObject(id)
    }
    

    /**
     * Retrieves XObject instance
     * @param objectName XObject name 
     * @returns {XObject}
     */
    getObjectByName(objectName:string):XObject | null {
        if(this.#_names_index[objectName]) {
            return this.getObject(this.#_names_index[objectName])
        } 
        return null
    }
    
}

export default XObjectManager