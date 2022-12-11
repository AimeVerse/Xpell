import * as THREE from 'three';
import * as CANNON from 'cannon-es';
import { XObject, IXObjectData } from "../XObject";
/**
 * @interface IX3DObjectData
 */
export interface IX3DObjectData extends IXObjectData {
    _three_obj: THREE.Object3D;
}
export declare class X3DObject extends XObject {
    _three_class: any;
    _three_obj: THREE.Object3D | null;
    _cannon_obj: CANNON.Body | undefined;
    _cannon_shape: CANNON.Shape | undefined;
    _mass: number;
    _enable_physics: boolean;
    private _position;
    _rotation: THREE.Euler;
    private _scale;
    private _visible;
    private _animation;
    private _animation_clips;
    private _fade_duration;
    private _clock;
    _fraction: number;
    _threes_class_args: Array<any>;
    _animation_mixer: THREE.AnimationMixer;
    private _frame_number;
    _on_frame: any;
    private _cache_cmd_txt;
    private _cache_jcmd;
    private _disable_frame_3d_state;
    private _3d_set_once;
    private _current_action;
    private _positional_audio;
    private _positional_audio_source;
    static getXData(threeObj: THREE.Object3D, defaults: any): {
        _id: string;
        _type: string;
        _children: any[];
        _three_obj: THREE.Object3D<THREE.Event>;
        name: string;
        _position: THREE.Vector3;
        _rotation: THREE.Euler;
        _scale: THREE.Vector3;
        _enable_physics: boolean;
    };
    static getFromThreeObject(three_obj: any, defaults: any): X3DObject;
    constructor(data: IX3DObjectData, defaults?: any);
    /**
     * Dispose all object memory (destructor)
     */
    dispose(): Promise<void>;
    parse(data: any, ignore?: {
        _children: string;
        _position: string;
        _rotation: string;
        _scale: string;
    }): void;
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
        w?: string;
    }): void;
    setRotationFromEuler(newRotation: THREE.Euler): void;
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
    createPositionalAudio(source: any, data?: any): Promise<THREE.PositionalAudio>;
    setPositionalAudioSource(source?: string, data?: any): Promise<void>;
    playAudio(loop?: any): void;
    pauseAudio(): void;
    /**
     * onFrame function for x3d-object
     * - parse textual command to SpellCommand and cache
     * - set 3d-state (position, rotation & scale) if Spell in control
     * - update animation mixer if exists
     * @param {number} frameNumber
     */
    onFrame(frameNumber: any): Promise<void>;
    append(x3dObject: any): void;
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
    playRandomStateAnimation(state: string): void;
    playAnimation(clipName: string, loop?: THREE.AnimationActionLoopStyles): void;
    stopAnimation(): void;
}
export default X3DObject;
