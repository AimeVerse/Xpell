[xpell](../README.md) / [Modules](../modules.md) / [Core/XModule](../modules/Core_XModule.md) / XModule

# Class: XModule

[Core/XModule](../modules/Core_XModule.md).XModule

Xpell Base Module
This class represents xpell base module to be extends
 XModule

## Hierarchy

- **`XModule`**

  ↳ [`X3DModule`](X3D_X3D.X3DModule.md)

  ↳ [`XUIModule`](XUI_XUI.XUIModule.md)

  ↳ [`XAIModule`](XAI_XAI.XAIModule.md)

## Indexable

▪ [k: `string`]: `any`

## Table of contents

### Constructors

- [constructor](Core_XModule.XModule.md#constructor)

### Properties

- [#\_object\_manger](Core_XModule.XModule.md##_object_manger)
- [\_id](Core_XModule.XModule.md#_id)
- [\_log\_rules](Core_XModule.XModule.md#_log_rules)
- [\_name](Core_XModule.XModule.md#_name)

### Accessors

- [\_o](Core_XModule.XModule.md#_o)
- [\_object\_manager](Core_XModule.XModule.md#_object_manager)
- [om](Core_XModule.XModule.md#om)

### Methods

- [\_info](Core_XModule.XModule.md#_info)
- [create](Core_XModule.XModule.md#create)
- [execute](Core_XModule.XModule.md#execute)
- [getObject](Core_XModule.XModule.md#getobject)
- [importObject](Core_XModule.XModule.md#importobject)
- [importObjectPack](Core_XModule.XModule.md#importobjectpack)
- [importObjects](Core_XModule.XModule.md#importobjects)
- [load](Core_XModule.XModule.md#load)
- [onFrame](Core_XModule.XModule.md#onframe)
- [remove](Core_XModule.XModule.md#remove)
- [run](Core_XModule.XModule.md#run)

## Constructors

### constructor

• **new XModule**(`data`): [`XModule`](Core_XModule.XModule.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`XModuleData`](../modules/Core_XModule.md#xmoduledata) |

#### Returns

[`XModule`](Core_XModule.XModule.md)

#### Defined in

[Core/XModule.ts:66](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L66)

## Properties

### #\_object\_manger

• `Private` **#\_object\_manger**: [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Defined in

[Core/XModule.ts:62](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L62)

___

### \_id

• **\_id**: `string`

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

#### Defined in

[Core/XModule.ts:52](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L52)

___

### \_name

• **\_name**: `string`

#### Defined in

[Core/XModule.ts:51](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L51)

## Accessors

### \_o

• `get` **_o**(): [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

Returns the XObject instance from the module Object Manager
Usage:
xmodule._o["object-id"] is equivalent to xmodule.getObject("object-id")

#### Returns

[`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Defined in

[Core/XModule.ts:238](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L238)

___

### \_object\_manager

• `get` **_object_manager**(): [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Returns

[`XObjectManager`](Core_XObjectManager.XObjectManager.md)

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

#### Defined in

[Core/XModule.ts:134](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L134)

___

### create

▸ **create**(`data`): `any`

Creates new XObject from data object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | The data of the new object (JSON) |

#### Returns

`any`

#### Defined in

[Core/XModule.ts:82](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L82)

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

#### Defined in

[Core/XModule.ts:256](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L256)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Defined in

[Core/XModule.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L73)

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

#### Defined in

[Core/XModule.ts:197](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L197)

___

### remove

▸ **remove**(`objectId`): `void`

removes and XObject from the object manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `string` | op |

#### Returns

`void`

#### Defined in

[Core/XModule.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L118)

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

#### Defined in

[Core/XModule.ts:145](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L145)
