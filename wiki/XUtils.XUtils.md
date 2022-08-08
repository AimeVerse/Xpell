# Class: XUtils

[XUtils](../wiki/XUtils).XUtils

## Table of contents

### Constructors

- [constructor](../wiki/XUtils.XUtils#constructor)

### Methods

- [createIgnoreList](../wiki/XUtils.XUtils#createignorelist)
- [decode](../wiki/XUtils.XUtils#decode)
- [deg2Rad](../wiki/XUtils.XUtils#deg2rad)
- [encode](../wiki/XUtils.XUtils#encode)
- [guid](../wiki/XUtils.XUtils#guid)
- [mergeDefaultsWithData](../wiki/XUtils.XUtils#mergedefaultswithdata)

## Constructors

### constructor

• **new XUtils**()

## Methods

### createIgnoreList

▸ `Static` **createIgnoreList**(`list`, `reservedWords`): `Object`

create ignore list for parser to ignore spells words

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `list` | `string` | list of reserved words (comma separated) |
| `reservedWords` | `Object` | - |

#### Returns

`Object`

#### Defined in

[src/XUtils.ts:13](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XUtils.ts#L13)

___

### decode

▸ `Static` **decode**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/XUtils.ts:66](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XUtils.ts#L66)

___

### deg2Rad

▸ `Static` **deg2Rad**(`degrees`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `degrees` | `number` |

#### Returns

`number`

#### Defined in

[src/XUtils.ts:57](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XUtils.ts#L57)

___

### encode

▸ `Static` **encode**(`str`): `string`

#### Parameters

| Name | Type |
| :------ | :------ |
| `str` | `string` |

#### Returns

`string`

#### Defined in

[src/XUtils.ts:62](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XUtils.ts#L62)

___

### guid

▸ `Static` **guid**(): `string`

#### Returns

`string`

#### Defined in

[src/XUtils.ts:21](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XUtils.ts#L21)

___

### mergeDefaultsWithData

▸ `Static` **mergeDefaultsWithData**(`data`, `defaults`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | `Object` |
| `defaults` | `Object` |

#### Returns

`void`

#### Defined in

[src/XUtils.ts:35](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XUtils.ts#L35)
