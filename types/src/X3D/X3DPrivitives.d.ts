import X3DObject from './X3DObject';
import { XObjectPack } from '../XObject';
import { XCamera, XGeometry, XLight, XMaterial, XMesh, XGroup } from './X3DCoreObjects';
import * as THREE from 'three';
export declare class XPlane extends XMesh {
    constructor(data: any, defaults?: any);
}
/**
 * 3D Box
 * @example {
            _id: "box-id",
            _type: "box",
            _geometry: {
                _type: "box-geometry",
                width: 10,
                height: 10,
                depth: 0.3,
                widthSegments: 50,
                heightSegments: 50,
                depthSegments: 50
            },
            _material: {
                _type: "standard-material",
                color: 0xff00ff,
                side: 2
            },
            _position: { x: 0, y: 1.5, z: 0 },
            _rotation: { x: Math.PI / 2, y: 0, z: 0 },
            _enable_physics: true,
            _mass: 0,
        }
 */
export declare class XBox extends XMesh {
    constructor(data: any, defaults: any);
}
export declare class XSphere extends XMesh {
    constructor(data: any, defaults: any);
}
export declare class XCylinder extends XMesh {
    constructor(data: any, defaults: any);
}
export declare class XTorus extends XMesh {
    constructor(data: any, defaults: any);
}
export declare class XCone extends XMesh {
    constructor(data: any, defaults: any);
}
export declare class XFloor extends X3DObject {
    _geometry: XGeometry;
    _material: XMaterial;
    _num_of_blocks_x: number;
    _num_of_blocks_z: number;
    constructor(data: any);
    getThreeObject(): THREE.Object3D<THREE.Event>;
}
export declare class XSkeleton extends X3DObject {
    _bones: Array<THREE.Bone>;
    constructor(data: any, defaults?: {
        _type: string;
        _three_class: typeof THREE.SkinnedMesh;
        _three_obj: any;
        _geometry: any;
        _material: any;
    });
    /**
   * this method triggered after the THREE 3d object has been created
   * override to implement
   */
    onCreate(): Promise<void>;
}
export declare class X3DPrimitives extends XObjectPack {
    static getObjects(): {
        material: typeof XMaterial;
        geometry: typeof XGeometry;
        mesh: typeof XMesh;
        group: typeof XGroup;
        plane: typeof XPlane;
        box: typeof XBox;
        sphere: typeof XSphere;
        cylinder: typeof XCylinder;
        torus: typeof XTorus;
        cone: typeof XCone;
        floor: typeof XFloor;
        "perspective-camera": typeof XCamera;
        light: typeof XLight;
        skeleton: typeof XSkeleton;
    };
}
export default X3DPrimitives;
