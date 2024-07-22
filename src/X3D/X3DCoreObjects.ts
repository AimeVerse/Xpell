import * as THREE from 'three'
import {X3DObject, IX3DObjectData } from './X3DObject'

export const threeCameras:{[name:string]:any} = {
    "perspective-camera": THREE.PerspectiveCamera,
    "perspective": THREE.PerspectiveCamera, //alias 
    "camera": THREE.PerspectiveCamera, //alias for default camera
    "orthographic-camera":THREE.OrthographicCamera,
    "orthographic":THREE.OrthographicCamera // alias
}

export const threeLights:{[name:string]:any} = {
    "ambient": THREE.AmbientLight,
    "directional": THREE.DirectionalLight,
    "spotlight":THREE.SpotLight,
    "hemisphere":THREE.HemisphereLight,
    "point":THREE.PointLight,
    "rectArea":THREE.RectAreaLight,
    "lightE":THREE.Light,
    "lightProbe":THREE.LightProbe,
}

export const threeGeometries:{[name:string]:any} = {
    // 2D
    "plane-geometry": THREE.PlaneGeometry,
    "circle-geometry": THREE.CircleBufferGeometry,
    // 3D
    "box-geometry": THREE.BoxGeometry,
    "sphere-geometry": THREE.SphereGeometry,
    "cylinder-geometry": THREE.CylinderBufferGeometry,
    "torus-geometry": THREE.TorusBufferGeometry,
    "cone-geometry": THREE.ConeBufferGeometry,
    "buffer-geometry": THREE.BufferGeometry,


}


export const threeMaterials:{[name:string]:any} = {
    "basic-material": THREE.MeshBasicMaterial,
    "shader-material": THREE.ShaderMaterial,
    "phong-material":THREE.MeshPhongMaterial,
    "lambert-material":THREE.MeshLambertMaterial,
    "toon-material":THREE.MeshToonMaterial,
    "line-material":THREE.LineBasicMaterial,
    "line-dashed-material":THREE.LineDashedMaterial,
    "points-material":THREE.PointsMaterial,
    "sprite-material":THREE.SpriteMaterial,
    "physical-material":THREE.MeshPhysicalMaterial,
    "depth-material":THREE.MeshDepthMaterial,
    "normal-material":THREE.MeshNormalMaterial,
    "standard-material":THREE.MeshStandardMaterial,
    "matcap-material":THREE.MeshMatcapMaterial,  
}



export type  XCameraTypes = "perspective-camera" | "perspective" | "camera" | "orthographic-camera" | "orthographic"

export interface XCameraData extends IX3DObjectData {
    _camera?:XCameraTypes, //type of Three camera 
    _fov? : number, // Camera frustum vertical field of view (default = 20)
    _ratio?: number //Camera frustum aspect ratio (default = 16:9 (1.799)),
    _far?:number, // Camera frustum far plane (clipping - default = 2000)
    _near?:number, // Camera frustum near plane (clipping - default = 0.01)
    _positional_audio_listener?:boolean // set true to support positional audio (default is false)
    _helper?:boolean
}


/**
 * XCamera - Three Camera wrapper
 */
export class XCamera extends X3DObject {
   
    static xtype:string = "camera"

    readonly _is_camera:boolean = true
    
    _fov:number = 20
    _ratio:number = 1.7999 //16:9
    _far:number = 2000
    _close:number = 0.01
    _positional_audio_listener:boolean = false
    _camera:XCameraTypes = "perspective-camera"
    

    constructor(data:XCameraData) {
        
        //backwards compatibility
        const fieldsToReplace = ["fov","ratio","far","close","positional_audio_listener","camera"]

        fieldsToReplace.forEach(field => {
            if(data[field]) {
                data["_" + field] = data[field]
                delete data[field]
            }
        })

        super(data,{},true) // parse parent class fields (X3dDObject & XObject)
        super.parse(data)
        this._three_obj = null  // reset THREE object 
        this._three_class = threeCameras[<string>data._camera] // define THREE class 
        this._threes_class_args = [this._fov, this._ratio, this._close, this._far] // define THREE class arguments 
        
    }
}

/**
 * supported Three light type 
 */
export type  XLightTypes = "ambient" | "directional" | "spotlight" | "hemisphere" | "point" | "rectArea" | "lightE" | "lightProbe"

/**
 * XLight Data 
 */
export interface XLightData extends IX3DObjectData {
    _light?:XLightTypes, //xlight type
    _color? : number | string | THREE.Color, // light color
    _intensity?: number // light intensity (float value range 0 - 1 default 1.0 )
}


