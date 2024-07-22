import * as THREE from 'three';
import { DRACOLoader } from 'three/examples/jsm/loaders/DRACOLoader';
import X3DObject from './X3DObject';
declare class _X3DLoader {
    loading: boolean;
    dracoLoader: DRACOLoader;
    constructor();
    loadDraco(): void;
    loadFBXAnimation(fileName: string, x3dObject: X3DObject, onLoadCallBack?: Function): void;
    loadModelFromGLTF(modelUrl: string, traverse?: boolean): Promise<THREE.Object3D>;
}
export declare const X3DLoader: _X3DLoader;
export default X3DLoader;
export { _X3DLoader };
//# sourceMappingURL=X3DLoader.d.ts.map