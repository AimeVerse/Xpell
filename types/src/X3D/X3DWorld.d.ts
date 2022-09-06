import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
/**
 * Spell3dWorld
 */
export declare const XWorldStatus: {
    New: number;
    Running: number;
    Paused: number;
};
export declare class CannonDebugRenderer {
    scene: THREE.Scene;
    world: CANNON.World;
    private _meshes;
    private _material;
    private _particleMaterial;
    private _sphereGeometry;
    private _boxGeometry;
    private _cylinderGeometry;
    private _planeGeometry;
    private _particleGeometry;
    private tmpVec0;
    private tmpVec1;
    private tmpVec2;
    private tmpQuat0;
    constructor(scene: THREE.Scene, world: CANNON.World, options?: object);
    update(): void;
    private _updateMesh;
    private _typeMatch;
    private _createMesh;
    private _scaleMesh;
}
export declare class X3DWorld {
    status: number;
    worldRowData: any;
    scene: THREE.Scene;
    clock: THREE.Clock;
    renderer: THREE.WebGLRenderer;
    frameNumber: number;
    raycaster: THREE.Raycaster;
    widgetControls: TransformControls;
    lights: {};
    x3dObjects: {};
    defaultCamera: any;
    controls: OrbitControls | PointerLockControls | FirstPersonControls;
    frameProcessTime: number;
    audioListener: THREE.AudioListener;
    enablePhysics: boolean;
    cWorld: CANNON.World;
    logger: {
        addObject: boolean;
        removeObject: boolean;
    };
    private _cannonDebugRenderer;
    constructor(xworld: any);
    run(): Promise<void>;
    setAudioListener(): void;
    onWindowResize(): void;
    addX3DObject(x3dObject: any): Promise<any>;
    removeX3DObject(objectId: string): Promise<void>;
    create_transform_controls(obj: any): void;
    onFrame(frameNumber: any): Promise<void>;
    /**
     * Adds background to the scene
     * @param {THREE.Texture}environmentMap scene background
     */
    addBackground(environmentMap: THREE.Texture): void;
    render(): void;
}
export default X3DWorld;
