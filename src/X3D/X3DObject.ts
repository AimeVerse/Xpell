import { XUtils as _XU } from "../XUtils"
import XParser from "../XParser"
import * as _XC from "../XConst"
import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { threeToCannon, ShapeType } from 'three-to-cannon';
import { XObject, IXObjectData } from "../XObject"
import xNanoCommands from './XNanoCommands'
import X3D from "./X3D"
import { XLogger as _xlog } from '../XLogger'

/**
 * Extended imports
 */
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';


const reservedWords = { _children: "child objects", _position: "position", _rotation: "rotation", _scale: "scale" }
const xpell_object_html_fields_mapping = {
    "_id": "id",
};



/**
 * @interface IX3DObjectData
 */
export interface IX3DObjectData extends IXObjectData {
    _three_obj: THREE.Object3D
}

export class X3DObject extends XObject {
    _three_class: any
    _three_obj: THREE.Object3D | null
    _cannon_obj: CANNON.Body | undefined
    _cannon_shape: CANNON.Shape | undefined
    _mass: number
    _enable_physics: boolean
    private _position: THREE.Vector3
    _rotation: THREE.Euler
    private _scale: THREE.Vector3
    private _visible: boolean
    private _animation: boolean
    private _animation_clips: {}
    private _fade_duration: number
    private _clock: THREE.Clock
    _fraction: number
    _threes_class_args: Array<any>
    _animation_mixer: THREE.AnimationMixer
    private _frame_number: number
    _on_frame: any
    private _cache_cmd_txt: string | null
    private _cache_jcmd: any
    private _disable_frame_3d_state: boolean
    private _3d_set_once: boolean
    private _current_action: string
    private _positional_audio: THREE.PositionalAudio | undefined
    private _positional_audio_source: string
    xNanoCommands: { move: (ns_cmd: any) => void; position: (ns_cmd: any) => void; scale: (ns_cmd: any) => void; rotation: (ns_cmd: any) => void; spin: (ns_cmd: any) => void; "stop-spin": (ns_cmd: any) => void; log: (ns_cmd: any) => void; rotate: (ns_cmd: any) => void; "rotate-toward": (ns_cmd: any) => void; play: (ns_cmd: any) => void; "follow-joystick": (ns_cmd: any) => void; "follow-keypoint": (ns_cmd: any) => void; "follow-path": (ns_cmd: any) => void; hover: (ns_cmd: any) => void }

    static getXData(threeObj: THREE.Object3D, defaults) {
        let _xdata = {
            _id: threeObj.name,
            _type: "x3d-object",
            _children: [],
            _three_obj: threeObj,
            name: threeObj.name,
            _position: threeObj.position,
            _rotation: threeObj.rotation,
            _scale: threeObj.scale,
            _enable_physics: false
        }
        if (defaults) {
            if (defaults.name) { threeObj.name = defaults.name }
            _XU.mergeDefaultsWithData(<IXObjectData>_xdata, defaults, true)
        }
        return _xdata
    }

    static getFromThreeObject(three_obj, defaults) {
        let _xdata: any = X3DObject.getXData(three_obj, defaults)
        return new X3DObject(_xdata)
    }



    constructor(data: IX3DObjectData, defaults?: any) {
        super(data, defaults)

        this._children = [];
        this._animation = true
        this._animation_clips = {}
        this._fade_duration = 0.25
        this._ignore = reservedWords
        this._clock = new THREE.Clock();
        this._fraction = 0
        //this._threes_class_args = []

        if (this._positional_audio_source) {
            this.setPositionalAudioSource(this._positional_audio_source)
        }

        this.xNanoCommands = xNanoCommands

    }



    /**
     * Dispose all object memory (destructor)
     */
    async dispose() {
        this._three_class = null
        this._three_obj = null
        this._cannon_obj = null
    }


