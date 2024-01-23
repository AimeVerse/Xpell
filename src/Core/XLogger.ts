/**
 * Xpell-logger
 */




/**
 * @class XLoggerEngine Xpell Logger engine
 */
export class _XLogger  {
    /**
     * Enable logger activity if false no logs will be displayed
     */
    enabled: boolean = true
    /**
     * Show the date in every log message
     */
    showDate:boolean = false
    /**
     * Show the Time in every log message
     */
    showTime:boolean = true

    constructor() {
    }

    /**
     * Generates the log output date/time signature (affected by showDate & showTime properties)
     * @returns {string}
     */
    private getLogDateTimeSignature():string {
        const d = new Date()

        const getDate = () => {return (this.showDate) ? d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + " ": "" }
        const getTime = () => {return (this.showTime) ?d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + "." + d.getMilliseconds() +"|": "" }
        return  getDate() + getTime()
    }

    /**
     * Log a message to the output log (console)
     * @param message - message to present
     * @param optionalParams 
     */
    log(message?: any, ...optionalParams: any[]) {
        if (this.enabled) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(this.getLogDateTimeSignature());
            console.log.apply(console, args);
        }
    }

    /**
     * Log an error message to the output log (console)
     * @param message - message to present
     * @param optionalParams 
     */
    error(message?: any, ...optionalParams: any[]) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(this.getLogDateTimeSignature());
        console.error.apply(console, args);

    }

}

/**
 * 
 */
export const XLogger = new _XLogger()
export default XLogger
export {XLogger as _xlog}