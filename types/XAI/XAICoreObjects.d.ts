import { XObjectPack, XObjectData } from "../Core/Xpell";
import XAIObject from "./XAIObject";
/**
 * Xpell Web TTS (Text to Speech)
 */
export declare class XTTS extends XAIObject {
    static xtype: string;
    synth: SpeechSynthesis;
    voices: Array<SpeechSynthesisVoice>;
    constructor(data: XObjectData);
    onCreate(): Promise<void>;
    setPron(pron_dict: any): void;
    applyVoices(): void;
    loadVoices(): Promise<unknown>;
    setVoice(index: any): void;
    setVoiceByName(voiceName: string): void;
    speak(text: string, on_speech_word?: any, on_speech_end?: any): void;
    getVoices(): SpeechSynthesisVoice[];
}
export declare class XAIObjects extends XObjectPack {
    static getObjects(): {
        [x: string]: typeof XTTS;
    };
}
export default XAIObjects;
//# sourceMappingURL=XAICoreObjects.d.ts.map