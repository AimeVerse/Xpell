# Class: XModule

[XModule](../wiki/XModule).XModule

## Hierarchy

- **`XModule`**

  ↳ [`XUIModule`](../wiki/XUI.XUI.XUIModule)

## Table of contents

### Constructors

- [constructor](../wiki/XModule.XModule#constructor)

### Properties

- [\_id](../wiki/XModule.XModule#_id)
- [name](../wiki/XModule.XModule#name)
- [objectManger](../wiki/XModule.XModule#objectmanger)

### Accessors

- [object\_manager](../wiki/XModule.XModule#object_manager)
- [om](../wiki/XModule.XModule#om)

### Methods

- [\_info](../wiki/XModule.XModule#_info)
- [create](../wiki/XModule.XModule#create)
- [execute](../wiki/XModule.XModule#execute)
- [importObjects](../wiki/XModule.XModule#importobjects)
- [load](../wiki/XModule.XModule#load)
- [onFrame](../wiki/XModule.XModule#onframe)
- [run](../wiki/XModule.XModule#run)

## Constructors

### constructor

• **new XModule**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ModuleData`](../wiki/XModule.ModuleData) |

#### Defined in

[src/XModule.ts:29](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L29)

## Properties

### \_id

• **\_id**: `string`

#### Defined in

[src/XModule.ts:22](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L22)

___

### name

• **name**: `string`

#### Defined in

[src/XModule.ts:23](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L23)

___

### objectManger

• `Protected` **objectManger**: [`XObjectManager`](../wiki/XObjectManager.XObjectManager)

#### Defined in

[src/XModule.ts:26](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L26)

## Accessors

### object\_manager

• `get` **object_manager**(): [`XObjectManager`](../wiki/XObjectManager.XObjectManager)

#### Returns

[`XObjectManager`](../wiki/XObjectManager.XObjectManager)

#### Defined in

[src/XModule.ts:155](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L155)

___

### om

• `get` **om**(): [`XObjectManager`](../wiki/XObjectManager.XObjectManager)

X Object Manager

#### Returns

[`XObjectManager`](../wiki/XObjectManager.XObjectManager)

#### Defined in

[src/XModule.ts:153](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L153)

## Methods

### \_info

▸ **_info**(`xCommand`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | `any` |

#### Returns

`void`

#### Defined in

[src/XModule.ts:80](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L80)

___

### create

▸ **create**(`data`): `any`

create new XOBJECT

**`Static`**

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | The data of the new object (JSON) |

#### Returns

`any`

#### Defined in

[src/XModule.ts:46](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L46)

___

### execute

▸ **execute**(`xCommand`): `Promise`<`any`\>

Run xpell command - CLI mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | `any` |

#### Returns

`Promise`<`any`\>

command execution result

#### Defined in

[src/XModule.ts:110](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L110)

___

### importObjects

▸ **importObjects**(`xObjectPack`): `void`

Imports external objects to the engine
The object class should be like XObjects with static implementation of getObjects() method

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectPack` | `any` |

#### Returns

`void`

#### Defined in

[src/XModule.ts:161](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L161)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Defined in

[src/XModule.ts:36](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L36)

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `any` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/XModule.ts:138](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L138)

___

### run

▸ **run**(`stringXCommand`): `Promise`<`any`\>

Run xpell command - 
CLI mode, parse the command to XCommand JSON format and call execute method

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringXCommand` | `any` |

#### Returns

`Promise`<`any`\>

command execution result

#### Defined in

[src/XModule.ts:91](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XModule.ts#L91)
