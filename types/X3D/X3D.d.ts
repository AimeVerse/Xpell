/**
 * Xpell3d
 * @description Real-time User Interface (UI) Engine for Javascript supporting devices & browsers
 * Wrapper for THREE.JS engine
 
*  change-log:
 *  - events
 */
import { XModule } from '../Core/Xpell';
import X3DObject, { IX3DObjectData } from "./X3DObject";
import X3DWorld from './X3DWorld';
declare const X3DEngineStatus: {
    New: number;
    Ready: number;
    Running: number;
    Stopped: number;
};
import { X3DApp } from './X3DApp';
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
     * This method creates a player element and append it to the DOM
     * @param playerId - optional id of the player element
     * @param parentElementId - optional id of the element to append the player to, if not provided the player will be appended to the body
     * @returns HTMLDivElement
     */
    createPlayer(playerId?: string, cssClass?: string, parentElementId?: string): HTMLDivElement;
    /**
     * Loads XWorld from world data object
     * @param x3dWorldData World Data object
     * @param autoRun - start world running automatically
     * @deprecated - use loadApp function instead
     */
    loadWorld(x3dWorldData: X3DApp, autoRun?: boolean): Promise<void>;
    loadDefaultApp(orbitControls?: boolean, bgColor?: string, enablePhysics?: boolean): Promise<X3DApp>;
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
     *
     * @param x3dObject X3DObject | IX3DObjectData - The X3DObject to add
     * @returns The added X3DObject (after creation)
     */
    add(x3dObject: X3DObject | IX3DObjectData): Promise<X3DObject>;
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
//# sourceMappingURL=X3D.d.ts.map