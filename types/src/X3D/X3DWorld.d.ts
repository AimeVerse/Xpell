import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js';
import { TransformControls } from 'three/examples/jsm/controls/TransformControls';
import { X3DApp, X3DObject } from "./X3D";
import { X3DSceneBackground, X3DSceneBackgroundHandler } from "./X3DWorldSceneBackground";
/**
 * Spell3dWorld
 */
export declare const XWorldStatus: {
    New: number;
    Running: number;
    Paused: number;
};
export declare class X3DWorld {
    status: number;
    worldRowData: X3DApp;
    scene: THREE.Scene;
    clock: THREE.Clock;
    renderer: THREE.WebGLRenderer;
    frameNumber: number;
    raycaster: THREE.Raycaster;
    transformControls: TransformControls;
    private transformControlX3dObject;
    private transformControlsListenerAdded;
    lights: {};
    x3dObjects: {
        [k: string]: X3DObject;
    };
    defaultCamera: any;
    controls: OrbitControls | PointerLockControls | FirstPersonControls;
    frameProcessTime: number;
    audioListener: THREE.AudioListener;
    enablePhysics: boolean;
    private _physics_world;
    _log_rules: {
        _add: boolean;
        _remove: boolean;
    };
    private _cannon_debug_renderer;
    private _bg_handlers;
    constructor(xworld: X3DApp);
    run(): Promise<void>;
    addBackgroundHandler(type: string, handler: X3DSceneBackgroundHandler): void;
    setSceneBackground(bg: X3DSceneBackground): Promise<void>;
    setAudioListener(): void;
    onWindowResize(): void;
    /**
     * Adds X3DObject to the world scene
     * @param {X3DObject}x3dObject - the X3DObject to add
     * @returns {X3DObject}X3DObject
     */
    addX3DObject(x3dObject: X3DObject): Promise<THREE.Object3D<THREE.Event>>;
    removeX3DObject(objectId: string): Promise<void>;
    removeTransformControls(): void;
    setTransformControls(x3dObject: X3DObject): void;
    onFrame(frameNumber: number): Promise<void>;
    /**
     * Adds background to the scene
     * @param {THREE.Texture}bgTexture scene background
     */
    addBackground(bgTexture: THREE.Texture): void;
    render(): void;
}
export default X3DWorld;
