[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3DWorld](../modules/X3D_X3DWorld.md) / X3DWorld

# Class: X3DWorld

[X3D/X3DWorld](../modules/X3D_X3DWorld.md).X3DWorld

## Table of contents

### Constructors

- [constructor](X3D_X3DWorld.X3DWorld.md#constructor)

### Properties

- [\_bg\_handlers](X3D_X3DWorld.X3DWorld.md#_bg_handlers)
- [\_cannon\_debug\_renderer](X3D_X3DWorld.X3DWorld.md#_cannon_debug_renderer)
- [\_log\_rules](X3D_X3DWorld.X3DWorld.md#_log_rules)
- [\_physics\_world](X3D_X3DWorld.X3DWorld.md#_physics_world)
- [audioListener](X3D_X3DWorld.X3DWorld.md#audiolistener)
- [clock](X3D_X3DWorld.X3DWorld.md#clock)
- [controls](X3D_X3DWorld.X3DWorld.md#controls)
- [defaultCamera](X3D_X3DWorld.X3DWorld.md#defaultcamera)
- [enablePhysics](X3D_X3DWorld.X3DWorld.md#enablephysics)
- [frameNumber](X3D_X3DWorld.X3DWorld.md#framenumber)
- [frameProcessTime](X3D_X3DWorld.X3DWorld.md#frameprocesstime)
- [lights](X3D_X3DWorld.X3DWorld.md#lights)
- [raycaster](X3D_X3DWorld.X3DWorld.md#raycaster)
- [renderer](X3D_X3DWorld.X3DWorld.md#renderer)
- [scene](X3D_X3DWorld.X3DWorld.md#scene)
- [status](X3D_X3DWorld.X3DWorld.md#status)
- [transformControlX3dObject](X3D_X3DWorld.X3DWorld.md#transformcontrolx3dobject)
- [transformControls](X3D_X3DWorld.X3DWorld.md#transformcontrols)
- [transformControlsListenerAdded](X3D_X3DWorld.X3DWorld.md#transformcontrolslisteneradded)
- [worldRowData](X3D_X3DWorld.X3DWorld.md#worldrowdata)
- [x3dObjects](X3D_X3DWorld.X3DWorld.md#x3dobjects)

### Methods

- [addBackground](X3D_X3DWorld.X3DWorld.md#addbackground)
- [addBackgroundHandler](X3D_X3DWorld.X3DWorld.md#addbackgroundhandler)
- [addX3DObject](X3D_X3DWorld.X3DWorld.md#addx3dobject)
- [onFrame](X3D_X3DWorld.X3DWorld.md#onframe)
- [onWindowResize](X3D_X3DWorld.X3DWorld.md#onwindowresize)
- [removeTransformControls](X3D_X3DWorld.X3DWorld.md#removetransformcontrols)
- [removeX3DObject](X3D_X3DWorld.X3DWorld.md#removex3dobject)
- [render](X3D_X3DWorld.X3DWorld.md#render)
- [run](X3D_X3DWorld.X3DWorld.md#run)
- [setAudioListener](X3D_X3DWorld.X3DWorld.md#setaudiolistener)
- [setSceneBackground](X3D_X3DWorld.X3DWorld.md#setscenebackground)
- [setTransformControls](X3D_X3DWorld.X3DWorld.md#settransformcontrols)

## Constructors

### constructor

• **new X3DWorld**(`xworld`): [`X3DWorld`](X3D_X3DWorld.X3DWorld.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `xworld` | [`X3DApp`](../modules/X3D_X3D.md#x3dapp) |

#### Returns

[`X3DWorld`](X3D_X3DWorld.X3DWorld.md)

#### Defined in

[X3D/X3DWorld.ts:74](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L74)

## Properties

### \_bg\_handlers

• `Private` **\_bg\_handlers**: `Record`\<`string`, [`X3DSceneBackgroundHandler`](../modules/X3D_X3DWorldSceneBackground.md#x3dscenebackgroundhandler)\> = `{}`

#### Defined in

[X3D/X3DWorld.ts:72](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L72)

___

### \_cannon\_debug\_renderer

• `Private` **\_cannon\_debug\_renderer**: [`CannonDebugRenderer`](X3D_X3DUtils.CannonDebugRenderer.md)

#### Defined in

[X3D/X3DWorld.ts:70](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L70)

___

### \_log\_rules

• **\_log\_rules**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_add` | `boolean` |
| `_remove` | `boolean` |

#### Defined in

[X3D/X3DWorld.ts:62](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L62)

___

### \_physics\_world

• `Private` **\_physics\_world**: `World`

#### Defined in

[X3D/X3DWorld.ts:61](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L61)

___

### audioListener

• **audioListener**: `AudioListener`

#### Defined in

[X3D/X3DWorld.ts:59](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L59)

___

### clock

• **clock**: `Clock`

#### Defined in

[X3D/X3DWorld.ts:47](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L47)

___

### controls

• **controls**: `OrbitControls` \| `PointerLockControls` \| `FirstPersonControls`

#### Defined in

[X3D/X3DWorld.ts:57](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L57)

___

### defaultCamera

• **defaultCamera**: `any`

#### Defined in

[X3D/X3DWorld.ts:56](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L56)

___

### enablePhysics

• **enablePhysics**: `boolean` = `true`

#### Defined in

[X3D/X3DWorld.ts:60](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L60)

___

### frameNumber

• **frameNumber**: `number`

#### Defined in

[X3D/X3DWorld.ts:49](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L49)

___

### frameProcessTime

• **frameProcessTime**: `number`

#### Defined in

[X3D/X3DWorld.ts:58](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L58)

___

### lights

• **lights**: `Object`

#### Defined in

[X3D/X3DWorld.ts:54](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L54)

___

### raycaster

• **raycaster**: `Raycaster`

#### Defined in

[X3D/X3DWorld.ts:50](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L50)

___

### renderer

• **renderer**: `WebGLRenderer`

#### Defined in

[X3D/X3DWorld.ts:48](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L48)

___

### scene

• **scene**: `Scene`

#### Defined in

[X3D/X3DWorld.ts:46](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L46)

___

### status

• **status**: `number`

#### Defined in

[X3D/X3DWorld.ts:44](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L44)

___

### transformControlX3dObject

• `Private` **transformControlX3dObject**: ``null`` \| [`X3DObject`](X3D_X3DObject.X3DObject.md)

#### Defined in

[X3D/X3DWorld.ts:52](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L52)

___

### transformControls

• **transformControls**: `TransformControls`

#### Defined in

[X3D/X3DWorld.ts:51](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L51)

___

### transformControlsListenerAdded

• `Private` **transformControlsListenerAdded**: `boolean`

#### Defined in

[X3D/X3DWorld.ts:53](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L53)

___

### worldRowData

• **worldRowData**: [`X3DApp`](../modules/X3D_X3D.md#x3dapp)

#### Defined in

[X3D/X3DWorld.ts:45](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L45)

___

### x3dObjects

• **x3dObjects**: `Object`

#### Index signature

▪ [k: `string`]: [`X3DObject`](X3D_X3DObject.X3DObject.md)

#### Defined in

[X3D/X3DWorld.ts:55](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L55)

## Methods

### addBackground

▸ **addBackground**(`bgTexture`): `void`

Adds background to the scene

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `bgTexture` | `Texture` | scene background |

#### Returns

`void`

#### Defined in

[X3D/X3DWorld.ts:438](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L438)

___

### addBackgroundHandler

▸ **addBackgroundHandler**(`type`, `handler`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `handler` | [`X3DSceneBackgroundHandler`](../modules/X3D_X3DWorldSceneBackground.md#x3dscenebackgroundhandler) |

#### Returns

`void`

#### Defined in

[X3D/X3DWorld.ts:273](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L273)

___

### addX3DObject

▸ **addX3DObject**(`x3dObject`): `Promise`\<`undefined` \| `Object3D`\<`Event`\>\>

Adds X3DObject to the world scene

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x3dObject` | [`X3DObject`](X3D_X3DObject.X3DObject.md) | the X3DObject to add |

#### Returns

`Promise`\<`undefined` \| `Object3D`\<`Event`\>\>

X3DObject

#### Defined in

[X3D/X3DWorld.ts:306](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L306)

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `number` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[X3D/X3DWorld.ts:386](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L386)

___

### onWindowResize

▸ **onWindowResize**(): `void`

#### Returns

`void`

#### Defined in

[X3D/X3DWorld.ts:293](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L293)

___

### removeTransformControls

▸ **removeTransformControls**(): `void`

#### Returns

`void`

#### Defined in

[X3D/X3DWorld.ts:344](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L344)

___

### removeX3DObject

▸ **removeX3DObject**(`objectId`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[X3D/X3DWorld.ts:330](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L330)

___

### render

▸ **render**(): `void`

#### Returns

`void`

#### Defined in

[X3D/X3DWorld.ts:443](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L443)

___

### run

▸ **run**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[X3D/X3DWorld.ts:137](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L137)

___

### setAudioListener

▸ **setAudioListener**(): `void`

#### Returns

`void`

#### Defined in

[X3D/X3DWorld.ts:287](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L287)

___

### setSceneBackground

▸ **setSceneBackground**(`bg`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `bg` | [`X3DSceneBackground`](../modules/X3D_X3DWorldSceneBackground.md#x3dscenebackground) |

#### Returns

`Promise`\<`void`\>

#### Defined in

[X3D/X3DWorld.ts:277](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L277)

___

### setTransformControls

▸ **setTransformControls**(`x3dObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `x3dObject` | [`X3DObject`](X3D_X3DObject.X3DObject.md) |

#### Returns

`void`

#### Defined in

[X3D/X3DWorld.ts:349](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DWorld.ts#L349)
