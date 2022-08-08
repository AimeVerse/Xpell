//import { performance } from "perf_hooks";


// declare class performance{ 
//     declare function now()
// }

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

    static mergeDefaultsWithData(data:{[k:string]:string | null | [] | undefined | Function}, defaults:{[k:string]:string | null | [] | undefined | Function}) {
        if (data) {
            if (!data["_id"]) {
                if(!data["id"]) {defaults["_id"] = XUtils.guid()}
                else {defaults["_id"] = data["id"]}
            }
            //selective assign
            let dkey = Object.keys(defaults);
            dkey.forEach(key => {
                if (!data.hasOwnProperty(key)) {
                    data[key] = defaults[key];
                }
            })
        }
        else {
            data = defaults
        }
    }

    


    static deg2Rad(degrees:number) {
        const pi = Math.PI;
        return degrees * (pi / 180);
    }

    static encode(str:string) {
        return btoa(encodeURIComponent(str));
    }

    static decode( str:string ) {
        return decodeURIComponent(atob(str));
    }
    

}




export class FPSCalc  {
    #accumulatedFPS:number = 0  //accumulated FPS
    #his_mavg:number = 0//history moving average
    #lastTimestamp:number  = 0//timestamp



    calc() {
        
        const now:number = performance.now();
        const diff:number = now-this.#lastTimestamp
        this.#lastTimestamp = now
        
        this.#his_mavg = .9 * this.#his_mavg + .1 * diff //#stable FPS with moving avarage
        this.#accumulatedFPS = Math.floor((1 / this.#his_mavg)*1000)
        return this.#accumulatedFPS
    }

}


export default XUtils