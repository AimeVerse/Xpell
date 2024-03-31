[xpell](../README.md) / [Modules](../modules.md) / [Core/XObjectManager](../modules/Core_XObjectManager.md) / XObjectManager

# Class: XObjectManager

[Core/XObjectManager](../modules/Core_XObjectManager.md).XObjectManager

## Table of contents

### Constructors

- [constructor](Core_XObjectManager.XObjectManager.md#constructor)

### Properties

- [#\_names\_index](Core_XObjectManager.XObjectManager.md##_names_index)
- [#\_object\_classes](Core_XObjectManager.XObjectManager.md##_object_classes)
- [#\_xobjects](Core_XObjectManager.XObjectManager.md##_xobjects)

### Accessors

- [\_classes](Core_XObjectManager.XObjectManager.md#_classes)
- [\_objects](Core_XObjectManager.XObjectManager.md#_objects)

### Methods

- [addObject](Core_XObjectManager.XObjectManager.md#addobject)
- [getAllClasses](Core_XObjectManager.XObjectManager.md#getallclasses)
- [getObject](Core_XObjectManager.XObjectManager.md#getobject)
- [getObjectByName](Core_XObjectManager.XObjectManager.md#getobjectbyname)
- [getObjectClass](Core_XObjectManager.XObjectManager.md#getobjectclass)
- [go](Core_XObjectManager.XObjectManager.md#go)
- [hasObject](Core_XObjectManager.XObjectManager.md#hasobject)
- [hasObjectClass](Core_XObjectManager.XObjectManager.md#hasobjectclass)
- [registerObject](Core_XObjectManager.XObjectManager.md#registerobject)
- [registerObjects](Core_XObjectManager.XObjectManager.md#registerobjects)
- [removeObject](Core_XObjectManager.XObjectManager.md#removeobject)

## Constructors

### constructor

• **new XObjectManager**(): [`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Returns

[`XObjectManager`](Core_XObjectManager.XObjectManager.md)

#### Defined in

[Core/XObjectManager.ts:18](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L18)

## Properties

### #\_names\_index

• `Private` **#\_names\_index**: [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Defined in

[Core/XObjectManager.ts:17](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L17)

___

### #\_object\_classes

• `Private` **#\_object\_classes**: [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Defined in

[Core/XObjectManager.ts:15](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L15)

___

### #\_xobjects

• `Private` **#\_xobjects**: [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Defined in

[Core/XObjectManager.ts:16](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L16)

## Accessors

### \_classes

• `get` **_classes**(): [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Returns

[`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Defined in

[Core/XObjectManager.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L94)

___

### \_objects

• `get` **_objects**(): [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Returns

[`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

#### Defined in

[Core/XObjectManager.ts:36](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L36)

## Methods

### addObject

▸ **addObject**(`xObject`): `void`

Add XObject instance to the manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xObject` | [`XObject`](Core_XObject.XObject.md) | XObject to maintain |

#### Returns

`void`

#### Defined in

[Core/XObjectManager.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L102)

___

### getAllClasses

▸ **getAllClasses**(): [`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

Retrieves all the classes dictionary

#### Returns

[`XObjectManagerIndex`](../modules/Core_XObjectManager.md#xobjectmanagerindex)

XObjectManagerIndex

#### Defined in

[Core/XObjectManager.ts:90](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L90)

___

### getObject

▸ **getObject**(`xObjectId`): [`XObject`](Core_XObject.XObject.md)

Retrieves XObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xObjectId` | `string` | XObject id |

#### Returns

[`XObject`](Core_XObject.XObject.md)

#### Defined in

[Core/XObjectManager.ts:132](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L132)

___

### getObjectByName

▸ **getObjectByName**(`objectName`): ``null`` \| [`XObject`](Core_XObject.XObject.md)

Retrieves XObject instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objectName` | `string` | XObject name |

#### Returns

``null`` \| [`XObject`](Core_XObject.XObject.md)

#### Defined in

[Core/XObjectManager.ts:151](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L151)

___

### getObjectClass

▸ **getObjectClass**(`name`): `any`

Retrieves XObject class instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | class name |

#### Returns

`any`

#### Defined in

[Core/XObjectManager.ts:82](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L82)

___

### go

▸ **go**(`id`): [`XObject`](Core_XObject.XObject.md)

alias to getObject

#### Parameters

| Name | Type |
| :------ | :------ |
| `id` | `string` |

#### Returns

[`XObject`](Core_XObject.XObject.md)

#### Defined in

[Core/XObjectManager.ts:141](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L141)

___

### hasObject

▸ **hasObject**(`xObjectId`): `boolean`

Checks if an object is found in the object manager

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectId` | `string` |

#### Returns

`boolean`

#### Defined in

[Core/XObjectManager.ts:46](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L46)

___

### hasObjectClass

▸ **hasObjectClass**(`name`): `boolean`

Checks if a class (name) is found in the object manager classes dictionary

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | class name |

#### Returns

`boolean`

#### Defined in

[Core/XObjectManager.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L73)

___

### registerObject

▸ **registerObject**(`name`, `xObjects`): `void`

Registers single XObject

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `name` | `string` | name of the object |
| `xObjects` | [`XObject`](Core_XObject.XObject.md) | The object class |

#### Returns

`void`

#### Defined in

[Core/XObjectManager.ts:64](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L64)

___

### registerObjects

▸ **registerObjects**(`xObjects`): `void`

Register multiple classes dictionary into the object manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xObjects` | [`XObjectPack`](Core_XObject.XObjectPack.md) | key value list -> {"view":XView,...} |

#### Returns

`void`

#### Defined in

[Core/XObjectManager.ts:54](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L54)

___

### removeObject

▸ **removeObject**(`xObjectId`): `void`

Remove XObject from the manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xObjectId` | `string` | object id to remove |

#### Returns

`void`

#### Defined in

[Core/XObjectManager.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObjectManager.ts#L119)
