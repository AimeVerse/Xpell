# Class: XObjectManager

[XObjectManager](../wiki/XObjectManager).XObjectManager

## Table of contents

### Constructors

- [constructor](../wiki/XObjectManager.XObjectManager#constructor)

### Properties

- [namesIndex](../wiki/XObjectManager.XObjectManager#namesindex)
- [objectClasses](../wiki/XObjectManager.XObjectManager#objectclasses)
- [xObjects](../wiki/XObjectManager.XObjectManager#xobjects)

### Methods

- [addObject](../wiki/XObjectManager.XObjectManager#addobject)
- [getAllClasses](../wiki/XObjectManager.XObjectManager#getallclasses)
- [getObject](../wiki/XObjectManager.XObjectManager#getobject)
- [getObjectByName](../wiki/XObjectManager.XObjectManager#getobjectbyname)
- [getObjectClass](../wiki/XObjectManager.XObjectManager#getobjectclass)
- [hasObjectClass](../wiki/XObjectManager.XObjectManager#hasobjectclass)
- [init](../wiki/XObjectManager.XObjectManager#init)
- [registerObject](../wiki/XObjectManager.XObjectManager#registerobject)
- [registerObjects](../wiki/XObjectManager.XObjectManager#registerobjects)
- [removeObject](../wiki/XObjectManager.XObjectManager#removeobject)

## Constructors

### constructor

• **new XObjectManager**()

#### Defined in

[src/XObjectManager.ts:8](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L8)

## Properties

### namesIndex

• **namesIndex**: `Object`

#### Defined in

[src/XObjectManager.ts:7](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L7)

___

### objectClasses

• **objectClasses**: `Object`

#### Defined in

[src/XObjectManager.ts:5](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L5)

___

### xObjects

• **xObjects**: `Object`

#### Defined in

[src/XObjectManager.ts:6](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L6)

## Methods

### addObject

▸ **addObject**(`xObjects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjects` | `any` |

#### Returns

`void`

#### Defined in

[src/XObjectManager.ts:44](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L44)

___

### getAllClasses

▸ **getAllClasses**(): `Object`

#### Returns

`Object`

#### Defined in

[src/XObjectManager.ts:40](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L40)

___

### getObject

▸ **getObject**(`xObjectId`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectId` | `any` |

#### Returns

`any`

#### Defined in

[src/XObjectManager.ts:63](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L63)

___

### getObjectByName

▸ **getObjectByName**(`objectName`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectName` | `any` |

#### Returns

`any`

#### Defined in

[src/XObjectManager.ts:69](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L69)

___

### getObjectClass

▸ **getObjectClass**(`name`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`any`

#### Defined in

[src/XObjectManager.ts:36](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L36)

___

### hasObjectClass

▸ **hasObjectClass**(`name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `any` |

#### Returns

`boolean`

#### Defined in

[src/XObjectManager.ts:32](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L32)

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

[src/XObjectManager.ts:15](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L15)

___

### registerObject

▸ **registerObject**(`name`, `xObjects`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `xObjects` | [`XObject`](../wiki/XObject.XObject) |

#### Returns

`void`

#### Defined in

[src/XObjectManager.ts:28](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L28)

___

### registerObjects

▸ **registerObjects**(`xObjects`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xObjects` | [`XObjectPack`](../wiki/XObject.XObjectPack) | key value list -> {"view":XView,...} |

#### Returns

`void`

#### Defined in

[src/XObjectManager.ts:23](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L23)

___

### removeObject

▸ **removeObject**(`xObjectId`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xObjectId` | `any` |

#### Returns

`void`

#### Defined in

[src/XObjectManager.ts:59](https://github.com/fridman-tamir/XPell/blob/c77c55e/src/XObjectManager.ts#L59)
