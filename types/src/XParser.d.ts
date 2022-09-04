import XCommand from "./XCommand";
/**
 * Xpell Parser
 */
export declare class XParser {
    private static html2XMap;
    static addHtml2XpellMapItem(htmlElement: string, xpellElement: string): void;
    /**
     * convert text command to Xpell json command
     * @param {string} txt
     */
    static parse(txt: string): XCommand;
    static parseXpell(rawXpell: any): XCommand;
    static parseArguments(code: string): string[];
    static xpellify(XP2Json: any): any;
    static xmlString2Xpell(xmlString: any): {};
    static xml2Xpell(xmlNode: any, forceXhtml?: any): {};
    static fixArgumentValue(arg: any): string;
    /**
     * Get next argument from string
     * @param {String} str
     * @return {number} indexOf the end of the argument
     */
    static getNextArgumentIndex(str: any): number;
}
export default XParser;
