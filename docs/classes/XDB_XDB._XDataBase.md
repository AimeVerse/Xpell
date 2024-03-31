[xpell](../README.md) / [Modules](../modules.md) / [XDB/XDB](../modules/XDB_XDB.md) / \_XDataBase

# Class: \_XDataBase

[XDB/XDB](../modules/XDB_XDB.md)._XDataBase

XDataBase - manage local storage

## Table of contents

### Constructors

- [constructor](XDB_XDB._XDataBase.md#constructor)

### Properties

- [\_encode\_context](XDB_XDB._XDataBase.md#_encode_context)
- [\_local](XDB_XDB._XDataBase.md#_local)
- [\_session](XDB_XDB._XDataBase.md#_session)
- [\_vectors](XDB_XDB._XDataBase.md#_vectors)
- [\_version](XDB_XDB._XDataBase.md#_version)

### Accessors

- [encode](XDB_XDB._XDataBase.md#encode)

### Methods

- [getObject](XDB_XDB._XDataBase.md#getobject)
- [getString](XDB_XDB._XDataBase.md#getstring)
- [info](XDB_XDB._XDataBase.md#info)
- [load](XDB_XDB._XDataBase.md#load)
- [resetAllData](XDB_XDB._XDataBase.md#resetalldata)
- [save](XDB_XDB._XDataBase.md#save)
- [saveObject](XDB_XDB._XDataBase.md#saveobject)
- [saveString](XDB_XDB._XDataBase.md#savestring)

## Constructors

### constructor

• **new _XDataBase**(): [`_XDataBase`](XDB_XDB._XDataBase.md)

#### Returns

[`_XDataBase`](XDB_XDB._XDataBase.md)

#### Defined in

[XDB/XDB.ts:17](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L17)

## Properties

### \_encode\_context

• `Private` **\_encode\_context**: `boolean` = `false`

#### Defined in

[XDB/XDB.ts:15](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L15)

___

### \_local

• `Private` **\_local**: `Storage` = `window.localStorage`

#### Defined in

[XDB/XDB.ts:12](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L12)

___

### \_session

• `Private` **\_session**: `Storage` = `window.sessionStorage`

#### Defined in

[XDB/XDB.ts:13](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L13)

___

### \_vectors

• `Private` **\_vectors**: `Object` = `{}`

#### Defined in

[XDB/XDB.ts:14](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L14)

___

### \_version

• `Private` **\_version**: `string` = `"1.0.0"`

#### Defined in

[XDB/XDB.ts:11](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L11)

## Accessors

### encode

• `set` **encode**(`value`): `void`

Indicates if the data will be encoded before saving to the local storage

#### Parameters

| Name | Type |
| :------ | :------ |
| `value` | `boolean` |

#### Returns

`void`

#### Defined in

[XDB/XDB.ts:27](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L27)

## Methods

### getObject

▸ **getObject**(`id`): `any`

Gets a JSON Object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id of the object |

#### Returns

`any`

object (null if not exists)

#### Defined in

[XDB/XDB.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L94)

___

### getString

▸ **getString**(`id`): ``null`` \| `string`

Gets a string value from the data storage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | the id that the string was tagged with |

#### Returns

``null`` \| `string`

<string>

#### Defined in

[XDB/XDB.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L73)

___

### info

▸ **info**(): `void`

#### Returns

`void`

#### Defined in

[XDB/XDB.ts:20](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L20)

___

### load

▸ **load**(`itemName`): ``null`` \| `string`

loads value from local storage

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `itemName` | `string` | @ |

#### Returns

``null`` \| `string`

string

**`Deprecated`**

use getString() function instead

#### Defined in

[XDB/XDB.ts:49](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L49)

___

### resetAllData

▸ **resetAllData**(): `void`

#### Returns

`void`

#### Defined in

[XDB/XDB.ts:128](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L128)

___

### save

▸ **save**(`itemName`, `item`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `itemName` | `string` |
| `item` | `any` |

#### Returns

`void`

**`Deprecated`**

use saveString instead

#### Defined in

[XDB/XDB.ts:37](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L37)

___

### saveObject

▸ **saveObject**(`id`, `obj`): `boolean`

Saves an object to the XDB with an ID as a tag (will be used to retrieve the data back)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | id of the object (tag) |
| `obj` | `object` | the object it self |

#### Returns

`boolean`

#### Defined in

[XDB/XDB.ts:114](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L114)

___

### saveString

▸ **saveString**(`id`, `stringValue`): `void`

Saves a string to the XDB

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | The id of the string (tag) |
| `stringValue` | `any` | the string value |

#### Returns

`void`

#### Defined in

[XDB/XDB.ts:58](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/XDB/XDB.ts#L58)
