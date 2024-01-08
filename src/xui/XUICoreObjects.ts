import { _xem } from "../XEM/XEventManager";
import XUIObject from "./XUIObject";
// import {Xpell as _x} from "../Xpell"
import {_x, IXObjectData,XEventListenerOptions,XObjectData,XObjectPack } from "xpell-core";



export class XView extends XUIObject {
    constructor(data:IXObjectData) {
        const defaults =  {
            _type: "view",
            "class":"xview"
        };
        super(data,defaults);
    }
}


export class XHeader extends XUIObject {
    constructor(data:IXObjectData) {
        const tag = "header"
        const defaults = {
            _type: tag,
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
            _type: tag,
            class:"x" + tag,
            _html_tag:"nav"
        }
        super(data,defaults);
    }
}

export class XForm extends XUIObject {
    constructor(data:IXObjectData) {
        const tag = "form"
        const defaults = {
            _type: tag,
            class:"x" + tag,
            _html_tag:tag
        }
        super(data,defaults);
    }
}


export class XImage extends XUIObject {
   
    static xtype = "image"

    constructor(data:IXObjectData) {
        const defaults = {
            _type: XImage.xtype,
            class:"x" + XImage.xtype,
            _html_tag:"img"
        }
        super(data,defaults);
    }
}

export class XVideo extends XUIObject {
    constructor(data:IXObjectData) {
        const tag = "video"
        const defaults = {
            _type: tag,
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
    
    constructor(data:IXObjectData) {
        const tag = "webcam"
        const defaults = {
            _type: tag,
            class:"x" + tag,
            _html_tag:"video"
        }
        super(data,defaults,true)
        this.parse(data)
        this.parseEvents(this._xem_options)

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

    setSource(video_elem:any) {

        navigator.mediaDevices.getUserMedia(this._video_constraints).then((stream) => {
            video_elem.srcObject = stream;
            video_elem.addEventListener('loadeddata',async  () => {
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
        const v:any   = this.getDOMObject()
        return !!(v?.currentTime > 0 && !v?.paused && !v?.ended && v?.readyState > 2);
    }

    async pause() {
        const v:any   = this.getDOMObject()
        v?.pause()
        //Spell.run("xai handpose stop-detect")
    }

}


export class XTextField extends XUIObject {
    constructor(data:IXObjectData) {
        const tag = "text"
        const defaults = {
            _type : tag,
            class:"x" + tag,
            _html_tag:"input"
        }
        super(data,defaults,true);
        if(data._text) {
            this.value = data._text
            data._text = undefined
        }

        //incase of self parsing do parse & parseEvents
        this.parse(data)
        this.parseEvents(this._xem_options)
        
        
    }

    setText(text:string) {
        if(this.dom) {
            this._text = text;
            (<HTMLInputElement>(this.dom)).value = text
        }
    }
}

export class XPassword extends XUIObject {
    constructor(data:IXObjectData) {
        const tag = "text"
        const defaults = {
            _type : tag,
            type:"password",
            class:"x" + tag,
            _html_tag:"input"
        }
        super(data,defaults);
    }
}


export class XInput extends XUIObject {
    constructor(data:IXObjectData) {
        const tag = "input"
        const defaults = {
            _type : tag,
            class:"x" + tag,
            _html_tag:"input"
        }
        super(data,defaults);
    }
}

export class XTextArea extends XUIObject {
    constructor(data:IXObjectData) {
        const defs = {
            _type:"textarea",
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
            _type : tag,
            class:"x" + tag,
            _html_tag:"a"
        }
        super(data,defaults);
    }
}

export class XLabel extends XUIObject {    
    constructor(data:IXObjectData) {
        const defaults = {
            _type:"label",
            _html_tag:"label",
            class:"xlabel"
        }
        super(data,defaults);
    }
}

export class XHTML extends XUIObject {    
    constructor(data:IXObjectData) {
        const defaults = {
            _type:"xhtml",
            _html_tag: (data["_html_tag"]) ?data["_html_tag"] : "div"

        }
        super(data,defaults);
    }
}

export class XSVG extends XUIObject {
    private _svg_data!: string;    

    constructor(data:XObjectData) {
        const defaults = {
            _type:"svg",
            _html_tag: "svg",
            _svg_data: "",
            _html_ns: "http://www.w3.org/2000/svg",
            xmlns:"http://www.w3.org/2000/svg"

        }
        super(data,defaults);
    }
}


export class XSVGCircle extends XUIObject {
    private _svg_data!: string;    

    constructor(data:XObjectData) {
        const defaults = {
            _type:"circle",
            _html_tag: "circle",
            _svg_data: "",
            _html_ns: "http://www.w3.org/2000/svg",

        }
        super(data,defaults);
    }
}

export class XSVGEllipse extends XUIObject {
    private _svg_data!: string;    

    constructor(data:XObjectData) {
        const defaults = {
            _type:"ellipse",
            _html_tag: "ellipse",
            _svg_data: "",
            _html_ns: "http://www.w3.org/2000/svg",

        }
        super(data,defaults);
    }
}

export class XSVGRect extends XUIObject {
    private _svg_data!: string;    

    constructor(data:XObjectData) {
        const defaults = {
            _type:"rect",
            _html_tag: "rect",
            _svg_data: "",
            _html_ns: "http://www.w3.org/2000/svg",

        }
        super(data,defaults);
    }
}

export class XSVGLine extends XUIObject {
    private _svg_data!: string;    

    constructor(data:XObjectData) {
        const defaults = {
            _type:"line",
            _html_tag: "line",
            _svg_data: "",
            _html_ns: "http://www.w3.org/2000/svg",

        }
        super(data,defaults);
    }
}

export class XSVGPolyline extends XUIObject {
    private _svg_data!: string;    

    constructor(data:XObjectData) {
        const defaults = {
            _type:"polyline",
            _html_tag: "polyline",
            _svg_data: "",
            _html_ns: "http://www.w3.org/2000/svg",

        }
        super(data,defaults);
    }
}

export class XSVGPolygon extends XUIObject {
    private _svg_data!: string;    

    constructor(data:XObjectData) {
        const defaults = {
            _type:"polygon",
            _html_tag: "polygon",
            _svg_data: "",
            _html_ns: "http://www.w3.org/2000/svg",

        }
        super(data,defaults);
    }
}

export class XSVGPath extends XUIObject {
    private _svg_data!: string;    

    constructor(data:XObjectData) {
        const defaults = {
            _type:"path",
            _html_tag: "path",
            _svg_data: "",
            _html_ns: "http://www.w3.org/2000/svg",

        }
        super(data,defaults);
    }
}


export class XButton extends XUIObject {
    constructor(data:XObjectData) {
        const defs = {
            _type : "button",
            class:"xbutton",
            _html_tag :"button"
        }
        super(data,defs);        
    }
    
    setOnclick(fun:CallableFunction)
    {
        this._on_click = fun;
    }
}


export class XList extends XUIObject {
    _items: any;
    constructor(data:IXObjectData) {
    
        const defaults = {
            _type:"list",
            _html_tag:"div",
            class:"xlist",
            _items:[]
        }
        super(data,defaults,true);
        super.parse(data)
        if(this._items.length>0) {
            this._items.forEach((item:any) => {
                const si = new XView(item)
                this.append(si)
            });
        }
    }
}




export class XUIObjects extends XObjectPack {
    static getObjects() {
        return {
            "view":XView,
            "div":XView,
            "label":XLabel,
            "link" :XLink,
            "button" :XButton,
            "text" : XTextField,
            "password" : XPassword,
            "input":XInput,
            "textarea":XTextArea,
            "video" : XVideo,
            "image" : XImage,
            "list": XList,
            "form":XForm,
            "webcam":XWebcam,
            "xhtml":XHTML,
            "svg":XSVG,
            "circle":XSVGCircle,
            "rect":XSVGRect,
            "ellipse":XSVGEllipse,
            "line":XSVGLine,
            "polyline":XSVGPolyline,
            "polygon":XSVGPolygon,
            "path":XSVGPath,
            // "grid" : TO-DO,
            // "table": TO-DO,
        }
    }
}





export default XUIObjects


