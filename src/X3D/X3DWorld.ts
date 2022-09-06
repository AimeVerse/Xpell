

import * as THREE from 'three'
import * as CANNON from 'cannon-es'

import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

import { FirstPersonControls } from 'three/examples/jsm/controls/FirstPersonControls.js';
import { PointerLockControls } from 'three/examples/jsm/controls/PointerLockControls.js'
import { TransformControls } from 'three/examples/jsm/controls/TransformControls'



import XUtils from '../XUtils';
import XData from '../XData';
import {XLogger as _xlog} from '../XLogger'
import X3D from "./X3D"



/**
 * Spell3dWorld
 */


export const XWorldStatus = {
    New: 0,
    Running: 1,
    Paused: 2
}

const CWORLD_STEP = 1.0/60.0 


const xWorldDefaults = {
    "html-tag-id": "body",
    renderer: {
        _type: "webgl",
        settings: { antialias: true, alpha: true }
    },
    scene: {
        lights: {
            "main": {
                _type: "ambient",
                color: 0x444477
            }
        },
        cameras: {
            "main": {
                _type: "perspective",
                fov: 20,
                ratio: window.innerWidth / window.innerHeight,
                clipping: {
                    far: 5000,
                    close: 0.01
                },
                position: { x: 0, y: 0, z: 0 },
                rotation: { x: 0, y: 0, z: 0 }
            }
        }
    }

}


export class CannonDebugRenderer {
    public scene: THREE.Scene
    public world: CANNON.World
    private _meshes: THREE.Mesh[] | THREE.Points[]
    private _material: THREE.MeshBasicMaterial
    private _particleMaterial = new THREE.PointsMaterial()
    private _sphereGeometry: THREE.SphereGeometry
    private _boxGeometry: THREE.BoxGeometry
    private _cylinderGeometry: THREE.CylinderGeometry
    private _planeGeometry: THREE.PlaneGeometry
    private _particleGeometry: THREE.BufferGeometry

    private tmpVec0: CANNON.Vec3 = new CANNON.Vec3()
    private tmpVec1: CANNON.Vec3 = new CANNON.Vec3()
    private tmpVec2: CANNON.Vec3 = new CANNON.Vec3()
    private tmpQuat0: CANNON.Quaternion = new CANNON.Quaternion()

    constructor(scene: THREE.Scene, world: CANNON.World, options?: object) {
        options = options || {}

        this.scene = scene
        this.world = world

        this._meshes = []

        this._material = new THREE.MeshBasicMaterial({
            color: 0x00ff00,
            wireframe: true,
        })
        this._particleMaterial = new THREE.PointsMaterial({
            color: 0xff0000,
            size: 10,
            sizeAttenuation: false,
            depthTest: false,
        })
        this._sphereGeometry = new THREE.SphereGeometry(1)
        this._boxGeometry = new THREE.BoxGeometry(1, 1, 1)
        this._cylinderGeometry = new THREE.CylinderGeometry(1, 1, 2, 8)
        this._planeGeometry = new THREE.PlaneGeometry(10, 10, 10, 10)
        this._particleGeometry = new THREE.BufferGeometry()
        this._particleGeometry.setFromPoints([new THREE.Vector3(0, 0, 0)])
    }

    public update() {
        const bodies: CANNON.Body[] = this.world.bodies
        const meshes: THREE.Mesh[] | THREE.Points[] = this._meshes
        const shapeWorldPosition: CANNON.Vec3 = this.tmpVec0
        const shapeWorldQuaternion: CANNON.Quaternion = this.tmpQuat0

        let meshIndex = 0

        for (let i = 0; i !== bodies.length; i++) {
            const body = bodies[i]

            for (let j = 0; j !== body.shapes.length; j++) {
                const shape = body.shapes[j]

                this._updateMesh(meshIndex, body, shape)

                const mesh = meshes[meshIndex]

                if (mesh) {
                    // Get world position
                    body.quaternion.vmult(
                        body.shapeOffsets[j],
                        shapeWorldPosition
                    )
                    body.position.vadd(shapeWorldPosition, shapeWorldPosition)

                    // Get world quaternion
                    body.quaternion.mult(
                        body.shapeOrientations[j],
                        shapeWorldQuaternion
                    )

                    // Copy to meshes
                    mesh.position.x = shapeWorldPosition.x
                    mesh.position.y = shapeWorldPosition.y
                    mesh.position.z = shapeWorldPosition.z
                    mesh.quaternion.x = shapeWorldQuaternion.x
                    mesh.quaternion.y = shapeWorldQuaternion.y
                    mesh.quaternion.z = shapeWorldQuaternion.z
                    mesh.quaternion.w = shapeWorldQuaternion.w
                }

                meshIndex++
            }
        }

        for (let i = meshIndex; i < meshes.length; i++) {
            const mesh: THREE.Mesh | THREE.Points = meshes[i]
            if (mesh) {
                this.scene.remove(mesh)
            }
        }

        meshes.length = meshIndex
    }

