[xpell](../README.md) / [Modules](../modules.md) / [Core/XObject](../modules/Core_XObject.md) / IXObjectData

# Interface: IXObjectData

[Core/XObject](../modules/Core_XObject.md).IXObjectData

XObject constructor data interface 
 IXObjectData

**`Param`**

minimum Xpell interpreter version (optional default value is 1.0)

**`Deprecated`**

use XObjectData type instead instead

## Hierarchy

- [`IXData`](Core_XObject.IXData.md)

  ↳ **`IXObjectData`**

## Indexable

▪ [k: `string`]: `string` \| ``null`` \| [] \| `undefined` \| `Function` \| `boolean` \| `number` \| {}

## Table of contents

### Properties

- [\_children](Core_XObject.IXObjectData.md#_children)
- [\_data\_source](Core_XObject.IXObjectData.md#_data_source)
- [\_id](Core_XObject.IXObjectData.md#_id)
- [\_name](Core_XObject.IXObjectData.md#_name)
- [\_on](Core_XObject.IXObjectData.md#_on)
- [\_on\_create](Core_XObject.IXObjectData.md#_on_create)
- [\_on\_data](Core_XObject.IXObjectData.md#_on_data)
- [\_on\_frame](Core_XObject.IXObjectData.md#_on_frame)
- [\_on\_mount](Core_XObject.IXObjectData.md#_on_mount)
- [\_process\_data](Core_XObject.IXObjectData.md#_process_data)
- [\_process\_frame](Core_XObject.IXObjectData.md#_process_frame)
- [\_type](Core_XObject.IXObjectData.md#_type)

## Properties

### \_children

• `Optional` **\_children**: ([`XObject`](../classes/Core_XObject.XObject.md) \| [`XObjectData`](../modules/Core_XObject.md#xobjectdata))[]

#### Defined in

[Core/XObject.ts:34](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L34)

___

### \_data\_source

• `Optional` **\_data\_source**: `string`

#### Defined in

[Core/XObject.ts:36](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L36)

___

### \_id

• `Optional` **\_id**: `string`

#### Defined in

[Core/XObject.ts:32](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L32)

___

### \_name

• `Optional` **\_name**: `string`

#### Defined in

[Core/XObject.ts:35](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L35)

___

### \_on

• `Optional` **\_on**: [`XObjectOnEventIndex`](Core_XObject.XObjectOnEventIndex.md)

#### Defined in

[Core/XObject.ts:37](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L37)

___

### \_on\_create

• `Optional` **\_on\_create**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:38](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L38)

___

### \_on\_data

• `Optional` **\_on\_data**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:41](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L41)

___

### \_on\_frame

• `Optional` **\_on\_frame**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:40](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L40)

___

### \_on\_mount

• `Optional` **\_on\_mount**: `string` \| `Function`

#### Defined in

[Core/XObject.ts:39](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L39)

___

### \_process\_data

• `Optional` **\_process\_data**: `boolean`

#### Defined in

[Core/XObject.ts:43](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L43)

___

### \_process\_frame

• `Optional` **\_process\_frame**: `boolean`

#### Defined in

[Core/XObject.ts:42](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L42)

___

### \_type

• **\_type**: `string`

#### Defined in

[Core/XObject.ts:33](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L33)
