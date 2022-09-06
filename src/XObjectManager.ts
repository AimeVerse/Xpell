import XEM from "./XEventManager"
import XObject, { XObjectPack } from "./XObject";

/**
 * Xpell Module Object Manager
 * @description This manager holds the module XObjects that should be managed (XObject children will not be managed separately)
 * XModules uses the Object Manager to create new XObjects by providing the class of the object by name
 */

export class XObjectManager {
    objectClasses: {};
    xObjects: {};
    namesIndex: {};
    constructor() {
        /**
         * Object Classes dictionary
         */
        this.objectClasses = {};

        /**
         * Live XObject that is being maintained by the Object Manager
         */
        this.xObjects = {};

        /**
         * Object Names index - uses to get object by name
         */
        this.namesIndex = {}
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
        this.objectClasses[name] = xObjects;
    }

    /**
     * Checks if a class (name) is found in the object manager classes dictionary
     * @param name - class name
     * @returns {boolean} 
     */
    hasObjectClass(name) {
        return this.objectClasses.hasOwnProperty(name);
    }

    /**
     * Retrieves XObject class instance
     * @param name class name
     * @returns {XObject}
     */
    getObjectClass(name) {
        return this.objectClasses[name];
    }

    /**
     * Retrieves all the classes dictionary
     * @returns 
     */
    getAllClasses() {
        return this.objectClasses;
    }

    /**
     * Add XObject instance to the manager
     * @param xObjects XObject to maintain
     */
    addObject(xObjects) {
        if (xObjects && xObjects._id) {
            this.xObjects[xObjects._id] = xObjects
            if (!xObjects.name || xObjects.name.length==0) {
                xObjects.name = xObjects._id
            }
            this.namesIndex[xObjects.name] = xObjects._id
            XEM.fire("xpell-on-change")
        }
        else {
            console.log("unable to add object")
        }
    }

    /**
     * Remove XObject from the manager 
     * @param xObjectId object id to remove
     */
    removeObject(xObjectId) {
        const obj = this.xObjects[xObjectId]
        if(obj) {
            this.namesIndex[obj?.name] = null
            this.xObjects[xObjectId] = null;
        }
    }

    /**
     * Retrieves XObject instance
     * @param xObjectId XObject id 
     * @returns {XObject}
     */
    getObject(xObjectId):XObject {
        //console.log(this.spell_objects);
        return this.xObjects[xObjectId]
    }


    /**
     * Retrieves XObject instance
     * @param objectName XObject name 
     * @returns {XObject}
     */
    getObjectByName(objectName):XObject | null {
        if(this.namesIndex[objectName]) {
            return this.getObject(this.namesIndex[objectName])
        } 
        return null
    }
}

export default XObjectManager