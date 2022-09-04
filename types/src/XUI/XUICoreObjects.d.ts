import XUIObject from "./XUIObject";
import { IXObjectData, XObjectPack } from "../XObject";
export declare class XView extends XUIObject {
    constructor(data: any);
}
export declare class XHeader extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XNavBar extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XForm extends XUIObject {
    constructor(data: any);
}
export declare class XImage extends XUIObject {
    constructor(data: any);
}
export declare class XVideo extends XUIObject {
    constructor(data: any);
}
export declare class XWebcam extends XUIObject {
    autoplay: boolean;
    muted: boolean;
    _video_constraints: {
        video: boolean;
        width: number;
        height: number;
    };
    constructor(data: any);
    /**
     * this method checks if the browser has "getMedia" support for webcam & mic
     * @returns boolean
     */
    isAvailable(): boolean;
    setSource(video_elem: any): void;
    get isPlaying(): boolean;
    pause(): Promise<void>;
}
export declare class XTextField extends XUIObject {
    constructor(data: any);
}
export declare class XInput extends XUIObject {
    constructor(data: any);
}
export declare class XTextArea extends XUIObject {
    constructor(data: any);
    getText(): string;
}
export declare class XLink extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XLabel extends XUIObject {
    constructor(data: any);
}
export declare class XHTML extends XUIObject {
    constructor(data: any);
}
export declare class XSVG extends XUIObject {
    private _svg_data;
    constructor(data: any);
}
export declare class XButton extends XUIObject {
    onClick: CallableFunction;
    constructor(data: any);
    setOnclick(fun: CallableFunction): void;
}
export declare class XList extends XUIObject {
    _items: any;
    constructor(data: any);
}
export declare class XUIObjects extends XObjectPack {
    static getObjects(): {
        view: typeof XView;
        label: typeof XLabel;
        link: typeof XLink;
        button: typeof XButton;
        text: typeof XTextField;
        input: typeof XInput;
        textarea: typeof XTextArea;
        video: typeof XVideo;
        image: typeof XImage;
        list: typeof XList;
        form: typeof XForm;
        webcam: typeof XWebcam;
        xhtml: typeof XHTML;
        svg: typeof XSVG;
    };
}
export default XUIObjects;
