import XObject, { IXObjectData } from "../XObject";
export declare class XUIObject extends XObject {
    [k: string]: string | null | [] | undefined | Function | boolean | {};
    _html_tag: string;
    _html_ns: string | null;
    private _dom_object;
    _type: string;
    _html: string | undefined;
    _base_display: string | undefined | null;
    text: string;
    _text: string;
    _data_source: string | null;
    _on_frame_skip_data_source: any;
    _format: string | null;
    _ignore: {
        [k: string]: string;
    };
    constructor(data: any, defaults: any, skipParse?: boolean);
    /**
     * Dispose all object memory (destructor)
     */
    dispose(): Promise<void>;
    /**
     * occurs on Xpell.init
     * @override
     */
    init(): void;
    log(): void;
    getDOMObject(): Element;
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
     * return the dom element
     * @deprecated
     */
    get DOMElementFromHTML(): HTMLElement;
    append(xObject: XUIObject | IXObjectData | any): void;
    setText(text: any): void;
    setStyle(attr: any, val: any): void;
    show(): void;
    hide(): void;
    /**
     * this method triggered after the HTML DOM object has been mounted by the super
     * it implemented in this class to support the following events for XUIObject:
     * _on_click: (XUIObject,event) => {}
     */
    onMount(): Promise<void>;
    /**
     * triggers from Xpell main engine onFrame
     * @param {int} frameNumber
     *
     * object that extends XUIObject can override this method and call super.onFrame
     * to bubble the event to child objects
     */
    onFrame(frameNumber: any): Promise<void>;
}
export default XUIObject;
