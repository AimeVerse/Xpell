# Class: XWebcam

[XUI/XUICoreObjects](../wiki/XUI.XUICoreObjects).XWebcam

## Hierarchy

- [`XUIObject`](../wiki/XUI.XUIObject.XUIObject)

  ↳ **`XWebcam`**

## Table of contents

### Constructors

- [constructor](../wiki/XUI.XUICoreObjects.XWebcam#constructor)

### Properties

- [\_base\_display](../wiki/XUI.XUICoreObjects.XWebcam#_base_display)
- [\_children](../wiki/XUI.XUICoreObjects.XWebcam#_children)
- [\_data\_source](../wiki/XUI.XUICoreObjects.XWebcam#_data_source)
- [\_format](../wiki/XUI.XUICoreObjects.XWebcam#_format)
- [\_html](../wiki/XUI.XUICoreObjects.XWebcam#_html)
- [\_html\_ns](../wiki/XUI.XUICoreObjects.XWebcam#_html_ns)
- [\_html\_tag](../wiki/XUI.XUICoreObjects.XWebcam#_html_tag)
- [\_ignore](../wiki/XUI.XUICoreObjects.XWebcam#_ignore)
- [\_on\_frame\_skip\_data\_source](../wiki/XUI.XUICoreObjects.XWebcam#_on_frame_skip_data_source)
- [\_type](../wiki/XUI.XUICoreObjects.XWebcam#_type)
- [\_video\_constraints](../wiki/XUI.XUICoreObjects.XWebcam#_video_constraints)
- [autoplay](../wiki/XUI.XUICoreObjects.XWebcam#autoplay)
- [muted](../wiki/XUI.XUICoreObjects.XWebcam#muted)
- [text](../wiki/XUI.XUICoreObjects.XWebcam#text)

### Accessors

- [DOMElementFromHTML](../wiki/XUI.XUICoreObjects.XWebcam#domelementfromhtml)
- [isPlaying](../wiki/XUI.XUICoreObjects.XWebcam#isplaying)

### Methods

- [append](../wiki/XUI.XUICoreObjects.XWebcam#append)
- [attach](../wiki/XUI.XUICoreObjects.XWebcam#attach)
- [execute](../wiki/XUI.XUICoreObjects.XWebcam#execute)
- [getDOMObject](../wiki/XUI.XUICoreObjects.XWebcam#getdomobject)
- [getHTML](../wiki/XUI.XUICoreObjects.XWebcam#gethtml)
- [hide](../wiki/XUI.XUICoreObjects.XWebcam#hide)
- [init](../wiki/XUI.XUICoreObjects.XWebcam#init)
- [isAvailable](../wiki/XUI.XUICoreObjects.XWebcam#isavailable)
- [log](../wiki/XUI.XUICoreObjects.XWebcam#log)
- [onCreate](../wiki/XUI.XUICoreObjects.XWebcam#oncreate)
- [onFrame](../wiki/XUI.XUICoreObjects.XWebcam#onframe)
- [onMount](../wiki/XUI.XUICoreObjects.XWebcam#onmount)
- [parse](../wiki/XUI.XUICoreObjects.XWebcam#parse)
- [pause](../wiki/XUI.XUICoreObjects.XWebcam#pause)
- [setSource](../wiki/XUI.XUICoreObjects.XWebcam#setsource)
- [setStyle](../wiki/XUI.XUICoreObjects.XWebcam#setstyle)
- [setText](../wiki/XUI.XUICoreObjects.XWebcam#settext)
- [show](../wiki/XUI.XUICoreObjects.XWebcam#show)

## Constructors

### constructor

• **new XWebcam**(`data`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |

#### Overrides

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[constructor](../wiki/XUI.XUIObject.XUIObject#constructor)

#### Defined in

src/XUI/XUICoreObjects.ts:88

## Properties

### \_base\_display

• **\_base\_display**: `string` = `"block"`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_base_display](../wiki/XUI.XUIObject.XUIObject#_base_display)

#### Defined in

src/XUI/XUIObject.ts:19

___

### \_children

• **\_children**: [`XObject`](../wiki/XObject.XObject)[]

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_children](../wiki/XUI.XUIObject.XUIObject#_children)

#### Defined in

[src/XObject.ts:25](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XObject.ts#L25)

___

### \_data\_source

• **\_data\_source**: `string`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_data_source](../wiki/XUI.XUIObject.XUIObject#_data_source)

#### Defined in

src/XUI/XUIObject.ts:21

___

### \_format

• **\_format**: `string`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_format](../wiki/XUI.XUIObject.XUIObject#_format)

#### Defined in

src/XUI/XUIObject.ts:23

___

### \_html

• **\_html**: `string`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_html](../wiki/XUI.XUIObject.XUIObject#_html)

#### Defined in

src/XUI/XUIObject.ts:18

___

### \_html\_ns

• **\_html\_ns**: `string`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_html_ns](../wiki/XUI.XUIObject.XUIObject#_html_ns)

#### Defined in

src/XUI/XUIObject.ts:15

___

### \_html\_tag

• **\_html\_tag**: `string`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_html_tag](../wiki/XUI.XUIObject.XUIObject#_html_tag)

#### Defined in

src/XUI/XUIObject.ts:14

___

### \_ignore

• **\_ignore**: `Object`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_ignore](../wiki/XUI.XUIObject.XUIObject#_ignore)

#### Defined in

src/XUI/XUIObject.ts:24

___

### \_on\_frame\_skip\_data\_source

• **\_on\_frame\_skip\_data\_source**: `any`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_on_frame_skip_data_source](../wiki/XUI.XUIObject.XUIObject#_on_frame_skip_data_source)

#### Defined in

src/XUI/XUIObject.ts:22

___

### \_type

• **\_type**: `string`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[_type](../wiki/XUI.XUIObject.XUIObject#_type)

#### Defined in

src/XUI/XUIObject.ts:17

___

### \_video\_constraints

• **\_video\_constraints**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `height` | `number` |
| `video` | `boolean` |
| `width` | `number` |

#### Defined in

src/XUI/XUICoreObjects.ts:86

___

### autoplay

• **autoplay**: `boolean`

#### Defined in

src/XUI/XUICoreObjects.ts:84

___

### muted

• **muted**: `boolean`

#### Defined in

src/XUI/XUICoreObjects.ts:85

___

### text

• **text**: `string`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[text](../wiki/XUI.XUIObject.XUIObject#text)

#### Defined in

src/XUI/XUIObject.ts:20

## Accessors

### DOMElementFromHTML

• `get` **DOMElementFromHTML**(): `HTMLElement`

return the do

#### Returns

`HTMLElement`

#### Inherited from

XUIObject.DOMElementFromHTML

#### Defined in

src/XUI/XUIObject.ts:129

___

### isPlaying

• `get` **isPlaying**(): `boolean`

#### Returns

`boolean`

#### Defined in

src/XUI/XUICoreObjects.ts:135

## Methods

### append

▸ **append**(`xObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObject` | [`XUIObject`](../wiki/XUI.XUIObject.XUIObject) |

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[append](../wiki/XUI.XUIObject.XUIObject#append)

#### Defined in

src/XUI/XUIObject.ts:133

___

### attach

▸ **attach**(`parentElementId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `parentElementId` | `string` |

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[attach](../wiki/XUI.XUIObject.XUIObject#attach)

#### Defined in

src/XUI/XUIObject.ts:118

___

### execute

▸ **execute**(`xCommand`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | [`XCommand`](../wiki/XCommand.XCommand) |

#### Returns

`Promise`<`void`\>

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[execute](../wiki/XUI.XUIObject.XUIObject#execute)

#### Defined in

[src/XObject.ts:99](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XObject.ts#L99)

___

### getDOMObject

▸ **getDOMObject**(): `Element`

#### Returns

`Element`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[getDOMObject](../wiki/XUI.XUIObject.XUIObject#getdomobject)

#### Defined in

src/XUI/XUIObject.ts:78

___

### getHTML

▸ **getHTML**(): `string`

#### Returns

`string`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[getHTML](../wiki/XUI.XUIObject.XUIObject#gethtml)

#### Defined in

src/XUI/XUIObject.ts:112

___

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[hide](../wiki/XUI.XUIObject.XUIObject#hide)

#### Defined in

src/XUI/XUIObject.ts:160

___

### init

▸ **init**(): `void`

occurs on Xpell.init

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[init](../wiki/XUI.XUIObject.XUIObject#init)

#### Defined in

src/XUI/XUIObject.ts:54

___

### isAvailable

▸ **isAvailable**(): `boolean`

this method checks if the browser has "getMedia" support for webcam & mic

#### Returns

`boolean`

boolean

#### Defined in

src/XUI/XUICoreObjects.ts:114

___

### log

▸ **log**(): `void`

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[log](../wiki/XUI.XUIObject.XUIObject#log)

#### Defined in

src/XUI/XUIObject.ts:68

___

### onCreate

▸ **onCreate**(): `Promise`<`void`\>

this method triggered after the HTML DOM object has been created and added to the parent element

#### Returns

`Promise`<`void`\>

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[onCreate](../wiki/XUI.XUIObject.XUIObject#oncreate)

#### Defined in

src/XUI/XUIObject.ts:170

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`<`void`\>

triggers from Xpell main engine onFrame

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameNumber` | `any` | object that extends XUIObject can override this method and call super.onFrame to bubble the event to child objects |

#### Returns

`Promise`<`void`\>

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[onFrame](../wiki/XUI.XUIObject.XUIObject#onframe)

#### Defined in

src/XUI/XUIObject.ts:192

___

### onMount

▸ **onMount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[onMount](../wiki/XUI.XUIObject.XUIObject#onmount)

#### Defined in

src/XUI/XUIObject.ts:177

___

### parse

▸ **parse**(`data`, `ignore?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | `any` | `undefined` |
| `ignore` | `Object` | `reserved_words` |

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[parse](../wiki/XUI.XUIObject.XUIObject#parse)

#### Defined in

src/XUI/XUIObject.ts:59

___

### pause

▸ **pause**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

src/XUI/XUICoreObjects.ts:140

___

### setSource

▸ **setSource**(`video_elem`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `video_elem` | `any` |

#### Returns

`void`

#### Defined in

src/XUI/XUICoreObjects.ts:118

___

### setStyle

▸ **setStyle**(`attr`, `val`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attr` | `any` |
| `val` | `any` |

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[setStyle](../wiki/XUI.XUIObject.XUIObject#setstyle)

#### Defined in

src/XUI/XUIObject.ts:148

___

### setText

▸ **setText**(`text`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `text` | `any` |

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[setText](../wiki/XUI.XUIObject.XUIObject#settext)

#### Defined in

src/XUI/XUIObject.ts:140

___

### show

▸ **show**(): `void`

#### Returns

`void`

#### Inherited from

[XUIObject](../wiki/XUI.XUIObject.XUIObject).[show](../wiki/XUI.XUIObject.XUIObject#show)

#### Defined in

src/XUI/XUIObject.ts:154
