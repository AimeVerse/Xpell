/**
 * XEventManager (_xem) is Xpell event system manager.
 * This engine enables event dispatching and listening
 * Usage: 
 * 
 * 1.Event Listen
 *      // listen to event name "my-event" and display the event data to the console when fired
 *      _xem.on("my-event",(eventName,data)=>{
 *          console.log("XEM Event " + eventName,data)
 *      })
 * 
 * 2. Event Fire
 *      //fire (trigger) event name "my-event" and simple object as data
 *      _xem.fire("my-event",{_data_param:"my data"})
 */
import { _xlog } from "./XLogger"
import { XUtils as _xu } from "./XUtils"



export type XEvent = {
    _id: number
    _name: string
    _data: any,
}


// export type XEventListenerOptions =  {
//     _once?: boolean
//     _instance?: _XEventManager
// }

export type HTMLEventListenersIndex = {
    [id: string]: {
        _listener: Function
        _event_name: string
    }
}

export type XEventListenerOptions = {
    _once?: boolean,
    _support_html?: boolean
    // _instance?: _XEventManager,
    // _object?: any
}

/**
 * This interface define the listener callable function (provided with "on" method)
 */
export interface XEventListener {
    _id?: string
    (data: any): void
    _options?: XEventListenerOptions
}

/**
 * XEventDispatcher is the system event dispatcher and manager
 */
export class _XEventManager {
    _log_rules: {
        fire: any
        register: boolean,
        remove: boolean,

    } = {
            register: false,
            remove: false,
            fire: false
        }

    //events dictionary object and listeners list
    protected _events: { [name: string]: Array<XEventListener> }
    protected _listeners_to_event_index: { [listernerId: string]: string } = {}
    protected _html_event_listeners: HTMLEventListenersIndex = {}

    constructor() {
        this._events = {}
    }

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
    onEvent(eventName: string, listener: XEventListener, options?: XEventListenerOptions): string {
        if (!this._events[eventName]) {
            this._events[eventName] = [];
        }
        this._events[eventName].push(listener)
        listener._id = _xu.guid()
        listener._options = options
        this._listeners_to_event_index[listener._id] = eventName
        if (this._log_rules.register) _xlog.log("XEM Register " + eventName, listener._id)
        return listener._id
    }

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
    on(eventName: string, listener: XEventListener, options: XEventListenerOptions = {
        _once: false,
        _support_html: true
    },callObject:any = null): string {
        const id = this.onEvent(eventName, listener, options)
        
        if (options && options._support_html) {

            const htmlListener: EventListener = (e: Event) => {
                const dout = (e instanceof CustomEvent) ? e.detail : e
                this.fire(eventName, dout, false /*prevent recursive fire*/)
            }
            if(callObject){
                callObject.dom.addEventListener(eventName, htmlListener)
            } else {
                document.addEventListener(eventName, htmlListener)
            }
            this._html_event_listeners[id] = {
                _event_name: eventName,
                _listener: htmlListener
            }

        }
        return id
    }

    /**
     * This method listen to event name and register the listener function
     * The listener will be removed after first fire
     * @param eventName event name to listen to
     * @param listener listener function to be called when event fired
     * @returns listener id
     */
    once(eventName: string, listener: XEventListener, htmlEvent = true,callObject:any = null) {
        return this.on(eventName, listener, { _once: true, _support_html: htmlEvent },callObject)
    }

    /**
     * This method remove listener by listener id
     * @param listenerId listener id to remove
     */
    removeEvent(listenerId: string) {
        if (this._listeners_to_event_index[listenerId]) {
            const eventName = this._listeners_to_event_index[listenerId]
            this._events[eventName].forEach((listener, index) => {
                if (listener._id == listenerId) {
                    this._events[eventName].splice(index, 1)
                }
            })
            delete this._listeners_to_event_index[listenerId]
            if (this._log_rules.remove) _xlog.log("XEM Remove " + eventName, listenerId)
        }
    }

    /**
   * 
   * @override    
   * @param listenerId 
   */
    remove(listenerId: string): void {
        this.removeEvent(listenerId)
        if (this._html_event_listeners[listenerId]) {

            const eventName = this._html_event_listeners[listenerId]._event_name
            const listener = this._html_event_listeners[listenerId]._listener

            document.removeEventListener(eventName, <any>listener)
        }
    }


    /**
     *  This method is used to fire an event
     * @override
     * @param eventName - the name of the event
     * @param data - the data to pass to the event
     * @param supportHtmlEvents - if true the event will be fired as HTML event too
     */
    async fire(eventName: string, data?: any, supportHtmlEvents = true) {
        if (this._events[eventName]) {
            const eventsToRemove: Array<string> = []
            if (supportHtmlEvents) {
                document.dispatchEvent(new CustomEvent(eventName, { detail: data }))
                if(this._log_rules.fire) _xlog.log("XEM Fire HTML Event:" + eventName, data)
            }
            this._events[eventName].forEach((listener) => {
                if (!supportHtmlEvents) {
                    if(this._log_rules.fire) _xlog.log("XEM Fire Xpell Event:" + eventName, data)
                    listener(data)
                }
                if (listener._options && listener._options._once && listener._id) {
                    eventsToRemove.push(listener._id)
                }
            });
            eventsToRemove.forEach((listenerId) => this.remove(listenerId))
        }

    }




}


export const XEventManager = new _XEventManager()

export default XEventManager


