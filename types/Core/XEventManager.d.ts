export type XEvent = {
    _id: number;
    _name: string;
    _data: any;
};
export type HTMLEventListenersIndex = {
    [id: string]: {
        _listener: Function;
        _event_name: string;
        _object?: any;
    };
};
export type XEventListenerOptions = {
    _once?: boolean;
    _support_html?: boolean;
};
/**
 * This interface define the listener callable function (provided with "on" method)
 */
export interface XEventListener {
    _id?: string;
    _callback?: Function;
    _options?: XEventListenerOptions;
}
/**
 * XEventDispatcher is the system event dispatcher and manager
 */
export declare class _XEventManager {
    _log_rules: {
        fire: any;
        register: boolean;
        remove: boolean;
    };
    protected _events: {
        [name: string]: Array<XEventListener>;
    };
    protected _listeners_to_event_index: {
        [listernerId: string]: string;
    };
    protected _html_event_listeners: HTMLEventListenersIndex;
    constructor();
    /**
     * This method listen to event name and register the listener function
     * @param eventName event name to listen to
     * @param listener listener function to be called when event fired
     * @returns listener id
     * @example
     *     // listen to event name "my-event" and display the event data to the console when fired
     *    _xem.on("my-event",(data)=>{
     *         console.log("XEM Event " + data)
     *    })
     */
    onEvent(eventName: string, listener: Function, options?: XEventListenerOptions, callObj?: any): string;
    /**
   * This method listen to event name and register the listener function
   * @param eventName event name to listen to
   * @param listener listener function to be called when event fired
   * @returns listener id
   * @example
   *     // listen to event name "my-event" and display the event data to the console when fired
   *    _xem.on("my-event",(data)=>{
   *         console.log("XEM Event " + data)
   *    })
   */
    on(eventName: string, listener: Function, options?: XEventListenerOptions, callObject?: any): string;
    /**
     * This method listen to event name and register the listener function
     * The listener will be removed after first fire
     * @param eventName event name to listen to
     * @param listener listener function to be called when event fired
     * @returns listener id
     */
    once(eventName: string, listener: Function, callObject?: any): string;
    /**
     * This method remove listener by listener id
     * @param listenerId listener id to remove
     */
    removeEvent(listenerId: string): void;
    /**
   *
   * @override
   * @param listenerId
   */
    remove(listenerId: string): void;
    /**
     *  This method is used to fire an event
     * @override
     * @param eventName - the name of the event
     * @param data - the data to pass to the event
     * @param supportHtmlEvents - if true the event will be fired as HTML event too
     */
    fire(eventName: string, data?: any, callObject?: any): Promise<void>;
}
export declare const XEventManager: _XEventManager;
export default XEventManager;
//# sourceMappingURL=XEventManager.d.ts.map