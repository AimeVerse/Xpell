import { Xpell, XUtils, XData, _xlog } from 'xpell-core'



/**
* @class XDataBase - manage local storage
*/
export class _XDataBase {


    private _version: string = "1.0.0"
    private _local = window.localStorage
    private _session = window.sessionStorage
    private _vectors = {}
    private _encode_context: boolean = false

    constructor() {
    }

    info() {
        _xlog.log("XDB Version " + this._version)
    }

    /**
     * Indicates if the data will be encoded before saving to the local storage
     */
    set encode(value: boolean) {
        this._encode_context = value
    }

    /**
     * 
     * @param itemName 
     * @param item 
     * @deprecated use saveString instead
     */
    save(itemName: string, item: any) {
        //check if context should be encoded

        this._local.setItem(itemName, item)
    }

    /**
         * loads value from local storage
         * @param itemName @
         * @returns string
         * @deprecated use getString() function instead
         */
    load(itemName: string) {
        return this._local.getItem(itemName)
    }

    /**
     * Saves a string to the XDB
     * @param id The id of the string (tag)
     * @param stringValue the string value 
     */
    saveString(id: string, stringValue: any) {
        if (this._encode_context) {
            stringValue = XUtils.encode(stringValue)
        }
        this._local.setItem(id, stringValue)
    }




    /**
     * Gets a string value from the data storage
     * @param id the id that the string was tagged with
     * @returns <string>
     */
    getString(id: string):string | null {
        const val = this._local.getItem(id)
        if (this._encode_context && val) {
            try {
                const out = XUtils.decode(val)
                return out
            } catch (ex) {
                _xlog.error("XDB GetString ERROR", ex)
                return val
            }
        } else {
            return val
        }
    }


    /**
     * Gets a JSON Object 
     * @param id the id of the object 
     * @returns object (null if not exists)
     */
    getObject(id: string) {
        const strObj = this.getString(id)
        let outObj = null
        if (strObj) {
            try {
                outObj = JSON.parse(strObj)
            }
            catch (ex) {
                _xlog.error("XDB GetObject ERROR", ex)
            }
        }
        return outObj
    }

    /**
     * Saves an object to the XDB with an ID as a tag (will be used to retrieve the data back)
     * @param id id of the object (tag)
     * @param obj the object it self
     * @returns 
     */
    saveObject(id: string, obj: object): boolean {
        let rv = false
        if (id?.length > 0) {
            try {
                this.saveString(id, JSON.stringify(obj))
                rv = true
            } catch (ex) {
                _xlog.error("XDB Save Object ERROR", ex)
            }
        }
        return rv
    }


    resetAllData() {
        this._local.clear()
    }
}

export const XDB = new _XDataBase()


export default XDB