/**
 * XLight - Xpell wrapper for Three Light
 */
export class XLight extends X3DObject {
    static xtype = "light"
    readonly _is_light:boolean = true 
    //private fields
    #_color :number | string  =  0xffffff
    #_intensity:number = 0.5


    declare _three_obj: THREE.Light| null
    _light?:XLightTypes = "ambient"
    // _intensity?:number = 0.5

    constructor(data:XLightData) {
        
        //backwards compatibility
        const fieldsToReplace = ["light","color","intensity"]
        fieldsToReplace.forEach(field => {
            if(data[field]) {
                data["_" + field] = data[field]
                delete data[field]
            }
        })
        super(data,{},true) // parse parent class fields (X3dDObject & XObject)
        super.parse(data)
        this._type = XLight.xtype
        this._three_class = threeLights[<string>data._light]
        this._threes_class_args = [this._color, this._intensity]
        this.addNanoCommand("rotate-color", (xcdm,xobj) => {
            xobj._color =  "hsl(" + xobj._frame_number + ",100%,50%)"
        })
    }

    set _color(color:number | string ) {
        this.#_color = color
        if(this._three_obj && this._three_obj.color) {
            this._three_obj.color = new THREE.Color(color)
        }
    }

    get _color() {
        return this.#_color
    }

    set _intensity(intensity:number) {
        this.#_intensity = intensity
        if(this._three_obj) {
            this._three_obj.intensity = intensity
        }
    }

    get _intensity() {
        return this.#_intensity
    }


}

export class HemisphereLight extends XLight {
    _skyColor: THREE.Color | number;
    _groundColor: THREE.Color | number;

    constructor(data: HemisphereLightData) {
        super(data); // Initialize the base class

        // Default values for hemisphere light specific properties
        this._skyColor = data._skyColor || 0xffffff; // default white
        this._groundColor = data._groundColor || 0xffffff; // default white

        // Override or set specific properties for HemisphereLight
        this._light = "hemisphere"; // Assuming "hemisphere" is a valid XLightType
        this._three_class = threeLights["hemisphere"]; // Specific Three.js class for hemisphere lights
        this._threes_class_args = [this._skyColor, this._groundColor, this._intensity]; // Arguments for Three.js hemisphere light
    }
}

// Assuming HemisphereLightData extends XLightData with _skyColor and _groundColor
export interface HemisphereLightData extends XLightData {
    _skyColor?: THREE.Color | number;
    _groundColor?: THREE.Color | number;
}


export class XGeometry extends X3DObject {
    // width:number
    // height:number

    

    //backward computability 
    width:number = 0
    height:number = 0
    depth:number = 0

    constructor(data:IX3DObjectData, defaults?:IX3DObjectData) {
        if (!defaults) {
            defaults = {
                _type: "geometry",
                width: 0,
                height: 0,
                depth: 0,
            }
        }
        if(data.width) defaults.width = data.width
        if(data.height) defaults.height = data.height
        if(data.depth) defaults.depth = data.depth
        super(data, defaults,true)
        this.parse(data)

        this._three_class = threeGeometries[<string>data._type]
        if(data._threes_class_args) {
            this._threes_class_args = data._threes_class_args
        } else {
            this._threes_class_args = [data.width, data.height, data.depth]
        }

    }
    
    
}


/**
 * Material
 * 
 * maps can be <string>  for file  or object with parameters to the texture
 * _texture_map : "/public/file-name"
 * 
 * _texture_map: {
 *      texture:"/public/file-name",
 *      offset:$_v2 X Y //for Three.Vector2
 *      rotation: 3 //number
 * } */

export class XMaterial extends X3DObject {

    #_color:number | string = 0xffffff
    #_side:number = THREE.DoubleSide

    declare _three_obj: any

