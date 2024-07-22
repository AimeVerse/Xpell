/**
 * X3D Application Template
 */
import { XCameraData, XLightData } from './X3DCoreObjects';
import { IX3DObjectData } from "./X3DObject";
import { X3DSceneBackground } from "./X3DWorldSceneBackground";
export type X3DSceneControl = {
    _type: "orbit" | "pointer" | "first-person" | "transform";
    _active: boolean;
    _params?: {
        [k: string]: any;
    };
};
export type X3DPhysicsEngines = "cannon.js";
export type X3DHelpers = "axes" | "skeleton";
/**
 * X3DHelper Data
 */
export type X3AxesHelper = {
    size: number;
};
/**
 * X3DHelper Data
 */
export type XHelperData<Type> = {
    _type: X3DHelpers;
    _active: boolean;
    _params?: {
        [Property in keyof Type]: Type[Property];
    };
};
export type X3DApp = {
    _parent_element: string;
    _physics: {
        _engine?: X3DPhysicsEngines;
        _active: boolean;
        _debug?: boolean;
    };
    _scene: {
        _helpers?: {
            [k: string]: XHelperData<X3AxesHelper>;
        };
        _lights?: {
            [k: string]: XLightData;
        };
        _cameras?: {
            [k: string]: XCameraData;
        };
        _background?: X3DSceneBackground;
        _controls?: {
            [k: string]: X3DSceneControl;
        };
        _objects?: {
            [k: string]: IX3DObjectData;
        };
        _raycast?: boolean;
    };
};
export declare const X3DDefaultApp: X3DApp;
export declare class X3DAppGenerator {
    static getDefaultApp(orbitControls?: boolean, bgColor?: string, enablePhysics?: boolean): X3DApp;
}
//# sourceMappingURL=X3DApp.d.ts.map