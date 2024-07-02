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
                _points: 5000,
                _position: { x: 0, y: 2, z: 0 },
                _rotation: { x: 0, y: 1, z: 0 },
                // _on_frame:  "spin y:0.003",

            },
            "line": {
                _id: "line",
                _type: "dyna-line",
            },
            "bezier-curve": {
                _id: "bezier-curve",
                _type: "dyna-bezier-curve",
                _on_frame:  "spin y:0.0001",

            },
            "audio-light-columns": {
                _id: "audio-light-columns",
                _type: "audio-light-columns",
                _position: { x: 0, y: 0, z: 0 },
                _rotation: { x: 0, y: 0, z: 0 },
                _scale: { x: 1, y: 1, z: 1 },
                // _on_frame: "spin y:0.0001",
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
    }) 
    {
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
        // this._material = new THREE.MeshPhongMaterial({ color: 0xff00ff });

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

    // async onFrame(frameNumber: number): Promise<void> {
    //     if (this._audio_analyzer) {
    //         const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);   
    //         this._audio_analyzer.getByteFrequencyData(dataArray);
    //         this._audioData = dataArray;

    //         //get random point on sphere
    //         if (!this._start_position) {
    //             this._start_position = this._three_obj.geometry.attributes.position.clone();
    //             this._start_colors = this._three_obj.geometry.attributes.color.clone();

    //             console.log(this._start_position);
    //             console.log(this._start_colors);

    //             console.log(this._points)

    //             let random_index = Math.floor(Math.random() * this._points);
    //             if (random_index % 3 == 1) {
    //                 random_index += 2;
    //             } else if (random_index % 3 == 2) {
    //                 random_index += 1;
    //             }
    //             console.log(random_index);

    //             let total_points = 3000;

    //             //find 



                

    //             //get random point on sphere that is not start_point
                
    //         }            
    //     }
    // }

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


class DynaLine extends X3DObject {
    _geometry: THREE.BufferGeometry;
    _material: THREE.LineBasicMaterial;
    declare _three_obj: THREE.LineSegments;
    _num_of_bars = 9; 

    constructor(data: any, defaults = { _type: "dyna-line" }) {
        super(data, defaults, true);
        this.parse(data);
        this._geometry = new THREE.BufferGeometry();

        const positions = new Float32Array(this._num_of_bars * 3 * 2); // 2 vertices per line
        const indices = new Uint16Array(this._num_of_bars * 2); // 2 indices per line
        const baseHeight = 0.05;
        for (let i = 0; i < this._num_of_bars; i++) {
            const xOffset = (i - this._num_of_bars / 2) * 0.1;

            positions[i * 6] = xOffset;      
            positions[i * 6 + 1] = baseHeight;      
            positions[i * 6 + 2] = 0;       

            positions[i * 6 + 3] = xOffset;
            positions[i * 6 + 4] = 0;
            positions[i * 6 + 5] = 0;

            indices[i * 2] = i * 2;
            indices[i * 2 + 1] = i * 2 + 1;
        }

        this._geometry.setIndex(new THREE.BufferAttribute(indices, 1));
        this._geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
        this._material = new THREE.LineBasicMaterial({ color: 0xffffff });

        this._three_obj = new THREE.LineSegments(this._geometry, this._material);
    }


    getThreeObject() {
        if (!this._three_obj) {
            this._threes_class_args = [this._geometry, this._material]
        }
        return super.getThreeObject()
    }


    // async onFrame(frameNumber: number): Promise<void> {
    //     if (this._audio_analyzer) {
    //         const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);
    //         this._audio_analyzer.getByteFrequencyData(dataArray);

    //         // console.log(this._audio_analyzer);

    //         // console.log(dataArray); 
    
    //         const positions = this._geometry.attributes.position.array;
    //         const baseHeight = 0.05;
    //         for (let i = 0; i < this._num_of_bars; i++) {
    //             const dynamicHeight = dataArray[i] * 0.01;
    //             const totalHeight = baseHeight + dynamicHeight;

    //             // positions[i * 6 + 1] = totalHeight;

                
    //             positions[i * 6 + 1] = -totalHeight / 2;
    //             positions[i * 6 + 4] = totalHeight / 2;
    //         }
            
    //         this._geometry.attributes.position.needsUpdate = true;
    //     }
    //     await super.onFrame(frameNumber);
    // }

    async onFrame(frameNumber: number): Promise<void> {
        if (this._audio_analyzer) {
            const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);
            this._audio_analyzer.getByteFrequencyData(dataArray);
            this._audioData = dataArray;
    
            console.log(dataArray, "Audio data");
    
            const time = frameNumber * 0.05; // Scale the frame number to adjust the speed of the sine wave
            const positions = this._geometry.attributes.position.array; // Access the position array directly
    
            for (let i = 0; i < this._num_control_points; i++) {
                // Calculate the baseline sine wave position
                const baselineY = Math.sin(time + i * Math.PI * 2 / this._num_control_points) * 5; // Sine wave across control points
    
                // Modulate with audio data
                const modulatedY = dataArray[i] / 255 * 5; // Normalize and scale audio data
                const newY = baselineY + modulatedY; // Combine sine wave and audio data effect
    
                // Update control points
                this._control_points[i].y = newY;
    
                // Update curve points
                const curve = this._curve_points[i];
                curve.v0.y = newY;
    
                // Redefine curve points and directly update the geometry
                const curvePoints = curve.getPoints(50);
                for (let j = 0; j < curvePoints.length; j++) {
                    const pointIndex = i * 50 * 3 + j * 3;
                    positions[pointIndex + 1] = curvePoints[j].y; // Update y position
                }
    
                // Adjust next control point
                const nextIndex = (i + 1) % this._num_control_points;
                const baselineYNext = Math.sin(time + nextIndex * Math.PI * 2 / this._num_control_points) * 5;
                const modulatedYNext = dataArray[nextIndex] / 255 * 5;
                const newYNext = baselineYNext + modulatedYNext;
    
                this._control_points[nextIndex].y = newYNext;
    
                curve.v3.y = newYNext;
                curve.v1.y = (newY + newYNext) / 2;  // Midpoint control
                curve.v2.y = (newY + newYNext) / 2;  // Midpoint control
            }
    
            this._geometry.attributes.position.needsUpdate = true; // Mark the position attribute as needing an update
        }
    
        await super.onFrame(frameNumber);
    }
    
    
      

}

