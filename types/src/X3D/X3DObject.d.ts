import { XObject, IXObjectData } from "xpell-core";
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
export type XVector3 = {
    x: number;
    y: number;
    z: number;
};
/**
 * @interface IX3DObjectData
 */
export interface IX3DObjectData extends IXObjectData {
    _cannon_shape?: CANNON.Shape | undefined;
    _enable_physics?: boolean;
    _mass?: number;
    _position?: XVector3;
    _rotation?: XVector3;
    _scale?: XVector3;
    _visible?: boolean;
    _fade_duration?: number;
    _three_class?: any;
    _threes_class_args?: Array<any>;
    _on_frame?: string | Function | undefined;
    _disable_frame_3d_state?: boolean;
    _3d_set_once?: boolean;
    _positional_audio_source?: string;
}
export declare class X3DObject extends XObject {
    _three_class: any;
    _threes_class_args: Array<any>;
    _three_obj: THREE.Object3D | null;
    _cannon_obj: CANNON.Body | undefined | null;
    _cannon_shape: CANNON.Shape | undefined | null;
    _mass: number;
    _enable_physics: boolean;
    _position: THREE.Vector3;
    _rotation: THREE.Euler;
    _scale: THREE.Vector3;
    _on_frame: string | Function | undefined;
    protected _visible: boolean;
    protected _animation_clips: {
        [name: string]: THREE.AnimationAction;
    };
    protected _fade_duration: number;
    protected _clock: THREE.Clock;
    protected _fraction: number;
    protected _animation_mixer: THREE.AnimationMixer | null;
    protected _cache_cmd_txt: string | null;
    protected _cache_jcmd: any;
    protected _disable_frame_3d_state: boolean;
    protected _3d_set_once: boolean;
    protected _current_action: string | null;
    protected _positional_audio: THREE.PositionalAudio | undefined | null;
    protected _positional_audio_source: string;
    protected _log_rules: {
        _import_animation: boolean;
        _play_animation: boolean;
    };
    static getXData(threeObj: THREE.Object3D, defaults: IX3DObjectData): {
        _id: string;
        _type: string;
        _children: any[];
        _three_obj: THREE.Object3D<THREE.Event>;
        _name: string;
        _position: THREE.Vector3;
        _rotation: THREE.Euler;
        _scale: THREE.Vector3;
        _enable_physics: boolean;
    };
    static getFromThreeObject(threeObj: THREE.Object3D, defaults: IX3DObjectData): X3DObject;
    constructor(data: IX3DObjectData, defaults?: any);
    /**
     * Dispose all object memory (destructor)
     */
    dispose(): Promise<void>;
    parse3d(data: IX3DObjectData): void;
    setPosition(positionObject: {
        x: number;
        y: number;
        z: number;
    }): void;
    setPositionFromVector3(newPosition: THREE.Vector3): void;
    setRotation(rotationObject: {
        x: number;
        y: number;
        z: number;
        order?: string;
    }): void;
    setRotationFromEuler(newRotation: THREE.Euler): void;
    setRotationFromQuaternion(newQuaternion: THREE.Quaternion): void;
    setScale(newScale: {
        x: number;
        y: number;
        z: number;
    }): void;
    setScaleFromVector3(newScale: THREE.Vector3): void;
    /**
     * This method sets the 3D State of the object (position, rotation & scale).
     */
    set3DState(): void;
    load(): void;
    /**
     * @override
     */
    getThreeObject(): THREE.Object3D;
    getCannonObject(): CANNON.Body;
    createPositionalAudio(source: string, data?: IX3DObjectData): Promise<THREE.PositionalAudio>;
    setPositionalAudioSource(source?: string, data?: IX3DObjectData): Promise<void>;
    /**
     * clears the positional audio from the object and the Three object
     */
    clearPositionalAudio(): void;
    playAudio(loop?: boolean): void;
    pauseAudio(): void;
    /**
     * onFrame function for x3d-object
     * - parse textual command to SpellCommand and cache
     * - set 3d-state (position, rotation & scale) if Spell in control
     * - update animation mixer if exists
     * @param {number} frameNumber
     */
    onFrame(frameNumber: number): Promise<void>;
    /**
     * Append X3DObject as a child object
     * @param x3dObject
     */
    append(x3dObject: X3DObject | IX3DObjectData): void;
    show(): void;
    hide(): void;
    /**
     * Import animation from a THREE Object3D to the current object
     * @param threeObj ThreeJs Object3D to import the animations from
     * @param newName optional - change the animation name to a new name
     *                           (if there are more than one animation they
     *                            will be added with index: Idle, Idle-2, Idle -3 ...)
     */
    importAnimations(threeObj: THREE.Object3D, newName?: string): Promise<void>;
    /**
     * Loads a new 3D model to the X3DObject from a GLTF/GLB file
     * @param modelUrl - url of the model file
     * @returns Promise<THREE.Object3D>
     */
    loadThreeObjectFromGLTF(modelUrl: string): Promise<THREE.Object3D>;
    loadModel(modelUrl: string): Promise<void>;
    importAnimationFromGLTF(modelUrl: string, newName: string | undefined): Promise<void>;
    /**
     * Import animations from an FBX file (compatible with maximo.com animations)
     * @param url - url of the FBX file
     * @since 1.04
     */
    importAnimationFromFBXFile(url: string, newName?: string): Promise<void>;
    /**
     * loads animation on start or after create object
     */
    loadAnimations(): Promise<void>;
    stopAllAnimations(): void;
    playAnimation(clipName: string, loop?: THREE.AnimationActionLoopStyles, repetitions?: number): void;
    stopAnimation(): void;
}
export default X3DObject;
