import X3DObject, { IX3DObjectData } from './X3DObject'
import { IXObjectData, XObjectPack } from '../Core/Xpell'
import { XCamera, XGeometry, XLight, XMaterial, XMesh, XGroup } from './X3DCoreObjects'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'


export class XPlane extends XMesh {

    constructor(data:IX3DObjectData, defaults?:IX3DObjectData) {

        if (!defaults) {
            defaults = {
                _type: "plane",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: {
                    _type: "plane-geometry",
                    _width: 2,
                    _height: 2,
                    widthSegments: 20,
                    heightSegments: 20
                },
                _material: {
                    _type: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
            }
        }
        if(data._width) defaults._geometry.width = data._width
        if(data._height) defaults._geometry.height = data._height
        const dg = <IX3DObjectData>data._geometry;
        if(dg) {
            (<IX3DObjectData>dg)["_threes_class_args"] = [dg.width, dg.height, dg.widthSegments, dg.heightSegments];
            (<IX3DObjectData>dg)._type =   "plane-geometry";
        } else {
            data._geometry = defaults._geometry
            data._geometry._threes_class_args = [defaults._geometry.width,defaults._geometry.height, defaults._geometry.widthSegments, defaults._geometry.heightSegments];
        }

        

        super(data, <any>defaults,true)
        this.parse(data)
        if(this._enable_physics) {
            this._cannon_shape = new CANNON.Plane()
        }
    }

    set _width(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.width = val
        } else if(this._geometry) {
            this._geometry["width"] = val
        }
    }

    get _width() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.width
    }

    set _height(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.height = val
        } else if(this._geometry) {
            this._geometry["height"] = val
        }
    }

    get _height() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.height
    }



}

export class XBox extends XMesh {

    constructor(data:IX3DObjectData, defaults:any) {
        if (!defaults) {
            defaults = {
                _type: "box",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: {
                    _type: "box-geometry",
                    width: 10,
                    height: 10,
                    depth: 0.3,
                    widthSegments: 50,
                    heightSegments: 50,
                    depthSegments: 50
                },
                _material: {
                    _type: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
            }
        }

        if(data._width) defaults._geometry.width = data._width
        if(data._height) defaults._geometry.height = data._height
        if(data._depth) defaults._geometry.depth = data._depth


        const dg = <IX3DObjectData>data._geometry;
        if(data._geometry) {
            (<IX3DObjectData>data._geometry)._threes_class_args = [dg.width, dg.height, dg.depth, dg.widthSegments, dg.heightSegments, dg.depthSegments];
            (<IX3DObjectData>data._geometry)._type =  "box-geometry"
        } else {
            data._geometry = defaults._geometry
            data._geometry._threes_class_args = [defaults._geometry.width, defaults._geometry.height, defaults._geometry.depth, defaults._geometry.widthSegments, defaults._geometry.heightSegments, defaults._geometry.depthSegments];
        }

        super(data, defaults,true)
        this.parse(data)
        if(this._enable_physics) {

            this._cannon_shape = new CANNON.Box(new CANNON.Vec3(<any>dg.width/2, <any>dg.height/2, <any>dg.depth/2))
        }
    }

    set _width(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.width = val
        } else if(this._geometry) {
            this._geometry["width"] = val
        }
    }

    get _width() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.width
    }

    set _height(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.height = val
        } else if(this._geometry) {
            this._geometry["height"] = val
        }
    }

    get _height() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.height
    }

    set _depth(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.depth = val
        } else if(this._geometry) {
            this._geometry["depth"] = val
        }
    }

    get _depth() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.depth
    }
    
}

export class XSphere extends XMesh {


    
    private __radius?: number //private property


    constructor(data:IX3DObjectData, defaults:IX3DObjectData) {
        if (!defaults) {
            defaults = {
                _type: "sphere",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: {
                    _type: "sphere-geometry",
                    widthSegments: 20,
                    heightSegments: 20,
                    radius: 5
                },
                _material: {
                    _type: "standard-material",
                    color: 0xffffff,
                    side: 1
                }

            }
        }
        
        if(data._radius) defaults._geometry.radius = data._radius
        if(data._color) defaults._material.color = data._color


        const dg = <IX3DObjectData>data._geometry;
        if(dg) {
            dg._threes_class_args = [dg.radius, dg.widthSegments, dg.heightSegments];
            dg._type =  "sphere-geometry"
        } else {
            data._geometry = defaults._geometry
            data._geometry._threes_class_args = [defaults._geometry.radius, defaults._geometry.widthSegments, defaults._geometry.heightSegments];
        }
        super(data, <any>defaults, true)
        this.parse(data)
        if(this._enable_physics) {
            this._cannon_shape = new CANNON.Sphere(<any>dg.radius)
        }
        

    }

