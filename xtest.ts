
import { _x, _xd, _xem, _xu } from "./src/Core/Xpell"
import { XUI } from "./src/XUI/XUI"
import "./public/xtest.css"
import { DirectionalLightShadow } from "three"

async function main() {
    _x.verbose = true //display Xpell engine info
    _x.start() // start Xpell frame engine
    // _xem._log_rules = {
    //     register: true,
    //     remove: true,
    //     fire: true,
    // }

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
                        _type: "label",
                        _id: "XUI-menu",
                        class: "menu",
                        _text: "XUI",
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
                        _id: "frame-control",
                        class: "frame-control",
                        _children: [
                            {
                                _type: "label",
                                _id: "frame-label",
                                class: "header-label",
                                _text: "Frame: 0",
                                _on_frame: (xobj, frameNumber) => {
                                    xobj.setText("Frame: " + frameNumber)
                                }
                            },
                            {
                                _type: "label",
                                _id: "fps-label",
                                class: "header-label",
                                _text: "FPS: 0",
                                _data_source: "fps",
                                _on_data: "set-text-from-data empty:false pattern:'fps: $data'"
                                // (xobj,data) => {
                                //     xobj.setText( "FPS: " + data)
                                // }
                            }
                        ]
                    },
                    {
                        _type: "view",
                        _id: "event-control",
                        class: "event-control",
                        _children: [
                            {
                                _type: "label",
                                _text: "XEM",
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
                                _type: "label",
                                class: "event-control-failure",
                                _id: "on_mount_check",
                                _text: "on_mount_check",
                                _on_mount:  (xobj, event) => {
                                    console.log("on_mount_check");
                                    xobj.append({
                                        _type: "label",
                                        class: "event-control-success",
                                        _text: "click me",
                                        _parent_element: "on_mount_check",
                                        _on_click: (xobj, event) => {
                                            console.log("on_click");
                                            
                                        },
                                        _on_mount: (xobj, event) => {
                                            console.log("on_mount internal");
                                            
                                        }
                                    })
                                },
                                _on_click: (xobj, event) => {
                                    console.log("on_click external");
                                    
                                }
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
                                _text: "_once: mount + click * ",
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
                                        xobj.setText("Button clicked")
                                    }
                                }
                            },
                            {
                                _type: "label",
                                class: "",
                                _text: "on data [xdata] with function",
                                _data_source: "xdata",
                                _on_data: (xobj, data) => {
                                    xobj.setText("-f->Data: " + data)
                                }
                            },
                            {
                                _type: "button",
                                class: "event-button",
                                _text: "Fire data",
                                _on_click: (xobj, event) => {
                                    _xd._o["xdata"] = Date.now()
                                }
                            },
                            {
                                _type: "button",
                                class: "event-button",
                                _text: "Remove Me",
                                _children :[
                                    {
                                        _type: "label",
                                        _text: "Remove Me",
                                    }
                                ],
                                _on_click: (xobj, event) => {
                                    XUI.remove(xobj._id)
                                }
                            },
                            {
                                _id:"xui-om-objects",
                                _type: "label",
                                class: "",
                                style:"margin-top: 20px;display: none",
                                _text: "xui-om-objects",
                                _data_source: "xui-om-objects",
                                _on_data: "set-text-from-data empty:false pattern:'XUI Objects: $data'"
                            },
                            {
                                _type: "button",
                                class: "event-button",
                                _text: "hide/show",
                                _on_click: (xobj, event) => {
                                    XUI.toggle("xui-om-objects")
                                    
                                }
                            }
                        ]
                    }
                ]

            }
        ]
    }
    XUI.createPlayer() //create the player and add it to the body element
    const mvo = XUI.loadObject(mainView)
    // console.log(mvo.toXData());

    

    
    

}






main()