    private _updateMesh(index: number, body: CANNON.Body, shape: CANNON.Shape) {
        let mesh = this._meshes[index]
        if (!this._typeMatch(mesh, shape)) {
            if (mesh) {
                //console.log(shape.type)
                this.scene.remove(mesh)
            }
            mesh = this._meshes[index] = this._createMesh(shape)
        }
        this._scaleMesh(mesh, shape)
    }

    private _typeMatch(
        mesh: THREE.Mesh | THREE.Points,
        shape: CANNON.Shape
    ): boolean {
        if (!mesh) {
            return false
        }
        const geo: THREE.BufferGeometry = mesh.geometry
        return (
            (geo instanceof THREE.SphereGeometry &&
                shape instanceof CANNON.Sphere) ||
            (geo instanceof THREE.BoxGeometry && shape instanceof CANNON.Box) ||
            (geo instanceof THREE.CylinderGeometry &&
                shape instanceof CANNON.Cylinder) ||
            (geo instanceof THREE.PlaneGeometry &&
                shape instanceof CANNON.Plane) ||
            shape instanceof CANNON.ConvexPolyhedron ||
            (geo.id === shape.id && shape instanceof CANNON.Trimesh) ||
            (geo.id === shape.id && shape instanceof CANNON.Heightfield)
        )
    }

    private _createMesh(shape: CANNON.Shape): THREE.Mesh | THREE.Points {
        let mesh: THREE.Mesh | THREE.Points
        let geometry: THREE.BufferGeometry
        let v0: CANNON.Vec3
        let v1: CANNON.Vec3
        let v2: CANNON.Vec3
        const material: THREE.MeshBasicMaterial = this._material
        let points: THREE.Vector3[] = []

        switch (shape.type) {
            case CANNON.Shape.types.SPHERE:
                mesh = new THREE.Mesh(this._sphereGeometry, material)
                break

            case CANNON.Shape.types.BOX:
                mesh = new THREE.Mesh(this._boxGeometry, material)
                break

            case CANNON.Shape.types.CYLINDER:
                geometry = new THREE.CylinderGeometry(
                    (shape as CANNON.Cylinder).radiusTop,
                    (shape as CANNON.Cylinder).radiusBottom,
                    (shape as CANNON.Cylinder).height,
                    (shape as CANNON.Cylinder).numSegments
                )
                mesh = new THREE.Mesh(geometry, material)
                break

            case CANNON.Shape.types.PLANE:
                mesh = new THREE.Mesh(this._planeGeometry, material)
                break

            case CANNON.Shape.types.PARTICLE:
                mesh = new THREE.Points(
                    this._particleGeometry,
                    this._particleMaterial
                )
                break

            case CANNON.Shape.types.CONVEXPOLYHEDRON:
                // Create mesh
                geometry = new THREE.BufferGeometry()
                shape.id = geometry.id
                points = []
                for (
                    let i = 0;
                    i < (shape as CANNON.ConvexPolyhedron).vertices.length;
                    i += 1
                ) {
                    const v = (shape as CANNON.ConvexPolyhedron).vertices[i]
                    points.push(new THREE.Vector3(v.x, v.y, v.z))
                }
                geometry.setFromPoints(points)

                const indices = []
                for (
                    let i = 0;
                    i < (shape as CANNON.ConvexPolyhedron).faces.length;
                    i++
                ) {
                    const face = (shape as CANNON.ConvexPolyhedron).faces[i]
                    const a = face[0]
                    for (let j = 1; j < face.length - 1; j++) {
                        const b = face[j]
                        const c = face[j + 1]
                        indices.push(a, b, c)
                    }
                }

                geometry.setIndex(indices)

                mesh = new THREE.Mesh(geometry, material)

                break

            case CANNON.Shape.types.TRIMESH:
                geometry = new THREE.BufferGeometry()
                shape.id = geometry.id
                points = []
                for (
                    let i = 0;
                    i < (shape as CANNON.Trimesh).vertices.length;
                    i += 3
                ) {
                    points.push(
                        new THREE.Vector3(
                            (shape as CANNON.Trimesh).vertices[i],
                            (shape as CANNON.Trimesh).vertices[i + 1],
                            (shape as CANNON.Trimesh).vertices[i + 2]
                        )
                    )
                }
                geometry.setFromPoints(points)
                mesh = new THREE.Mesh(geometry, material)

                break

            case CANNON.Shape.types.HEIGHTFIELD:
                geometry = new THREE.BufferGeometry()

                v0 = this.tmpVec0
                v1 = this.tmpVec1
                v2 = this.tmpVec2
                for (
                    let xi = 0;
                    xi < (shape as CANNON.Heightfield).data.length - 1;
                    xi++
                ) {
                    for (
                        let yi = 0;
                        yi < (shape as CANNON.Heightfield).data[xi].length - 1;
                        yi++
                    ) {
                        for (let k = 0; k < 2; k++) {
                            ;(
                                shape as CANNON.Heightfield
                            ).getConvexTrianglePillar(xi, yi, k === 0)
                            v0.copy(
                                (shape as CANNON.Heightfield).pillarConvex
                                    .vertices[0]
                            )
                            v1.copy(
                                (shape as CANNON.Heightfield).pillarConvex
                                    .vertices[1]
                            )
                            v2.copy(
                                (shape as CANNON.Heightfield).pillarConvex
                                    .vertices[2]
                            )
                            v0.vadd(
                                (shape as CANNON.Heightfield).pillarOffset,
                                v0
                            )
                            v1.vadd(
                                (shape as CANNON.Heightfield).pillarOffset,
                                v1
                            )
                            v2.vadd(
                                (shape as CANNON.Heightfield).pillarOffset,
                                v2
                            )
                            points.push(
                                new THREE.Vector3(v0.x, v0.y, v0.z),
                                new THREE.Vector3(v1.x, v1.y, v1.z),
                                new THREE.Vector3(v2.x, v2.y, v2.z)
                            )
                            //const i = geometry.vertices.length - 3
                            //geometry.faces.push(new THREE.Face3(i, i + 1, i + 2))
                        }
                    }
                }
                geometry.setFromPoints(points)
                //geometry.computeBoundingSphere()
                //geometry.computeFaceNormals()
                mesh = new THREE.Mesh(geometry, material)
                shape.id = geometry.id
                break
            default:
                mesh = new THREE.Mesh()
                break
        }

        if (mesh && mesh.geometry) {
            this.scene.add(mesh)
        }

        return mesh
    }

