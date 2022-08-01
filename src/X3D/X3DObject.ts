import {XUtils as _XU} from "../XUtils"
import XParser from "../XParser"
import * as _XC from "../XConst"
import * as THREE from 'three'
import XObject, { IXObjectData } from "../XObject"
import xNanoCommands from './XNanoCommands'




const reserved_words = {}
const xpell_object_html_fields_mapping = {
    "_id": "id",
};    


interface IX3DObjectData extends IXObjectData {
    _three_obj: THREE.Object3D 
}

class X3DObject extends XObject {
    _three_class: any
    _three_obj:THREE.Object3D | null
    _position: { x: number; y: number; z: number }
    _rotation: { x: number; y: number; z: number }
    private _scale: { x: number; y: number; z: number }
    private _visible: boolean
    private _animation: boolean
    private _animation_clips: {}
    private _fade_duration: number
    private _clock: THREE.Clock
    _fraction: number
    _threes_class_args: never[]
    _animation_mixer: THREE.AnimationMixer
    private _frame_number: any
    _on_frame: any
    private _cache_cmd_txt: string | null
    _cache_jcmd: any
    private _disable_frame_3d_state: any
    private _3d_set_once: any
    private _current_action: THREE.AnimationMixer
    xNanoCommands: { move: (ns_cmd: any) => void; position: (ns_cmd: any) => void; scale: (ns_cmd: any) => void; rotation: (ns_cmd: any) => void; spin: (ns_cmd: any) => void; "stop-spin": (ns_cmd: any) => void; log: (ns_cmd: any) => void; rotate: (ns_cmd: any) => void; "rotate-toward": (ns_cmd: any) => void; play: (ns_cmd: any) => void; "follow-joystick": (ns_cmd: any) => void; "follow-keypoint": (ns_cmd: any) => void; "follow-path": (ns_cmd: any) => void; hover: (ns_cmd: any) => void }

    static getXData(three_obj:THREE.Object3D, defaults) {
        let _spell_data = {
            _id: three_obj.name,
            [_XC.NODES.type]: "spell3d-object",
            [_XC.NODES.children]:[],
            _three_obj: three_obj,
            name: three_obj.name,
            _position: three_obj.position,
            _rotation: three_obj.rotation,
            _scale: three_obj.scale,
        }
        if (defaults) {
            _XU.mergeDefaultsWithData(_spell_data, defaults)
        }
        return _spell_data
    }

    static get_from_three_object(three_obj, defaults) {
        let _spell_data:any = X3DObject.getXData(three_obj, defaults)
        return new X3DObject(_spell_data)
    }

    static descriptor() {
        return {
            name: null,
            description: null
        }

    }

    constructor(data:IX3DObjectData, defaults?:any) {
        super(data,defaults)
        
        this._three_class = null
        this._three_obj = null
        this._position = { x: 0, y: 0, z: 0 }
        this._rotation = { x: 0, y: 0, z: 0 }
        this._scale = { x: 1, y: 1, z: 1 },
        this._visible = true
        this[_XC.NODES.type] = "x3d-object";
        this[_XC.NODES.children] = [];
        this._animation = true
        this._animation_clips = {}
        this._fade_duration = 0.2
        this._ignore = reserved_words
        this._clock = new THREE.Clock();
        this._fraction = 0
        this._threes_class_args = []

        reserved_words[_XC.NODES.children] = "child spells"

        if (data) {
            if (data.hasOwnProperty("_ignore")) {
                this._ignore = _XU.createIgnoreList(data["_ignore"],reserved_words)
            }
            this.parse(data, this._ignore);
        }


        this.xNanoCommands = xNanoCommands
    }


    /**
     * occurs on Spell.init
     * @override 
     */
    init() {
        
    }


    set_3d_state() {
        if (this._three_obj) {
            this._three_obj.position.set(this._position.x, this._position.y, this._position.z)
            this._three_obj.rotation.set(this._rotation.x, this._rotation.y, this._rotation.z)
            this._three_obj.scale.set(this._scale.x, this._scale.y, this._scale.z)
            this._three_obj.visible = this._visible
        }
    }

    parse(data, ignore = reserved_words) {
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


    load() { }



    async load_animations() {
        
        if(this._three_obj && this._three_obj.animations.length>0) {
            const anim = this._three_obj.animations
            console.log(anim);
            this._animation_mixer = new THREE.AnimationMixer(this._three_obj)
            anim.forEach(__anim => {
                this._animation_clips[__anim.name] = this._animation_mixer.clipAction(__anim)
                console.log("animation " + __anim.name + " loaded");
            })
        }
        
    }

    /**
     * @override
     */
    async get_three() {

        if (!this._three_obj && this._three_class) {
            
            this._three_obj = new this._three_class(...this._threes_class_args)
            if(this._three_obj){
            this._three_obj.name = this.name
            this._clock.start()
            
            this.onCreate()
            const keys = Object.keys(this)

            const s2t_props = [""]
            keys.forEach(key => {
                if (!key.startsWith("_")) {
                    if(this._three_obj){
                        if (key == "color") {
                            this._three_obj[key] = new THREE.Color(this[key]);
                        } else {
                            this._three_obj[key] = this[key]
                        }
                    }
                    /* FIELD Checker - debug only unmark and add fields
                    const flds = ["name","height","width","visible","side","roughness"]
                    if(this[key] && flds.includes(key)){
                        this._three_obj[key] = this[key]
                    }
                    */
                }
            })
            }
            
        }




        return this._three_obj
    }



    /**
     * onFrame function for spell3d-object
     * - parse textual command to SpellCommand and cache
     * - set 3d-state (position, rotation & scale) if Spell in control
     * - update animation mixer if exists
     * @param {number} frame_number 
     */
    async onFrame(frame_number) {

        this._frame_number = frame_number
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
            this.set_3d_state()
        } else {
            //set 3d state once for inital poistion/rotation
            // to override this set "_3d_set_once":false on Spell object input data
            if (!this._3d_set_once) {
                this.set_3d_state()
                this._3d_set_once = true
            }
        }




        if (this._animation_mixer && this._current_action) {
            const diff = this._clock.getDelta()
            this._animation_mixer.update(diff)
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

    append(spell3d_object) {
        this[_XC.NODES.children].push(spell3d_object);
    }


    show() { this._visible = true }

    hide() { this._visible = false }
}

export default X3DObject