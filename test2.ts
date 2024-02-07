
import {XData, XEventManager,_x,_xd,_xem} from "./src/Core/Xpell"
// import { Xpell as _x } from "./src/Xpell"
import { XUI, XUIApp, XUIObject } from "./src/XUI/XUI"
import {XAI} from "./src/XAI/XAI"
import { XEditor, XTransformControls } from "./src/XUI/XEditor"
import { XLabel } from "./src/XUI/XUICoreObjects"
// import {_xem} from "./src/XEM/XEventManager"
import {_xdb} from "./index"
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
    ]
}



const xobj = XUI.loadControl( onMountErrorView )
XUI.getObject("number1").append({
    _type:"view",
    _text:"number2",
    _on_mount:(obj:XUIObject) => {
        console.log("2 mounted");
    }

})





// console.log("obj",xobj.toXData());




// const myTable  = {
//     _type:"xtable",
//     _id:"my-table",
//     border:1,
//     _fields:[
//         {_title:"Name",_src:"_space_name"},
//         {_title:"Desc",_src:"_space_desc"},
//     ],
//     _data:[
//         {_space_name:"space-1",_space_desc:"the first space"},
//         {_space_name:"space-2",_space_desc:"the second space"}
//     ],
//     // _text:"Hello World",
//     // style:"width:100%;height:100%;background-color:red",
//     _parent_element:"controls",
    
// }

// XUI.loadControl(myTable).showData()


// const xapp:XUIApp = {
//     _views: {
//         _parent_element:"player",
//         "left-menu":{
//             _id:"left-menu",
//             _type:"view",
//             // _parent_element_id:"info",
//             style:"width:150px;position:absolute;height:300px;background-color:black;color:white;padding:10px",
//             _children:[
//                 {
//                     _type:"view",
//                     _text:"menu1",
//                     style:"text-align:center",
//                     _on_click:(menu,e) => {
//                         XUI.vm.showPage("page-2")
//                     },
//                     _on_mount:(menu) => {
//                         console.log("mounted")
//                     },
//                     _on_frame:(menu,frameNumber:number) => {
//                         //menu.getDOMObject().textContent = frameNumber
//                     },
//                     _on_show:(menu) => {
//                         console.log("show")
//                     },
//                     _on_hide:(menu) => {
//                         console.log("hide")
//                     }

//                 },
//                 {
//                     _type:"view",
//                     _text:"menu2",
//                     style:"text-align:center"
//                 },
//                 {
//                     _type:"xe",
//                     // _text:"menu3",
//                     // style:"text-align:center"
//                 },
//                 {
//                     "_type": "view",
//                     "_id": "main-view",
//                     "_text":"hoooo",
//                     "style": "border: 1px solid black;background-color:yellow;color:red",
//                     "_on_frame": (obj:XUIObject, frameNumber: number) => {
//                       obj.getDOMObject().style.color = "rgb(" + (frameNumber % 256) + ", "+(frameNumber % 256)+", 0)";
//                     }
//                   }
//             ]
//         },
//         "page-2":{
//             _type:"view",
//             style:"left:150px;width:50px;position:absolute;height:300px;background-color:green"
//         },
//         "gpt-page":{
//             "_type": "view",
//             "_id": "main-view",
//             "_children": [
//               {
//                 "_type": "label",
//                 "_id": "time-label",
//                 "style": "font-size: 15px",
//                 "_on_frame": (obj:XUIObject, frameNumber: number) => {
//                   obj.getDOMObject().textContent = new Date().toLocaleTimeString();
//                 }
//               },
//               {
//                 "_type": "text",
//                 "_id": "my-text"
//               },
//               {
//                 "_type": "button",
//                 "_id": "my-button",
//                 "_text": "Log Text",
//                 "_on_click": (obj:XUIObject, e:HTMLEvent) => {
//                   console.log(document.getElementById("my-text").value);
//                 }
//               }
//             ]
//           }
          
//     },
//     // _controls:{
//     //     _parent_element: "controls",
//     //     "tranform":{
//     //         _id: "transform",
//     //         _type: "transform-controls",
//     //         style: "position:absolute;width:200px;height:100px;left:50px;top:50px;border:1px solid white;background-color:rgba(0,0,0,0.4);color:white"
//     //     }
//     // }

// }


// const app2 = {
//   "xpell": {
//       "version": 1
//   },
//   "_views": {
//       "_parent_element": "xplayer",
//       "main-page": {
//           "_type": "view",
//           "_id": "main-page",
//           "class": "main-page",
//           style:"background-color:blue;width:50vw;height:50vh",
//           "_children": [
//               {
//                   "_type": "view",
//                   "_text": "main-page",
//                   style:"font-size:20px",
//               }
//           ]
//       },
//       "page-2": {
//           "_type": "view",
//           "_id": "page-2",
//           "class": "main-page",
//           style:"background-color:red;width:50vw;height:50vh",
//           "_children": [
//               {
//                   "_type": "view",
//                   "_text": "main-page",
//                   style:"font-size:20px",
//               }
//           ]
//       },
//       "ev": {
//           "_type": "view",
//           "_id": "ev",
//           "class": "empty-view"
//       },
    
//   },
//   "_controls": {
//       "_parent_element": "xcontrols",
      
//       "edit-npc-button": {
//           "_type": "view",
//           "style": "display:none",
//           "class": "xview"
//       },
//       "login-button": {
//           "_type": "view",
//           "class": "aime-button",
//           "style": "",
//           "_children": [
//               {
//                   "_type": "image",
//                   "src": "https://cdn.aimeverse.com/u/icon-login",
//                   "class": "ximage",
//                   "_html_tag": "img"
//               }
//           ]
//       }
//   }
// }

// XUI.loadApp(app2)
// XUI.vm.showPage("main-page")
// XUI.vm.showView("page-2")

// const page = XUI.getObject("main-page")
// console.log(page);

// const xdbo = _xdb.getObject("test")
// console.log(xdbo);





// // document.addEventListener("custom",(e)=>{console.log("custom event fired")})
// _xem._log_rules.register = true
// _xem._log_rules.remove = true
// _xem.once("e1",(data)=>{console.log("e1 fired",data)},true)
// _xem.fire("e1",{a:1,b:2})
// XUI.loadControl(view)


// XUI.vm.addRawView("third-view",{
//     _type:"view",
//     style:"left:200px;width:50px;position:absolute;height:300px;background-color:brown"
// })



// XUI.vm.showPage("left-menu")
//  XUI.vm.showView("third-view")
// XUI.vm.hidePage("menu")
// XUI.vm.showPage("page-2")
// XUI.vm.hidePage("page-2")


// setTimeout(() => {
//   XUI.vm.hidePage("left-menu")
//   console.log("hide menu");
  
// }, 500);
// _x.execute()

// const ttso = XAI.create({_type:"tts",_voice:"Kathy"})


// document.addEventListener("tts-voices-loaded",(e)=>{
//     ttso.speak("Hey, my name is samantha,[[slnc 1000]] I am the voice of the local operating system " )
//     // console.log(ttso.getVoices());

// })