    private _scaleMesh(mesh: THREE.Mesh | THREE.Points, shape: CANNON.Shape) {
        let radius: number
        let halfExtents: CANNON.Vec3
        let scale: CANNON.Vec3

        switch (shape.type) {
            case CANNON.Shape.types.SPHERE:
                radius = (shape as CANNON.Sphere).radius
                mesh.scale.set(radius, radius, radius)
                break

            case CANNON.Shape.types.BOX:
                halfExtents = (shape as CANNON.Box).halfExtents
                mesh.scale.copy(
                    new THREE.Vector3(
                        halfExtents.x,
                        halfExtents.y,
                        halfExtents.z
                    )
                )
                mesh.scale.multiplyScalar(2)
                break

            case CANNON.Shape.types.CONVEXPOLYHEDRON:
                mesh.scale.set(1, 1, 1)
                break

            case CANNON.Shape.types.TRIMESH:
                scale = (shape as CANNON.Trimesh).scale
                mesh.scale.copy(new THREE.Vector3(scale.x, scale.y, scale.z))
                break

            case CANNON.Shape.types.HEIGHTFIELD:
                mesh.scale.set(1, 1, 1)
                break
        }
    }
}


export class X3DWorld {
    status: number;
    worldRowData: any;
    scene: THREE.Scene;
    clock: THREE.Clock;
    renderer: THREE.WebGLRenderer;
    frameNumber: number;
    raycaster: THREE.Raycaster;
    widgetControls: TransformControls;
    lights: {};
    x3dObjects: {};
    defaultCamera: any;
    controls: OrbitControls | PointerLockControls | FirstPersonControls;
    frameProcessTime: number;
    audioListener:THREE.AudioListener
    enablePhysics:boolean = true
    cWorld:CANNON.World
    logger:{
        addObject:boolean,
        removeObject:boolean,
        
    }
    private _cannonDebugRenderer: CannonDebugRenderer;

