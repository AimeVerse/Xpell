/**
 * XModule - Xpell Base Module
 * This class is being extended by modules with the following logic:
 * 1. Every module must have a name
 * 2. Module holds Object manager to manager the module specific object (extends XObject)
 * 3. Every module can execute XCommand (XCommand, JSON, text(CLI style)),
 *    the rules of the method invocation is the "underscore" sign, meaning functions that will start with "_" sign
 *    will be exposed to XPell Interpreter
 *
 * @example
 *  '''
 *    The following module:
 *      
 *    class myModule extends XModule {
 *          constructor() {...}
 *          _my_Command(xCommand) {
 *              ...
 *          }
 *    }
 * 
 *    will be called like this:
 * 
 *    XModule.execute("my-Command")
 *      - when calling the method there is no need for the underscore sign, spaces and dashes will be converted to underscore
 *  '''
 */
import XUtils from "./XUtils"
import XParser from "./XParser"
import { XLogger as _xl } from "./XLogger";
import XObjectManager from "./XObjectManager";
import * as _XC from "./XConst"
import { XObjectData, XObject, XObjectPack } from "./XObject";
import XCommand, { XCommandData } from "./XCommand";



export type XModuleData = {
    _name: string
}

/**
 * Xpell Base Module
 * This class represents xpell base module to be extends
 * @class XModule
 * 
 */
export class XModule {
    [k:string]:any
    _id: string
    _name: string;
    _log_rules: {
        createObject: boolean,
        removeObject: boolean,

    } = {
            createObject: false,
            removeObject: false
        }

    //private object manager instance
    #_object_manger = new XObjectManager()
    //engine: any;  //deprecated remove after spell3d


    constructor(data: XModuleData) {
        this._name = data._name
        this._id = XUtils.guid()


    }

    load() {
        _xl.log("Module " + this._name + " loaded")
    }

    /**
     * Creates new XObject from data object
     * @param data - The data of the new object (JSON)
     * @return {XObject|*}
     */
    create(data:XObjectData) {

        let xObject:any;
        if (data.hasOwnProperty("_type")) {
            if (this.#_object_manger.hasObjectClass(<string>data["_type"])) {
                let xObjectClass = this.#_object_manger.getObjectClass(<string>data["_type"]);
                if (xObjectClass.hasOwnProperty("defaults")) {
                    XUtils.mergeDefaultsWithData(data, xObjectClass.defaults);
                }
                xObject = new xObjectClass(data);
            }
            else {
                throw "Xpell object '" + data["_type"] + "' not found";
            }
        }
        else {
            xObject = new XObject(data);
        }

        //await spell_object.init();
        this.#_object_manger.addObject(xObject)
        if (data._children) {
            // const sthis = this //strong "this" for anonymous function use
            data._children.forEach(async (spell) => {
                let new_spell = this.create(<any>spell);
                xObject.append(new_spell)
            });
        }
        xObject.onCreate()
        return xObject;
    }

    /**
     * removes and XObject from the object manager
     * @param objectId op
     */
    remove(objectId:string) {
        const obj:XObject = this.#_object_manger.getObject(objectId)
        if (obj) {
            this.#_object_manger.removeObject(objectId)
            if(obj["dispose"] && typeof obj.dispose === "function") {
                (<XObject>obj).dispose()
            }
        }
    }


    _info(xCommand:XCommand) {
        _xl.log("module info")
    }

    //xpell interpreter 
    /**
     * Run xpell command - 
     * CLI mode, parse the command to XCommand JSON format and call execute method
     * @param {string} XCommand input - text 
     * @returns command execution result
     */
    async run(stringXCommand:string) {
        if (stringXCommand) {
            let strCmd = stringXCommand.trim()
            //add module name to run command if not exists (in case of direct call from the module)
            if (!strCmd.startsWith(this._name)) {
                strCmd = this._name + " " + strCmd
            }
            let xCommand = XParser.parse(strCmd)
            return await this.execute(xCommand)
        } else {
            throw "Unable to parse Xpell Command"
        }
    }




    /**
     * execute xpell command - CLI mode
     * @param {XCommand} XCommand input (JSON)
     * @returns command execution result
     */
    async execute(xCommand: XCommand | XCommandData) {


        //search for xpell wrapping functions (starts with _ "underscore" example -> _start() , async _spell_async_func() )
        if(xCommand._op){
            const lop:string = "_" + xCommand._op.replaceAll('-', '_') //search for local op = lop
        if (this[lop] && typeof this[lop] === 'function') {
            return this[lop](xCommand)
        }
        else if (this.#_object_manger) //direct xpell injection to specific module
        {

            const o = this.#_object_manger.getObjectByName(xCommand._op)
            if (o) { o.execute(xCommand) }
            else { throw "Xpell Module cant find op:" + xCommand._op }
        }
        else {
            throw "Xpell Module cant find op:" + xCommand._op
        }
        }
        


    }

    /**
     * This method triggers every frame from the Xpell engine.
     * The method can be override by the extending module to support extended onFrame functionality
     * @param frameNumber Current frame number
     */
    async onFrame(frameNumber: number) {
        const omObjects = this.#_object_manger._objects
        Object.keys(omObjects).forEach(key => {
            const onFrameCallBack:XObject = <any>omObjects[key]
            if (onFrameCallBack && onFrameCallBack.onFrame && typeof onFrameCallBack.onFrame === 'function') {
                onFrameCallBack?.onFrame(frameNumber)
            }
        })
    }


    /**
     * X Object Manager
     */

    /**
     * getter for om (object manager) instance
     * @returns {XObjectManager}
     * @deprecated - use _object_manager instead
     * If you wish to get an object from the object manager use
     * getObject directly on the module instead of om.getObject 
     */
    get om() { return this.#_object_manger }
    get _object_manager() { return this.#_object_manger }

    /**
     * Returns the XObject instance from the module Object Manager
     * @param objectId 
     * @returns XObject
     */
    getObject(objectId:string):XObject {
        return this.#_object_manger.getObject(objectId)
    }

    /**
     * Imports external object pack to the engine
     * The object class should be like XObjects with static implementation of getObjects() method
     * @param {XObjects} xObjectPack 
     */
    importObjectPack(xObjectPack: XObjectPack | any) {
        this.#_object_manger.registerObjects(xObjectPack.getObjects())
    }

    /**
     * Imports external object pack to the engine
     * @deprecated - use importObjectPack instead
     * @param xObjectPack 
     */
    importObjects(xObjectPack: XObjectPack | any) {
        this.importObjectPack(xObjectPack)
    }

    /**
     * Imports external objects to the engine
     * The object class should be like XObjects with static implementation of getObjects() method
     * @param xObjectName 
     * @param xObject 
     */
    importObject(xObjectName:string, xObject:XObject) {
        this.#_object_manger.registerObject(xObjectName, xObject)
    }

}

export const GenericModule = new XModule({_name:"xmodule"})
export default XModule