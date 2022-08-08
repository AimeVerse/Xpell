import XEM from "./XEventManager"
import XObject, { XObjectPack } from "./XObject";

export class XObjectManager {
    objectClasses: {};
    xObjects: {};
    namesIndex: {};
    constructor() {
        this.objectClasses = {};
        this.xObjects = {};
        this.namesIndex = {}
        this.init()
    }

    init(){
        
    }

    /**
     *
     * @param xObjects - key value list -> \{"view":XView,...\}
     */
    registerObjects(xObjects:XObjectPack):void {
        let names = Object.keys(xObjects)
        names.forEach(name => this.registerObject(name, xObjects[name]))
    }

    registerObject(name:string, xObjects:XObject) {
        this.objectClasses[name] = xObjects;
    }

    hasObjectClass(name) {
        return this.objectClasses.hasOwnProperty(name);
    }

    getObjectClass(name) {
        return this.objectClasses[name];
    }

    getAllClasses() {
        return this.objectClasses;
    }

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

    // TO-DO - remove object
    removeObject(xObjectId) {
        this.xObjects[xObjectId] = null;
    }

    getObject(xObjectId) {
        //console.log(this.spell_objects);
        return this.xObjects[xObjectId]
    }


    getObjectByName(objectName) {
        if(this.namesIndex[objectName]) {
            return this.getObject(this.namesIndex[objectName])
        } 
        return null
    }
}

export default XObjectManager