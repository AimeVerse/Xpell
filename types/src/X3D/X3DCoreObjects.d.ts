import * as THREE from 'three';
import X3DObject from './X3DObject';
export declare class XCamera extends X3DObject {
    _clipping: {
        close: number;
        far: number;
    };
    constructor(data: any, defaults: any);
}
export declare class XLight extends X3DObject {
    color: string;
    intensity: number;
    constructor(data: any, defaults: any);
}
export declare class XGeometry extends X3DObject {
    width: number;
    height: number;
    constructor(data: any, defaults?: any);
}
export declare class XMaterial extends X3DObject {
    constructor(data: any);
}
export declare class XMesh extends X3DObject {
    static getFromThreeObject(threeObject: any, defaults: any): XMesh;
    _geometry: XGeometry;
    _material: XMaterial;
    constructor(data: any, defaults?: {
        _type: string;
        _three_class: typeof THREE.Mesh;
        _three_obj: any;
        _geometry: any;
        _material: any;
        _positional_audio_source: any;
    });
    getThreeObject(): THREE.Object3D<THREE.Event>;
}
export declare class XGroup extends X3DObject {
    static getFromThreeObject(threeObject: any, defaults: any): XGroup;
    constructor(data: any, defaults?: {
        _type: string;
        _three_class: typeof THREE.Group;
        _three_obj: any;
    });
}
