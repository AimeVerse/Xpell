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
    static replaceSpacesInQuotes(inputString: string, replaceWith?: string): string;
    static parseXpellCommand(command: string, module?: string): {
        _module: string | undefined;
        _op: string | undefined;
        _params: any;
    };
    /**
     * Convert raw Xpell command (JSON) to XCommand
     * @param rawXpell JSON of Xpell command
     * @returns {XCommand}
     * @deprecated
     */
    /**
     * Parse CLI arguments
     * @param code arguments
     * @returns Array<string>
     * @deprecated
     */
    /**
     * Covent Xpell2 (XP2) Json to Xpell JSON
     * @param XP2Json Xpell 2 JSON
     * @returns
     * @deprecated
     */
    static xpellify(XP2Json: {
        [k: string]: any;
    }): any;
    /**
     * Converts XML/HTML string to XCommand
     * @param xmlString XML string
     * @returns
     */
    static xmlString2Xpell(xmlString: string): {};
    /**
     * Converts XML/HTML Document to Xpell JSON
     * @param xmlNode XML Document Node
     * @param forceXhtml force Xpell XHTML for every unknown object
     * @returns {} Xpell JSON
     */
    static xml2Xpell(xmlNode: any, forceXhtml?: boolean): {};
}
export default XParser;
//# sourceMappingURL=XParser.d.ts.map