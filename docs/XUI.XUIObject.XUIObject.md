# Class: XUIObject

[XUI/XUIObject](../wiki/XUI.XUIObject).XUIObject

## Hierarchy

- [`XObject`](../wiki/XObject.XObject)

  ↳ **`XUIObject`**

  ↳↳ [`XView`](../wiki/XUI.XUICoreObjects.XView)

  ↳↳ [`XHeader`](../wiki/XUI.XUICoreObjects.XHeader)

  ↳↳ [`XNavBar`](../wiki/XUI.XUICoreObjects.XNavBar)

  ↳↳ [`XForm`](../wiki/XUI.XUICoreObjects.XForm)

  ↳↳ [`XImage`](../wiki/XUI.XUICoreObjects.XImage)

  ↳↳ [`XVideo`](../wiki/XUI.XUICoreObjects.XVideo)

  ↳↳ [`XWebcam`](../wiki/XUI.XUICoreObjects.XWebcam)

  ↳↳ [`XTextField`](../wiki/XUI.XUICoreObjects.XTextField)

  ↳↳ [`XInput`](../wiki/XUI.XUICoreObjects.XInput)

  ↳↳ [`XTextArea`](../wiki/XUI.XUICoreObjects.XTextArea)

  ↳↳ [`XLink`](../wiki/XUI.XUICoreObjects.XLink)

  ↳↳ [`XLabel`](../wiki/XUI.XUICoreObjects.XLabel)

  ↳↳ [`XHTML`](../wiki/XUI.XUICoreObjects.XHTML)

  ↳↳ [`XSVG`](../wiki/XUI.XUICoreObjects.XSVG)

  ↳↳ [`XButton`](../wiki/XUI.XUICoreObjects.XButton)

  ↳↳ [`XList`](../wiki/XUI.XUICoreObjects.XList)

## Indexable

▪ [k: `string`]: `string` \| ``null`` \| [] \| `undefined` \| `Function` \| `boolean` \| {}

## Table of contents

### Constructors

