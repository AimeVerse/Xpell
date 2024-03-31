[xpell](../README.md) / [Modules](../modules.md) / [XAI/XAI](../modules/XAI_XAI.md) / XAIModule

# Class: XAIModule

[XAI/XAI](../modules/XAI_XAI.md).XAIModule

Xpell Base Module
This class represents xpell base module to be extends
 XModule

## Hierarchy

- [`XModule`](Core_XModule.XModule.md)

  ↳ **`XAIModule`**

## Table of contents

### Constructors

- [constructor](XAI_XAI.XAIModule.md#constructor)

### Properties

- [#\_object\_manger](XAI_XAI.XAIModule.md##_object_manger)
- [\_id](XAI_XAI.XAIModule.md#_id)
- [\_log\_rules](XAI_XAI.XAIModule.md#_log_rules)
- [\_name](XAI_XAI.XAIModule.md#_name)

### Accessors

- [\_o](XAI_XAI.XAIModule.md#_o)
- [\_object\_manager](XAI_XAI.XAIModule.md#_object_manager)
- [om](XAI_XAI.XAIModule.md#om)

### Methods

- [\_info](XAI_XAI.XAIModule.md#_info)
- [create](XAI_XAI.XAIModule.md#create)
- [execute](XAI_XAI.XAIModule.md#execute)
- [getObject](XAI_XAI.XAIModule.md#getobject)
- [importObject](XAI_XAI.XAIModule.md#importobject)
- [importObjectPack](XAI_XAI.XAIModule.md#importobjectpack)
- [importObjects](XAI_XAI.XAIModule.md#importobjects)
- [load](XAI_XAI.XAIModule.md#load)
- [onFrame](XAI_XAI.XAIModule.md#onframe)
- [remove](XAI_XAI.XAIModule.md#remove)
- [run](XAI_XAI.XAIModule.md#run)

## Constructors

### constructor

• **new XAIModule**(`data`): [`XAIModule`](XAI_XAI.XAIModule.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XModuleData`](../modules/Core_XModule.md#xmoduledata) | module data |

#### Returns

[`XAIModule`](XAI_XAI.XAIModule.md)

**`Fires`**

"xai-loaded" event

#### Overrides

[XModule](Core_XModule.XModule.md).[constructor](Core_XModule.XModule.md#constructor)

#### Defined in

[XAI/XAI.ts:21](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XAI/XAI.ts#L21)

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

### create

▸ **create**(`data`): `any`

Creates new XObject from data object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | The data of the new object (JSON) |

#### Returns

`any`

#### Inherited from

[XModule](Core_XModule.XModule.md).[create](Core_XModule.XModule.md#create)

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

#### Inherited from

[XModule](Core_XModule.XModule.md).[onFrame](Core_XModule.XModule.md#onframe)

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

#### Inherited from

[XModule](Core_XModule.XModule.md).[remove](Core_XModule.XModule.md#remove)

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

#### Inherited from

[XModule](Core_XModule.XModule.md).[run](Core_XModule.XModule.md#run)

#### Defined in

[Core/XModule.ts:145](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L145)