class DynaBezierCurve extends X3DObject {
    _last_time_frame = 0
    _geometry: THREE.BufferGeometry
    _material: THREE.LineBasicMaterial
    _audio_analyzer: any
    declare _three_obj: THREE.Line
    // _control_points: [];
    // _curve_points: [];
    _num_control_points = 16;
    _radius = 3;

    constructor(data: any, defaults = { _type: "dyna-bezier-curve" }) {
        super(data, defaults, true);
        this.parse(data);
        this._three_class = THREE.Line;


    
        const radius = 3;
        const TWO_PI = Math.PI * 2;
        const data_array = new Array(this._num_control_points).fill().map((_, i) => Math.random() * 1);
        let vertices = [];
        this._control_points = [];
        this._curve_points = [];

    
        for (let i = 0; i < this._num_control_points; i++) {
            const angle = i / this._num_control_points * TWO_PI;
            const nextAngle = ((i + 1) % this._num_control_points) / this._num_control_points * TWO_PI;
    
            const x0 = Math.cos(angle) * radius;
            // const y0 = data_array[i];
            const y0 = Math.sin(x0);
            // const y0 = 0;
            const z0 = Math.sin(angle) * radius;

            const point = new THREE.Vector3(x0, y0, z0);
            this._control_points.push(point);
    
            const x1 = Math.cos(nextAngle) * radius;
            // const y1 = data_array[(i + 1) % this._num_control_points];
            const y1 = Math.sin(x1);
            // const y1 = y0
            const z1 = Math.sin(nextAngle) * radius;

            const nextPoint = new THREE.Vector3(x1, y1, z1);
    
            const cx0 = x0 + 0.3 * Math.cos(angle - Math.PI / 4);
            const cz0 = z0 + 0.3 * Math.sin(angle - Math.PI / 4);
            // const cy0 = (y0 + y1) / 2;
            const cy0 = Math.sin(cx0);
    
            const cx1 = x1 - 0.3 * Math.cos(nextAngle + Math.PI / 4);
            const cz1 = z1 - 0.3 * Math.sin(nextAngle + Math.PI / 4);
            // const cy1 = (y0 + y1) / 2;
            const cy1 = Math.sin(cx1);
            // const cy1 = 0;

            
            const curve = new THREE.CubicBezierCurve3(
                new THREE.Vector3(x0, y0, z0),
                new THREE.Vector3(cx0, cy0, cz0),
                new THREE.Vector3(cx1, cy1, cz1),
                new THREE.Vector3(x1, y1, z1)
            );
            this._curve_points.push(curve);
    
            const curvePoints = curve.getPoints(50);
            curvePoints.forEach((point) => {
                vertices.push(point.x, point.y, point.z);
            });
        }
    
        // Create the BufferGeometry and add the vertices
        this._geometry = new THREE.BufferGeometry();
        //make control points visible

        this._geometry.setAttribute('position', new THREE.BufferAttribute(new Float32Array(vertices), 3));
        // this._material = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: true });

        this._material = new THREE.LineBasicMaterial({ color: 0xff00ff });
        // this._material = new THREE.MeshPhongMaterial({ color: 0xff00ff, flatShading: true, emissive: 0xff0000, emissiveIntensity: 0.3, specular: 0x111111, shininess: 100});
        this._three_obj = new THREE.Line(this._geometry, this._material);
    }

    

