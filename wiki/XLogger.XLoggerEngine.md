# Class: XLoggerEngine

[XLogger](../wiki/XLogger).XLoggerEngine

Xpell-logger

## Table of contents

### Constructors

- [constructor](../wiki/XLogger.XLoggerEngine#constructor)

### Properties

- [enabled](../wiki/XLogger.XLoggerEngine#enabled)
- [showDate](../wiki/XLogger.XLoggerEngine#showdate)
- [showTime](../wiki/XLogger.XLoggerEngine#showtime)

### Methods

- [error](../wiki/XLogger.XLoggerEngine#error)
- [getTimeSignature](../wiki/XLogger.XLoggerEngine#gettimesignature)
- [log](../wiki/XLogger.XLoggerEngine#log)

## Constructors

### constructor

• **new XLoggerEngine**()

#### Defined in

[src/XLogger.ts:14](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XLogger.ts#L14)

## Properties

### enabled

• **enabled**: `boolean` = `true`

#### Defined in

[src/XLogger.ts:10](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XLogger.ts#L10)

___

### showDate

• **showDate**: `boolean` = `false`

#### Defined in

[src/XLogger.ts:11](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XLogger.ts#L11)

___

### showTime

• **showTime**: `boolean` = `true`

#### Defined in

[src/XLogger.ts:12](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XLogger.ts#L12)

## Methods

### error

▸ **error**(`message?`, ...`optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

[src/XLogger.ts:33](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XLogger.ts#L33)

___

### getTimeSignature

▸ `Private` **getTimeSignature**(): `string`

#### Returns

`string`

#### Defined in

[src/XLogger.ts:17](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XLogger.ts#L17)

___

### log

▸ **log**(`message?`, ...`optionalParams`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

[src/XLogger.ts:25](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XLogger.ts#L25)
