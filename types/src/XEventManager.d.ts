export declare const XEventList: {
    ENGINE_INIT: string;
    app_loaded: string;
    vm_loaded: string;
    engine3d_init: string;
};
declare class XEventManager {
    /**
     * creates and fire event
     */
    static fire(type_arg: any, options?: any): void;
    static fireXpellEvent(xevent: any): void;
}
declare class XEvent extends CustomEvent<XEvent> {
    constructor(type_arg: any, options?: any);
    fire(): Promise<void>;
}
export default XEventManager;
export { XEvent, XEventManager };
