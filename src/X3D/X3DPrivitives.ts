import X3DObject from './X3DObject'
import { XObjectPack } from '../XObject'
import { XCamera, XGeometry, XLight, XMaterial, XMesh, XGroup } from './X3DCoreObjects'
import * as THREE from 'three'
import * as CANNON from 'cannon-es'


export class XPlane extends XMesh {

    // static descriptor() {
    //     return {
    //         name: "Plane",
    //         desc: "Plane Object",
    //         defaults: {
    //             _type: "plane",
    //             _geometry: {
    //                 _type: "plane-geometry",
    //                 width: 2,
    //                 height: 2,
    //                 widthSegments: 500,
    //                 heightSegments: 500
    //             },
    //             _material: {
    //                 _type: "standard-material",
    //                 color: 0x0e0e0e,
    //                 side: 2
    //             },
    //             _position: {x: 0,y: 0,z: 0},
    //             _rotation: {x: 90,y: 0,z: 0}
    //         }
    //     }
    // }



    constructor(data, defaults?) {

        if (!defaults) {
            defaults = {
                _type: "plane",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.width, data._geometry.height, data._geometry.widthSegments, data._geometry.heightSegments]
        super(data, defaults)
        this._cannon_shape = new CANNON.Box(new CANNON.Vec3(data._geometry.width/2, data._geometry.height/2, 0.01))

        // var slipperyMat = new CANNON.Material();
        // var friction = 0.0;
        // var restitution = 0.2;
        // var slipperyContact = new CANNON.ContactMaterial(slipperyMat, slipperyMat, friction, restitution);
        // world.addContactMaterial(slipperyContact);
    }

}


/**
 * 3D Box 
 * @example {
            _id: "box-id",
            _type: "box",
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
                color: 0xff00ff,
                side: 2
            },
            _position: { x: 0, y: 1.5, z: 0 },
            _rotation: { x: Math.PI / 2, y: 0, z: 0 },
            _enable_physics: true,
            _mass: 0,
        }
 */

export class XBox extends XMesh {

    constructor(data, defaults) {
        if (!defaults) {
            defaults = {
                _type: "box",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.width, data._geometry.height, data._geometry.depth, data._geometry.widthSegments, data._geometry.heightSegments, data._geometry.depthSegments]
        super(data, defaults)
        this._cannon_shape = new CANNON.Box(new CANNON.Vec3(data._geometry.width/2, data._geometry.height/2, data._geometry.depth/2))
    }
}

export class XSphere extends XMesh {
    // static descriptor() {
    //     return {
    //         name: "Sphere",
    //         desc: "Sphere Object",
    //         defaults: {
    //             [_SC.NODES.type]: "sphere",
    //             _geometry: {
    //                 [_SC.NODES.type]: "sphere-geometry",
    //                 widthSegments: 20,
    //                 heightSegments: 20,
    //                 radius: 0.25
    //             },
    //             _material: {
    //                 [_SC.NODES.type]: "standard-material",
    //                 color: 0xffffff,
    //                 side: 2
    //             },
    //             _position: {x: THREE.MathUtils.randFloat(-0.5,0.5),y: THREE.MathUtils.randFloat(0.3,0.5),z: THREE.MathUtils.randFloat(0,2)},
    //             _rotation: {x: 90,y: 0,z: 0},
    //             "onframe":"rotation x:++0.01"
    //         }
    //     }
    // }

    constructor(data, defaults) {



        if (!defaults) {
            defaults = {
                _type: "sphere",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null

            }
        }
        data._geometry._threes_class_args = [data._geometry.radius, data._geometry.widthSegments, data._geometry.heightSegments]

        super(data, defaults)
        if(this._enable_physics) {
            this._cannon_shape = new CANNON.Sphere(data._geometry.radius)
        }

    }

