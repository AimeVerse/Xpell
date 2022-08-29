
import { Xpell as _x } from "./src/XPell"
import {XUI} from "./src/xui/XUI"

//display Xpell engine info
_x.info()

//load Xpell UI (XUI) Module
_x.loadModule(XUI)

//start Xpell frame engine
_x.start()


//define Xpell Application

const _app = {
    xpell: {version: 1},
    views: {
        "hello-view": {
            _type: "view",
            style:"display:block",
            //text:"hi",
            _id: "hello-view",
            _children:[
                {
                    _type:"view",
                    text:"Welcome! - login page",
                    style:"font-family:monospace; font-size:30px; "
                },
                {
                    _type:"label",
                    text:"Usrename: ",
                    for:"uname",
                    style:"color:black"
                },
                {
                    _type:"input",
                    name:"uname",
                    type:"text",
                    placeholder:"Your username here"
                },
                {
                    // <br>
                    _type:"view",
                    text:" "
                },
                {
                    _type:"label",
                    text:"Password: ",
                    for:"pass"
                },
                {
                    _type:"input",
                    name:"pass",
                    type:"text",
                    placeholder:"Your password here"
                },
                {
                    // <br>
                    _type:"view",
                    text:" "
                },
                {
                    _type:"link",
                    text:"Login!",
                    style:"color: coral; font-family: 'Times New Roman'; border: 1px solid coral; border-radius: 13%",
                    href:"https://web.whatsapp.com/",
                    target:"_blank"
                },
                {
                    _type:"textarea",
                    text:"hello"
                },
                {
                    _type:"video",
                    width:"300px",
                    height:"220px",
                    controls:"controls",
                    source:{
                        src:"https://www.youtube.com/watch?v=FilQhY2Pjq0&list=RDMM&index=6&ab_channel=%D7%9E%D7%A9%D7%99%D7%A0%D7%94",
                        type:"video/mp4"
                    },
                    text:"Your computer doesn't support in this video."
                }
            ]
        },
        "welcome": {
            _type: "view",
            style:"display:block",
            _id: "welcome",
            _children:[
                {
                    _type:"view",
                    text:"Welcome! - login page",
                    style:"color:black"
                }
            ]
        }
    },
    
    "html-tag-id":"player"
}


//load Xpell application
XUI.loadApp(_app)

//load "hello-view" view into the page
XUI.vm.loadPage("hello-view")
XUI.vm.loadPage("welcome")





