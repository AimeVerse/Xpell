[xpell](../README.md) / [Modules](../modules.md) / Core/XEventManager

# Module: Core/XEventManager

## Table of contents

### References

- [default](Core_XEventManager.md#default)

### Classes

- [\_XEventManager](../classes/Core_XEventManager._XEventManager.md)

### Interfaces

- [XEventListener](../interfaces/Core_XEventManager.XEventListener.md)

### Type Aliases

- [HTMLEventListenersIndex](Core_XEventManager.md#htmleventlistenersindex)
- [XEvent](Core_XEventManager.md#xevent)
- [XEventListenerOptions](Core_XEventManager.md#xeventlisteneroptions)

### Variables

- [XEventManager](Core_XEventManager.md#xeventmanager)

## References

### default

Renames and re-exports [XEventManager](Core_XEventManager.md#xeventmanager)

## Type Aliases

### HTMLEventListenersIndex

Ƭ **HTMLEventListenersIndex**: `Object`

#### Index signature

▪ [id: `string`]: \{ `_event_name`: `string` ; `_listener`: `Function` ; `_object?`: `any`  }

#### Defined in

[Core/XEventManager.ts:35](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L35)

___

### XEvent

Ƭ **XEvent**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_data` | `any` |
| `_id` | `number` |
| `_name` | `string` |

#### Defined in

[Core/XEventManager.ts:23](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L23)

___

### XEventListenerOptions

Ƭ **XEventListenerOptions**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_once?` | `boolean` |
| `_support_html?` | `boolean` |

#### Defined in

[Core/XEventManager.ts:43](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L43)

## Variables

### XEventManager

• `Const` **XEventManager**: [`_XEventManager`](../classes/Core_XEventManager._XEventManager.md)

#### Defined in

[Core/XEventManager.ts:231](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XEventManager.ts#L231)
