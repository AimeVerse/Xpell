[xpell](../README.md) / [Modules](../modules.md) / [Core/XCommand](../modules/Core_XCommand.md) / XCommand

# Class: XCommand

[Core/XCommand](../modules/Core_XCommand.md).XCommand

XCommand class - this command is being sent to the Xpell parser or every XModule/XObject for execution

## Table of contents

### Constructors

- [constructor](Core_XCommand.XCommand.md#constructor)

### Properties

- [\_module](Core_XCommand.XCommand.md#_module)
- [\_object](Core_XCommand.XCommand.md#_object)
- [\_op](Core_XCommand.XCommand.md#_op)
- [\_params](Core_XCommand.XCommand.md#_params)
- [d](Core_XCommand.XCommand.md#d)

### Methods

- [getParam](Core_XCommand.XCommand.md#getparam)

## Constructors

### constructor

• **new XCommand**(`data?`): [`XCommand`](Core_XCommand.XCommand.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data?` | [`XCommandData`](../modules/Core_XCommand.md#xcommanddata) |

#### Returns

[`XCommand`](Core_XCommand.XCommand.md)

#### Defined in

[Core/XCommand.ts:49](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XCommand.ts#L49)

## Properties

### \_module

• **\_module**: `string`

The XModule to handle to command

#### Defined in

[Core/XCommand.ts:24](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XCommand.ts#L24)

___

### \_object

• `Optional` **\_object**: `string`

The XObject that should handle the command (optional - uses only to send XCommand to specific object)

#### Defined in

[Core/XCommand.ts:29](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XCommand.ts#L29)

___

### \_op

• **\_op**: `string`

The command operation (op/method) to execute

#### Defined in

[Core/XCommand.ts:34](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XCommand.ts#L34)

___

### \_params

• `Optional` **\_params**: `Object`

command parameters array

#### Index signature

▪ [k: `string`]: `string` \| `number` \| `Function`

#### Defined in

[Core/XCommand.ts:39](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XCommand.ts#L39)

___

### d

• **d**: `number`

XCommand create date timestamp

#### Defined in

[Core/XCommand.ts:47](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XCommand.ts#L47)

## Methods

### getParam

▸ **getParam**(`position`, `name`, `defaultValue`): `any`

Gets th parameter value from the XCommand whether it has a name or just a position
There are 2 ways to send XCommand with parameters: 
 1. <module> <op> <param-0> <param-1> <param-2>     // position is for this case
 2. <module> <op> param-name:param-value            // name is for this case

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `position` | `number` | the position of the parameter if no name is send |
| `name` | `string` | the name of the parameter |
| `defaultValue` | `any` | the default value if none above exists |

#### Returns

`any`

the actual parameter value

#### Defined in

[Core/XCommand.ts:67](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XCommand.ts#L67)
