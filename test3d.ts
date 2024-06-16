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
                _radius: 2,
                _points: 5000,
                _position: { x: 0, y: 2, z: 0 },
                _rotation: { x: 0, y: 1, z: 0 },
                _on_frame:  "spin y:0.003",

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


// export const COORDINATE_TYPE = {
//     CARTESIAN_1D: "Cartesian_1D",
//     CARTESIAN_2D: "Cartesian_2D",
//     CARTESIAN_3D: "Cartesian_3D",
//     CARTESIAN_CUBE_FACES: "Cartesian_CubeFaces",
//     POLAR: "Polar",
// } as const;


class DynaSphere extends X3DObject {

    _last_frame_time = 0
    _points = 1000
    _radius = 0.5
    _geometry: THREE.BufferGeometry
    _material: THREE.PointsMaterial
    _audio_analyzer: any
    declare _three_obj: THREE.Points;
    _start_position: any
    _start_colors: any

    constructor(data: any, defaults = {
        _type: "dyna-sphere",
    }) {
        super(data, defaults, true)
        this.parse(data)
        this._three_class = THREE.Points
        this._geometry = new THREE.BufferGeometry();

        const positions = new Float32Array(this._points * 3);
        const colors = new Float32Array(this._points * 4);
        const sizes = new Float32Array(this._points);

        // Set up the initial positions of the points
        for (let i = 0; i < this._points; i++) {
            const position = this.getRandomPointOnSphere(this._radius);
            positions[i * 3] = position.x;
            positions[i * 3 + 1] = position.y;
            positions[i * 3 + 2] = position.z;

            const clr = new THREE.Color();
            clr.setHSL(Math.random(), 1.0, 0.5);
            colors[i * 3] = clr.r;
            colors[i * 3 + 1] = clr.g;
            colors[i * 3 + 2] = clr.b;
            colors[i * 3 + 3] = 0.2;
        }
        // console.log(positions);

        this._geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this._geometry.setAttribute('color', new THREE.BufferAttribute(colors, 4));
        // this._geometry.setAttribute('size', new THREE.BufferAttribute(sizes, 1));

        this._material = new THREE.PointsMaterial({vertexColors:true,size:0.05,transparent: true });

    }

    getThreeObject() {
        if (!this._three_obj) {
            this._threes_class_args = [this._geometry, this._material]
        }
        return super.getThreeObject()
    }

    getRandomPointOnSphere(radius) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        return new THREE.Vector3(x, y, z);
    }

    getAverageVolume(array) {
        let values = 0;
        const length = array.length;
        for (let i = 0; i < length; i++) {
            values += array[i];
        }
        return values / length;
    }


    async onFrame(frameNumber: number): Promise<void> {
        
        if (this._audio_analyzer) {

            const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);
            this._audio_analyzer.getByteFrequencyData(dataArray);
            this._audioData = dataArray;

            // Update radius based on audio data
            
            
            const average = this.getAverageVolume(dataArray);
            console.log(dataArray,average);
            // const radius = average / 256 *100 ; // Adjust multiplier based on desired range
            // this._radius = radius;

            // Update point positions
            if(! this._start_position){
                this._start_position = this._three_obj.geometry.attributes.position.clone();
                this._start_colors = this._three_obj.geometry.attributes.color.clone();
            }
            const positions = this._start_position.array;
            const newPositions = new Float32Array(this._points * 3);
            const radiusMultiplier = 0.4 + average /256
            const colors = this._start_colors.array;
            const newColors = new Float32Array(this._points * 4);
            for (let i = 0; i < this._points; i++) {
                const x = positions[i * 3];
                const y = positions[i * 3 + 1];
                const z = positions[i * 3 + 2];

                // const newPosition = this.getRandomPointOnSphere(this._radius);
                newPositions[i * 3] = x * radiusMultiplier;
                newPositions[i * 3 + 1] = y * radiusMultiplier;
                newPositions[i * 3 + 2] = z  * radiusMultiplier;


                const clr = new THREE.Color(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
                // dimm the color based on the audio data
                clr.r = clr.r * (1 - average / 256) + 0.2;
                clr.g = clr.g * (1 - average / 256) + 0.2;
                clr.b = clr.b * (1 - average / 256) + 0.2;
                
                newColors[i * 3] = clr.r;
                newColors[i * 3 + 1] = clr.g;
                newColors[i * 3 + 2] = clr.b;
                newColors[i * 3 + 3] = 0.2;
            }

            this._three_obj.geometry.setAttribute('position', new THREE.BufferAttribute(newPositions, 3));
            this._three_obj.geometry.setAttribute('color', new THREE.BufferAttribute(newColors, 4));
        }
        await super.onFrame(frameNumber)
    }
}



X3D.importObject("dyna-sphere", <any>DynaSphere)

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

