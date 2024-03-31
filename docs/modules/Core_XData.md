[xpell](../README.md) / [Modules](../modules.md) / Core/XData

# Module: Core/XData

## Table of contents

### References

- [default](Core_XData.md#default)

### Classes

- [\_XData](../classes/Core_XData._XData.md)

### Type Aliases

- [XDataObject](Core_XData.md#xdataobject)
- [XDataVariable](Core_XData.md#xdatavariable)

### Variables

- [XData](Core_XData.md#xdata)

## References

### default

Renames and re-exports [XData](Core_XData.md#xdata)

## Type Aliases

### XDataObject

Ƭ **XDataObject**: `Object`

XData (Xpell Global shared Variables & Objects)
This object uses as a real-time shared memory between all Xpell modules nad components
Usage:
 - store primitive variable: 
     XData._v["my-var-id"] = "my-var-value"
 - get primitive variable:
     const v = XData._v["my-var-id"]
 - store object:
     XData._o["my-object-id"] = {my:"object"}
 - get object:
     const o = XData._o["my-object-id"]

#### Index signature

▪ [_id: `string`]: `any`

#### Defined in

[Core/XData.ts:16](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L16)

___

### XDataVariable

Ƭ **XDataVariable**: `Object`

#### Index signature

▪ [_id: `string`]: `string` \| `number` \| `boolean`

#### Defined in

[Core/XData.ts:17](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L17)

## Variables

### XData

• `Const` **XData**: [`_XData`](../classes/Core_XData._XData.md)

#### Defined in

[Core/XData.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XData.ts#L102)
