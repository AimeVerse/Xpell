
import {XData, XEventManager,_x} from "xpell-core"
// import { Xpell as _x } from "./src/Xpell"
import { XUI, XUIApp, XUIObject } from "./src/XUI/XUI"
import {XAI} from "./src/XAI/XAI"
import { XEditor, XTransformControls } from "./src/XUI/XEditor"
import { XLabel } from "./src/XUI/XUICoreObjects"
import {_xem} from "./src/XEM/XEventManager"
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



// class XTable extends XUIObject {

//     _type = "xtable"
//     _html_tag: string = "table"
//     _fields: string[] = []
//     _data: any[] = []
//     _table_header: XUIObject 
//     constructor(data){
//         super(data,{},true)
//         this.parse(data)
//         // this._children
//         // console.log(this._fields);
//         this.createTableHeader()
        
        
//     }

//     createTableHeader(){
//         const tableHeader = {
//             _type:"xhtml",
//             _html_tag:"thead",
//             _children:[]
//         }

//         this._fields.forEach(field => {
//             const cell = {
//                 _type:"xhtml",
//                 _html_tag:"th",
//                 _text: field["_title"] 
//             }
//             tableHeader._children.push(cell)
//         });


//         this._table_header = XUI.create(tableHeader)
//         this._children.push(this._table_header)
//     }


//     showData(){
//         if(this._data.length == 0) return
//         console.log(this._data);
        
//         const tableBody = {
//             _type:"xhtml",
//             _html_tag:"tbody",
//             _children:[]
//         }
//         this._data.forEach(row => {
//             const tableRow = {
//                 _type:"xhtml",
//                 _html_tag:"tr",
//                 _children:[]
//             }
//             this._fields.forEach(field => {
//                 const cell = {
//                     _type:"xhtml",
//                     _html_tag:"td",
//                     _text:row[field._src]
//                 }
//                 tableRow._children.push(cell)
//             });
//             tableBody._children.push(tableRow)
//         }

//         );
//         const tbody = XUI.create(tableBody)
//         this.append(tbody)
//     }



    
// }

// XUI.importObject("xtable",XTable)




const myView = {
    _type:"view",
    _id:"my-view",
    // _text:"Hello World",
    style:"width:100%;height:100%",
    _parent_element:"controls",
    _children:[
        {
            _id:"menu1",
            _type:"view",
            _text:"menu1",
            style:"text-align:center",
        },
        {
            _id:"menu2",
            _type:"text",
            _text:"menu2",
            style:"text-align:center"
        },
        {
            //submit button
            _id:"menu3",
            _type:"button",
            _text:"submit",
            style:"text-align:center",
        },
        {
            _id: "search-form",
            _type: "view",
            class: "musicbox-search",
            _children: [
               {
                _type:"xhtml",
                _html_tag:"table",
                class:"area-chart",
                _children:[
                    {
                        _type:"xhtml",
                        _html_tag:"tr",
                        _children:[
                            {
                                _type:"xhtml",
                                _html_tag:"td",
                                _text:"10%",
                                _style:"--start:0.4;--end:0.5"
                            },
                            {
                                _type:"xhtml",
                                _html_tag:"td",
                                _text:"Desc"
                            }
                        ]
                    },
                    {
                        _type:"xhtml",
                        _html_tag:"tr",
                        _children:[
                            {
                                _type:"xhtml",
                                _html_tag:"td",
                                _text:"Name"
                            },
                            {
                                _type:"xhtml",
                                _html_tag:"td",
                                _text:"Desc"
                            }
                        ]
                    }
                ]
                
               }
            ]
        }
    ],
    // _on_frame:(obj:XUIObject,frameNumber:number) => {
    //     obj.setText("frame: " + frameNumber)
    //     //change the text color every frame with hsl
    //     obj.dom.style.color = "hsl(" + (frameNumber % 360) + ", 100%, 50%)";
    // },
    // _on_click:(obj:XUIObject,e:HTMLEvent) => {
    //     console.log("clicked");
    // }
    _data_source: "my-data",
    _on_data:(obj:XUIObject,data:any) => {
        // obj.setText(data)
    }

}


setTimeout(() => {
    XData._o["my-data"] = "Hello World 2"
}, 1000);



XUI.loadControl(myView)




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



