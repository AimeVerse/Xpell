import { _xu, XParser, XObject, XObjectData, _xlog ,_xd, _x} from "xpell-core"
// import { XObject, IXObjectData } from "../XObject"
// import XParser from "../XParser"
// import * as _XC from "../XConst"
import * as THREE from 'three'
import * as CANNON from 'cannon-es'
import { threeToCannon, ShapeType } from 'three-to-cannon';
import _x3dobject_nano_commands from './X3DNanoCommands'
import X3D from "./X3D"
import { XEventListenerOptions, _xem } from "../XEM/XEventManager";
// import { XLogger as _xlog } from '../XLogger'

/**
 * Extended imports
 */
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader';
import { Object3D } from "three";
import {X3DLoader} from "./X3DLoader";


const reservedWords = { _children: "child objects", _position: "position", _rotation: "rotation", _scale: "scale" }
const xpell_object_html_fields_mapping = {
    "_id": "id",
};




export type XVector3Data = {
    x: number,
    y: number,
    z: number
}

export class XVector3 {
    _x: number = 0
    _y: number = 0
    _z: number = 0

    constructor(data?: XVector3Data) {
        if (data) {
            this.fromXData(data)
        }
    }

    fromThreeVector3(tv3: THREE.Vector3) {
        this._x = tv3.x
        this._y = tv3.y
        this._z = tv3.z
    }

    fromThreeEuler(euler: THREE.Euler) {
        this._x = euler.x
        this._y = euler.y
        this._z = euler.z
    }

    fromXData(data: XVector3Data) {
        this._x = data.x
        this._y = data.y
        this._z = data.z
    }

    toThreeVector3(): THREE.Vector3 {
        return new THREE.Vector3(this._x, this._y, this._z)
    }

    toThreeEuler(): THREE.Euler {
        return new THREE.Euler(this._x, this._y, this._z)
    }

    toXData(): XVector3Data {
        return { x: this._x, y: this._y, z: this._z }
    }
    toString() {
        return JSON.stringify(this.toXData())
    }
}


export type X3DListener = (x3dObject: X3DObject,event?:any) => void


/**
 * @interface IX3DObjectData
 */
export interface IX3DObjectData extends XObjectData {
    _cannon_shape?: CANNON.Shape | undefined,
    _enable_physics?: boolean
    _mass?: number,
    _position?: XVector3Data,
    _rotation?: XVector3Data,
    _scale?: XVector3Data,
    _visible?: boolean,
    _fade_duration?: number,
    _three_class?: any,
    _threes_class_args?: Array<any>,
    _disable_frame_3d_state?: boolean,
    _3d_set_once?: boolean,
    _positional_audio_source?: string,
    _load_animations?: boolean,
    _auto_play_animation?: boolean,
    _model_url?: string
    _on_load?: X3DListener
    _on_click?: X3DListener

}

export class X3DObject extends XObject {
    _three_class: any
    _threes_class_args!: Array<any>
    _three_obj!: THREE.Object3D | null
    _cannon_obj: CANNON.Body | undefined | null
    _cannon_shape: CANNON.Shape | undefined | null
    _mass!: number
    _enable_physics!: boolean
    _position!: THREE.Vector3
    _rotation!: THREE.Euler
    _scale!: THREE.Vector3
    _visible!: boolean
    _model_url!: string
    _positional_audio_source!: string
    _3d_set_once!: boolean
    _fade_duration!: number
    _disable_frame_3d_state!: boolean
    _load_animations: boolean = false
    _auto_play_animation: boolean = false
    _on_load?: X3DListener | undefined
    _on_click?: X3DListener | undefined
    /**
     * protected fields should not be override by XData object 
     */
    protected _animation_clips: { [name: string]: THREE.AnimationAction }
    protected _clock: THREE.Clock
    protected _fraction: number
    protected _animation_mixer!: THREE.AnimationMixer | null
    // protected _cache_cmd_txt!: string | undefined
    // protected _cache_jcmd: any
    protected _current_action!: string | null
    protected _positional_audio: THREE.PositionalAudio | undefined | null
    protected _xem_options:XEventListenerOptions = {_once:false,_support_html:true,_instance:_xem}

