/**
 * Xpell-logger
 */





export class XLoggerEngine {
    enabled: boolean = true
    showDate:boolean = false
    showTime:boolean = true

    constructor() {
    }

    private getTimeSignature() {
        const d = new Date()

        const getDate = () => {return (this.showDate) ? d.getDate() + '.' + d.getMonth() + '.' + d.getFullYear() + " ": "" }
        const getTime = () => {return (this.showTime) ?d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + "." + d.getMilliseconds() +"|": "" }
        return  getDate() + getTime()
    }

    log(message?: any, ...optionalParams: any[]) {
        if (this.enabled) {
            var args = Array.prototype.slice.call(arguments);
            args.unshift(this.getTimeSignature());
            console.log.apply(console, args);
        }
    }

    error(message?: any, ...optionalParams: any[]) {
        var args = Array.prototype.slice.call(arguments);
        args.unshift(this.getTimeSignature());
        console.error.apply(console, args);

    }

}

/**
 * 
 */
export const XLogger = new XLoggerEngine()
export default XLogger