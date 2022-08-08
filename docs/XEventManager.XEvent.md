# Class: XEvent

[XEventManager](../wiki/XEventManager).XEvent

## Hierarchy

- `CustomEvent`<[`XEvent`](../wiki/XEventManager.XEvent)\>

  ↳ **`XEvent`**

## Table of contents

### Constructors

- [constructor](../wiki/XEventManager.XEvent#constructor)

### Properties

- [AT\_TARGET](../wiki/XEventManager.XEvent#at_target)
- [BUBBLING\_PHASE](../wiki/XEventManager.XEvent#bubbling_phase)
- [CAPTURING\_PHASE](../wiki/XEventManager.XEvent#capturing_phase)
- [NONE](../wiki/XEventManager.XEvent#none)
- [bubbles](../wiki/XEventManager.XEvent#bubbles)
- [cancelBubble](../wiki/XEventManager.XEvent#cancelbubble)
- [cancelable](../wiki/XEventManager.XEvent#cancelable)
- [composed](../wiki/XEventManager.XEvent#composed)
- [currentTarget](../wiki/XEventManager.XEvent#currenttarget)
- [defaultPrevented](../wiki/XEventManager.XEvent#defaultprevented)
- [detail](../wiki/XEventManager.XEvent#detail)
- [eventPhase](../wiki/XEventManager.XEvent#eventphase)
- [isTrusted](../wiki/XEventManager.XEvent#istrusted)
- [returnValue](../wiki/XEventManager.XEvent#returnvalue)
- [srcElement](../wiki/XEventManager.XEvent#srcelement)
- [target](../wiki/XEventManager.XEvent#target)
- [timeStamp](../wiki/XEventManager.XEvent#timestamp)
- [type](../wiki/XEventManager.XEvent#type)

### Methods

- [composedPath](../wiki/XEventManager.XEvent#composedpath)
- [fire](../wiki/XEventManager.XEvent#fire)
- [initCustomEvent](../wiki/XEventManager.XEvent#initcustomevent)
- [initEvent](../wiki/XEventManager.XEvent#initevent)
- [preventDefault](../wiki/XEventManager.XEvent#preventdefault)
- [stopImmediatePropagation](../wiki/XEventManager.XEvent#stopimmediatepropagation)
- [stopPropagation](../wiki/XEventManager.XEvent#stoppropagation)

## Constructors

### constructor

• **new XEvent**(`type_arg`, `options?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `type_arg` | `any` |
| `options?` | `any` |

#### Overrides

CustomEvent&lt;XEvent\&gt;.constructor

#### Defined in

[src/XEventManager.ts:28](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XEventManager.ts#L28)

## Properties

### AT\_TARGET

• `Readonly` **AT\_TARGET**: `number`

#### Inherited from

CustomEvent.AT\_TARGET

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5050

___

### BUBBLING\_PHASE

• `Readonly` **BUBBLING\_PHASE**: `number`

#### Inherited from

CustomEvent.BUBBLING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5051

___

### CAPTURING\_PHASE

• `Readonly` **CAPTURING\_PHASE**: `number`

#### Inherited from

CustomEvent.CAPTURING\_PHASE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5052

___

### NONE

• `Readonly` **NONE**: `number`

#### Inherited from

CustomEvent.NONE

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5053

___

### bubbles

• `Readonly` **bubbles**: `boolean`

Returns true or false depending on how event was initialized. True if event goes through its target's ancestors in reverse tree order, and false otherwise.

#### Inherited from

CustomEvent.bubbles

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5016

___

### cancelBubble

• **cancelBubble**: `boolean`

#### Inherited from

CustomEvent.cancelBubble

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5017

___

### cancelable

• `Readonly` **cancelable**: `boolean`

Returns true or false depending on how event was initialized. Its return value does not always carry meaning, but true can indicate that part of the operation during which event was dispatched, can be canceled by invoking the preventDefault() method.

#### Inherited from

CustomEvent.cancelable

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5019

___

### composed

• `Readonly` **composed**: `boolean`

Returns true or false depending on how event was initialized. True if event invokes listeners past a ShadowRoot node that is the root of its target, and false otherwise.

#### Inherited from

CustomEvent.composed

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5021

___

### currentTarget

• `Readonly` **currentTarget**: `EventTarget`

Returns the object whose event listener's callback is currently being invoked.

#### Inherited from

CustomEvent.currentTarget

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5023

___

### defaultPrevented

• `Readonly` **defaultPrevented**: `boolean`

Returns true if preventDefault() was invoked successfully to indicate cancelation, and false otherwise.

#### Inherited from

CustomEvent.defaultPrevented

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5025

___

### detail

• `Readonly` **detail**: [`XEvent`](../wiki/XEventManager.XEvent)

Returns any custom data event was created with. Typically used for synthetic events.

#### Inherited from

CustomEvent.detail

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3768

___

### eventPhase

• `Readonly` **eventPhase**: `number`

Returns the event's phase, which is one of NONE, CAPTURING_PHASE, AT_TARGET, and BUBBLING_PHASE.

#### Inherited from

CustomEvent.eventPhase

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5027

___

### isTrusted

• `Readonly` **isTrusted**: `boolean`

Returns true if event was dispatched by the user agent, and false otherwise.

#### Inherited from

CustomEvent.isTrusted

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5029

___

### returnValue

• **returnValue**: `boolean`

**`Deprecated`**

#### Inherited from

CustomEvent.returnValue

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5031

___

### srcElement

• `Readonly` **srcElement**: `EventTarget`

**`Deprecated`**

#### Inherited from

CustomEvent.srcElement

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5033

___

### target

• `Readonly` **target**: `EventTarget`

Returns the object to which event is dispatched (its target).

#### Inherited from

CustomEvent.target

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5035

___

### timeStamp

• `Readonly` **timeStamp**: `number`

Returns the event's timestamp as the number of milliseconds measured relative to the time origin.

#### Inherited from

CustomEvent.timeStamp

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5037

___

### type

• `Readonly` **type**: `string`

Returns the type of event, e.g. "click", "hashchange", or "submit".

#### Inherited from

CustomEvent.type

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5039

## Methods

### composedPath

▸ **composedPath**(): `EventTarget`[]

Returns the invocation target objects of event's path (objects on which listeners will be invoked), except for any nodes in shadow trees of which the shadow root's mode is "closed" that are not reachable from event's currentTarget.

#### Returns

`EventTarget`[]

#### Inherited from

CustomEvent.composedPath

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5041

___

### fire

▸ **fire**(): `Promise`<`void`\>

#### Returns

`Promise`<`void`\>

#### Defined in

[src/XEventManager.ts:32](https://github.com/fridman-tamir/XPell/blob/317d84a/src/XEventManager.ts#L32)

___

### initCustomEvent

▸ **initCustomEvent**(`type`, `bubbles?`, `cancelable?`, `detail?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |
| `detail?` | [`XEvent`](../wiki/XEventManager.XEvent) |

#### Returns

`void`

#### Inherited from

CustomEvent.initCustomEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:3770

___

### initEvent

▸ **initEvent**(`type`, `bubbles?`, `cancelable?`): `void`

**`Deprecated`**

#### Parameters

| Name | Type |
| :------ | :------ |
| `type` | `string` |
| `bubbles?` | `boolean` |
| `cancelable?` | `boolean` |

#### Returns

`void`

#### Inherited from

CustomEvent.initEvent

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5043

___

### preventDefault

▸ **preventDefault**(): `void`

If invoked when the cancelable attribute value is true, and while executing a listener for the event with passive set to false, signals to the operation that caused event to be dispatched that it needs to be canceled.

#### Returns

`void`

#### Inherited from

CustomEvent.preventDefault

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5045

___

### stopImmediatePropagation

▸ **stopImmediatePropagation**(): `void`

Invoking this method prevents event from reaching any registered event listeners after the current one finishes running and, when dispatched in a tree, also prevents event from reaching any other objects.

#### Returns

`void`

#### Inherited from

CustomEvent.stopImmediatePropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5047

___

### stopPropagation

▸ **stopPropagation**(): `void`

When dispatched in a tree, invoking this method prevents event from reaching any objects other than the current object.

#### Returns

`void`

#### Inherited from

CustomEvent.stopPropagation

#### Defined in

node_modules/typescript/lib/lib.dom.d.ts:5049
