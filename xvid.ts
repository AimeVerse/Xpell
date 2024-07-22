import { _x, _xd, _xem, _xlog, _xu, XUIAnimate, XUI, XUIObjects } from "./src/index"



function createDialog() {
    const dg = {
        _id: "xdialog", _on_mount: "hide",
        _type: "view",
        style: "position:fixed; top:0; left:0; width:100%; height:100%; background-color:rgba(0,0,0,0.5); display:flex; justify-content:center; align-items:center;",
        _children: [
            {
                _type: "button",
                _id: "xdialog-ok",
                _text: "ok",
                style:"width:100px; height:30px; background-color:#00ff00; color:#000; border:none; outline:none; border-radius:5px;overflow:hidden;    text-overflow: ellipsis ellipsis;",
                _on_click: async (xobj) => {
                    _xem.fire("dialog-ok")
                }

            },
            {
                _type: "button",
                _id: "xdialog-cancel",
                _text: "cancel",
                style:"width:100px; height:30px; background-color:#ff0000; color:#000; border:none; outline:none; border-radius:5px;",

                _on_click: async (xobj) => {
                    _xem.fire("dialog-cancel")
                }

            }
        ]
    }

    XUI.add(dg)
}


async function confirmDialog(okBtnText = "Ok", cancelBtnText = "Cancel") {
    if(!_xd._o["xdialog"]){
        createDialog()
    }

    XUI._o["xdialog-ok"]._text = okBtnText
    XUI._o["xdialog-cancel"]._text = cancelBtnText

    const dialogResult = await new Promise((resolve, reject) => {

        _xem.once("dialog-ok", (e) => {
            resolve(true)
        })

        _xem.once("dialog-cancel", (e) => {
            resolve(false)
        })

        XUI._o["xdialog"].show()
    })
    XUI._o["xdialog"].hide()
    return dialogResult
}

async function main() {
    _x.verbose = true
    _x.start()
    _x.loadModule(XUI)
    XUI.createPlayer()


    _xd._o["main-view-status"] = "Not Mounted"

    XUI.add(

        {
            _id: "main-view",
            _type: "view",
            style: "flex-direction:column; justify-content:center;align-items:center;width:100%;height:100%;pointer-events:all;",
            _children:
                [
                    {
                        _type: "button",
                        _id: "upgrad-btn",
                        _text: "Upgrade",
                        style: "font-size:12px; padding:5px; border-radius:5px; background-color:#c5c5c5; color:#000; border:none; outline:none; width:90px; height:30px; display:flex;",

                        _on_click: async (xobj) => {
                            const result = await confirmDialog("sure, i would like that, it will be great")
                            
                            console.log("result", result);

                        }

                    },



                ]
        })

    await _x.delay(1000);
    _xd._o["main-text-ds"] = "New Data"
}

main().then(() => {
})







