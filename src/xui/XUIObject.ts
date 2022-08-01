
import XUtils from "../XUtils"
import XData from "../XData"
import XObject from "../XObject"
import * as _XC from "../XConst"

const reserved_words = {  }
const xpell_object_html_fields_mapping = { "_id": "id", "css-class": "class", "animation": "xyz", "input-type": "type" };



export class XUIObject extends XObject {
    _html_tag: string
    private _dom_object: HTMLElement | null
    _type:string  //[_SC.NODES.type]
    _html: string | undefined
    animation: boolean
    _base_display: string  = "block"
    text: string
    _data_source: string | null 
    _on_frame_skip_data_source: any
    _format: string | null
    


    constructor(data, defaults) {
        
        super(data,defaults)
        reserved_words[_XC.NODES.children] = "child objects"
        this._html_tag = "div";
        this._dom_object = null;
        this[_XC.NODES.type] = "view";
        this._html = "";
        this[_XC.NODES.children] = [];
        this.animation = true;
        this._ignore = reserved_words;
        this._base_display = "block"

        if (data) {
            if (data.hasOwnProperty("_ignore")) {
                this._ignore = XUtils.createIgnoreList(data["_ignore"],reserved_words)
            }
            this.parse(data, this._ignore);
        }
    }


    /**
     * occurs on Xpell.init
     * @override 
     */
    init() {
        
    }


    parse(data, ignore = reserved_words) {
        let cdata = Object.keys(data);
        cdata.forEach(field => {
            if (!ignore.hasOwnProperty(field) && data.hasOwnProperty(field)) {
                this[field] = data[field];
            }
        });
    }

    log() {
        let keys = Object.keys(this);
        keys.forEach(key => {
            if (this[key]) {
                console.log(key + ":" + this[key]);
            }
        });
        console.log(this.getHTML());
    }

    getDOMObject():HTMLElement  {
        if (!this._dom_object) {
            //console.log("creating " + this._html_tag);
            let dom_object = document.createElement(this._html_tag);
            let fields = Object.keys(this);

            fields.forEach(field => {
                if (this[field] && this.hasOwnProperty(field)) {
                    let f_out = field;
                    if (xpell_object_html_fields_mapping.hasOwnProperty(field)) {
                        f_out = xpell_object_html_fields_mapping[field];
                    }
                    if (!f_out.startsWith("_") && f_out !== "text") {
                        dom_object.setAttribute(f_out, this[field]);
                    }
                }
            });

            if (this["text"] && this["text"].length > 0) {
                dom_object.innerText = this["text"];
            } else if (this[_XC.NODES.children].length > 0) {
                this[_XC.NODES.children].forEach(child => {
                    const coo = child.getDOMObject()
                    dom_object.appendChild(coo);
                })
            }
            this._dom_object = dom_object;
            this.onCreate()
        }
        return this._dom_object;
    }

    getHTML() {
        const dom = this.getDOMObject()
        this._html = dom?.outerHTML;
        return this._html;
    }

   
    

  
    /**
     * return the do
     */
    get DOMElementFromHTML() {
        return document.getElementById(this._id)
    }

    append(XObject:XUIObject) {
        this[_XC.NODES.children].push(XObject);
        if (this._dom_object) {
            this.DOMElementFromHTML?.appendChild(XObject.getDOMObject())
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
        if(this._dom_object) {
            this._dom_object.style[attr]= val
        }
    }

    show() {
        if(this._dom_object) {
            this._dom_object.style.display = "show"
        }
    }

    hide() {
        if(this._dom_object) {
            this._base_display = this._dom_object.style.display
            this._dom_object.style.display = "none"
        }
    }

    /**
     * this method triggered after the HTML DOM object has been created and added to the parent element
     */
    async onCreate() {
        this[_XC.NODES.children].forEach(child => {
            if(child.onCreate && typeof child.onCreate === 'function') {
                child.onCreate()
            }})
    }

    async onMount() {
        this[_XC.NODES.children].forEach(child => {
            if(child.onMount && typeof child.onMount === 'function') {
                child.onMount()
            }})
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
                    this.setText(this._format.replace(ph,XData.variables[this._data_source]))
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
                        const val = ob[trimmed.substr(index+1,1)].toFixed(2)
                        trimmed = replace_at_plus_one(trimmed,index,val)
                        start_index = index + 1 + val.length;
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