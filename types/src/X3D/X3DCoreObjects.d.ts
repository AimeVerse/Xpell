import * as THREE from 'three';
import X3DObject, { IX3DObjectData } from './X3DObject';
export declare const threeCameras: {
    "perspective-camera": typeof THREE.PerspectiveCamera;
    perspective: typeof THREE.PerspectiveCamera;
    camera: typeof THREE.PerspectiveCamera;
    "orthographic-camera": typeof THREE.OrthographicCamera;
    orthographic: typeof THREE.OrthographicCamera;
};
export declare const threeLights: {
    ambient: typeof THREE.AmbientLight;
    directional: typeof THREE.DirectionalLight;
    spotlight: typeof THREE.SpotLight;
};
export declare const threeGeometries: {
    "plane-geometry": typeof THREE.PlaneGeometry;
    "circle-geometry": typeof THREE.CircleGeometry;
    "box-geometry": typeof THREE.BoxGeometry;
    "sphere-geometry": typeof THREE.SphereGeometry;
    "cylinder-geometry": typeof THREE.CylinderGeometry;
    "torus-geometry": typeof THREE.TorusGeometry;
    "cone-geometry": typeof THREE.ConeGeometry;
};
export declare const threeMaterials: {
    "standard-material": typeof THREE.MeshPhysicalMaterial;
    "basic-material": typeof THREE.MeshBasicMaterial;
    "shader-material": typeof THREE.ShaderMaterial;
    "phong-material": typeof THREE.MeshPhongMaterial;
};
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
