
import { _x, _xd, _xem, _xlog, _xu } from "./src/Core/Xpell"
import { XUI as _xui } from "./src/XUI/XUI"
import {XUIAnimate,XUI} from "./index"


async function main() {
    _x.verbose = true
    _x.start()
    _x.loadModule(_xui)
    _xui.createPlayer()    


    _xd._o["main-view-status"] = "Not Mounted"

    _xui.add(_xui.wrap([{
        _id:"check-me",
        _type:"view",
        style:"font-size:80px;",
        _text:"Hello World",
        _on_show_animation:XUIAnimate._animations.FADE_IN,
        _on_hide_animation:XUIAnimate._animations.FADE_OUT,

        _on_mount:async (xobj) => {
            _xd._o["main-view-status"] = "mounted"
            
        }
        
    },
    {
        _type:"button",
        style:"font-size:20px;",
        _text:"toggle",
        _on_click:async (xobj) => {
            XUI._o["check-me"].toggle()
        } 
    },
    {
        _type:"button",
        style:"font-size:20px;",
        _text:"animate",
        _on_click:async (xobj) => {
            XUI._o["check-me"].animate(XUIAnimate._animations.BOUNCE,true)
        } 
    },
    {
        _type:"button",
        style:"font-size:20px;",
        _text:"stop",
        _on_click:async (xobj) => {
            XUI._o["check-me"].stopAnimation()
        } 
    },
    {
        _type:"button",
        style:"font-size:20px;",
        _text:"test-nano",
        _nano_commands: {
            "logme": (xcmd, xobj?:any) => {
                console.log(xobj._nano_commands);
                
            
            }
        },
        _on_click:"logme"
    }

],{style:"flex-direction:column; justify-content:center;align-items:center;width:100%;height:100%"}))

    await _x.delay(1000);    
    _xd._o["main-text-ds"] = "New Data"
}

main().then(() => {
})






