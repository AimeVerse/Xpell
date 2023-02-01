/**
 * Xpell X3D Character
 * This object is responsible for Character control, graphics, animations and more
 */
import { X3DObject } from './X3DObject';
import { XObjectPack } from '../XObject';
/**
 * a single item in the npc-user conversation, the item contains:
 * d - conversation item date
 * name - conversation name
 */
export type NPCConversation = {
    d: number;
    name: string;
    items: Array<NPCConversationItem>;
};
/**
 * a single item in the npc-user conversation, the item contains:
 * d - conversation item date
 * u - user message
 * n - npc response
 * s - response score
 */
export type NPCConversationItem = {
    i: string;
    d: number;
    u: string;
    n: string;
    s: number;
};
export type NPCAvatar = {
    name?: string;
    modelUrl: string;
    profilePicture?: string;
};
export declare enum NPCStates {
    Idle = "Idle",
    Talking = "Talking",
    Floating = "Floating"
}
export type NPCAnimation = {
    url: string;
    name: string;
};
export declare class XNPC extends X3DObject {
    static xtype: string;
    _first_name: string;
    _last_name: string;
    _nick_name: string;
    _voice: string;
    _role: string;
    _general_information: string;
    _motivation: string;
    _npc_state_animations: Array<any>;
    _npc_animations: Array<any>;
    _npc_available_states: Array<NPCStates>;
    _npc_state: NPCStates;
    _auto_load: boolean;
    _loaded: boolean;
    private _conversationsHistory;
    private _activeConversation;
    private _avatar;
    constructor(data: any);
    load(): Promise<void>;
    loadAnimationType(animationsType: string): Promise<void>;
    loadAnimationArray(animationsArray: Array<string>, animType: string): Promise<void>;
    changeState(newState: NPCStates): void;
    playRandomStateAnimation(state: string): void;
    getInfoData(): {
        _first_name: string;
        _last_name: string;
        _nick_name: string;
        _general_information: string;
        _motivation: string;
        _voice: string;
        _role: string;
        _avatar: NPCAvatar;
        _npc_state_animations: any[];
        _conversationsHistory: NPCConversation[];
        _activeConversation: NPCConversation;
    };
    copyFromNpc(npc: XNPC): void;
    generateConversationItem(userQuestion: string, npcAnswer: string): NPCConversationItem;
    getConversationItemById(conversationItemId: string): NPCConversationItem;
    updateConversationItemById(conversationItemId: string, npcNewResponse: any): void;
    updateConversationItemScore(conversationItemId: string, score: number): void;
    deleteConversationItem(conversationItemId: string): void;
    addConversationItem(userQuestion: string, npcAnswer: string): string;
    addConversation(npcConversation: NPCConversation): void;
    speakAnimation(): void;
    shutUpAnimation(): void;
    onFrame(frameNumber: number): Promise<void>;
    private getConversationItems;
    getConversationContext(): string;
    setActiveConversation(conversation: any): void;
    getActiveConversationContext(): string;
    private saveActiveConversation;
}
export declare class X3DNPC extends XObjectPack {
    static getObjects(): {
        [x: string]: typeof XNPC;
        xnpc: typeof XNPC;
    };
}
export default X3DNPC;
