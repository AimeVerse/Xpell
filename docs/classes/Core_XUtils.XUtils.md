[xpell](../README.md) / [Modules](../modules.md) / [Core/XUtils](../modules/Core_XUtils.md) / XUtils

# Class: XUtils

[Core/XUtils](../modules/Core_XUtils.md).XUtils

## Table of contents

### Constructors

- [constructor](Core_XUtils.XUtils.md#constructor)

### Methods

- [createIgnoreList](Core_XUtils.XUtils.md#createignorelist)
- [decode](Core_XUtils.XUtils.md#decode)
- [encode](Core_XUtils.XUtils.md#encode)
- [getParam](Core_XUtils.XUtils.md#getparam)
- [getRandomInt](Core_XUtils.XUtils.md#getrandomint)
- [guid](Core_XUtils.XUtils.md#guid)
- [mergeDefaultsWithData](Core_XUtils.XUtils.md#mergedefaultswithdata)

## Constructors

### constructor

• **new XUtils**(): [`XUtils`](Core_XUtils.XUtils.md)

#### Returns

[`XUtils`](Core_XUtils.XUtils.md)

## Methods

### createIgnoreList

▸ **createIgnoreList**(`list`, `reservedWords`): `Object`

create ignore list for parser to ignore spells words

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | `string` | list of reserved words (comma separated) |
| `reservedWords` | `Object` | - |

#### Returns

`Object`

#### Defined in

[Core/XUtils.ts:20](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L20)

___

### decode

▸ **decode**(`str`): `string`

Decode Base64 String to text

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | Base64 encoded string |

#### Returns

`string`

#### Defined in

[Core/XUtils.ts:87](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L87)

___

### encode

▸ **encode**(`str`): `string`

Encode string to Base-64 format

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `str` | `string` | string to encode |

#### Returns

`string`

#### Defined in

[Core/XUtils.ts:78](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L78)

___

### getParam

▸ **getParam**(`xcmd`, `paramName`, `defaultValue?`): `any`

Extracts parameter from XCommand

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `xcmd` | [`XCommand`](Core_XCommand.XCommand.md) | `undefined` | XCommand object |
| `paramName` | `string` | `undefined` | The name of the parameter to extract |
| `defaultValue` | `any` | `0` | Default value if parameter is not found |

#### Returns

`any`

#### Defined in

[Core/XUtils.ts:112](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L112)

___

### getRandomInt

▸ **getRandomInt**(`min`, `max`): `number`

Returns a random integer between min (inclusive) and max (inclusive).
The value is no lower than min (or the next integer greater than min
if min isn't an integer) and no greater than max (or the next integer
lower than max if max isn't an integer).
Using Math.round() will give you a non-uniform distribution!

#### Parameters

| Name | Type |
| :------ | :------ |
| `min` | `number` |
| `max` | `number` |

#### Returns

`number`

#### Defined in

[Core/XUtils.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L98)

___

### guid

▸ **guid**(): `string`

Generates GUID (Globally unique Identifier)

#### Returns

`string`

#### Defined in

[Core/XUtils.ts:32](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L32)

___

### mergeDefaultsWithData

▸ **mergeDefaultsWithData**(`data`, `defaults`, `force?`): `void`

Merges XDataObject with Defaults object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `IXData` | data of the Xpell command |
| `defaults` | `IXData` | defaults object to merge with |
| `force?` | `boolean` | add defaults values even if exists |

#### Returns

`void`

#### Defined in

[Core/XUtils.ts:52](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L52)
