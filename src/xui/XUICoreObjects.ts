import XUIObject from "./XUIObject";
import {XPell as _X} from "../XPell"
import * as _XC from "../XConst"
import { IXObjectData,XObjectPack } from "../XObject";



export class XView extends XUIObject {
    constructor(data) {
        const defaults =  {
            [_XC.NODES.type] : "view",
            "class":"xview"
        };
        super(data,defaults);
    }
}


export class XHeader extends XUIObject {
    constructor(data:IXObjectData) {
        const tag = "header"
        const defaults = {
            [_XC.NODES.type] : tag,
            class:"x" + tag,
            _html_tag:tag
        }
        super(data,defaults);
    }
}

export class XNavBar extends XUIObject {
    constructor(data:IXObjectData) {
        const tag = "navbar"
        const defaults = {
            [_XC.NODES.type] : tag,
            class:"x" + tag,
            _html_tag:"nav"
        }
        super(data,defaults);
    }
}

export class XForm extends XUIObject {
    constructor(data) {
        const tag = "form"
        const defaults = {
            [_XC.NODES.type] : tag,
            class:"x" + tag,
            _html_tag:tag
        }
        super(data,defaults);
    }
}


export class XImage extends XUIObject {
   

    constructor(data) {
        const tag = "image"
        const defaults = {
            [_XC.NODES.type] : tag,
            class:"x" + tag,
            _html_tag:"img"
        }
        super(data,defaults);
    }
}

export class XVideo extends XUIObject {
    constructor(data) {
        const tag = "video"
        const defaults = {
            [_XC.NODES.type] : tag,
            class:"x" + tag,
            _html_tag:tag
        }
        super(data,defaults);

    }
}

export class XWebcam extends XUIObject {
    autoplay: boolean;
    muted: boolean;
    _video_constraints: { video: boolean; width: number; height: number; };
    
    constructor(data) {
        const tag = "webcam"
        const defaults = {
            [_XC.NODES.type] : tag,
            class:"x" + tag,
            _html_tag:"video"
        }
        super(data,defaults);

        
        super(data,defaults)
        
        this.autoplay = true
        this.muted = true
        this._video_constraints = {
            video: true,
            width: 320,
            height: 280
        };
    }


    /**
     * this method checks if the browser has "getMedia" support for webcam & mic
     * @returns boolean
     */
    isAvailable() {
        return !!(navigator.mediaDevices && navigator.mediaDevices.getUserMedia);
    }

    setSource(video_elem) {

        navigator.mediaDevices.getUserMedia(this._video_constraints).then((stream) => {
            video_elem.srcObject = stream;
            video_elem.addEventListener('loadeddata',async  () => {
                //console.log("media is running");
                // video_playing = true;

                // await load_hands_model()
                // //ENABLE_CAM_BUTTON.classList.add('removed');
                //detect()
                //if ai
                //_X.run("xai handpose detect")
            });
        });
    }

    get isPlaying() {
        const v:any   = this.DOMElementFromHTML
        return !!(v?.currentTime > 0 && !v?.paused && !v?.ended && v?.readyState > 2);
    }

    async pause() {
        const v:any   = this.DOMElementFromHTML
        v?.pause()
        //Spell.run("xai handpose stop-detect")
    }

}


export class XTextField extends XUIObject {
    constructor(data) {
        const tag = "text"
        const defaults = {
            [_XC.NODES.type] : tag,
            class:"x" + tag,
            _html_tag:"input"
        }
        super(data,defaults);
    }

    

}

export class XTextArea extends XUIObject {
    constructor(data) {
        const defs = {
            [_XC.NODES.type]:"textarea",
            "class":"form-control",
            "_html_tag":"textarea"
        }
        super(data,defs);
    }

    

    getText() {
        return this.text
    }
}

export class XLink extends XUIObject {
    
    constructor(data:IXObjectData) {
        const tag = "link"
        const defaults = {
            [_XC.NODES.type] : tag,
            class:"x" + tag,
            _html_tag:"a"
        }
        super(data,defaults);
    }
}

export class XLabel extends XUIObject {
    
    constructor(data) {
        const defaults = {
            [_XC.NODES.type]:"label",
            _html_tag:"label",
            class:"xlabel"
        }
        super(data,defaults);
    }

    

   
}

export class XButton extends XUIObject {
    onClick: CallableFunction;
    constructor(data) {
        const defs = {
            [_XC.NODES.type] : "button",
            class:"xbutton",
            _html_tag :"button"
        }
        super(data,defs);        
    }

  

    setOnclick(fun:CallableFunction)
    {
        this.onClick = fun;
    }
}


export class XList extends XUIObject {
    _items: any;
    constructor(data) {
    
        const defaults = {
            [_XC.NODES.type]:"list",
            _html_tag:"div",
            class:"xlist",
            _items:[]
        }
        super(data,defaults);
        if(this._items.length>0) {
            this._items.forEach(item => {
                const si = new XView(item)
                this.append(si)
            });
        }
    }
}




export class XUIObjects implements XObjectPack {
    static getObjects() {
        return {
            "view":XView,
            "label":XLabel,
            "link" :XLink,
            "button" :XButton,
            "text" : XTextField,
            "textarea":XTextArea,
            "video" : XVideo,
            "image" : XImage,
            "list": XList,
            "form":XForm,
            "webcam":XWebcam
            // "grid" : TO-DO,
            // "table": TO-DO,
        }
    }
}





export default XUIObjects


