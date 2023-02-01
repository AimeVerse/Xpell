import * as THREE from 'three';
import X3DObject from './X3DObject';
declare class X3DLoader {
    static loading: boolean;
    static loadGLTF(fileName: string, data: any, onLoadCallBack?: Function): void;
    static loadFBX(fileName: string, data: any, onLoadCallBack?: Function): void;
    static loadFBXAnimation(fileName: string, x3dObject: X3DObject, onLoadCallBack?: Function): void;
    static loadModelFromGLTF(modelUrl: string): Promise<THREE.Object3D>;
}
export default X3DLoader;
export { X3DLoader };
