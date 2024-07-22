/**
* @class XDataBase - manage local storage
*/
export declare class _XDataBase {
    private _version;
    private _local;
    private _session;
    private _vectors;
    private _encode_context;
    constructor();
    info(): void;
    /**
     * Indicates if the data will be encoded before saving to the local storage
     */
    set encode(value: boolean);
    /**
     *
     * @param itemName
     * @param item
     * @deprecated use saveString instead
     */
    save(itemName: string, item: any): void;
    /**
         * loads value from local storage
         * @param itemName @
         * @returns string
         * @deprecated use getString() function instead
         */
    load(itemName: string): string | null;
    /**
     * Saves a string to the XDB
     * @param id The id of the string (tag)
     * @param stringValue the string value
     */
    saveString(id: string, stringValue: any): void;
    /**
     * Gets a string value from the data storage
     * @param id the id that the string was tagged with
     * @returns <string>
     */
    getString(id: string): string | null;
    /**
     * Gets a JSON Object
     * @param id the id of the object
     * @returns object (null if not exists)
     */
    getObject(id: string): any;
    /**
     * Saves an object to the XDB with an ID as a tag (will be used to retrieve the data back)
     * @param id id of the object (tag)
     * @param obj the object it self
     * @returns
     */
    saveObject(id: string, obj: object): boolean;
    resetAllData(): void;
}
export declare const XDB: _XDataBase;
export default XDB;
//# sourceMappingURL=XDB.d.ts.map