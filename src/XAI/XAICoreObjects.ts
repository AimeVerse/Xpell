import XEventManager from "../XEventManager";
import XLogger from "../XLogger";
import { XObjectPack } from "../XObject";
import XAIObject from "./XAIObject";


/**
 * Xpell Web TTS (Text to Speech)
 */
export class XTTS extends XAIObject {

    static xtype = "tts"
    synth:SpeechSynthesis = null
    voices:Array<SpeechSynthesisVoice> = [];

    constructor(data) {
        super(data, { _type: XTTS.xtype, _voice: "Samantha" })
        this.defaults_voice = null;
        this.defaults_voice_name = this._voice;
        this.speach_rate = 1;
        this.speach_pitch = 1;
        this.pron = {};
    }


    async onCreate(): Promise<void> {
        await this.loadVoices()
        XEventManager.fire("tts-voices-loaded")
        
        
    }

    setPron(pron_dict) {
        this.pron = pron_dict;
    }

    applyVoices() {
        this.voices = this.synth.getVoices();
        // console.log("total voices: " + this.voices.length);
        // this.voices.forEach(voice => console.log(voice.name))
        if (this.defaults_voice_name) {
            
            this.setVoiceByName(this.defaults_voice_name);
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

    setVoice(index) {
        this.default_voice = index;
    }

    setVoiceByName(voiceName) {
        if (this.voices) {
            for (let i = 0; i < this.voices.length; i++) {
                //console.log("bot voice " + this.voices[i].name + ' (' + this.voices[i].lang + ')')
                if (this.voices[i].name.toLowerCase() == voiceName.toLowerCase()) {
                    XLogger.log("xai tts default voice is set to " + this.voices[i].name + ' (' + this.voices[i].lang + ')')
                    this.setVoice(i)
                }
            }
        }
    }

    speak(text, on_speech_word = null, on_speech_end = null) {
        if (this.synth) {
            let utter = new SpeechSynthesisUtterance();
            if (this.default_voice) {
                utter.voice = this.voices[<string>this.default_voice];
            }
            utter.pitch = <number>this.speach_pitch;
            utter.rate = <number>this.speach_rate;

            let l_txt = text.toLowerCase();
            let pkeys = Object.keys(this.pron);
            pkeys.forEach(word => {
                while (l_txt.indexOf(word) > -1) {
                    l_txt = l_txt.replace(word, this.pron[word]);
                }
            });
            utter.text = l_txt;

            utter.onboundary = on_speech_word;
            utter.onend = on_speech_end;

            this.synth.speak(utter);

            // return new Promise(resolve => {
            //     const id = setInterval(() => {
            //         if (PAIWebVoice.get_instance().synth.speaking === false) {
            //             //console.log("stop speak");
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