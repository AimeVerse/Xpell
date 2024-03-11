
// import * as THREE from 'three'

// import {XUI,_xem,X3D, X3DApp,_x,_xd} from "./index"

// export const world: X3DApp = {
//     "_parent_element": "x3d-player",
//     _physics: {
//         _engine: "cannon.js",
//         _active: false,
//         _debug: true
//     },
//     _scene: {
//         _raycast: true,
//         _helpers: {
//             "axes": {
//                 _type: "axes",
//                 _active: true,
//                 _params: { 
//                     size: 15,
//                  }
//             }
//         },
//         _lights: {
//             "main": {
//                 _id: "ambient-light",
//                 _type: "light",
//                 _light: "ambient",
//                 color: 0x000000
//             },
//             "p1": {
//                 _id: "directional-light",
//                 _type: "light",
//                 _light: "directional",
//                 color: "hsl(0, 100%, 100%)",
//                 intensity: 1,
//                 _position: { x: 0, y: 3, z: 2 },
//             },
//             "p2": {
//                 _id: "spotlight-light",
//                 _type: "light",
//                 _light: "spotlight",
//                 _color: "hsl(60, 100%, 50%)",
//                 intensity: 1,
//                 _position: { x: 0, y: 2.5, z: -0.3},
//             }
//         },
//         _cameras: {
//             "main-cam": {
//                 _id: "main-cam",
//                 _type: "camera",
//                 _camera: "perspective",
//                 _position: { x: 0, y: 30, z: 100 },
//                 _rotation: { x: 0, y: 0, z: 0 },
//                 _disable_frame_3d_state: true,
//                 _3d_set_once: true,
//                 fov: 50,
//                 ratio: window.innerWidth / window.innerHeight,
//                 far: 1000,
//                 close: 0.01,
//                 _positional_audio_listener: true
//             }
//         },
//         _controls: {
//             "cam-control": {
//                 _type: "orbit",
//                 _active: true,
//                 _params: {
//                     enableDamping: true,
//                     minPolarAngle: Math.PI / 6,
//                     maxPolarAngle: Math.PI / 1.8,
//                     minZoom: 1,
//                     minDistance: 1,
//                     maxDistance: 16,
//                     rotateSpeed: 0.5,
//                     autoRotateSpeed: 1,
//                     target: new THREE.Vector3(0, 1.75, 0)
//                 }
//             },
//             "transform": {
//                 _type: "transform",
//                 _active: true
//             },
//         },
//         _objects: {
            
//             floor: {
//                 _id: "floor",
//                 _type: "box",
//                 _geometry: {
//                     _type: "box-geometry",
//                     width: 12,
//                     height: 0.5,
//                     depth: 10,
//                     widthSegments: 1,
//                     heightSegments: 1,
//                     depthSegments: 1
//                 },
//                 _material: {
//                     _type: "standard-material",
//                     color: 0xffffff,
//                     side: 2
//                 },
//             },

//             "stageCurtain": {
//                 _id: "stageCurtain",
//                 _type: "xmodel",
//                 _model_url: "/stage_curtain/scene.gltf",
//                 // _load_animations: true,
//                 // _auto_play_animation: true,
//             },

//             //can you add the stage curtain to the scene in the path C:\Users\97253\Desktop\Aime\Xpell\imgs\stage-curtains\source with textures in path C:\Users\97253\Desktop\Aime\Xpell\imgs\stage-curtains\textures
            
            

           
//         },
//         _background: {
//             _type: "gradient",
//             _params: {
//                 _color1:"red",
//                 _color2: "#800020",
            

//             }
//         }
//     },
// }


// async function main() {
//     //display Xpell engine info
//     _x.verbose()

//     _x.info()

//     //load Xpell UI (XUI) Module
//     _x.loadModule(XUI)
//     _x.loadModule(X3D)
    


//     _x.start()


    
//     await X3D.loadApp(world)

//     const loadingLabel =  {
//         _id: "loading-label",
//         _type: "label",
//         _text: "Loading...",
//         _data_source: "x3d-loader",
//         _parent_element: "player",
//         // _visible: false,
//         style:"color:white",
//         _on_click: "log",
//         _on_data:(obj,data:any) => {
//             // console.log(data);
             
//             obj.setText(data._loaded + " / " + data._total)
//             obj.emptyDataSource()
            
//         },
        
//         _on:{
//             "e1":(obj,data) => {
//             },    
//         },
//     }
//     XUI.loadObject(loadingLabel)


//     await _xem.fire("e1", { "a": 1, "b": 2 },true)

//     const rob=X3D.getObject("robot")
// }


// main().then(res => { }) 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////




import * as THREE from 'three'

