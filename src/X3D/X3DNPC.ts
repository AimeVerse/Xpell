/**
 * Xpell X3D Character
 * This object is responsible for Character control, graphics, animations and more
 */


 import {X3DObject, IX3DObjectData} from './X3DObject'
 import { XObjectPack } from '../XObject'
 import X3DLoader from './X3DLoader'

 

 
 export class X3DNonPlayerCharacter extends X3DObject {

    _model_file:string


    constructor(data: IX3DObjectData, defaults?: any) {
        super(data, defaults)
        this._model_file = ""
    }

    
 }




 export class X3DNPC extends XObjectPack {
    static getObjects() {
        return {
            "npc": X3DNonPlayerCharacter
        }
    }
}

export default X3DNPC