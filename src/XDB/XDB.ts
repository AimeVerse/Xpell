import { Xpell, XUtils, XData, _xlog  } from 'xpell-core'



/**
* @class XDataBase - manage local storage
*/
class _XDataBase {
    

    private  _version:string = "1.0.0"    
    private _local = window.localStorage
    private _session = window.sessionStorage
    private _vectors = {}

    constructor() {
    }

    info() {
        _xlog.log("XDB Version " + this._version)
    }

    /**
     * 
     * @param itemName 
     * @param item 
     * @deprecated use saveString instead
     */
    save(itemName:string,item:any) {
        this._local.setItem(itemName,item)
    }



    /**
     * Saves a string to the XDB
     * @param id The id of the string (tag)
     * @param stringValue the string value 
     */
    saveString(id:string,stringValue:any) {
        this._local.setItem(id,stringValue)
    }

    /**
     * loads value from local storage
     * @param itemName @
     * @returns string
     * @deprecated use getString() function instead
     */
    load(itemName:string) {
        return this._local.getItem(itemName)
    }


    /**
     * Gets a string value from the data storage
     * @param id the id that the string was tagged with
     * @returns <string>
     */
    getString(id:string) {
        return this._local.getItem(id)
    }


    /**
     * Gets a JSON Object 
     * @param id the id of the object 
     * @returns object (null if not exists)
     */
    getObject(id:string) {
        const strObj = this.getString(id)
        let outObj = null
        if(strObj) {
            try {
                outObj = JSON.parse(strObj)
            }
            catch(ex) {
                _xlog.error("XDB GetObject ERROR",ex)
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
    saveObject(id:string, obj:object):boolean {
        let rv = false
        if(id?.length>0) {
            try{
                this.saveString(id,JSON.stringify(obj))
                rv = true
            }catch(ex) {
                _xlog.error("XDB Save Object ERROR",ex)
            }
        }
        return rv
    }


    resetAllData(){
        this._local.clear()
    }
}

export const XDB = new _XDataBase()


export default XDB