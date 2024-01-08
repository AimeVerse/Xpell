
import * as THREE from 'three'

import {XUI,_xem,X3D, X3DApp,_x,_xd} from "./index"
import { setInterval } from 'timers/promises'

export const world: X3DApp = {
    "_parent_element": "x3d-player",
    _physics: {
        _engine: "cannon.js",
        _active: true,
        _debug: true
    },
    _scene: {
        _raycast: true,
        _helpers: {
            "axes": {
                _type: "axes",
                _active: false,
                _params: { size: 5 }
            }
        },
        _lights: {
            "main": {
                _id: "ambient-light",
                _type: "light",
                _light: "ambient",
                color: "hsl(0, 0%, 100%)",
            },
            "p1": {
                _id: "directional-light",
                _type: "light",
                _light: "directional",
                color: "hsl(0, 100%, 100%)",
                intensity: 1,
                _position: { x: 0, y: 3, z: 2 },
            },
        },
        _cameras: {
            "main-cam": {
                _id: "main-cam",
                _type: "camera",
                _camera: "perspective",
                _position: { x: 0, y: 2, z: 5 },
                _rotation: { x: 0, y: 0, z: 0 },
                _disable_frame_3d_state: true,
                _3d_set_once: true,
                _positional_audio_listener: true,
                fov: 50,
                ratio: window.innerWidth / window.innerHeight,
                far: 1000,
                close: 0.01,
            }
        },
        _controls: {
            "cam-control": {
                _type: "orbit",
                _active: true,
                _params: {
                    enableDamping: true,
                    minPolarAngle: Math.PI / 6,
                    maxPolarAngle: Math.PI / 1.8,
                    minZoom: 1,
                    minDistance: 1,
                    maxDistance: 16,
                    rotateSpeed: 0.5,
                    autoRotateSpeed: 1,
                    target: new THREE.Vector3(0, 1.75, 0)
                }
            },
            "transform": {
                _type: "transform",
                _active: true
            },
        },
        _objects: {
            
           
            floor: {
                _id: "floor",
                _type: "circle",
                // visible: false,
                // layers: { enable: 1 },
                _geometry: {
                    // _type: "plane-geometry",
                    radius: 5,
                    segments: 24,
                    // width: 10,
                    // height: 10,
                    // widthSegments: 50,
                    // heightSegments: 50,

                },
                _material: {
                    _type: "standard-material",
                    color: "#ffffff",
                    side: 1,
                    transparent: true,
                    opacity: 1,
                    wireframe: true
                },
                _position: { x: 0, y: 1, z: 0 },
                _rotation: { x: Math.PI / 2, y: 0, z: 0 },
                // _enable_physics: true,
                // _mass: 0,
                // _on_frame:"rotation x:0.01 y:++0.01 z:--0.01",
                
            },
            "robot": {
                _id: "robot",
                _type: "xmodel",
                _model_url: "public/maia-c.glb",
                _position: { x: 0, y: 1.5, z: 0 },

                // _load_animations: true,
                _auto_play_animation: true,
            },
            // "home2": {
            //     _id: "home2",
            //     _type: "xmodel",
            //     _position: { x: -5, y: 1, z: 0 },
            //     _model_url: "/public/stadium.glb",
            // }

        },
        // _background: {
        //     _type: "gradient",
        //     _params: {
        //         // _color: "red",
        //         _color1:"red",
        //         _color2:"blue",
        //         // _direction_deg:"45",
        //         // _path:"/public/sky",
        //         // _px:"px.png",
        //         // _nx:"nx.png",
        //         // _py:"py.png",
        //         // _ny:"ny.png",
        //         // _pz:"pz.png",
        //         // _nz:"nz.png",


        //         // _url:"/public/industrial_sunset_02_puresky_1k.hdr"
        //         // _url:"/public/digital_painting_moon.jpg" //shpere
        //         // _url:"https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?cs=srgb&dl=pexels-castorly-stock-3768263.jpg&fm=jpg" //image
        //         // _url: "https://cdn.aimeverse.com/get/8f0729b0-5f6f-491b-a067-acd3fca703b4", //video
        //         //"/public/digital-screen.mp4"

        //     }
        // }
            


    },
}


