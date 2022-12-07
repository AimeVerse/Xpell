import { XUI } from "./XUI"
import XUIObject from "./XUIObject"
import XData from "../XData"

const vStyle =  `position:absolute;top:0;left:0;width:100vw;height:40px;text-align:left;padding:10px;color:white;background-color:black`

export class TopBar extends XUIObject {    
    constructor(data) {
        const defaults = {
            _type:"top-bar",
            _html_tag:"div",
            style:vStyle,
        }
        super(data,defaults);


        const myLabel = XUI.create({
            _type:"label",
            _id:"top-bar-label",
            text:"Xpell Dashboard"
        })
        this.append(myLabel)

        const fpsLabel = XUI.create({
            _type:"label",
            _id:"fps-label",
            _data_source:"fps",
            _format:"FPS _$",
            style:"display:inline;margin-left:20px"
        })
        this.append(fpsLabel)

        const frameLabel = XUI.create({
            _type:"label",
            _id:"frame-label",
            _data_source:"frame-number",
            _format:"Frame _$",
            style:"display:inline;margin-left:20px"
        })
        this.append(frameLabel)
        
        const pointerLabel = XUI.create({
            _type:"label",
            _id:"pointer-label",
            _data_source:"joystick-position",
            style:"display:inline;margin-left:20px",
        })
        this.append(pointerLabel)
        
    }


    /**
     * sample override onFrame to add the time to XData
     * @param frameNumber 
     */
    async onFrame (frameNumber:number) {
        //console.log(per(frameNumber)
        const d=new Date()
        const getTime = () => d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + "." + d.getMilliseconds()
        XData.variables["sys-time"] =getTime()
        super.onFrame(frameNumber)
    }

}


