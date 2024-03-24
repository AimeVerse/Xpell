import XUIObject from "./XUIObject";
import { IXObjectData, XObjectData, XObjectPack } from "../Core/Xpell";
export declare class XView extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XHeader extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XNavBar extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XForm extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XImage extends XUIObject {
    static xtype: string;
    constructor(data: IXObjectData);
}
export declare class XVideo extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XWebcam extends XUIObject {
    autoplay: boolean;
    muted: boolean;
    _video_constraints: {
        video: boolean;
        width: number;
        height: number;
    };
    constructor(data: IXObjectData);
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
    constructor(data: IXObjectData);
    setText(text: string): void;
}
export declare class XPassword extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XInput extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XTextArea extends XUIObject {
    constructor(data: IXObjectData);
    getText(): string | number | boolean | {} | Function | [];
}
export declare class XLink extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XLabel extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XHTML extends XUIObject {
    constructor(data: IXObjectData);
}
export declare class XSVG extends XUIObject {
    private _svg_data;
    constructor(data: XObjectData);
}
export declare class XSVGCircle extends XUIObject {
    private _svg_data;
    constructor(data: XObjectData);
}
export declare class XSVGEllipse extends XUIObject {
    private _svg_data;
    constructor(data: XObjectData);
}
export declare class XSVGRect extends XUIObject {
    private _svg_data;
    constructor(data: XObjectData);
}
export declare class XSVGLine extends XUIObject {
    private _svg_data;
    constructor(data: XObjectData);
}
export declare class XSVGPolyline extends XUIObject {
    private _svg_data;
    constructor(data: XObjectData);
}
export declare class XSVGPolygon extends XUIObject {
    private _svg_data;
    constructor(data: XObjectData);
}
export declare class XSVGPath extends XUIObject {
    private _svg_data;
    constructor(data: XObjectData);
}
export declare class XButton extends XUIObject {
    constructor(data: XObjectData);
    setOnclick(fun: CallableFunction): void;
}
export declare class XList extends XUIObject {
    _items: any;
    constructor(data: IXObjectData);
}
export declare class XUIObjects extends XObjectPack {
    static getObjects(): {
        view: typeof XView;
        div: typeof XView;
        label: typeof XLabel;
        link: typeof XLink;
        button: typeof XButton;
        text: typeof XTextField;
        password: typeof XPassword;
        input: typeof XInput;
        textarea: typeof XTextArea;
        video: typeof XVideo;
        image: typeof XImage;
        list: typeof XList;
        form: typeof XForm;
        webcam: typeof XWebcam;
        xhtml: typeof XHTML;
        svg: typeof XSVG;
        circle: typeof XSVGCircle;
        rect: typeof XSVGRect;
        ellipse: typeof XSVGEllipse;
        line: typeof XSVGLine;
        polyline: typeof XSVGPolyline;
        polygon: typeof XSVGPolygon;
        path: typeof XSVGPath;
    };
}
export default XUIObjects;