    constructor(xworld) {

        XUtils.mergeDefaultsWithData(xworld, xWorldDefaults)

        this.status = XWorldStatus.New
        this.worldRowData = xworld
        this.scene = new THREE.Scene();
        this.clock = new THREE.Clock();
        this.renderer = new THREE.WebGLRenderer()
        this.renderer.setPixelRatio(window.devicePixelRatio);
        this.renderer.setSize(window.innerWidth, window.innerHeight);
        this.renderer.outputEncoding = THREE.sRGBEncoding;
        this.renderer.setClearColor(0x000000, 1); // the default color
        this.frameNumber = 0
        this.raycaster = new THREE.Raycaster()
         
        
        this.lights = {}
        this.x3dObjects = {}
        this.defaultCamera = null
        this.logger = {
            addObject:false,
            removeObject:false
        }
        
        this.enablePhysics = (xworld.physics) ? xworld.physics._active : false
        if(this.enablePhysics) {
            _xlog.log("Physics engine is active")
            this.cWorld = new CANNON.World()
            
            // Tweak contact properties.
            // Contact stiffness - use to make softer/harder contacts
            this.cWorld.defaultContactMaterial.contactEquationStiffness = 1e9
            
            // Stabilization time in number of timesteps
            this.cWorld.defaultContactMaterial.contactEquationRelaxation = 4
            
            const solver = new CANNON.GSSolver()
            solver.iterations = 7
            solver.tolerance = 0.1
            this.cWorld.solver = new CANNON.SplitSolver(solver)
            // use this to test non-split solver
            // cWorld.solver = solver
            
            this.cWorld.gravity.set(0, -9.83, 0)
            
            this.cWorld.broadphase = new CANNON.NaiveBroadphase();
        } else {
            _xlog.log("Physics engine is NOT Active")
        }






    }


    async run() {
        _xlog.log("Running 3d World")
        this.status = XWorldStatus.Running

        const xworld = this.worldRowData

        //get cameras

        let idx = 0

        // this.default_camera = new THREE.PerspectiveCamera(20, window.innerWidth / window.innerHeight, 0.01, 5000 );
        // this.default_camera.position.set(0,0,55)
        // this.scene.add(this.default_camera)

        if(xworld.helper && xworld.helper.axes){
            const axesHelper = new THREE.AxesHelper( xworld.helper.axes );
            this.scene.add( axesHelper );
        }
        if (xworld.scene.cameras) {
            const keys = Object.keys(xworld.scene.cameras)
            for (let i = 0; i < keys.length; ++i) {
                const camera = xworld.scene.cameras[keys[i]]
                camera.name = keys[i]

                
                let cam = X3D.create(camera)

                if(camera._helper) {
                    this.defaultCamera = cam.getThreeObject()
                    const helper = new THREE.CameraHelper( this.defaultCamera );
                    this.scene.add( helper );
                }
                else
                {
                    this.defaultCamera = await this.addX3DObject(cam)
                    
                }
                if(camera["_add_audio_listener"]) {
                    document.addEventListener("first-user-gesture",(e) => X3D.world.setAudioListener())
                }
            }
        } else {
            _xlog.log("XWorld -> no Cameras defined")
        }

        //get lights
        if (xworld.scene.lights) {
            Object.keys(xworld.scene.lights).forEach(light_name => {
                const lgt = xworld.scene.lights[light_name]
                let light = X3D.create(lgt)
                light.name = light_name
                
                if (lgt._helper && lgt._light == "directional") {
                    
                    const helper = new THREE.DirectionalLightHelper(light.getThreeObject())
                    this.scene.add(helper)
                }
                else {
                    this.addX3DObject(light)
                }
            })
        } else {
            _xlog.log("X3d world -> no Lights defined")
        }


        //get x3d-objects
        Object.keys(xworld["x3d-objects"]).forEach(async s3dobj => {
            let ob = xworld["x3d-objects"][s3dobj]
            ob.name = s3dobj
            let obj = X3D.create(ob)
            await this.addX3DObject(obj)
        })

        document.getElementById(xworld["html-tag-id"]).appendChild(this.renderer["domElement"]);

        //this.gui = new dat.GUI();

        // Helpers
        //this.scene.add(new THREE.AxesHelper(5))


        if (xworld.scene.controls) {
            Object.keys(xworld.scene.controls).forEach(async ctrl => {
                let control = xworld.scene.controls[ctrl]
                if (control._type == "orbit" && control._active) {
                    this.controls = new OrbitControls(this.defaultCamera, this.renderer["domElement"]);
                    if (control._params) {
                        Object.keys(control._params).forEach(key => this.controls[key] = control._params[key])
                    }
                    // this.controls.minPolarAngle = Math.PI/2.5
                    // this.controls.maxPolarAngle = Math.PI/1.5
                    // this.controls.minDistance = 2
                    // this.controls.maxDistance = 10
                    // this.controls.rotateSpeed = 0.3

                }
                else if (control._type == "pointer" && control._active) {
                    this.controls = new PointerLockControls(this.defaultCamera, this.renderer.domElement);
                }
                else if (control._type == "first-person" && control._active) {
                    this.controls = new FirstPersonControls(this.defaultCamera, this.renderer.domElement);
                    this.controls.activeLook = true
                    this.controls.lookSpeed = 0.3;
                    this.controls.movementSpeed = 50;
                    this.controls.lookVertical = true;
                    this.controls.constrainVertical = true;
                    this.controls.verticalMin = Math.PI / 2;
                    this.controls.verticalMax = 1.5;
                    this.controls.autoForward = false;
                }
            })
        }


        this._cannonDebugRenderer = new CannonDebugRenderer(this.scene,this.cWorld)
        this.render();

    }

