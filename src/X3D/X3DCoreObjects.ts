import * as THREE from 'three'
import X3DObject, { IX3DObjectData } from './X3DObject'

const threeCameras = {
    "perspective-camera": THREE.PerspectiveCamera,
    "perspective": THREE.PerspectiveCamera, //alias 
    "camera": THREE.PerspectiveCamera, //alias for default camera
    "orthographic-camera":THREE.OrthographicCamera,
    "orthographic":THREE.OrthographicCamera // alias
}

const threeLights = {
    "ambient": THREE.AmbientLight,
    "directional": THREE.DirectionalLight,
    "spotlight":THREE.SpotLight
}

const threeGeometries = {
    // 2D
    "plane-geometry": THREE.PlaneGeometry,
    "circle-geometry": THREE.CircleBufferGeometry,
    // 3D
    "box-geometry": THREE.BoxGeometry,
    "sphere-geometry": THREE.SphereGeometry,
    "cylinder-geometry": THREE.CylinderBufferGeometry,
    "torus-geometry": THREE.TorusBufferGeometry,
    "cone-geometry": THREE.ConeBufferGeometry,


}


const threeMaterials = {
    "standard-material": THREE.MeshPhysicalMaterial,
    "basic-material": THREE.MeshBasicMaterial,
    "shader-material": THREE.ShaderMaterial,
    "phong-material":THREE.MeshPhongMaterial

}



export type  XCameraTypes = "perspective-camera" | "perspective" | "camera" | "orthographic-camera" | "orthographic"

export interface XCameraData extends IX3DObjectData {
    _camera?:XCameraTypes, //type of Three camera 
    _fov? : number, // Camera frustum vertical field of view (default = 20)
    _ratio?: number //Camera frustum aspect ratio (default = 16:9 (1.799)),
    _far?:number, // Camera frustum far plane (clipping - default = 2000)
    _near?:number, // Camera frustum near plane (clipping - default = 0.01)
    _positional_audio_listener?:boolean // set true to support positional audio (default is false)
}



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
        const fieldsToParse = ["_fov","_ratio","_far","_close","_positional_audio_listener","_camera"]

        super(data) // parse parent class fields (X3dDObject & XObject)
        this.parseFields(data,fieldsToParse,true) //parse Camera fields
        this._three_obj = null  // reset THREE object 
        this._three_class = threeCameras[data._type] // define THREE class 
        this._threes_class_args = [this._fov, this._ratio, this._close, this._far] // define THREE class arguments 
    }
}

/**
 * supported Three light type 
 */
export type  XLightTypes = "ambient" | "directional" | "spotlight" 

/**
 * XLight Data 
 */
export interface XLightData extends IX3DObjectData {
    _light:XLightTypes, //xlight type
    _color? : number | string | THREE.Color, // light color
    _intensity?: number // light intensity (float value range 0 - 1 default 1.0 )
}


/**
 * XLight - Xpell wrapper for Three Light
 */
export class XLight extends X3DObject {
    static xtype = "light"
    readonly _is_light:boolean = true 
    _light:XLightTypes = "ambient"
    _color? :THREE.Color | number =  0xffffff
    _intensity?:number = 1.0

    constructor(data:XLightData) {
        
        const fieldsToParse = ["_light","_color","_intensity"]
        super(data) // parse parent class fields (X3dDObject & XObject)
        this.parseFields(data,fieldsToParse,true) //parse Camera fields
        this._type = XLight.xtype
        this._three_class = threeLights[data._light]
        this._threes_class_args = [this.color, this.intensity]
    }
}

export class XGeometry extends X3DObject {
    // width:number
    // height:number
    constructor(data, defaults?) {
        if (!defaults) {
            defaults = {
                _type: "geometry",
                width: 0,
                height: 0,
                depth: 0,
            }
        }
        super(data, defaults)
        this._three_class = threeGeometries[data._type]
        if(data._threes_class_args) {
            this._threes_class_args = data._threes_class_args
        } else {
            this._threes_class_args = [data.width, data.height, data.depth]
        }

    }
    
    
}



