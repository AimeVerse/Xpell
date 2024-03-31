
import { _x, _xd, _xem, _xlog, _xu } from "./src/Core/Xpell"
import { XUI as _xui } from "./src/XUI/XUI"
import "./public/xtest.css"


async function main() {
    _x.verbose = true
    _x.start()
    _x.loadModule(_xui)
    _xui.createPlayer()    

    _xui.add(_xui.wrap([{
        _id:"main-view",
        _type:"view",
        _text:"Xpell",
        style:"font-size:80px;",
        _on_frame:(xobj,frame)=>{
            xobj._text = "Frame "+frame
            xobj.setStyleAttribute("color","hsl("+frame*1.1+",100%,50%)")
        }
    }],{style:"justify-content:center;align-items:center;width:100%;height:100%"}),)

    




}

main()




