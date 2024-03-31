[xpell](../README.md) / [Modules](../modules.md) / X3D/X3DWorldSceneBackground

# Module: X3D/X3DWorldSceneBackground

## Table of contents

### Enumerations

- [X3DSceneBackgroundTypes](../enums/X3D_X3DWorldSceneBackground.X3DSceneBackgroundTypes.md)

### Type Aliases

- [X3DSceneBackground](X3D_X3DWorldSceneBackground.md#x3dscenebackground)
- [X3DSceneBackgroundHandler](X3D_X3DWorldSceneBackground.md#x3dscenebackgroundhandler)
- [X3DSceneBackgroundParams](X3D_X3DWorldSceneBackground.md#x3dscenebackgroundparams)

### Functions

- [createSceneBackgroundBasicHandlers](X3D_X3DWorldSceneBackground.md#createscenebackgroundbasichandlers)

## Type Aliases

### X3DSceneBackground

Ƭ **X3DSceneBackground**: `Object`

Background type

**`Description`**

solid-color | gradient | image | video | cube-texture | sphere-texture
params for:
solid-color: color:string
gradient: color1, color2, direction
image: url
video: url
cube-texture: [url1, url2, url3, url4, url5, url6]
sphere-texture: url

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_params` | \{ `[k: string]`: `any`;  } |
| `_type` | [`X3DSceneBackgroundTypes`](../enums/X3D_X3DWorldSceneBackground.X3DSceneBackgroundTypes.md) |

#### Defined in

[X3D/X3DWorldSceneBackground.ts:54](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorldSceneBackground.ts#L54)

___

### X3DSceneBackgroundHandler

Ƭ **X3DSceneBackgroundHandler**: (`scene`: `Scene`, `params`: [`X3DSceneBackgroundParams`](X3D_X3DWorldSceneBackground.md#x3dscenebackgroundparams)) => `void`

#### Type declaration

▸ (`scene`, `params`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `scene` | `Scene` |
| `params` | [`X3DSceneBackgroundParams`](X3D_X3DWorldSceneBackground.md#x3dscenebackgroundparams) |

##### Returns

`void`

#### Defined in

[X3D/X3DWorldSceneBackground.ts:19](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorldSceneBackground.ts#L19)

___

### X3DSceneBackgroundParams

Ƭ **X3DSceneBackgroundParams**: `Object`

#### Index signature

▪ [k: `string`]: `any`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_color?` | `string` |
| `_color1?` | `string` |
| `_color2?` | `string` |
| `_direction_deg?` | `number` |
| `_nx?` | `string` |
| `_ny?` | `string` |
| `_nz?` | `string` |
| `_path?` | `string` |
| `_px?` | `string` |
| `_py?` | `string` |
| `_pz?` | `string` |
| `_url?` | `string` |

#### Defined in

[X3D/X3DWorldSceneBackground.ts:27](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorldSceneBackground.ts#L27)

## Functions

### createSceneBackgroundBasicHandlers

▸ **createSceneBackgroundBasicHandlers**(`world`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `world` | [`X3DWorld`](../classes/X3D_X3DWorld.X3DWorld.md) |

#### Returns

`void`

#### Defined in

[X3D/X3DWorldSceneBackground.ts:64](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorldSceneBackground.ts#L64)
