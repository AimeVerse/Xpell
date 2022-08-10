
import { IXObjectData, XObjectPack } from "./src/XObject"
import {Xpell as _x} from "./src/Xpell"
import {XData} from "./src/XData"
import {XUI} from "./src/XUI/XUI"
import {XLabel} from "./src/XUI/XUICoreObjects"

_x.info()

_x.loadModule(XUI)


_x.start()



// XData.variables["my-var"] = 10

// const xobj = {
//     _type:"view",
//     _id:"my-view",
//     style:"font-size:40px"
// }


// const lbl =XUI.create(xobj)

// XUI.om.addObject(lbl)

// lbl.attach("player")

//console.log(XData.variables["my-var"]);

const _app = {
    xpell: {
        version: 1
    },
    views: {
        "hello-view": {
            _type: "view",
            style:"display:block",
            //text:"hi",
            _id: "hello-view",
            _children:[
                {
                    _type:"view",
                    text:"hi"
                }
            ]
        },
        "hi-view": {
            _type: "view",
            style:"display:block",
            //text:"hi",
            _id: "hello-view",
            _children:[
                {
                    _type:"view",
                    text:"hello"
                }
            ]
        }
    },
    defaults: {
        view: "hello-view"
    },
    player: {
        html_element: "player"
    }

}






XUI.loadApp(_app)

XUI.vm.loadPage("hello-view")

//XUI.vm.showPage("hi-view")




// const xml = `<svg>
// <circle cx="40" cy="40" r="36" stroke="#707073" fill="none"  stroke-width="1px"></circle>
// </svg>`

// //XParser.addHtml2SpellMapItem("sub","xhtml")
// const spltxt = XParser.xmlString2Xpell(xml)

// if(spltxt) {
//     const spl = XUI.create(spltxt)
//     spl.attach("player")
    
// }



