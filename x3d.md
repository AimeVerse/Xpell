# X3D
The X3D Module handles the management and communication with the 3D engine (Three.js). 

## X3DObject

This object extends XObject and wraps Three.Object3D object to control the 3D environment.

This object uses as a base class for any other X3D module objects (like X3d Core Objects and X3D Primitives).
 
To create a new X3D Object simply extend the X3DObject class:

```
class MyX3DObject extends X3DObject {
   constructor(data:IX3DDataObject) {
      super(data)
      //your own code
   }
}
```

After that import the new Object class to the X3D module with the importObject method:

```X3D.importObject("object-name",MyX3DObject)```



### OnClick Method
This method is invoked when the X3DObject is clicked by the user.

To set the method from the XObject use the _on_click attribute that can receive both textual XCommand (CLI) or callable Javascript function:

The following example is a button that log to the console when it being clicked:
```
{
   _type:"button",
   _id:"my-button",
   _text:"click me",
   style:"border:1px solid black;border-radius:5px",
   _on_click:(xobj:X3DObject,e:HTMLEvent) => {console.log("click")}
}
```

## X3D Core Objects

### XCamera
This object wraps the 3D Camera object.

- Wrapping Three Object : Three.Camera
- Xpell name : "camera"
- Atrributes:
    _fov:number //Camera frustum vertical field of view, in degrees. Default is 50
    _ratio:number //camera aspect ratio
    _far:number  //Camera frustum far plane. Default is 2000
    _close:number  //Camera frustum near plane. Default is 0.1.
    _positional_audio_listener:boolean //Make the camera a positional audio listener
    _camera:XCameraTypes //camera type: "perspective-camera" | "orthographic-camera"

## XLight
This object wraps the 3D Light object.

- Wrapping Three Object : Three.Light
- Xpell name : "light"
- Attributes:
    _light?:string, //xlight type: "ambient" | "directional" | "spotlight"
    _color? : number | string | THREE.Color, // light color
    _intensity?: number  //light intensity default is 1

## XGeometry
This object wraps the 3D Geometry object, representing the basic 3D shape of an object.

- Wrapping Three Object : Three.Geometry
- Xpell name : "geometry"
- Attributes:
    _width?:number, //geometry width
    _hegiht? : number //geometry height

## XMaterial
This object wraps the Three Material object, which defines the appearance of 3D objects.

- Wrapping Three Object : Three.Material
= Xpell name : "material"
= Xpell attributes:
    _normal_map : string or object // normal map file or object with offset and rotation
    _dp_map : string // displacement map file
    _texture_map : string or object // texture map file or object with offset and rotation
* To use maps, set the _normal_map, _dp_map, and _texture_map attributes with the file path or object that includes the file path along with optional offset and rotation values. For example:

```
_normal_map: "/public/normal-map-file-name"
 
_dp_map: "/public/dp-map-file-name"

_texture_map: {
    texture: "/public/texture-file-name",
    offset: $_v2 0 0, // Three.Vector2 object (x,y)
    rotation: 3 // number
}
```

## XMesh
This object wraps the Three.js Mesh object, representing a 3D object in a scene.

- Wrapping Three Object: Three.Mesh
- Xpell name: "mesh"
= Xpell Attributes:
    _geometry: An XGeometry object representing the shape of the mesh.
    _material: An XMaterial object representing the surface appearance of the mesh.

## XGroup
This object represents a collection of 3D objects, and can be used to group multiple X3DObjects together. The XGroup object is similar to the Three.js Group object, but with additional functionality provided by the Xpell framework.

- Wrapping Three Object: Three.Group
- Xpell name: "group"


## XPlane
This object represents a plane in 3D space with a specified width and height. The plane can be customized with texture and material. The plane is always positioned parallel to the XY plane and can be rotated in any direction using _rotation attribute.

- Xpell Attributes:
    _geometry: An object that defines the geometry of the plane. It has the following Xpell attributes:
    _material: An object that defines the material of the plane

- Example:
```
{
    _type: "plane",
    _geometry: {
        _type: "plane-geometry",
        width: 2,
        height: 2,
        widthSegments: 500,
        heightSegments: 500
    },
    _material: {
        _type: "standard-material",
        color: 0x0e0e0e,
        side: 2
    },
    _position: {x: 0,y: 0,z: 0},
    _rotation: {x: 90,y: 0,z: 0}
}

```