    set _radius(val:number) {
        this.__radius = val
        if(this._geometry instanceof XGeometry) {            
            (<any>this._geometry.getThreeObject()).geometry.radius = val
        } else  if(this._geometry){
            this._geometry["radius"] = val
        }
    }

    get _radius() : number | undefined {
        return this.__radius
    }
}

export class XCylinder extends XMesh {
    // static descriptor() {
    //     return {
    //         name: "Cylinder",
    //         desc: "Cylinder Object",
    //         defaults: {
    //             [_SC.NODES.type]: "cylinder",
    //             _geometry: {
    //                 [_SC.NODES.type]: "cylinder-geometry",
    //                 radiusTop: 0.2,
    //                 radiusBottom: 0.2,
    //                 height: 0.5,
    //                 radialSegments: 24
    //             },
    //             _material: {
    //                 [_SC.NODES.type]: "standard-material",
    //                 color: 0xffffff,
    //                 side: 2
    //             },
    //             _position: {
    //                 x: 0,
    //                 y: 0,
    //                 z: 0
    //             },
    //             _rotation: {
    //                 x: 0,
    //                 y: 0,
    //                 z: 0
    //             }
    //         }
    //     }
    // }

    constructor(data:IX3DObjectData, defaults:IX3DObjectData) {



        if (!defaults) {
            defaults = {
                _type: "cylinder",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: {
                    _type: "cylinder-geometry",
                    radiusTop: 0.2,
                    radiusBottom: 0.2,
                    height: 0.5,
                    radialSegments: 24
                },
                _material: {
                    _type: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
            }
        }
        

        if(data._radius_top) defaults._geometry.radiusTop = data._radius_top
        if(data._radius_bottom) defaults._geometry.radiusBottom = data._radius_bottom
        if(data._height) defaults._geometry.height = data._height

        const dg = <IX3DObjectData>data._geometry;
        if(data._geometry) {
            (<IX3DObjectData>data._geometry)._threes_class_args =[dg.radiusTop, dg.radiusBottom, dg.height, dg.radialSegments];
            (<IX3DObjectData>data._geometry)._type =   "cylinder-geometry";
        } else {
            data._geometry = defaults._geometry
            data._geometry._threes_class_args = [defaults._geometry.radiusTop, defaults._geometry.radiusBottom, defaults._geometry.height, defaults._geometry.radialSegments]
        }
        
        super(data, <any>defaults,true)
        this.parse(data)
        if(this._enable_physics) {
            this._cannon_shape = new CANNON.Cylinder(<any>dg.radiusTop, <any>dg.radiusBottom, <any>dg.height, <any>dg.radialSegments)
        }
    }

    set _radius_top(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.radiusTop = val
        } else if(this._geometry) {
            this._geometry["radiusTop"] = val
        }
    }

    get _radius_top() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.radiusTop
    }

    set _radius_bottom(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.radiusBottom = val
        } else if(this._geometry) {
            this._geometry["radiusBottom"] = val
        }
    }

    get _radius_bottom() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.radiusBottom
    }

    set _height(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.height = val
        } else if(this._geometry) {
            this._geometry["height"] = val
        }
    }

    get _height() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.height
    }

}

export class XTorus extends XMesh {
    constructor(data:IX3DObjectData, defaults:any) {



        if (!defaults) {
            defaults = {
                _type: "torus",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: {
                    _type: "torus-geometry",
                    radius: 0.5,
                    tubeRadius: 0.25,
                    radialSegments: 12,
                    tubularSegments: 20
                },
                _material: {
                    _type: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
            }
        }

        if(data._radius) defaults._geometry.radius = data._radius
        if(data._tube_radius) defaults._geometry.tubeRadius = data._tube_radius

        const dg = <IX3DObjectData>data._geometry;
        if(data._geometry) {
            (<IX3DObjectData>data._geometry)._threes_class_args =[dg.radius, dg.tubeRadius, dg.radialSegments, dg.tubularSegments];
            (<IX3DObjectData>data._geometry)._type =   "torus-geometry";
        } else {
            data._geometry = defaults._geometry
            data._geometry._threes_class_args = [defaults._geometry.radius, defaults._geometry.tubeRadius, defaults._geometry.radialSegments, defaults._geometry.tubularSegments]
        }
        
        super(data, defaults,true)
        this.parse(data)
        if(this._enable_physics) {
            this._cannon_shape = new CANNON.Box(new CANNON.Vec3(<any>dg.width/2, <any>dg.height/2, <any>dg.depth/2))
        }
    }


    get _radius() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.radius
    }

