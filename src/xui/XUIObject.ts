
// import XUtils from "../XUtils"
// import XData from "../XData"
// import XObject, { IXObjectData } from "../XObject"
import { XUtils, _xd, XObject, XObjectData, _xem, XEventListenerOptions } from "../Core/Xpell"
// import { _xem ,XEventListenerOptions} from "../XEM/XEventManager";
import XUI from "./XUI";
// import * as _XC from "../XConst"
import _xuiobject_basic_nano_commands from "./XUINanoCommands"
const reservedWords = { _children: "child objects" }
const xpellObjectHtmlFieldsMapping: { [k: string]: string } = { "_id": "id", "css-class": "class", "animation": "xyz", "input-type": "type" };

/**
 *   ADD On Event support
 *  - override addEventListener to add html event listener if object exist
 *  - override removeEventListener to remove html event listener
 *  - check for events in getDOMObject and add them to the object
*/
export class XUIObject extends XObject {
    // [k:string]: string | null | [] | undefined | Function | boolean | {}
    _html_tag: string
    _html_ns?: string | null
    protected _dom_object: any
    _type: string  //[_SC.NODES.type]
    _html?: string | undefined
    _base_display?: string | undefined | null
    // text: string //depracted
    // _text?: string
    #_text: string = ""
    _children: XUIObject[];
    _visible: boolean
    _parent_element?: string //used for mount parent HTML element id
    _on_click?: Function | string
    _on_show?: Function | string
    _on_hide?: Function | string




    constructor(data: XObjectData, defaults: XObjectData, skipParse?: boolean) {
        super(data, defaults, true)
        this._html_tag = "div";
        this._html_ns = null
        this._dom_object = null;
        this._type = "view";
        this._html = "";
        this._children = [];
        this._visible = true
        this._xem_options = <XEventListenerOptions>{ _once: false, _support_html: true }
        this.addXporterDataIgnoreFields(["_dom_object", "_html", "_xem_options", "_on_click","#_text"])
        // this._base_display = "block"
        this.addNanoCommandPack(_xuiobject_basic_nano_commands)
        if(!skipParse && data) this.parse(data, reservedWords); 
    }




    /**
     * Dispose all object memory (destructor)
     */
    async dispose() {

        this._dom_object = undefined
        this._html = undefined
        this._base_display = undefined
        this.#_text = ""
        this._on_click = undefined
        this._on_show = undefined
        this._on_hide = undefined

        super.dispose()
    }




    /**
     * logs the object to the console
     */
    log() {
        let keys = Object.keys(this);
        keys.forEach(key => {
            if (this[key]) {
                console.log(key + ":" + this[key]);
            }
        });
        console.log(this.getHTML());
    }

    /**
     * Gets the HTML DOM object, if the object is not created yet it will be created
     * @returns the HTML DOM object
     */
    getDOMObject(): HTMLElement {
        if (!this._dom_object) {
            let dom_object = (this._html_ns)
                ? document.createElementNS(this._html_ns, this._html_tag)
                : document.createElement(this._html_tag)
            let fields = Object.keys(this);

            fields.forEach(field => {
                if (this[field] && this.hasOwnProperty(field)) {
                    let f_out = field;
                    if (xpellObjectHtmlFieldsMapping.hasOwnProperty(field)) {
                        f_out = xpellObjectHtmlFieldsMapping[field];
                    }
                    if (!f_out.startsWith("_")) {
                        dom_object.setAttribute(f_out, <string>this[field]);
                    }
                }
            });


            if (this["_text"] && (<string>this["_text"]).length > 0) {
                this.#_text = <string>this["_text"]
                dom_object.textContent = <string>this["_text"];
            }


            //--> change to support text content and children
            if (this._children.length > 0) {
                this._children.forEach((child: XUIObject) => {
                    const coo = child.getDOMObject()
                    dom_object.appendChild(coo);
                })
            }

            //check style visibility
            // (<HTMLElement>dom_object).style.display = (this._visible) ? "block" : "none"
            // if (this._visible) {
            if ((<HTMLElement>dom_object).style.display == "none") {
                this._visible = false
            }

            this._dom_object = dom_object;
            // this.onCreate()
        }
        return this._dom_object;
    }


    /**
     * DOM Getter 
     * @returns the HTML DOM object same as getDOMObject()
     */
    get dom() {
        return this.getDOMObject()
    }


    set _text(text: string) {
        this.#_text = text
        if(this._dom_object instanceof HTMLElement) {
            this._dom_object.textContent = text
        }
    }

    get _text() {
        return this.#_text
    }

    /**
     * Gets the HTML representation of the object
     * @returns the HTML representation of the object
     */
    getHTML() {
        const dom = this.getDOMObject()
        this._html = dom?.outerHTML;
        return this._html;
    }

    /**
     * Attach the object to HTML element
     * @param parentElementId 
     * @deprecated use "mount" function instead
     */
    attach(parentElementId: string) {
        document.getElementById(parentElementId)?.append(this.getDOMObject())
        this.onMount()
    }

    /**
     * Mount the object to HTML element
     * @param parentElementId 
     * 
     */
    mount(parentElementId: string) {
        const obj = document.getElementById(parentElementId)
        if (obj) {
            obj.appendChild(this.getDOMObject())
            this.onMount()
        }
    }


