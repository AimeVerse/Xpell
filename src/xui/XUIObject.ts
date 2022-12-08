
import XUtils from "../XUtils"
import XData from "../XData"
import XObject, { IXObjectData } from "../XObject"
import * as _XC from "../XConst"
import _xuiobject_basic_nano_commands from "./XUINanoCommands"
const reservedWords = { _children:"child objects" }
const xpellObjectHtmlFieldsMapping = { "_id": "id", "css-class": "class", "animation": "xyz", "input-type": "type" };



export class XUIObject extends XObject {
    [k:string]: string | null | [] | undefined | Function | boolean | {}
    _html_tag: string
    _html_ns:string | null
    private _dom_object: any 
    _type:string  //[_SC.NODES.type]
    _html: string | undefined
    _base_display: string | undefined | null  
    text: string
    _data_source: string | null 
    _on_frame_skip_data_source: any
    _format: string | null
    _ignore: {[k:string]:string}
    


    constructor(data, defaults) {
        super(data,defaults)
        this._html_tag = "div";
        this._html_ns = null
        this._dom_object = null;
        this._type = "view";
        this._html = "";
        this._children = [];
        this._ignore = reservedWords;
        
        //this._base_display = "block"

        if (data) {
            if (data.hasOwnProperty("_ignore")) {
                this._ignore = XUtils.createIgnoreList(data["_ignore"],reservedWords)
            }
            this.parse(data, this._ignore);
        }

        this.addNanoCommandPack(_xuiobject_basic_nano_commands)
    }

    /**
     * Dispose all object memory (destructor)
     */
     async dispose(){
        this._dom_object = null
        this._children = null
    }

    /**
     * occurs on Xpell.init
     * @override 
     */
    init() {
        
    }


    // parse(data, ignore:{[k:string]:string} = reservedWords) {
    //     let cdata = Object.keys(data);
    //     cdata.forEach(field => {
            
    //         if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
    //             this[field] = data[field];
    //         }
    //     });
    // }

    log() {
        let keys = Object.keys(this);
        keys.forEach(key => {
            if (this[key]) {
                console.log(key + ":" + this[key]);
            }
        });
        console.log(this.getHTML());
    }

    getDOMObject():Element  {
        if (!this._dom_object) {
            //console.log("creating " + this._html_tag);
            let dom_object = (this._html_ns)
                 ? document.createElementNS(this._html_ns,this._html_tag)
                 : document.createElement(this._html_tag)
            let fields = Object.keys(this);

            fields.forEach(field => {
                if (this[field] && this.hasOwnProperty(field)) {
                    let f_out = field;
                    if (xpellObjectHtmlFieldsMapping.hasOwnProperty(field)) {
                        f_out = xpellObjectHtmlFieldsMapping[field];
                    }
                    if (!f_out.startsWith("_") && f_out !== "text") {
                        dom_object.setAttribute(f_out, <string>this[field]);
                    }
                }
            });

            //--> support both text and _text to deprecate text 
            if ((this["text"] && this["text"].length > 0)) {
                dom_object.textContent = this["text"];
            }  else if (this["_text"] && (<string>this["_text"]).length > 0) {
                dom_object.textContent = <string>this["_text"];
            }
            
            
            //--> change to support text content and children
            if (this._children.length > 0) {
                this._children.forEach((child:XUIObject) => {
                    const coo = child.getDOMObject()
                    dom_object.appendChild(coo);
                })
            }
            this._dom_object = dom_object;
            // this.onCreate()
        }
        return this._dom_object;
    }

    getHTML() {
        const dom = this.getDOMObject()
        this._html = dom?.outerHTML;
        return this._html;
    }

    attach(parentElementId:string){
        document.getElementById(parentElementId)?.append(this.getDOMObject())
        this.onMount()
    }
   
    

  
    /**
     * return the do
     */
    get DOMElementFromHTML():HTMLElement {
        return document.getElementById(<string>this._id)
    }

    append(xObject:XUIObject | IXObjectData | any) {
        this._children.push(<XObject>xObject)
        if (this._dom_object) {
            this.DOMElementFromHTML?.appendChild(xObject.getDOMObject())
        }
    }

    setText(text)
    {
        this.text = text;
        if(this.DOMElementFromHTML) {
            this.DOMElementFromHTML.innerHTML = text
        }
    }

    setStyle(attr, val) {
        if(this._dom_object instanceof HTMLElement) {
            this._dom_object.style[attr]= val
        }
    }

    show() {
        if(this._dom_object instanceof HTMLElement && this._base_display) {
            this._dom_object.style.display = this._base_display
        }
    }

    hide() {
        const cs = getComputedStyle(this._dom_object)
        
        
        if(cs) {
            this._base_display = cs.getPropertyValue("display")
        }
        if(this._dom_object instanceof HTMLElement) {
            this._dom_object.style.display = "none"
        }
    }

    
    
    
    
    /**
     * this method triggered after the HTML DOM object has been mounted by the super
     * it implemented in this class to support the following events for XUIObject:
     * _on_click: (XUIObject,event) => {}
     */
    
    async onMount() {
        //check for _on_click event definition
        const sthis = this
        if (sthis._on_click) {
            if (typeof sthis._on_click === 'function') {
                this.getDOMObject().addEventListener("click", (e) => { (<Function>sthis._on_click)(sthis,e) })
            }
            else if (typeof sthis._on_click === 'string') {
                this.getDOMObject().addEventListener("click", (e) => {sthis.run(sthis._id + " " + sthis._on_click) })
            }
        }

        super.onMount()
    }





    /**
     * triggers from Xpell main engine onFrame
     * @param {int} frameNumber 
     * 
     * object that extends XUIObject can override this method and call super.onFrame
     * to bubble the event to child objects 
     */
    async onFrame(frameNumber){
        if(this._data_source && !this._on_frame_skip_data_source) {
            if(XData.variables[this._data_source]) {
                const ph = "_$"
                if(this._format && this._format.indexOf(ph)>0) {
                    this.setText(this._format.replace(ph,<string>XData.variables[this._data_source]))
                } else {
                    this.setText(XData.variables[this._data_source])
                }
            }
            else if(XData.objects[this._data_source]) {
                //console.log("data source");
                const ob = XData.objects[this._data_source]
                if(this._format) {
                    const replace_at_plus_one = (str,index, character) => {
                        return str.substr(0, index) + character + str.substr(index +2);
                    };
                    let  trimmed = this._format.trim()

                    let index,start_index=0

                    //to do - optimization point = cache positions
                    while ((index = trimmed.indexOf("_$", start_index)) > -1) {
                        const f = trimmed.substr(index+2,1)
                        const val = ob[f].toFixed(2)
                        //console.log("v",val,val.toString().length)
                        trimmed = replace_at_plus_one(trimmed,index,val)
                        start_index = index + 2 + val.length ;
                    }
                    this.setText(trimmed)
                } else {
                    this.setText(ob.toString())
                }
            }
        }
        super.onFrame(frameNumber)
        //console.log(this._id + " frame " + frame_number)
    }
}

export default XUIObject