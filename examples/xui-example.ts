
import {Xpell as _x} from "./src/Xpell"
import { IXObjectData, XObjectPack } from "./src/XObject"
import {XData} from "./src/XData"
import {XLabel,XView,XButton} from "./src/XUI/XUICoreObjects"
import { XUI } from "./src/XUI/XUI"
import { XUIObject } from "./src/XUI/XUIObject"
import {XLogger as _xlog} from "./src/XLogger"
import { time } from "console"

//display Xpell engine info
_x.info()

//load Xpell UI (XUI) Module
_x.loadModule(XUI)
// _x.loadModule(X3D)

_x.start()

// _xlog.log("hey :)")

const vStyle = "position:absolute;top:0;left:0;width:100vw;height:20px;text-align:center;padding:10px;color:white;background-color:black"
const vStyle_test_ui = "position:absolute;top:42px;left:0;width:100vw;height:250px;text-align:center;padding:10px;color:white;background-color:coral"
const vStyleNew = "position:absolute;top:314px;left:0;width:100vw;height:100px;text-align:left;padding:10px;color:white;background-color:turquoise"



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
            _id:"my-label",
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
        const d = new Date()
        const getTime = () => d.getHours() + ':' + d.getMinutes() + ':' + d.getSeconds() + "." + d.getMilliseconds()
        XData.variables["sys-time"] =getTime()
        super.onFrame(frameNumber)
    }

}

export class LoginForm extends XUIObject {    
    constructor(data) {
        const defaults = {
            _type:"test-ui",
            _html_tag:"div",
            style:vStyle_test_ui
        }
        super(data,defaults);

        const unameLabel = XUI.create({
            _type:"label",
            _id:"username-label",
            text:"Usrename: ",
            for:"uname"
        })
        this.append(unameLabel)

        const unameInput = XUI.create({
            _type:"input",
            _id:"username-input",
            placeholder:"Your username here",
            style:"display:inline;margin-left:10px",
            name:"uname"
        })
        this.append(unameInput)

        const br = XUI.create({
            _type:"xhtml",
            _html_tag:"br"
        })
        this.append(br)

        const passLabel = XUI.create({
            _type:"label",
            _id:"password-label",
            text:"Password: ",
            style:"display:inline;",
            for:"password"
        })
        this.append(passLabel)

        const passInput = XUI.create({
            _type:"input",
            _id:"password-input",
            placeholder:"Your password here",
            style:"display:inline;margin-left:10px",
            name:"password"
        })
        this.append(passInput)


        // this.append(br)
        const br3 = XUI.create({
            _type:"xhtml",
            _html_tag:"br"
        })
        this.append(br3)
        const br4 = XUI.create({
            _type:"xhtml",
            _html_tag:"br"
        })
        this.append(br4)
        
        const image = XUI.create({
            _type:"image",
            _id:"image-1",
            style:"display:inline;",
            src:"https://i.timesnowhindi.com/stories/lemon_pti.jpg",
            alt:"lemons",
            width:"100px",
            height:"60px"
        })
        this.append(image)
        
        // const list = XUI.create({
        //     _type:"list",
        //     _id:"list-1",
        //     style:"display:inline;",
        //     _items:[/*"item1", "item2", "item3"*/[1],[2],[3]]
        // })
        // this.append(list)

        
        const br2 = XUI.create({
            _type:"xhtml",
            _html_tag:"br"
        })
        this.append(br2)

        const br5 = XUI.create({
            _type:"xhtml",
            _html_tag:"br"
        })
        this.append(br5)
        const moreILabel = XUI.create({
            _type:"label",
            _id:"more-info-label",
            text:"More Info: ",
            style:"display:inline;",
            for:"more-i"
        })
        this.append(moreILabel)
        
        const moreITextarea = XUI.create({
            _type:"textarea",
            _id:"more-info-textarea",
            placeholder:"Tell us about yourself in 5 sentences",
            style:"display:inline; vertical-align: middle;",
            name:"more-i"
        })
        this.append(moreITextarea)

        const br6 = XUI.create({
            _type:"xhtml",
            _html_tag:"br"
        })
        this.append(br6)
        const br7 = XUI.create({
            _type:"xhtml",
            _html_tag:"br"
        })
        this.append(br7)

        const button = XUI.create({
            _type:"button",
            _id:"button-1",
            text:"Send your details",
            style:"display:block; margin-left:auto; margin-right:auto;",
            // onclick:"text:'Im not a robot'"
        })
        this.append(button)

        const link = XUI.create({
            _type:"link",
            _id:"link",
            text:"Join us on Whatsapp",
            href:"https://web.whatsapp.com/",
            target:"_blank",
            style:"display:block;"
        })
        this.append(link)
        
        //<svg width="100" height="100">
//   <circle cx="50" cy="50" r="40" stroke="green" stroke-width="4" fill="yellow" />
//   </svg>
        // const svg = XUI.create({
        //     _type:"svg",
        //     _id:"circle-svg",
        //     text:"Hi",
        //     _children:{
        //         circle:{
        //             cx:'50',
        //             cy:'50',
        //             r:'40',
        //             style:"fill:rgb(0,0,255);stroke-width:4;stroke:rgb(7,5,82)"
        //         }
        //     }
        //     // _svg_data:{
        //     //     cx:'50',
        //     //     cy:'50',
        //     //     r:'40',
        //     //     // stroke:"green",
        //     //     // "stroke-width":"4",
        //     //     // fill:"yellow"
        //     //     style:"fill:rgb(0,0,255);stroke-width:4;stroke:rgb(0,0,0)"
        //     // }
        // })
        // this.append(svg)
    }
}

export class New extends XUIObject {
    constructor(data) {
        const defaults = {
            _type:"new",
            _html_tag:"div",
            style:vStyleNew,
        }
        super(data,defaults);


        const myLabel = XUI.create({
            _type:"label",
            _id:"my-label",
            text:"Register",
            _html_tag:"h2",
            style:"margin-top:1px; margin-bottom:1px; font-family:Helvetica; font-weight:normal;"
        })
        this.append(myLabel)      
    }
}

XUI.importObject("login",TopBar)
XUI.importObject("test-ui",LoginForm)
XUI.importObject("new",New)

const enterView = XUI.create({
    _type:"login",
    _id:"enter-view",
    _children:[{
        _type:"test-ui",
        _id:"enter-view"
    },
    {
        _type:"new",
        _id:"enter-view"
    }
    ]
})


enterView.attach("player")





document.getElementById("go")?.addEventListener('click',(e) => {

    alert("click")
})
