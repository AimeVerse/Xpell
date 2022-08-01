import XCommand from "./XCommand"
import * as _XC from "./XConst"

/**
 * Xpell Parser
 */

export class XParser {


    private static html2XMap = {
            elements:{
                div: "view",
                a: "link",
                b:"xhtml",
                h1: "xhtml",h2: "xhtml",h3: "xhtml",h4: "xhtml",h5: "xhtml",p: "xhtml",small:"xhtml",aside:"xhtml",span:"xhtml",
                table:"xhtml",th:"xhtml",td:"xhtml",tr:"xhtml",thead:"xhtml",tbody:"xhtml",
                ul:"xhtml",li:"xhtml",ol:"xhtml",
                img: "image",
            },
            attributes:{
                id:"_id"
            }
    }


    static addHtml2SpellMapItem(htmlElement:string,xpellElement:string) {
        XParser.html2XMap.elements[htmlElement] = xpellElement
    }


    /**
     * convert text command to Xpell json command
     * @param {string} txt 
     */
    static parse(txt:string):XCommand {        
        const carr:string[] = txt.split(" ")
        let rv = new XCommand()
        
        rv["module"]= carr[0],
        rv["op"] =  carr[1],
        rv["params"] = {}
        
        if(carr.length>1){
            for (let i=2;i<carr.length;++i){
                const v = carr[i]
                const dl = v.indexOf(":")
                if(dl>-1){
                    const mc = v.split(":")
                    rv.params[mc[0]] = mc[1]
                }
                else
                {
                    rv.params[i-1] = carr[i]
                }
                
            }
        }
        
        return rv
    }


    static parseXpell(rawXpell) {
        let code = rawXpell.trim();

        let args:Array<string> = XParser.parseArguments(code);

        let cmd = new XCommand();
        cmd.module = args[0];
        cmd.op = args[1];
        cmd.params = {};


        // start params from index 2
        for (let i = 2; i < args.length; i++) {
            let paramStr:string = args[i];
            let delimiterIdx = paramStr.indexOf(':');
            let quotesIdx = paramStr.indexOf('"');
            let finalDelimiter = (quotesIdx < delimiterIdx) ? -1 : delimiterIdx;

            let paramName = (finalDelimiter === -1) ? i.toString() : paramStr.substring(0, delimiterIdx);
            let paramValue = XParser.fixArgumentValue(paramStr.substring(finalDelimiter + 1));

            if (paramName === "frame")
                cmd.executeOnFrame = paramValue;
            else if (paramName === "on")
                cmd.executeOnEvent = paramValue;
            else
                cmd.params[paramName] = paramValue
        }


        return cmd;
    }


    static parseArguments(code:string) {
        let args:Array<string> = [];

        while (code.length) {
            let argIndex = XParser.getNextArgumentIndex(code);
            if (argIndex == -1) {
                // error
                console.error('error: ' + code);
                break;
            }
            else {
                args.push(code.substring(0, argIndex));

                let oldCode = code; // this variable is used to check if loop in endless
                code = code.substring(argIndex).trim();

                if (code.length == oldCode.length) {
                    // error - while loop is in endless
                    console.error('error: while loop is in endless - leftovers: ' + code);
                    break;
                }

            }
        }
        return args;
    }

    static xpellify(XP2Json)  {
        const tkeys = Object.keys(XP2Json)
        let outputXpell:any = {[_XC.NODES.type]:tkeys[0]}
        outputXpell[_XC.NODES.children] = [] // child's xpells
        const firstObject = XP2Json[tkeys[0]]
        const foKeys = Object.keys(firstObject)
        
        foKeys.forEach(iKey => {
            if(iKey === "_attr") { Object.assign(outputXpell,firstObject[iKey]) }
            else {
                const lob ={}
                lob[iKey]=firstObject[iKey]
                
                outputXpell[_XC.NODES.children].push(XParser.xpellify(lob))
            }
        })
        return outputXpell
    }


    static xmlString2Xpell(xmlString) {
        const parser = new DOMParser();
        const xmlDoc = parser.parseFromString(xmlString,"text/xml");
        if(xmlDoc.childNodes.length>0) {
            return XParser.xml2Xpell(xmlDoc.childNodes[0])
        }
  
    }

    static xml2Xpell  (xmlNode)  {
        //Conversation map for elements and attributes
        const cMap = XParser.html2XMap
        let scanChildren = true
        let outputXpell = {}
        outputXpell[_XC.NODES.children] = []
        const root_name = xmlNode.nodeName
        const _html_tag_attr = xmlNode.nodeName
        outputXpell[_XC.NODES.type] = (cMap.elements[root_name]) ?cMap.elements[root_name] : root_name  //html element to xpell object name
        if(xmlNode.attributes) {
            for(let i=0;i<xmlNode.attributes.length;++i)  {
                const n = xmlNode.attributes[i]
                const attr_name = (cMap.attributes[n.name]) ?cMap.attributes[n.name] : n.name //replace html attribute to xpell attributes (id -> _id)
                outputXpell[attr_name] = n.value
            }
        }
        if (xmlNode?.firstChild?.nodeValue) {
            outputXpell["text"] = xmlNode?.firstChild.nodeValue.trim();
        }
        if(outputXpell[_XC.NODES.type] == "xhtml") {
            outputXpell["_html_tag"] = _html_tag_attr
        }
        else if(outputXpell[_XC.NODES.type] == "svg" ) {
            for(let i=0;i<xmlNode.childNodes.length;++i)  {
                const node = (xmlNode.childNodes[i])
                if(!node.nodeName.startsWith("#")) {
                    const str = new XMLSerializer().serializeToString(node)
                    console.log(str);
                    outputXpell["_svg_data"] =  str
                }
                
            }  
                
            
            scanChildren = false
        }
        if(scanChildren &&  xmlNode?.childNodes.length>0) {
            for(let i=0;i<xmlNode.childNodes.length;++i)  {
                const node = (xmlNode.childNodes[i])
                if(!node.nodeName.startsWith("#")) {
                    outputXpell[_XC.NODES.children].push(XParser.xml2Xpell(node))
                }
            }   
        }
        //console.log("output" , outputXpell);
        
        return outputXpell

    }

    static fixArgumentValue(arg) {
        let finalArg = "";
        let prevChar = "";
        for (var i = 0; i < arg.length; i++) {
            let char = arg.charAt(i);
            let addToFinal = true;

            if (char === '"' && prevChar !== "\\")
                addToFinal = false;

            if (addToFinal)
                finalArg += char;
            prevChar = char;
        }


        finalArg = finalArg.replace(/\\\"/g, '"');

        return finalArg;
    }


    /**
     * Get next argument from string
     * @param {String} str
     * @return {number} indexOf the end of the argument
     */
    static getNextArgumentIndex(str) {
        let idx = -1;
        let count = str.length;
        let zeroCount = count - 1;
        let inQuotes = false;
        let prevChar = "";
        for (let i = 0; i < count; i++) {
            let char = str.charAt(i);


            if (char === '"') {
                if (inQuotes) {
                    if (prevChar === '\\') {
                        // ignore
                    }
                    else {
                        // end of arguments
                        inQuotes = false;
                    }

                }
                else {
                    inQuotes = true;
                }
            }
            else if (char === ' ') {
                if (!inQuotes) {
                    // end of arguments
                    idx = i;
                    break;
                }
            }

            if (i === zeroCount) {
                idx = count;
                break;
            }


            prevChar = char;
            // argument is still processing
        }

        return idx;
    }
}

export default XParser
