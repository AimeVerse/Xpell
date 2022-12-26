/**
 * XData (Xpell Global shared Variables & Objects)
 */
export declare class XDataSource {
    objects: {};
    variables: {
        [k: string]: string | number;
    };
    constructor();
}
/**
 * @property
 */
export declare const XData: XDataSource;
export default XData;
