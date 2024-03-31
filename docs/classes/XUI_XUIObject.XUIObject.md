[xpell](../README.md) / [Modules](../modules.md) / [XUI/XUIObject](../modules/XUI_XUIObject.md) / XUIObject

# Class: XUIObject

[XUI/XUIObject](../modules/XUI_XUIObject.md).XUIObject

ADD On Event support
 - override addEventListener to add html event listener if object exist
 - override removeEventListener to remove html event listener
 - check for events in getDOMObject and add them to the object

## Hierarchy

- [`XObject`](Core_XObject.XObject.md)

  ↳ **`XUIObject`**

  ↳↳ [`XTransformControls`](XUI_XEditor.XTransformControls.md)

  ↳↳ [`X3DObjectViewer`](XUI_XEditor.X3DObjectViewer.md)

  ↳↳ [`XView`](XUI_XUICoreObjects.XView.md)

  ↳↳ [`XHeader`](XUI_XUICoreObjects.XHeader.md)

  ↳↳ [`XNavBar`](XUI_XUICoreObjects.XNavBar.md)

  ↳↳ [`XForm`](XUI_XUICoreObjects.XForm.md)

  ↳↳ [`XImage`](XUI_XUICoreObjects.XImage.md)

  ↳↳ [`XVideo`](XUI_XUICoreObjects.XVideo.md)

  ↳↳ [`XWebcam`](XUI_XUICoreObjects.XWebcam.md)

  ↳↳ [`XTextField`](XUI_XUICoreObjects.XTextField.md)

  ↳↳ [`XPassword`](XUI_XUICoreObjects.XPassword.md)

  ↳↳ [`XInput`](XUI_XUICoreObjects.XInput.md)

  ↳↳ [`XTextArea`](XUI_XUICoreObjects.XTextArea.md)

  ↳↳ [`XLink`](XUI_XUICoreObjects.XLink.md)

  ↳↳ [`XLabel`](XUI_XUICoreObjects.XLabel.md)

  ↳↳ [`XHTML`](XUI_XUICoreObjects.XHTML.md)

  ↳↳ [`XSVG`](XUI_XUICoreObjects.XSVG.md)

  ↳↳ [`XSVGCircle`](XUI_XUICoreObjects.XSVGCircle.md)

  ↳↳ [`XSVGEllipse`](XUI_XUICoreObjects.XSVGEllipse.md)

  ↳↳ [`XSVGRect`](XUI_XUICoreObjects.XSVGRect.md)

  ↳↳ [`XSVGLine`](XUI_XUICoreObjects.XSVGLine.md)

  ↳↳ [`XSVGPolyline`](XUI_XUICoreObjects.XSVGPolyline.md)

  ↳↳ [`XSVGPolygon`](XUI_XUICoreObjects.XSVGPolygon.md)

  ↳↳ [`XSVGPath`](XUI_XUICoreObjects.XSVGPath.md)

  ↳↳ [`XButton`](XUI_XUICoreObjects.XButton.md)

  ↳↳ [`XList`](XUI_XUICoreObjects.XList.md)

## Table of contents

### Constructors

