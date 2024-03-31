[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3DLoader](../modules/X3D_X3DLoader.md) / \_X3DLoader

# Class: \_X3DLoader

[X3D/X3DLoader](../modules/X3D_X3DLoader.md)._X3DLoader

## Table of contents

### Constructors

- [constructor](X3D_X3DLoader._X3DLoader.md#constructor)

### Properties

- [dracoLoader](X3D_X3DLoader._X3DLoader.md#dracoloader)
- [loading](X3D_X3DLoader._X3DLoader.md#loading)

### Methods

- [loadDraco](X3D_X3DLoader._X3DLoader.md#loaddraco)
- [loadFBXAnimation](X3D_X3DLoader._X3DLoader.md#loadfbxanimation)
- [loadModelFromGLTF](X3D_X3DLoader._X3DLoader.md#loadmodelfromgltf)

## Constructors

### constructor

• **new _X3DLoader**(): [`_X3DLoader`](X3D_X3DLoader._X3DLoader.md)

#### Returns

[`_X3DLoader`](X3D_X3DLoader._X3DLoader.md)

#### Defined in

[X3D/X3DLoader.ts:23](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DLoader.ts#L23)

## Properties

### dracoLoader

• **dracoLoader**: `DRACOLoader`

#### Defined in

[X3D/X3DLoader.ts:19](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DLoader.ts#L19)

___

### loading

• **loading**: `boolean`

#### Defined in

[X3D/X3DLoader.ts:16](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DLoader.ts#L16)

## Methods

### loadDraco

▸ **loadDraco**(): `void`

#### Returns

`void`

#### Defined in

[X3D/X3DLoader.ts:28](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DLoader.ts#L28)

___

### loadFBXAnimation

▸ **loadFBXAnimation**(`fileName`, `x3dObject`, `onLoadCallBack?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fileName` | `string` |
| `x3dObject` | [`X3DObject`](X3D_X3DObject.X3DObject.md) |
| `onLoadCallBack?` | `Function` |

#### Returns

`void`

#### Defined in

[X3D/X3DLoader.ts:158](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DLoader.ts#L158)

___

### loadModelFromGLTF

▸ **loadModelFromGLTF**(`modelUrl`, `traverse?`): `Promise`\<`Object3D`\<`Event`\>\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `modelUrl` | `string` | `undefined` |
| `traverse` | `boolean` | `true` |

#### Returns

`Promise`\<`Object3D`\<`Event`\>\>

#### Defined in

[X3D/X3DLoader.ts:189](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DLoader.ts#L189)
