/**
 * Xpell X3D Character
 * This object is responsible for Character control, graphics, animations and more
 */


 import {X3DObject, IX3DObjectData} from './X3DObject'
 import { XObjectPack } from '../XObject'
 import { XCamera, XGeometry, XLight, XMaterial, XMesh, XGroup } from './X3DCoreObjects'
 import * as THREE from 'three'
 import * as CANNON from 'cannon-es'

 

 
 export class X3DCharacter extends X3DObject {

    _model_file:string


    constructor(data: IX3DObjectData, defaults?: any) {
        super(data, defaults)
        this._model_file = ""
    }
 }



