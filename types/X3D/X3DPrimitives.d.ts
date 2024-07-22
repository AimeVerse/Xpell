import X3DObject, { IX3DObjectData } from './X3DObject';
import { XObjectPack } from '../Core/Xpell';
import { XCamera, XGeometry, XLight, XMaterial, XMesh, XGroup } from './X3DCoreObjects';
export declare class XPlane extends XMesh {
    constructor(data: IX3DObjectData, defaults?: IX3DObjectData);
    set _width(val: number);
    get _width(): number | undefined;
    set _height(val: number);
    get _height(): number | undefined;
}
export declare class XBox extends XMesh {
    constructor(data: IX3DObjectData, defaults: any);
    set _width(val: number);
    get _width(): number | undefined;
    set _height(val: number);
    get _height(): number | undefined;
    set _depth(val: number);
    get _depth(): number | undefined;
}
export declare class XSphere extends XMesh {
    private __radius?;
    constructor(data: IX3DObjectData, defaults: IX3DObjectData);
    set _radius(val: number);
    get _radius(): number | undefined;
}
export declare class XCylinder extends XMesh {
    constructor(data: IX3DObjectData, defaults: IX3DObjectData);
    set _radius_top(val: number);
    get _radius_top(): number | undefined;
    set _radius_bottom(val: number);
    get _radius_bottom(): number | undefined;
    set _height(val: number);
    get _height(): number | undefined;
}
export declare class XTorus extends XMesh {
    constructor(data: IX3DObjectData, defaults: any);
    get _radius(): number | undefined;
    set _radius(val: number);
    get _tube_radius(): number | undefined;
    set _tube_radius(val: number);
}
export declare class XCone extends XMesh {
    constructor(data: IX3DObjectData, defaults: any);
    get _radius(): number | undefined;
    set _radius(val: number);
    get _height(): number | undefined;
    set _height(val: number);
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
    constructor(data: IX3DObjectData);
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
//# sourceMappingURL=X3DPrimitives.d.ts.map