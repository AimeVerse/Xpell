[xpell](../README.md) / [Modules](../modules.md) / Core/XObject

# Module: Core/XObject

## Table of contents

### References

- [default](Core_XObject.md#default)

### Classes

- [XObject](../classes/Core_XObject.XObject.md)
- [XObjectPack](../classes/Core_XObject.XObjectPack.md)

### Interfaces

- [IXData](../interfaces/Core_XObject.IXData.md)
- [IXObjectData](../interfaces/Core_XObject.IXObjectData.md)
- [XDataXporterHandler](../interfaces/Core_XObject.XDataXporterHandler.md)
- [XObjectOnEventIndex](../interfaces/Core_XObject.XObjectOnEventIndex.md)

### Type Aliases

- [XDataInstanceXporter](Core_XObject.md#xdatainstancexporter)
- [XDataXporter](Core_XObject.md#xdataxporter)
- [XObjectData](Core_XObject.md#xobjectdata)
- [XObjectOnEventHandler](Core_XObject.md#xobjectoneventhandler)
- [wordsList](Core_XObject.md#wordslist)

## References

### default

Renames and re-exports [XObject](../classes/Core_XObject.XObject.md)

## Type Aliases

### XDataInstanceXporter

Ƭ **XDataInstanceXporter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `cls` | `any` |
| `handler` | [`XDataXporterHandler`](../interfaces/Core_XObject.XDataXporterHandler.md) |

#### Defined in

[Core/XObject.ts:51](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L51)

___

### XDataXporter

Ƭ **XDataXporter**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_ignore_fields` | `string`[] |
| `_instance_xporters` | \{ `[id: string]`: [`XDataInstanceXporter`](Core_XObject.md#xdatainstancexporter);  } |

#### Defined in

[Core/XObject.ts:56](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L56)

___

### XObjectData

Ƭ **XObjectData**: `Object`

#### Index signature

▪ [k: `string`]: `string` \| ``null`` \| [] \| `undefined` \| `Function` \| `boolean` \| `number` \| {}

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_children?` | ([`XObject`](../classes/Core_XObject.XObject.md) \| [`XObjectData`](Core_XObject.md#xobjectdata))[] |
| `_data_source?` | `string` |
| `_id?` | `string` |
| `_name?` | `string` |
| `_on?` | [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) |
| `_on_create?` | `string` \| `Function` |
| `_on_data?` | `string` \| `Function` |
| `_on_frame?` | `string` \| `Function` |
| `_on_mount?` | `string` \| `Function` |
| `_once?` | [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) |
| `_process_data?` | `boolean` |
| `_process_frame?` | `boolean` |
| `_type?` | `string` |

#### Defined in

[Core/XObject.ts:68](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L68)

___

### XObjectOnEventHandler

Ƭ **XObjectOnEventHandler**: (`xObject`: [`XObject`](../classes/Core_XObject.XObject.md), `data?`: `any`) => `void`

#### Type declaration

▸ (`xObject`, `data?`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `xObject` | [`XObject`](../classes/Core_XObject.XObject.md) |
| `data?` | `any` |

##### Returns

`void`

#### Defined in

[Core/XObject.ts:63](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L63)

___

### wordsList

Ƭ **wordsList**: `Object`

#### Index signature

▪ [k: `string`]: `string`

#### Defined in

[Core/XObject.ts:17](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L17)
