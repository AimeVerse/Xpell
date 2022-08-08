# Class: XUIModule

[XUI/XUI](../wiki/XUI.XUI).XUIModule

## Hierarchy

- [`XModule`](../wiki/XModule.XModule)

  ↳ **`XUIModule`**

## Table of contents

### Constructors

- [constructor](../wiki/XUI.XUI.XUIModule#constructor)

### Properties

- [\_id](../wiki/XUI.XUI.XUIModule#_id)
- [name](../wiki/XUI.XUI.XUIModule#name)
- [objectManger](../wiki/XUI.XUI.XUIModule#objectmanger)
- [vm](../wiki/XUI.XUI.XUIModule#vm)

### Accessors

- [object\_manager](../wiki/XUI.XUI.XUIModule#object_manager)
- [om](../wiki/XUI.XUI.XUIModule#om)

### Methods

- [\_info](../wiki/XUI.XUI.XUIModule#_info)
- [create](../wiki/XUI.XUI.XUIModule#create)
- [createFromTemplate](../wiki/XUI.XUI.XUIModule#createfromtemplate)
- [execute](../wiki/XUI.XUI.XUIModule#execute)
- [importObjects](../wiki/XUI.XUI.XUIModule#importobjects)
- [load](../wiki/XUI.XUI.XUIModule#load)
- [loadApp](../wiki/XUI.XUI.XUIModule#loadapp)
- [loadControl](../wiki/XUI.XUI.XUIModule#loadcontrol)
- [onFrame](../wiki/XUI.XUI.XUIModule#onframe)
- [openUrl](../wiki/XUI.XUI.XUIModule#openurl)
- [run](../wiki/XUI.XUI.XUIModule#run)

## Constructors

### constructor

• **new XUIModule**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`ModuleData`](../wiki/XModule.ModuleData) |

#### Overrides

[XModule](../wiki/XModule.XModule).[constructor](../wiki/XModule.XModule#constructor)

#### Defined in

src/XUI/XUI.ts:22

## Properties

### \_id

• **\_id**: `string`

#### Inherited from

[XModule](../wiki/XModule.XModule).[_id](../wiki/XModule.XModule#_id)

#### Defined in

[src/XModule.ts:22](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L22)

___

### name

• **name**: `string`

#### Inherited from

[XModule](../wiki/XModule.XModule).[name](../wiki/XModule.XModule#name)

#### Defined in

[src/XModule.ts:23](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L23)

___

### objectManger

• `Protected` **objectManger**: [`XObjectManager`](../wiki/XObjectManager.XObjectManager)

#### Inherited from

[XModule](../wiki/XModule.XModule).[objectManger](../wiki/XModule.XModule#objectmanger)

#### Defined in

[src/XModule.ts:26](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L26)

___

### vm

• **vm**: [`XViewManager`](../wiki/XUI.XViewManager.XViewManager)

#### Defined in

src/XUI/XUI.ts:20

## Accessors

### object\_manager

• `get` **object_manager**(): [`XObjectManager`](../wiki/XObjectManager.XObjectManager)

#### Returns

[`XObjectManager`](../wiki/XObjectManager.XObjectManager)

#### Inherited from

XModule.object\_manager

#### Defined in

[src/XModule.ts:155](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L155)

___

### om

• `get` **om**(): [`XObjectManager`](../wiki/XObjectManager.XObjectManager)

X Object Manager

#### Returns

[`XObjectManager`](../wiki/XObjectManager.XObjectManager)

#### Inherited from

XModule.om

#### Defined in

[src/XModule.ts:153](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L153)

## Methods

### \_info

▸ **_info**(`xCommand`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | `any` |

#### Returns

`void`

#### Inherited from

[XModule](../wiki/XModule.XModule).[_info](../wiki/XModule.XModule#_info)

#### Defined in

[src/XModule.ts:80](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L80)

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

#### Inherited from

[XModule](../wiki/XModule.XModule).[create](../wiki/XModule.XModule#create)

#### Defined in

[src/XModule.ts:46](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L46)

___

### createFromTemplate

▸ **createFromTemplate**(`xpell2json`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xpell2json` | `any` |

#### Returns

`any`

#### Defined in

src/XUI/XUI.ts:78

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

#### Inherited from

[XModule](../wiki/XModule.XModule).[execute](../wiki/XModule.XModule#execute)

#### Defined in

[src/XModule.ts:110](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L110)

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

#### Inherited from

[XModule](../wiki/XModule.XModule).[importObjects](../wiki/XModule.XModule#importobjects)

#### Defined in

[src/XModule.ts:161](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L161)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[XModule](../wiki/XModule.XModule).[load](../wiki/XModule.XModule#load)

#### Defined in

[src/XModule.ts:36](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L36)

___

### loadApp

▸ **loadApp**(`xpellApp`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xpellApp` | `any` |

#### Returns

`void`

#### Defined in

src/XUI/XUI.ts:40

___

### loadControl

▸ **loadControl**(`data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Returns

`void`

#### Defined in

src/XUI/XUI.ts:65

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `any` |

#### Returns

`Promise`<`void`\>

#### Overrides

[XModule](../wiki/XModule.XModule).[onFrame](../wiki/XModule.XModule#onframe)

#### Defined in

src/XUI/XUI.ts:83

___

### openUrl

▸ **openUrl**(`url`, `target?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `url` | `any` | `undefined` |
| `target` | `any` | `null` |

#### Returns

`void`

#### Defined in

src/XUI/XUI.ts:48

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

#### Inherited from

[XModule](../wiki/XModule.XModule).[run](../wiki/XModule.XModule#run)

#### Defined in

[src/XModule.ts:91](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XModule.ts#L91)
