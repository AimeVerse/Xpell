export type XCommandData = {
    _module: string;
    _object?: string;
    _op: string;
    _params?: {
        [k: string]: string | number | Function;
    };
};
/**
 * XCommand class - this command is being sent to the Xpell parser or every XModule/XObject for execution
 */
export declare class XCommand {
    /**
     * The XModule to handle to command
     */
    _module: string;
    /**
     * The XObject that should handle the command (optional - uses only to send XCommand to specific object)
     */
    _object?: string;
    /**
     * The command operation (op/method) to execute
     */
    _op: string;
    /**
     * command parameters array
     */
    _params?: {
        [k: string]: string | number | Function;
    };
    /**
     * XCommand create date timestamp
     */
    d: number;
    constructor(data?: XCommandData);
    /**
     * Gets th parameter value from the XCommand whether it has a name or just a position
     * There are 2 ways to send XCommand with parameters:
     *  1. <module> <op> <param-0> <param-1> <param-2>     // position is for this case
     *  2. <module> <op> param-name:param-value            // name is for this case
     * @param position the position of the parameter if no name is send
     * @param name the name of the parameter
     * @param defaultValue the default value if none above exists
     * @returns {any} the actual parameter value
     */
    getParam(position: number, name: string, defaultValue: any): any;
}
export default XCommand;