export class XMaterial extends X3DObject {
    constructor(data) {
        const defaults = {
            // roughness: (data.roughness) ? data.roughness : 1,
        }


        super(data, defaults)
        this._three_class=  threeMaterials[data._type],
        this.color =  (data.color) ? data.color : 0xffffff,
        this.side = (data.side)  ? data.side : THREE.DoubleSide

        //Spell 2 Three
        const s2t = {
            "_normal_map": "normalMap",
            "_dp_map": "displacementMap",
            "_texture_map": "map"
        }

        let tca_params = {
            color: this.color,
            side: this.side,
            // roughness: this.roughness
        }

        const addMap = (name) => {
            const lmap = data[name]
            
            if (lmap /*check file*/ ) {
                const keys = Object.keys(lmap)

                keys.forEach(key => {
                    
                    
                    if (key == "texture") {
                        try {
                            // console.log("loading texture " + lmap.texture)
                            tca_params[s2t[name]] = new THREE.TextureLoader().load(lmap.texture);
                        } catch (e) {
                            console.error("XMaterial unable to load texture for " + name + " reason:" + e)
                        }
                    } else {
                        if (typeof lmap[key] == "string" && lmap[key].startsWith("$")) { // spell value
                            const ks = lmap[key].split(" ")
                            if (ks[0] == "$v2") { //create vector 2
                                tca_params[key] = new THREE.Vector2(ks[1], ks[2])
                            }
                        } else {
                            tca_params[key] = lmap[key]
                        }

                    }
                })


            }

        }

        addMap("_normal_map")
        addMap("_dp_map")
        addMap("_texture_map")

        //dp_map
        //console.log(tca_params)
        this._threes_class_args = [tca_params]

    }

   
}


export class XMesh extends X3DObject {


    static getFromThreeObject(threeObject,defaults) {
        // let mesh_spell = {
        //     _id: threeObject.name,
        //     _type: "mesh",
        //     _three_obj: threeObject,
        //     name: threeObject.name,
        //     _position: threeObject.position,
        //     _rotation: threeObject.rotation,
        //     _geometry: threeObject.geometry,
        //     _material: threeObject.material,
        // }
         //load animations
        // if(mesh_spell._three_obj?.animations.length>0){
        //     console.log(mesh_spell._three_obj.animations);
        // }
        if(!defaults) {
            defaults = {}
        }        
        defaults["_type"] = "mesh"
        defaults["_geometry"] = threeObject.geometry
        defaults["_material"] = threeObject.material
        let _xdata:any = X3DObject.getXData(threeObject, defaults)
        return new XMesh(_xdata)
    }

    // _geometry:XGeometry
    // _material:XMaterial


    constructor(data, defaults = {
        _type: "mesh",
        _three_class: THREE.Mesh,
        _three_obj:null,
        _geometry: null,
        _material: null,
        _positional_audio_source:null
    }) {
        super(data, defaults)
        this._three_class = THREE.Mesh
        if(!this._three_obj) {
            
            this._geometry = new XGeometry(data._geometry)
            this._material = new XMaterial(data._material)
        }

    }

    getThreeObject() {
        if(!this._three_obj) {
            this._threes_class_args = [(<any>this._geometry).getThreeObject(), (<any>this._material).getThreeObject()]
        }
        return  super.getThreeObject()

    }
}


export class XGroup extends X3DObject {

    static getFromThreeObject(threeObject,defaults:any) {
        if(!defaults) {
            defaults = {}
        }        
        defaults["_type"] = "group"
        
        let _xdata:any = X3DObject.getXData(threeObject, defaults)
        return new XGroup(_xdata)
    }

    constructor(data, defaults = {
        _type: "group",
        _three_class: THREE.Group,
        _three_obj:null,
    }) {
        super(data, defaults)
    }

   

}



