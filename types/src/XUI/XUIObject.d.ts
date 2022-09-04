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
    _data_source: string | null;
    _on_frame_skip_data_source: any;
    _format: string | null;
    _ignore: {
        [k: string]: string;
    };
    constructor(data: any, defaults: any);
    /**
     * occurs on Xpell.init
     * @override
     */
    init(): void;
    log(): void;
    getDOMObject(): Element;
    getHTML(): string;
    attach(parentElementId: string): void;
    /**
     * return the do
     */
    get DOMElementFromHTML(): HTMLElement;
    append(xObject: XUIObject | IXObjectData | any): void;
    setText(text: any): void;
    setStyle(attr: any, val: any): void;
    show(): void;
    hide(): void;
    /**
     * this method triggered after the HTML DOM object has been created and added to the parent element
     */
    onCreate(): Promise<void>;
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