    parse(data, ignore = reservedWords) {

        ignore = reservedWords
        //x,y,z



        if (data._position) {
            this._position = new THREE.Vector3(data._position.x, data._position.y, data._position.z)
            this.setPosition(data._position)
        } else {
            this._position = new THREE.Vector3(0, 0, 0)
        }

        if (data._scale) {
            this._scale = new THREE.Vector3(data._scale.x, data._scale.y, data._scale.z)
            this.setScale(data._scale)
        } else {
            this._scale = new THREE.Vector3(1, 1, 1) //x,y,z
        }

        if (data._rotation) {
            this._rotation = new THREE.Euler(data._rotation.x, data._rotation.y, data._rotation.z, data._rotation?.w)
            this.setRotation(data._rotation)
        } else {
            this._rotation = new THREE.Euler(0, 0, 0) //x,y,z
        }

        let cdata = Object.keys(data);


        cdata.forEach(field => {
            if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
                this[field] = data[field];
            }
        });
        if (!this.name) {
            this.name = this._id
        }


    }

    setPosition(positionObject: { x: number, y: number, z: number }) {
        this._position.set(positionObject.x, positionObject.y, positionObject.z) //incase Xpell engine controls the position
        this._cannon_obj?.position.set(this._position.x, this._position.y, this._position.z)
        // const srcObj = (this._cannon_obj) ? this._cannon_obj : this._three_obj
        // srcObj?.position.set(positionObject.x, positionObject.y, positionObject.z) //in case that other engine (like physics) controls the position
    }

    setPositionFromVector3(newPosition: THREE.Vector3) {
        this.setPosition({ x: newPosition.x, y: newPosition.y, z: newPosition.z })
    }

    setRotation(rotationObject: { x: number, y: number, z: number, w?: string }) {
        this._rotation.set(rotationObject.x, rotationObject.y, rotationObject.z, rotationObject.w) //incase Xpell engine controls the position
        this?._cannon_obj?.quaternion.setFromEuler(this._rotation.x, this._rotation.y, this._rotation.z)


    }

    setRotationFromEuler(newRotation: THREE.Euler) {
        this.setRotation({ x: newRotation.x, y: newRotation.y, z: newRotation.z, w: newRotation.order })
    }


    setScale(newScale: { x: number, y: number, z: number }) {
        this._scale.set(newScale.x, newScale.y, newScale.z)
        if (this._three_obj) {

        }
        if (this._cannon_obj) {

            // this._cannon_shape
            // this._cannon_obj.updateBoundingRadius()
        }
    }

    setScaleFromVector3(newScale: THREE.Vector3) {
        this.setScale({ x: newScale.x, y: newScale.y, z: newScale.z })
    }

    /**
     * This method sets the 3D State of the object (position, rotation & scale).
     */
    set3DState() {
        if (this._three_obj) {
            this._three_obj.scale.copy(this._scale) //in case that other engine (like physics) controls the position
            this._three_obj?.rotation.copy(this._rotation)
            this._three_obj.position.copy(this._position)
            this._three_obj.scale.copy(this._scale)
        }

        // if (this._cannon_obj) {
        //     this?._cannon_obj?.quaternion.setFromEuler(this._rotation.x, this._rotation.y, this._rotation.z)
        //     this._cannon_obj.position.set(this._position.x,this._position.y,this._position.z)
        //     //this._three_obj.scale.set(newScale.x, newScale.y, newScale.z) //in case that other engine (like physics) controls the position
        // } 


    }



    load() { }


    
    /**
     * @override
     */
    getThreeObject() {
        if (!this._three_obj && this._three_class) {
            this._three_obj = new this._three_class(...this._threes_class_args)
            if (this._three_obj) {
                this._three_obj.name = <string>this.name
                this._clock.start()

                
                const keys = Object.keys(this)

                const s2t_props = [""]


                keys.forEach(key => {
                    if (!key.startsWith("_")) {
                        if (key == "color") {
                            this._three_obj[key] = new THREE.Color(<string>this[key]);
                        } else {
                            this._three_obj[key] = this[key]
                        }

                    }
                })

                if (this._positional_audio) {
                    this._three_obj.add(this._positional_audio)
                }
            }

        }
        return this._three_obj
    }

    getCannonObject(): CANNON.Body {
        if (!this._cannon_obj && this._enable_physics) {
            let offset = new CANNON.Vec3(0, 0, 0)
            if (!this._cannon_shape) {
                //using BoundingBox because CovexHull is FPS consuming and Mesh (Cannon.Trimesh) does not support collisions
                let shape = ShapeType.BOX
                if (this._collider) {
                    const collisionType = (<string>this._collider).toLowerCase()
                    if (collisionType === "sphere") { shape = ShapeType.SPHERE }
                    else if (collisionType === "box") { shape = ShapeType.BOX }
                    else if (collisionType === "cylinder") { shape = ShapeType.CYLINDER }
                    else if (collisionType === "hull") { shape = ShapeType.HULL }
                    else if (collisionType === "mesh") { shape = ShapeType.MESH }

                }
                const ttcResult = threeToCannon(this._three_obj, { type: shape })
                this._cannon_shape = ttcResult.shape
                this._cannon_shape
                offset = ttcResult.offset
            }

            const rigidBody = new CANNON.Body({ mass: this._mass, material: new CANNON.Material('physics') })
            rigidBody.addShape(this._cannon_shape, offset)
            rigidBody.position.set(this._position.x, this._position.y, this._position.z)
            rigidBody.quaternion.setFromEuler(this._rotation.x, this._rotation.y, this._rotation.z)
            rigidBody.position
            rigidBody.linearDamping = 0.9
            this._cannon_obj = rigidBody
        }
        return this._cannon_obj
    }


    async createPositionalAudio(source, data?) {
        const sound = new THREE.PositionalAudio(X3D.world.audioListener);
        // load a sound and set it as the PositionalAudio object's buffer
        const audioLoader = new THREE.AudioLoader();
        const buffer = await audioLoader.loadAsync(source)
        sound.setBuffer(buffer);
        sound.setRefDistance(10);
        sound.setVolume(1);
        sound.autoplay = false
        if (data) {
            if (data["autoplay"]) sound.play()
            if (data["loop"]) sound.setLoop(true)
        }
        return sound
    }

    async setPositionalAudioSource(source?: string, data?) {
        const src = (source) ? source : this._positional_audio_source
        this._positional_audio = await this.createPositionalAudio(src, data)
        if (this._three_obj) this._three_obj.add(this._positional_audio)
        _xlog.log("Sound " + source + " loaded")

    }

    playAudio(loop?) {
        const snd = <THREE.PositionalAudio>this._positional_audio
        if (snd) {
            if (loop) snd.setLoop(true)
            console.log("play");

            snd.play()
        }
    }

    pauseAudio() {
        const snd = <THREE.PositionalAudio>this._positional_audio
        if (snd) {
            snd.pause()
        }
    }



    /**
     * onFrame function for x3d-object
     * - parse textual command to SpellCommand and cache
     * - set 3d-state (position, rotation & scale) if Spell in control
     * - update animation mixer if exists
     * @param {number} frameNumber 
     */
    async onFrame(frameNumber) {
        this._frame_number = frameNumber
        if (this._on_frame) { //search for spell command for execute onFrame
            const cmd_txt = this.name + " " + this._on_frame
            let jcmd = (this._cache_cmd_txt && this._cache_cmd_txt == cmd_txt) ? this._cache_jcmd : XParser.parse(cmd_txt)

            //cache command to prevent parsing in every frame
            this._cache_cmd_txt = cmd_txt
            this._cache_jcmd = jcmd

            this.execute(jcmd)


        }
        //check if _disable_frame_3d_state is in the Spell object
        // _disable_frame_3d_state disables onFrame positioning by Spell (for external controllers like Orbit Controls)
        if (!this._disable_frame_3d_state) {
            this.set3DState()
        } else {
            //set 3d state once for initial position/rotation
            // to override this set "_3d_set_once":false on Spell object input data
            if (this._3d_set_once) {

                this.set3DState()

                this._3d_set_once = false
            }
        }




        if (this._animation_mixer && this._current_action) {
            const diff = this._clock.getDelta()
            this._animation_mixer.update(diff)
        }

        if (this._cannon_obj && this._enable_physics) {
            const cp = this._cannon_obj.position
            const cq = this._cannon_obj.quaternion
            // console.log(this._position);

            this.setPosition({ x: cp.x, y: cp.y, z: cp.z })
            this._three_obj.quaternion.copy(<any>cq)
            // console.log(this._cannon_obj.position)
        }
    }


    /**
    * this method triggered after the THREE 3d object has been created
    * override to implement
    */
    async onCreate() {
    }


    /**
     * execute spell command in the local 3d object
     * @param {JSON} spell command (json format)
     */
    async execute(jcmd) {

        //limited xpell 

        if (this.xNanoCommands[jcmd.op]) {
            jcmd.s3d_object = this
            this.xNanoCommands[jcmd.op](jcmd)
        } else throw this.name + " has no op name " + jcmd.op
    }

    append(x3dObject) {
        this._children.push(x3dObject);
    }


    show() { this._visible = true }

    hide() { this._visible = false }

    /**
     * Import animation from a THREE Object3D to the current object
     * @param threeObj ThreeJs Object3D to import the animations from
     * @param newName optional - change the animation name to a new name
     */
     async importAnimations(threeObj: THREE.Object3D,newName?:string) {
        if (!this._animation_mixer) {
            this._animation_mixer = new THREE.AnimationMixer(this._three_obj)
        }
        threeObj.animations.forEach((anim) => {
            //console.log(anim)
            const a2 = anim.clone()
            if(newName) {
                a2.name = newName
            }
            this._three_obj.animations.push(a2)
            a2.optimize()
            this._animation_clips[a2.name] = this._animation_mixer.clipAction(a2)
            _xlog.log("Animation " + a2.name + " loaded on object " + this._id);
        })
    }

    /**
     * Import animations from an FBX file (compatible with maximo.com animations)
     * @param url - url of the FBX file
     * @since 1.04
     */
    async importAnimationFromFBXFile(url: string,newName?:string) {
        const getFBXAnimation = (url: string): Promise<THREE.Object3D> => {
            return new Promise(function (resolve, reject) {
                const _onload = (obj: THREE.Object3D) => {
                    resolve(obj)
                    //onLoadCallBack()
                }

                const _onprogress = (data) => { }

                const _onerror = (error) => {
                    _xlog.error(error);
                    this.loading = false
                    reject(error)
                }

                const loader = new FBXLoader()
                loader.load(url, _onload, _onprogress, _onerror);

            })
        }



        const obj = await getFBXAnimation(url)
        if (obj && obj instanceof THREE.Object3D) {
            await this.importAnimations(obj,newName)
        }

    }


    /**
     * loads animation on start or after create object
     */
    async loadAnimations() {

        if (this._three_obj && this._three_obj.animations.length > 0) {
            const anim = this._three_obj.animations
            this._animation_mixer = new THREE.AnimationMixer(this._three_obj)
            anim.forEach(__anim => {
                this._animation_clips[__anim.name] = this._animation_mixer.clipAction(__anim)
                _xlog.log("Animation " + __anim.name + " loaded on object " + this._id);
            })
        }

    }

    stopAllAnimations(){
        this._animation_mixer.stopAllAction()
    }

    playAnimation(clipName: string,loop?:THREE.AnimationActionLoopStyles) {
        
        if (clipName) {
            const anim = this._animation_clips[clipName]
            if(loop)
                anim.setLoop(loop)
            
            // anim.blendMode = THREE.AdditiveAnimationBlendMode
            if (anim) {
                // _xlog.log("playing animation " + clipName)
                if (this._current_action) {
                    
                    // this._animation_clips[<any>this._current_action].fadeOut(this._fade_duration)
                    // anim.play().fadeIn(this._fade_duration);
                    this._animation_mixer.stopAllAction()
                } else {
                }
                anim.play()
                //ns_cmd.s3d_object._disable_frame_3d_state = true
                this._current_action = clipName
                
            }
        }
    }

    stopAnimation() {
        if (this._current_action) {
            this._animation_clips[<any>this._current_action].fadeOut(this._fade_duration)
            this._current_action = null
        }
    }
}

export default X3DObject