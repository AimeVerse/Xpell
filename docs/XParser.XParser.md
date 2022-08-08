# Class: XParser

[XParser](../wiki/XParser).XParser

Xpell Parser

## Table of contents

### Constructors

- [constructor](../wiki/XParser.XParser#constructor)

### Properties

- [html2XMap](../wiki/XParser.XParser#html2xmap)

### Methods

- [addHtml2XpellMapItem](../wiki/XParser.XParser#addhtml2xpellmapitem)
- [fixArgumentValue](../wiki/XParser.XParser#fixargumentvalue)
- [getNextArgumentIndex](../wiki/XParser.XParser#getnextargumentindex)
- [parse](../wiki/XParser.XParser#parse)
- [parseArguments](../wiki/XParser.XParser#parsearguments)
- [parseXpell](../wiki/XParser.XParser#parsexpell)
- [xml2Xpell](../wiki/XParser.XParser#xml2xpell)
- [xmlString2Xpell](../wiki/XParser.XParser#xmlstring2xpell)
- [xpellify](../wiki/XParser.XParser#xpellify)

## Constructors

### constructor

• **new XParser**()

## Properties

### html2XMap

▪ `Static` `Private` **html2XMap**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `attributes` | { `id`: `string` = "\_id" } |
| `attributes.id` | `string` |
| `elements` | { `a`: `string` = "link"; `aside`: `string` = "xhtml"; `b`: `string` = "xhtml"; `div`: `string` = "view"; `h1`: `string` = "xhtml"; `h2`: `string` = "xhtml"; `h3`: `string` = "xhtml"; `h4`: `string` = "xhtml"; `h5`: `string` = "xhtml"; `img`: `string` = "image"; `li`: `string` = "xhtml"; `ol`: `string` = "xhtml"; `p`: `string` = "xhtml"; `small`: `string` = "xhtml"; `span`: `string` = "xhtml"; `table`: `string` = "xhtml"; `tbody`: `string` = "xhtml"; `td`: `string` = "xhtml"; `th`: `string` = "xhtml"; `thead`: `string` = "xhtml"; `tr`: `string` = "xhtml"; `ul`: `string` = "xhtml" } |
| `elements.a` | `string` |
| `elements.aside` | `string` |
| `elements.b` | `string` |
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

[src/XParser.ts:11](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L11)

## Methods

### addHtml2XpellMapItem

▸ `Static` **addHtml2XpellMapItem**(`htmlElement`, `xpellElement`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `htmlElement` | `string` |
| `xpellElement` | `string` |

#### Returns

`void`

#### Defined in

[src/XParser.ts:27](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L27)

___

### fixArgumentValue

▸ `Static` **fixArgumentValue**(`arg`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `arg` | `any` |

#### Returns

`string`

#### Defined in

[src/XParser.ts:198](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L198)

___

### getNextArgumentIndex

▸ `Static` **getNextArgumentIndex**(`str`): `number`

Get next argument from string

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `any` |

#### Returns

`number`

indexOf the end of the argument

#### Defined in

[src/XParser.ts:225](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L225)

___

### parse

▸ `Static` **parse**(`txt`): [`XCommand`](../wiki/XCommand.XCommand)

convert text command to Xpell json command

#### Parameters

| Name | Type |
| :------ | :------ |
| `txt` | `string` |

#### Returns

[`XCommand`](../wiki/XCommand.XCommand)

#### Defined in

[src/XParser.ts:36](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L36)

___

### parseArguments

▸ `Static` **parseArguments**(`code`): `string`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `code` | `string` |

#### Returns

`string`[]

#### Defined in

[src/XParser.ts:98](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L98)

___

### parseXpell

▸ `Static` **parseXpell**(`rawXpell`): [`XCommand`](../wiki/XCommand.XCommand)

#### Parameters

| Name | Type |
| :------ | :------ |
| `rawXpell` | `any` |

#### Returns

[`XCommand`](../wiki/XCommand.XCommand)

#### Defined in

[src/XParser.ts:64](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L64)

___

### xml2Xpell

▸ `Static` **xml2Xpell**(`xmlNode`, `forceXhtml?`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xmlNode` | `any` |
| `forceXhtml?` | `any` |

#### Returns

`Object`

#### Defined in

[src/XParser.ts:154](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L154)

___

### xmlString2Xpell

▸ `Static` **xmlString2Xpell**(`xmlString`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xmlString` | `any` |

#### Returns

`Object`

#### Defined in

[src/XParser.ts:145](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L145)

___

### xpellify

▸ `Static` **xpellify**(`XP2Json`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `XP2Json` | `any` |

#### Returns

`any`

#### Defined in

[src/XParser.ts:125](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XParser.ts#L125)
