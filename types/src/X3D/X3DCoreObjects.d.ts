import * as THREE from 'three';
import X3DObject, { IX3DObjectData } from './X3DObject';
export type XCameraTypes = "perspective-camera" | "perspective" | "camera" | "orthographic-camera" | "orthographic";
export interface XCameraData extends IX3DObjectData {
    _camera?: XCameraTypes;
    _fov?: number;
    _ratio?: number;
    _far?: number;
    _near?: number;
    _positional_audio_listener?: boolean;
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
export type XLightTypes = "ambient" | "directional" | "spotlight";
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
    static xtype: string;
    readonly _is_light: boolean;
    _light?: XLightTypes;
    _color?: THREE.Color | number;
    _intensity?: number;
    constructor(data: XLightData);
}
export declare class XGeometry extends X3DObject {
    constructor(data: any, defaults?: any);
}
export declare class XMaterial extends X3DObject {
    constructor(data: any);
}
export declare class XMesh extends X3DObject {
    static getFromThreeObject(threeObject: any, defaults: any): XMesh;
    constructor(data: any, defaults?: {
        _type: string;
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
declare const _default: {
    XCamera: typeof XCamera;
};
export default _default;
