[xpell](../README.md) / [Modules](../modules.md) / [Wormholes/Wormholes](../modules/Wormholes_Wormholes.md) / WormholeInstance

# Class: WormholeInstance

[Wormholes/Wormholes](../modules/Wormholes_Wormholes.md).WormholeInstance

## Table of contents

### Constructors

- [constructor](Wormholes_Wormholes.WormholeInstance.md#constructor)

### Properties

- [\_data\_waiters](Wormholes_Wormholes.WormholeInstance.md#_data_waiters)
- [\_log\_rules](Wormholes_Wormholes.WormholeInstance.md#_log_rules)
- [\_on\_open](Wormholes_Wormholes.WormholeInstance.md#_on_open)
- [\_ready](Wormholes_Wormholes.WormholeInstance.md#_ready)
- [\_ws](Wormholes_Wormholes.WormholeInstance.md#_ws)

### Accessors

- [verbose](Wormholes_Wormholes.WormholeInstance.md#verbose)

### Methods

- [close](Wormholes_Wormholes.WormholeInstance.md#close)
- [createMessage](Wormholes_Wormholes.WormholeInstance.md#createmessage)
- [onOpen](Wormholes_Wormholes.WormholeInstance.md#onopen)
- [open](Wormholes_Wormholes.WormholeInstance.md#open)
- [send](Wormholes_Wormholes.WormholeInstance.md#send)
- [sendSync](Wormholes_Wormholes.WormholeInstance.md#sendsync)
- [stringify](Wormholes_Wormholes.WormholeInstance.md#stringify)

## Constructors

### constructor

• **new WormholeInstance**(): [`WormholeInstance`](Wormholes_Wormholes.WormholeInstance.md)

#### Returns

[`WormholeInstance`](Wormholes_Wormholes.WormholeInstance.md)

#### Defined in

[Wormholes/Wormholes.ts:56](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L56)

## Properties

### \_data\_waiters

• **\_data\_waiters**: `WaitersPack`

#### Defined in

[Wormholes/Wormholes.ts:52](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L52)

___

### \_log\_rules

• **\_log\_rules**: `Object`

#### Index signature

▪ [key: `string`]: `boolean`

#### Defined in

[Wormholes/Wormholes.ts:53](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L53)

___

### \_on\_open

• `Optional` **\_on\_open**: `CallableFunction`

#### Defined in

[Wormholes/Wormholes.ts:54](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L54)

___

### \_ready

• **\_ready**: `boolean`

#### Defined in

[Wormholes/Wormholes.ts:51](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L51)

___

### \_ws

• **\_ws**: ``null`` \| `WebSocket`

#### Defined in

[Wormholes/Wormholes.ts:50](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L50)

## Accessors

### verbose

• `set` **verbose**(`val`): `void`

Set the log rules for the wormhole

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Defined in

[Wormholes/Wormholes.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L73)

## Methods

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

[Wormholes/Wormholes.ts:169](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L169)

___

### createMessage

▸ **createMessage**(`msg`, `type?`): `WormholeMessage`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `msg` | `object` | `undefined` |
| `type` | [`MessageType`](../enums/Wormholes_Wormholes.MessageType.md) | `MessageType.JSON` |

#### Returns

`WormholeMessage`

#### Defined in

[Wormholes/Wormholes.ts:84](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L84)

___

### onOpen

▸ **onOpen**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | `CallableFunction` |

#### Returns

`void`

#### Defined in

[Wormholes/Wormholes.ts:236](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L236)

___

### open

▸ **open**(`url`): `void`

Opens a Wormhole to the PAI-BOT on the server (client-to-server wormhole)

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[Wormholes/Wormholes.ts:97](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L97)

___

### send

▸ **send**(`message`, `cb`, `type?`): `void`

sends the message to the server (asynchronous) and return the result in a callback function

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `any` | `undefined` | the message to send |
| `cb` | `CallableFunction` | `undefined` | Callback Function (data: string) => void |
| `type` | [`MessageType`](../enums/Wormholes_Wormholes.MessageType.md) | `MessageType.JSON` | type of the message MessageType.JSON / MessageType.Text |

#### Returns

`void`

#### Defined in

[Wormholes/Wormholes.ts:179](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L179)

___

### sendSync

▸ **sendSync**(`message`, `checkXProtocol?`): `Promise`\<`any`\>

Sends the message to the server and return the result as a response (synchronous)

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `message` | `any` | `undefined` | the message to send |
| `checkXProtocol` | `boolean` | `true` | check the result for XProtocol (True by default, if false the response will be return as is) |

#### Returns

`Promise`\<`any`\>

#### Defined in

[Wormholes/Wormholes.ts:205](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L205)

___

### stringify

▸ **stringify**(`obj`, `esc?`): `string`

#### Parameters

| Name | Type | Default value |
| :------ | :------ | :------ |
| `obj` | `object` | `undefined` |
| `esc` | `boolean` | `false` |

#### Returns

`string`

#### Defined in

[Wormholes/Wormholes.ts:229](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Wormholes/Wormholes.ts#L229)
