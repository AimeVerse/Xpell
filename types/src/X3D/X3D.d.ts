/**
 * Xpell3d
 * @description Real-time User Interface (UI) Engine for Javascript supporting devices & browsers
 * Wrapper for THREE.JS engine
 
*  change-log:
 *  - events
 */
import XModule from "../XModule";
import X3DObject, { IX3DObjectData } from "./X3DObject";
import X3DWorld from './X3DWorld';
declare const X3DEngineStatus: {
    New: number;
    Ready: number;
    Running: number;
    Stopped: number;
};
/**
 * @class X3DModule - Xpell 3D Module
 */
export declare class X3DModule extends XModule {
    world: X3DWorld;
    x3dObjects: {};
    status: number;
    constructor();
    /**
     * Loads XWorld from world data object
     * @param x3dWorldData World Data object
     * @param autoRun
     */
    loadWorld(x3dWorldData: any, autoRun?: boolean): Promise<void>;
    /**
     * Creates new X3DObject from data object
     * @param data - The data of the new object (JSON)
     * @return {X3DObject}
     * @override
     */
    create(data: any): any;
    /**
     * Removes X3DObject from X3D engine (including world and X3D object manager)
     * @param objectId th e_id of the X3D object to remove
     */
    remove(objectId: string): Promise<void>;
    add(x3dObject: X3DObject): void;
    addRaw(x3dJson: IX3DObjectData): X3DObject;
    onWindowResize(): void;
    start(): Promise<void>;
    get_objects_available(): any[];
    raycast(e: any): void;
    set_world_control_target(cameraTarget: any): void;
    /**
     * Add sky map (background to the world scene)
     * @param path - path to skymap
     * @param images - optional images array like ["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"]
     */
    addEnvironmentMap(path: any, images?: any): void;
    onFrame(frameNumber: any): Promise<void>;
}
declare let X3D: X3DModule;
export default X3D;
export { X3D, X3DEngineStatus, X3DObject };