    /**
     * Append a child object to the XUIObject, if the object is not XUIObject it will be created
     * @param xObject - the child object to append can be XUIObject or XObjectData
     * @returns 
     */
    append(xObject: XUIObject | XObjectData | any) {
        if (!(xObject instanceof XUIObject)) {
            xObject = XUI.create(xObject)
        }
        //this._children.push(<XUIObject>xObject)
        super.append(xObject)
        if (this._dom_object instanceof HTMLElement) {

            this._dom_object.appendChild(xObject.dom)
            //promisify onMount
            xObject.onMount()
            // const dom = xObject.dom
            // xObject.mount(this._id)

        }
        else {

            return xObject
        }
    }



    /**
     * Sets the object text content
     * @param text - the text content
     * @deprecated use _text property instead (e.g. xuiObj._text = "Xpell rulz!")
     */
    setText(text: string) {
        this._text = text
    }

    /**
     * Sets the object CSS style
     * @param attr - the CSS attribute 
     * @param val - the CSS value
     * @example
     * xuiObj.setStyle("background-color","red")
     */
    setStyleAttribute(attr: string, val: string) {
        if (this._dom_object instanceof HTMLElement) {
            this._dom_object.style.setProperty(attr, val)
        }
    }

    /**
     * Adds a css class to the object
     * @param className - the css class name
     */
    addClass(className: string) {
        if (this._dom_object instanceof HTMLElement) {
            this._dom_object.classList.add(className)
        }
    }

    /**
     * Removes a css class from the object
     * @param className - the css class name
     */
    removeClass(className: string) {
        if (this._dom_object instanceof HTMLElement) {
            this._dom_object.classList.remove(className)
        }
    }

    /**
     * Toggles a css class on the object
     * @param className - the css class name
     */
    toggleClass(className: string) {
        if (this._dom_object instanceof HTMLElement) {
            this._dom_object.classList.toggle(className)
        }
    }


    /**
     * Replaces a css class on the object
     * @param oldClass class to be replaced
     * @param newClass new class to replace the old class
     */
    replaceClass(oldClass: string, newClass: string) {

        if (this._dom_object instanceof HTMLElement) {
            this._dom_object.classList.replace(oldClass, newClass)
        } else {
            this.class = newClass
        }
    }


    /**
     * This method is used to show the object and trigger the onShow event
     */
    show() {
        if (this._dom_object instanceof HTMLElement) {
            const disp = (this._base_display) ? this._base_display : "block"
            this._dom_object.style.display = disp
            this._visible = true
            this.onShow()
        }
    }

    /**
     * This method is used to hide the object and trigger the onHide event
     */

    hide() {

        if (this._dom_object instanceof HTMLElement) {
            if (!this._base_display) {
                const cs = getComputedStyle(this._dom_object).getPropertyValue("display")
                if (!cs || cs == "none") this._base_display = "block"
                else this._base_display = cs
            }
            this._visible = false
            this._dom_object.style.display = "none"
            this.onHide()
        }
    }

    /**
     * This method is used to toggle the object visibility
     */
    toggle() {
        if (this._visible) this.hide()
        else this.show()
    }


    click() {
        if (this._dom_object instanceof HTMLElement) {
            this._dom_object.click()
        }
    }



    /**
     * this method triggered after the HTML DOM object has been mounted by the super
     * it implemented in this class to support the following events for XUIObject:
     * _on_click: (XUIObject,event) => {}
     */

    async onMount() {
        if (!this._mounted) {
            try {
                // _base_display uses to show the element if it was hidden

                if (!this._base_display) {
                    const cs = getComputedStyle(this._dom_object).getPropertyValue("display")
                    if (!cs || cs == "none") this._base_display = "block"
                    else this._base_display = cs
                }
            } catch (error) {
                this._base_display = "block"
            }
            if (this._on_click) {

                if (typeof this._on_click === 'function') {
                    this.addEventListener("click", (e) => { (<Function>this._on_click)(this, e) })
                    // this.dom.addEventListener("click", (e) => { (<Function>this._on_click)(this,e) })
                }
            }

            await super.onMount()
            
        }

    }



    /**
     * this method triggered when the XUIObject is shown
     */
    async onShow() {
        if (this._on_show) {
            this.checkAndRunInternalFunction(this._on_show)
        } else if (this._on && this._on.show) {
            this.checkAndRunInternalFunction(this._on.show)
        } else if (this._once && this._once.show) {
            this.checkAndRunInternalFunction(this._once.show)
        }

        this._children.forEach((child: XObject) => {
            if (child.onShow && typeof child.onShow === 'function') {
                child.onShow()
            }
        })
    }

    /**
     * this method triggered when the XUIObject is hidden
     */
    async onHide() {
        if (this._on_hide) {
            this.checkAndRunInternalFunction(this._on_hide)
        } else if (this._on && this._on.hide) {
            this.checkAndRunInternalFunction(this._on.hide)
        } else if (this._once && this._once.hide) {
            this.checkAndRunInternalFunction(this._once.hide)
        }

        this._children.forEach((child: XObject) => {
            if (child.onHide && typeof child.onHide === 'function') {
                child.onHide()
            }
        })
    }

}

export default XUIObject