## XBox

This object represents a 3D rectangular box, and is used to create objects with box-like shapes. It can be used to represent a variety of objects, such as buildings, rooms, or furniture.

- Wrapping Three Object: Three.BoxGeometry
- Xpell name: "box"
- Attributes:
  _geometry: the geometry of the XBox object. It specifies the dimensions of the box.
  _material: the material of the XBox object. It defines the appearance of the box.

Example:
```
{
    _type: "box",
    _geometry: {
        _type: "box-geometry",
        width: 2,
        height: 2,
        depth: 2,
        widthSegments: 1,
        heightSegments: 1,
        depthSegments: 1
    },
    _material: {
        _type: "standard-material",
        color: 0xff0000,
        side: 2
    }
}
```

## XSphere

This object represents a sphere in a 3D space.

- Wrapping Three Object: Three.Mesh
- Xpell name: "sphere"
= Attributes:
    _geometry: (required) The geometry of the sphere. It contains the information about the sphere's shape.
    _material: (required) The material applied to the sphere's surface to determine its appearance.

Example usage:
```
{
  _id:"my-sphere",
  _type: "sphere",
  _geometry: {
    _type: "sphere-geometry",
    radius: 2,
    widthSegments: 32,
    heightSegments: 32,
    phiStart: 0,
    phiLength: Math.PI * 2,
    thetaStart: 0,
    thetaLength: Math.PI
  },
  _material: {
    _type: "standard-material",
    color: 0xff0000
  },
  _position: {x: 0, y: 0, z: 0},
  _rotation: {x: 0, y: 0, z: 0}
}
```
## XCylinder
XCylinder is a 3D object that represents a cylinder shape. It can be customized with different sizes and materials.

- Wrapping Three Object: Three.CylinderGeometry
- Xpell name: "cylinder"
- Attributes:
    _geometry: XGeometry of the cylinder
    _material: XMaterial of the cylinder

Example:
```
{
    _type: "cylinder",
    _geometry: {
        _type: "cylinder-geometry",
        radiusTop: 1,
        radiusBottom: 1,
        height: 2,
        radialSegments: 32,
        heightSegments: 1,
        openEnded: false
    },
    _material: {
        _type: "standard-material",
        color: 0xff0000,
        side: 2
    },
    _position: {x: 0, y: 0, z: 0},
    _rotation: {x: 0, y: 0, z: 0},
    _scale: {x: 1, y: 1, z: 1},
    _id: "cylinder-1"
}

```

## XTorus
The XTorus object represents a torus 3D shape.

- Wrapping Three Object: Three.TorusGeometry
- Xpell name: "geometry"
- Attributes:
    _geometry: XGeometry of the cylinder
    _material: XMaterial of the cylinder

Example:
```
{
    _id: "myTorus",
    _type: "torus",
    _geometry: {
        _type: "torus-geometry",
        radius: 1,
        tube: 0.4,
        radialSegments: 8,
        tubularSegments: 24,
        arc: Math.PI * 2
    },
    _material: {
        _type: "standard-material",
        color: 0xff0000,
        transparent: true,
        opacity: 0.5,
        side: 2
    },
    _position: { x: 0, y: 0, z: 0 },
    _rotation: { x: 0, y: 0, z: 0 },
    _scale: { x: 1, y: 1, z: 1 }
}
```

## XCone
This object wraps the Three.js ConeGeometry object and represents a cone.

Wrapping Three Object: Three.ConeGeometry
Xpell name: "cone"
Attributes: 
    _geometry: XGeometry of the cylinder
    _material: XMaterial of the cylinder

Example:
```
{
  _type: "cone",
  _geometry: {
    _type: "cone-geometry",
    radius: 1,
    height: 2,
    radialSegments: 8,
    heightSegments: 1,
    openEnded: false,
    thetaStart: 0,
    thetaLength: Math.PI / 2
  },
  _material: {
    _type: "basic-material",
    color: 0xff0000
  },
  _position: { x: 0, y: 0, z: 0 },
  _rotation: { x: 0, y: 0, z: 0 },
  _scale: { x: 1, y: 1, z: 1 }
}
```