    protected _log_rules: {
        _import_animation: boolean,
        _play_animation: boolean,
        _load_model: boolean
    } = {
            _import_animation: false,
            _play_animation: false,
            _load_model: false
        }
    #_anim_loaded: boolean;



    static getXData(threeObj: THREE.Object3D, defaults: IX3DObjectData) {
        let _xdata = {
            _id: threeObj.name,
            _type: "x3d-object",
            _children: [],
            _three_obj: threeObj,
            _name: threeObj.name,
            _position: threeObj.position,
            _rotation: threeObj.rotation,
            _scale: threeObj.scale,
            _enable_physics: false
        }
        if (defaults) {
            if (defaults._name) { threeObj.name = defaults._name }
            _xu.mergeDefaultsWithData(<XObjectData>_xdata, defaults, true)
        }
        return _xdata
    }

    static getFromThreeObject(threeObj: THREE.Object3D, defaults: IX3DObjectData) {
        let _xdata: any = X3DObject.getXData(threeObj, defaults)
        return new X3DObject(_xdata)
    }



    constructor(data: IX3DObjectData, defaults?: any) {
        super(data, defaults, true)
        this.init(data,false)
        
        this.parse3d(data)

        this._animation = true
        this._animation_clips = {}
        // this._fade_duration = 0.25
        this._ignore = reservedWords
        this._clock = new THREE.Clock();
        this._fraction = 0
        this._loader = X3DLoader
        //this._threes_class_args = []

        if (this._positional_audio_source) {
            this.setPositionalAudioSource(this._positional_audio_source)
        }

        this.addNanoCommandPack(_x3dobject_nano_commands)

        
        this.addXporterDataIgnoreFields(["_clock", "_ignore", "_three_obj","_log_rules",
            "_three_class", "_threes_class_args", "_positional_audio", "_current_action",
            "_animation_clips", "_fraction", "_animation_mixer", "_cache_cmd_txt", "_cache_jcmd",
            "_on","_xem_options","_on_load","_on_click"
            ])
        const vectorHandler = (o:THREE.Vector3 | THREE.Euler) => {
            return {x:o.x,y:o.y,z:o.z}
        }

        this.addXporterInstanceXporter(THREE.Vector3,vectorHandler)
        this.addXporterInstanceXporter(THREE.Euler,vectorHandler)

// else if (tf instanceof THREE.Vector3 || tf instanceof THREE.Euler) {

    }



    /**
     * Dispose all object memory (destructor)
     */
    async dispose() {
        this._on_frame = undefined
        this._three_class = null
        this._three_obj = null
        this._cannon_obj = null
        this._positional_audio = null
        this._animation_mixer = null
        super.dispose()
    }


    /**
     * This method parses the X3DObject 3D data and sets the X3DObject properties
     * @param data 
     */
    parse3d(data: IX3DObjectData) {
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
            this._rotation = new THREE.Euler(data._rotation.x, data._rotation.y, data._rotation.z)
            this.setRotation(data._rotation)
        } else {
            this._rotation = new THREE.Euler(0, 0, 0) //x,y,z
        }

        if (!this._name) {
            this._name = this._id
        }

        if (!data._fade_duration) {
            this._fade_duration = 0.25
        }

