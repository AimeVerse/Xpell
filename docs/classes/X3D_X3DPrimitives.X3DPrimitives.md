[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3DPrimitives](../modules/X3D_X3DPrimitives.md) / X3DPrimitives

# Class: X3DPrimitives

[X3D/X3DPrimitives](../modules/X3D_X3DPrimitives.md).X3DPrimitives

ObjectPack class for multi object registration

## Hierarchy

- [`XObjectPack`](Core_XObject.XObjectPack.md)

  ↳ **`X3DPrimitives`**

## Table of contents

### Constructors

- [constructor](X3D_X3DPrimitives.X3DPrimitives.md#constructor)

### Methods

- [getObjects](X3D_X3DPrimitives.X3DPrimitives.md#getobjects)

## Constructors

### constructor

• **new X3DPrimitives**(): [`X3DPrimitives`](X3D_X3DPrimitives.X3DPrimitives.md)

#### Returns

[`X3DPrimitives`](X3D_X3DPrimitives.X3DPrimitives.md)

#### Inherited from

[XObjectPack](Core_XObject.XObjectPack.md).[constructor](Core_XObject.XObjectPack.md#constructor)

## Methods

### getObjects

▸ **getObjects**(): `Object`

Get all registered object in this ObjectPack

#### Returns

`Object`

XObject dictionary

| Name | Type |
| :------ | :------ |
| `box` | typeof [`XBox`](X3D_X3DPrimitives.XBox.md) |
| `camera` | typeof [`XCamera`](X3D_X3DCoreObjects.XCamera.md) |
| `circle` | typeof [`XCircle`](X3D_X3DPrimitives.XCircle.md) |
| `cone` | typeof [`XCone`](X3D_X3DPrimitives.XCone.md) |
| `cylinder` | typeof [`XCylinder`](X3D_X3DPrimitives.XCylinder.md) |
| `geometry` | typeof [`XGeometry`](X3D_X3DCoreObjects.XGeometry.md) |
| `group` | typeof [`XGroup`](X3D_X3DCoreObjects.XGroup.md) |
| `light` | typeof [`XLight`](X3D_X3DCoreObjects.XLight.md) |
| `material` | typeof [`XMaterial`](X3D_X3DCoreObjects.XMaterial.md) |
| `mesh` | typeof [`XMesh`](X3D_X3DCoreObjects.XMesh.md) |
| `perspective-camera` | typeof [`XCamera`](X3D_X3DCoreObjects.XCamera.md) |
| `plane` | typeof [`XPlane`](X3D_X3DPrimitives.XPlane.md) |
| `sphere` | typeof [`XSphere`](X3D_X3DPrimitives.XSphere.md) |
| `torus` | typeof [`XTorus`](X3D_X3DPrimitives.XTorus.md) |
| `xmodel` | typeof [`XModel`](X3D_X3DPrimitives.XModel.md) |

#### Overrides

[XObjectPack](Core_XObject.XObjectPack.md).[getObjects](Core_XObject.XObjectPack.md#getobjects)

#### Defined in

[X3D/X3DPrimitives.ts:538](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DPrimitives.ts#L538)
