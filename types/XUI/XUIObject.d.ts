/**
 * XUIObject - XUI Object is the base class for all XUI objects
 * @class XUIObject
 * @extends XObject
 * @author Tamir Fridman
 * @since  22/07/2022
 * @copyright Aime Technologies 2022, all right reserved
 */
import { XObject, XObjectData } from "../Core/Xpell";
/**
 *   ADD On Event support
 *  - override addEventListener to add html event listener if object exist
 *  - override removeEventListener to remove html event listener
 *  - check for events in getDOMObject and add them to the object
*/
export declare class XUIObject extends XObject {
    #private;
    _html_tag: string;
    _html_ns?: string | null;
    protected _dom_object: any;
    _type: string;
    _html?: string | undefined;
    _base_display?: string | undefined | null;
    _children: XUIObject[];
    _visible: boolean;
    _parent_element?: string;
    _on_click?: Function | string;
    _on_show?: Function | string;
    _on_hide?: Function | string;
    _on_show_animation?: string;
    _on_hide_animation?: string;
    constructor(data: XObjectData, defaults: XObjectData, skipParse?: boolean);
    /**
     * Dispose all object memory (destructor)
     */
    dispose(): Promise<void>;
    /**
     * logs the object to the console
     */
    log(): void;
    /**
     * Gets the HTML DOM object, if the object is not created yet it will be created
     * @returns the HTML DOM object
     */
    getDOMObject(): HTMLElement;
    /**
     * DOM Getter
     * @returns the HTML DOM object same as getDOMObject()
     */
    get dom(): HTMLElement;
    set _text(text: string);
    get _text(): string;
    /**
     * Gets the HTML representation of the object
     * @returns the HTML representation of the object
     */
    getHTML(): string;
    /**
     * Attach the object to HTML element
     * @param parentElementId
     * @deprecated use "mount" function instead
     */
    attach(parentElementId: string): void;
    /**
     * Mount the object to HTML element
     * @param parentElementId
     *
     */
    mount(parentElementId: string): void;
    /**
     * Append a child object to the XUIObject, if the object is not XUIObject it will be created
     * @param xObject - the child object to append can be XUIObject or XObjectData
     * @returns
     */
    append(xObject: XUIObject | XObjectData | any): any;
    /**
     * Sets the object text content
     * @param text - the text content
     * @deprecated use _text property instead (e.g. xuiObj._text = "Xpell rulz!")
     */
    setText(text: string): void;
    /**
     * Sets the object CSS style
     * @param attr - the CSS attribute
     * @param val - the CSS value
     * @example
     * xuiObj.setStyle("background-color","red")
     */
    setStyleAttribute(attr: string, val: string): void;
    /**
     * Adds a css class to the object
     * @param className - the css class name
     */
    addClass(className: string): void;
    /**
     * Removes a css class from the object
     * @param className - the css class name
     */
    removeClass(className: string): void;
    /**
     * Toggles a css class on the object
     * @param className - the css class name
     */
    toggleClass(className: string): void;
    /**
     * Replaces a css class on the object
     * @param oldClass class to be replaced
     * @param newClass new class to replace the old class
     */
    replaceClass(oldClass: string, newClass: string): void;
    /**
     * This method is used to show the object and trigger the onShow event
     */
    show(): void;
    /**
     * This method is used to hide the object and trigger the onHide event
     */
    hide(): void;
    animate(animation: string, infinite?: boolean): Promise<unknown>;
    stopAnimation(): void;
    /**
     * This method is used to toggle the object visibility
     */
    toggle(): void;
    click(): void;
    /**
     * this method triggered after the HTML DOM object has been mounted by the super
     * it implemented in this class to support the following events for XUIObject:
     * _on_click: (XUIObject,event) => {}
     */
    onMount(): Promise<void>;
    /**
     * this method triggered when the XUIObject is shown
     */
    onShow(): Promise<void>;
    /**
     * this method triggered when the XUIObject is hidden
     */
    onHide(): Promise<void>;
}
export default XUIObject;
//# sourceMappingURL=XUIObject.d.ts.map