        this.parse(data, reservedWords)

    }

    /**
     * Sets the X3DObject position
     * @param positionObject the new position X3DObject in the form of {x:number,y:number,z:number}
     * @example setPosition({x:0,y:0,z:0})
     * @comment effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)
     */
    setPosition(positionObject: { x: number, y: number, z: number }) {
        //check if position is typeof THREE.Vector3
        if (positionObject instanceof THREE.Vector3) {
            this._position.set(positionObject.x, positionObject.y, positionObject.z) //incase Xpell engine controls the position
        }
        else {
            this._position = new THREE.Vector3(positionObject.x, positionObject.y, positionObject.z) //incase Xpell engine controls the position
        }

        this._cannon_obj?.position.set(this._position.x, this._position.y, this._position.z)
        // const srcObj = (this._cannon_obj) ? this._cannon_obj : this._three_obj
        // srcObj?.position.set(positionObject.x, positionObject.y, positionObject.z) //in case that other engine (like physics) controls the position
    }

    /**
     * Sets the X3DObject position from a THREE.Vector3 object
     * @param newPosition the new position X3DObject in the form of THREE.Vector3
     */
    setPositionFromVector3(newPosition: THREE.Vector3) {
        this.setPosition({ x: newPosition.x, y: newPosition.y, z: newPosition.z })
    }

    /**
     * Sets the X3DObject rotation
     * @param rotationObject - The new rotation X3DObject in the form of {x:number,y:number,z:number,order?:string}
     * @example setRotation({x:0,y:0,z:0,order:"XYZ"})
     * @comment effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)
     */
    setRotation(rotationObject: { x: number, y: number, z: number, order?: string }) {
        //check if rotation is typeof THREE.Euler
        if(!rotationObject.order) rotationObject.order = "XYZ"
        if (rotationObject instanceof THREE.Euler) {
            this._rotation.set(rotationObject.x, rotationObject.y, rotationObject.z, rotationObject.order) //incase Xpell engine controls the position
        } else {
            this._rotation = new THREE.Euler(rotationObject.x, rotationObject.y, rotationObject.z, rotationObject.order) //incase Xpell engine controls the position
        }
        this?._cannon_obj?.quaternion.setFromEuler(this._rotation.x, this._rotation.y, this._rotation.z, this._rotation.order)
    }

    /**
     * Sets the X3DObject rotation from a THREE.Euler object
     * @param newRotation  The new rotation X3DObject in the form of THREE.Euler
     */
    setRotationFromEuler(newRotation: THREE.Euler) {
        this.setRotation({ x: newRotation.x, y: newRotation.y, z: newRotation.z, order: newRotation.order })
    }

    /**
     * Sets the X3DObject rotation from a THREE.Quaternion object
     * @param newQuaternion The new rotation X3DObject in the form of THREE.Quaternion
     */
    setRotationFromQuaternion(newQuaternion: THREE.Quaternion) {
        this._rotation.setFromQuaternion(newQuaternion)
        // this.setRotation({ x: newQuaternion.x, y: newQuaternion.y, z: newQuaternion.z, order: newQuaternion.order })
    }

    /**
     * Sets the X3DObject scale
     * @param newScale The new scale X3DObject in the form of {x:number,y:number,z:number}
     * @example setScale({x:1,y:1,z:1})
     * @comment effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)
     */
    setScale(newScale: { x: number, y: number, z: number }) {
        this._scale.set(newScale.x, newScale.y, newScale.z)
        if (this._three_obj) {

        }
        if (this._cannon_obj) {

            // this._cannon_shape
            // this._cannon_obj.updateBoundingRadius()
        }
    }

    /**
     * Sets the X3DObject scale from a THREE.Vector3 object
     * @param newScale The new scale X3DObject in the form of THREE.Vector3
     */
    setScaleFromVector3(newScale: THREE.Vector3) {
        this.setScale({ x: newScale.x, y: newScale.y, z: newScale.z })
    }

    /**
     * This method sets the 3D State of the object (position, rotation & scale).
     */
    set3DState() {
        if (this._three_obj) {
            if (this._scale) this._three_obj.scale.copy(this._scale) //in case that other engine (like physics) controls the position

            if (this._rotation) this._three_obj.rotation.copy(this._rotation)
            if (this._position) this._three_obj.position.copy(this._position)
        }

        // if (this._cannon_obj) {
        //     this?._cannon_obj?.quaternion.setFromEuler(this._rotation.x, this._rotation.y, this._rotation.z)
        //     this._cannon_obj.position.set(this._position.x,this._position.y,this._position.z)
        //     //this._three_obj.scale.set(newScale.x, newScale.y, newScale.z) //in case that other engine (like physics) controls the position
        // } 


    }



    get canon() {
        return this.getCannonObject()
    }

    get three() {
        return this.getThreeObject()
    }

    /**
     * This method gets the Three object of the X3DObject
     */
    getThreeObject(): THREE.Object3D | Promise<THREE.Object3D> {
        if (!this._three_obj && this._three_class) {
            this._three_obj = new this._three_class(...this._threes_class_args)
            if (this._three_obj) {
                this._three_obj.name = <string>this._name
                this._clock.start()


                const keys = Object.keys(this)

                const s2t_props = [""]


                keys.forEach(key => {
                    if (!key.startsWith("_")) {
                        if (key == "color") {
                            (<any>this._three_obj)[key] = new THREE.Color(<string>this[key]);
                        } else {
                            (<any>this._three_obj)[key] = <any>this[key]
                        }

                    }
                })

                if (this._positional_audio) {
                    this._three_obj.add(this._positional_audio)
                }
            }

        }
        else if (!this._three_obj && this._model_url) {
            return new Promise((resolve, reject) => {
                this.loadModel(this._model_url).then(result => { resolve(<any>this._three_obj) })
            })
        }

        return <THREE.Object3D>this._three_obj
    }

    /**
     * This method returns the Canon physic's object of the X3DObject
     * @returns CANNON.Body
     * @comment if the X3DObject physics should be enabled the 
     *          _enable_physics attribute should be set to true
     *          and the _enable_physics attribute for the main engine should be set to true
     */
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
                const ttcResult = threeToCannon(<THREE.Object3D>this._three_obj, { type: shape })
                this._cannon_shape = ttcResult?.shape
                this._cannon_shape
                offset = <CANNON.Vec3>ttcResult?.offset
            }

            const rigidBody = new CANNON.Body({ mass: this._mass, material: new CANNON.Material('physics') })
            rigidBody.addShape(<CANNON.Shape>this._cannon_shape, offset)
            rigidBody.position.set(this._position.x, this._position.y, this._position.z)
            rigidBody.quaternion.setFromEuler(this._rotation.x, this._rotation.y, this._rotation.z)
            rigidBody.position
            rigidBody.linearDamping = 0.9
            this._cannon_obj = rigidBody
        }
        return <CANNON.Body>this._cannon_obj
    }


    /**
     * This method creates Positional Audio from a source file and attach it to the 3D object
     * @param source - the source file path (mp3, wav, ogg...)
     * @param data - optional data object that can contain "autoplay" and "loop" boolean values
     * @returns 
     */
    async createPositionalAudio(source: string, data?: IX3DObjectData) {
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

    async setPositionalAudioSource(source?: string, data?: IX3DObjectData) {
        const src = (source) ? source : this._positional_audio_source
        this._positional_audio = await this.createPositionalAudio(src, data)
        if (this._three_obj) this._three_obj.add(this._positional_audio)
        //_xlog.log("Sound " + source + " loaded")
    }

    /**
     * clears the positional audio from the object and the Three object
     */
    clearPositionalAudio() {
        if (this._positional_audio) {
            this._three_obj?.remove(this._positional_audio)
            this._positional_audio = null
        }
    }

    playAudio(loop?: boolean) {
        const snd = <THREE.PositionalAudio>this._positional_audio
        if (snd) {
            if (loop) snd.setLoop(true)
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
    async onFrame(frameNumber: number) {
        this._frame_number = frameNumber

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

            this.setPosition({ x: cp.x, y: cp.y, z: cp.z })
            this._three_obj?.quaternion.copy(<any>cq)
        }

        //very important to call the super function 
        //in order to activate anonymous functions (_on_frame,_on_click...)
        // and to propagate the event to the object children
        super.onFrame(frameNumber)
    }


    /**
     * Append X3DObject as a child object
     * @param x3dObject 
     */
    async append(x3dObject: X3DObject | IX3DObjectData) {
        if (!(x3dObject instanceof X3DObject)) {
            x3dObject = await X3D.create(<IX3DObjectData>x3dObject)
        }
        this._children.push(x3dObject as XObject);
        if (this._three_obj) {
            this._three_obj.add((<X3DObject>x3dObject).getThreeObject() as THREE.Object3D)
        }
    }

    

    /**
     * Show the X3DObject (if it was hidden)
     */
    show() { 
        this._visible = true 
        if(this._three_obj) this._three_obj.visible = true
    }

    /**
     * Hide the X3DObject
     */
    hide() { 
        this._visible = false 
        if(this._three_obj) this._three_obj.visible = false
    }

    /**
     * Toggle the X3DObject visibility
     */
    toggle() {
        if (this._visible) {
            this.hide()
        } else {
            this.show()
        }
    }


    /**
     * Import animation from a THREE Object3D to the current object
     * @param threeObj ThreeJs Object3D to import the animations from
     * @param newName optional - change the animation name to a new name 
     *                           (if there are more than one animation they 
     *                            will be added with index: Idle, Idle-2, Idle -3 ...)
     */
    async importAnimations(threeObj: THREE.Object3D, newName?: string) {
        if (this._three_obj && !this._animation_mixer) {
            this._animation_mixer = new THREE.AnimationMixer(this._three_obj)
        }
        let idx = 1
        threeObj.animations.forEach((anim) => {
            const a2 = anim.clone()

            if (newName) {
                if (idx == 1) {
                    a2.name = newName
                } else {
                    a2.name = newName + "-" + idx
                }
            }
            idx++
            this._three_obj?.animations.push(a2)
            a2.optimize()
            if (this._animation_mixer && this._animation_clips) this._animation_clips[a2.name] = this._animation_mixer.clipAction(a2)
            if (this._log_rules._import_animation) {
                _xlog.log("Animation " + a2.name + " loaded on object " + this._id);
            }
        })
    }


    /**
     * Loads a new 3D model to the X3DObject from a GLTF/GLB file
     * @param modelUrl - url of the model file
     * @returns Promise<THREE.Object3D>
     * @deprecated
     */

    async loadThreeObjectFromGLTF(modelUrl: string): Promise<THREE.Object3D> {
        return X3DLoader.loadModelFromGLTF(modelUrl)
        
    }

    /**
     * Loads a 3d model from a GLTF/GLB file into the X3DObject and updates the Three object 
     * @param modelUrl 
     */
    async loadModel(modelUrl?: string) {
        const modelurl:any = modelUrl ? modelUrl : this._model_url
        if (this._log_rules._load_model) _xlog.log("Loading model " + modelurl)
        const model: THREE.Object3D = await X3DLoader.loadModelFromGLTF(<string>modelUrl) //this.loadThreeObjectFromGLTF(modelurl)
        // if (this._log_rules._load_model) _xlog.log("AFTER Loading model " + modelurl)
        this._three_class = model.type
        this._three_obj = model
        this._three_obj.name = <string>this._name
        await this.onLoad()
    }

    /**
     * This method is called after the 3D model is loaded
     * if override this method, call super.onLoad() to activate the default onLoad method
     */
    async onLoad() {
        this.#_anim_loaded = false
        if(this._load_animations) {
            await this.loadAnimations()
            this.#_anim_loaded = true
        }
        if(this._on_load) {
            await this._on_load(this)
        }
    }

    async onMount(): Promise<void> {
        if(this._auto_play_animation) {
            if(!this.#_anim_loaded) {
                await this.loadAnimations()
            }
            this.playAllAnimations()
        }
        super.onMount()
    }

    /**
     * This method is called when the X3DObject is clicked
     * if override this method, call super.onClick() to activate the default onClick method
     */
    async onClick(event?:any) {
        if(this._on_click) {
            await this._on_click(this,event)
        }
    }
    

    async importAnimationFromGLTF(modelUrl: string, newName: string | undefined) {
        const model: THREE.Object3D = await X3DLoader.loadModelFromGLTF(modelUrl) //this.loadThreeObjectFromGLTF(modelUrl)
        this.importAnimations(model, newName)
    }

    /**
     * Import animations from an FBX file (compatible with maximo.com animations)
     * @param url - url of the FBX file
     * @since 1.04
     */
    async importAnimationFromFBXFile(url: string, newName?: string) {
        const getFBXAnimation = (url: string): Promise<THREE.Object3D> => {
            return new Promise(function (resolve, reject) {
                const _onload = (obj: THREE.Object3D) => {
                    resolve(obj)
                }

                const _onprogress = (data: any) => {
                    _xd._o["x3d-loader"] = {
                        _model_url:url,
                        _loaded:data.loaded,
                        _total:data.total,
                        _type:"FBX"
                    }
                 }

                const _onerror = (error: any) => {
                    _xlog.error(error);
                    // this.loading = false
                    reject(error)
                }

                const loader = new FBXLoader()
                loader.load(url, _onload, _onprogress, _onerror);

            })
        }



        const obj = await getFBXAnimation(url)
        if (obj && obj instanceof THREE.Object3D) {
            await this.importAnimations(obj, newName)
        }

    }


    /**
     * loads animation on start or after create object
     */
    async loadAnimations() {
        // console.log("loadAnimations",this._three_obj);
        
        if (this._three_obj && this._three_obj.animations.length > 0) {
            const anim = this._three_obj.animations
            
            this._animation_mixer = new THREE.AnimationMixer(this._three_obj)
            anim.forEach(__anim => {
                if (this._animation_mixer) {
                    this._animation_clips[__anim.name] = this._animation_mixer.clipAction(__anim)
                }
                _xlog.log("Animation " + __anim.name + " loaded on object " + this._id);
            })
        }

    }

    stopAllAnimations() {
        this._animation_mixer?.stopAllAction()
    }

    playAllAnimations() {
        
        Object.keys(this._animation_clips).forEach((clipName) => {
            const clip = this._animation_clips[clipName]
            // const clip = animationAction._clip.name
                clip.reset()
                clip.time = 0.0
                // console.log("playAllAnimations",clip);
                
                clip.play()
                this._current_action = clipName
                // this.playAnimation(clipName)
            
        })
    }

    // playRandomStateAnimation(state: string) {
    //     this.playAnimation(state + "-" + _xu.getRandomInt(1, this._npc_state_animations[state].length))
    // }

    playAnimation(clipName: string, loop?: THREE.AnimationActionLoopStyles, repetitions?: number) {

        if (clipName) {
            const anim = this._animation_clips[clipName]

            if (anim) {
                if (this._log_rules._play_animation) {
                    _xlog.log("playing animation: " + clipName);
                }

                if (loop) {
                    const rp = (repetitions) ? repetitions : 0
                    anim.setLoop(loop, rp)
                }

                if (this._current_action) {
                    const prevAnim: THREE.AnimationAction = this._animation_clips[<any>this._current_action]
                    anim.reset()
                    // anim.time = 0.0
                    // anim.setEffectiveTimeScale(1.0)
                    // anim.setEffectiveWeight(1.0)
                    anim.crossFadeFrom(prevAnim, this._fade_duration, false).play()
                    prevAnim.fadeOut(this._fade_duration)
                } else {
                    anim.reset()
                    anim.time = 0.0
                    anim.play()
                }
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