    getThreeObject() {
        if (!this._three_obj) {
            this._threes_class_args = [this._geometry, this._material]
        }
        return super.getThreeObject()
    }

    // async onFrame(frameNumber: number): Promise<void> {
    //     if (this._audio_analyzer) {

    //         const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);
    //         this._audio_analyzer.getByteFrequencyData(dataArray);
    //         this._audioData = dataArray;

    //         console.log(dataArray);

    //         const positions = this._geometry.attributes.position.array;
            

    //     }
    //     await super.onFrame(frameNumber)

    // }

////////////////

    // async onFrame(frameNumber: number): Promise<void> {
    //     if (this._audio_analyzer) {
    //         const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);
    //         this._audio_analyzer.getByteFrequencyData(dataArray);
    //         this._audioData = dataArray;
    
    //         console.log(dataArray);
    //         let decayRate = 0.9

    //         console.log(dataArray, "Before");
            
    //         dataArray.forEach((value, index) => {
    //             dataArray[index] = (1/(1 + decayRate ** index) ) * value
    //         })
    
    //         console.log(dataArray);
            
    //         // Update points based on the audio data
    //         for (let i = 0; i < this._num_control_points; i++) {



    //             // Update main points
    //             const newY = dataArray[i] / 255 * 10;  // Normalize and scale
    //             this._control_points[i].y = newY;
    
    //             // Assuming each control point affects two main points (i and i+1)
    //             const nextIndex = (i + 1) % this._num_control_points;
    //             const newYNext = dataArray[nextIndex] / 255 * 10;  // Normalize and scale
    //             this._control_points[nextIndex].y = newYNext;
    
    //             // Update curve control points, these could be adjusted more subtly
    //             const curve = this._curve_points[i];
    //             curve.v0.y = newY;
    //             curve.v1.y = (newY + newYNext) / 2;  // Midpoint control
    //             curve.v2.y = (newY + newYNext) / 2;  // Midpoint control
    //             curve.v3.y = newYNext;
    
    //             // Redefine curve points
    //             const curvePoints = curve.getPoints(50);
    //             const positions = this._geometry.attributes.position.array;
    //             for (let j = 0; j < curvePoints.length; j++) {
    //                 const pointIndex = i * 50 * 3 + j * 3;
    //                 positions[pointIndex + 1] = curvePoints[j].y;
    //             }
    //         }
    
    //         this._geometry.attributes.position.needsUpdate = true; // Important to update the geometry
    //     }
    
