/**
 * XPell-logger
 */


 class XLoggerEngine {
    debug: boolean;

    constructor() {
        this.debug = true
    }


    log(){
        const d = new Date()
        const LOG_PREFIX = d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + ' ' + d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + d.getMilliseconds();
        // 1. Convert args to a normal array
        var args = Array.prototype.slice.call(arguments);
            
        // 2. Prepend log prefix log string
        args.unshift(LOG_PREFIX + "|");
            
        // 3. Pass along arguments to console.log
        console.log.apply(console, args);
    }
    
}

export const XLogger = new XLoggerEngine()
export default XLogger