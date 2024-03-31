[xpell](../README.md) / [Modules](../modules.md) / [Core/XObject](../modules/Core_XObject.md) / XObject

# Class: XObject

[Core/XObject](../modules/Core_XObject.md).XObject

XObject class
 XObject

## Hierarchy

- **`XObject`**

  ↳ [`X3DObject`](X3D_X3DObject.X3DObject.md)

  ↳ [`XUIObject`](XUI_XUIObject.XUIObject.md)

  ↳ [`XAIObject`](XAI_XAIObject.XAIObject.md)

## Indexable

▪ [k: `string`]: `string` \| ``null`` \| [] \| `undefined` \| `Function` \| `boolean` \| `number` \| {} \| ``null``

## Table of contents

### Constructors

- [constructor](Core_XObject.XObject.md#constructor)

### Properties

- [\_cache\_cmd\_txt](Core_XObject.XObject.md#_cache_cmd_txt)
- [\_cache\_jcmd](Core_XObject.XObject.md#_cache_jcmd)
- [\_children](Core_XObject.XObject.md#_children)
- [\_data\_source](Core_XObject.XObject.md#_data_source)
- [\_event\_listeners\_ids](Core_XObject.XObject.md#_event_listeners_ids)
- [\_id](Core_XObject.XObject.md#_id)
- [\_name](Core_XObject.XObject.md#_name)
- [\_nano\_commands](Core_XObject.XObject.md#_nano_commands)
- [\_on](Core_XObject.XObject.md#_on)
- [\_on\_create](Core_XObject.XObject.md#_on_create)
- [\_on\_data](Core_XObject.XObject.md#_on_data)
- [\_on\_event](Core_XObject.XObject.md#_on_event)
- [\_on\_frame](Core_XObject.XObject.md#_on_frame)
- [\_on\_mount](Core_XObject.XObject.md#_on_mount)
- [\_once](Core_XObject.XObject.md#_once)
- [\_parent](Core_XObject.XObject.md#_parent)
- [\_process\_data](Core_XObject.XObject.md#_process_data)
- [\_process\_frame](Core_XObject.XObject.md#_process_frame)
- [\_type](Core_XObject.XObject.md#_type)
- [\_xem\_options](Core_XObject.XObject.md#_xem_options)
- [\_xporter](Core_XObject.XObject.md#_xporter)

### Methods

- [addEventListener](Core_XObject.XObject.md#addeventlistener)
- [addNanoCommand](Core_XObject.XObject.md#addnanocommand)
- [addNanoCommandPack](Core_XObject.XObject.md#addnanocommandpack)
- [addXporterDataIgnoreFields](Core_XObject.XObject.md#addxporterdataignorefields)
- [addXporterInstanceXporter](Core_XObject.XObject.md#addxporterinstancexporter)
- [append](Core_XObject.XObject.md#append)
- [checkAndRunInternalFunction](Core_XObject.XObject.md#checkandruninternalfunction)
- [clearAttributes](Core_XObject.XObject.md#clearattributes)
- [dispose](Core_XObject.XObject.md#dispose)
- [emptyDataSource](Core_XObject.XObject.md#emptydatasource)
- [execute](Core_XObject.XObject.md#execute)
- [init](Core_XObject.XObject.md#init)
- [onCreate](Core_XObject.XObject.md#oncreate)
- [onData](Core_XObject.XObject.md#ondata)
- [onFrame](Core_XObject.XObject.md#onframe)
- [onMount](Core_XObject.XObject.md#onmount)
- [parse](Core_XObject.XObject.md#parse)
- [parseEvents](Core_XObject.XObject.md#parseevents)
- [parseFields](Core_XObject.XObject.md#parsefields)
- [parseFieldsFromXDataObject](Core_XObject.XObject.md#parsefieldsfromxdataobject)
- [removeAllEventListeners](Core_XObject.XObject.md#removealleventlisteners)
- [removeEventListener](Core_XObject.XObject.md#removeeventlistener)
- [run](Core_XObject.XObject.md#run)
- [toString](Core_XObject.XObject.md#tostring)
- [toXData](Core_XObject.XObject.md#toxdata)

## Constructors

### constructor

• **new XObject**(`data`, `defaults?`, `skipParse?`): [`XObject`](Core_XObject.XObject.md)

XObject constructor is creating the object and adding all the data keys to the XObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | constructor input data (object) |
| `defaults?` | `any` | defaults to merge with data |
| `skipParse?` | `boolean` | skip data parsing if override this method make sure to call super.init(data,skipParse) and to set skipParse to true |

#### Returns

[`XObject`](Core_XObject.XObject.md)

#### Defined in

[Core/XObject.ts:134](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L134)

## Properties

### \_cache\_cmd\_txt

• `Protected` `Optional` **\_cache\_cmd\_txt**: `string`

#### Defined in

[Core/XObject.ts:116](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L116)

___

### \_cache\_jcmd

• `Protected` `Optional` **\_cache\_jcmd**: `any`

#### Defined in

[Core/XObject.ts:117](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L117)

___

### \_children

• **\_children**: ([`XObject`](Core_XObject.XObject.md) \| [`XObjectData`](../modules/Core_XObject.md#xobjectdata))[] = `[]`

#### Defined in

[Core/XObject.ts:93](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L93)

___

### \_data\_source

• `Optional` **\_data\_source**: `string`

#### Defined in

[Core/XObject.ts:96](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L96)

___

### \_event\_listeners\_ids

• `Protected` **\_event\_listeners\_ids**: `Object` = `{}`

#### Index signature

▪ [eventName: `string`]: `string`

#### Defined in

[Core/XObject.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L118)

___

### \_id

• **\_id**: `string`

#### Defined in

[Core/XObject.ts:91](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L91)

___

### \_name

• `Optional` **\_name**: `string`

#### Defined in

[Core/XObject.ts:95](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L95)

___

### \_nano\_commands

• `Protected` **\_nano\_commands**: `Object` = `{}`

#### Index signature

▪ [k: `string`]: [`XNanoCommand`](../interfaces/Core_XNanoCommands.XNanoCommand.md)

#### Defined in

[Core/XObject.ts:115](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L115)

___

### \_on

• **\_on**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Defined in

[Core/XObject.ts:97](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L97)

___

### \_on\_create

• `Optional` **\_on\_create**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:99](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L99)

___

### \_on\_data

• `Optional` **\_on\_data**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L102)

___

### \_on\_event

• `Optional` **\_on\_event**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:103](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L103)

___

### \_on\_frame

• `Optional` **\_on\_frame**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L101)

___

### \_on\_mount

• `Optional` **\_on\_mount**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:100](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L100)

___

### \_once

• **\_once**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Defined in

[Core/XObject.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L98)

___

### \_parent

• **\_parent**: ``null`` \| [`XObject`](Core_XObject.XObject.md) = `null`

#### Defined in

[Core/XObject.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L94)

___

### \_process\_data

• **\_process\_data**: `boolean` = `true`

#### Defined in

[Core/XObject.ts:108](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L108)

___

### \_process\_frame

• **\_process\_frame**: `boolean` = `true`

#### Defined in

[Core/XObject.ts:107](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L107)

___

### \_type

• **\_type**: `string`

#### Defined in

[Core/XObject.ts:92](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L92)

___

### \_xem\_options

• `Protected` **\_xem\_options**: [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions)

#### Defined in

[Core/XObject.ts:111](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L111)

___

### \_xporter

• `Protected` **\_xporter**: [`XDataXporter`](../modules/Core_XObject.md#xdataxporter)

#### Defined in

[Core/XObject.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L119)

## Methods

### addEventListener

▸ **addEventListener**(`eventName`, `handler`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `handler` | [`XObjectOnEventHandler`](../modules/Core_XObject.md#xobjectoneventhandler) |
| `options?` | [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions) |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:208](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L208)

___

### addNanoCommand

▸ **addNanoCommand**(`commandName`, `nanoCommandFunction`): `void`

Add single nano command to the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandName` | `string` | the nano command name |
| `nanoCommandFunction` | [`XNanoCommand`](../interfaces/Core_XNanoCommands.XNanoCommand.md) |  |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:245](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L245)

___

### addNanoCommandPack

▸ **addNanoCommandPack**(`ncPack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ncPack` | [`XNanoCommandPack`](../modules/Core_XNanoCommands.md#xnanocommandpack) |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:252](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L252)

___

### addXporterDataIgnoreFields

▸ **addXporterDataIgnoreFields**(`ignoreFields`): `void`

List of fields to ignore when exporting the xobject to XData or string format

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignoreFields` | `string`[] |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:264](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L264)

___

### addXporterInstanceXporter

▸ **addXporterInstanceXporter**(`classOfInstance`, `handler`): `void`

Add XData Xporter instance handler

#### Parameters

| Name | Type |
| :------ | :------ |
| `classOfInstance` | `any` |
| `handler` | [`XDataXporterHandler`](../interfaces/Core_XObject.XDataXporterHandler.md) |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:272](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L272)

___

### append

▸ **append**(`xobject`): `void`

Append a child XObject to this XObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `xobject` | [`XObject`](Core_XObject.XObject.md) |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:235](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L235)

___

### checkAndRunInternalFunction

▸ **checkAndRunInternalFunction**(`func`, `...params`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `any` |
| `...params` | `any` |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XObject.ts:370](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L370)

___

### clearAttributes

▸ **clearAttributes**(`attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `string`[] |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:597](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L597)

___

### dispose

▸ **dispose**(): `Promise`\<`void`\>

Dispose the XObject and all its children

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XObject.ts:610](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L610)

___

### emptyDataSource

▸ **emptyDataSource**(): `void`

#### Returns

`void`

#### Defined in

[Core/XObject.ts:413](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L413)

___

### execute

▸ **execute**(`xCommand`): `Promise`\<`void`\>

Execute XCommand within the XObject Nano Commands

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xCommand` | [`XCommand`](Core_XCommand.XCommand.md) \| [`XCommandData`](../modules/Core_XCommand.md#xcommanddata) | XCommand to execute Nano command example: "set-text" : (xCommand,xObject) => { xObject.setText(xCommands.params.text) } |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XObject.ts:525](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L525)

___

### init

▸ **init**(`data?`, `skipParse?`): `void`

Initialize the XObject

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | data to parse (XObjectData) |
| `skipParse?` | `boolean` | skip data parsing |

#### Returns

`void`

**`Deprecated`**

- use parse method instead

#### Defined in

[Core/XObject.ts:167](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L167)

___

### onCreate

▸ **onCreate**(): `Promise`\<`void`\>

this method triggered after the HTML DOM object has been created and added to the parent element
support external _on_create anonymous function in the , example:
_on_create: async (xObject) => {
     // xObject -> The XObject parent of the _on_create function, use instead of this keyword
     // write code that will be executed each frame.
     // make sure to write async anonymous function. 
}

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XObject.ts:358](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L358)

___

### onData

▸ **onData**(`data`): `Promise`\<`void`\>

Triggers when new data is being received from the data source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | the data if override this method make sure to call super.onData(data) to run the _on_data attribute |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XObject.ts:425](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L425)

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`\<`void`\>

Triggers from Xpell frame every frame
Support _on_frame atrribute that can be XCommand string or function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameNumber` | `number` | XObject supports 1. External _on_frame anonymous function in the , example: _on_frame: async (xObject,frameNumber) => { // xObject -> The XObject parent of the _on_frame function, use instead of this keyword // frameNumber = Xpell current frame number // write code that will be executed each frame. // make sure to write async anonymous function. // be wise with the function execution and try to keep it in the 15ms running time to support 60 FPS } 2. String execution of nano commands _on_frame: "nano command text" |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XObject.ts:457](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L457)

___

### onMount

▸ **onMount**(): `Promise`\<`void`\>

Triggers when the object is being mounted to other element
support external _on_create anonymous function in the , example:
_on_mount: async (xObject) => {
     // xObject -> The XObject parent of the _on_mount function, use instead of this keyword
     // write code that will be executed each frame.
     // make sure to write async anonymous function. 
}

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XObject.ts:387](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L387)

___

### parse

▸ **parse**(`data`, `ignore?`): `void`

Parse data to the XObject

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | `undefined` | data to parse |
| `ignore` | [`wordsList`](../modules/Core_XObject.md#wordslist) | `reservedWords` | lis of words to ignore in the parse process |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:291](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L291)

___

### parseEvents

▸ **parseEvents**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions) |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:173](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L173)

___

### parseFields

▸ **parseFields**(`data`, `fields`, `checkNonXParams?`): `void`

Parse list of fields from IXObjectData to the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | the data |
| `fields` | `string`[] | array of field names (string) |
| `checkNonXParams?` | `boolean` | also check non Xpell fields (fields that not starting with "_" sign) |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:330](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L330)

___

### parseFieldsFromXDataObject

▸ **parseFieldsFromXDataObject**(`data`, `fields`): `void`

Parse data to the XObject

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | data to parse |
| `fields` | `Object` | - |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:311](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L311)

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): `void`

#### Returns

`void`

#### Defined in

[Core/XObject.ts:224](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L224)

___

### removeEventListener

▸ **removeEventListener**(`eventName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Returns

`void`

#### Defined in

[Core/XObject.ts:217](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L217)

___

### run

▸ **run**(`nanoCommand`, `cache?`): `Promise`\<`void`\>

Runs object nano commands

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nanoCommand` | `string` | `undefined` | object nano command (string) |
| `cache` | `boolean` | `true` | cache last command to prevent multiple parsing on the same command |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XObject.ts:501](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L501)

___

### toString

▸ **toString**(): `string`

Return a string representation of the XObject

#### Returns

`string`

string

#### Defined in

[Core/XObject.ts:592](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L592)

___

### toXData

▸ **toXData**(): [`IXData`](../interfaces/Core_XObject.IXData.md)

Return an IXObjectData JSON representation of the XObject

#### Returns

[`IXData`](../interfaces/Core_XObject.IXData.md)

IXObjectData

#### Defined in

[Core/XObject.ts:543](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L543)
