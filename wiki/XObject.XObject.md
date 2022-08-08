# Class: XObject

[XObject](../wiki/XObject).XObject

## Hierarchy

- **`XObject`**

  ↳ [`XUIObject`](../wiki/XUI.XUIObject.XUIObject)

## Implements

- [`IXObjectData`](../wiki/XObject.IXObjectData)

## Indexable

▪ [k: `string`]: `string` \| ``null`` \| [] \| `undefined` \| `Function` \| `boolean` \| `number` \| {}

## Table of contents

### Constructors

- [constructor](../wiki/XObject.XObject#constructor)

### Properties

- [\_children](../wiki/XObject.XObject#_children)

### Methods

- [execute](../wiki/XObject.XObject#execute)
- [init](../wiki/XObject.XObject#init)
- [log](../wiki/XObject.XObject#log)
- [onFrame](../wiki/XObject.XObject#onframe)
- [parse](../wiki/XObject.XObject#parse)

## Constructors

### constructor

• **new XObject**(`data`, `defaults?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IXObjectData`](../wiki/XObject.IXObjectData) |
| `defaults?` | [`IXObjectData`](../wiki/XObject.IXObjectData) |

#### Defined in

[src/XObject.ts:27](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObject.ts#L27)

## Properties

### \_children

• **\_children**: [`XObject`](../wiki/XObject.XObject)[]

#### Implementation of

[IXObjectData](../wiki/XObject.IXObjectData).[_children](../wiki/XObject.IXObjectData#_children)

#### Defined in

[src/XObject.ts:25](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObject.ts#L25)

## Methods

### execute

▸ **execute**(`xCommand`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | [`XCommand`](../wiki/XCommand.XCommand) |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/XObject.ts:99](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObject.ts#L99)

___

### init

▸ **init**(): `void`

occurs on Xpell.init
must override

#### Returns

`void`

#### Defined in

[src/XObject.ts:53](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObject.ts#L53)

___

### log

▸ **log**(): `void`

#### Returns

`void`

#### Defined in

[src/XObject.ts:67](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObject.ts#L67)

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`<`void`\>

triggers from Xpell frame

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/XObject.ts:91](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObject.ts#L91)

___

### parse

▸ **parse**(`data`, `ignore?`): `void`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `data` | [`IXObjectData`](../wiki/XObject.IXObjectData) | `undefined` |
| `ignore` | [`wordsList`](../wiki/XObject#wordslist) | `reservedWords` |

#### Returns

`void`

#### Defined in

[src/XObject.ts:58](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObject.ts#L58)
