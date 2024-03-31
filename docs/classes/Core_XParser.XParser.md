[xpell](../README.md) / [Modules](../modules.md) / [Core/XParser](../modules/Core_XParser.md) / XParser

# Class: XParser

[Core/XParser](../modules/Core_XParser.md).XParser

Xpell Parser - Parse XML, HTML, Raw Text & Json to Xpell Command

## Table of contents

### Constructors

- [constructor](Core_XParser.XParser.md#constructor)

### Properties

- [html2XMap](Core_XParser.XParser.md#html2xmap)

### Methods

- [addHtml2XpellMapItem](Core_XParser.XParser.md#addhtml2xpellmapitem)
- [parse](Core_XParser.XParser.md#parse)
- [parseXpellCommand](Core_XParser.XParser.md#parsexpellcommand)
- [replaceSpacesInQuotes](Core_XParser.XParser.md#replacespacesinquotes)
- [xml2Xpell](Core_XParser.XParser.md#xml2xpell)
- [xmlString2Xpell](Core_XParser.XParser.md#xmlstring2xpell)
- [xpellify](Core_XParser.XParser.md#xpellify)

## Constructors

### constructor

• **new XParser**(): [`XParser`](Core_XParser.XParser.md)

#### Returns

[`XParser`](Core_XParser.XParser.md)

## Properties

### html2XMap

▪ `Static` `Private` **html2XMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | \{ `id`: `string` = "\_id" } |
| `attributes.id` | `string` |
| `elements` | \{ `a`: `string` = "link"; `aside`: `string` = "xhtml"; `b`: `string` = "xhtml"; `canvas`: `string` = "xhtml"; `div`: `string` = "view"; `h1`: `string` = "xhtml"; `h2`: `string` = "xhtml"; `h3`: `string` = "xhtml"; `h4`: `string` = "xhtml"; `h5`: `string` = "xhtml"; `img`: `string` = "image"; `li`: `string` = "xhtml"; `ol`: `string` = "xhtml"; `p`: `string` = "xhtml"; `small`: `string` = "xhtml"; `span`: `string` = "xhtml"; `table`: `string` = "xhtml"; `tbody`: `string` = "xhtml"; `td`: `string` = "xhtml"; `th`: `string` = "xhtml"; `thead`: `string` = "xhtml"; `tr`: `string` = "xhtml"; `ul`: `string` = "xhtml" } |
| `elements.a` | `string` |
| `elements.aside` | `string` |
| `elements.b` | `string` |
| `elements.canvas` | `string` |
| `elements.div` | `string` |
| `elements.h1` | `string` |
| `elements.h2` | `string` |
| `elements.h3` | `string` |
| `elements.h4` | `string` |
| `elements.h5` | `string` |
| `elements.img` | `string` |
| `elements.li` | `string` |
| `elements.ol` | `string` |
| `elements.p` | `string` |
| `elements.small` | `string` |
| `elements.span` | `string` |
| `elements.table` | `string` |
| `elements.tbody` | `string` |
| `elements.td` | `string` |
| `elements.th` | `string` |
| `elements.thead` | `string` |
| `elements.tr` | `string` |
| `elements.ul` | `string` |

#### Defined in

[Core/XParser.ts:11](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XParser.ts#L11)

## Methods

### addHtml2XpellMapItem

▸ **addHtml2XpellMapItem**(`htmlElement`, `xpellElement`): `void`

Adds HTML-Xpell Mapping item

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `htmlElement` | `string` | HTML element to change from |
| `xpellElement` | `string` | Xpell element to change to |

#### Returns

`void`

#### Defined in

[Core/XParser.ts:33](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XParser.ts#L33)

___

### parse

▸ **parse**(`txt`, `module?`): [`XCommand`](Core_XCommand.XCommand.md)

convert text command to Xpell json command

#### Parameters

| Name | Type |
| :------ | :------ |
| `txt` | `string` |
| `module?` | `string` |

#### Returns

[`XCommand`](Core_XCommand.XCommand.md)

#### Defined in

[Core/XParser.ts:42](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XParser.ts#L42)

___

### parseXpellCommand

▸ **parseXpellCommand**(`command`, `module?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `command` | `string` |
| `module?` | `string` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_module` | `undefined` \| `string` |
| `_op` | `undefined` \| `string` |
| `_params` | `any` |

#### Defined in

[Core/XParser.ts:84](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XParser.ts#L84)

___

### replaceSpacesInQuotes

▸ **replaceSpacesInQuotes**(`inputString`, `replaceWith?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `inputString` | `string` | `undefined` |
| `replaceWith` | `string` | `'_%20_'` |

#### Returns

`string`

#### Defined in

[Core/XParser.ts:76](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XParser.ts#L76)

___

### xml2Xpell

▸ **xml2Xpell**(`xmlNode`, `forceXhtml?`): `Object`

Converts XML/HTML Document to Xpell JSON

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xmlNode` | `any` | XML Document Node |
| `forceXhtml?` | `boolean` | force Xpell XHTML for every unknown object |

#### Returns

`Object`

Xpell JSON

#### Defined in

[Core/XParser.ts:269](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XParser.ts#L269)

___

### xmlString2Xpell

▸ **xmlString2Xpell**(`xmlString`): `Object`

Converts XML/HTML string to XCommand

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xmlString` | `string` | XML string |

#### Returns

`Object`

#### Defined in

[Core/XParser.ts:254](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XParser.ts#L254)

___

### xpellify

▸ **xpellify**(`XP2Json`): `any`

Covent Xpell2 (XP2) Json to Xpell JSON

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `XP2Json` | `Object` | Xpell 2 JSON |

#### Returns

`any`

**`Deprecated`**

#### Defined in

[Core/XParser.ts:229](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XParser.ts#L229)
