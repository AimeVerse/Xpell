import { XObjectPack } from "../../Core/XObject";
import { X3DObject } from "../X3DObject";
import * as THREE from 'three'

export class DynaSphere extends X3DObject {

    static xtype = "dyna-sphere"

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
        _type: DynaSphere.xtype,
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

            const clr = new THREE.Color(THREE.Color.NAMES['white']);
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

    getRandomPointOnSphere(radius:number) {
        const u = Math.random();
        const v = Math.random();
        const theta = 2 * Math.PI * u;
        const phi = Math.acos(2 * v - 1);
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);
        return new THREE.Vector3(x, y, z);
    }

    getRandomPointOnLine(x:number,y:number,z:number) {
        return new THREE.Vector3(x, y, z);
    }

    getAverageVolume(array:number[]) {
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
            
            
            const average = this.getAverageVolume(<any>dataArray);
            // console.log(dataArray,average);
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
                
                // const multiplier = (i<dataArray.length ) ? dataArray[i] / 256 * 2 : radiusMultiplier
                const multiplier =radiusMultiplier
                const x = positions[i * 3];
                const y = positions[i * 3 + 1];
                const z = positions[i * 3 + 2];

                // const newPosition = this.getRandomPointOnSphere(this._radius);
                newPositions[i * 3] = x  * (multiplier) 
                newPositions[i * 3 + 1] = y * (multiplier) 
                newPositions[i * 3 + 2] = z  * (multiplier) 


                const clr = new THREE.Color(colors[i * 3], colors[i * 3 + 1], colors[i * 3 + 2]);
                // dimm the color based on the audio data
                clr.r = multiplier * clr.r //* (1 - average / 256) + 0.2;
                clr.g = multiplier * clr.g //* (1 - average / 256) + 0.2;
                clr.b = multiplier * clr.b //* (1 - average / 256) + 0.2;
                
                newColors[i * 3] = clr.r;
                newColors[i * 3 + 1] = clr.g;
                newColors[i * 3 + 2] = clr.b;
                newColors[i * 3 + 3] = 1;
            }

            this._three_obj.geometry.setAttribute('position', new THREE.BufferAttribute(newPositions, 3));
            // this._three_obj.geometry.setAttribute('color', new THREE.BufferAttribute(newColors, 4));
        }
        await super.onFrame(frameNumber)
    }
}





export class DynaObjects extends XObjectPack {
    static getObjects() {
        return {
            [DynaSphere.xtype]: DynaSphere,
           
        }
    }
}

export default DynaObjects
