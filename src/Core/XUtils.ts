//import { performance } from "perf_hooks";

import XCommand from "./XCommand";


// declare class performance{ 
//     declare function now()
// }


interface IXData {
    [k:string]: string | null | [] | undefined | Function | boolean | number | {}
}

export class XUtils {
    /**
     * create ignore list for parser to ignore spells words
     * @param list - list of reserved words (comma separated)
     */
    static createIgnoreList(list:string,reservedWords:{}) {
        let words = list.split(",");
        let outList:{[k:string]:string} = reservedWords;
        words.forEach(word => outList[word] = "");
        return outList;
    }


    /**
     * Generates GUID (Globally unique Identifier)
     * @returns {string} 
     */
    static guid() {
        let chars = '0123456789abcdef'.split('');
        let uuid:string[] = [], rnd = Math.random, r;
        uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
        uuid[14] = '4'; // version 4
        for (let i = 0; i < 36; i++) {
            if (!uuid[i]) {
                r = 0 | rnd() * 16;
                uuid[i] = chars[(i === 19) ? (r & 0x3) | 0x8 : r & 0xf];
            }
        }
        return uuid.join('');
    }

    /**
     * Merges XDataObject with Defaults object
     * @param data - data of the Xpell command
     * @param defaults - defaults object to merge with
     * @param force - add defaults values even if exists
     */
    static mergeDefaultsWithData(data:IXData, defaults:IXData,force?:boolean) {
        if (data) {
            if (!data["_id"]) {
                if(!data["id"]) {defaults["_id"] = XUtils.guid()}
                else {defaults["_id"] = data["id"]}
            }
            //selective assign
            
            let dkey = Object.keys(defaults);
            dkey.forEach(key => {
                if (!data.hasOwnProperty(key) || force) {
                    data[key] = <any>defaults[key];
                }
            })
        }
        else {
            data = <any>defaults
        }
    }


    /**
     * Encode string to Base-64 format
     * @param str string to encode
     * @returns {string}
     */
    static encode(str:string) {
        return btoa(encodeURIComponent(str));
    }

    /**
     * Decode Base64 String to text
     * @param str Base64 encoded string
     * @returns {string}
     */
    static decode( str:string ) {
        return decodeURIComponent(atob(str));
    }
    
    /**
     * Returns a random integer between min (inclusive) and max (inclusive).
     * The value is no lower than min (or the next integer greater than min
     * if min isn't an integer) and no greater than max (or the next integer
     * lower than max if max isn't an integer).
     * Using Math.round() will give you a non-uniform distribution!
     */
    static getRandomInt(min:number, max:number) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    
    /**
     * Extracts parameter from XCommand
     * @param xcmd - XCommand object 
     * @param paramName - The name of the parameter to extract
     * @param defaultValue - Default value if parameter is not found
     * @returns 
     */
    static  getParam (xcmd:XCommand, paramName:string,defaultValue:any = 0) {
        return (xcmd._params && xcmd._params[paramName]) ? xcmd._params[paramName] : defaultValue
    }

}



/**
 * FPS Calculator
 * @class FPSCalc
 */
export class FPSCalc  {
    #accumulatedFPS:number = 0  //accumulated FPS
    #historyMovingAvg:number =0//history moving average
    #lastTimestamp:number  = 0//timestamp



    /**
     * Calc FPS according to moving average formula
     * @returns Accumulated FPS value
     */
    calc() {
        
        const now:number = performance.now();
        const diff:number = now-this.#lastTimestamp
        this.#lastTimestamp = now
        this.#historyMovingAvg = .95 * this.#historyMovingAvg + .05 * diff //#stable FPS with moving avarage
        this.#accumulatedFPS = Math.floor((1 / this.#historyMovingAvg)*1000)
        return this.#accumulatedFPS
    }

   


    

}


export default XUtils