    setAudioListener(){
        _xlog.log("Setting camera audio listener")
        this.audioListener = new THREE.AudioListener()
        this.defaultCamera.add(this.audioListener)
    }

    onWindowResize() {
        const w = window.innerWidth;
        const h = window.innerHeight;
        this.defaultCamera.aspect = w / h;
        this.defaultCamera.updateProjectionMatrix();
        this.renderer["setSize"](w, h);
    }

    async addX3DObject(x3dObject) {
        if (x3dObject && !x3dObject._ignore_world) {
            if(this.logger.addObject) {_xlog.log("XWorld adding ", x3dObject._id)}

            this.x3dObjects[x3dObject._id] = x3dObject
            const tobj = x3dObject.getThreeObject()
            
            this.scene.add(tobj)
            if(this.enablePhysics && x3dObject._enable_physics) {
                
                const cannonObject = x3dObject.getCannonObject()
                
                if(cannonObject) {
                    this.cWorld.addBody(cannonObject)
                }
            }

            return tobj
        }
    }

    async removeX3DObject(objectId:string) {
        
        if(this.logger.removeObject) _xlog.log("XWorld Removing " + objectId)
        const tobj = this.x3dObjects[objectId]
        tobj._three_obj.removeFromParent()
        if(tobj._cannon_obj) this.cWorld.removeBody(tobj._cannon_obj)
        
        delete this.x3dObjects[objectId] 
    
    }



    create_transform_controls(obj) {
        this.widgetControls = new TransformControls(this.defaultCamera, this.renderer["domElement"])
        this.widgetControls.addEventListener("dragging-changed", (e) => {

            this.controls["enabled"] = ! e.value
        })
        this.widgetControls["attach"](obj)
        this.scene.add(this.widgetControls)
    }

    // being called on every frame 
    async onFrame(frameNumber) {

        if (this.status == XWorldStatus.Running) {
            this.clock.start()
            this.frameNumber = frameNumber
            // Object.keys(this.x3dObjects).forEach(obj_name => {

            //     const off = this.x3dObjects[obj_name].onFrame
            //     if (off && (typeof off === 'function')) {
            //         this.x3dObjects[obj_name].onFrame(frameNumber)
            //     }
            // })
            //update object move
            this.render()
            if (this.controls && this.controls["update"]) {
                
                this.controls["update"](this.clock.getDelta());
                XData.variables["control-azimuth"] = this.controls["getAzimuthalAngle"]()
                
                const controlTarget = XData.objects["control-target"]
                const cp = XData.objects["cam-path-pos"]

                if (controlTarget) {
                    // this.controls.target.set(tv)
                    this.defaultCamera.position.sub(this.controls["target"])
                    this.controls["target"].copy(new THREE.Vector3(controlTarget.x,controlTarget.y,controlTarget.z))
                    this.defaultCamera.position.add(new THREE.Vector3(controlTarget.x,controlTarget.y,controlTarget.z))
                    delete XData.objects["control-target"]
                }
                else if (cp) {
                    // const tv = SpellData.objects["control-target"] 
                    // this.default_camera.position.sub(this.controls.target)
                    // this.controls.target.copy(cp)
                    this.defaultCamera.position.add(cp)
                    this.defaultCamera.lookAt(new THREE.Vector3(0,0,0))
                    // this.default_camera.rotation.set(SpellData.objects["cam-path-rotation"])
                }
            }

            if(this.enablePhysics && this.cWorld) {
                this.cWorld.step(CWORLD_STEP);
                this._cannonDebugRenderer.update()
            }


            this.clock.stop()
            this.frameProcessTime = this.clock.getElapsedTime()



        }
    }


    /**
     * Adds background to the scene
     * @param {THREE.Texture}environmentMap scene background
     */
    addBackground(environmentMap:THREE.Texture) {
        this.scene.background = environmentMap
    }

    //draw screen
    render() {
        if (this.defaultCamera) {
            this.renderer["render"](this.scene, this.defaultCamera);
        }

    }




}


export default X3DWorld