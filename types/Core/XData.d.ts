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
export type XDataObject = {
    [_id: string]: any;
};
export type XDataVariable = {
    [_id: string]: string | number | boolean;
};
export declare class _XData {
    #private;
    objects: XDataObject;
    variables: XDataVariable;
    constructor();
    /**
     * This method gets the XData object
     * @returns XDataObject object
     * @example
     *  // get the XDataObject object
     *  const o = XData._o["my-object-id"]
     *  // set the XDataObject object
     *  XData._o["my-object-id"] = {my:"object"}
     */
    get _o(): XDataObject;
    /**
     * This method adds an object to the XData object
     * @param objectId
     * @param object
     * @comment It is also possible to use the XData._o property -> XData._o["my-object-id"] = {my:"object"}
     * */
    set(objectId: string, object: any): void;
    /**
     * This method checks if the XData object has an object by id
     * @param objectId
     * @returns boolean
     * @comment It is also possible to query the XData._o property -> if(XData._o["my-object-id"])...
     * */
    has(objectId: string): boolean;
    /**
     * Deletes an object from the XData object
     * @param objectId
     */
    delete(objectId: string): void;
    /**
     * Gets an object and delete it from the XData object list
     * @param objectId
     * @returns
     */
    pick(objectId: string): any;
    /**
     * This method cleans the XData Memory
     */
    clean(): void;
}
/**
 * @property
 */
export declare const XData: _XData;
export default XData;
//# sourceMappingURL=XData.d.ts.map