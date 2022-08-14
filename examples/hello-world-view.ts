
import { Xpell as _x,XUI } from "../XLib"

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
                    text:"hello world"
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


//load Xpell application
XUI.loadApp(_app)

//load "hello-view" view into the page
XUI.vm.loadPage("hello-view")





