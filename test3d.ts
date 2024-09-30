

import { XUI, _xem, X3D, X3DApp, _x, _xd, X3DObject, XGeometry, XMaterial, XUIObject } from "./src/index"

export const TWO_PI = 2 * Math.PI;





async function main() {
    //display Xpell engine info
    _x.verbose = true

    _x.info()

    //load Xpell UI (XUI) Module
    // _x.loadModule(XUI)
    _x.loadModules(XUI,X3D)
    

    _x.start()

    X3D.createPlayer("x3d-player","x3d-player")
    XUI.createPlayer("xplayer","xplayer")
    XUI.add({
        _type: "button",
        _text: "Start",
        style:"position:absolute; top:10px; right:10px;pointer-events: all;",
        // _parent_element: "xplayer",
        _on_click: async (xobj) => {
            const sph = await X3D._o["my-x3d-object"]
            sph.show()
        }
    })
    XUI.add({
        _type: "label",
        _text: "Hello World",
        // _parent_element: "xcontrols",
        style: "position:absolute; top:10px; left:10px; background-color: white; color: black; padding: 10px; border-radius: 10px;",
        _data_source: "fps",
        _on_data: (xobj, e) => {
            xobj._text = e
        }
    })

    
    const world = await X3D.loadDefaultApp(true,"clear")
    
    const sphere = {
        _type: "circle",
        _id: "my-x3d-object",
        _wireframe: true,
        _color: 0xff00ff,
        //_radius: 1,
        // _width: 4,
        _height: 1,
        _radius: 1.2,
        _tube_radius: 1,
        // _depth: 4,
        _on_show: (xobj) => {
            console.log("clicked")
        }
        
    }
    
    const sph = await X3D.add(sphere)
    sph.hide()
    console.log(sph,world);
   
    
    // //get anaylzer from microphone
   

}

main().then(res => { })

