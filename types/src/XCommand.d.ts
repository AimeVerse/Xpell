/**
 * @class XCommand
 */
export declare class XCommand {
    id: string;
    module: string;
    op: string;
    executeOnFrame: string | number;
    executeOnEvent: string;
    dateCreated: number;
    params: {};
    constructor();
}
export default XCommand;
