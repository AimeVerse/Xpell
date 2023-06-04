// import _xem from "../XEventManager";
// import _xlog from "../XLogger";
// import { XObjectPack } from "../XObject";
import {_xlog,XObjectPack,XObjectData } from "xpell-core"
import XAIObject from "./XAIObject";
import { _xem } from "../XEM/XEventManager";

/**
 * Xpell Web TTS (Text to Speech)
 */
export class XTTS extends XAIObject {

    static xtype = "tts"
    synth!:SpeechSynthesis 
    voices:Array<SpeechSynthesisVoice> = [];

    constructor(data:XObjectData) {
        super(data, { _type: XTTS.xtype, _voice: "Samantha" })
        this.defaults_voice = null;
        this.defaults_voice_name = this._voice;
        this.speach_rate = 1;
        this.speach_pitch = 1;
        this.pron = {};
    }


    async onCreate(): Promise<void> {
        await this.loadVoices()
        _xem.fire("tts-voices-loaded")
        
        
    }

    setPron(pron_dict:any) {
        this.pron = pron_dict;
    }

    applyVoices() {
        this.voices = this.synth.getVoices();
        if (this.defaults_voice_name) {
            
            this.setVoiceByName(<any>this.defaults_voice_name);
            this.defaults_voice_name = null;
        }
    }

    loadVoices() {
        return new Promise((resolve,reject) => {

            this.synth = window.speechSynthesis;
            // this.defaults_voice_name = default_voice;
            const sthis = this
            //chrome event
            if (typeof this.synth !== 'undefined' && this.synth.onvoiceschanged !== undefined) {
                this.synth.onvoiceschanged = function () {
                    sthis.applyVoices();
                    resolve(true)
                }
            }
            else {
                resolve(true)
                this.applyVoices();
            }
        })

    }

    setVoice(index:any) {
        this.default_voice = index;
    }

    setVoiceByName(voiceName:string) {
        if (this.voices) {
            for (let i = 0; i < this.voices.length; i++) {
                if (this.voices[i].name.toLowerCase() == voiceName.toLowerCase()) {
                    _xlog.log("xai tts default voice is set to " + this.voices[i].name + ' (' + this.voices[i].lang + ')')
                    this.setVoice(i)
                }
            }
        }
    }

    speak(text:string, on_speech_word?:any, on_speech_end?:any) {
        if (this.synth) {
            let utter = new SpeechSynthesisUtterance();
            if (this.default_voice) {
                utter.voice = this.voices[<any>this.default_voice];
            }
            utter.pitch = <number>this.speach_pitch;
            utter.rate = <number>this.speach_rate;

            let l_txt = text.toLowerCase();
            let pkeys = Object.keys(<any>this.pron);
            pkeys.forEach(word => {
                while (l_txt.indexOf(word) > -1) {
                    l_txt = l_txt.replace(word, (<any>this.pron)[<any>word]);
                }
            });
            utter.text = l_txt;

            utter.onboundary = on_speech_word;
            utter.onend = on_speech_end;

            this.synth.speak(utter);

            // return new Promise(resolve => {
            //     const id = setInterval(() => {
            //         if (PAIWebVoice.get_instance().synth.speaking === false) {
            //             clearInterval(id);
            //             resolve();
            //         }
            //     }, 100);
            // });
        }
    }

    getVoices() {
        return this.voices
    }
}






export class XAIObjects extends XObjectPack {
    static getObjects() {
        return {
            [XTTS.xtype]: XTTS,
        }
    }
}





export default XAIObjects