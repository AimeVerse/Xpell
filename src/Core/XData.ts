
/**
 * XData (Xpell Global shared Variables & Objects)
 * This object uses as a real-time shared memory between all Xpell modules nad components
 * Usage:
 *  - store primitive variable: 
 *      XData._v["my-var-id"] = "my-var-value"
 *  - get primitive variable:
 *      const v = XData._v["my-var-id"]
 *  - store object:
 *      XData._o["my-object-id"] = {my:"object"}
 *  - get object:
 *      const o = XData._o["my-object-id"]
 */

export type XDataObject = {[_id: string ]: any}
export type XDataVariable = {[_id: string ]: string | number | boolean}


export class _XData {
    //deprecated use  _o instead
    objects: XDataObject = {}
    variables: XDataVariable = {}


    #_objects: XDataObject = {}

    constructor(){
        this.#_objects = {}
    }


    

    /**
     * This method gets the XData object
     * @returns XDataObject object
     * @example
     *  // get the XDataObject object
     *  const o = XData._o["my-object-id"]
     *  // set the XDataObject object
     *  XData._o["my-object-id"] = {my:"object"}
     */
    get _o(){
        return this.#_objects
    }


    /**
     * This method adds an object to the XData object
     * @param objectId 
     * @param object
     * @comment It is also possible to use the XData._o property -> XData._o["my-object-id"] = {my:"object"} 
     * */
    set(objectId:string, object:any) {
        this.#_objects[objectId] = object
    }

    /**
     * This method checks if the XData object has an object by id
     * @param objectId
     * @returns boolean
     * @comment It is also possible to query the XData._o property -> if(XData._o["my-object-id"])...
     * */
    has(objectId:string):boolean {
        return this.#_objects.hasOwnProperty(objectId)
    }

    /**
     * Deletes an object from the XData object
     * @param objectId 
     */
    delete(objectId:string) {
        delete this.#_objects[objectId]
    }

    /**
     * Gets an object and delete it from the XData object list
     * @param objectId 
     * @returns 
     */
    pick(objectId:string) {
        const obj = this.#_objects[objectId]
        this.delete(objectId)
        return obj
    }


    /**
     * This method cleans the XData Memory
     */
    clean(){
        this.#_objects = {}
    }


}

/**
 * @property 
 */
export const XData = new _XData()

export default XData