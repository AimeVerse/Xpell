import * as THREE from 'three'
import { XCamera, XGeometry, XLight, XMaterial, XMesh, XGroup } from './X3DCoreObjects'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import X3DObject from './X3DObject';
import X3D from "./X3D"
import XEventManager from '../XEventManager';
import XObject from '../XObject';
import {XLogger as _xlog} from '../XLogger'
import XUtils from '../XUtils';




class X3DLoader {
    static loading: boolean;


    static loadGLTF(fileName: string, data: any, onLoadCallBack?: Function) {

        const _onload = (gltf) => {

            let firstObj = null
            //to-do fix group loading position
            
            //gltf.scene.children.forEach(child => {
                const child = gltf.scene

                let xobject;
                child.animations = gltf.animations


                if (child.type == "Mesh") {
                    xobject = XMesh.getFromThreeObject(child, data)
                }
                else if (child.type == "Group") {
                    xobject = XGroup.getFromThreeObject(child, data)
                }
                else if (child.type == "Object3D") {
                    xobject = X3DObject.getFromThreeObject(child, data)
                }
                
                
                child.traverse((child2) => {
                    child2.frustumCulled = false
                    /** add more */
                })
                
                xobject.loadAnimations()
                // console.log(xobject);



                X3D.add(xobject)
                // if(!firstObj) {
                //     firstObj=xobject
                //     data._id = XUtils.guid()
                // }

            //})

            if (data["_id"]) XEventManager.fire(data["_id"] + "-loaded", {})
            if (onLoadCallBack) onLoadCallBack(xobject)
        }

        const _onprogress = (data) => {
            //console.log(data);
            // this.loading=false

        }

        const _onerror = (error) => {
            console.log(error);
            this.loading = false

        }

        const loader = new GLTFLoader()
        loader.load(fileName, _onload, _onprogress, _onerror);
    }


    static loadFBX(fileName: string, data: any, onLoadCallBack?: Function) {

        const _onload = (obj) => {
            
            //to-do fix group loading position
            // obj.children.forEach(child => {
            let xobject;
            //child.animations = obj.animations

            // console.log("tye:" + child.type);

            if (obj.type == "Mesh") {
                xobject = XMesh.getFromThreeObject(obj, data)
            }
            else if (obj.type == "Group") {
                xobject = XGroup.getFromThreeObject(obj, data)
            }
            else if (obj.type == "Object3D") {
                xobject = X3DObject.getFromThreeObject(obj, data)
            }
            xobject.loadAnimations()
            // console.log(xobject);

            X3D.add(xobject)

            // })

            if (data["_id"]) XEventManager.fire(data["_id"] + "-loaded", {})
            if (onLoadCallBack) onLoadCallBack(xobject)

            // console.log(obj);
            // obj.scene.traverse( (threeObj) => {
            //     console.log(threeObj);    
            // })



        }

        const _onprogress = (data) => {
            //console.log(data);
            // this.loading=false

        }

        const _onerror = (error) => {
            console.log(error);
            this.loading = false

        }

        const loader = new FBXLoader()
        loader.load(fileName, _onload, _onprogress, _onerror);
    }

    static loadFBXAnimation(fileName: string, x3dObject:X3DObject,onLoadCallBack?:Function) {

        const _onload = (obj) => {
            
           x3dObject.importAnimations(obj)
           onLoadCallBack()


        }

        const _onprogress = (data) => {
            //console.log(data);
            // this.loading=false

        }

        const _onerror = (error) => {
            console.log(error);
            this.loading = false

        }

        const loader = new FBXLoader()
        loader.load(fileName, _onload, _onprogress, _onerror);
    }



}

export default X3DLoader
export { X3DLoader }