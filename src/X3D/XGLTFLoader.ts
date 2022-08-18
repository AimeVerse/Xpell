import * as THREE from 'three'
import { XCamera, XGeometry, XLight, XMaterial, XMesh,XGroup } from './X3DCoreObjects'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import X3DObject from './X3DObject';
import X3D from "./X3D"
import XEventManager  from '../XEventManager';


 
export const GLTFEvents = {
    loaded:"gltf-loaded"
}

class XGLTFLoader {
    static loading: boolean;
    static load(fileName:string,data:any,onLoadCallBack?:Function) {

        const _onload = (gltf) => {

            //to-do fix group loading position
            
            gltf.scene.children.forEach(child => {
                let xobject;
                child.animations = gltf.animations
                
                
                if (child.type == "Mesh") {
                    xobject = XMesh.getFromThreeObject(child,data)
                }
                else if (child.type == "Group") {
                    xobject = XGroup.getFromThreeObject(child,data)
                }
                else if (child.type == "Object3D") {
                    xobject = X3DObject.getFromThreeObject(child,data)
                }
                xobject.loadAnimations()
                // console.log(xobject);
                
                X3D.add(xobject)
                
            })
            
            if(data["_id"]) XEventManager.fire(data["_id"]+"-loaded",{})
            if(onLoadCallBack) onLoadCallBack()
            
            
            
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

    

}

export default XGLTFLoader 
export {XGLTFLoader}