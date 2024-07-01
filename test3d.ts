import * as THREE from 'three'

import { XUI, _xem, X3D, X3DApp, _x, _xd, X3DObject, XGeometry, XMaterial } from "./index"

export const TWO_PI = 2 * Math.PI;

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
                _color: 0xffffff,
                _intensity: 0.5,
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
                _positional_audio_listener: false,
                _fov: 50,
                _ratio: window.innerWidth / window.innerHeight,
                _far: 1000,
                _close: 0.01,
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

            // floor: {
            //     _id: "floor",
            //     _type: "circle",
            //     // _on_mount: "hide-me",
            //     _nano_commands: {
            //         "hide-me": (xcmd, xobj) => {
            //             xobj.getThreeObject().visible = false
            //         }
            //     },
            //     // visible: false,
            //     // layers: { enable: 1 },
            //     _geometry: {
            //         // _type: "plane-geometry",
            //         radius: 5,
            //         segments: 4,
            //         width: 10,
            //         height: 10,
            //         widthSegments: 50,
            //         heightSegments: 50,

            //     },
            //     _material: {
            //         _type: "standard-material",
            //         color: "#ffff00",
            //         side: 2,
            //         // transparent: true,
            //         // opacity: 1,
            //         wireframe: false
            //     },
            //     _position: { x: 0, y: -2, z: 0 },
            //     _rotation: { x: Math.PI / 2, y: 0, z: 0 },
            //     // _enable_physics: true,
            //     // _mass: 0,
            //     _on_frame: "spin z:0.01"
            //     //"rotation  z:--0.01"

            //     // (obj,f) => {
            //     //     //rotate the object on the y axis
            //     //     obj._rotation.z += 0.001
            //     // }


            //     // "rotation x:0.01 y:++0.01 z:--0.01",

            // },
            // "robot": {
            //     _id: "robot",
            //     _type: "xmodel",
            //     _model_url: "https://cdn.aimeverse.com/u/cakering-level",
            //     // _load_animations: true,
            //     _auto_play_animation: true,
            // },

            // "pole": {
            //     _type: "cylinder",
            //     _geometry: {


            //         _type: "cylinder-geometry",
            //         radiusTop: 0.5,
            //         radiusBottom: 0.5,
            //         height: 6,
            //         radialSegments: 32,
            //         heightSegments: 1,
            //         openEnded: false
            //     },
            //     _material: {
            //         _type: "standard-material",
            //         color: 0xff0000,
            //         side: 2
            //     },
            //     _position: {x: 0, y: 3, z: 0},
            //     _rotation: {x: 0, y: 0, z: 0},
            //     _scale: {x: 1, y: 1, z: 1},
            //     _id: "cylinder-1"
            // },

            "ball": {
                _id: "ball",
                _type: "dyna-sphere",
                _radius: 1,
                _points: 1280,
                _position: { x: 0, y: 2, z: 0 },
                _rotation: { x: 0, y: 0, z: 0 },
                
                
                _on_frame:  "spin y:0.01",

            },
        },
        _background: {
            _type: "solid",
            _params: {
                // _color: "red",
                _color1: "black",
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

            }
        }

    },
}



async function main() {
    //display Xpell engine info
    _x.verbose = true

    _x.info()

    //load Xpell UI (XUI) Module
    // _x.loadModule(XUI)
    _x.loadModule(X3D)
    _x.loadModule(XUI)

    // XUI.importObject("joystick", XJoystick)
    // XUI.importObjectPack(XEditor)

    _x.start()

    XUI.createPlayer()
    XUI.add({
        _type: "button",
        _text: "Start",
        style:"position:absolute; top:10px; right:10px;",
        // _parent_element: "xplayer",
        _on_click: async (xobj) => {
            console.log("Start");
            
            const ball = X3D._o["ball"]

            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            const microphone = await navigator.mediaDevices.getUserMedia({ audio: true });
            const source = audioContext.createMediaStreamSource(microphone);
            source.connect(analyser);
            analyser.fftSize = 256;
            ball._audio_analyzer = analyser;
        }
    })

    await X3D.loadApp(world)

   
    
    // //get anaylzer from microphone
   


}

main().then(res => { })

