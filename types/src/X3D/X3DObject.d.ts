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
    xNanoCommands: {
        move: (ns_cmd: any) => void;
        position: (ns_cmd: any) => void;
        scale: (ns_cmd: any) => void;
        rotation: (ns_cmd: any) => void;
        spin: (ns_cmd: any) => void;
        "stop-spin": (ns_cmd: any) => void;
        log: (ns_cmd: any) => void;
        rotate: (ns_cmd: any) => void;
        "rotate-toward": (ns_cmd: any) => void;
        play: (ns_cmd: any) => void;
        "follow-joystick": (ns_cmd: any) => void;
        "follow-keypoint": (ns_cmd: any) => void;
        "follow-path": (ns_cmd: any) => void;
        hover: (ns_cmd: any) => void;
    };
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
    destructor(): Promise<void>;
    parse(data: any, ignore?: {
        _children: string;
        _position: string;
        _rotation: string;
    }): void;
    setPosition(positionObject: {
        x: number;
        y: number;
        z: number;
    }): void;
    setRotation(rotationObject: {
        x: number;
        y: number;
        z: number;
        w?: string;
    }): void;
    /**
     * This method sets the 3D State of the object (position, rotation & scale).
     */
    set3DState(): void;
    load(): void;
    importAnimations(threeObj: THREE.Object3D): Promise<void>;
    loadAnimations(): Promise<void>;
    /**
     * @override
     */
    getThreeObject(): THREE.Object3D<THREE.Event>;
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
    /**
    * this method triggered after the THREE 3d object has been created
    * override to implement
    */
    onCreate(): Promise<void>;
    /**
     * execute spell command in the local 3d object
     * @param {JSON} spell command (json format)
     */
    execute(jcmd: any): Promise<void>;
    append(x3dObject: any): void;
    show(): void;
    hide(): void;
    playAnimation(clipName: string): void;
    stopAnimation(): void;
}
export default X3DObject;
