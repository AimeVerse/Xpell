/**
 * Xpell3d
 * @description Real-time User Interface (UI) Engine for Javascript supporting devices & browsers
 * Wrapper for THREE.JS engine
 
*  change-log:
 *  - events
 */
import { XModule } from '../Core/Xpell';
import X3DObject, { IX3DObjectData } from "./X3DObject";
import { XCameraData, XLightData } from './X3DCoreObjects';
import X3DWorld from './X3DWorld';
import { X3DSceneBackground } from './X3DWorldSceneBackground';
declare const X3DEngineStatus: {
    New: number;
    Ready: number;
    Running: number;
    Stopped: number;
};
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
/**
 * @class X3DModule - Xpell 3D Module
 */
export declare class X3DModule extends XModule {
    world: X3DWorld;
    x3dObjects: {};
    status: number;
    _raycast_event: string;
    constructor();
    /**
     * Loads XWorld from world data object
     * @param x3dWorldData World Data object
     * @param autoRun - start world running automatically
     * @deprecated - use loadApp function instead
     */
    loadWorld(x3dWorldData: X3DApp, autoRun?: boolean): Promise<void>;
    loadApp(x3dApp: X3DApp, autoRun?: boolean): Promise<void>;
    /**
     * Creates new X3DObject from data object
     * @param data - The data of the new object (JSON)
     * @return {X3DObject}
     * @override
     */
    create(data: IX3DObjectData): Promise<any>;
    /**
     * Removes X3DObject from X3D engine (including world and X3D object manager)
     * @param objectId th e_id of the X3D object to remove
     */
    remove(objectId: string): Promise<void>;
    /**
     * Add X3DObject to the object manager and world
     * @param x3dObject X3DObject
     */
    add(x3dObject: X3DObject): Promise<void>;
    /**
     * Add X3DObject to the object manager and world
     * @param x3dObject - The X3DObject to add
     *
     */
    loadObject(data: IX3DObjectData): Promise<any>;
    /**
     * Creates new X3DObject from data and add it to the world
     * @param <IX3DObjectData> data  - the object to create data (json)
     * @returns
     */
    addRaw(data: IX3DObjectData): Promise<X3DObject>;
    onWindowResize(): void;
    start(): Promise<void>;
    enableRaycast(event?: string): void;
    disableRaycast(): void;
    raycast(e: any): void;
    /**
     * Add sky map (background to the world scene)
     * @param path - path to skymap
     * @param images - optional images array like ["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]
     */
    addEnvironmentMap(path: string, images?: string[]): void;
    onFrame(frameNumber: number): Promise<void>;
}
declare const X3D: X3DModule;
export default X3D;
export { X3D, X3DEngineStatus, X3DObject };