    //     await super.onFrame(frameNumber);
    // }

    async onFrame(frameNumber: number): Promise<void> {
        if (this._audio_analyzer) {
            const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);
            this._audio_analyzer.getByteFrequencyData(dataArray);
            this._audioData = dataArray;
    
            console.log(dataArray, "Audio data");
            
            const positions = this._geometry.attributes.position.array; // Access the position array directly
            let decayRate = 0.9;
            
            // Apply decay to the audio data
            dataArray.forEach((value, index) => {
                dataArray[index] = (1/(1 + decayRate ** index) ) * value;
            });
            
            // Update points based on the audio data
            for (let i = 0; i < this._num_control_points; i++) {
                const nextIndex = (i + 1) % this._num_control_points; // Ensures that the index wraps around
                const newY = dataArray[i] / 255 * 10;  // Normalize and scale
                this._control_points[i].y = newY;
                
                const newYNext = dataArray[nextIndex] / 255 * 10;  // Normalize and scale
                this._control_points[nextIndex].y = newYNext;
    
                // Update curve control points, these could be adjusted more subtly
                const curve = this._curve_points[i];
                curve.v0.y = newY;
                curve.v3.y = newYNext; // Ensures that the last curve point connects to the start
                curve.v1.y = (newY + newYNext) / 2;  // Midpoint control
                curve.v2.y = (newY + newYNext) / 2;  // Midpoint control
    
                // Redefine curve points and update positions in the geometry
                const curvePoints = curve.getPoints(50);
                for (let j = 0; j < curvePoints.length; j++) {
                    const pointIndex = i * 50 * 3 + j * 3;
                    positions[pointIndex] = curvePoints[j].x;
                    positions[pointIndex + 1] = curvePoints[j].y;
                    positions[pointIndex + 2] = curvePoints[j].z;
                }
            }
            
            this._geometry.attributes.position.needsUpdate = true; // Important to update the geometry
        }
    
        await super.onFrame(frameNumber);
    }
    

    // async onFrame(frameNumber: number): Promise<void> {
    //     if (this._audio_analyzer) {
    //         const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);
    //         this._audio_analyzer.getByteFrequencyData(dataArray);
    //         this._audioData = dataArray;
    
    //         console.log(dataArray);
    
    //         // Define the length of focused normalization and decay rate
    //         const focusLength = 20;
    //         const decayRate = 0.01;
    //         const n = dataArray.length;
    //         const weights = new Array(n).fill(0).map((_, index) => Math.exp(-decayRate * index));
    
    //         // Calculate weighted mean and std for focused segment
    //         let weightedSum = 0;
    //         let weightedSumSquare = 0;
    //         let totalWeight = 0;
    //         for (let i = 0; i < focusLength; i++) {
    //             weightedSum += weights[i] * dataArray[i];
    //             weightedSumSquare += weights[i] * dataArray[i] ** 2;
    //             totalWeight += weights[i];
    //         }
    //         const weightedMean = weightedSum / totalWeight;
    //         const weightedStd = Math.sqrt(weightedSumSquare / totalWeight - weightedMean ** 2);
    
    //         // Update points based on the audio data
    //         for (let i = 0; i < this._num_control_points; i++) {
    //             // Apply normalization and scaling
    //             let normalizedValue = (dataArray[i] - weightedMean) / weightedStd;
    //             const newY = normalizedValue / 255 * 10; // Scale normalized value
    //             this._control_points[i].y = newY;
    
    //             // Assuming each control point affects two main points (i and i+1)
    //             const nextIndex = (i + 1) % this._num_control_points;
    //             normalizedValue = (dataArray[nextIndex] - weightedMean) / weightedStd;
    //             const newYNext = normalizedValue / 255 * 10; // Scale normalized value
    //             this._control_points[nextIndex].y = newYNext;
    
    //             // Update curve control points, these could be adjusted more subtly
    //             const curve = this._curve_points[i];
    //             curve.v0.y = newY;
    //             curve.v1.y = (newY + newYNext) / 2;  // Midpoint control
    //             curve.v2.y = (newY + newYNext) / 2;  // Midpoint control
    //             curve.v3.y = newYNext;
    
    //             // Redefine curve points
    //             const curvePoints = curve.getPoints(50);
    //             const positions = this._geometry.attributes.position.array;
    //             for (let j = 0; j < curvePoints.length; j++) {
    //                 const pointIndex = i * 50 * 3 + j * 3;
    //                 positions[pointIndex + 1] = curvePoints[j].y;
    //             }
    //         }
    
    //         this._geometry.attributes.position.needsUpdate = true; // Important to update the geometry
    //     }
    
    //     await super.onFrame(frameNumber);
    // }
    
    
    

    // 1/(1 + b^i)


}

