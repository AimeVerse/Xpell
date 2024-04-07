
import { _x, _xd, _xem, _xu } from "./src/Core/Xpell"
import { XUI } from "./src/XUI/XUI"
import "./public/xtest.css"


async function main() {
    _x.verbose = true //display Xpell engine info
    _x.start() // start Xpell frame engine
    _x.loadModule(XUI) //load XUI module
    XUI.createPlayer() //create the player and add it to the body element


    
    //XUI.add - add a new XUIObject to the xplayer 
    //(replace loadObject and loadControl)

 

    // XUI.wrap - wraps xobject array with wrapper view

    // const view = {
    //     _text:"view 1",
    //     style:"background-color:blue"
    // }
    // const view2 = {
    //     _text:"view 2",
    //     style:"background-color:green"
    // }
    // const wrapper = XUI.wrap(
    //     [view,view2],{
    //         _id:"wrapper",
    //         style:"background-color:red;font-size:40px;"
    //     }
    // )
    
    // XUI.add(wrapper)




    const mainView = {
        _type: "view",
        _id: "main-view",
        class: "main-view",
        _children: [
            {
                _type: "view",
                _id: "header",
                class: "header",

                _children: [
                    {
                        _type: "label",
                        _id: "logo",
                        class: "logo",
                        _text: "Xpell"
                    },
                    {
                        _type: "view",
                        _id: "frame-control",
                        class: "frame-control",
                        _children: [
                            {
                                _type: "label",
                                _id: "frame-label",
                                class: "header-label",
                                _text: "Frame: 0",
                                _on_frame: "set-text-from-frame pattern:'Frame: $data'"  
                            },
                            {
                                _type: "label",
                                _id: "fps-label",
                                class: "header-label",
                                _text: "FPS: 0",
                                _data_source: "fps",
                                _on_data: "set-text-from-data pattern:'FPS: $data' empty:false"
                            }
                        ]
                    }
                ]
            },
            {
                _type: "view",
                _id: "main-content",
                class: "main-content",
                _children: [
                    {
                        _type: "view",
                        _id: "event-control",
                        class: "event-control",
                        _children: [
                            {
                                _type: "label",
                                _text: "XUI",
                            },
                            {
                                _id: "xui-om-objects",
                                _type: "label",
                                class: "",
                                style: "",
                                _text: "xui-om-objects",
                                _data_source: "xui-om-objects",
                                _on_data: "set-text-from-data empty:false pattern:'XUI OM Objects: $data'"
                            },
                            {
                                _type: "label",
                                class: "event-control-failure",
                                _text: "mount event with _on property",
                                _on: {
                                    "mount": (xobj, event) => {
                                        xobj.replaceClass("event-control-failure", "event-control-success")
                                    }
                                }
                            },
                            {
                                _type: "view",
                                class: "xflex",
                                _id: "on_mount_check_box",
                                _children: [
                                    {
                                        _type: "view",
                                        class: "event-control-failure",
                                        _id: "on_mount_check",
                                        _text: "on_mount_check",
                                        _on_mount: async (xobj, event) => {
                                            xobj.replaceClass("event-control-failure", "event-control-success")
                                            XUI.append({
                                                _type: "label",
                                                class: "event-control-failure",
                                                _text: "mounted by on_mount_check_box",
                                                _on_mount: async (xobj, event) => {
                                                    xobj.replaceClass("event-control-failure", "event-control-success")
                                                    console.log("mounted by on_mount_check_box");
                                                    await _x.delay(1000)
                                                    
                                                }
                                            }, "on_mount_check_box")
                                        },
                                    }
                                ]
                            },
                            {
                                _type: "label",
                                class: "event-control-failure",
                                _text: "mount event with _once property",
                                _once: {
                                    "mount": (xobj, event) => {
                                        xobj.replaceClass("event-control-failure", "event-control-success")
                                    },
                                    "click": (xobj, event) => {
                                    }
                                }
                            },
                            {
                                _type: "label",
                                class: "event-control-failure",
                                _text: "_on_create",
                                _on_create: (xobj, event) => {
                                    xobj.replaceClass("event-control-failure", "event-control-success")
                                }
                            },
                            {
                                _type: "label",
                                class: "event-control-failure",
                                _text: "_on: create",
                                _on: {
                                    create: (xobj, event) => {
                                        xobj.replaceClass("event-control-failure", "event-control-success")
                                    }
                                }
                            },
                            {
                                _type: "label",
                                class: "event-control-failure",
                                _text: "_on_show",
                                _on_show: (xobj, event) => {
                                    xobj.replaceClass("event-control-failure", "event-control-success")
                                }
                            },
                            {
                                _type: "label",
                                class: "event-control-failure",
                                _text: "_on: show",
                                _on: {
                                    show: (xobj, event) => {
                                        xobj.replaceClass("event-control-failure", "event-control-success")
                                    }
                                }
                            },
                            {
                                _type: "label",
                                class: "event-control-failure",
                                _text: "_once: mount + click (triggered automatically)",
                                title: "mount event trigger click event",
                                _once: {
                                    "mount": (xobj, event) => {
                                        xobj.click() //mount trigger click event
                                    },
                                    "click": (xobj, event) => {
                                        xobj.replaceClass("event-control-failure", "event-control-success")
                                    }
                                }
                            },
                            {
                                _type: "button",
                                class: "event-button",
                                _text: "Click me",
                                _on: {
                                    "click": (xobj, event) => {
                                        xobj._text = "Button clicked"
                                    }
                                }
                            },
                            XUI.wrap([
                                {
                                    _type: "button",
                                    class: "event-button",
                                    _text: "Fire data",
                                    _on_click: (xobj, event) => {
                                        _xd._o["xdata"] = Date.now()
                                    }
                                },
                                {
                                    _type: "label",
                                    class: "",
                                    _text: "on data [xdata] with function",
                                    _data_source: "xdata",
                                    _on_data: (xobj, data) => {
                                        xobj._text = "[Data]: " + data
                                    }
                                }
                            ]),
                            XUI.wrap([
                                {
                                    _type: "button",
                                    class: "event-button",
                                    _text: "Remove label",
                                    _on_click: (xobj, event) => {
                                        XUI.remove("remove-me")
                                    }
                                },
                                {
                                    _id: "remove-me",
                                    _type: "label",
                                    _text: "will be removed",
                                },
                                {
                                    _type: "button",
                                    class: "event-button",
                                    _text: "Add label",
                                    _on_click: (xobj, event) => {
                                        // const label = XUI.create()
                                        XUI.append({
                                            _id: "remove-me",
                                            _type: "label",
                                            _text: "will be removed",
                                        }, "remove-box")
    
                                    }
                                },
    
                            ], { _id: "remove-box" }),
                            XUI.wrap([
                                {
                                    _type: "button",
                                    class: "event-button",
                                    _text: "Toggle",
                                    _on_click: (xobj, event) => {
                                        XUI.toggle("xui-om-objects")
    
                                    }
                                },
                                {
                                    _id: "xui-om-objects",
                                    _text: "Hide/Show me",
                           
                                }]),
                            XUI.wrap([
                                {
                                    _type: "text",
                                    _text: "Text",
                                    _id: "text-to-test"
    
                                },
                                {
                                    _type: "button",
                                    _text: "Click me",
                                    _on_click: (xobj, event) => {
                                        XUI._o["text-to-test"]._text = "Button clicked"
                                    }
                                }
                            ]),
                        ]
                    }
                ]
    
            }
        ]
    }
    XUI.add(<any>mainView)    











}






main()