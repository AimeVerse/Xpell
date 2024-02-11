/*
 Web Wormholes Client - manages wormholes session with Wormholes server
 Author       : Tamir Fridman
 Date Created : 03/05/2022
 Copyright  Fridman Tamir  2022, all right reserved

 
 *      This program is free software; you can redistribute it and/or
 *		modify it under the terms of the GNU General Public License
 *		as published by the Free Software Foundation; either version
 *		3 of the License, or (at your option) any later version.
  */

//import WebSocket from WebSocket;

import {
    XData as _xd,
    XLogger as _xlog,
    _xem,
    XUtils as _xu
} from "../Core/Xpell"

export const WormholeEvents = {
    WormholeOpen: "wormhole-open",
    WormholeClose: "wormhole-close",
    ResponseDataArrived: "wh-data-res",
}




export enum MessageType {
    Text,
    JSON
}


interface WaitersPack {
    [waiterID: string]: CallableFunction
}


interface WormholeMessage {
    id: string,
    type: MessageType,
    data: string
}

export class WormholeInstance {
    _ws: null | WebSocket
    _ready: boolean
    _data_waiters: WaitersPack
    _log_rules: { [key:string]: boolean}
    _on_open?: CallableFunction

    constructor() {
        this._ws = null;
        this._ready = false
        this._data_waiters = {}
        this._log_rules = {
            _open: false,
            _connect: false,
            _disconnect: false,
            _send: false,
            _receive: false
        }
    }


    /**
     * Set the log rules for the wormhole
     */
    verbose(val: boolean) {
            
        this._log_rules ={
            _open: val,
            _connect: val,
            _disconnect: val,
            _send: val,
            _receive: val
        }
    }

    private createMessage(msg: object, type: MessageType = MessageType.JSON): WormholeMessage {
        const oData: string = this.stringify(msg)
        return {
            id: _xu.guid(),
            type: type,
            data: oData
        }
    }

    /**
     * Opens a Wormhole to the PAI-BOT on the server (client-to-server wormhole)
     * @param {*} url 
     */
    open(url: string) {

        try {

            this._ws = new WebSocket(url);
        } catch (ex) {
            _xlog.log(ex)
        }

        const sthis = this //strong this for anonymous function


        // this.listener = document.addEventListener(WormholeEvents.ResponseDataArrived, (e: any) => {
        //     const edata = JSON.parse(e.detail)
        //     sthis.dataWaiters[edata.data["eid"]]?.(edata.data)
        // })
        if(this._log_rules._open) _xlog.log("Wormhole is opening...");

        _xem.on(WormholeEvents.ResponseDataArrived, (e) => {
            const edata = e.sed
            sthis._data_waiters[edata["waiterID"]]?.(edata.data)
        })

        if (this._ws) {
            this._ws.onopen = async () => {
                this._ready = true
                if(this._log_rules._open) _xlog.log("Wormhole has been created");
                _xd._o[WormholeEvents.WormholeOpen] = true
                // let event = new CustomEvent("wormhole-open")
                // document.dispatchEvent(event)
                _xem.fire(WormholeEvents.WormholeOpen, {}, false)
                if (this._on_open)
                {
                    try {
                        this._on_open()
                    } catch (e) {
                        _xlog.error(e)
                    }
                }

            }


            this._ws.onmessage = async (evt) => {
                try {
                    let msg = JSON.parse(evt.data.toString())
                    let ddata = msg.data
                    try {
                        ddata = JSON.parse(msg.data)
                    } catch (e) { }
                    const sed = {
                        "waiterID": ddata["eid"],
                        data: ddata
                    }
                    _xem.fire(WormholeEvents.ResponseDataArrived, { sed: sed },false)
                    if(this._log_rules._receive) _xlog.log("Wormhole received message", ddata)

                } catch (e) {
                    _xlog.error(e);
                }

            };

            this._ws.onclose = async () => {
                this._ready = false
                if(this._log_rules._open) _xlog.log("Wormholer is closed...");
                _xd._o[WormholeEvents.WormholeOpen] = false
                _xem.fire(WormholeEvents.WormholeClose,{},false)
            };
        }
    }

    close() {
        this._ws?.close()
    }

    /**
     * sends the message to the server (asynchronous) and return the result in a callback function
     * @param message - the message to send
     * @param cb - Callback Function (data: string) => void
     * @param type - type of the message MessageType.JSON / MessageType.Text
     */
    send(message: any, cb: CallableFunction, type = MessageType.JSON) {
        if (this._ws) {
            let wormholeMessage = this.createMessage(message, type)
            

            if (!cb) {
                cb = (data: string) => {
                    _xlog.log("[Wormhole default callback] data ->", data)
                }
            }
            this._data_waiters[wormholeMessage.id] = cb
            try {
                this._ws.send(JSON.stringify(wormholeMessage))
                if(this._log_rules._send) _xlog.log("Wormhole sent message", wormholeMessage)
            } catch (ex) {
                _xlog.log("ERROR" + ex);

            }
        }
    }

    /**
     * Sends the message to the server and return the result as a response (synchronous) 
     * @param message - the message to send
     * @param checkXProtocol - check the result for XProtocol (True by default, if false the response will be return as is)
     */
    sendSync(message: any, checkXProtocol = true): Promise<WormholeMessage | any> {
        return new Promise((resolve, reject) => {
            Wormholes.send(message, (data:any) => {
                //new addition for xprotocol
                // data = data.data
                let res
                if (!data) {
                    res = "ERROR: No response from server"
                    reject(res)
                } else {
                    if (checkXProtocol) {
                        if (data["_ok"]) {
                            resolve(data["_result"])
                        } else {
                            reject(data["_result"])
                        }
                    } else {
                        resolve(data)
                    }
                }
            })
        })
    }

    private stringify(obj: object, esc = false): string {
        let no = JSON.stringify(obj)
        if (esc) { no = no.replace(/\"/g, "\\\"") }
        return no
    }


    onOpen(cb: CallableFunction) {
        if(cb && typeof cb === "function") {
            this._on_open = cb
        }
    }
    // sendWebMBlob(blob) {
    //     // Create a new FormData object
    //     const formData = new FormData();

    //     // Append the WebM blob to the FormData object
    //     formData.append('blob', blob, 'recording.webm');

    //     // Send the FormData object over the WebSocket
    //     if (this.ws) {
    //         // let wormholeMessage = this.createMessage(message, type)


    //         if (!cb) {
    //             cb = (data: string) => {
    //             }
    //         }
    //         this.dataWaiters[wormholeMessage.id] = cb
    //         try
    //         {
    //             this.ws.send(formData)
    //         } catch (ex) {
    //             console.error("ERROR" + ex);

    //         }
    //     }
    //   }

}

const Wormholes = new WormholeInstance()

export { Wormholes }

export default Wormholes


