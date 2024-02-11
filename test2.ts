
import {XData, XEventManager,_x,_xd,_xem} from "./src/Core/Xpell"
// import { Xpell as _x } from "./src/Xpell"
import { XUI, XUIApp, XUIObject } from "./src/XUI/XUI"
import {XAI} from "./src/XAI/XAI"
import { XEditor, XTransformControls } from "./src/XUI/XEditor"
import { XLabel } from "./src/XUI/XUICoreObjects"
// import {_xem} from "./src/XEM/XEventManager"
import {WormholeEvents, Wormholes, _xdb} from "./index"
//display Xpell engine info
_x.verbose()


//load Xpell UI (XUI) Module
_x.loadModule(XUI)

_x.loadModule(XAI)

// _x.loadModule(XAI)
XUI.importObjectPack(XEditor)


// start Xpell frame engine
_x.start()

// console.log(XAI);


// const tts = XAI.create({_type:"tts",_voice:"Samantha"})
// tts.loadVoices()
// console.log(tts.getVoices());

// tts.speak("Hello World")

// _xdb.encode = true



// _xdb.saveObject("test",{a:1,b:2})

// _xem._log_rules.register = true

class Xfield extends XUIObject {

    static xtype = "xfield"
    
    _title:string
    _textId:string
    _placeholder:string
    style:string = "display:flex;flex-direction:row;justify-content:flex-start;align-items:center;gap:10px"

    constructor(data){
        super(data,{_type:Xfield.xtype},true)
        this.parse(data)
        this.parseEvents()
        
        if(this._title) this.append(
            {
                _type:"view",
                _text:this._title,
            })
        if(!this._textId) this._textId = this._id + "-text"
        
        this.append(
            {
                _type:"input",
                _id:this._textId,
                placeholder:this._placeholder,
            })
        
    } 
}

XUI.importObject("xfield",<any>Xfield)


const createField = (title,textId,placeholder?) => {
    if(!placeholder) placeholder = title
    return {
        _type:"view",
        
        _children:[
            {
                _type:"view",
                _text:title,
            },
            {
                _type:"input",
                _id:textId,
                placeholder:placeholder,
            },
            {
                _type:"xfield",
                _id:"xfield-" + textId,
                _title:title,
            }
        ]
    }
}

const myView = {
    _type:"view",
    _id:"my-view",
    // _text:"Hello World",
    style:"width:100%;height:100%;background-color:white",
    _parent_element:"controls",
    _on_mount:(obj:XUIObject) => {
        console.log("root mounted");
    },
    _children:[
        // createField("First Name","first-name"),
        // createField("Last Name","last-name"),
        // createField("Email","email","please enter your email"),
        {
            _type:"view",
            _text:"number1",
            // _on_mount:(obj:XUIObject) => {
            //     console.log("1 mounted");
            // },
            _data_source:"test",
            _on: {
                "click":(obj:XUIObject,e:any) => {
                    console.log("1 clicked",obj);
                },
                "data":(obj:XUIObject,data) => {
                    obj.setText(data)
                },
                "mount":(obj:XUIObject) => {
                    console.log("1 mounted");
                }
            },
            

        },
        {
            _id:"number2",
            _type:"view",
            _text:"number2",
            _on_mount:(obj:XUIObject) => {
                console.log("2 mounted");
            },
            _on_click:(obj:XUIObject,e:HTMLEvent) => {
                console.log("2 clicked",obj);
                _xd._o["test"] = "test data"
            }
        },
        {
            _type:"view",
            _text:"number3",
            _on_frame:(obj:XUIObject,fn) => {
                obj.setText("frame " + fn)
            }
        },
        {
            _type:"view",
            _text:"number4",
            _on:{
                "frame":(obj:XUIObject,fn) => {
                    obj.setText("frame " + fn  )
                }
            }
        },
        {
            _type:"view",
            _text:"data source",
            _data_source:"test",
            _on_data:(obj:XUIObject,fn) => {
                obj.setText("data " + fn)
            }
        }
        

    ]
   

}


const onMountErrorView = {
    _type:"view",
    _id:"on-mount-error-view",
    _parent_element:"controls",
    _on_mount:(obj:XUIObject) => {
        console.log("root mounted");
    },
    _children:[
        {
            _id:"number1",
            _type:"view",
            _text:"number1",
            _on_mount:(obj:XUIObject) => {
                console.log("1 mounted");
            }
        },
        {
            _type:"view",
            _text:"number2",
            _on_mount:(obj:XUIObject) => {
                console.log("2 mounted");
            }
        
        },
        {
            _type: "view",
            _id: "server-status-led",
            class: "server-status-led",
            _text:"initializing...",
            _on: {
                [WormholeEvents.WormholeOpen]: async (xobj, e) => {
                    xobj.setText("Connected")
                },
                [WormholeEvents.WormholeClose]: async (xobj, e) => {
                    xobj.setText("Disconnected")
                }
            },
            // _on_frame: (xobj, frameNumber) => {
            //     xobj.setText(_xd._o[WormholeEvents.WormholeOpen])
            // }
        }
    ]
}



const xobj = XUI.loadControl( onMountErrorView )
// XUI.getObject("number1").append({
//     _type:"view",
//     _text:"number2",
//     _on_mount:(obj:XUIObject) => {
//         console.log("2 mounted");
//     }

// })

//text attribute starts with _text
const xuiObject = XUI.create({
    _type:"button",
    _id:"my-button",
    _text:"Hello World",
    _on: {
        "click":(obj:XUIObject,e:any) => {
            console.log("button clicked",obj);
        }
    
    }
})


const wormholeServer = "localhost:3030"
const wormholeUrl = "ws://" + wormholeServer + "/" // wormhole server url (localhost)




Wormholes.verbose(false)

Wormholes.open(wormholeUrl)

Wormholes.onOpen(async (e) => {
    console.log("Wormhole Opened",e);
    const res = await Wormholes.send({"_module":"xenvironment","_op":"get-name" })
    console.log("Wormhole Response", res);
})