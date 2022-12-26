/**
 * Xpell X3D Character
 * This object is responsible for Character control, graphics, animations and more
 */


import { X3DObject, IX3DObjectData } from './X3DObject'
import { XObjectPack } from '../XObject'
import { X3DLoader as _loader } from './X3DLoader'
import { XLogger as _xlog } from '../XLogger'
import { XUtils as _xu } from '../XUtils'

import _xnpc_nano_commands from "./X3DNPCNanoCommands"


/**
 * a single item in the npc-user conversation, the item contains:
 * d - conversation item date 
 * name - conversation name
 */
export type NPCConversation = {
    d: number,
    name: string,
    items: Array<NPCConversationItem>
}

/**
 * a single item in the npc-user conversation, the item contains:
 * d - conversation item date 
 * u - user message 
 * n - npc response 
 * s - response score 
 */
export type NPCConversationItem = {
    i: string,
    d: number,
    u: string,
    n: string,
    s: number
}


export type NPCAvatar = {
    name?: string,
    modelUrl: string,
    profilePicture?: string
}

export enum NPCStates {
    Idle = "Idle",
    Talking = "Talking",
    Floating = "Floating",
}

export type NPCAnimation = {
    url: string,
    name: string
}

export class XNPC extends X3DObject {

    static xtype: string = "npc"

    _first_name: string
    _last_name: string
    _nick_name: string
    _voice: string
    _role: string
    _general_information: string
    _motivation: string
    _npc_state_animations: Array<any>
    _npc_animations: Array<any>
    _npc_available_states: Array<NPCStates>
    _npc_state: NPCStates
    _auto_load: boolean = false
    _loaded: boolean
    private _conversationsHistory: Array<NPCConversation>
    private _activeConversation: NPCConversation
    private _avatar: NPCAvatar



    constructor(data) {

        const fields = ["_first_name", "_last_name", "_nick_name", "_voice", "_role", "_general_information",
            "_motivation", "_npc_state_animations", "_npc_animations", "_npc_available_states", "_npc_state", "_avatar", "_auto_load"]
        const ids = _xu.guid()
        super(data);
        this._loaded = false
        this._type = XNPC.xtype
        this._conversations = []
        this._npc_state_animations = [{ "Idle": [] }, { Talking: [] }, { Floating: [] }]

        this._npc_state = NPCStates.Idle,
            this._npc_available_states = [NPCStates.Idle, NPCStates.Talking, NPCStates.Floating]


        this._activeConversation = {
            d: Date.now(),
            name: "active",
            items: []
        }
        this._conversationsHistory = []
        this.addNanoCommandPack(_xnpc_nano_commands)
        this.parseFields(data, fields, true)


        if (this._auto_load) {
            this.load()
        }





    }

    async load() {
        if (this._avatar) {
            await this.loadModel(this._avatar.modelUrl)
            for (let state in NPCStates) {
                await this.loadAnimationType(state)
            }
            this._loaded = true
            // // Delay onFrame
            // setTimeout(() => {
            //     this._loaded = true
            // }, 3000);

        }
    }

    //should be move to Xpell core lib

    // async loadModelFromGLTF(modelUrl: string): Promise<THREE.Object3D> {
    //     return new Promise(function (resolve, reject) {
    //         const _onload = (gltf) => {

    //             const child = gltf.scene

    //             child.animations = gltf.animations

    //             child.traverse((child2) => {
    //                 child2.frustumCulled = false
    //                 /** add more */
    //             })

    //             resolve(child)
    //         }

    //         const _onprogress = (data) => {
    //             // this.loading=false
    //             // console.log(data);
    //         }

    //         const _onerror = (error) => {
    //             console.log("ERROR ", error);
    //             reject(error)
    //         }

    //         const loader = new GLTFLoader()
    //         loader.load(modelUrl, _onload, _onprogress, _onerror)
    //     })
    // }

    // async loadModel(modelUrl: string) {
    //     _xlog.log("Loading avatar " + modelUrl)
    //     const model: THREE.Object3D = await _loader.loadModelFromGLTF(modelUrl)
    //     this._three_class = model.type
    //     this._three_obj = model
    // }

    async loadAnimationType(animationsType: string) {
        if (!this._npc_state_animations.hasOwnProperty(animationsType)) {
            this._npc_state_animations[animationsType] = []
        }
        if (this._npc_state_animations[animationsType].length > 0) {
            await this.loadAnimationArray(this._npc_state_animations[animationsType], animationsType)
        }
    }

    async loadAnimationArray(animationsArray: Array<string>, animType: string) {
        for (let idx = 0; idx < animationsArray.length; idx++) {
            const animName = `${animType}-${idx + 1}`
            _xlog.log("loading animation " + animName + " from " + animationsArray[idx])
            await this.importAnimationFromFBXFile(animationsArray[idx], animName)
        }
    }


    changeState(newState: NPCStates) {
        this._npc_state = newState
        this.playRandomStateAnimation(newState)
    }



    playRandomStateAnimation(state: string) {
        this.playAnimation(state + "-" + _xu.getRandomInt(1, this._npc_state_animations[state].length))

    }


    getInfoData() {
        return {
            _first_name: this._first_name,
            _last_name: this._last_name,
            _nick_name: this._nick_name,
            _general_information: this._general_information,
            _motivation: this._motivation,
            _voice: this._voice,
            _role: this._role,
            _avatar: this._avatar,
            _npc_state_animations: this._npc_state_animations,
            _conversationsHistory: this._conversationsHistory,
            _activeConversation: this._activeConversation
        }
    }