    constructor(data:IX3DObjectData) {
        const defaults = {
            // roughness: (data.roughness) ? data.roughness : 1,
        }


           //backwards compatibility
           const fieldsToReplace = ["color","side"]

           fieldsToReplace.forEach(field => {
               if(data[field]) {
                   data["_" + field] = data[field]
                   delete data[field]
               }
           })

           
        super(data, defaults,true)
        this.parse(data)
        this._three_class=  threeMaterials[<string>data._type]
        // this.color =  (data.color) ? data.color : 0xffffff,
        // this.side = (data.side)  ? data.side : THREE.DoubleSide





        //Spell 2 Three
        const s2t:{[name:string]:string} = {
            "_normal_map": "normalMap",   
            "_dp_map": "displacementMap",
            "_displacement_map": "displacementMap",
            "_texture_map": "map",
            "_roughness_map": "roughnessMap",
            "_ao_map": "aoMap",
            "_emissive_map": "emissiveMap",
            "_light_map": "lightMap",
            "_metalness_map": "metalnessMap",
            "_bump_map": "bumpMap",
            "_alpha_map": "alphaMap",
            "_env_map": "envMap",
            "_gradient_map": "gradientMap",
            "_specular_map": "specularMap",
            "_clearcoat_map": "clearcoatMap",
            "_clearcoat_roughness_map": "clearcoatRoughnessMap",
            "_clearcoat_normal_map": "clearcoatNormalMap",
        }

        let tca_params :{[name:string]:any} = {
            color: this.#_color,
            side: this.#_side,
            // roughness: this.roughness
        }
        
        const addMap = (name:string) => {
            const lmap:any = data[name]
            if (lmap /*check file*/ ) {
                

                if(typeof lmap === "string") {
                    tca_params[s2t[name]] = new THREE.TextureLoader().load(lmap);
                }
                else {

                    const keys = Object.keys(lmap)
    
                    keys.forEach(key => {
                        
                        
                        if (key == "texture") {
                            try {
                                tca_params[s2t[name]] = new THREE.TextureLoader().load(lmap.texture);
                            } catch (e) {
                                console.error("XMaterial unable to load texture for " + name + " reason:" + e)
                            }
                        
                        } else if (key == "video-texture") {
                            try {
                                tca_params[s2t[name]] = new THREE.VideoTexture(lmap["video-texture"]);
                            } catch (e) {
                                console.error("XMaterial unable to load texture for " + name + " reason:" + e)
                            }
                        
                        } else {
                            if (typeof lmap[key] == "string" && lmap[key].startsWith("$")) { // spell value
                                const ks = lmap[key].split(" ")
                                if (ks[0] == "$_v2") { //create vector 2
                                    tca_params[key] = new THREE.Vector2(<any>ks[1], <any>ks[2])
                                }
                            } else {
                                tca_params[key] = lmap[key]
                            }
    
                        }
                    })
                }


            }

        }

        addMap("_normal_map")
        addMap("_dp_map")
        addMap("_texture_map")

        //dp_map
        this._threes_class_args = [tca_params]

    }

    set _color(color:number | string) {
        this.#_color = color
        if(this._three_obj) {
            this._three_obj.color = new THREE.Color(color)
        }
    }

   
}


export class XMesh extends X3DObject {


    static getFromThreeObject(threeObject:THREE.Mesh,defaults:any) {
        
        if(!defaults) {
            defaults = {}
        }        
        defaults["_type"] = "mesh"
        defaults["_geometry"] = threeObject.geometry
        defaults["_material"] = threeObject.material
        let _xdata:any = X3DObject.getXData(threeObject, defaults)
        return new XMesh(_xdata)
    }

    _geometry!:XGeometry | IX3DObjectData
    _material!:XMaterial | IX3DObjectData
    _wireframe:boolean = false

    protected __color:number | undefined  // private color field

    constructor(data:IX3DObjectData, defaults = {
        _type: "mesh",
        _geometry: null,
        _material: null,
        _positional_audio_source:null
    },skipParse = false) {
        super(data, defaults,skipParse)
        this._three_class = THREE.Mesh

        if(data._wireframe) data._material.wireframe = true
        this.parse(data)
        
        
        
    }

    set _color(val:number) {
        this.__color = val
        if(this._material instanceof XMaterial) {
            (<any>this._material.getThreeObject()).color = new THREE.Color(val)
        } else if(this._material) {
            this._material["color"] = val
        }
    }

    get _color() : number | undefined {
        return this.__color
    }

    async getThreeObject() {
        if(!this._three_obj) {
            this._geometry = new XGeometry(<any>this._geometry)
            this._material = new XMaterial(<any>this._material)
            this._threes_class_args = [(<any>this._geometry).getThreeObject(), (<any>this._material).getThreeObject()]
        }
        return  super.getThreeObject()

    }
}


export class XGroup extends X3DObject {

    static getFromThreeObject(threeObject:THREE.Group,defaults:any) {
        if(!defaults) {
            defaults = {}
        }        
        defaults["_type"] = "group"
        
        let _xdata:any = X3DObject.getXData(threeObject, defaults)
        return new XGroup(_xdata)
    }

    constructor(data:IX3DObjectData, defaults = {
        _type: "group",
        _three_class: THREE.Group,
        _three_obj:null,
    }) {
        super(data, defaults)
    }   
}

export default {XCamera}