import {XUI,_xem,X3D, X3DApp,_x,_xd} from "./index"

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
            // "main": {
            //     _id: "ambient-light",
            //     _type: "light",
            //     _light: "ambient",
            //     color: 0x888888
            // },
            // "p1": {
            //     _id: "directional-light",
            //     _type: "light",
            //     _light: "directional",
            //     color: "hsl(0, 100%, 100%)",
            //     intensity: 1,
            //     _position: { x: 0, y: 3, z: 2 },
            // },
            "p2": {
                _id: "spotlight-light",
                _type: "light",
                _light: "spotlight",
                _color: "#ff0000",//red 
                _intensity: 1,
                _position: { x: 0, y: 3, z: 2},
               
                _on_mount: (obj) => {
                    // console.log(obj)
                    // console.log(obj._three_obj.color.toHexString())
                },
                _on_frame: (obj, f) => 
                {
                    // const red = Math.floor(Math.random() * 256);
                    // const green = Math.floor(Math.random() * 256);
                    // const blue = Math.floor(Math.random() * 256);
                    // obj._three_obj.color = {isColor: true, r: red, g: green, b: blue};
                    // console.log(obj._three_obj.color)
                }
            },

            
        },
        _cameras: {
            "main-cam": {
                _id: "main-cam",
                _type: "camera",
                _camera: "perspective",
                _position: { x: 0, y: 2, z: 50 },
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
                    color: "#00ffff",
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
            // "robot": {
            //     _id: "robot",
            //     _type: "xmodel",
            //     _model_url: "https://cdn.aimeverse.com/u/cakering-level",
            //     // _load_animations: true,
            //     _auto_play_animation: true,
            // },

            "pole": {
                _type: "cylinder",
                _geometry: {

                    
                    _type: "cylinder-geometry",
                    radiusTop: 0.5,
                    radiusBottom: 0.5,
                    height: 6,
                    radialSegments: 32,
                    heightSegments: 1,
                    openEnded: false
                },
                _material: {
                    _type: "standard-material",
                    color: 0xff0000,
                    side: 2
                },
                _position: {x: 0, y: 3, z: 0},
                _rotation: {x: 0, y: 0, z: 0},
                _scale: {x: 1, y: 1, z: 1},
                _id: "cylinder-1"
            },

            "ball": {
                _id:"my-sphere",
                _type: "sphere",
                _geometry: {
                    _type: "sphere-geometry",
                    radius: 0.5,    
                    widthSegments: 32,
                    heightSegments: 32,
                    phiStart: 0,
                    phiLength: Math.PI * 2,
                    thetaStart: 0,
                    thetaLength: Math.PI
                },
                _material: {
                    _type: "standard-material",
                    color: 0xffffff,
                },
       
                _position: {x: 3, y: 4, z: 0},
                _rotation: {x: 0, y: 0, z: 0},
                _on_frame:  "orbit speed:0.2 radius:2",

                "square": {
                    _id:"my-square",
                    _type: "box",
                    _geometry: {
                        _type: "box-geometry",
                        width: 10,
                        height: 10,
                        depth: 10,
                        widthSegments: 1,
                        heightSegments: 1,
                        depthSegments: 1
                    },
                    _material: {
                        _type: "standard-material",
                        color: 0xffffff,
                        side: 2
                    },
        
                    // _position: {x: 0, y: 5, z: 0},
                    // _rotation: {x: 0, y: 0, z: 0},

                    // _on_frame:  (obj, f) => {
                    //     console.log(obj)
                    // }

                }

                // _on: {
                //     "turn":(obj,data) => {
                //         console.log("turnaround");
                //     },  

                // on_frame = (obj, f) => {
                //     console.log(f)
                //     console.log("a")
                //     const radius = 3
                //     const speed = 0.01
                //     const angle = f * speed
                //     obj.position.x = radius * Math.cos(angle)
                //     obj.position.z = radius * Math.sin(angle)
                // }
               
                // },
                
            }

            // "home2": {
            //     _id: "home2",
            //     _type: "xmodel",
            //     _position: { x: -5, y: 1, z: 0 },
            //     _model_url: "/public/stadium.glb",
            // }

        },
        _background: {
            _type: "solid",
            _params: {
                // _color: "red",
                _color1:"black",
                // _color2:"blue",
                // _direction_deg:"45",
                // _path:"/public/sky",
                // _px:"px.png",
                // _nx:"nx.png",
                // _py:"py.png",
                // _ny:"ny.png",
                // _pz:"pz.png",
                // _nz:"nz.png",


        //         // _url:"/public/industrial_sunset_02_puresky_1k.hdr"
        //         // _url:"/public/digital_painting_moon.jpg" //shpere
        //         // _url:"https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?cs=srgb&dl=pexels-castorly-stock-3768263.jpg&fm=jpg" //image
        //         // _url: "https://cdn.aimeverse.com/get/8f0729b0-5f6f-491b-a067-acd3fca703b4", //video
        //         //"/public/digital-screen.mp4"

        //     }
        // }
            
            }}

    },
}