async function main() {
    //display Xpell engine info
    _x.verbose()

    _x.info()

    //load Xpell UI (XUI) Module
    _x.loadModule(XUI)
    _x.loadModule(X3D)
    
    // XUI.importObject("joystick", XJoystick)
    // XUI.importObjectPack(XEditor)

    _x.start()



    // const xx = { 
    //     "_id": "floor", "_children": [],
    //     "_type": "circle", "_mass": 0, "_enable_physics": true, 
    //     "_position": { "x": 0, "y": 0.01, "z": 0 }, 
    //     "_rotation": { "x": 1.5707963267948966, "y": 0, "z": 0 },
    //     "_scale": { "x": 1, "y": 1, "z": 1 }, 
    //     "_on_frame": "follow-joystick", 
    //     "_fade_duration": 0.25, "_name": "floor", "_geometry": { "_id": "83122cdc-f752-4b2e-89a5-024b6e473da1", "_children": [], "_type": "circle-geometry", "_position": { "x": 0, "y": 0, "z": 0 }, "_rotation": { "x": 0, "y": 0, "z": 0 }, "_scale": { "x": 1, "y": 1, "z": 1 }, "_fade_duration": 0.25, "_name": "83122cdc-f752-4b2e-89a5-024b6e473da1", "radius": 5, "segments": 24, "thetaStart": 0, "thetaLength": 6.283185307179586, "width": 0, "height": 0, "depth": 0, "_animation": true }, "_material": { "_id": "9c1452c3-75f0-4215-8361-62f97d64bfbd", "_children": [], "_type": "standard-material", "_position": { "x": 0, "y": 0, "z": 0 }, "_rotation": { "x": 0, "y": 0, "z": 0 }, "_scale": { "x": 1, "y": 1, "z": 1 }, "_fade_duration": 0.25, "_name": "9c1452c3-75f0-4215-8361-62f97d64bfbd", "color": "#ffffff", "side": 1, "transparent": true, "opacity": 1, "wireframe": true, "_animation": true }, "name": "floor", "_animation": true }
    
    // // X3D._log_rules.createObject = true
    
    await X3D.loadApp(world)
    // const xobj = await X3D.addRaw(xx)

//    console.log(X3D.om.getObject("pointer2").toXData())
    const loadingLabel =  {
        _id: "loading-label",
        _type: "label",
        _text: "Loading...",
        _data_source: "x3d-loader",
        _parent_element: "player",
        // _visible: false,
        style:"color:white",
        _on_click: "log",
        _on_data:(obj,data:any) => {
            // console.log(data);
             
            obj.setText(data._loaded + " / " + data._total)
            obj.emptyDataSource()
            
        },
        
        _on:{
            "e1":(obj,data) => {
                obj.setText("event arrived")
                console.log(data);
                
            },    
        },
    }
    XUI.loadObject(loadingLabel)

    // XUI.loadObject({
    //     _id: "mysvg",
    //     _type: "svg",
    //     viewBox: "0 0 100 100",
    //     height: "100px",
    //     width: "100px",
    //     _children: [
    //         {
    //             _type: "circle",
    //             cx: "50",
    //             cy: "50",
    //             r: "40",
    //             stroke: "green",
    //             "stroke-width": "4",
    //             fill: "yellow"
    //         },
    //         {
    //             _type: "rect",
    //             x: "15",
    //             y: "15",
    //             width: "70",
    //             height: "70",
    //             stroke: "red",
    //             "stroke-width": "4",
    //         }
    //     ],
    //     _on_frame: (obj, f) => {
    //         // console.log("click", obj, e);
    //         const colors = ["red", "green", "blue", "yellow", "orange", "purple"]
    //         // obj.getDOMObject().children[0].style.fill = colors[f % colors.length]
    //         obj.getDOMObject().children[1].style.fill = "hsl(" + f % 360 + ",100%,50%)"
    //     },
    //     _parent_element: "player",
    // })


    // _xd._o["loading-label"] = "loadingLabel"
    // console.log(_xd._o)

  //fire the event every 1 second

   

    // const rob=X3D.getObject("robot")

    // console.log(rob);
    
    // rob._on_frame = (obj, f) => {
    //     obj._rotation.y += 0.01
    // }
    
    // console.log(_xem)
    // document.dispatchEvent(new CustomEvent("e1", { detail: { "a": 1, "b": 2 } }))
    
}

// console.log(X3D.world)

// _xem.on("e1", (data) => { console.log(data) },{_once:true,_support_html:true})
// _xem.once("e1", (data) => { console.log(data) },true)

main().then(res => { })


