export declare class XUtils {
    /**
     * create ignore list for parser to ignore spells words
     * @param list - list of reserved words (comma separated)
     */
    static createIgnoreList(list: string, reservedWords: {}): {
        [k: string]: string;
    };
    static guid(): string;
    static mergeDefaultsWithData(data: {
        [k: string]: string | null | [] | undefined | Function;
    }, defaults: {
        [k: string]: string | null | [] | undefined | Function | {};
    }, force?: boolean): void;
    static deg2Rad(degrees: number): number;
    static encode(str: string): string;
    static decode(str: string): string;
}
export declare class FPSCalc {
    #private;
    calc(): number;
}
export default XUtils;
