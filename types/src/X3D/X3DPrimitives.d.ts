import X3DObject, { IX3DObjectData } from './X3DObject';
import { IXObjectData, XObjectPack } from '../Core/Xpell';
import { XCamera, XGeometry, XLight, XMaterial, XMesh, XGroup } from './X3DCoreObjects';
export declare class XPlane extends XMesh {
    constructor(data: IX3DObjectData, defaults?: IX3DObjectData);
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
    constructor(data: IX3DObjectData, defaults: any);
}
export declare class XSphere extends XMesh {
    constructor(data: IX3DObjectData, defaults: IX3DObjectData);
}
export declare class XCylinder extends XMesh {
    constructor(data: IX3DObjectData, defaults: IX3DObjectData);
}
export declare class XTorus extends XMesh {
    constructor(data: IX3DObjectData, defaults: any);
}
export declare class XCone extends XMesh {
    constructor(data: IX3DObjectData, defaults: any);
}
export declare class XCircle extends XMesh {
    constructor(data: any, defaults: any);
}
/**
 * XModel
 * enable auo wrapper for GLB/GLTF models
 * @example {
 *     _id: "model-id",
 *    _type: "xmodel",
 *   _model_url: "/public/models/scene.gltf",
 * }
 */
export declare class XModel extends X3DObject {
    static xtype: string;
    constructor(data: IXObjectData);
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
        xmodel: typeof XModel;
        "perspective-camera": typeof XCamera;
        camera: typeof XCamera;
        light: typeof XLight;
        circle: typeof XCircle;
    };
}
export default X3DPrimitives;
