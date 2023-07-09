/**
 * This is an event manager for Xpell web version with the following additions to Xpell core event manager:
 * -  HTML Events support - fire and listen to HTML events in addition to Xpell events
 * @file xeventmanager.ts
 * 
 */


import {_XEventManager ,XEventListener} from "xpell-core";



export type XEventListenerOptions =  {
    _once?: boolean,
    _support_html?: boolean
    _instance?:_XEventManager
}

export type HTMLEventListenersIndex = {
    [id:string]: {
        _listener: Function
        _event_name : string
    }
}

export class _XEventManager_WEB extends _XEventManager {
    
    protected _html_event_listeners:HTMLEventListenersIndex = {}
    
    constructor() {
        super()
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
    on(eventName: string, listener: XEventListener, options:XEventListenerOptions = {
        _once:false,
        _support_html:true
    }): string {
        // console.log("on " + eventName  ,options._once)
        const id = super.on(eventName, listener, options)   

        if(options && options._support_html){ 
            
            const htmlListener:EventListener  = (e:Event) => { 
                //listener(e) 
                // console.log(e);
                
                const dout = ( e instanceof CustomEvent) ? e.detail : e
                this.fire(eventName,dout,false)
            }
            document.addEventListener(eventName, htmlListener)
            this._html_event_listeners[id] = {
                _event_name: eventName,
                _listener: htmlListener
            }            
            // console.log(this._html_event_listeners[id]);
            
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
    once(eventName: string, listener: XEventListener,htmlEvent = true) {
        // console.log("once " + eventName);
        
        return this.on(eventName,listener,{_once:true,_support_html:htmlEvent})
    }



    /**
     * 
     * @override    
     * @param listenerId 
     */
    remove(listenerId: string): void {
        // console.log("remove",JSON.stringify(this._events))
        
        super.remove(listenerId)
        if(this._html_event_listeners[listenerId]){
            // console.log("remove html",listenerId);
            
            const eventName = this._html_event_listeners[listenerId]._event_name
            const listener = this._html_event_listeners[listenerId]._listener
            // console.log("remove html",eventName,listener);
            
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
    async fire(eventName: string, data?: any,supportHtmlEvents = true) {
        // super.fire(eventName, data)
        if (this._events[eventName]) {
            const eventsToRemove:Array<string> = []
            // console.log(this._events[eventName]);
            if(supportHtmlEvents) document.dispatchEvent(new CustomEvent(eventName, { detail: data }))
            this._events[eventName].forEach((listener) => {
                // console.log("fire " + eventName,listener);
                
                if(!supportHtmlEvents) listener(data)
                if(listener._options && listener._options._once && listener._id){
                    // console.log("remove once",listener._id,listener._options,listener._options._once);
                    
                    eventsToRemove.push(listener._id)
                }
            });
            
            
            eventsToRemove.forEach((listenerId)=>this.remove(listenerId))
        }
        
    }

}

export const XEventManager = new _XEventManager_WEB()

export default XEventManager
export {XEventManager as _xem}
