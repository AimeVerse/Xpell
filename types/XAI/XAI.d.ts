/**
 * XAI - Xpell AI Module
 * @description Universal User Interface (UI) HTML Engine  for Javascript supporting devices & browsers
 * @author Tamir Fridman <fridman.tamir@gmail.com>
 *
 */
import { XModule, XModuleData } from "../Core/Xpell";
import { XAIObjects } from "./XAICoreObjects";
export declare class XAIModule extends XModule {
    /**
     * @fires "xai-loaded" event
     * @param data module data
     */
    constructor(data: XModuleData);
}
export declare const XAI: XAIModule;
export default XAI;
export { XAIObjects };
//# sourceMappingURL=XAI.d.ts.map