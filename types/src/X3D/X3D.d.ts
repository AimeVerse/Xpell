/**
 * Xpell3d
 * @description Universal User Interface (UI) Engine for Javascript supporting devices & browsers
 * Wrapper for THREE.JS engine
 
*  change-log:
 *  - events
 */
import XModule from "../XModule";
import X3DObject from "./X3DObject";
declare const X3DEngineStatus: {
    New: number;
    Ready: number;
    Running: number;
    Stopped: number;
};
export declare class X3DModule extends XModule {
    world: any;
    x3dObjects: {};
    status: number;
    constructor();
    loadWorld(x3dWorldData: any, autoRun?: boolean): Promise<void>;
    create(data: any): any;
    add(x3dObject: any): void;
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
    set_camera_path(data: any): void;
    set_camera_path_point(data: any): void;
    onFrame(frameNumber: any): Promise<void>;
}
declare let X3D: X3DModule;
export default X3D;
export { X3D, X3DEngineStatus, X3DObject };
