export declare const WormholeEvents: {
    WormholeOpen: string;
    WormholeClose: string;
    ResponseDataArrived: string;
};
export declare enum MessageType {
    Text = 0,
    JSON = 1
}
interface WaitersPack {
    [waiterID: string]: CallableFunction;
}
interface WormholeMessage {
    id: string;
    type: MessageType;
    data: string;
}
export declare class WormholeInstance {
    _ws: null | WebSocket;
    _ready: boolean;
    _data_waiters: WaitersPack;
    _log_rules: {
        [key: string]: boolean;
    };
    _on_open?: CallableFunction;
    constructor();
    /**
     * Set the log rules for the wormhole
     */
    set verbose(val: boolean);
    private createMessage;
    /**
     * Opens a Wormhole to the PAI-BOT on the server (client-to-server wormhole)
     * @param {*} url
     */
    open(url: string): void;
    close(): void;
    /**
     * sends the message to the server (asynchronous) and return the result in a callback function
     * @param message - the message to send
     * @param cb - Callback Function (data: string) => void
     * @param type - type of the message MessageType.JSON / MessageType.Text
     */
    send(message: any, cb: CallableFunction, type?: MessageType): void;
    /**
     * Sends the message to the server and return the result as a response (synchronous)
     * @param message - the message to send
     * @param checkXProtocol - check the result for XProtocol (True by default, if false the response will be return as is)
     */
    sendSync(message: any, checkXProtocol?: boolean): Promise<WormholeMessage | any>;
    private stringify;
    onOpen(cb: CallableFunction): void;
}
declare const Wormholes: WormholeInstance;
export { Wormholes };
export default Wormholes;
