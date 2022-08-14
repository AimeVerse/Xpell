import * as THREE from 'three'
import X3DObject from './X3DObject'

const threeCameras = {
    "perspective-camera": THREE.PerspectiveCamera
}

const threeLights = {
    "ambient": THREE.AmbientLight,
    "directional": THREE.DirectionalLight
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
    "shader-material": THREE.ShaderMaterial

}


export class XCamera extends X3DObject {
    _clipping : {
        close:number,
        far:number
    }

    constructor(data, defaults) {
        if (!defaults) {
            defaults = {
                _type: "perspective-camera",
                _three_class: threeCameras[data._type],
                _three_obj: null,
                _is_camera: true,
                fov: 20,
                ratio: window.innerWidth / window.innerHeight,
                _clipping: {
                    far: 5000,
                    close: 0.01
                }

            }
        }
        super(data, defaults)
        this._threes_class_args = [this.fov, this.ratio, this._clipping.close, this._clipping.far]
    }


}


export class XLight extends X3DObject {
    color:string 
    intensity:number
    constructor(data, defaults) {
        if (!defaults) {
            defaults = {
                _type: "light",
                _light: "ambient",
                _three_obj: null,
                color: 0xffffff,
                intensity: 1.0,
                _is_light: true,
            }
        }
        super(data, defaults)

        this._three_class = threeLights[data._light]
        this._threes_class_args = [this.color, this.intensity]
    }
}

export class XGeometry extends X3DObject {
    width:number
    height:number
    constructor(data, defaults?) {
        if (!defaults) {
            defaults = {
                _type: "geometry",
                _three_class: threeGeometries[data._type],
                _three_obj: null,
                width: data.width,
                height: data.height,
                depth: data.depth,
                _threes_class_args: [data.width, data.height, data.depth]
            }
        }
        super(data, defaults)
    }

    async get_three() {
        return super.get_three()
    }
}



export class XMaterial extends X3DObject {
    constructor(data) {
        const defaults = {
            _three_class: threeMaterials[data._type],
            color: (data.color) ? data.color : 0xffffff,
            side: THREE.DoubleSide,
            // roughness: (data.roughness) ? data.roughness : 1,
        }


        super(data, defaults)

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

        const addMap = (spell_name) => {
            const lmap = data[spell_name]
            if (lmap /*check file*/ ) {
                const keys = Object.keys(lmap)
                keys.forEach(key => {
                    if (key == "texture") {
                        try {
                            //console.log("loading texture " + lmap.texture)
                            tca_params[s2t[spell_name]] = new THREE.TextureLoader().load(lmap.texture);
                        } catch (e) {
                            console.error("SpellMaterial unable to load texture for " + spell_name + " reason:" + e)
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

        this._threes_class_args = [tca_params]

    }

   
}


export class XMesh extends X3DObject {

    static get_from_three_object(three_obj) {
        let mesh_spell = {
            _id: three_obj.name,
            _type: "mesh",
            _three_obj: three_obj,
            name: three_obj.name,
            _position: three_obj.position,
            _rotation: three_obj.rotation,
            _geometry: three_obj.geometry,
            _material: three_obj.material,
        }
         //load animations
        if(mesh_spell._three_obj?.animations.length>0){
            console.log(mesh_spell._three_obj.animations);
        }
        return new XMesh(mesh_spell)
    }

    _geometry:XGeometry
    _material:XMaterial
    constructor(data, defaults = {
        _type: "mesh",
        _three_class: THREE.Mesh,
        _three_obj:null,
        _geometry: null,
        _material: null
    }) {
        super(data, defaults)
        if(!this._three_obj) {
            this._geometry = new XGeometry(data._geometry)
            this._material = new XMaterial(data._material)
        }

    }

    async get_three() {
        if(!this._three_obj) {
            this._threes_class_args = [await this._geometry.get_three(), await this._material.get_three()]
        }
        return super.get_three()
    }
}


export class XGroup extends X3DObject {

    static get_from_three_object(three_obj) {
        const mesh_spell = {
            _id: three_obj.name,
            _type: "group",
            _three_obj: three_obj,
            name: three_obj.name,
            _position: three_obj.position,
            _rotation: three_obj.rotation,
        }

         //load animations
         if(mesh_spell._three_obj?.animations){
            console.log(mesh_spell._three_obj.animations);
        }
        return new XGroup(mesh_spell)
    }

    constructor(data, defaults = {
        _type: "group",
        _three_class: THREE.Group,
        _three_obj:null,
    }) {
        super(data, defaults)
    }

   

}