- [constructor](../wiki/XUI.XUIObject.XUIObject#constructor)

### Properties

- [\_base\_display](../wiki/XUI.XUIObject.XUIObject#_base_display)
- [\_children](../wiki/XUI.XUIObject.XUIObject#_children)
- [\_data\_source](../wiki/XUI.XUIObject.XUIObject#_data_source)
- [\_dom\_object](../wiki/XUI.XUIObject.XUIObject#_dom_object)
- [\_format](../wiki/XUI.XUIObject.XUIObject#_format)
- [\_html](../wiki/XUI.XUIObject.XUIObject#_html)
- [\_html\_ns](../wiki/XUI.XUIObject.XUIObject#_html_ns)
- [\_html\_tag](../wiki/XUI.XUIObject.XUIObject#_html_tag)
- [\_ignore](../wiki/XUI.XUIObject.XUIObject#_ignore)
- [\_on\_frame\_skip\_data\_source](../wiki/XUI.XUIObject.XUIObject#_on_frame_skip_data_source)
- [\_type](../wiki/XUI.XUIObject.XUIObject#_type)
- [text](../wiki/XUI.XUIObject.XUIObject#text)

### Accessors

- [DOMElementFromHTML](../wiki/XUI.XUIObject.XUIObject#domelementfromhtml)

### Methods

- [append](../wiki/XUI.XUIObject.XUIObject#append)
- [attach](../wiki/XUI.XUIObject.XUIObject#attach)
- [execute](../wiki/XUI.XUIObject.XUIObject#execute)
- [getDOMObject](../wiki/XUI.XUIObject.XUIObject#getdomobject)
- [getHTML](../wiki/XUI.XUIObject.XUIObject#gethtml)
- [hide](../wiki/XUI.XUIObject.XUIObject#hide)
- [init](../wiki/XUI.XUIObject.XUIObject#init)
- [log](../wiki/XUI.XUIObject.XUIObject#log)
- [onCreate](../wiki/XUI.XUIObject.XUIObject#oncreate)
- [onFrame](../wiki/XUI.XUIObject.XUIObject#onframe)
- [onMount](../wiki/XUI.XUIObject.XUIObject#onmount)
- [parse](../wiki/XUI.XUIObject.XUIObject#parse)
- [setStyle](../wiki/XUI.XUIObject.XUIObject#setstyle)
- [setText](../wiki/XUI.XUIObject.XUIObject#settext)
- [show](../wiki/XUI.XUIObject.XUIObject#show)

## Constructors

### constructor

• **new XUIObject**(`data`, `defaults`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `any` |
| `defaults` | `any` |

#### Overrides

[XObject](../wiki/XObject.XObject).[constructor](../wiki/XObject.XObject#constructor)

#### Defined in

src/XUI/XUIObject.ts:28

## Properties

### \_base\_display

• **\_base\_display**: `string` = `"block"`

#### Defined in

src/XUI/XUIObject.ts:19

___

### \_children

• **\_children**: [`XObject`](../wiki/XObject.XObject)[]

#### Inherited from

[XObject](../wiki/XObject.XObject).[_children](../wiki/XObject.XObject#_children)

#### Defined in

[src/XObject.ts:25](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XObject.ts#L25)

___

### \_data\_source

• **\_data\_source**: `string`

#### Defined in

src/XUI/XUIObject.ts:21

___

### \_dom\_object

• `Private` **\_dom\_object**: `any`

#### Defined in

src/XUI/XUIObject.ts:16

___

### \_format

• **\_format**: `string`

#### Defined in

src/XUI/XUIObject.ts:23

___

### \_html

• **\_html**: `string`

#### Defined in

src/XUI/XUIObject.ts:18

___

### \_html\_ns

• **\_html\_ns**: `string`

#### Defined in

src/XUI/XUIObject.ts:15

___

### \_html\_tag

• **\_html\_tag**: `string`

#### Defined in

src/XUI/XUIObject.ts:14

___

### \_ignore

• **\_ignore**: `Object`

#### Defined in

src/XUI/XUIObject.ts:24

___

### \_on\_frame\_skip\_data\_source

• **\_on\_frame\_skip\_data\_source**: `any`

#### Defined in

src/XUI/XUIObject.ts:22

___

### \_type

• **\_type**: `string`

#### Defined in

src/XUI/XUIObject.ts:17

___

### text

• **text**: `string`

#### Defined in

src/XUI/XUIObject.ts:20

## Accessors

### DOMElementFromHTML

• `get` **DOMElementFromHTML**(): `HTMLElement`

return the do

#### Returns

`HTMLElement`

#### Defined in

src/XUI/XUIObject.ts:129

## Methods

### append

▸ **append**(`xObject`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObject` | [`XUIObject`](../wiki/XUI.XUIObject.XUIObject) |

#### Returns

`void`

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

[XObject](../wiki/XObject.XObject).[execute](../wiki/XObject.XObject#execute)

#### Defined in

[src/XObject.ts:99](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XObject.ts#L99)

___

### getDOMObject

▸ **getDOMObject**(): `Element`

#### Returns

`Element`

#### Defined in

src/XUI/XUIObject.ts:78

___

### getHTML

▸ **getHTML**(): `string`

#### Returns

`string`

#### Defined in

src/XUI/XUIObject.ts:112

___

### hide

▸ **hide**(): `void`

#### Returns

`void`

#### Defined in

src/XUI/XUIObject.ts:160

___

### init

▸ **init**(): `void`

occurs on Xpell.init

#### Returns

`void`

#### Overrides

[XObject](../wiki/XObject.XObject).[init](../wiki/XObject.XObject#init)

#### Defined in

src/XUI/XUIObject.ts:54

___

### log

▸ **log**(): `void`

#### Returns

`void`

#### Overrides

[XObject](../wiki/XObject.XObject).[log](../wiki/XObject.XObject#log)

#### Defined in

src/XUI/XUIObject.ts:68

___

### onCreate

▸ **onCreate**(): `Promise`<`void`\>

this method triggered after the HTML DOM object has been created and added to the parent element

#### Returns

`Promise`<`void`\>

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

#### Overrides

[XObject](../wiki/XObject.XObject).[onFrame](../wiki/XObject.XObject#onframe)

#### Defined in

src/XUI/XUIObject.ts:192

___

### onMount

▸ **onMount**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

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

#### Overrides

[XObject](../wiki/XObject.XObject).[parse](../wiki/XObject.XObject#parse)

#### Defined in

src/XUI/XUIObject.ts:59

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

#### Defined in

src/XUI/XUIObject.ts:140

___

### show

▸ **show**(): `void`

#### Returns

`void`

#### Defined in

src/XUI/XUIObject.ts:154