    getThreeObject(){
        const obj = super.getThreeObject()
        console.log("mat ", obj);
        
        return obj
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

    constructor(data, defaults) {



        if (!defaults) {
            defaults = {
                _type: "cylinder",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.radiusTop, data._geometry.radiusBottom, data._geometry.height, data._geometry.radialSegments]

        super(data, defaults)
        if(this._enable_physics) {
            this._cannon_shape = new CANNON.Cylinder(data._geometry.radiusTop, data._geometry.radiusBottom, data._geometry.height, data._geometry.radialSegments)
        }
    }

}

export class XTorus extends XMesh {
    // static descriptor() {
    //     return {
    //         name: "Torus",
    //         desc: "Torus Object",
    //         defaults: {
    //             [_SC.NODES.type]: "torus",
    //             _geometry: {
    //                 [_SC.NODES.type]: "torus-geometry",
    //                 radius: 0.5,
    //                 tubeRadius: 0.25,
    //                 radialSegments: 12,
    //                 tubularSegments: 20
    //             },
    //             _material: {
    //                 [_SC.NODES.type]: "standard-material",
    //                 color: 0xffffff,
    //                 side: 2
    //             },
    //             _position: {
    //                 x: 0,
    //                 y: 1,
    //                 z: 0
    //             },
    //             _rotation: {
    //                 x: 1.57,
    //                 y: 0,
    //                 z: 0
    //             }
    //         }
    //     }
    // }

    constructor(data, defaults) {



        if (!defaults) {
            defaults = {
                _type: "torus",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.radius, data._geometry.tubeRadius, data._geometry.radialSegments, data._geometry.tubularSegments]

        super(data, defaults)
    }

}

export class XCone extends XMesh {
    // static descriptor() {
    //     return {
    //         name: "Cone",
    //         desc: "Cone Object",
    //         defaults: {
    //             [_SC.NODES.type]: "cone",
    //             _geometry: {
    //                 [_SC.NODES.type]: "cone-geometry",
    //                 radius: 0.25,
    //                 height: 0.5,
    //                 segments: 18
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

    constructor(data, defaults) {
        if (!defaults) {
            defaults = {
                _type: "cone",
                _three_class: THREE.Mesh,
                _three_obj: null,
                _geometry: null,
                _material: null
            }
        }
        data._geometry._threes_class_args = [data._geometry.radius, data._geometry.height, data._geometry.segments]

        super(data, defaults)
    }

}

export class XFloor extends X3DObject {

    _geometry: XGeometry
    _material: XMaterial
    _num_of_blocks_x: number
    _num_of_blocks_z: number
    constructor(data) {
        const defaults = {
            _three_class: THREE.Group,
            _base_color_map: null,
            _normal_map: null,
            _height_map: null,
            _block_width: 0,
            _block_height: 0,
            _num_of_blocks_x: 0,
            _num_of_blocks_z: 0,
            _geometry: null,
            _material: null


        }


        super(data, defaults)





    }

    getThreeObject() {

        const plane = {
            _type: "plane",
            _geometry: this._geometry,
            _material: this._material,
            _grid: 10,
            _position: {
                x: 0,
                y: 0,
                z: 0
            },
            _rotation: {
                x: 0,
                y: 0,
                z: 0
            },
            receiveShadow: true
            // onframe:"rotate y up 0.01"
        }


        //const so = new SpellPlane(plane)
        // const geometry = new THREE.PlaneGeometry(this._block_width, this._block_length, 12, 12);
        // const material = new THREE.MeshStandardMaterial(
        //     {
        //         map: sandBaseColor, normalMap: sandNormalMap,
        //         displacementMap: sandHeightMap, displacementScale: 0.1,
        //         aoMap: sandAmbientOcclusion
        //     })

        let basic_floor = (new XPlane(plane)).getThreeObject()

        this._three_obj = new this._three_class()

        for (let i = 0; i < this._num_of_blocks_x; i++) {
            for (let j = 0; j < this._num_of_blocks_z; j++) {
                const floor = basic_floor.clone()
                floor.receiveShadow = true
                floor.rotation.x = -Math.PI / 2

                floor.position.x = i * this._geometry.width - (this._num_of_blocks_x / 2) * this._geometry.width
                //floor.position.y = j * this._geometry.width - (this._num_of_blocks_x / 2) * this._geometry.width
                floor.position.z = j * this._geometry.height - (this._num_of_blocks_z / 2) * this._geometry.height

                this._three_obj.add(floor)
            }
        }

        return super.getThreeObject()
    }



}


export class XSkeleton extends X3DObject {


    _bones: Array<THREE.Bone>

    constructor(data, defaults = {
        _type: "bone",
        _three_class: THREE.SkinnedMesh,
        _three_obj: null,
        _geometry: null,
        _material: null
    }) {
        super(data, defaults)

        this._bones = [];

        const shoulder = new THREE.Bone();
        const elbow = new THREE.Bone();
        const hand = new THREE.Bone();

        shoulder.add(elbow);
        elbow.add(hand);

        this._bones.push(shoulder);
        this._bones.push(elbow);
        this._bones.push(hand);

        shoulder.position.y = -5;
        elbow.position.y = 0;
        hand.position.y = 5;
        this._skeleton = new THREE.Skeleton(this._bones)



        if (!this._three_obj) {
            this._geometry = new XGeometry(data._geometry)
            this._material = new XMaterial(data._material)
        }


        //this._threes_class_args = [this._skeleton]

    }

    /**
   * this method triggered after the THREE 3d object has been created
   * override to implement
   */
    async onCreate() {
        //console.log("skeleton created");
        //this.
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
            "floor": XFloor,
            "perspective-camera": XCamera,
            "light": XLight,
            "skeleton": XSkeleton
        }
    }
}

export default X3DPrimitives
