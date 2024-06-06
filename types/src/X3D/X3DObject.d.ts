import { XObject, XObjectData, XEventListenerOptions } from "../Core/Xpell";
import * as THREE from 'three';
import * as CANNON from 'cannon-es';
export type XVector3Data = {
    x: number;
    y: number;
    z: number;
};
export declare class XVector3 {
    _x: number;
    _y: number;
    _z: number;
    constructor(data?: XVector3Data);
    fromThreeVector3(tv3: THREE.Vector3): void;
    fromThreeEuler(euler: THREE.Euler): void;
    fromXData(data: XVector3Data): void;
    toThreeVector3(): THREE.Vector3;
    toThreeEuler(): THREE.Euler;
    toXData(): XVector3Data;
    toString(): string;
}
export type X3DListener = (x3dObject: X3DObject, event?: any) => void;
/**
 * @interface IX3DObjectData
 */
export interface IX3DObjectData extends XObjectData {
    [key: string]: any;
    _cannon_shape?: CANNON.Shape | undefined;
    _enable_physics?: boolean;
    _mass?: number;
    _position?: XVector3Data;
    _rotation?: XVector3Data;
    _scale?: XVector3Data;
    _visible?: boolean;
    _fade_duration?: number;
    _three_class?: any;
    _threes_class_args?: Array<any>;
    _disable_frame_3d_state?: boolean;
    _3d_set_once?: boolean;
    _positional_audio_source?: string;
    _load_animations?: boolean;
    _auto_play_animation?: boolean;
    _model_url?: string;
    _on_load?: X3DListener;
    _on_click?: X3DListener;
}
export declare class X3DObject extends XObject {
    #private;
    _id: string;
    _type: string;
    _name: string;
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
    _visible: boolean;
    _model_url: string;
    _positional_audio_source: string;
    _3d_set_once: boolean;
    _fade_duration: number;
    _disable_frame_3d_state: boolean;
    _load_animations: boolean;
    _auto_play_animation: boolean;
    _on_load?: X3DListener | undefined;
    _on_click?: X3DListener | undefined;
    /**
     * protected fields should not be override by XData object
     */
    protected _animation_clips: {
        [name: string]: THREE.AnimationAction;
    };
    protected _clock: THREE.Clock;
    protected _fraction: number;
    protected _animation_mixer: THREE.AnimationMixer | null;
    protected _current_action: string | null;
    protected _positional_audio: THREE.PositionalAudio | undefined | null;
    protected _xem_options: XEventListenerOptions;
    protected _log_rules: {
        _import_animation: boolean;
        _play_animation: boolean;
        _load_model: boolean;
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
    /**
     * This method parses the X3DObject 3D data and sets the X3DObject properties
     * @param data
     */
    parse3d(data: IX3DObjectData): void;
    /**
     * Sets the X3DObject position
     * @param positionObject the new position X3DObject in the form of {x:number,y:number,z:number}
     * @example setPosition({x:0,y:0,z:0})
     * @comment effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)
     */
    setPosition(positionObject: {
        x: number;
        y: number;
        z: number;
    }): void;
    /**
     * Sets the X3DObject position from a THREE.Vector3 object
     * @param newPosition the new position X3DObject in the form of THREE.Vector3
     */
    setPositionFromVector3(newPosition: THREE.Vector3): void;
    /**
     * Sets the X3DObject rotation
     * @param rotationObject - The new rotation X3DObject in the form of {x:number,y:number,z:number,order?:string}
     * @example setRotation({x:0,y:0,z:0,order:"XYZ"})
     * @comment effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)
     */
    setRotation(rotationObject: {
        x: number;
        y: number;
        z: number;
        order?: string;
    }): void;
    /**
     * Sets the X3DObject rotation from a THREE.Euler object
     * @param newRotation  The new rotation X3DObject in the form of THREE.Euler
     */
    setRotationFromEuler(newRotation: THREE.Euler): void;
    /**
     * Sets the X3DObject rotation from a THREE.Quaternion object
     * @param newQuaternion The new rotation X3DObject in the form of THREE.Quaternion
     */
    setRotationFromQuaternion(newQuaternion: THREE.Quaternion): void;
    /**
     * Sets the X3DObject scale
     * @param newScale The new scale X3DObject in the form of {x:number,y:number,z:number}
     * @example setScale({x:1,y:1,z:1})
     * @comment effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)
     */
    setScale(newScale: {
        x: number;
        y: number;
        z: number;
    }): void;
    /**
     * Sets the X3DObject scale from a THREE.Vector3 object
     * @param newScale The new scale X3DObject in the form of THREE.Vector3
     */
    setScaleFromVector3(newScale: THREE.Vector3): void;
    /**
     * This method sets the 3D State of the object (position, rotation & scale).
     */
    set3DState(): void;
    get canon(): CANNON.Body;
    get three(): THREE.Object3D<THREE.Event> | Promise<THREE.Object3D<THREE.Event>>;
    /**
     * This method gets the Three object of the X3DObject
     */
    getThreeObject(): THREE.Object3D | Promise<THREE.Object3D>;
    /**
     * This method returns the Canon physic's object of the X3DObject
     * @returns CANNON.Body
     * @comment if the X3DObject physics should be enabled the
     *          _enable_physics attribute should be set to true
     *          and the _enable_physics attribute for the main engine should be set to true
     */
    getCannonObject(): CANNON.Body;
    /**
     * This method creates Positional Audio from a source file and attach it to the 3D object
     * @param source - the source file path (mp3, wav, ogg...)
     * @param data - optional data object that can contain "autoplay" and "loop" boolean values
     * @returns
     */
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
    append(x3dObject: any | IX3DObjectData): Promise<void>;
    /**
     * Show the X3DObject (if it was hidden)
     */
    show(): void;
    /**
     * Hide the X3DObject
     */
    hide(): void;
    /**
     * Toggle the X3DObject visibility
     */
    toggle(): void;
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
     * @deprecated
     */
    loadThreeObjectFromGLTF(modelUrl: string): Promise<THREE.Object3D>;
    /**
     * Loads a 3d model from a GLTF/GLB file into the X3DObject and updates the Three object
     * @param modelUrl
     */
    loadModel(modelUrl?: string): Promise<void>;
    /**
     * This method is called after the 3D model is loaded
     * if override this method, call super.onLoad() to activate the default onLoad method
     */
    onLoad(): Promise<void>;
    onMount(): Promise<void>;
    /**
     * This method is called when the X3DObject is clicked
     * if override this method, call super.onClick() to activate the default onClick method
     */
    onClick(event?: any): Promise<void>;
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
    playAllAnimations(): void;
    playAnimation(clipName: string, loop?: THREE.AnimationActionLoopStyles, repetitions?: number): void;
    stopAnimation(): void;
}
export default X3DObject;
