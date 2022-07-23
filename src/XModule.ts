
import XUtils from "./XUtils"
import XParser from "./XParser"
import XObjectManager from "./XObjectManager";
import * as _XC from "./XConst"
import {XObject,XObjectPack} from "./XObject";

/** XPell Module **/

const XModuleOp = (opName, functionName) => { return { op_name: functionName } }

export default class XModule {

    _id:string 
    name: string;

    //private object manager instance
    #om = new XObjectManager()
    engine: any;  //deprecated remove after spell3d

    constructor(data, defaults = { name: "xpell-module" }) {
        if (defaults) {
            if (!data) {
                data = defaults
            } else {
                XUtils.mergeDefaultsWithData(data, defaults)
            }
        }
        if (data) {
            let dkey = Object.keys(data);
            dkey.forEach(key => {
                this[key] = data[key];
            })
        }
        this._id = XUtils.guid()


    }

    load() {
        console.log("module " + this.name + " loaded")
    }

    /**
     * create new SPELL_OBJECT
     * @static
     * @param data - The data of the new object (JSON)
     * @return {XObject|*}
     */
    create(data) {

        let xObject;
        if (data.hasOwnProperty(_XC.NODES.type)) {
            if (this.#om.hasObjectClass(data[_XC.NODES.type])) {

                let spell_object_class = this.#om.getObjectClass(data[_XC.NODES.type]);
                if (spell_object_class.hasOwnProperty("defaults")) {
                    XUtils.mergeDefaultsWithData(data, spell_object_class.defaults);
                }
                xObject = new spell_object_class(data);
            }
            else {
                throw "Spell object '" + data[_XC.NODES.type] + "' not found";
            }
        }
        else {
            xObject = new XObject(data);
        }

        //await spell_object.init();
        this.#om.addObject(xObject)
        if (data[_XC.NODES.children]) {
            const sthis = this //strong "this" for anonymous function use
            data[_XC.NODES.children].forEach(async (spell) => {
                let new_spell = sthis.create(spell);
                xObject.append(new_spell)
            });
        }


        return xObject;
    }

    _info(xCommand) {
        console.log("module info")
    }

    //xpell interpreter 
    /**
     * Run xpell command - 
     * CLI mode, parse the command to XCommand JSON format and call execute method
     * @param {string} XCommand input - text 
     * @returns command execution result
     */
    async run(stringXCommand) {
        if (stringXCommand) {
            let strCmd = stringXCommand.trim()
            //add module name to run command if not exists (in case of direct call from the module)
            if (!strCmd.startsWith(this.name)) {
                strCmd = this.name + " " + strCmd
            }
            let xCommand = XParser.parse(strCmd)
            return await this.execute(xCommand)
        } else {
            throw "Unable to parse XPell Command"
        }
    }

    /**
     * Run spell command - CLI mode
     * @param {SpellCommand} SpellCommand input (JSON)
     * @returns command execution result
     */
    async execute(xCommand) {


        //search for xpell wrapping functions (starts with _ "underscore" example -> _start() , async _spell_async_func() )
        const lop = "_" + xCommand.op.replaceAll('-', '_') //search for local op = lop
        if (this[lop] && typeof this[lop] === 'function') {
            return this[lop](xCommand)
        } 
        else if (this.engine && this.engine.om) //direct spell injection to specific module -> deprecated rem
        {
            console.log("STILL RUNNING FROM ENGINE -- DEPRECATED");
             const o = this.engine.om.getObjectByName(xCommand.op)
            if (o) { o.execute(xCommand) }
            else { throw "XPell Module cant find op:" + xCommand.op }
        }
        else if (this.#om) //direct xpell injection to specific module
        {
            const o = this.#om.getObjectByName(xCommand.op)
            //console.log(o);
            if (o) { o.execute(xCommand) }
            else { throw "XPell Module cant find op:" + xCommand.op }
        }
        else {
            throw "XPell Module cant find op:" + xCommand.op
        }


    }

    async onFrame(frameNumber) {
        Object.keys(this.#om.xObjects).forEach(key=>{
            const so = this.#om.xObjects[key]
            if(so.onFrame && typeof so.onFrame === 'function') {
                so.onFrame(frameNumber)
            }
        })
    }


    /**
     * X Object Manager
     */

    //getter for om (object manager) instance
    get om() { return this.#om }

    get object_manager() { return this.#om } //alias
    /**
     * Imports external objects to the engine
     * The object class should be like XObjects with static implementation of getObjects() method
     * @param {XObjects} xObjectPack 
     */
    importObjects(xObjectPack:any) {
        this.#om.registerObjects(xObjectPack.getObjects())
    }

    

}


