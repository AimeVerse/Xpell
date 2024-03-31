[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3DObject](../modules/X3D_X3DObject.md) / IX3DObjectData

# Interface: IX3DObjectData

[X3D/X3DObject](../modules/X3D_X3DObject.md).IX3DObjectData

IX3DObjectData

## Hierarchy

- [`XObjectData`](../modules/Core_XObject.md#xobjectdata)

  ↳ **`IX3DObjectData`**

  ↳↳ [`XCameraData`](X3D_X3DCoreObjects.XCameraData.md)

  ↳↳ [`XLightData`](X3D_X3DCoreObjects.XLightData.md)

## Indexable

▪ [key: `string`]: `any`

## Table of contents

### Properties

- [\_3d\_set\_once](X3D_X3DObject.IX3DObjectData.md#_3d_set_once)
- [\_auto\_play\_animation](X3D_X3DObject.IX3DObjectData.md#_auto_play_animation)
- [\_cannon\_shape](X3D_X3DObject.IX3DObjectData.md#_cannon_shape)
- [\_children](X3D_X3DObject.IX3DObjectData.md#_children)
- [\_data\_source](X3D_X3DObject.IX3DObjectData.md#_data_source)
- [\_disable\_frame\_3d\_state](X3D_X3DObject.IX3DObjectData.md#_disable_frame_3d_state)
- [\_enable\_physics](X3D_X3DObject.IX3DObjectData.md#_enable_physics)
- [\_fade\_duration](X3D_X3DObject.IX3DObjectData.md#_fade_duration)
- [\_id](X3D_X3DObject.IX3DObjectData.md#_id)
- [\_load\_animations](X3D_X3DObject.IX3DObjectData.md#_load_animations)
- [\_mass](X3D_X3DObject.IX3DObjectData.md#_mass)
- [\_model\_url](X3D_X3DObject.IX3DObjectData.md#_model_url)
- [\_name](X3D_X3DObject.IX3DObjectData.md#_name)
- [\_on](X3D_X3DObject.IX3DObjectData.md#_on)
- [\_on\_click](X3D_X3DObject.IX3DObjectData.md#_on_click)
- [\_on\_create](X3D_X3DObject.IX3DObjectData.md#_on_create)
- [\_on\_data](X3D_X3DObject.IX3DObjectData.md#_on_data)
- [\_on\_frame](X3D_X3DObject.IX3DObjectData.md#_on_frame)
- [\_on\_load](X3D_X3DObject.IX3DObjectData.md#_on_load)
- [\_on\_mount](X3D_X3DObject.IX3DObjectData.md#_on_mount)
- [\_once](X3D_X3DObject.IX3DObjectData.md#_once)
- [\_position](X3D_X3DObject.IX3DObjectData.md#_position)
- [\_positional\_audio\_source](X3D_X3DObject.IX3DObjectData.md#_positional_audio_source)
- [\_process\_data](X3D_X3DObject.IX3DObjectData.md#_process_data)
- [\_process\_frame](X3D_X3DObject.IX3DObjectData.md#_process_frame)
- [\_rotation](X3D_X3DObject.IX3DObjectData.md#_rotation)
- [\_scale](X3D_X3DObject.IX3DObjectData.md#_scale)
- [\_three\_class](X3D_X3DObject.IX3DObjectData.md#_three_class)
- [\_threes\_class\_args](X3D_X3DObject.IX3DObjectData.md#_threes_class_args)
- [\_type](X3D_X3DObject.IX3DObjectData.md#_type)
- [\_visible](X3D_X3DObject.IX3DObjectData.md#_visible)

## Properties

### \_3d\_set\_once

• `Optional` **\_3d\_set\_once**: `boolean`

#### Defined in

[X3D/X3DObject.ts:99](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L99)

___

### \_auto\_play\_animation

• `Optional` **\_auto\_play\_animation**: `boolean`

#### Defined in

[X3D/X3DObject.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L102)

___

### \_cannon\_shape

• `Optional` **\_cannon\_shape**: `Shape`

#### Defined in

[X3D/X3DObject.ts:88](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L88)

___

### \_children

• `Optional` **\_children**: ([`XObject`](../classes/Core_XObject.XObject.md) \| [`XObjectData`](../modules/Core_XObject.md#xobjectdata))[]

#### Inherited from

XObjectData.\_children

#### Defined in

[Core/XObject.ts:72](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L72)

___

### \_data\_source

• `Optional` **\_data\_source**: `string`

#### Inherited from

XObjectData.\_data\_source

#### Defined in

[Core/XObject.ts:74](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L74)

___

### \_disable\_frame\_3d\_state

• `Optional` **\_disable\_frame\_3d\_state**: `boolean`

#### Defined in

[X3D/X3DObject.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L98)

___

### \_enable\_physics

• `Optional` **\_enable\_physics**: `boolean`

#### Defined in

[X3D/X3DObject.ts:89](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L89)

___

### \_fade\_duration

• `Optional` **\_fade\_duration**: `number`

#### Defined in

[X3D/X3DObject.ts:95](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L95)

___

### \_id

• `Optional` **\_id**: `string`

#### Inherited from

XObjectData.\_id

#### Defined in

[Core/XObject.ts:70](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L70)

___

### \_load\_animations

• `Optional` **\_load\_animations**: `boolean`

#### Defined in

[X3D/X3DObject.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L101)

___

### \_mass

• `Optional` **\_mass**: `number`

#### Defined in

[X3D/X3DObject.ts:90](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L90)

___

### \_model\_url

• `Optional` **\_model\_url**: `string`

#### Defined in

[X3D/X3DObject.ts:103](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L103)

___

### \_name

• `Optional` **\_name**: `string`

#### Inherited from

XObjectData.\_name

#### Defined in

[Core/XObject.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L73)

___

### \_on

• `Optional` **\_on**: [`XObjectOnEventIndex`](Core_XObject.XObjectOnEventIndex.md)

#### Inherited from

XObjectData.\_on

#### Defined in

[Core/XObject.ts:75](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L75)

___

### \_on\_click

• `Optional` **\_on\_click**: [`X3DListener`](../modules/X3D_X3DObject.md#x3dlistener)

#### Defined in

[X3D/X3DObject.ts:105](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L105)

___

### \_on\_create

• `Optional` **\_on\_create**: `string` \| `Function`

#### Inherited from

XObjectData.\_on\_create

#### Defined in

[Core/XObject.ts:77](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L77)

___

### \_on\_data

• `Optional` **\_on\_data**: `string` \| `Function`

#### Inherited from

XObjectData.\_on\_data

#### Defined in

[Core/XObject.ts:80](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L80)

___

### \_on\_frame

• `Optional` **\_on\_frame**: `string` \| `Function`

#### Inherited from

XObjectData.\_on\_frame

#### Defined in

[Core/XObject.ts:79](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L79)

___

### \_on\_load

• `Optional` **\_on\_load**: [`X3DListener`](../modules/X3D_X3DObject.md#x3dlistener)

#### Defined in

[X3D/X3DObject.ts:104](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L104)

___

### \_on\_mount

• `Optional` **\_on\_mount**: `string` \| `Function`

#### Inherited from

XObjectData.\_on\_mount

#### Defined in

[Core/XObject.ts:78](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L78)

___

### \_once

• `Optional` **\_once**: [`XObjectOnEventIndex`](Core_XObject.XObjectOnEventIndex.md)

#### Inherited from

XObjectData.\_once

#### Defined in

[Core/XObject.ts:76](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L76)

___

### \_position

• `Optional` **\_position**: [`XVector3Data`](../modules/X3D_X3DObject.md#xvector3data)

#### Defined in

[X3D/X3DObject.ts:91](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L91)

___

### \_positional\_audio\_source

• `Optional` **\_positional\_audio\_source**: `string`

#### Defined in

[X3D/X3DObject.ts:100](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L100)

___

### \_process\_data

• `Optional` **\_process\_data**: `boolean`

#### Inherited from

XObjectData.\_process\_data

#### Defined in

[Core/XObject.ts:82](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L82)

___

### \_process\_frame

• `Optional` **\_process\_frame**: `boolean`

#### Inherited from

XObjectData.\_process\_frame

#### Defined in

[Core/XObject.ts:81](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L81)

___

### \_rotation

• `Optional` **\_rotation**: [`XVector3Data`](../modules/X3D_X3DObject.md#xvector3data)

#### Defined in

[X3D/X3DObject.ts:92](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L92)

___

### \_scale

• `Optional` **\_scale**: [`XVector3Data`](../modules/X3D_X3DObject.md#xvector3data)

#### Defined in

[X3D/X3DObject.ts:93](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L93)

___

### \_three\_class

• `Optional` **\_three\_class**: `any`

#### Defined in

[X3D/X3DObject.ts:96](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L96)

___

### \_threes\_class\_args

• `Optional` **\_threes\_class\_args**: `any`[]

#### Defined in

[X3D/X3DObject.ts:97](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L97)

___

### \_type

• `Optional` **\_type**: `string`

#### Inherited from

XObjectData.\_type

#### Defined in

[Core/XObject.ts:71](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L71)

___

### \_visible

• `Optional` **\_visible**: `boolean`

#### Defined in

[X3D/X3DObject.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L94)