    set _radius(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.radius = val
        } else if(this._geometry) {
            this._geometry["radius"] = val
        }
    }

    get _tube_radius() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.tubeRadius
    }

    set _tube_radius(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.tubeRadius = val
        } else if(this._geometry) {
            this._geometry["tubeRadius"] = val
        }
    }


}

export class XCone extends XMesh {
   
    constructor(data:IX3DObjectData, defaults:any) {
        if (!defaults) {
            defaults = {
                _type: "cone",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: {
                    _type: "cone-geometry",
                    radius: 0.25,
                    height: 0.5,
                    segments: 18
                },
                _material: {
                    _type: "standard-material",
                    color: 0xffffff,
                    side: 2
                },
            }
        }

        if(data._radius) defaults._geometry.radius = data._radius
        if(data._height) defaults._geometry.height = data._height

        const dg = <IX3DObjectData>data._geometry;
        if(data._geometry) {
            (<IX3DObjectData>data._geometry)._threes_class_args =[dg.radius, dg.height, dg.segments];
            (<IX3DObjectData>data._geometry)._type =   "cone-geometry";
        } else  {
            data._geometry = defaults._geometry
            data._geometry._threes_class_args = [defaults._geometry.radius, defaults._geometry.height, defaults._geometry.segments]
        }
        super(data, defaults,true)
        this.parse(data)
        if(this._enable_physics) {
            this._cannon_shape = new CANNON.Cylinder(<any>dg.radius, 0, <any>dg.height, <any>dg.segments)
        }
    }

    get _radius() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.radius
    }

    set _radius(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.radius = val
        } else if(this._geometry) {
            this._geometry["radius"] = val
        }
    }

    get _height() : number | undefined {
        return (<any>this._geometry.getThreeObject()).geometry.height
    }

    set _height(val:number) {
        if(this._geometry instanceof XGeometry) {
            (<any>this._geometry.getThreeObject()).geometry.height = val
        } else if(this._geometry) {
            this._geometry["height"] = val
        }
    }
}

export class XCircle extends XMesh {
   
    constructor(data:any, defaults:any) {
        if (!defaults) {
            defaults = {
                _type: "circle",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: {
                    _type: "circle-geometry",
                    radius: 0.25,
                    segments: 18,
                    thetaStart: 0,
                    thetaLength: Math.PI * 2
                },
                _material: {
                    _type: "standard-material",
                    color: 0xffffff,
                    side: 2
                },

            }
        }


        if(data._radius) defaults._geometry.radius = data._radius
        if(data._theta_start) defaults._geometry.thetaStart = data._theta_start
        if(data._theta_length) defaults._geometry.thetaLength = data._theta_length
        
        const dg = <IX3DObjectData>data._geometry;
        if(data._geometry) {
            (<IX3DObjectData>data._geometry)._threes_class_args =[dg.radius, dg.segments, dg.thetaStart, dg.thetaLength];
            (<IX3DObjectData>data._geometry)._type =   "circle-geometry";
        } else {
            data._geometry = defaults._geometry
            data._geometry._threes_class_args = [defaults._geometry.radius, defaults._geometry.segments, defaults._geometry.thetaStart, defaults._geometry.thetaLength]
        }
        
        
        super(data, defaults,true)
        this.parse(data)
        if(this._enable_physics) {
            this._cannon_shape = new CANNON.Cylinder(<any>dg.radius, <any>dg.radius, 0.1, <any>dg.segments)
        }
    }
}

/**
 * XModel 
 * enable auo wrapper for GLB/GLTF models
 * @example {
 *     _id: "model-id",
 *    _type: "xmodel",
 *   _model_url: "/public/models/scene.gltf",
 * }
 */
export class XModel extends X3DObject {
    static xtype = "xmodel"

    constructor(data:IX3DObjectData) {
        super(data,{_type:XModel.xtype},true)
        this.parse(data)
        
        this._log_rules._load_model = true
        
    }


    
    
}



export class X3DPrimitives extends XObjectPack {
    static getObjects() {
        return {
            "material": XMaterial,
            "geometry": XGeometry,
            "mesh": XMesh,
            "group": XGroup,
            "plane": XPlane,
            "box": XBox,
            "sphere": XSphere,
            "cylinder": XCylinder,
            "torus": XTorus,
            "cone": XCone,
            "xmodel": XModel,
            "perspective-camera": XCamera,
            "camera": XCamera, //alias to perspective-camera
            "light": XLight, // alias to ambient-light
            "circle":XCircle,
            // "skeleton": XSkeleton
        }
    }
}

export default X3DPrimitives
