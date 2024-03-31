[xpell](../README.md) / [Modules](../modules.md) / [Core/XData](../modules/Core_XData.md) / \_XData

# Class: \_XData

[Core/XData](../modules/Core_XData.md)._XData

## Table of contents

### Constructors

- [constructor](Core_XData._XData.md#constructor)

### Properties

- [#\_objects](Core_XData._XData.md##_objects)
- [objects](Core_XData._XData.md#objects)
- [variables](Core_XData._XData.md#variables)

### Accessors

- [\_o](Core_XData._XData.md#_o)

### Methods

- [clean](Core_XData._XData.md#clean)
- [delete](Core_XData._XData.md#delete)
- [has](Core_XData._XData.md#has)
- [pick](Core_XData._XData.md#pick)
- [set](Core_XData._XData.md#set)

## Constructors

### constructor

• **new _XData**(): [`_XData`](Core_XData._XData.md)

#### Returns

[`_XData`](Core_XData._XData.md)

#### Defined in

[Core/XData.ts:28](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L28)

## Properties

### #\_objects

• `Private` **#\_objects**: [`XDataObject`](../modules/Core_XData.md#xdataobject) = `{}`

#### Defined in

[Core/XData.ts:26](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L26)

___

### objects

• **objects**: [`XDataObject`](../modules/Core_XData.md#xdataobject) = `{}`

#### Defined in

[Core/XData.ts:22](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L22)

___

### variables

• **variables**: [`XDataVariable`](../modules/Core_XData.md#xdatavariable) = `{}`

#### Defined in

[Core/XData.ts:23](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L23)

## Accessors

### \_o

• `get` **_o**(): [`XDataObject`](../modules/Core_XData.md#xdataobject)

This method gets the XData object

#### Returns

[`XDataObject`](../modules/Core_XData.md#xdataobject)

XDataObject object

**`Example`**

```ts
// get the XDataObject object
 const o = XData._o["my-object-id"]
 // set the XDataObject object
 XData._o["my-object-id"] = {my:"object"}
```

#### Defined in

[Core/XData.ts:44](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L44)

## Methods

### clean

▸ **clean**(): `void`

This method cleans the XData Memory

#### Returns

`void`

#### Defined in

[Core/XData.ts:92](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L92)

___

### delete

▸ **delete**(`objectId`): `void`

Deletes an object from the XData object

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |

#### Returns

`void`

#### Defined in

[Core/XData.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L73)

___

### has

▸ **has**(`objectId`): `boolean`

This method checks if the XData object has an object by id

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |

#### Returns

`boolean`

boolean

**`Comment`**

It is also possible to query the XData._o property -> if(XData._o["my-object-id"])...

#### Defined in

[Core/XData.ts:65](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L65)

___

### pick

▸ **pick**(`objectId`): `any`

Gets an object and delete it from the XData object list

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |

#### Returns

`any`

#### Defined in

[Core/XData.ts:82](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L82)

___

### set

▸ **set**(`objectId`, `object`): `void`

This method adds an object to the XData object

#### Parameters

| Name | Type |
| :------ | :------ |
| `objectId` | `string` |
| `object` | `any` |

#### Returns

`void`

**`Comment`**

It is also possible to use the XData._o property -> XData._o["my-object-id"] = {my:"object"}

#### Defined in

[Core/XData.ts:55](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L55)
