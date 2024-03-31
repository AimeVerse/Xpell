[xpell](../README.md) / [Modules](../modules.md) / X3D/X3D

# Module: X3D/X3D

## Table of contents

### References

- [X3DObject](X3D_X3D.md#x3dobject)
- [default](X3D_X3D.md#default)

### Classes

- [X3DModule](../classes/X3D_X3D.X3DModule.md)

### Type Aliases

- [X3AxesHelper](X3D_X3D.md#x3axeshelper)
- [X3DApp](X3D_X3D.md#x3dapp)
- [X3DHelpers](X3D_X3D.md#x3dhelpers)
- [X3DPhysicsEngines](X3D_X3D.md#x3dphysicsengines)
- [X3DSceneControl](X3D_X3D.md#x3dscenecontrol)
- [XHelperData](X3D_X3D.md#xhelperdata)

### Variables

- [X3D](X3D_X3D.md#x3d)
- [X3DEngineStatus](X3D_X3D.md#x3denginestatus)

## References

### X3DObject

Re-exports [X3DObject](../classes/X3D_X3DObject.X3DObject.md)

___

### default

Renames and re-exports [X3D](X3D_X3D.md#x3d)

## Type Aliases

### X3AxesHelper

Ƭ **X3AxesHelper**: `Object`

X3DHelper Data

#### Type declaration

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Defined in

[X3D/X3D.ts:51](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L51)

___

### X3DApp

Ƭ **X3DApp**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_parent_element` | `string` |
| `_physics` | \{ `_active`: `boolean` ; `_debug?`: `boolean` ; `_engine?`: [`X3DPhysicsEngines`](X3D_X3D.md#x3dphysicsengines)  } |
| `_physics._active` | `boolean` |
| `_physics._debug?` | `boolean` |
| `_physics._engine?` | [`X3DPhysicsEngines`](X3D_X3D.md#x3dphysicsengines) |
| `_scene` | \{ `_background?`: [`X3DSceneBackground`](X3D_X3DWorldSceneBackground.md#x3dscenebackground) ; `_cameras?`: \{ `[k: string]`: [`XCameraData`](../interfaces/X3D_X3DCoreObjects.XCameraData.md);  } ; `_controls?`: \{ `[k: string]`: [`X3DSceneControl`](X3D_X3D.md#x3dscenecontrol);  } ; `_helpers?`: \{ `[k: string]`: [`XHelperData`](X3D_X3D.md#xhelperdata)\<[`X3AxesHelper`](X3D_X3D.md#x3axeshelper)\>;  } ; `_lights?`: \{ `[k: string]`: [`XLightData`](../interfaces/X3D_X3DCoreObjects.XLightData.md);  } ; `_objects?`: \{ `[k: string]`: [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md);  } ; `_raycast?`: `boolean`  } |
| `_scene._background?` | [`X3DSceneBackground`](X3D_X3DWorldSceneBackground.md#x3dscenebackground) |
| `_scene._cameras?` | \{ `[k: string]`: [`XCameraData`](../interfaces/X3D_X3DCoreObjects.XCameraData.md);  } |
| `_scene._controls?` | \{ `[k: string]`: [`X3DSceneControl`](X3D_X3D.md#x3dscenecontrol);  } |
| `_scene._helpers?` | \{ `[k: string]`: [`XHelperData`](X3D_X3D.md#xhelperdata)\<[`X3AxesHelper`](X3D_X3D.md#x3axeshelper)\>;  } |
| `_scene._lights?` | \{ `[k: string]`: [`XLightData`](../interfaces/X3D_X3DCoreObjects.XLightData.md);  } |
| `_scene._objects?` | \{ `[k: string]`: [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md);  } |
| `_scene._raycast?` | `boolean` |

#### Defined in

[X3D/X3D.ts:66](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L66)

___

### X3DHelpers

Ƭ **X3DHelpers**: ``"axes"`` \| ``"skeleton"``

#### Defined in

[X3D/X3D.ts:46](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L46)

___

### X3DPhysicsEngines

Ƭ **X3DPhysicsEngines**: ``"cannon.js"``

#### Defined in

[X3D/X3D.ts:45](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L45)

___

### X3DSceneControl

Ƭ **X3DSceneControl**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_active` | `boolean` |
| `_params?` | \{ `[k: string]`: `any`;  } |
| `_type` | ``"orbit"`` \| ``"pointer"`` \| ``"first-person"`` \| ``"transform"`` |

#### Defined in

[X3D/X3D.ts:38](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L38)

___

### XHelperData

Ƭ **XHelperData**\<`Type`\>: `Object`

X3DHelper Data

#### Type parameters

| Name |
| :------ |
| `Type` |

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_active` | `boolean` |
| `_params?` | \{ [Property in keyof Type]: Type[Property] } |
| `_type` | [`X3DHelpers`](X3D_X3D.md#x3dhelpers) |

#### Defined in

[X3D/X3D.ts:58](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L58)

## Variables

### X3D

• `Const` **X3D**: [`X3DModule`](../classes/X3D_X3D.X3DModule.md)

#### Defined in

[X3D/X3D.ts:429](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L429)

___

### X3DEngineStatus

• `Const` **X3DEngineStatus**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `New` | `number` |
| `Ready` | `number` |
| `Running` | `number` |
| `Stopped` | `number` |

#### Defined in

[X3D/X3D.ts:31](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L31)
