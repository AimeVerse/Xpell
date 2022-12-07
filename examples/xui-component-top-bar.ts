
import {Xpell as _x} from "./src/Xpell"
import { IXObjectData, XObjectPack } from "./src/XObject"
import {XData} from "./src/XData"
import {XLabel,XView,XButton} from "./src/XUI/XUICoreObjects"
import { XUI } from "./src/XUI/XUI"
import { XUIObject } from "./src/XUI/XUIObject"
import {XLogger as _xlog} from "./src/XLogger"


//display Xpell engine info
_x.info()

//load Xpell UI (XUI) Module
_x.loadModule(XUI)
// _x.loadModule(X3D)

_x.start()

_xlog.log("hey :)")

const vStyle =  `position:absolute;top:0;left:0;width:100vw;height:20px;text-align:left;padding:10px;color:white;background-color:black`



export class TopBar extends XUIObject {    
    constructor(data) {
        const defaults = {
            _type:"login",
            _html_tag:"div",
            style:vStyle,
        }
        super(data,defaults);


        const myLabel = XUI.create({
            _type:"label",
            _id:"top-bar-main-label",
            text:"Welcome to Xpell"
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

        const timeLabel = XUI.create({
            _type:"label",
            _id:"time-label",
            _data_source:"sys-time",
            style:"display:inline;margin-left:20px",
        })
        this.append(timeLabel)

        
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


XUI.importObject("login",TopBar)

const enterView = XUI.create({
    _type:"login",
    _id:"enter-view"
})


enterView.attach("player")





document.getElementById("go")?.addEventListener('click',(e) => {

    alert("click")
})
