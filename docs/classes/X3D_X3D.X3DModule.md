[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3D](../modules/X3D_X3D.md) / X3DModule

# Class: X3DModule

[X3D/X3D](../modules/X3D_X3D.md).X3DModule

X3DModule - Xpell 3D Module

## Hierarchy

- [`XModule`](Core_XModule.XModule.md)

  ↳ **`X3DModule`**

## Table of contents

### Constructors

- [constructor](X3D_X3D.X3DModule.md#constructor)

### Properties

- [#\_object\_manger](X3D_X3D.X3DModule.md##_object_manger)
- [\_id](X3D_X3D.X3DModule.md#_id)
- [\_log\_rules](X3D_X3D.X3DModule.md#_log_rules)
- [\_name](X3D_X3D.X3DModule.md#_name)
- [\_raycast\_event](X3D_X3D.X3DModule.md#_raycast_event)
- [status](X3D_X3D.X3DModule.md#status)
- [world](X3D_X3D.X3DModule.md#world)
- [x3dObjects](X3D_X3D.X3DModule.md#x3dobjects)

### Accessors

- [\_o](X3D_X3D.X3DModule.md#_o)
- [\_object\_manager](X3D_X3D.X3DModule.md#_object_manager)
- [om](X3D_X3D.X3DModule.md#om)

### Methods

- [\_info](X3D_X3D.X3DModule.md#_info)
- [add](X3D_X3D.X3DModule.md#add)
- [addEnvironmentMap](X3D_X3D.X3DModule.md#addenvironmentmap)
- [addRaw](X3D_X3D.X3DModule.md#addraw)
- [create](X3D_X3D.X3DModule.md#create)
- [disableRaycast](X3D_X3D.X3DModule.md#disableraycast)
- [enableRaycast](X3D_X3D.X3DModule.md#enableraycast)
- [execute](X3D_X3D.X3DModule.md#execute)
- [getObject](X3D_X3D.X3DModule.md#getobject)
- [importObject](X3D_X3D.X3DModule.md#importobject)
- [importObjectPack](X3D_X3D.X3DModule.md#importobjectpack)
- [importObjects](X3D_X3D.X3DModule.md#importobjects)
- [load](X3D_X3D.X3DModule.md#load)
- [loadApp](X3D_X3D.X3DModule.md#loadapp)
- [loadObject](X3D_X3D.X3DModule.md#loadobject)
- [loadWorld](X3D_X3D.X3DModule.md#loadworld)
- [onFrame](X3D_X3D.X3DModule.md#onframe)
- [onWindowResize](X3D_X3D.X3DModule.md#onwindowresize)
- [raycast](X3D_X3D.X3DModule.md#raycast)
- [remove](X3D_X3D.X3DModule.md#remove)
- [run](X3D_X3D.X3DModule.md#run)
- [start](X3D_X3D.X3DModule.md#start)

## Constructors

### constructor

• **new X3DModule**(): [`X3DModule`](X3D_X3D.X3DModule.md)

#### Returns

[`X3DModule`](X3D_X3D.X3DModule.md)

#### Overrides

[XModule](Core_XModule.XModule.md).[constructor](Core_XModule.XModule.md#constructor)

#### Defined in

[X3D/X3D.ts:108](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L108)

## Properties

### #\_object\_manger

• `Private` **#\_object\_manger**: [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Inherited from

[XModule](Core_XModule.XModule.md).[#_object_manger](Core_XModule.XModule.md##_object_manger)

#### Defined in

[Core/XModule.ts:62](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L62)

___

### \_id

• **\_id**: `string`

#### Inherited from

[XModule](Core_XModule.XModule.md).[_id](Core_XModule.XModule.md#_id)

#### Defined in

[Core/XModule.ts:50](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L50)

___

### \_log\_rules

• **\_log\_rules**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createObject` | `boolean` |
| `removeObject` | `boolean` |

#### Inherited from

[XModule](Core_XModule.XModule.md).[_log_rules](Core_XModule.XModule.md#_log_rules)

#### Defined in

[Core/XModule.ts:52](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L52)

___

### \_name

• **\_name**: `string`

#### Inherited from

[XModule](Core_XModule.XModule.md).[_name](Core_XModule.XModule.md#_name)

#### Defined in

[Core/XModule.ts:51](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L51)

___

### \_raycast\_event

• **\_raycast\_event**: `string` = `"click"`

#### Defined in

[X3D/X3D.ts:105](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L105)

___

### status

• **status**: `number`

#### Defined in

[X3D/X3D.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L102)

___

### world

• **world**: [`X3DWorld`](X3D_X3DWorld.X3DWorld.md)

#### Defined in

[X3D/X3D.ts:100](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L100)

___

### x3dObjects

• **x3dObjects**: `Object`

#### Defined in

[X3D/X3D.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L101)

## Accessors

### \_o

• `get` **_o**(): [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

Returns the XObject instance from the module Object Manager
Usage:
xmodule._o["object-id"] is equivalent to xmodule.getObject("object-id")

#### Returns

[`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Inherited from

XModule.\_o

#### Defined in

[Core/XModule.ts:238](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L238)

___

### \_object\_manager

• `get` **_object_manager**(): [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Returns

[`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Inherited from

XModule.\_object\_manager

#### Defined in

[Core/XModule.ts:222](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L222)

___

### om

• `get` **om**(): [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

getter for om (object manager) instance

#### Returns

[`XObjectManager`](Core_XObjectManager.XObjectManager.md)

**`Deprecated`**

- use _object_manager instead
If you wish to get an object from the object manager use
getObject directly on the module instead of om.getObject

#### Inherited from

XModule.om

#### Defined in

[Core/XModule.ts:221](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L221)

## Methods

### \_info

▸ **_info**(`xCommand`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | [`XCommand`](Core_XCommand.XCommand.md) |

#### Returns

`void`

#### Inherited from

[XModule](Core_XModule.XModule.md).[_info](Core_XModule.XModule.md#_info)

#### Defined in

[Core/XModule.ts:134](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L134)

___

### add

▸ **add**(`x3dObject`): `Promise`\<`void`\>

Add X3DObject to the object manager and world

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `x3dObject` | [`X3DObject`](X3D_X3DObject.X3DObject.md) | X3DObject |

#### Returns

`Promise`\<`void`\>

#### Defined in

[X3D/X3D.ts:189](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L189)

___

### addEnvironmentMap

▸ **addEnvironmentMap**(`path`, `images?`): `void`

Add sky map (background to the world scene)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | path to skymap |
| `images?` | `string`[] | optional images array like ["px.jpg","nx.jpg","py.jpg","ny.jpg","pz.jpg","nz.jpg"] |

#### Returns

`void`

#### Defined in

[X3D/X3D.ts:333](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L333)

___

### addRaw

▸ **addRaw**(`data`): `Promise`\<[`X3DObject`](X3D_X3DObject.X3DObject.md)\>

Creates new X3DObject from data and add it to the world

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) |

#### Returns

`Promise`\<[`X3DObject`](X3D_X3DObject.X3DObject.md)\>

#### Defined in

[X3D/X3D.ts:211](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L211)

___

### create

▸ **create**(`data`): `Promise`\<`any`\>

Creates new X3DObject from data object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) | The data of the new object (JSON) |

#### Returns

`Promise`\<`any`\>

#### Overrides

[XModule](Core_XModule.XModule.md).[create](Core_XModule.XModule.md#create)

#### Defined in

[X3D/X3D.ts:154](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L154)

___

### disableRaycast

▸ **disableRaycast**(): `void`

#### Returns

`void`

#### Defined in

[X3D/X3D.ts:246](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L246)

___

### enableRaycast

▸ **enableRaycast**(`event?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `event` | `string` | `"click"` |

#### Returns

`void`

#### Defined in

[X3D/X3D.ts:240](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L240)

___

### execute

▸ **execute**(`xCommand`): `Promise`\<`any`\>

execute xpell command - CLI mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | [`XCommand`](Core_XCommand.XCommand.md) \| [`XCommandData`](../modules/Core_XCommand.md#xcommanddata) |

#### Returns

`Promise`\<`any`\>

command execution result

#### Inherited from

[XModule](Core_XModule.XModule.md).[execute](Core_XModule.XModule.md#execute)

#### Defined in

[Core/XModule.ts:167](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L167)

___

### getObject

▸ **getObject**(`objectId`): [`XObject`](Core_XObject.XObject.md)

Returns the XObject instance from the module Object Manager

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |

#### Returns

[`XObject`](Core_XObject.XObject.md)

XObject

#### Inherited from

[XModule](Core_XModule.XModule.md).[getObject](Core_XModule.XModule.md#getobject)

#### Defined in

[Core/XModule.ts:229](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L229)

___

### importObject

▸ **importObject**(`xObjectName`, `xObject`): `void`

Imports external objects to the engine
The object class should be like XObjects with static implementation of getObjects() method

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectName` | `string` |
| `xObject` | [`XObject`](Core_XObject.XObject.md) |

#### Returns

`void`

#### Inherited from

[XModule](Core_XModule.XModule.md).[importObject](Core_XModule.XModule.md#importobject)

#### Defined in

[Core/XModule.ts:266](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L266)

___

### importObjectPack

▸ **importObjectPack**(`xObjectPack`): `void`

Imports external object pack to the engine
The object class should be like XObjects with static implementation of getObjects() method

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectPack` | `any` |

#### Returns

`void`

#### Inherited from

[XModule](Core_XModule.XModule.md).[importObjectPack](Core_XModule.XModule.md#importobjectpack)

#### Defined in

[Core/XModule.ts:247](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L247)

___

### importObjects

▸ **importObjects**(`xObjectPack`): `void`

Imports external object pack to the engine

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectPack` | `any` |

#### Returns

`void`

**`Deprecated`**

- use importObjectPack instead

#### Inherited from

[XModule](Core_XModule.XModule.md).[importObjects](Core_XModule.XModule.md#importobjects)

#### Defined in

[Core/XModule.ts:256](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L256)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[XModule](Core_XModule.XModule.md).[load](Core_XModule.XModule.md#load)

#### Defined in

[Core/XModule.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L73)

___

### loadApp

▸ **loadApp**(`x3dApp`, `autoRun?`): `Promise`\<`void`\>

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `x3dApp` | [`X3DApp`](../modules/X3D_X3D.md#x3dapp) | `undefined` |
| `autoRun` | `boolean` | `true` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[X3D/X3D.ts:134](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L134)

___

### loadObject

▸ **loadObject**(`data`): `Promise`\<`any`\>

Add X3DObject to the object manager and world

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[X3D/X3D.ts:200](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L200)

___

### loadWorld

▸ **loadWorld**(`x3dWorldData`, `autoRun?`): `Promise`\<`void`\>

Loads XWorld from world data object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `x3dWorldData` | [`X3DApp`](../modules/X3D_X3D.md#x3dapp) | `undefined` | World Data object |
| `autoRun` | `boolean` | `true` | start world running automatically |

#### Returns

`Promise`\<`void`\>

**`Deprecated`**

- use loadApp function instead

#### Defined in

[X3D/X3D.ts:128](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L128)

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`\<`void`\>

This method triggers every frame from the Xpell engine.
The method can be override by the extending module to support extended onFrame functionality

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameNumber` | `number` | Current frame number |

#### Returns

`Promise`\<`void`\>

#### Overrides

[XModule](Core_XModule.XModule.md).[onFrame](Core_XModule.XModule.md#onframe)

#### Defined in

[X3D/X3D.ts:418](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L418)

___

### onWindowResize

▸ **onWindowResize**(): `void`

#### Returns

`void`

#### Defined in

[X3D/X3D.ts:219](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L219)

___

### raycast

▸ **raycast**(`e`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `e` | `any` |

#### Returns

`void`

#### Defined in

[X3D/X3D.ts:250](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L250)

___

### remove

▸ **remove**(`objectId`): `Promise`\<`void`\>

Removes X3DObject from X3D engine (including world and X3D object manager)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `string` | th e_id of the X3D object to remove |

#### Returns

`Promise`\<`void`\>

#### Overrides

[XModule](Core_XModule.XModule.md).[remove](Core_XModule.XModule.md#remove)

#### Defined in

[X3D/X3D.ts:176](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L176)

___

### run

▸ **run**(`stringXCommand`): `Promise`\<`any`\>

Run xpell command - 
CLI mode, parse the command to XCommand JSON format and call execute method

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringXCommand` | `string` |

#### Returns

`Promise`\<`any`\>

command execution result

#### Inherited from

[XModule](Core_XModule.XModule.md).[run](Core_XModule.XModule.md#run)

#### Defined in

[Core/XModule.ts:145](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L145)

___

### start

▸ **start**(): `Promise`\<`void`\>

#### Returns

`Promise`\<`void`\>

#### Defined in

[X3D/X3D.ts:223](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3D.ts#L223)
