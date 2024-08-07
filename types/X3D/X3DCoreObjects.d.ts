import * as THREE from 'three';
import { X3DObject, IX3DObjectData } from './X3DObject';
export declare const threeCameras: {
    [name: string]: any;
};
export declare const threeLights: {
    [name: string]: any;
};
export declare const threeGeometries: {
    [name: string]: any;
};
export declare const threeMaterials: {
    [name: string]: any;
};
export type XCameraTypes = "perspective-camera" | "perspective" | "camera" | "orthographic-camera" | "orthographic";
export interface XCameraData extends IX3DObjectData {
    _camera?: XCameraTypes;
    _fov?: number;
    _ratio?: number;
    _far?: number;
    _near?: number;
    _positional_audio_listener?: boolean;
    _helper?: boolean;
}
/**
 * XCamera - Three Camera wrapper
 */
export declare class XCamera extends X3DObject {
    static xtype: string;
    readonly _is_camera: boolean;
    _fov: number;
    _ratio: number;
    _far: number;
    _close: number;
    _positional_audio_listener: boolean;
    _camera: XCameraTypes;
    constructor(data: XCameraData);
}
/**
 * supported Three light type
 */
export type XLightTypes = "ambient" | "directional" | "spotlight" | "hemisphere" | "point" | "rectArea" | "lightE" | "lightProbe";
/**
 * XLight Data
 */
export interface XLightData extends IX3DObjectData {
    _light?: XLightTypes;
    _color?: number | string | THREE.Color;
    _intensity?: number;
}
/**
 * XLight - Xpell wrapper for Three Light
 */
export declare class XLight extends X3DObject {
    #private;
    static xtype: string;
    readonly _is_light: boolean;
    _three_obj: THREE.Light | null;
    _light?: XLightTypes;
    constructor(data: XLightData);
    set _color(color: number | string);
    get _color(): number | string;
    set _intensity(intensity: number);
    get _intensity(): number;
}
export declare class HemisphereLight extends XLight {
    _skyColor: THREE.Color | number;
    _groundColor: THREE.Color | number;
    constructor(data: HemisphereLightData);
}
export interface HemisphereLightData extends XLightData {
    _skyColor?: THREE.Color | number;
    _groundColor?: THREE.Color | number;
}
export declare class XGeometry extends X3DObject {
    width: number;
    height: number;
    depth: number;
    constructor(data: IX3DObjectData, defaults?: IX3DObjectData);
}
/**
 * Material
 *
 * maps can be <string>  for file  or object with parameters to the texture
 * _texture_map : "/public/file-name"
 *
 * _texture_map: {
 *      texture:"/public/file-name",
 *      offset:$_v2 X Y //for Three.Vector2
 *      rotation: 3 //number
 * } */
export declare class XMaterial extends X3DObject {
    #private;
    _three_obj: any;
    constructor(data: IX3DObjectData);
    set _color(color: number | string);
}
export declare class XMesh extends X3DObject {
    static getFromThreeObject(threeObject: THREE.Mesh, defaults: any): XMesh;
    _geometry: XGeometry | IX3DObjectData;
    _material: XMaterial | IX3DObjectData;
    _wireframe: boolean;
    protected __color: number | undefined;
    constructor(data: IX3DObjectData, defaults?: {
        _type: string;
        _geometry: null;
        _material: null;
        _positional_audio_source: null;
    }, skipParse?: boolean);
    set _color(val: number);
    get _color(): number | undefined;
    getThreeObject(): Promise<THREE.Object3D<THREE.Event>>;
}
export declare class XGroup extends X3DObject {
    static getFromThreeObject(threeObject: THREE.Group, defaults: any): XGroup;
    constructor(data: IX3DObjectData, defaults?: {
        _type: string;
        _three_class: typeof THREE.Group;
        _three_obj: null;
    });
}
declare const _default: {
    XCamera: typeof XCamera;
};
export default _default;
//# sourceMappingURL=X3DCoreObjects.d.ts.map