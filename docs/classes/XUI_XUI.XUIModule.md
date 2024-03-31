[xpell](../README.md) / [Modules](../modules.md) / [XUI/XUI](../modules/XUI_XUI.md) / XUIModule

# Class: XUIModule

[XUI/XUI](../modules/XUI_XUI.md).XUIModule

XUI Module - Xpell User Interface Module for HTML and CSS

## Hierarchy

- [`XModule`](Core_XModule.XModule.md)

  ↳ **`XUIModule`**

## Table of contents

### Constructors

- [constructor](XUI_XUI.XUIModule.md#constructor)

### Properties

- [#\_object\_manger](XUI_XUI.XUIModule.md##_object_manger)
- [\_controls\_element](XUI_XUI.XUIModule.md#_controls_element)
- [\_events](XUI_XUI.XUIModule.md#_events)
- [\_first\_gesture\_occurred](XUI_XUI.XUIModule.md#_first_gesture_occurred)
- [\_id](XUI_XUI.XUIModule.md#_id)
- [\_log\_rules](XUI_XUI.XUIModule.md#_log_rules)
- [\_name](XUI_XUI.XUIModule.md#_name)
- [\_player\_element](XUI_XUI.XUIModule.md#_player_element)
- [vm](XUI_XUI.XUIModule.md#vm)

### Accessors

- [\_o](XUI_XUI.XUIModule.md#_o)
- [\_object\_manager](XUI_XUI.XUIModule.md#_object_manager)
- [om](XUI_XUI.XUIModule.md#om)

### Methods

- [\_info](XUI_XUI.XUIModule.md#_info)
- [add](XUI_XUI.XUIModule.md#add)
- [addControlsPack](XUI_XUI.XUIModule.md#addcontrolspack)
- [append](XUI_XUI.XUIModule.md#append)
- [create](XUI_XUI.XUIModule.md#create)
- [createFromTemplate](XUI_XUI.XUIModule.md#createfromtemplate)
- [createPlayer](XUI_XUI.XUIModule.md#createplayer)
- [enableFirstUserGestureEvent](XUI_XUI.XUIModule.md#enablefirstusergestureevent)
- [execute](XUI_XUI.XUIModule.md#execute)
- [getObject](XUI_XUI.XUIModule.md#getobject)
- [hide](XUI_XUI.XUIModule.md#hide)
- [importObject](XUI_XUI.XUIModule.md#importobject)
- [importObjectPack](XUI_XUI.XUIModule.md#importobjectpack)
- [importObjects](XUI_XUI.XUIModule.md#importobjects)
- [load](XUI_XUI.XUIModule.md#load)
- [loadApp](XUI_XUI.XUIModule.md#loadapp)
- [loadControl](XUI_XUI.XUIModule.md#loadcontrol)
- [loadObject](XUI_XUI.XUIModule.md#loadobject)
- [onFrame](XUI_XUI.XUIModule.md#onframe)
- [openUrl](XUI_XUI.XUIModule.md#openurl)
- [remove](XUI_XUI.XUIModule.md#remove)
- [run](XUI_XUI.XUIModule.md#run)
- [show](XUI_XUI.XUIModule.md#show)
- [toggle](XUI_XUI.XUIModule.md#toggle)
- [wrap](XUI_XUI.XUIModule.md#wrap)

## Constructors

### constructor

• **new XUIModule**(`data`): [`XUIModule`](XUI_XUI.XUIModule.md)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XModuleData`](../modules/Core_XModule.md#xmoduledata) | module data |

#### Returns

[`XUIModule`](XUI_XUI.XUIModule.md)

**`Fires`**

"xui-loaded" event

#### Overrides

[XModule](Core_XModule.XModule.md).[constructor](Core_XModule.XModule.md#constructor)

#### Defined in

XUI/XUI.ts:51

## Properties

### #\_object\_manger

• `Private` **#\_object\_manger**: [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Inherited from

[XModule](Core_XModule.XModule.md).[#_object_manger](Core_XModule.XModule.md##_object_manger)

#### Defined in

[Core/XModule.ts:62](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L62)

___

### \_controls\_element

• `Private` **\_controls\_element**: `string`

#### Defined in

XUI/XUI.ts:44

___

### \_events

• **\_events**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_loaded` | `string` |

#### Defined in

XUI/XUI.ts:40

___

### \_first\_gesture\_occurred

• **\_first\_gesture\_occurred**: `boolean`

#### Defined in

XUI/XUI.ts:37

___

### \_id

• **\_id**: `string`

#### Inherited from

[XModule](Core_XModule.XModule.md).[_id](Core_XModule.XModule.md#_id)

#### Defined in

[Core/XModule.ts:50](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L50)

___

### \_log\_rules

• **\_log\_rules**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `createObject` | `boolean` |
| `removeObject` | `boolean` |

#### Inherited from

[XModule](Core_XModule.XModule.md).[_log_rules](Core_XModule.XModule.md#_log_rules)

#### Defined in

[Core/XModule.ts:52](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L52)

___

### \_name

• **\_name**: `string`

#### Inherited from

[XModule](Core_XModule.XModule.md).[_name](Core_XModule.XModule.md#_name)

#### Defined in

[Core/XModule.ts:51](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L51)

___

### \_player\_element

• `Private` **\_player\_element**: `any`

#### Defined in

XUI/XUI.ts:45

___

### vm

• **vm**: [`XViewManager`](XUI_XViewManager.XViewManager.md)

#### Defined in

XUI/XUI.ts:36

## Accessors

### \_o

• `get` **_o**(): [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

Returns the XObject instance from the module Object Manager
Usage:
xmodule._o["object-id"] is equivalent to xmodule.getObject("object-id")

#### Returns

[`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Inherited from

XModule.\_o

#### Defined in

[Core/XModule.ts:238](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L238)

___

### \_object\_manager

• `get` **_object_manager**(): [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Returns

[`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Inherited from

XModule.\_object\_manager

#### Defined in

[Core/XModule.ts:222](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L222)

___

### om

• `get` **om**(): [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

getter for om (object manager) instance

#### Returns

[`XObjectManager`](Core_XObjectManager.XObjectManager.md)

**`Deprecated`**

- use _object_manager instead
If you wish to get an object from the object manager use
getObject directly on the module instead of om.getObject

#### Inherited from

XModule.om

#### Defined in

[Core/XModule.ts:221](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L221)

## Methods

### \_info

▸ **_info**(`xCommand`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | [`XCommand`](Core_XCommand.XCommand.md) |

#### Returns

`void`

#### Inherited from

[XModule](Core_XModule.XModule.md).[_info](Core_XModule.XModule.md#_info)

#### Defined in

[Core/XModule.ts:134](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L134)

___

### add

▸ **add**(`xData`): `any`

Create a XUIObject and mount it to the DOM parent element.
if xData._parent_element is not provided the object will be appended to the player element or to the document body if player element is not provided

#### Parameters

| Name | Type |
| :------ | :------ |
| `xData` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) |

#### Returns

`any`

XUIObject

#### Defined in

XUI/XUI.ts:74

___

### addControlsPack

▸ **addControlsPack**(`controls`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `controls` | `Object` |

#### Returns

`void`

#### Defined in

XUI/XUI.ts:201

___

### append

▸ **append**(`xobj`, `parentXobjId`): `void`

Append XUIObject to the parent XUI Object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xobj` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) \| [`XUIObject`](XUI_XUIObject.XUIObject.md) | XUIObject to append |
| `parentXobjId` | `string` | the parent XUIObject id |

#### Returns

`void`

#### Defined in

XUI/XUI.ts:105

___

### create

▸ **create**(`data`): `any`

Create a XUIObject

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | XOjectData representing the XUIObject |

#### Returns

`any`

XUIObject

#### Overrides

[XModule](Core_XModule.XModule.md).[create](Core_XModule.XModule.md#create)

#### Defined in

XUI/XUI.ts:120

___

### createFromTemplate

▸ **createFromTemplate**(`xpell2json`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xpell2json` | `Object` |

#### Returns

`any`

#### Defined in

XUI/XUI.ts:259

___

### createPlayer

▸ **createPlayer**(`playerId?`, `elementId?`, `cssClass?`): `HTMLDivElement`

This method creates a player element and append it to the DOM

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `playerId` | `string` | `"xplayer"` | optional id of the player element |
| `elementId?` | `string` | `undefined` | optional id of the element to append the player to, if not provided the player will be appended to the body |
| `cssClass?` | `string` | `undefined` | - |

#### Returns

`HTMLDivElement`

HTMLDivElement

#### Defined in

XUI/XUI.ts:291

___

### enableFirstUserGestureEvent

▸ **enableFirstUserGestureEvent**(): `void`

The method fires "first-user-gesture" event 
This method is for all Web API that requires User Gesture event.

#### Returns

`void`

**`Fire`**

"first-user-gesture"

#### Defined in

XUI/XUI.ts:269

___

### execute

▸ **execute**(`xCommand`): `Promise`\<`any`\>

execute xpell command - CLI mode

#### Parameters

| Name | Type |
| :------ | :------ |
| `xCommand` | [`XCommand`](Core_XCommand.XCommand.md) \| [`XCommandData`](../modules/Core_XCommand.md#xcommanddata) |

#### Returns

`Promise`\<`any`\>

command execution result

#### Inherited from

[XModule](Core_XModule.XModule.md).[execute](Core_XModule.XModule.md#execute)

#### Defined in

[Core/XModule.ts:167](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L167)

___

### getObject

▸ **getObject**(`objectId`): [`XObject`](Core_XObject.XObject.md)

Returns the XObject instance from the module Object Manager

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |

#### Returns

[`XObject`](Core_XObject.XObject.md)

XObject

#### Inherited from

[XModule](Core_XModule.XModule.md).[getObject](Core_XModule.XModule.md#getobject)

#### Defined in

[Core/XModule.ts:229](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L229)

___

### hide

▸ **hide**(`objectId`): `void`

Hide's XUIObject that was loaded into the XUI Object Manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `string` | the XUIObject id to hide |

#### Returns

`void`

#### Defined in

XUI/XUI.ts:318

___

### importObject

▸ **importObject**(`xObjectName`, `xObject`): `void`

Imports external objects to the engine
The object class should be like XObjects with static implementation of getObjects() method

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectName` | `string` |
| `xObject` | [`XObject`](Core_XObject.XObject.md) |

#### Returns

`void`

#### Inherited from

[XModule](Core_XModule.XModule.md).[importObject](Core_XModule.XModule.md#importobject)

#### Defined in

[Core/XModule.ts:266](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L266)

___

### importObjectPack

▸ **importObjectPack**(`xObjectPack`): `void`

Imports external object pack to the engine
The object class should be like XObjects with static implementation of getObjects() method

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectPack` | `any` |

#### Returns

`void`

#### Inherited from

[XModule](Core_XModule.XModule.md).[importObjectPack](Core_XModule.XModule.md#importobjectpack)

#### Defined in

[Core/XModule.ts:247](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L247)

___

### importObjects

▸ **importObjects**(`xObjectPack`): `void`

Imports external object pack to the engine

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectPack` | `any` |

#### Returns

`void`

**`Deprecated`**

- use importObjectPack instead

#### Inherited from

[XModule](Core_XModule.XModule.md).[importObjects](Core_XModule.XModule.md#importobjects)

#### Defined in

[Core/XModule.ts:256](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L256)

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Inherited from

[XModule](Core_XModule.XModule.md).[load](Core_XModule.XModule.md#load)

#### Defined in

[Core/XModule.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L73)

___

### loadApp

▸ **loadApp**(`xuiApp`): `void`

Loads Xpell application object

#### Parameters

| Name | Type |
| :------ | :------ |
| `xuiApp` | [`XUIApp`](../modules/XUI_XUI.md#xuiapp) |

#### Returns

`void`

#### Defined in

XUI/XUI.ts:159

___

### loadControl

▸ **loadControl**(`data`): [`XUIObject`](XUI_XUIObject.XUIObject.md)

Create a XUIObject and mount it to the DOM parent element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | the XUIObject data |

#### Returns

[`XUIObject`](XUI_XUIObject.XUIObject.md)

XUIObject

**`Deprecated`**

use XUI.add instead

#### Defined in

XUI/XUI.ts:216

___

### loadObject

▸ **loadObject**(`data`): [`XUIObject`](XUI_XUIObject.XUIObject.md)

Create a XUIObject and mount it to the DOM parent element

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | the XUIObject data |

#### Returns

[`XUIObject`](XUI_XUIObject.XUIObject.md)

XUIObject

**`Deprecated`**

use XUI.add instead

#### Defined in

XUI/XUI.ts:236

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`\<`void`\>

This method triggers every frame from the Xpell engine.
The method can be override by the extending module to support extended onFrame functionality

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `frameNumber` | `number` | Current frame number |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[XModule](Core_XModule.XModule.md).[onFrame](Core_XModule.XModule.md#onframe)

#### Defined in

[Core/XModule.ts:197](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L197)

___

### openUrl

▸ **openUrl**(`url`, `newWindow?`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | navigate the browser to new url |
| `newWindow?` | `boolean` | if provided and true the url will be opened in a new window/tab |

#### Returns

`void`

#### Defined in

XUI/XUI.ts:176

___

### remove

▸ **remove**(`objectId`): `void`

Removes the XUIObject from the DOM by ID and from the Object Manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `string` | the XUIObject id to remove |

#### Returns

`void`

#### Overrides

[XModule](Core_XModule.XModule.md).[remove](Core_XModule.XModule.md#remove)

#### Defined in

XUI/XUI.ts:191

___

### run

▸ **run**(`stringXCommand`): `Promise`\<`any`\>

Run xpell command - 
CLI mode, parse the command to XCommand JSON format and call execute method

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringXCommand` | `string` |

#### Returns

`Promise`\<`any`\>

command execution result

#### Inherited from

[XModule](Core_XModule.XModule.md).[run](Core_XModule.XModule.md#run)

#### Defined in

[Core/XModule.ts:145](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XModule.ts#L145)

___

### show

▸ **show**(`objectId`): `void`

Show's XUIObject that was loaded into the XUI Object Manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `string` | the XUIObject id to show |

#### Returns

`void`

#### Defined in

XUI/XUI.ts:307

___

### toggle

▸ **toggle**(`objectId`): `void`

Toggle's XUIObject that was loaded into the XUI Object Manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectId` | `string` | the XUIObject id to toggle |

#### Returns

`void`

#### Defined in

XUI/XUI.ts:329

___

### wrap

▸ **wrap**(`xObjects`, `wrapper?`): [`XObjectData`](../modules/Core_XObject.md#xobjectdata)

Wraps an array of XObjectData objects with a wrapper object and returns the wrapper 
with the wrapped objects as children

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xObjects` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata)[] | array of XObjectData objects to wrap |
| `wrapper?` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | the wrapper object to use, if not provided a default wrapper will be created |

#### Returns

[`XObjectData`](../modules/Core_XObject.md#xobjectdata)

- XObjectData

#### Defined in

XUI/XUI.ts:140