async function main() {
    //display Xpell engine info
    _x.verbose = true

    _x.info()

    //load Xpell UI (XUI) Module
    // _x.loadModule(XUI)
    // _x.loadModule(X3D)
    
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





// import * as THREE from 'three'

// import {XUI,_xem,X3D, X3DApp,_x,_xd} from "./index"

// export const world: X3DApp = {
//     "_parent_element": "x3d-player",
//     _physics: {
//         _engine: "cannon.js",
//         _active: false,
//         _debug: true
//     },
//     _scene: {
//         _raycast: true,
//         _helpers: {
//             "axes": {
//                 _type: "axes",
//                 _active: false,
//                 _params: { size: 5 }
//             }
//         },
//         _lights: {
//             "main": {
//                 _id: "ambient-light",
//                 _type: "light",
//                 _light: "ambient",
//                 color: 0x888888
//             },
//             "p1": {
//                 _id: "directional-light",
//                 _type: "light",
//                 _light: "directional",
//                 color: "hsl(0, 100%, 100%)",
//                 intensity: 1,
//                 _position: { x: 0, y: 3, z: 2 },
//             },
//         },
//         _cameras: {
//             "main-cam": {
//                 _id: "main-cam",
//                 _type: "camera",
//                 _camera: "perspective",
//                 _position: { x: 0, y: 2, z: 5 },
//                 _rotation: { x: 0, y: 0, z: 0 },
//                 _disable_frame_3d_state: true,
//                 _3d_set_once: true,
//                 fov: 50,
//                 ratio: window.innerWidth / window.innerHeight,
//                 far: 1000,
//                 close: 0.01,
//                 _positional_audio_listener: true
//             }
//         },
//         _controls: {
//             "cam-control": {
//                 _type: "orbit",
//                 _active: true,
//                 _params: {
//                     enableDamping: true,
//                     minPolarAngle: Math.PI / 6,
//                     maxPolarAngle: Math.PI / 1.8,
//                     minZoom: 1,
//                     minDistance: 1,
//                     maxDistance: 16,
//                     rotateSpeed: 0.5,
//                     autoRotateSpeed: 1,
//                     target: new THREE.Vector3(0, 1.75, 0)
//                 }
//             },
//             "transform": {
//                 _type: "transform",
//                 _active: true
//             },
//         },
//         _objects: {
            
           
//             floor: {
//                 _id: "floor",
//                 _type: "circle",
//                 // visible: false,
//                 // layers: { enable: 1 },
//                 _geometry: {
//                     // _type: "plane-geometry",
//                     radius: 5,
//                     segments: 24,
//                     // width: 10,
//                     // height: 10,
//                     // widthSegments: 50,
//                     // heightSegments: 50,

//                 },
//                 _material: {
//                     _type: "standard-material",
//                     color: "#ffffff",
//                     side: 1,
//                     transparent: true,
//                     opacity: 1,
//                     // wireframe: true
//                 },
//                 _position: { x: 0, y: 0.01, z: 0 },
//                 _rotation: { x: Math.PI / 2, y: 0, z: 0 },
//                 _enable_physics: true,
//                 _mass: 0,
                
//             },
//             "robot": {
//                 _id: "robot",
//                 _type: "xmodel",
//                 _model_url: "https://cdn.aimeverse.com/u/cakering-level",
//                 // _load_animations: true,
//                 _auto_play_animation: true,
//             },
//             // "home2": {
//             //     _id: "home2",
//             //     _type: "xmodel",
//             //     _model_url: "/public/stage-c.gltf",
//             // }

//         },
//         _background: {
//             _type: "gradient",
//             _params: {
//                 // _color: "red",
//                 _color1:"red",
//                 _color2:"blue",
//                 // _direction_deg:"45",
//                 // _path:"/public/sky",
//                 // _px:"px.png",
//                 // _nx:"nx.png",
//                 // _py:"py.png",
//                 // _ny:"ny.png",
//                 // _pz:"pz.png",
//                 // _nz:"nz.png",


//                 // _url:"/public/industrial_sunset_02_puresky_1k.hdr"
//                 // _url:"/public/digital_painting_moon.jpg" //shpere
//                 // _url:"https://images.pexels.com/photos/3768263/pexels-photo-3768263.jpeg?cs=srgb&dl=pexels-castorly-stock-3768263.jpg&fm=jpg" //image
//                 // _url: "https://cdn.aimeverse.com/get/8f0729b0-5f6f-491b-a067-acd3fca703b4", //video
//                 //"/public/digital-screen.mp4"

//             }
//         }
            


//     },
// }


// async function main() {
//     //display Xpell engine info
//     _x.verbose()

//     _x.info()

//     //load Xpell UI (XUI) Module
//     _x.loadModule(XUI)
//     _x.loadModule(X3D)
    
//     // XUI.importObject("joystick", XJoystick)
//     // XUI.importObjectPack(XEditor)

//     _x.start()



//     // const xx = { 
//     //     "_id": "floor", "_children": [],
//     //     "_type": "circle", "_mass": 0, "_enable_physics": true, 
//     //     "_position": { "x": 0, "y": 0.01, "z": 0 }, 
//     //     "_rotation": { "x": 1.5707963267948966, "y": 0, "z": 0 },
//     //     "_scale": { "x": 1, "y": 1, "z": 1 }, 
//     //     "_on_frame": "follow-joystick", 
//     //     "_fade_duration": 0.25, "_name": "floor", "_geometry": { "_id": "83122cdc-f752-4b2e-89a5-024b6e473da1", "_children": [], "_type": "circle-geometry", "_position": { "x": 0, "y": 0, "z": 0 }, "_rotation": { "x": 0, "y": 0, "z": 0 }, "_scale": { "x": 1, "y": 1, "z": 1 }, "_fade_duration": 0.25, "_name": "83122cdc-f752-4b2e-89a5-024b6e473da1", "radius": 5, "segments": 24, "thetaStart": 0, "thetaLength": 6.283185307179586, "width": 0, "height": 0, "depth": 0, "_animation": true }, "_material": { "_id": "9c1452c3-75f0-4215-8361-62f97d64bfbd", "_children": [], "_type": "standard-material", "_position": { "x": 0, "y": 0, "z": 0 }, "_rotation": { "x": 0, "y": 0, "z": 0 }, "_scale": { "x": 1, "y": 1, "z": 1 }, "_fade_duration": 0.25, "_name": "9c1452c3-75f0-4215-8361-62f97d64bfbd", "color": "#ffffff", "side": 1, "transparent": true, "opacity": 1, "wireframe": true, "_animation": true }, "name": "floor", "_animation": true }
    
//     // // X3D._log_rules.createObject = true
    
//     await X3D.loadApp(world)
//     // const xobj = await X3D.addRaw(xx)

// //    console.log(X3D.om.getObject("pointer2").toXData())
//     const loadingLabel =  {
//         _id: "loading-label",
//         _type: "label",
//         _text: "Loading...",
//         _data_source: "x3d-loader",
//         _parent_element: "player",
//         // _visible: false,
//         style:"color:white",
//         _on_click: "log",
//         _on_data:(obj,data:any) => {
//             // console.log(data);
             
//             obj.setText(data._loaded + " / " + data._total)
//             obj.emptyDataSource()
            
//         },
        
//         _on:{
//             "e1":(obj,data) => {
//                 // console.log("E1",data);
//             },    
//         },
//     }
//     XUI.loadObject(loadingLabel)

//     // XUI.loadObject({
//     //     _id: "mysvg",
//     //     _type: "svg",
//     //     viewBox: "0 0 100 100",
//     //     height: "100px",
//     //     width: "100px",
//     //     _children: [
//     //         {
//     //             _type: "circle",
//     //             cx: "50",
//     //             cy: "50",
//     //             r: "40",
//     //             stroke: "green",
//     //             "stroke-width": "4",
//     //             fill: "yellow"
//     //         },
//     //         {
//     //             _type: "rect",
//     //             x: "15",
//     //             y: "15",
//     //             width: "70",
//     //             height: "70",
//     //             stroke: "red",
//     //             "stroke-width": "4",
//     //         }
//     //     ],
//     //     _on_frame: (obj, f) => {
//     //         // console.log("click", obj, e);
//     //         const colors = ["red", "green", "blue", "yellow", "orange", "purple"]
//     //         // obj.getDOMObject().children[0].style.fill = colors[f % colors.length]
//     //         obj.getDOMObject().children[1].style.fill = "hsl(" + f % 360 + ",100%,50%)"
//     //     },
//     //     _parent_element: "player",
//     // })


//     // _xd._o["loading-label"] = "loadingLabel"
//     // console.log(_xd._o)


//     await _xem.fire("e1", { "a": 1, "b": 2 },true)

//     const rob=X3D.getObject("robot")
//     // rob._on_frame = (obj, f) => {
//     //     obj._rotation.y += 0.01
//     // }
    
//     // console.log(_xem)
//     // document.dispatchEvent(new CustomEvent("e1", { detail: { "a": 1, "b": 2 } }))
    
// }
// // console.log(X3D.world)

// // _xem.on("e1", (data) => { console.log(data) },{_once:true,_support_html:true})
// // _xem.once("e1", (data) => { console.log(data) },true)

// main().then(res => { })