    copyFromNpc(npc: XNPC) {
        const npcInfo = npc.getInfoData() // Returns NPC data object
        const npcKeys = Object.keys(npcInfo)
        npcKeys.forEach((key) => {
            if (key != "_avatar") {
                this[key] = npcInfo[key]
            }
        })
    }

    generateConversationItem(userQuestion: string, npcAnswer: string): NPCConversationItem {
        return {
            i: _xu.guid(),
            d: Date.now(),
            u: userQuestion,
            n: npcAnswer,
            s: 0
        }
    }

    getConversationItemById(conversationItemId: string) {
        const arr = this._activeConversation.items.filter(ci => ci.i == conversationItemId)
        if (arr.length > 0) {
            return arr[0]
        }
    }

    updateConversationItemById(conversationItemId: string, npcNewResponse) {
        const mci = this._activeConversation.items.filter(ci => ci.i == conversationItemId)
        mci[0].n = npcNewResponse
        this.saveActiveConversation()
    }

    updateConversationItemScore(conversationItemId: string, score: number) {
        const mci = this._activeConversation.items.filter(ci => ci.i == conversationItemId)
        mci[0].s = score
        this.saveActiveConversation()
    }

    deleteConversationItem(conversationItemId: string) {
        // console.log("searching",conversationItemId,this._activeConversation.items);
        for (let idx = 0; idx < this._activeConversation.items.length; ++idx) {
            if (this._activeConversation.items[idx].i == conversationItemId) {
                this._activeConversation.items.splice(idx, 1)
                this.saveActiveConversation()
                break;
            }
        }
    }

    addConversationItem(userQuestion: string, npcAnswer: string): string {
        const ci = this.generateConversationItem(userQuestion, npcAnswer)
        this._activeConversation.items.push(ci)
        this.saveActiveConversation()
        return ci.i
    }


    addConversation(npcConversation: NPCConversation) {
        this._conversationsHistory.push(npcConversation)
    }

    speakAnimation() {
        const character = this.getThreeObject()?.children[0]
        if (character && character.children[9]) {
            character.children[9]["morphTargetInfluences"][0] = Math.sin((Date.now() / 1000) * 14) / 1.5;
            character.children[9]["morphTargetInfluences"][2] = Math.cos((Date.now() / 1000) * 8) / 1.3;
            character.children[9]["morphTargetInfluences"][6] = Math.cos((Date.now() / 1000) * 3) / 1.1;
        } else if (character) {
            character.children[1]["morphTargetInfluences"][0] = Math.sin((Date.now() / 1000) * 12) / 1.5;
            character.children[1]["morphTargetInfluences"][1] = Math.cos((Date.now() / 1000) * 6) / 2;
        }
    }

    shutUpAnimation() {
        const character = this.getThreeObject()?.children[0]
        if (character && character.children[9]) {
            character.children[9]["morphTargetInfluences"][0] = 0;
            character.children[9]["morphTargetInfluences"][2] = 0;
            character.children[9]["morphTargetInfluences"][6] = 0;
        } else if (character) {
            character.children[1]["morphTargetInfluences"][0] = 0;
            character.children[1]["morphTargetInfluences"][1] = 0;
        }
    }

    // Nano commands
    // smile(xCommand: XCommand, x3dObject?: X3DObject) 

    // smile(cmd: XCommand) {
    //     const character = this.getThreeObject().children[0]

    //     // Smile morph
    //     character.children[9].morphTargetInfluences[1] = Math.sin((Date.now() / 1000) * 12) / 1.5;


    //     // Testing command
    //     // this.setPosition({ x: 1, y: Math.sin(Date.now() / 1000) * 1.2, z: 0 })
    // }

    async onFrame(frameNumber: number) {
        // _xlog.log("NPC on frame")
        if (this._loaded) {
            // this.run("npc smile")

            // this.setPosition({ x: 1, y: Math.sin(Date.now() / 1000) , z: 0 })

            if (this._npc_state == NPCStates.Talking) {
                this.speakAnimation()

            } else {
                this.shutUpAnimation()
            }
        }
        super.onFrame(frameNumber)
    }

    private getConversationItems(conversation: NPCConversation, endOfConversationDelimiter?: string | undefined) {
        let out = ""
        const npcName = this._first_name
        conversation.items.forEach((item) => {
            out += "User: " + item.u + "\n" + npcName + ": " + item.n + "\n"
        })
        if (endOfConversationDelimiter) {
            out += endOfConversationDelimiter + "\n"
        }
        return out;
    }

    getConversationContext() {

        let out = ""

        this._conversationsHistory.forEach((conv) => {
            out += this.getConversationItems(conv, "##")
        })

        out += this.getConversationItems(this._activeConversation)
        return out

    }

    setActiveConversation(conversation) {
        this._activeConversation = conversation
    }

    getActiveConversationContext() {
        return JSON.stringify(this._activeConversation) //this.getConversationItems(this._activeConversation)

    }


    private async saveActiveConversation() {
        //XDB.save("active-conversation", this.getActiveConversationContext())
    }
}



export class X3DNPC extends XObjectPack {
    static getObjects() {
        return {
            [XNPC.xtype]: XNPC,
            "xnpc": XNPC
        }
    }
}

export default X3DNPC