[xpell](../README.md) / [Modules](../modules.md) / [XUI/XUICoreObjects](../modules/XUI_XUICoreObjects.md) / XSVGLine

# Class: XSVGLine

[XUI/XUICoreObjects](../modules/XUI_XUICoreObjects.md).XSVGLine

ADD On Event support
 - override addEventListener to add html event listener if object exist
 - override removeEventListener to remove html event listener
 - check for events in getDOMObject and add them to the object

## Hierarchy

- [`XUIObject`](XUI_XUIObject.XUIObject.md)

  ↳ **`XSVGLine`**

## Table of contents

### Constructors

- [constructor](XUI_XUICoreObjects.XSVGLine.md#constructor)

### Properties

- [#\_text](XUI_XUICoreObjects.XSVGLine.md##_text)
- [\_base\_display](XUI_XUICoreObjects.XSVGLine.md#_base_display)
- [\_cache\_cmd\_txt](XUI_XUICoreObjects.XSVGLine.md#_cache_cmd_txt)
- [\_cache\_jcmd](XUI_XUICoreObjects.XSVGLine.md#_cache_jcmd)
- [\_children](XUI_XUICoreObjects.XSVGLine.md#_children)
- [\_data\_source](XUI_XUICoreObjects.XSVGLine.md#_data_source)
- [\_dom\_object](XUI_XUICoreObjects.XSVGLine.md#_dom_object)
- [\_event\_listeners\_ids](XUI_XUICoreObjects.XSVGLine.md#_event_listeners_ids)
- [\_html](XUI_XUICoreObjects.XSVGLine.md#_html)
- [\_html\_ns](XUI_XUICoreObjects.XSVGLine.md#_html_ns)
- [\_html\_tag](XUI_XUICoreObjects.XSVGLine.md#_html_tag)
- [\_id](XUI_XUICoreObjects.XSVGLine.md#_id)
- [\_name](XUI_XUICoreObjects.XSVGLine.md#_name)
- [\_nano\_commands](XUI_XUICoreObjects.XSVGLine.md#_nano_commands)
- [\_on](XUI_XUICoreObjects.XSVGLine.md#_on)
- [\_on\_click](XUI_XUICoreObjects.XSVGLine.md#_on_click)
- [\_on\_create](XUI_XUICoreObjects.XSVGLine.md#_on_create)
- [\_on\_data](XUI_XUICoreObjects.XSVGLine.md#_on_data)
- [\_on\_event](XUI_XUICoreObjects.XSVGLine.md#_on_event)
- [\_on\_frame](XUI_XUICoreObjects.XSVGLine.md#_on_frame)
- [\_on\_hide](XUI_XUICoreObjects.XSVGLine.md#_on_hide)
- [\_on\_mount](XUI_XUICoreObjects.XSVGLine.md#_on_mount)
- [\_on\_show](XUI_XUICoreObjects.XSVGLine.md#_on_show)
- [\_once](XUI_XUICoreObjects.XSVGLine.md#_once)
- [\_parent](XUI_XUICoreObjects.XSVGLine.md#_parent)
- [\_parent\_element](XUI_XUICoreObjects.XSVGLine.md#_parent_element)
- [\_process\_data](XUI_XUICoreObjects.XSVGLine.md#_process_data)
- [\_process\_frame](XUI_XUICoreObjects.XSVGLine.md#_process_frame)
- [\_svg\_data](XUI_XUICoreObjects.XSVGLine.md#_svg_data)
- [\_type](XUI_XUICoreObjects.XSVGLine.md#_type)
- [\_visible](XUI_XUICoreObjects.XSVGLine.md#_visible)
- [\_xem\_options](XUI_XUICoreObjects.XSVGLine.md#_xem_options)
- [\_xporter](XUI_XUICoreObjects.XSVGLine.md#_xporter)

### Accessors

- [\_text](XUI_XUICoreObjects.XSVGLine.md#_text)
- [dom](XUI_XUICoreObjects.XSVGLine.md#dom)

### Methods

- [addClass](XUI_XUICoreObjects.XSVGLine.md#addclass)
- [addEventListener](XUI_XUICoreObjects.XSVGLine.md#addeventlistener)
- [addNanoCommand](XUI_XUICoreObjects.XSVGLine.md#addnanocommand)
- [addNanoCommandPack](XUI_XUICoreObjects.XSVGLine.md#addnanocommandpack)
- [addXporterDataIgnoreFields](XUI_XUICoreObjects.XSVGLine.md#addxporterdataignorefields)
- [addXporterInstanceXporter](XUI_XUICoreObjects.XSVGLine.md#addxporterinstancexporter)
- [append](XUI_XUICoreObjects.XSVGLine.md#append)
- [attach](XUI_XUICoreObjects.XSVGLine.md#attach)
- [checkAndRunInternalFunction](XUI_XUICoreObjects.XSVGLine.md#checkandruninternalfunction)
- [clearAttributes](XUI_XUICoreObjects.XSVGLine.md#clearattributes)
- [click](XUI_XUICoreObjects.XSVGLine.md#click)
- [dispose](XUI_XUICoreObjects.XSVGLine.md#dispose)
- [emptyDataSource](XUI_XUICoreObjects.XSVGLine.md#emptydatasource)
- [execute](XUI_XUICoreObjects.XSVGLine.md#execute)
- [getDOMObject](XUI_XUICoreObjects.XSVGLine.md#getdomobject)
- [getHTML](XUI_XUICoreObjects.XSVGLine.md#gethtml)
- [hide](XUI_XUICoreObjects.XSVGLine.md#hide)
- [init](XUI_XUICoreObjects.XSVGLine.md#init)
- [log](XUI_XUICoreObjects.XSVGLine.md#log)
- [mount](XUI_XUICoreObjects.XSVGLine.md#mount)
- [onCreate](XUI_XUICoreObjects.XSVGLine.md#oncreate)
- [onData](XUI_XUICoreObjects.XSVGLine.md#ondata)
- [onFrame](XUI_XUICoreObjects.XSVGLine.md#onframe)
- [onHide](XUI_XUICoreObjects.XSVGLine.md#onhide)
- [onMount](XUI_XUICoreObjects.XSVGLine.md#onmount)
- [onShow](XUI_XUICoreObjects.XSVGLine.md#onshow)
- [parse](XUI_XUICoreObjects.XSVGLine.md#parse)
- [parseEvents](XUI_XUICoreObjects.XSVGLine.md#parseevents)
- [parseFields](XUI_XUICoreObjects.XSVGLine.md#parsefields)
- [parseFieldsFromXDataObject](XUI_XUICoreObjects.XSVGLine.md#parsefieldsfromxdataobject)
- [removeAllEventListeners](XUI_XUICoreObjects.XSVGLine.md#removealleventlisteners)
- [removeClass](XUI_XUICoreObjects.XSVGLine.md#removeclass)
- [removeEventListener](XUI_XUICoreObjects.XSVGLine.md#removeeventlistener)
- [replaceClass](XUI_XUICoreObjects.XSVGLine.md#replaceclass)
- [run](XUI_XUICoreObjects.XSVGLine.md#run)
- [setStyleAttribute](XUI_XUICoreObjects.XSVGLine.md#setstyleattribute)
- [setText](XUI_XUICoreObjects.XSVGLine.md#settext)
- [show](XUI_XUICoreObjects.XSVGLine.md#show)
- [toString](XUI_XUICoreObjects.XSVGLine.md#tostring)
- [toXData](XUI_XUICoreObjects.XSVGLine.md#toxdata)
- [toggle](XUI_XUICoreObjects.XSVGLine.md#toggle)
- [toggleClass](XUI_XUICoreObjects.XSVGLine.md#toggleclass)

## Constructors

### constructor

• **new XSVGLine**(`data`): [`XSVGLine`](XUI_XUICoreObjects.XSVGLine.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) |

#### Returns

[`XSVGLine`](XUI_XUICoreObjects.XSVGLine.md)

#### Overrides

[XUIObject](XUI_XUIObject.XUIObject.md).[constructor](XUI_XUIObject.XUIObject.md#constructor)

#### Defined in

XUI/XUICoreObjects.ts:348

## Properties

### #\_text

• `Private` **#\_text**: `string` = `""`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[#_text](XUI_XUIObject.XUIObject.md##_text)

#### Defined in

XUI/XUIObject.ts:29

___

### \_base\_display

• `Optional` **\_base\_display**: ``null`` \| `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_base_display](XUI_XUIObject.XUIObject.md#_base_display)

#### Defined in

XUI/XUIObject.ts:26

___

### \_cache\_cmd\_txt

• `Protected` `Optional` **\_cache\_cmd\_txt**: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_cache_cmd_txt](XUI_XUIObject.XUIObject.md#_cache_cmd_txt)

#### Defined in

[Core/XObject.ts:116](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L116)

___

### \_cache\_jcmd

• `Protected` `Optional` **\_cache\_jcmd**: `any`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_cache_jcmd](XUI_XUIObject.XUIObject.md#_cache_jcmd)

#### Defined in

[Core/XObject.ts:117](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L117)

___

### \_children

• **\_children**: [`XUIObject`](XUI_XUIObject.XUIObject.md)[]

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_children](XUI_XUIObject.XUIObject.md#_children)

#### Defined in

XUI/XUIObject.ts:30

___

### \_data\_source

• `Optional` **\_data\_source**: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_data_source](XUI_XUIObject.XUIObject.md#_data_source)

#### Defined in

[Core/XObject.ts:96](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L96)

___

### \_dom\_object

• `Protected` **\_dom\_object**: `any`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_dom_object](XUI_XUIObject.XUIObject.md#_dom_object)

#### Defined in

XUI/XUIObject.ts:23

___

### \_event\_listeners\_ids

• `Protected` **\_event\_listeners\_ids**: `Object` = `{}`

#### Index signature

▪ [eventName: `string`]: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_event_listeners_ids](XUI_XUIObject.XUIObject.md#_event_listeners_ids)

#### Defined in

[Core/XObject.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L118)

___

### \_html

• `Optional` **\_html**: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_html](XUI_XUIObject.XUIObject.md#_html)

#### Defined in

XUI/XUIObject.ts:25

___

### \_html\_ns

• `Optional` **\_html\_ns**: ``null`` \| `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_html_ns](XUI_XUIObject.XUIObject.md#_html_ns)

#### Defined in

XUI/XUIObject.ts:22

___

### \_html\_tag

• **\_html\_tag**: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_html_tag](XUI_XUIObject.XUIObject.md#_html_tag)

#### Defined in

XUI/XUIObject.ts:21

___

### \_id

• **\_id**: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_id](XUI_XUIObject.XUIObject.md#_id)

#### Defined in

[Core/XObject.ts:91](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L91)

___

### \_name

• `Optional` **\_name**: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_name](XUI_XUIObject.XUIObject.md#_name)

#### Defined in

[Core/XObject.ts:95](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L95)

___

### \_nano\_commands

• `Protected` **\_nano\_commands**: `Object` = `{}`

#### Index signature

▪ [k: `string`]: [`XNanoCommand`](../interfaces/Core_XNanoCommands.XNanoCommand.md)

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_nano_commands](XUI_XUIObject.XUIObject.md#_nano_commands)

#### Defined in

[Core/XObject.ts:115](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L115)

___

### \_on

• **\_on**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on](XUI_XUIObject.XUIObject.md#_on)

#### Defined in

[Core/XObject.ts:97](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L97)

___

### \_on\_click

• `Optional` **\_on\_click**: `string` \| `Function`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on_click](XUI_XUIObject.XUIObject.md#_on_click)

#### Defined in

XUI/XUIObject.ts:33

___

### \_on\_create

• `Optional` **\_on\_create**: `string` \| `Function`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on_create](XUI_XUIObject.XUIObject.md#_on_create)

#### Defined in

[Core/XObject.ts:99](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L99)

___

### \_on\_data

• `Optional` **\_on\_data**: `string` \| `Function`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on_data](XUI_XUIObject.XUIObject.md#_on_data)

#### Defined in

[Core/XObject.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L102)

___

### \_on\_event

• `Optional` **\_on\_event**: `string` \| `Function`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on_event](XUI_XUIObject.XUIObject.md#_on_event)

#### Defined in

[Core/XObject.ts:103](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L103)

___

### \_on\_frame

• `Optional` **\_on\_frame**: `string` \| `Function`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on_frame](XUI_XUIObject.XUIObject.md#_on_frame)

#### Defined in

[Core/XObject.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L101)

___

### \_on\_hide

• `Optional` **\_on\_hide**: `string` \| `Function`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on_hide](XUI_XUIObject.XUIObject.md#_on_hide)

#### Defined in

XUI/XUIObject.ts:35

___

### \_on\_mount

• `Optional` **\_on\_mount**: `string` \| `Function`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on_mount](XUI_XUIObject.XUIObject.md#_on_mount)

#### Defined in

[Core/XObject.ts:100](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L100)

___

### \_on\_show

• `Optional` **\_on\_show**: `string` \| `Function`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_on_show](XUI_XUIObject.XUIObject.md#_on_show)

#### Defined in

XUI/XUIObject.ts:34

___

### \_once

• **\_once**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_once](XUI_XUIObject.XUIObject.md#_once)

#### Defined in

[Core/XObject.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L98)

___

### \_parent

• **\_parent**: ``null`` \| [`XObject`](Core_XObject.XObject.md) = `null`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_parent](XUI_XUIObject.XUIObject.md#_parent)

#### Defined in

[Core/XObject.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L94)

___

### \_parent\_element

• `Optional` **\_parent\_element**: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_parent_element](XUI_XUIObject.XUIObject.md#_parent_element)

#### Defined in

XUI/XUIObject.ts:32

___

### \_process\_data

• **\_process\_data**: `boolean` = `true`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_process_data](XUI_XUIObject.XUIObject.md#_process_data)

#### Defined in

[Core/XObject.ts:108](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L108)

___

### \_process\_frame

• **\_process\_frame**: `boolean` = `true`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_process_frame](XUI_XUIObject.XUIObject.md#_process_frame)

#### Defined in

[Core/XObject.ts:107](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L107)

___

### \_svg\_data

• `Private` **\_svg\_data**: `string`

#### Defined in

XUI/XUICoreObjects.ts:346

___

### \_type

• **\_type**: `string`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_type](XUI_XUIObject.XUIObject.md#_type)

#### Defined in

XUI/XUIObject.ts:24

___

### \_visible

• **\_visible**: `boolean`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_visible](XUI_XUIObject.XUIObject.md#_visible)

#### Defined in

XUI/XUIObject.ts:31

___

### \_xem\_options

• `Protected` **\_xem\_options**: [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions)

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_xem_options](XUI_XUIObject.XUIObject.md#_xem_options)

#### Defined in

[Core/XObject.ts:111](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L111)

___

### \_xporter

• `Protected` **\_xporter**: [`XDataXporter`](../modules/Core_XObject.md#xdataxporter)

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[_xporter](XUI_XUIObject.XUIObject.md#_xporter)

#### Defined in

[Core/XObject.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L119)

## Accessors

### \_text

• `get` **_text**(): `string`

#### Returns

`string`

#### Inherited from

XUIObject.\_text

#### Defined in

XUI/XUIObject.ts:159

• `set` **_text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

#### Inherited from

XUIObject.\_text

#### Defined in

XUI/XUIObject.ts:152

___

### dom

• `get` **dom**(): `HTMLElement`

DOM Getter

#### Returns

`HTMLElement`

the HTML DOM object same as getDOMObject()

#### Inherited from

XUIObject.dom

#### Defined in

XUI/XUIObject.ts:147

## Methods

### addClass

▸ **addClass**(`className`): `void`

Adds a css class to the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | the css class name |

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[addClass](XUI_XUIObject.XUIObject.md#addclass)

#### Defined in

XUI/XUIObject.ts:251

___

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[addEventListener](XUI_XUIObject.XUIObject.md#addeventlistener)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[addNanoCommand](XUI_XUIObject.XUIObject.md#addnanocommand)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[addNanoCommandPack](XUI_XUIObject.XUIObject.md#addnanocommandpack)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[addXporterDataIgnoreFields](XUI_XUIObject.XUIObject.md#addxporterdataignorefields)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[addXporterInstanceXporter](XUI_XUIObject.XUIObject.md#addxporterinstancexporter)

#### Defined in

[Core/XObject.ts:272](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L272)

___

### append

▸ **append**(`xObject`): `any`

Append a child object to the XUIObject, if the object is not XUIObject it will be created

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xObject` | `any` | the child object to append can be XUIObject or XObjectData |

#### Returns

`any`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[append](XUI_XUIObject.XUIObject.md#append)

#### Defined in

XUI/XUIObject.ts:202

___

### attach

▸ **attach**(`parentElementId`): `void`

Attach the object to HTML element

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentElementId` | `string` |

#### Returns

`void`

**`Deprecated`**

use "mount" function instead

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[attach](XUI_XUIObject.XUIObject.md#attach)

#### Defined in

XUI/XUIObject.ts:178

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[checkAndRunInternalFunction](XUI_XUIObject.XUIObject.md#checkandruninternalfunction)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[clearAttributes](XUI_XUIObject.XUIObject.md#clearattributes)

#### Defined in

[Core/XObject.ts:597](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L597)

___

### click

▸ **click**(): `void`

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[click](XUI_XUIObject.XUIObject.md#click)

#### Defined in

XUI/XUIObject.ts:332

___

### dispose

▸ **dispose**(): `Promise`\<`void`\>

Dispose all object memory (destructor)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[dispose](XUI_XUIObject.XUIObject.md#dispose)

#### Defined in

XUI/XUIObject.ts:62

___

### emptyDataSource

▸ **emptyDataSource**(): `void`

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[emptyDataSource](XUI_XUIObject.XUIObject.md#emptydatasource)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[execute](XUI_XUIObject.XUIObject.md#execute)

#### Defined in

[Core/XObject.ts:525](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L525)

___

### getDOMObject

▸ **getDOMObject**(): `HTMLElement`

Gets the HTML DOM object, if the object is not created yet it will be created

#### Returns

`HTMLElement`

the HTML DOM object

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[getDOMObject](XUI_XUIObject.XUIObject.md#getdomobject)

#### Defined in

XUI/XUIObject.ts:95

___

### getHTML

▸ **getHTML**(): `string`

Gets the HTML representation of the object

#### Returns

`string`

the HTML representation of the object

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[getHTML](XUI_XUIObject.XUIObject.md#gethtml)

#### Defined in

XUI/XUIObject.ts:167

___

### hide

▸ **hide**(): `void`

This method is used to hide the object and trigger the onHide event

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[hide](XUI_XUIObject.XUIObject.md#hide)

#### Defined in

XUI/XUIObject.ts:309

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[init](XUI_XUIObject.XUIObject.md#init)

#### Defined in

[Core/XObject.ts:167](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L167)

___

### log

▸ **log**(): `void`

logs the object to the console

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[log](XUI_XUIObject.XUIObject.md#log)

#### Defined in

XUI/XUIObject.ts:81

___

### mount

▸ **mount**(`parentElementId`): `void`

Mount the object to HTML element

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentElementId` | `string` |

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[mount](XUI_XUIObject.XUIObject.md#mount)

#### Defined in

XUI/XUIObject.ts:188

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[onCreate](XUI_XUIObject.XUIObject.md#oncreate)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[onData](XUI_XUIObject.XUIObject.md#ondata)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[onFrame](XUI_XUIObject.XUIObject.md#onframe)

#### Defined in

[Core/XObject.ts:457](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L457)

___

### onHide

▸ **onHide**(): `Promise`\<`void`\>

this method triggered when the XUIObject is hidden

#### Returns

`Promise`\<`void`\>

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[onHide](XUI_XUIObject.XUIObject.md#onhide)

#### Defined in

XUI/XUIObject.ts:397

___

### onMount

▸ **onMount**(): `Promise`\<`void`\>

this method triggered after the HTML DOM object has been mounted by the super
it implemented in this class to support the following events for XUIObject:
_on_click: (XUIObject,event) => {}

#### Returns

`Promise`\<`void`\>

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[onMount](XUI_XUIObject.XUIObject.md#onmount)

#### Defined in

XUI/XUIObject.ts:346

___

### onShow

▸ **onShow**(): `Promise`\<`void`\>

this method triggered when the XUIObject is shown

#### Returns

`Promise`\<`void`\>

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[onShow](XUI_XUIObject.XUIObject.md#onshow)

#### Defined in

XUI/XUIObject.ts:378

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[parse](XUI_XUIObject.XUIObject.md#parse)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[parseEvents](XUI_XUIObject.XUIObject.md#parseevents)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[parseFields](XUI_XUIObject.XUIObject.md#parsefields)

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[parseFieldsFromXDataObject](XUI_XUIObject.XUIObject.md#parsefieldsfromxdataobject)

#### Defined in

[Core/XObject.ts:311](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L311)

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): `void`

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[removeAllEventListeners](XUI_XUIObject.XUIObject.md#removealleventlisteners)

#### Defined in

[Core/XObject.ts:224](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L224)

___

### removeClass

▸ **removeClass**(`className`): `void`

Removes a css class from the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | the css class name |

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[removeClass](XUI_XUIObject.XUIObject.md#removeclass)

#### Defined in

XUI/XUIObject.ts:261

___

### removeEventListener

▸ **removeEventListener**(`eventName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[removeEventListener](XUI_XUIObject.XUIObject.md#removeeventlistener)

#### Defined in

[Core/XObject.ts:217](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L217)

___

### replaceClass

▸ **replaceClass**(`oldClass`, `newClass`): `void`

Replaces a css class on the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldClass` | `string` | class to be replaced |
| `newClass` | `string` | new class to replace the old class |

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[replaceClass](XUI_XUIObject.XUIObject.md#replaceclass)

#### Defined in

XUI/XUIObject.ts:283

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

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[run](XUI_XUIObject.XUIObject.md#run)

#### Defined in

[Core/XObject.ts:501](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L501)

___

### setStyleAttribute

▸ **setStyleAttribute**(`attr`, `val`): `void`

Sets the object CSS style

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `attr` | `string` | the CSS attribute |
| `val` | `string` | the CSS value |

#### Returns

`void`

**`Example`**

```ts
xuiObj.setStyle("background-color","red")
```

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[setStyleAttribute](XUI_XUIObject.XUIObject.md#setstyleattribute)

#### Defined in

XUI/XUIObject.ts:241

___

### setText

▸ **setText**(`text`): `void`

Sets the object text content

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `text` | `string` | the text content |

#### Returns

`void`

**`Deprecated`**

use _text property instead (e.g. xuiObj._text = "Xpell rulz!")

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[setText](XUI_XUIObject.XUIObject.md#settext)

#### Defined in

XUI/XUIObject.ts:230

___

### show

▸ **show**(): `void`

This method is used to show the object and trigger the onShow event

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[show](XUI_XUIObject.XUIObject.md#show)

#### Defined in

XUI/XUIObject.ts:296

___

### toString

▸ **toString**(): `string`

Return a string representation of the XObject

#### Returns

`string`

string

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[toString](XUI_XUIObject.XUIObject.md#tostring)

#### Defined in

[Core/XObject.ts:592](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L592)

___

### toXData

▸ **toXData**(): [`IXData`](../interfaces/Core_XObject.IXData.md)

Return an IXObjectData JSON representation of the XObject

#### Returns

[`IXData`](../interfaces/Core_XObject.IXData.md)

IXObjectData

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[toXData](XUI_XUIObject.XUIObject.md#toxdata)

#### Defined in

[Core/XObject.ts:543](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L543)

___

### toggle

▸ **toggle**(): `void`

This method is used to toggle the object visibility

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[toggle](XUI_XUIObject.XUIObject.md#toggle)

#### Defined in

XUI/XUIObject.ts:326

___

### toggleClass

▸ **toggleClass**(`className`): `void`

Toggles a css class on the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `className` | `string` | the css class name |

#### Returns

`void`

#### Inherited from

[XUIObject](XUI_XUIObject.XUIObject.md).[toggleClass](XUI_XUIObject.XUIObject.md#toggleclass)

#### Defined in

XUI/XUIObject.ts:271