class AudioLightColumns extends X3DObject {
    _geometry: THREE.BufferGeometry;
    _material: THREE.MeshBasicMaterial;
    _lights: THREE.PointLight[];
    _columns: THREE.Mesh[];
    _numColumns = 9; 
    _audio_analyzer: any;
    declare _three_obj: THREE.Group;

    constructor(data: any) {
        super(data, { _type: "audio-light-columns" });
        this._geometry = new THREE.CylinderBufferGeometry(0.5, 0.5, 1, 32);
        this._material = new THREE.MeshBasicMaterial({ color: 0x000000 });
        this._three_obj = new THREE.Group();
        this._lights = [];
        this._columns = [];

        for (let i = 0; i < this._numColumns; i++) {
            const mesh = new THREE.Mesh(this._geometry, this._material.clone());
            // mesh.position.x = (i - this._numColumns / 2) * 1.5;
            mesh.position.x = (i - this._numColumns / 2) * 0.5;
            mesh.position.z = 0;

            mesh.scale.set(mesh.scale.x * 2/5, mesh.scale.y, 0.3);
            //make mesg smaller
            this._three_obj.add(mesh);
            this._columns.push(mesh);

            const light = new THREE.PointLight(0xffffff, 1, 50);
            light.position.set(mesh.position.x, 0, 10);
            this._three_obj.add(light);
            this._lights.push(light);
        }
    }

    async onFrame(frameNumber: number): Promise<void> {
        if (this._audio_analyzer) {
            const dataArray = new Uint8Array(this._audio_analyzer.frequencyBinCount);
            // console.log(dataArray, "Audio data");
            
            this._audio_analyzer.getByteFrequencyData(dataArray);

            for (let i = 0; i < Math.min(this._numColumns, dataArray.length); i++) {
                const frequencyAmplitude = dataArray[i]; 
                const height = frequencyAmplitude / 510 * 20 + 1; 
                const intensity = frequencyAmplitude / 255;

                // Update columns
                this._columns[i].scale.y = height /8;
                console.log(height)
                this._columns[i].material.color.setHSL(intensity, 1, 0.5);

                // Update lights
                this._lights[i].intensity = intensity * 2;
                this._lights[i].color.setHSL(intensity, 1, 0.5);
                this._lights[i].distance = height * 10 + 10; 
            }
        }
        await super.onFrame(frameNumber);
    }
}





X3D.importObject("dyna-line", <any>DynaLine)
X3D.importObject("dyna-sphere", <any>DynaSphere)
X3D.importObject("dyna-bezier-curve", <any>DynaBezierCurve)
X3D.importObject("audio-light-columns", <any>AudioLightColumns)

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
            const line = X3D._o["line"]
            const bezier_curve = X3D._o["bezier-curve"]
            const audiolightcolumns = X3D._o["audio-light-columns"]

            const audioContext = new AudioContext();
            const analyser = audioContext.createAnalyser();
            analyser.fftSize = 256;
            const microphone = await navigator.mediaDevices.getUserMedia({ audio: true });
            const source = audioContext.createMediaStreamSource(microphone);
            source.connect(analyser);
            ball._audio_analyzer = analyser;
            line._audio_analyzer = analyser;
            bezier_curve._audio_analyzer = analyser;
            audiolightcolumns._audio_analyzer = analyser;
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

    await X3D.loadApp(world)

   
    
    // //get anaylzer from microphone
   


}

main().then(res => { })

