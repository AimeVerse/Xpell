import XCommand from "./XCommand";
/**
 * Xpell Parser - Parse XML, HTML, Raw Text & Json to Xpell Command
 */
export declare class XParser {
    private static html2XMap;
    /**
     * Adds HTML-Xpell Mapping item
     * @param htmlElement HTML element to change from
     * @param xpellElement Xpell element to change to
     */
    static addHtml2XpellMapItem(htmlElement: string, xpellElement: string): void;
    /**
     * convert text command to Xpell json command
     * @param {string} txt
     */
    static parse(txt: string, module?: string): XCommand;
    /**
     * Convert raw Xpell command (JSON) to XCommand
     * @param rawXpell JSON of Xpell command
     * @returns {XCommand}
     */
    static parseXpell(rawXpell: any): XCommand;
    /**
     * Parse CLI arguments
     * @param code arguments
     * @returns Array<string>
     */
    static parseArguments(code: string): Array<string>;
    /**
     * Covent Xpell2 (XP2) Json to Xpell JSON
     * @param XP2Json Xpell 2 JSON
     * @returns
     */
    static xpellify(XP2Json: any): any;
    /**
     * Converts XML/HTML string to XCommand
     * @param xmlString XML string
     * @returns
     */
    static xmlString2Xpell(xmlString: any): {};
    /**
     * Converts XML/HTML Document to Xpell JSON
     * @param xmlNode XML Document Node
     * @param forceXhtml force Xpell XHTML for every unknown object
     * @returns {} Xpell JSON
     */
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
