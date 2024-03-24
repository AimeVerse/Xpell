import * as THREE from 'three';
import X3DWorld from './X3DWorld';
export declare enum X3DSceneBackgroundTypes {
    _solid_color = "solid-color",
    _gradient = "gradient",
    _image = "image",
    _video = "video",
    _cube_texture = "cube-texture",
    _sphere_texture = "sphere-texture",
    _hdri = "hdri"
}
export type X3DSceneBackgroundHandler = {
    (scene: THREE.Scene, params: X3DSceneBackgroundParams): void;
};
export type X3DSceneBackgroundParams = {
    [k: string]: any;
    _color?: string;
    _color1?: string;
    _color2?: string;
    _direction_deg?: number;
    _url?: string;
    _px?: string;
    _nx?: string;
    _py?: string;
    _ny?: string;
    _pz?: string;
    _nz?: string;
    _path?: string;
};
/**
     * Background type
     * @description solid-color | gradient | image | video | cube-texture | sphere-texture
     * params for:
     * solid-color: color:string
     * gradient: color1, color2, direction
     * image: url
     * video: url
     * cube-texture: [url1, url2, url3, url4, url5, url6]
     * sphere-texture: url
     */
export type X3DSceneBackground = {
    _type: X3DSceneBackgroundTypes;
    _params: {
        [k: string]: any;
    };
};
export declare const createSceneBackgroundBasicHandlers: (world: X3DWorld) => void;