- [constructor](XUI_XUIObject.XUIObject.md#constructor)

### Properties

- [#\_text](XUI_XUIObject.XUIObject.md##_text)
- [\_base\_display](XUI_XUIObject.XUIObject.md#_base_display)
- [\_cache\_cmd\_txt](XUI_XUIObject.XUIObject.md#_cache_cmd_txt)
- [\_cache\_jcmd](XUI_XUIObject.XUIObject.md#_cache_jcmd)
- [\_children](XUI_XUIObject.XUIObject.md#_children)
- [\_data\_source](XUI_XUIObject.XUIObject.md#_data_source)
- [\_dom\_object](XUI_XUIObject.XUIObject.md#_dom_object)
- [\_event\_listeners\_ids](XUI_XUIObject.XUIObject.md#_event_listeners_ids)
- [\_html](XUI_XUIObject.XUIObject.md#_html)
- [\_html\_ns](XUI_XUIObject.XUIObject.md#_html_ns)
- [\_html\_tag](XUI_XUIObject.XUIObject.md#_html_tag)
- [\_id](XUI_XUIObject.XUIObject.md#_id)
- [\_name](XUI_XUIObject.XUIObject.md#_name)
- [\_nano\_commands](XUI_XUIObject.XUIObject.md#_nano_commands)
- [\_on](XUI_XUIObject.XUIObject.md#_on)
- [\_on\_click](XUI_XUIObject.XUIObject.md#_on_click)
- [\_on\_create](XUI_XUIObject.XUIObject.md#_on_create)
- [\_on\_data](XUI_XUIObject.XUIObject.md#_on_data)
- [\_on\_event](XUI_XUIObject.XUIObject.md#_on_event)
- [\_on\_frame](XUI_XUIObject.XUIObject.md#_on_frame)
- [\_on\_hide](XUI_XUIObject.XUIObject.md#_on_hide)
- [\_on\_mount](XUI_XUIObject.XUIObject.md#_on_mount)
- [\_on\_show](XUI_XUIObject.XUIObject.md#_on_show)
- [\_once](XUI_XUIObject.XUIObject.md#_once)
- [\_parent](XUI_XUIObject.XUIObject.md#_parent)
- [\_parent\_element](XUI_XUIObject.XUIObject.md#_parent_element)
- [\_process\_data](XUI_XUIObject.XUIObject.md#_process_data)
- [\_process\_frame](XUI_XUIObject.XUIObject.md#_process_frame)
- [\_type](XUI_XUIObject.XUIObject.md#_type)
- [\_visible](XUI_XUIObject.XUIObject.md#_visible)
- [\_xem\_options](XUI_XUIObject.XUIObject.md#_xem_options)
- [\_xporter](XUI_XUIObject.XUIObject.md#_xporter)

### Accessors

- [\_text](XUI_XUIObject.XUIObject.md#_text)
- [dom](XUI_XUIObject.XUIObject.md#dom)

### Methods

- [addClass](XUI_XUIObject.XUIObject.md#addclass)
- [addEventListener](XUI_XUIObject.XUIObject.md#addeventlistener)
- [addNanoCommand](XUI_XUIObject.XUIObject.md#addnanocommand)
- [addNanoCommandPack](XUI_XUIObject.XUIObject.md#addnanocommandpack)
- [addXporterDataIgnoreFields](XUI_XUIObject.XUIObject.md#addxporterdataignorefields)
- [addXporterInstanceXporter](XUI_XUIObject.XUIObject.md#addxporterinstancexporter)
- [append](XUI_XUIObject.XUIObject.md#append)
- [attach](XUI_XUIObject.XUIObject.md#attach)
- [checkAndRunInternalFunction](XUI_XUIObject.XUIObject.md#checkandruninternalfunction)
- [clearAttributes](XUI_XUIObject.XUIObject.md#clearattributes)
- [click](XUI_XUIObject.XUIObject.md#click)
- [dispose](XUI_XUIObject.XUIObject.md#dispose)
- [emptyDataSource](XUI_XUIObject.XUIObject.md#emptydatasource)
- [execute](XUI_XUIObject.XUIObject.md#execute)
- [getDOMObject](XUI_XUIObject.XUIObject.md#getdomobject)
- [getHTML](XUI_XUIObject.XUIObject.md#gethtml)
- [hide](XUI_XUIObject.XUIObject.md#hide)
- [init](XUI_XUIObject.XUIObject.md#init)
- [log](XUI_XUIObject.XUIObject.md#log)
- [mount](XUI_XUIObject.XUIObject.md#mount)
- [onCreate](XUI_XUIObject.XUIObject.md#oncreate)
- [onData](XUI_XUIObject.XUIObject.md#ondata)
- [onFrame](XUI_XUIObject.XUIObject.md#onframe)
- [onHide](XUI_XUIObject.XUIObject.md#onhide)
- [onMount](XUI_XUIObject.XUIObject.md#onmount)
- [onShow](XUI_XUIObject.XUIObject.md#onshow)
- [parse](XUI_XUIObject.XUIObject.md#parse)
- [parseEvents](XUI_XUIObject.XUIObject.md#parseevents)
- [parseFields](XUI_XUIObject.XUIObject.md#parsefields)
- [parseFieldsFromXDataObject](XUI_XUIObject.XUIObject.md#parsefieldsfromxdataobject)
- [removeAllEventListeners](XUI_XUIObject.XUIObject.md#removealleventlisteners)
- [removeClass](XUI_XUIObject.XUIObject.md#removeclass)
- [removeEventListener](XUI_XUIObject.XUIObject.md#removeeventlistener)
- [replaceClass](XUI_XUIObject.XUIObject.md#replaceclass)
- [run](XUI_XUIObject.XUIObject.md#run)
- [setStyleAttribute](XUI_XUIObject.XUIObject.md#setstyleattribute)
- [setText](XUI_XUIObject.XUIObject.md#settext)
- [show](XUI_XUIObject.XUIObject.md#show)
- [toString](XUI_XUIObject.XUIObject.md#tostring)
- [toXData](XUI_XUIObject.XUIObject.md#toxdata)
- [toggle](XUI_XUIObject.XUIObject.md#toggle)
- [toggleClass](XUI_XUIObject.XUIObject.md#toggleclass)

## Constructors

### constructor

• **new XUIObject**(`data`, `defaults`, `skipParse?`): [`XUIObject`](XUI_XUIObject.XUIObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) |
| `defaults` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) |
| `skipParse?` | `boolean` |

#### Returns

[`XUIObject`](XUI_XUIObject.XUIObject.md)

#### Overrides

[XObject](Core_XObject.XObject.md).[constructor](Core_XObject.XObject.md#constructor)

#### Defined in

XUI/XUIObject.ts:40

## Properties

### #\_text

• `Private` **#\_text**: `string` = `""`

#### Defined in

XUI/XUIObject.ts:29

___

### \_base\_display

• `Optional` **\_base\_display**: ``null`` \| `string`

#### Defined in

XUI/XUIObject.ts:26

___

### \_cache\_cmd\_txt

• `Protected` `Optional` **\_cache\_cmd\_txt**: `string`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_cache_cmd_txt](Core_XObject.XObject.md#_cache_cmd_txt)

#### Defined in

[Core/XObject.ts:116](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L116)

___

### \_cache\_jcmd

• `Protected` `Optional` **\_cache\_jcmd**: `any`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_cache_jcmd](Core_XObject.XObject.md#_cache_jcmd)

#### Defined in

[Core/XObject.ts:117](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L117)

___

### \_children

• **\_children**: [`XUIObject`](XUI_XUIObject.XUIObject.md)[]

#### Overrides

[XObject](Core_XObject.XObject.md).[_children](Core_XObject.XObject.md#_children)

#### Defined in

XUI/XUIObject.ts:30

___

### \_data\_source

• `Optional` **\_data\_source**: `string`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_data_source](Core_XObject.XObject.md#_data_source)

#### Defined in

[Core/XObject.ts:96](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L96)

___

### \_dom\_object

• `Protected` **\_dom\_object**: `any`

#### Defined in

XUI/XUIObject.ts:23

___

### \_event\_listeners\_ids

• `Protected` **\_event\_listeners\_ids**: `Object` = `{}`

#### Index signature

▪ [eventName: `string`]: `string`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_event_listeners_ids](Core_XObject.XObject.md#_event_listeners_ids)

#### Defined in

[Core/XObject.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L118)

___

### \_html

• `Optional` **\_html**: `string`

#### Defined in

XUI/XUIObject.ts:25

___

### \_html\_ns

• `Optional` **\_html\_ns**: ``null`` \| `string`

#### Defined in

XUI/XUIObject.ts:22

___

### \_html\_tag

• **\_html\_tag**: `string`

#### Defined in

XUI/XUIObject.ts:21

___

### \_id

• **\_id**: `string`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_id](Core_XObject.XObject.md#_id)

#### Defined in

[Core/XObject.ts:91](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L91)

___

### \_name

• `Optional` **\_name**: `string`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_name](Core_XObject.XObject.md#_name)

#### Defined in

[Core/XObject.ts:95](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L95)

___

### \_nano\_commands

• `Protected` **\_nano\_commands**: `Object` = `{}`

#### Index signature

▪ [k: `string`]: [`XNanoCommand`](../interfaces/Core_XNanoCommands.XNanoCommand.md)

#### Inherited from

[XObject](Core_XObject.XObject.md).[_nano_commands](Core_XObject.XObject.md#_nano_commands)

#### Defined in

[Core/XObject.ts:115](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L115)

___

### \_on

• **\_on**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_on](Core_XObject.XObject.md#_on)

#### Defined in

[Core/XObject.ts:97](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L97)

___

### \_on\_click

• `Optional` **\_on\_click**: `string` \| `Function`

#### Defined in

XUI/XUIObject.ts:33

___

### \_on\_create

• `Optional` **\_on\_create**: `string` \| `Function`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_on_create](Core_XObject.XObject.md#_on_create)

#### Defined in

[Core/XObject.ts:99](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L99)

___

### \_on\_data

• `Optional` **\_on\_data**: `string` \| `Function`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_on_data](Core_XObject.XObject.md#_on_data)

#### Defined in

[Core/XObject.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L102)

___

### \_on\_event

• `Optional` **\_on\_event**: `string` \| `Function`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_on_event](Core_XObject.XObject.md#_on_event)

#### Defined in

[Core/XObject.ts:103](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L103)

___

### \_on\_frame

• `Optional` **\_on\_frame**: `string` \| `Function`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_on_frame](Core_XObject.XObject.md#_on_frame)

#### Defined in

[Core/XObject.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L101)

___

### \_on\_hide

• `Optional` **\_on\_hide**: `string` \| `Function`

#### Defined in

XUI/XUIObject.ts:35

___

### \_on\_mount

• `Optional` **\_on\_mount**: `string` \| `Function`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_on_mount](Core_XObject.XObject.md#_on_mount)

#### Defined in

[Core/XObject.ts:100](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L100)

___

### \_on\_show

• `Optional` **\_on\_show**: `string` \| `Function`

#### Defined in

XUI/XUIObject.ts:34

___

### \_once

• **\_once**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_once](Core_XObject.XObject.md#_once)

#### Defined in

[Core/XObject.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L98)

___

### \_parent

• **\_parent**: ``null`` \| [`XObject`](Core_XObject.XObject.md) = `null`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_parent](Core_XObject.XObject.md#_parent)

#### Defined in

[Core/XObject.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L94)

___

### \_parent\_element

• `Optional` **\_parent\_element**: `string`

#### Defined in

XUI/XUIObject.ts:32

___

### \_process\_data

• **\_process\_data**: `boolean` = `true`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_process_data](Core_XObject.XObject.md#_process_data)

#### Defined in

[Core/XObject.ts:108](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L108)

___

### \_process\_frame

• **\_process\_frame**: `boolean` = `true`

#### Inherited from

[XObject](Core_XObject.XObject.md).[_process_frame](Core_XObject.XObject.md#_process_frame)

#### Defined in

[Core/XObject.ts:107](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L107)

___

### \_type

• **\_type**: `string`

#### Overrides

[XObject](Core_XObject.XObject.md).[_type](Core_XObject.XObject.md#_type)

#### Defined in

XUI/XUIObject.ts:24

___

### \_visible

• **\_visible**: `boolean`

#### Defined in

XUI/XUIObject.ts:31

___

### \_xem\_options

• `Protected` **\_xem\_options**: [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions)

#### Inherited from

[XObject](Core_XObject.XObject.md).[_xem_options](Core_XObject.XObject.md#_xem_options)

#### Defined in

[Core/XObject.ts:111](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L111)

___

### \_xporter

• `Protected` **\_xporter**: [`XDataXporter`](../modules/Core_XObject.md#xdataxporter)

#### Inherited from

[XObject](Core_XObject.XObject.md).[_xporter](Core_XObject.XObject.md#_xporter)

#### Defined in

[Core/XObject.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L119)

## Accessors

### \_text

• `get` **_text**(): `string`

#### Returns

`string`

#### Defined in

XUI/XUIObject.ts:159

• `set` **_text**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `string` |

#### Returns

`void`

#### Defined in

XUI/XUIObject.ts:152

___

### dom

• `get` **dom**(): `HTMLElement`

DOM Getter

#### Returns

`HTMLElement`

the HTML DOM object same as getDOMObject()

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

[XObject](Core_XObject.XObject.md).[addEventListener](Core_XObject.XObject.md#addeventlistener)

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

[XObject](Core_XObject.XObject.md).[addNanoCommand](Core_XObject.XObject.md#addnanocommand)

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

[XObject](Core_XObject.XObject.md).[addNanoCommandPack](Core_XObject.XObject.md#addnanocommandpack)

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

[XObject](Core_XObject.XObject.md).[addXporterDataIgnoreFields](Core_XObject.XObject.md#addxporterdataignorefields)

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

[XObject](Core_XObject.XObject.md).[addXporterInstanceXporter](Core_XObject.XObject.md#addxporterinstancexporter)

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

#### Overrides

[XObject](Core_XObject.XObject.md).[append](Core_XObject.XObject.md#append)

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

[XObject](Core_XObject.XObject.md).[checkAndRunInternalFunction](Core_XObject.XObject.md#checkandruninternalfunction)

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

[XObject](Core_XObject.XObject.md).[clearAttributes](Core_XObject.XObject.md#clearattributes)

#### Defined in

[Core/XObject.ts:597](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L597)

___

### click

▸ **click**(): `void`

#### Returns

`void`

#### Defined in

XUI/XUIObject.ts:332

___

### dispose

▸ **dispose**(): `Promise`\<`void`\>

Dispose all object memory (destructor)

#### Returns

`Promise`\<`void`\>

#### Overrides

[XObject](Core_XObject.XObject.md).[dispose](Core_XObject.XObject.md#dispose)

#### Defined in

XUI/XUIObject.ts:62

___

### emptyDataSource

▸ **emptyDataSource**(): `void`

#### Returns

`void`

#### Inherited from

[XObject](Core_XObject.XObject.md).[emptyDataSource](Core_XObject.XObject.md#emptydatasource)

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

[XObject](Core_XObject.XObject.md).[execute](Core_XObject.XObject.md#execute)

#### Defined in

[Core/XObject.ts:525](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L525)

___

### getDOMObject

▸ **getDOMObject**(): `HTMLElement`

Gets the HTML DOM object, if the object is not created yet it will be created

#### Returns

`HTMLElement`

the HTML DOM object

#### Defined in

XUI/XUIObject.ts:95

___

### getHTML

▸ **getHTML**(): `string`

Gets the HTML representation of the object

#### Returns

`string`

the HTML representation of the object

#### Defined in

XUI/XUIObject.ts:167

___

### hide

▸ **hide**(): `void`

This method is used to hide the object and trigger the onHide event

#### Returns

`void`

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

[XObject](Core_XObject.XObject.md).[init](Core_XObject.XObject.md#init)

#### Defined in

[Core/XObject.ts:167](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L167)

___

### log

▸ **log**(): `void`

logs the object to the console

#### Returns

`void`

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

[XObject](Core_XObject.XObject.md).[onCreate](Core_XObject.XObject.md#oncreate)

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

[XObject](Core_XObject.XObject.md).[onData](Core_XObject.XObject.md#ondata)

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

[XObject](Core_XObject.XObject.md).[onFrame](Core_XObject.XObject.md#onframe)

#### Defined in

[Core/XObject.ts:457](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L457)

___

### onHide

▸ **onHide**(): `Promise`\<`void`\>

this method triggered when the XUIObject is hidden

#### Returns

`Promise`\<`void`\>

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

#### Overrides

[XObject](Core_XObject.XObject.md).[onMount](Core_XObject.XObject.md#onmount)

#### Defined in

XUI/XUIObject.ts:346

___

### onShow

▸ **onShow**(): `Promise`\<`void`\>

this method triggered when the XUIObject is shown

#### Returns

`Promise`\<`void`\>

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

[XObject](Core_XObject.XObject.md).[parse](Core_XObject.XObject.md#parse)

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

[XObject](Core_XObject.XObject.md).[parseEvents](Core_XObject.XObject.md#parseevents)

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

[XObject](Core_XObject.XObject.md).[parseFields](Core_XObject.XObject.md#parsefields)

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

[XObject](Core_XObject.XObject.md).[parseFieldsFromXDataObject](Core_XObject.XObject.md#parsefieldsfromxdataobject)

#### Defined in

[Core/XObject.ts:311](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L311)

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): `void`

#### Returns

`void`

#### Inherited from

[XObject](Core_XObject.XObject.md).[removeAllEventListeners](Core_XObject.XObject.md#removealleventlisteners)

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

[XObject](Core_XObject.XObject.md).[removeEventListener](Core_XObject.XObject.md#removeeventlistener)

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

[XObject](Core_XObject.XObject.md).[run](Core_XObject.XObject.md#run)

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

#### Defined in

XUI/XUIObject.ts:230

___

### show

▸ **show**(): `void`

This method is used to show the object and trigger the onShow event

#### Returns

`void`

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

[XObject](Core_XObject.XObject.md).[toString](Core_XObject.XObject.md#tostring)

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

[XObject](Core_XObject.XObject.md).[toXData](Core_XObject.XObject.md#toxdata)

#### Defined in

[Core/XObject.ts:543](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L543)

___

### toggle

▸ **toggle**(): `void`

This method is used to toggle the object visibility

#### Returns

`void`

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

#### Defined in

XUI/XUIObject.ts:271
