[xpell](../README.md) / [Modules](../modules.md) / [Core/XEventManager](../modules/Core_XEventManager.md) / \_XEventManager

# Class: \_XEventManager

[Core/XEventManager](../modules/Core_XEventManager.md)._XEventManager

XEventDispatcher is the system event dispatcher and manager

## Table of contents

### Constructors

- [constructor](Core_XEventManager._XEventManager.md#constructor)

### Properties

- [\_events](Core_XEventManager._XEventManager.md#_events)
- [\_html\_event\_listeners](Core_XEventManager._XEventManager.md#_html_event_listeners)
- [\_listeners\_to\_event\_index](Core_XEventManager._XEventManager.md#_listeners_to_event_index)
- [\_log\_rules](Core_XEventManager._XEventManager.md#_log_rules)

### Methods

- [fire](Core_XEventManager._XEventManager.md#fire)
- [on](Core_XEventManager._XEventManager.md#on)
- [onEvent](Core_XEventManager._XEventManager.md#onevent)
- [once](Core_XEventManager._XEventManager.md#once)
- [remove](Core_XEventManager._XEventManager.md#remove)
- [removeEvent](Core_XEventManager._XEventManager.md#removeevent)

## Constructors

### constructor

• **new _XEventManager**(): [`_XEventManager`](Core_XEventManager._XEventManager.md)

#### Returns

[`_XEventManager`](Core_XEventManager._XEventManager.md)

#### Defined in

[Core/XEventManager.ts:83](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L83)

## Properties

### \_events

• `Protected` **\_events**: `Object`

#### Index signature

▪ [name: `string`]: [`XEventListener`](../interfaces/Core_XEventManager.XEventListener.md)[]

#### Defined in

[Core/XEventManager.ts:79](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L79)

___

### \_html\_event\_listeners

• `Protected` **\_html\_event\_listeners**: [`HTMLEventListenersIndex`](../modules/Core_XEventManager.md#htmleventlistenersindex) = `{}`

#### Defined in

[Core/XEventManager.ts:81](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L81)

___

### \_listeners\_to\_event\_index

• `Protected` **\_listeners\_to\_event\_index**: `Object` = `{}`

#### Index signature

▪ [listernerId: `string`]: `string`

#### Defined in

[Core/XEventManager.ts:80](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L80)

___

### \_log\_rules

• **\_log\_rules**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `fire` | `any` |
| `register` | `boolean` |
| `remove` | `boolean` |

#### Defined in

[Core/XEventManager.ts:67](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L67)

## Methods

### fire

▸ **fire**(`eventName`, `data?`, `callObject?`): `Promise`\<`void`\>

This method is used to fire an event

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | the name of the event |
| `data?` | `any` | the data to pass to the event |
| `callObject?` | `any` | - |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Core/XEventManager.ts:210](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L210)

___

### on

▸ **on**(`eventName`, `listener`, `options?`, `callObject?`): `string`

This method listen to event name and register the listener function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | event name to listen to |
| `listener` | `Function` | listener function to be called when event fired |
| `options` | [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions) | - |
| `callObject?` | `any` | - |

#### Returns

`string`

listener id

**`Example`**

```ts
// listen to event name "my-event" and display the event data to the console when fired
   _xem.on("my-event",(data)=>{
        console.log("XEM Event " + data)
   })
```

#### Defined in

[Core/XEventManager.ts:128](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L128)

___

### onEvent

▸ **onEvent**(`eventName`, `listener`, `options?`, `callObj?`): `string`

This method listen to event name and register the listener function

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `eventName` | `string` | event name to listen to |
| `listener` | `Function` | listener function to be called when event fired |
| `options?` | [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions) | - |
| `callObj?` | `any` | - |

#### Returns

`string`

listener id

**`Example`**

```ts
// listen to event name "my-event" and display the event data to the console when fired
   _xem.on("my-event",(data)=>{
        console.log("XEM Event " + data)
   })
```

#### Defined in

[Core/XEventManager.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L98)

___

### once

▸ **once**(`eventName`, `listener`, `callObject?`): `string`

This method listen to event name and register the listener function
The listener will be removed after first fire

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `eventName` | `string` | `undefined` | event name to listen to |
| `listener` | `Function` | `undefined` | listener function to be called when event fired |
| `callObject` | `any` | `null` | - |

#### Returns

`string`

listener id

#### Defined in

[Core/XEventManager.ts:164](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L164)

___

### remove

▸ **remove**(`listenerId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `listenerId` | `string` |

#### Returns

`void`

#### Defined in

[Core/XEventManager.ts:191](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L191)

___

### removeEvent

▸ **removeEvent**(`listenerId`): `void`

This method remove listener by listener id

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `listenerId` | `string` | listener id to remove |

#### Returns

`void`

#### Defined in

[Core/XEventManager.ts:172](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L172)
