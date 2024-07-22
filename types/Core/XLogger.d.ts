/**
 * Xpell-logger
 */
/**
 * @class XLoggerEngine Xpell Logger engine
 */
export declare class _XLogger {
    /**
     * Enable logger activity if false no logs will be displayed
     */
    enabled: boolean;
    /**
     * Show the date in every log message
     */
    showDate: boolean;
    /**
     * Show the Time in every log message
     */
    showTime: boolean;
    constructor();
    /**
     * Generates the log output date/time signature (affected by showDate & showTime properties)
     * @returns {string}
     */
    private getLogDateTimeSignature;
    /**
     * Log a message to the output log (console)
     * @param message - message to present
     * @param optionalParams
     */
    log(message?: any, ...optionalParams: any[]): void;
    /**
     * Log an error message to the output log (console)
     * @param message - message to present
     * @param optionalParams
     */
    error(message?: any, ...optionalParams: any[]): void;
}
/**
 *
 */
export declare const XLogger: _XLogger;
export default XLogger;
export { XLogger as _xlog };
//# sourceMappingURL=XLogger.d.ts.map