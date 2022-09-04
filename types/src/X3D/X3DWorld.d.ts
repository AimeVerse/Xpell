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
    constructor(xworld: any);
    run(): Promise<void>;
    onWindowResize(): void;
    addX3DObject(x3dObject: any): Promise<any>;
    create_transform_controls(obj: any): void;
    onFrame(frame_number: any): void;
    /**
     * Adds background to the scene
     * @param {THREE.Texture}environmentMap scene background
     */
    addBackground(environmentMap: THREE.Texture): void;
    render(): void;
}
export default X3DWorld;
