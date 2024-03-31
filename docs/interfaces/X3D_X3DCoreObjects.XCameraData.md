[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3DCoreObjects](../modules/X3D_X3DCoreObjects.md) / XCameraData

# Interface: XCameraData

[X3D/X3DCoreObjects](../modules/X3D_X3DCoreObjects.md).XCameraData

IX3DObjectData

## Hierarchy

- [`IX3DObjectData`](X3D_X3DObject.IX3DObjectData.md)

  ↳ **`XCameraData`**

## Table of contents

### Properties

- [\_3d\_set\_once](X3D_X3DCoreObjects.XCameraData.md#_3d_set_once)
- [\_auto\_play\_animation](X3D_X3DCoreObjects.XCameraData.md#_auto_play_animation)
- [\_camera](X3D_X3DCoreObjects.XCameraData.md#_camera)
- [\_cannon\_shape](X3D_X3DCoreObjects.XCameraData.md#_cannon_shape)
- [\_children](X3D_X3DCoreObjects.XCameraData.md#_children)
- [\_data\_source](X3D_X3DCoreObjects.XCameraData.md#_data_source)
- [\_disable\_frame\_3d\_state](X3D_X3DCoreObjects.XCameraData.md#_disable_frame_3d_state)
- [\_enable\_physics](X3D_X3DCoreObjects.XCameraData.md#_enable_physics)
- [\_fade\_duration](X3D_X3DCoreObjects.XCameraData.md#_fade_duration)
- [\_far](X3D_X3DCoreObjects.XCameraData.md#_far)
- [\_fov](X3D_X3DCoreObjects.XCameraData.md#_fov)
- [\_helper](X3D_X3DCoreObjects.XCameraData.md#_helper)
- [\_id](X3D_X3DCoreObjects.XCameraData.md#_id)
- [\_load\_animations](X3D_X3DCoreObjects.XCameraData.md#_load_animations)
- [\_mass](X3D_X3DCoreObjects.XCameraData.md#_mass)
- [\_model\_url](X3D_X3DCoreObjects.XCameraData.md#_model_url)
- [\_name](X3D_X3DCoreObjects.XCameraData.md#_name)
- [\_near](X3D_X3DCoreObjects.XCameraData.md#_near)
- [\_on](X3D_X3DCoreObjects.XCameraData.md#_on)
- [\_on\_click](X3D_X3DCoreObjects.XCameraData.md#_on_click)
- [\_on\_create](X3D_X3DCoreObjects.XCameraData.md#_on_create)
- [\_on\_data](X3D_X3DCoreObjects.XCameraData.md#_on_data)
- [\_on\_frame](X3D_X3DCoreObjects.XCameraData.md#_on_frame)
- [\_on\_load](X3D_X3DCoreObjects.XCameraData.md#_on_load)
- [\_on\_mount](X3D_X3DCoreObjects.XCameraData.md#_on_mount)
- [\_once](X3D_X3DCoreObjects.XCameraData.md#_once)
- [\_position](X3D_X3DCoreObjects.XCameraData.md#_position)
- [\_positional\_audio\_listener](X3D_X3DCoreObjects.XCameraData.md#_positional_audio_listener)
- [\_positional\_audio\_source](X3D_X3DCoreObjects.XCameraData.md#_positional_audio_source)
- [\_process\_data](X3D_X3DCoreObjects.XCameraData.md#_process_data)
- [\_process\_frame](X3D_X3DCoreObjects.XCameraData.md#_process_frame)
- [\_ratio](X3D_X3DCoreObjects.XCameraData.md#_ratio)
- [\_rotation](X3D_X3DCoreObjects.XCameraData.md#_rotation)
- [\_scale](X3D_X3DCoreObjects.XCameraData.md#_scale)
- [\_three\_class](X3D_X3DCoreObjects.XCameraData.md#_three_class)
- [\_threes\_class\_args](X3D_X3DCoreObjects.XCameraData.md#_threes_class_args)
- [\_type](X3D_X3DCoreObjects.XCameraData.md#_type)
- [\_visible](X3D_X3DCoreObjects.XCameraData.md#_visible)

## Properties

### \_3d\_set\_once

• `Optional` **\_3d\_set\_once**: `boolean`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_3d_set_once](X3D_X3DObject.IX3DObjectData.md#_3d_set_once)

#### Defined in

[X3D/X3DObject.ts:99](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L99)

___

### \_auto\_play\_animation

• `Optional` **\_auto\_play\_animation**: `boolean`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_auto_play_animation](X3D_X3DObject.IX3DObjectData.md#_auto_play_animation)

#### Defined in

[X3D/X3DObject.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L102)

___

### \_camera

• `Optional` **\_camera**: [`XCameraTypes`](../modules/X3D_X3DCoreObjects.md#xcameratypes)

#### Defined in

[X3D/X3DCoreObjects.ts:60](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L60)

___

### \_cannon\_shape

• `Optional` **\_cannon\_shape**: `Shape`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_cannon_shape](X3D_X3DObject.IX3DObjectData.md#_cannon_shape)

#### Defined in

[X3D/X3DObject.ts:88](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L88)

___

### \_children

• `Optional` **\_children**: ([`XObject`](../classes/Core_XObject.XObject.md) \| [`XObjectData`](../modules/Core_XObject.md#xobjectdata))[]

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_children](X3D_X3DObject.IX3DObjectData.md#_children)

#### Defined in

[Core/XObject.ts:72](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L72)

___

### \_data\_source

• `Optional` **\_data\_source**: `string`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_data_source](X3D_X3DObject.IX3DObjectData.md#_data_source)

#### Defined in

[Core/XObject.ts:74](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L74)

___

### \_disable\_frame\_3d\_state

• `Optional` **\_disable\_frame\_3d\_state**: `boolean`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_disable_frame_3d_state](X3D_X3DObject.IX3DObjectData.md#_disable_frame_3d_state)

#### Defined in

[X3D/X3DObject.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L98)

___

### \_enable\_physics

• `Optional` **\_enable\_physics**: `boolean`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_enable_physics](X3D_X3DObject.IX3DObjectData.md#_enable_physics)

#### Defined in

[X3D/X3DObject.ts:89](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L89)

___

### \_fade\_duration

• `Optional` **\_fade\_duration**: `number`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_fade_duration](X3D_X3DObject.IX3DObjectData.md#_fade_duration)

#### Defined in

[X3D/X3DObject.ts:95](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L95)

___

### \_far

• `Optional` **\_far**: `number`

#### Defined in

[X3D/X3DCoreObjects.ts:63](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L63)

___

### \_fov

• `Optional` **\_fov**: `number`

#### Defined in

[X3D/X3DCoreObjects.ts:61](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L61)

___

### \_helper

• `Optional` **\_helper**: `boolean`

#### Defined in

[X3D/X3DCoreObjects.ts:66](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L66)

___

### \_id

• `Optional` **\_id**: `string`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_id](X3D_X3DObject.IX3DObjectData.md#_id)

#### Defined in

[Core/XObject.ts:70](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L70)

___

### \_load\_animations

• `Optional` **\_load\_animations**: `boolean`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_load_animations](X3D_X3DObject.IX3DObjectData.md#_load_animations)

#### Defined in

[X3D/X3DObject.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L101)

___

### \_mass

• `Optional` **\_mass**: `number`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_mass](X3D_X3DObject.IX3DObjectData.md#_mass)

#### Defined in

[X3D/X3DObject.ts:90](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L90)

___

### \_model\_url

• `Optional` **\_model\_url**: `string`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_model_url](X3D_X3DObject.IX3DObjectData.md#_model_url)

#### Defined in

[X3D/X3DObject.ts:103](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L103)

___

### \_name

• `Optional` **\_name**: `string`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_name](X3D_X3DObject.IX3DObjectData.md#_name)

#### Defined in

[Core/XObject.ts:73](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L73)

___

### \_near

• `Optional` **\_near**: `number`

#### Defined in

[X3D/X3DCoreObjects.ts:64](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L64)

___

### \_on

• `Optional` **\_on**: [`XObjectOnEventIndex`](Core_XObject.XObjectOnEventIndex.md)

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_on](X3D_X3DObject.IX3DObjectData.md#_on)

#### Defined in

[Core/XObject.ts:75](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L75)

___

### \_on\_click

• `Optional` **\_on\_click**: [`X3DListener`](../modules/X3D_X3DObject.md#x3dlistener)

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_on_click](X3D_X3DObject.IX3DObjectData.md#_on_click)

#### Defined in

[X3D/X3DObject.ts:105](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L105)

___

### \_on\_create

• `Optional` **\_on\_create**: `string` \| `Function`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_on_create](X3D_X3DObject.IX3DObjectData.md#_on_create)

#### Defined in

[Core/XObject.ts:77](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L77)

___

### \_on\_data

• `Optional` **\_on\_data**: `string` \| `Function`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_on_data](X3D_X3DObject.IX3DObjectData.md#_on_data)

#### Defined in

[Core/XObject.ts:80](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L80)

___

### \_on\_frame

• `Optional` **\_on\_frame**: `string` \| `Function`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_on_frame](X3D_X3DObject.IX3DObjectData.md#_on_frame)

#### Defined in

[Core/XObject.ts:79](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L79)

___

### \_on\_load

• `Optional` **\_on\_load**: [`X3DListener`](../modules/X3D_X3DObject.md#x3dlistener)

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_on_load](X3D_X3DObject.IX3DObjectData.md#_on_load)

#### Defined in

[X3D/X3DObject.ts:104](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L104)

___

### \_on\_mount

• `Optional` **\_on\_mount**: `string` \| `Function`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_on_mount](X3D_X3DObject.IX3DObjectData.md#_on_mount)

#### Defined in

[Core/XObject.ts:78](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L78)

___

### \_once

• `Optional` **\_once**: [`XObjectOnEventIndex`](Core_XObject.XObjectOnEventIndex.md)

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_once](X3D_X3DObject.IX3DObjectData.md#_once)

#### Defined in

[Core/XObject.ts:76](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L76)

___

### \_position

• `Optional` **\_position**: [`XVector3Data`](../modules/X3D_X3DObject.md#xvector3data)

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_position](X3D_X3DObject.IX3DObjectData.md#_position)

#### Defined in

[X3D/X3DObject.ts:91](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L91)

___

### \_positional\_audio\_listener

• `Optional` **\_positional\_audio\_listener**: `boolean`

#### Defined in

[X3D/X3DCoreObjects.ts:65](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L65)

___

### \_positional\_audio\_source

• `Optional` **\_positional\_audio\_source**: `string`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_positional_audio_source](X3D_X3DObject.IX3DObjectData.md#_positional_audio_source)

#### Defined in

[X3D/X3DObject.ts:100](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L100)

___

### \_process\_data

• `Optional` **\_process\_data**: `boolean`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_process_data](X3D_X3DObject.IX3DObjectData.md#_process_data)

#### Defined in

[Core/XObject.ts:82](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L82)

___

### \_process\_frame

• `Optional` **\_process\_frame**: `boolean`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_process_frame](X3D_X3DObject.IX3DObjectData.md#_process_frame)

#### Defined in

[Core/XObject.ts:81](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L81)

___

### \_ratio

• `Optional` **\_ratio**: `number`

#### Defined in

[X3D/X3DCoreObjects.ts:62](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L62)

___

### \_rotation

• `Optional` **\_rotation**: [`XVector3Data`](../modules/X3D_X3DObject.md#xvector3data)

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_rotation](X3D_X3DObject.IX3DObjectData.md#_rotation)

#### Defined in

[X3D/X3DObject.ts:92](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L92)

___

### \_scale

• `Optional` **\_scale**: [`XVector3Data`](../modules/X3D_X3DObject.md#xvector3data)

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_scale](X3D_X3DObject.IX3DObjectData.md#_scale)

#### Defined in

[X3D/X3DObject.ts:93](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L93)

___

### \_three\_class

• `Optional` **\_three\_class**: `any`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_three_class](X3D_X3DObject.IX3DObjectData.md#_three_class)

#### Defined in

[X3D/X3DObject.ts:96](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L96)

___

### \_threes\_class\_args

• `Optional` **\_threes\_class\_args**: `any`[]

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_threes_class_args](X3D_X3DObject.IX3DObjectData.md#_threes_class_args)

#### Defined in

[X3D/X3DObject.ts:97](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L97)

___

### \_type

• `Optional` **\_type**: `string`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_type](X3D_X3DObject.IX3DObjectData.md#_type)

#### Defined in

[Core/XObject.ts:71](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L71)

___

### \_visible

• `Optional` **\_visible**: `boolean`

#### Inherited from

[IX3DObjectData](X3D_X3DObject.IX3DObjectData.md).[_visible](X3D_X3DObject.IX3DObjectData.md#_visible)

#### Defined in

[X3D/X3DObject.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L94)
