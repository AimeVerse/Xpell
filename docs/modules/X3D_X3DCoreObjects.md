[xpell](../README.md) / [Modules](../modules.md) / X3D/X3DCoreObjects

# Module: X3D/X3DCoreObjects

## Table of contents

### Classes

- [HemisphereLight](../classes/X3D_X3DCoreObjects.HemisphereLight.md)
- [XCamera](../classes/X3D_X3DCoreObjects.XCamera.md)
- [XGeometry](../classes/X3D_X3DCoreObjects.XGeometry.md)
- [XGroup](../classes/X3D_X3DCoreObjects.XGroup.md)
- [XLight](../classes/X3D_X3DCoreObjects.XLight.md)
- [XMaterial](../classes/X3D_X3DCoreObjects.XMaterial.md)
- [XMesh](../classes/X3D_X3DCoreObjects.XMesh.md)

### Interfaces

- [HemisphereLightData](../interfaces/X3D_X3DCoreObjects.HemisphereLightData.md)
- [XCameraData](../interfaces/X3D_X3DCoreObjects.XCameraData.md)
- [XLightData](../interfaces/X3D_X3DCoreObjects.XLightData.md)

### Type Aliases

- [XCameraTypes](X3D_X3DCoreObjects.md#xcameratypes)
- [XLightTypes](X3D_X3DCoreObjects.md#xlighttypes)

### Variables

- [default](X3D_X3DCoreObjects.md#default)
- [threeCameras](X3D_X3DCoreObjects.md#threecameras)
- [threeGeometries](X3D_X3DCoreObjects.md#threegeometries)
- [threeLights](X3D_X3DCoreObjects.md#threelights)
- [threeMaterials](X3D_X3DCoreObjects.md#threematerials)

## Type Aliases

### XCameraTypes

Ƭ **XCameraTypes**: ``"perspective-camera"`` \| ``"perspective"`` \| ``"camera"`` \| ``"orthographic-camera"`` \| ``"orthographic"``

#### Defined in

[X3D/X3DCoreObjects.ts:57](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L57)

___

### XLightTypes

Ƭ **XLightTypes**: ``"ambient"`` \| ``"directional"`` \| ``"spotlight"`` \| ``"hemisphere"`` \| ``"point"`` \| ``"rectArea"`` \| ``"lightE"`` \| ``"lightProbe"``

supported Three light type

#### Defined in

[X3D/X3DCoreObjects.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L101)

## Variables

### default

• **default**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `XCamera` | typeof [`XCamera`](../classes/X3D_X3DCoreObjects.XCamera.md) |

#### Defined in

[X3D/X3DCoreObjects.ts:374](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L374)

___

### threeCameras

• `Const` **threeCameras**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[X3D/X3DCoreObjects.ts:4](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L4)

___

### threeGeometries

• `Const` **threeGeometries**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[X3D/X3DCoreObjects.ts:23](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L23)

___

### threeLights

• `Const` **threeLights**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[X3D/X3DCoreObjects.ts:12](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L12)

___

### threeMaterials

• `Const` **threeMaterials**: `Object`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[X3D/X3DCoreObjects.ts:38](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L38)
