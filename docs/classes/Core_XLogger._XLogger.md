[xpell](../README.md) / [Modules](../modules.md) / [Core/XLogger](../modules/Core_XLogger.md) / \_XLogger

# Class: \_XLogger

[Core/XLogger](../modules/Core_XLogger.md)._XLogger

XLoggerEngine Xpell Logger engine

## Table of contents

### Constructors

- [constructor](Core_XLogger._XLogger.md#constructor)

### Properties

- [enabled](Core_XLogger._XLogger.md#enabled)
- [showDate](Core_XLogger._XLogger.md#showdate)
- [showTime](Core_XLogger._XLogger.md#showtime)

### Methods

- [error](Core_XLogger._XLogger.md#error)
- [getLogDateTimeSignature](Core_XLogger._XLogger.md#getlogdatetimesignature)
- [log](Core_XLogger._XLogger.md#log)

## Constructors

### constructor

• **new _XLogger**(): [`_XLogger`](Core_XLogger._XLogger.md)

#### Returns

[`_XLogger`](Core_XLogger._XLogger.md)

#### Defined in

[Core/XLogger.ts:25](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XLogger.ts#L25)

## Properties

### enabled

• **enabled**: `boolean` = `true`

Enable logger activity if false no logs will be displayed

#### Defined in

[Core/XLogger.ts:15](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XLogger.ts#L15)

___

### showDate

• **showDate**: `boolean` = `false`

Show the date in every log message

#### Defined in

[Core/XLogger.ts:19](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XLogger.ts#L19)

___

### showTime

• **showTime**: `boolean` = `true`

Show the Time in every log message

#### Defined in

[Core/XLogger.ts:23](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XLogger.ts#L23)

## Methods

### error

▸ **error**(`message?`, `...optionalParams`): `void`

Log an error message to the output log (console)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `any` | message to present |
| `...optionalParams` | `any`[] |  |

#### Returns

`void`

#### Defined in

[Core/XLogger.ts:58](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XLogger.ts#L58)

___

### getLogDateTimeSignature

▸ **getLogDateTimeSignature**(): `string`

Generates the log output date/time signature (affected by showDate & showTime properties)

#### Returns

`string`

#### Defined in

[Core/XLogger.ts:32](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XLogger.ts#L32)

___

### log

▸ **log**(`message?`, `...optionalParams`): `void`

Log a message to the output log (console)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `message?` | `any` | message to present |
| `...optionalParams` | `any`[] |  |

#### Returns

`void`

#### Defined in

[Core/XLogger.ts:45](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XLogger.ts#L45)
