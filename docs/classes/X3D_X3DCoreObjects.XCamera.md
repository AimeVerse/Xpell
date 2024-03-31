[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3DCoreObjects](../modules/X3D_X3DCoreObjects.md) / XCamera

# Class: XCamera

[X3D/X3DCoreObjects](../modules/X3D_X3DCoreObjects.md).XCamera

XCamera - Three Camera wrapper

## Hierarchy

- [`X3DObject`](X3D_X3DObject.X3DObject.md)

  ↳ **`XCamera`**

## Table of contents

### Constructors

- [constructor](X3D_X3DCoreObjects.XCamera.md#constructor)

### Properties

- [#\_anim\_loaded](X3D_X3DCoreObjects.XCamera.md##_anim_loaded)
- [\_3d\_set\_once](X3D_X3DCoreObjects.XCamera.md#_3d_set_once)
- [\_animation\_clips](X3D_X3DCoreObjects.XCamera.md#_animation_clips)
- [\_animation\_mixer](X3D_X3DCoreObjects.XCamera.md#_animation_mixer)
- [\_auto\_play\_animation](X3D_X3DCoreObjects.XCamera.md#_auto_play_animation)
- [\_cache\_cmd\_txt](X3D_X3DCoreObjects.XCamera.md#_cache_cmd_txt)
- [\_cache\_jcmd](X3D_X3DCoreObjects.XCamera.md#_cache_jcmd)
- [\_camera](X3D_X3DCoreObjects.XCamera.md#_camera)
- [\_cannon\_obj](X3D_X3DCoreObjects.XCamera.md#_cannon_obj)
- [\_cannon\_shape](X3D_X3DCoreObjects.XCamera.md#_cannon_shape)
- [\_children](X3D_X3DCoreObjects.XCamera.md#_children)
- [\_clock](X3D_X3DCoreObjects.XCamera.md#_clock)
- [\_close](X3D_X3DCoreObjects.XCamera.md#_close)
- [\_current\_action](X3D_X3DCoreObjects.XCamera.md#_current_action)
- [\_data\_source](X3D_X3DCoreObjects.XCamera.md#_data_source)
- [\_disable\_frame\_3d\_state](X3D_X3DCoreObjects.XCamera.md#_disable_frame_3d_state)
- [\_enable\_physics](X3D_X3DCoreObjects.XCamera.md#_enable_physics)
- [\_event\_listeners\_ids](X3D_X3DCoreObjects.XCamera.md#_event_listeners_ids)
- [\_fade\_duration](X3D_X3DCoreObjects.XCamera.md#_fade_duration)
- [\_far](X3D_X3DCoreObjects.XCamera.md#_far)
- [\_fov](X3D_X3DCoreObjects.XCamera.md#_fov)
- [\_fraction](X3D_X3DCoreObjects.XCamera.md#_fraction)
- [\_id](X3D_X3DCoreObjects.XCamera.md#_id)
- [\_is\_camera](X3D_X3DCoreObjects.XCamera.md#_is_camera)
- [\_load\_animations](X3D_X3DCoreObjects.XCamera.md#_load_animations)
- [\_log\_rules](X3D_X3DCoreObjects.XCamera.md#_log_rules)
- [\_mass](X3D_X3DCoreObjects.XCamera.md#_mass)
- [\_model\_url](X3D_X3DCoreObjects.XCamera.md#_model_url)
- [\_name](X3D_X3DCoreObjects.XCamera.md#_name)
- [\_nano\_commands](X3D_X3DCoreObjects.XCamera.md#_nano_commands)
- [\_on](X3D_X3DCoreObjects.XCamera.md#_on)
- [\_on\_click](X3D_X3DCoreObjects.XCamera.md#_on_click)
- [\_on\_create](X3D_X3DCoreObjects.XCamera.md#_on_create)
- [\_on\_data](X3D_X3DCoreObjects.XCamera.md#_on_data)
- [\_on\_event](X3D_X3DCoreObjects.XCamera.md#_on_event)
- [\_on\_frame](X3D_X3DCoreObjects.XCamera.md#_on_frame)
- [\_on\_load](X3D_X3DCoreObjects.XCamera.md#_on_load)
- [\_on\_mount](X3D_X3DCoreObjects.XCamera.md#_on_mount)
- [\_once](X3D_X3DCoreObjects.XCamera.md#_once)
- [\_parent](X3D_X3DCoreObjects.XCamera.md#_parent)
- [\_position](X3D_X3DCoreObjects.XCamera.md#_position)
- [\_positional\_audio](X3D_X3DCoreObjects.XCamera.md#_positional_audio)
- [\_positional\_audio\_listener](X3D_X3DCoreObjects.XCamera.md#_positional_audio_listener)
- [\_positional\_audio\_source](X3D_X3DCoreObjects.XCamera.md#_positional_audio_source)
- [\_process\_data](X3D_X3DCoreObjects.XCamera.md#_process_data)
- [\_process\_frame](X3D_X3DCoreObjects.XCamera.md#_process_frame)
- [\_ratio](X3D_X3DCoreObjects.XCamera.md#_ratio)
- [\_rotation](X3D_X3DCoreObjects.XCamera.md#_rotation)
- [\_scale](X3D_X3DCoreObjects.XCamera.md#_scale)
- [\_three\_class](X3D_X3DCoreObjects.XCamera.md#_three_class)
- [\_three\_obj](X3D_X3DCoreObjects.XCamera.md#_three_obj)
- [\_threes\_class\_args](X3D_X3DCoreObjects.XCamera.md#_threes_class_args)
- [\_type](X3D_X3DCoreObjects.XCamera.md#_type)
- [\_visible](X3D_X3DCoreObjects.XCamera.md#_visible)
- [\_xem\_options](X3D_X3DCoreObjects.XCamera.md#_xem_options)
- [\_xporter](X3D_X3DCoreObjects.XCamera.md#_xporter)
- [xtype](X3D_X3DCoreObjects.XCamera.md#xtype)

### Accessors

- [canon](X3D_X3DCoreObjects.XCamera.md#canon)
- [three](X3D_X3DCoreObjects.XCamera.md#three)

### Methods

- [addEventListener](X3D_X3DCoreObjects.XCamera.md#addeventlistener)
- [addNanoCommand](X3D_X3DCoreObjects.XCamera.md#addnanocommand)
- [addNanoCommandPack](X3D_X3DCoreObjects.XCamera.md#addnanocommandpack)
- [addXporterDataIgnoreFields](X3D_X3DCoreObjects.XCamera.md#addxporterdataignorefields)
- [addXporterInstanceXporter](X3D_X3DCoreObjects.XCamera.md#addxporterinstancexporter)
- [append](X3D_X3DCoreObjects.XCamera.md#append)
- [checkAndRunInternalFunction](X3D_X3DCoreObjects.XCamera.md#checkandruninternalfunction)
- [clearAttributes](X3D_X3DCoreObjects.XCamera.md#clearattributes)
- [clearPositionalAudio](X3D_X3DCoreObjects.XCamera.md#clearpositionalaudio)
- [createPositionalAudio](X3D_X3DCoreObjects.XCamera.md#createpositionalaudio)
- [dispose](X3D_X3DCoreObjects.XCamera.md#dispose)
- [emptyDataSource](X3D_X3DCoreObjects.XCamera.md#emptydatasource)
- [execute](X3D_X3DCoreObjects.XCamera.md#execute)
- [getCannonObject](X3D_X3DCoreObjects.XCamera.md#getcannonobject)
- [getThreeObject](X3D_X3DCoreObjects.XCamera.md#getthreeobject)
- [hide](X3D_X3DCoreObjects.XCamera.md#hide)
- [importAnimationFromFBXFile](X3D_X3DCoreObjects.XCamera.md#importanimationfromfbxfile)
- [importAnimationFromGLTF](X3D_X3DCoreObjects.XCamera.md#importanimationfromgltf)
- [importAnimations](X3D_X3DCoreObjects.XCamera.md#importanimations)
- [init](X3D_X3DCoreObjects.XCamera.md#init)
- [loadAnimations](X3D_X3DCoreObjects.XCamera.md#loadanimations)
- [loadModel](X3D_X3DCoreObjects.XCamera.md#loadmodel)
- [loadThreeObjectFromGLTF](X3D_X3DCoreObjects.XCamera.md#loadthreeobjectfromgltf)
- [onClick](X3D_X3DCoreObjects.XCamera.md#onclick)
- [onCreate](X3D_X3DCoreObjects.XCamera.md#oncreate)
- [onData](X3D_X3DCoreObjects.XCamera.md#ondata)
- [onFrame](X3D_X3DCoreObjects.XCamera.md#onframe)
- [onLoad](X3D_X3DCoreObjects.XCamera.md#onload)
- [onMount](X3D_X3DCoreObjects.XCamera.md#onmount)
- [parse](X3D_X3DCoreObjects.XCamera.md#parse)
- [parse3d](X3D_X3DCoreObjects.XCamera.md#parse3d)
- [parseEvents](X3D_X3DCoreObjects.XCamera.md#parseevents)
- [parseFields](X3D_X3DCoreObjects.XCamera.md#parsefields)
- [parseFieldsFromXDataObject](X3D_X3DCoreObjects.XCamera.md#parsefieldsfromxdataobject)
- [pauseAudio](X3D_X3DCoreObjects.XCamera.md#pauseaudio)
- [playAllAnimations](X3D_X3DCoreObjects.XCamera.md#playallanimations)
- [playAnimation](X3D_X3DCoreObjects.XCamera.md#playanimation)
- [playAudio](X3D_X3DCoreObjects.XCamera.md#playaudio)
- [removeAllEventListeners](X3D_X3DCoreObjects.XCamera.md#removealleventlisteners)
- [removeEventListener](X3D_X3DCoreObjects.XCamera.md#removeeventlistener)
- [run](X3D_X3DCoreObjects.XCamera.md#run)
- [set3DState](X3D_X3DCoreObjects.XCamera.md#set3dstate)
- [setPosition](X3D_X3DCoreObjects.XCamera.md#setposition)
- [setPositionFromVector3](X3D_X3DCoreObjects.XCamera.md#setpositionfromvector3)
- [setPositionalAudioSource](X3D_X3DCoreObjects.XCamera.md#setpositionalaudiosource)
- [setRotation](X3D_X3DCoreObjects.XCamera.md#setrotation)
- [setRotationFromEuler](X3D_X3DCoreObjects.XCamera.md#setrotationfromeuler)
- [setRotationFromQuaternion](X3D_X3DCoreObjects.XCamera.md#setrotationfromquaternion)
- [setScale](X3D_X3DCoreObjects.XCamera.md#setscale)
- [setScaleFromVector3](X3D_X3DCoreObjects.XCamera.md#setscalefromvector3)
- [show](X3D_X3DCoreObjects.XCamera.md#show)
- [stopAllAnimations](X3D_X3DCoreObjects.XCamera.md#stopallanimations)
- [stopAnimation](X3D_X3DCoreObjects.XCamera.md#stopanimation)
- [toString](X3D_X3DCoreObjects.XCamera.md#tostring)
- [toXData](X3D_X3DCoreObjects.XCamera.md#toxdata)
- [toggle](X3D_X3DCoreObjects.XCamera.md#toggle)
- [getFromThreeObject](X3D_X3DCoreObjects.XCamera.md#getfromthreeobject)
- [getXData](X3D_X3DCoreObjects.XCamera.md#getxdata)

## Constructors

### constructor

• **new XCamera**(`data`): [`XCamera`](X3D_X3DCoreObjects.XCamera.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`XCameraData`](../interfaces/X3D_X3DCoreObjects.XCameraData.md) |

#### Returns

[`XCamera`](X3D_X3DCoreObjects.XCamera.md)

#### Overrides

[X3DObject](X3D_X3DObject.X3DObject.md).[constructor](X3D_X3DObject.X3DObject.md#constructor)

#### Defined in

[X3D/X3DCoreObjects.ts:87](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L87)

## Properties

### #\_anim\_loaded

• `Private` **#\_anim\_loaded**: `boolean` = `false`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[#_anim_loaded](X3D_X3DObject.X3DObject.md##_anim_loaded)

#### Defined in

[X3D/X3DObject.ts:154](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L154)

___

### \_3d\_set\_once

• **\_3d\_set\_once**: `boolean`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_3d_set_once](X3D_X3DObject.X3DObject.md#_3d_set_once)

#### Defined in

[X3D/X3DObject.ts:125](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L125)

___

### \_animation\_clips

• `Protected` **\_animation\_clips**: `Object`

protected fields should not be override by XData object

#### Index signature

▪ [name: `string`]: `THREE.AnimationAction`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_animation_clips](X3D_X3DObject.X3DObject.md#_animation_clips)

#### Defined in

[X3D/X3DObject.ts:135](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L135)

___

### \_animation\_mixer

• `Protected` **\_animation\_mixer**: ``null`` \| `AnimationMixer`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_animation_mixer](X3D_X3DObject.X3DObject.md#_animation_mixer)

#### Defined in

[X3D/X3DObject.ts:138](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L138)

___

### \_auto\_play\_animation

• **\_auto\_play\_animation**: `boolean` = `false`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_auto_play_animation](X3D_X3DObject.X3DObject.md#_auto_play_animation)

#### Defined in

[X3D/X3DObject.ts:129](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L129)

___

### \_cache\_cmd\_txt

• `Protected` `Optional` **\_cache\_cmd\_txt**: `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_cache_cmd_txt](X3D_X3DObject.X3DObject.md#_cache_cmd_txt)

#### Defined in

[Core/XObject.ts:116](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L116)

___

### \_cache\_jcmd

• `Protected` `Optional` **\_cache\_jcmd**: `any`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_cache_jcmd](X3D_X3DObject.X3DObject.md#_cache_jcmd)

#### Defined in

[Core/XObject.ts:117](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L117)

___

### \_camera

• **\_camera**: [`XCameraTypes`](../modules/X3D_X3DCoreObjects.md#xcameratypes) = `"perspective-camera"`

#### Defined in

[X3D/X3DCoreObjects.ts:84](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L84)

___

### \_cannon\_obj

• **\_cannon\_obj**: `undefined` \| ``null`` \| `Body`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_cannon_obj](X3D_X3DObject.X3DObject.md#_cannon_obj)

#### Defined in

[X3D/X3DObject.ts:115](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L115)

___

### \_cannon\_shape

• **\_cannon\_shape**: `undefined` \| ``null`` \| `Shape`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_cannon_shape](X3D_X3DObject.X3DObject.md#_cannon_shape)

#### Defined in

[X3D/X3DObject.ts:116](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L116)

___

### \_children

• **\_children**: ([`XObject`](Core_XObject.XObject.md) \| [`XObjectData`](../modules/Core_XObject.md#xobjectdata))[] = `[]`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_children](X3D_X3DObject.X3DObject.md#_children)

#### Defined in

[Core/XObject.ts:93](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L93)

___

### \_clock

• `Protected` **\_clock**: `Clock`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_clock](X3D_X3DObject.X3DObject.md#_clock)

#### Defined in

[X3D/X3DObject.ts:136](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L136)

___

### \_close

• **\_close**: `number` = `0.01`

#### Defined in

[X3D/X3DCoreObjects.ts:82](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L82)

___

### \_current\_action

• `Protected` **\_current\_action**: ``null`` \| `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_current_action](X3D_X3DObject.X3DObject.md#_current_action)

#### Defined in

[X3D/X3DObject.ts:141](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L141)

___

### \_data\_source

• `Optional` **\_data\_source**: `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_data_source](X3D_X3DObject.X3DObject.md#_data_source)

#### Defined in

[Core/XObject.ts:96](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L96)

___

### \_disable\_frame\_3d\_state

• **\_disable\_frame\_3d\_state**: `boolean`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_disable_frame_3d_state](X3D_X3DObject.X3DObject.md#_disable_frame_3d_state)

#### Defined in

[X3D/X3DObject.ts:127](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L127)

___

### \_enable\_physics

• **\_enable\_physics**: `boolean`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_enable_physics](X3D_X3DObject.X3DObject.md#_enable_physics)

#### Defined in

[X3D/X3DObject.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L118)

___

### \_event\_listeners\_ids

• `Protected` **\_event\_listeners\_ids**: `Object` = `{}`

#### Index signature

▪ [eventName: `string`]: `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_event_listeners_ids](X3D_X3DObject.X3DObject.md#_event_listeners_ids)

#### Defined in

[Core/XObject.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L118)

___

### \_fade\_duration

• **\_fade\_duration**: `number`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_fade_duration](X3D_X3DObject.X3DObject.md#_fade_duration)

#### Defined in

[X3D/X3DObject.ts:126](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L126)

___

### \_far

• **\_far**: `number` = `2000`

#### Defined in

[X3D/X3DCoreObjects.ts:81](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L81)

___

### \_fov

• **\_fov**: `number` = `20`

#### Defined in

[X3D/X3DCoreObjects.ts:79](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L79)

___

### \_fraction

• `Protected` **\_fraction**: `number`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_fraction](X3D_X3DObject.X3DObject.md#_fraction)

#### Defined in

[X3D/X3DObject.ts:137](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L137)

___

### \_id

• **\_id**: `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_id](X3D_X3DObject.X3DObject.md#_id)

#### Defined in

[X3D/X3DObject.ts:109](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L109)

___

### \_is\_camera

• `Readonly` **\_is\_camera**: `boolean` = `true`

#### Defined in

[X3D/X3DCoreObjects.ts:77](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L77)

___

### \_load\_animations

• **\_load\_animations**: `boolean` = `false`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_load_animations](X3D_X3DObject.X3DObject.md#_load_animations)

#### Defined in

[X3D/X3DObject.ts:128](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L128)

___

### \_log\_rules

• `Protected` **\_log\_rules**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_import_animation` | `boolean` |
| `_load_model` | `boolean` |
| `_play_animation` | `boolean` |

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_log_rules](X3D_X3DObject.X3DObject.md#_log_rules)

#### Defined in

[X3D/X3DObject.ts:145](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L145)

___

### \_mass

• **\_mass**: `number`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_mass](X3D_X3DObject.X3DObject.md#_mass)

#### Defined in

[X3D/X3DObject.ts:117](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L117)

___

### \_model\_url

• **\_model\_url**: `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_model_url](X3D_X3DObject.X3DObject.md#_model_url)

#### Defined in

[X3D/X3DObject.ts:123](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L123)

___

### \_name

• **\_name**: `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_name](X3D_X3DObject.X3DObject.md#_name)

#### Defined in

[X3D/X3DObject.ts:111](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L111)

___

### \_nano\_commands

• `Protected` **\_nano\_commands**: `Object` = `{}`

#### Index signature

▪ [k: `string`]: [`XNanoCommand`](../interfaces/Core_XNanoCommands.XNanoCommand.md)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_nano_commands](X3D_X3DObject.X3DObject.md#_nano_commands)

#### Defined in

[Core/XObject.ts:115](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L115)

___

### \_on

• **\_on**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_on](X3D_X3DObject.X3DObject.md#_on)

#### Defined in

[Core/XObject.ts:97](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L97)

___

### \_on\_click

• `Optional` **\_on\_click**: [`X3DListener`](../modules/X3D_X3DObject.md#x3dlistener)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_on_click](X3D_X3DObject.X3DObject.md#_on_click)

#### Defined in

[X3D/X3DObject.ts:131](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L131)

___

### \_on\_create

• `Optional` **\_on\_create**: `string` \| `Function`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_on_create](X3D_X3DObject.X3DObject.md#_on_create)

#### Defined in

[Core/XObject.ts:99](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L99)

___

### \_on\_data

• `Optional` **\_on\_data**: `string` \| `Function`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_on_data](X3D_X3DObject.X3DObject.md#_on_data)

#### Defined in

[Core/XObject.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L102)

___

### \_on\_event

• `Optional` **\_on\_event**: `string` \| `Function`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_on_event](X3D_X3DObject.X3DObject.md#_on_event)

#### Defined in

[Core/XObject.ts:103](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L103)

___

### \_on\_frame

• `Optional` **\_on\_frame**: `string` \| `Function`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_on_frame](X3D_X3DObject.X3DObject.md#_on_frame)

#### Defined in

[Core/XObject.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L101)

___

### \_on\_load

• `Optional` **\_on\_load**: [`X3DListener`](../modules/X3D_X3DObject.md#x3dlistener)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_on_load](X3D_X3DObject.X3DObject.md#_on_load)

#### Defined in

[X3D/X3DObject.ts:130](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L130)

___

### \_on\_mount

• `Optional` **\_on\_mount**: `string` \| `Function`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_on_mount](X3D_X3DObject.X3DObject.md#_on_mount)

#### Defined in

[Core/XObject.ts:100](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L100)

___

### \_once

• **\_once**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_once](X3D_X3DObject.X3DObject.md#_once)

#### Defined in

[Core/XObject.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L98)

___

### \_parent

• **\_parent**: ``null`` \| [`XObject`](Core_XObject.XObject.md) = `null`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_parent](X3D_X3DObject.X3DObject.md#_parent)

#### Defined in

[Core/XObject.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L94)

___

### \_position

• **\_position**: `Vector3`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_position](X3D_X3DObject.X3DObject.md#_position)

#### Defined in

[X3D/X3DObject.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L119)

___

### \_positional\_audio

• `Protected` **\_positional\_audio**: `undefined` \| ``null`` \| `PositionalAudio`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_positional_audio](X3D_X3DObject.X3DObject.md#_positional_audio)

#### Defined in

[X3D/X3DObject.ts:142](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L142)

___

### \_positional\_audio\_listener

• **\_positional\_audio\_listener**: `boolean` = `false`

#### Defined in

[X3D/X3DCoreObjects.ts:83](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L83)

___

### \_positional\_audio\_source

• **\_positional\_audio\_source**: `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_positional_audio_source](X3D_X3DObject.X3DObject.md#_positional_audio_source)

#### Defined in

[X3D/X3DObject.ts:124](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L124)

___

### \_process\_data

• **\_process\_data**: `boolean` = `true`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_process_data](X3D_X3DObject.X3DObject.md#_process_data)

#### Defined in

[Core/XObject.ts:108](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L108)

___

### \_process\_frame

• **\_process\_frame**: `boolean` = `true`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_process_frame](X3D_X3DObject.X3DObject.md#_process_frame)

#### Defined in

[Core/XObject.ts:107](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L107)

___

### \_ratio

• **\_ratio**: `number` = `1.7999`

#### Defined in

[X3D/X3DCoreObjects.ts:80](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L80)

___

### \_rotation

• **\_rotation**: `Euler`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_rotation](X3D_X3DObject.X3DObject.md#_rotation)

#### Defined in

[X3D/X3DObject.ts:120](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L120)

___

### \_scale

• **\_scale**: `Vector3`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_scale](X3D_X3DObject.X3DObject.md#_scale)

#### Defined in

[X3D/X3DObject.ts:121](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L121)

___

### \_three\_class

• **\_three\_class**: `any`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_three_class](X3D_X3DObject.X3DObject.md#_three_class)

#### Defined in

[X3D/X3DObject.ts:112](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L112)

___

### \_three\_obj

• **\_three\_obj**: ``null`` \| `Object3D`\<`Event`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_three_obj](X3D_X3DObject.X3DObject.md#_three_obj)

#### Defined in

[X3D/X3DObject.ts:114](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L114)

___

### \_threes\_class\_args

• **\_threes\_class\_args**: `any`[]

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_threes_class_args](X3D_X3DObject.X3DObject.md#_threes_class_args)

#### Defined in

[X3D/X3DObject.ts:113](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L113)

___

### \_type

• **\_type**: `string`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_type](X3D_X3DObject.X3DObject.md#_type)

#### Defined in

[X3D/X3DObject.ts:110](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L110)

___

### \_visible

• **\_visible**: `boolean`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_visible](X3D_X3DObject.X3DObject.md#_visible)

#### Defined in

[X3D/X3DObject.ts:122](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L122)

___

### \_xem\_options

• `Protected` **\_xem\_options**: [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_xem_options](X3D_X3DObject.X3DObject.md#_xem_options)

#### Defined in

[X3D/X3DObject.ts:143](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L143)

___

### \_xporter

• `Protected` **\_xporter**: [`XDataXporter`](../modules/Core_XObject.md#xdataxporter)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[_xporter](X3D_X3DObject.X3DObject.md#_xporter)

#### Defined in

[Core/XObject.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L119)

___

### xtype

▪ `Static` **xtype**: `string` = `"camera"`

#### Defined in

[X3D/X3DCoreObjects.ts:75](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L75)

## Accessors

### canon

• `get` **canon**(): `Body`

#### Returns

`Body`

#### Inherited from

X3DObject.canon

#### Defined in

[X3D/X3DObject.ts:387](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L387)

___

### three

• `get` **three**(): `Object3D`\<`Event`\> \| `Promise`\<`Object3D`\<`Event`\>\>

#### Returns

`Object3D`\<`Event`\> \| `Promise`\<`Object3D`\<`Event`\>\>

#### Inherited from

X3DObject.three

#### Defined in

[X3D/X3DObject.ts:391](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L391)

## Methods

### addEventListener

▸ **addEventListener**(`eventName`, `handler`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |
| `handler` | [`XObjectOnEventHandler`](../modules/Core_XObject.md#xobjectoneventhandler) |
| `options?` | [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions) |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[addEventListener](X3D_X3DObject.X3DObject.md#addeventlistener)

#### Defined in

[Core/XObject.ts:208](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L208)

___

### addNanoCommand

▸ **addNanoCommand**(`commandName`, `nanoCommandFunction`): `void`

Add single nano command to the object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `commandName` | `string` | the nano command name |
| `nanoCommandFunction` | [`XNanoCommand`](../interfaces/Core_XNanoCommands.XNanoCommand.md) |  |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[addNanoCommand](X3D_X3DObject.X3DObject.md#addnanocommand)

#### Defined in

[Core/XObject.ts:245](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L245)

___

### addNanoCommandPack

▸ **addNanoCommandPack**(`ncPack`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `ncPack` | [`XNanoCommandPack`](../modules/Core_XNanoCommands.md#xnanocommandpack) |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[addNanoCommandPack](X3D_X3DObject.X3DObject.md#addnanocommandpack)

#### Defined in

[Core/XObject.ts:252](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L252)

___

### addXporterDataIgnoreFields

▸ **addXporterDataIgnoreFields**(`ignoreFields`): `void`

List of fields to ignore when exporting the xobject to XData or string format

#### Parameters

| Name | Type |
| :------ | :------ |
| `ignoreFields` | `string`[] |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[addXporterDataIgnoreFields](X3D_X3DObject.X3DObject.md#addxporterdataignorefields)

#### Defined in

[Core/XObject.ts:264](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L264)

___

### addXporterInstanceXporter

▸ **addXporterInstanceXporter**(`classOfInstance`, `handler`): `void`

Add XData Xporter instance handler

#### Parameters

| Name | Type |
| :------ | :------ |
| `classOfInstance` | `any` |
| `handler` | [`XDataXporterHandler`](../interfaces/Core_XObject.XDataXporterHandler.md) |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[addXporterInstanceXporter](X3D_X3DObject.X3DObject.md#addxporterinstancexporter)

#### Defined in

[Core/XObject.ts:272](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L272)

___

### append

▸ **append**(`x3dObject`): `Promise`\<`void`\>

Append X3DObject as a child object

#### Parameters

| Name | Type |
| :------ | :------ |
| `x3dObject` | [`X3DObject`](X3D_X3DObject.X3DObject.md) \| [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[append](X3D_X3DObject.X3DObject.md#append)

#### Defined in

[X3D/X3DObject.ts:587](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L587)

___

### checkAndRunInternalFunction

▸ **checkAndRunInternalFunction**(`func`, `...params`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `func` | `any` |
| `...params` | `any` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[checkAndRunInternalFunction](X3D_X3DObject.X3DObject.md#checkandruninternalfunction)

#### Defined in

[Core/XObject.ts:370](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L370)

___

### clearAttributes

▸ **clearAttributes**(`attributes`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `attributes` | `string`[] |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[clearAttributes](X3D_X3DObject.X3DObject.md#clearattributes)

#### Defined in

[Core/XObject.ts:597](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L597)

___

### clearPositionalAudio

▸ **clearPositionalAudio**(): `void`

clears the positional audio from the object and the Three object

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[clearPositionalAudio](X3D_X3DObject.X3DObject.md#clearpositionalaudio)

#### Defined in

[X3D/X3DObject.ts:509](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L509)

___

### createPositionalAudio

▸ **createPositionalAudio**(`source`, `data?`): `Promise`\<`PositionalAudio`\>

This method creates Positional Audio from a source file and attach it to the 3D object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | the source file path (mp3, wav, ogg...) |
| `data?` | [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) | optional data object that can contain "autoplay" and "loop" boolean values |

#### Returns

`Promise`\<`PositionalAudio`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[createPositionalAudio](X3D_X3DObject.X3DObject.md#createpositionalaudio)

#### Defined in

[X3D/X3DObject.ts:483](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L483)

___

### dispose

▸ **dispose**(): `Promise`\<`void`\>

Dispose all object memory (destructor)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[dispose](X3D_X3DObject.X3DObject.md#dispose)

#### Defined in

[X3D/X3DObject.ts:227](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L227)

___

### emptyDataSource

▸ **emptyDataSource**(): `void`

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[emptyDataSource](X3D_X3DObject.X3DObject.md#emptydatasource)

#### Defined in

[Core/XObject.ts:413](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L413)

___

### execute

▸ **execute**(`xCommand`): `Promise`\<`void`\>

Execute XCommand within the XObject Nano Commands

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `xCommand` | [`XCommand`](Core_XCommand.XCommand.md) \| [`XCommandData`](../modules/Core_XCommand.md#xcommanddata) | XCommand to execute Nano command example: "set-text" : (xCommand,xObject) => { xObject.setText(xCommands.params.text) } |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[execute](X3D_X3DObject.X3DObject.md#execute)

#### Defined in

[Core/XObject.ts:525](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L525)

___

### getCannonObject

▸ **getCannonObject**(): `Body`

This method returns the Canon physic's object of the X3DObject

#### Returns

`Body`

CANNON.Body

**`Comment`**

if the X3DObject physics should be enabled the 
         _enable_physics attribute should be set to true
         and the _enable_physics attribute for the main engine should be set to true

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[getCannonObject](X3D_X3DObject.X3DObject.md#getcannonobject)

#### Defined in

[X3D/X3DObject.ts:444](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L444)

___

### getThreeObject

▸ **getThreeObject**(): `Object3D`\<`Event`\> \| `Promise`\<`Object3D`\<`Event`\>\>

This method gets the Three object of the X3DObject

#### Returns

`Object3D`\<`Event`\> \| `Promise`\<`Object3D`\<`Event`\>\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[getThreeObject](X3D_X3DObject.X3DObject.md#getthreeobject)

#### Defined in

[X3D/X3DObject.ts:398](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L398)

___

### hide

▸ **hide**(): `void`

Hide the X3DObject

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[hide](X3D_X3DObject.X3DObject.md#hide)

#### Defined in

[X3D/X3DObject.ts:611](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L611)

___

### importAnimationFromFBXFile

▸ **importAnimationFromFBXFile**(`url`, `newName?`): `Promise`\<`void`\>

Import animations from an FBX file (compatible with maximo.com animations)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `url` | `string` | url of the FBX file |
| `newName?` | `string` | - |

#### Returns

`Promise`\<`void`\>

**`Since`**

1.04

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[importAnimationFromFBXFile](X3D_X3DObject.X3DObject.md#importanimationfromfbxfile)

#### Defined in

[X3D/X3DObject.ts:734](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L734)

___

### importAnimationFromGLTF

▸ **importAnimationFromGLTF**(`modelUrl`, `newName`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelUrl` | `string` |
| `newName` | `undefined` \| `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[importAnimationFromGLTF](X3D_X3DObject.X3DObject.md#importanimationfromgltf)

#### Defined in

[X3D/X3DObject.ts:724](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L724)

___

### importAnimations

▸ **importAnimations**(`threeObj`, `newName?`): `Promise`\<`void`\>

Import animation from a THREE Object3D to the current object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `threeObj` | `Object3D`\<`Event`\> | ThreeJs Object3D to import the animations from |
| `newName?` | `string` | optional - change the animation name to a new name (if there are more than one animation they will be added with index: Idle, Idle-2, Idle -3 ...) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[importAnimations](X3D_X3DObject.X3DObject.md#importanimations)

#### Defined in

[X3D/X3DObject.ts:635](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L635)

___

### init

▸ **init**(`data?`, `skipParse?`): `void`

Initialize the XObject

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data?` | `any` | data to parse (XObjectData) |
| `skipParse?` | `boolean` | skip data parsing |

#### Returns

`void`

**`Deprecated`**

- use parse method instead

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[init](X3D_X3DObject.X3DObject.md#init)

#### Defined in

[Core/XObject.ts:167](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L167)

___

### loadAnimations

▸ **loadAnimations**(): `Promise`\<`void`\>

loads animation on start or after create object

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[loadAnimations](X3D_X3DObject.X3DObject.md#loadanimations)

#### Defined in

[X3D/X3DObject.ts:775](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L775)

___

### loadModel

▸ **loadModel**(`modelUrl?`): `Promise`\<`void`\>

Loads a 3d model from a GLTF/GLB file into the X3DObject and updates the Three object

#### Parameters

| Name | Type |
| :------ | :------ |
| `modelUrl?` | `string` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[loadModel](X3D_X3DObject.X3DObject.md#loadmodel)

#### Defined in

[X3D/X3DObject.ts:677](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L677)

___

### loadThreeObjectFromGLTF

▸ **loadThreeObjectFromGLTF**(`modelUrl`): `Promise`\<`Object3D`\<`Event`\>\>

Loads a new 3D model to the X3DObject from a GLTF/GLB file

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `modelUrl` | `string` | url of the model file |

#### Returns

`Promise`\<`Object3D`\<`Event`\>\>

Promise<THREE.Object3D>

**`Deprecated`**

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[loadThreeObjectFromGLTF](X3D_X3DObject.X3DObject.md#loadthreeobjectfromgltf)

#### Defined in

[X3D/X3DObject.ts:668](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L668)

___

### onClick

▸ **onClick**(`event?`): `Promise`\<`void`\>

This method is called when the X3DObject is clicked
if override this method, call super.onClick() to activate the default onClick method

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `any` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[onClick](X3D_X3DObject.X3DObject.md#onclick)

#### Defined in

[X3D/X3DObject.ts:717](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L717)

___

### onCreate

▸ **onCreate**(): `Promise`\<`void`\>

this method triggered after the HTML DOM object has been created and added to the parent element
support external _on_create anonymous function in the , example:
_on_create: async (xObject) => {
     // xObject -> The XObject parent of the _on_create function, use instead of this keyword
     // write code that will be executed each frame.
     // make sure to write async anonymous function. 
}

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[onCreate](X3D_X3DObject.X3DObject.md#oncreate)

#### Defined in

[Core/XObject.ts:358](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L358)

___

### onData

▸ **onData**(`data`): `Promise`\<`void`\>

Triggers when new data is being received from the data source

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `any` | the data if override this method make sure to call super.onData(data) to run the _on_data attribute |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[onData](X3D_X3DObject.X3DObject.md#ondata)

#### Defined in

[Core/XObject.ts:425](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L425)

___

### onFrame

▸ **onFrame**(`frameNumber`): `Promise`\<`void`\>

onFrame function for x3d-object
- parse textual command to SpellCommand and cache
- set 3d-state (position, rotation & scale) if Spell in control
- update animation mixer if exists

#### Parameters

| Name | Type |
| :------ | :------ |
| `frameNumber` | `number` |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[onFrame](X3D_X3DObject.X3DObject.md#onframe)

#### Defined in

[X3D/X3DObject.ts:542](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L542)

___

### onLoad

▸ **onLoad**(): `Promise`\<`void`\>

This method is called after the 3D model is loaded
if override this method, call super.onLoad() to activate the default onLoad method

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[onLoad](X3D_X3DObject.X3DObject.md#onload)

#### Defined in

[X3D/X3DObject.ts:692](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L692)

___

### onMount

▸ **onMount**(): `Promise`\<`void`\>

Triggers when the object is being mounted to other element
support external _on_create anonymous function in the , example:
_on_mount: async (xObject) => {
     // xObject -> The XObject parent of the _on_mount function, use instead of this keyword
     // write code that will be executed each frame.
     // make sure to write async anonymous function. 
}

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[onMount](X3D_X3DObject.X3DObject.md#onmount)

#### Defined in

[X3D/X3DObject.ts:703](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L703)

___

### parse

▸ **parse**(`data`, `ignore?`): `void`

Parse data to the XObject

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | `undefined` | data to parse |
| `ignore` | [`wordsList`](../modules/Core_XObject.md#wordslist) | `reservedWords` | lis of words to ignore in the parse process |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[parse](X3D_X3DObject.X3DObject.md#parse)

#### Defined in

[Core/XObject.ts:291](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L291)

___

### parse3d

▸ **parse3d**(`data`): `void`

This method parses the X3DObject 3D data and sets the X3DObject properties

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[parse3d](X3D_X3DObject.X3DObject.md#parse3d)

#### Defined in

[X3D/X3DObject.ts:242](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L242)

___

### parseEvents

▸ **parseEvents**(`options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `options?` | [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions) |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[parseEvents](X3D_X3DObject.X3DObject.md#parseevents)

#### Defined in

[Core/XObject.ts:173](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L173)

___

### parseFields

▸ **parseFields**(`data`, `fields`, `checkNonXParams?`): `void`

Parse list of fields from IXObjectData to the class

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | the data |
| `fields` | `string`[] | array of field names (string) |
| `checkNonXParams?` | `boolean` | also check non Xpell fields (fields that not starting with "_" sign) |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[parseFields](X3D_X3DObject.X3DObject.md#parsefields)

#### Defined in

[Core/XObject.ts:330](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L330)

___

### parseFieldsFromXDataObject

▸ **parseFieldsFromXDataObject**(`data`, `fields`): `void`

Parse data to the XObject

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | data to parse |
| `fields` | `Object` | - |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[parseFieldsFromXDataObject](X3D_X3DObject.X3DObject.md#parsefieldsfromxdataobject)

#### Defined in

[Core/XObject.ts:311](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L311)

___

### pauseAudio

▸ **pauseAudio**(): `void`

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[pauseAudio](X3D_X3DObject.X3DObject.md#pauseaudio)

#### Defined in

[X3D/X3DObject.ts:524](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L524)

___

### playAllAnimations

▸ **playAllAnimations**(): `void`

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[playAllAnimations](X3D_X3DObject.X3DObject.md#playallanimations)

#### Defined in

[X3D/X3DObject.ts:794](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L794)

___

### playAnimation

▸ **playAnimation**(`clipName`, `loop?`, `repetitions?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `clipName` | `string` |
| `loop?` | `AnimationActionLoopStyles` |
| `repetitions?` | `number` |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[playAnimation](X3D_X3DObject.X3DObject.md#playanimation)

#### Defined in

[X3D/X3DObject.ts:812](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L812)

___

### playAudio

▸ **playAudio**(`loop?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `loop?` | `boolean` |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[playAudio](X3D_X3DObject.X3DObject.md#playaudio)

#### Defined in

[X3D/X3DObject.ts:516](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L516)

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): `void`

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[removeAllEventListeners](X3D_X3DObject.X3DObject.md#removealleventlisteners)

#### Defined in

[Core/XObject.ts:224](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L224)

___

### removeEventListener

▸ **removeEventListener**(`eventName`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `eventName` | `string` |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[removeEventListener](X3D_X3DObject.X3DObject.md#removeeventlistener)

#### Defined in

[Core/XObject.ts:217](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L217)

___

### run

▸ **run**(`nanoCommand`, `cache?`): `Promise`\<`void`\>

Runs object nano commands

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `nanoCommand` | `string` | `undefined` | object nano command (string) |
| `cache` | `boolean` | `true` | cache last command to prevent multiple parsing on the same command |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[run](X3D_X3DObject.X3DObject.md#run)

#### Defined in

[Core/XObject.ts:501](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L501)

___

### set3DState

▸ **set3DState**(): `void`

This method sets the 3D State of the object (position, rotation & scale).

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[set3DState](X3D_X3DObject.X3DObject.md#set3dstate)

#### Defined in

[X3D/X3DObject.ts:368](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L368)

___

### setPosition

▸ **setPosition**(`positionObject`): `void`

Sets the X3DObject position

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `positionObject` | `Object` | the new position X3DObject in the form of {x:number,y:number,z:number} |
| `positionObject.x` | `number` | - |
| `positionObject.y` | `number` | - |
| `positionObject.z` | `number` | - |

#### Returns

`void`

**`Example`**

```ts
setPosition({x:0,y:0,z:0})
```

**`Comment`**

effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[setPosition](X3D_X3DObject.X3DObject.md#setposition)

#### Defined in

[X3D/X3DObject.ts:283](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L283)

___

### setPositionFromVector3

▸ **setPositionFromVector3**(`newPosition`): `void`

Sets the X3DObject position from a THREE.Vector3 object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newPosition` | `Vector3` | the new position X3DObject in the form of THREE.Vector3 |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[setPositionFromVector3](X3D_X3DObject.X3DObject.md#setpositionfromvector3)

#### Defined in

[X3D/X3DObject.ts:301](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L301)

___

### setPositionalAudioSource

▸ **setPositionalAudioSource**(`source?`, `data?`): `Promise`\<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `source?` | `string` |
| `data?` | [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) |

#### Returns

`Promise`\<`void`\>

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[setPositionalAudioSource](X3D_X3DObject.X3DObject.md#setpositionalaudiosource)

#### Defined in

[X3D/X3DObject.ts:499](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L499)

___

### setRotation

▸ **setRotation**(`rotationObject`): `void`

Sets the X3DObject rotation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `rotationObject` | `Object` | The new rotation X3DObject in the form of {x:number,y:number,z:number,order?:string} |
| `rotationObject.order?` | `string` | - |
| `rotationObject.x` | `number` | - |
| `rotationObject.y` | `number` | - |
| `rotationObject.z` | `number` | - |

#### Returns

`void`

**`Example`**

```ts
setRotation({x:0,y:0,z:0,order:"XYZ"})
```

**`Comment`**

effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[setRotation](X3D_X3DObject.X3DObject.md#setrotation)

#### Defined in

[X3D/X3DObject.ts:311](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L311)

___

### setRotationFromEuler

▸ **setRotationFromEuler**(`newRotation`): `void`

Sets the X3DObject rotation from a THREE.Euler object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newRotation` | `Euler` | The new rotation X3DObject in the form of THREE.Euler |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[setRotationFromEuler](X3D_X3DObject.X3DObject.md#setrotationfromeuler)

#### Defined in

[X3D/X3DObject.ts:326](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L326)

___

### setRotationFromQuaternion

▸ **setRotationFromQuaternion**(`newQuaternion`): `void`

Sets the X3DObject rotation from a THREE.Quaternion object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newQuaternion` | `Quaternion` | The new rotation X3DObject in the form of THREE.Quaternion |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[setRotationFromQuaternion](X3D_X3DObject.X3DObject.md#setrotationfromquaternion)

#### Defined in

[X3D/X3DObject.ts:334](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L334)

___

### setScale

▸ **setScale**(`newScale`): `void`

Sets the X3DObject scale

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newScale` | `Object` | The new scale X3DObject in the form of {x:number,y:number,z:number} |
| `newScale.x` | `number` | - |
| `newScale.y` | `number` | - |
| `newScale.z` | `number` | - |

#### Returns

`void`

**`Example`**

```ts
setScale({x:1,y:1,z:1})
```

**`Comment`**

effects only if Xpell engine controls the position (_disable_frame_3d_state = false - default)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[setScale](X3D_X3DObject.X3DObject.md#setscale)

#### Defined in

[X3D/X3DObject.ts:345](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L345)

___

### setScaleFromVector3

▸ **setScaleFromVector3**(`newScale`): `void`

Sets the X3DObject scale from a THREE.Vector3 object

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `newScale` | `Vector3` | The new scale X3DObject in the form of THREE.Vector3 |

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[setScaleFromVector3](X3D_X3DObject.X3DObject.md#setscalefromvector3)

#### Defined in

[X3D/X3DObject.ts:361](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L361)

___

### show

▸ **show**(): `void`

Show the X3DObject (if it was hidden)

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[show](X3D_X3DObject.X3DObject.md#show)

#### Defined in

[X3D/X3DObject.ts:603](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L603)

___

### stopAllAnimations

▸ **stopAllAnimations**(): `void`

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[stopAllAnimations](X3D_X3DObject.X3DObject.md#stopallanimations)

#### Defined in

[X3D/X3DObject.ts:790](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L790)

___

### stopAnimation

▸ **stopAnimation**(): `void`

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[stopAnimation](X3D_X3DObject.X3DObject.md#stopanimation)

#### Defined in

[X3D/X3DObject.ts:846](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L846)

___

### toString

▸ **toString**(): `string`

Return a string representation of the XObject

#### Returns

`string`

string

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[toString](X3D_X3DObject.X3DObject.md#tostring)

#### Defined in

[Core/XObject.ts:592](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L592)

___

### toXData

▸ **toXData**(): [`IXData`](../interfaces/Core_XObject.IXData.md)

Return an IXObjectData JSON representation of the XObject

#### Returns

[`IXData`](../interfaces/Core_XObject.IXData.md)

IXObjectData

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[toXData](X3D_X3DObject.X3DObject.md#toxdata)

#### Defined in

[Core/XObject.ts:543](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L543)

___

### toggle

▸ **toggle**(): `void`

Toggle the X3DObject visibility

#### Returns

`void`

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[toggle](X3D_X3DObject.X3DObject.md#toggle)

#### Defined in

[X3D/X3DObject.ts:619](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L619)

___

### getFromThreeObject

▸ **getFromThreeObject**(`threeObj`, `defaults`): [`X3DObject`](X3D_X3DObject.X3DObject.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `threeObj` | `Object3D`\<`Event`\> |
| `defaults` | [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) |

#### Returns

[`X3DObject`](X3D_X3DObject.X3DObject.md)

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[getFromThreeObject](X3D_X3DObject.X3DObject.md#getfromthreeobject)

#### Defined in

[X3D/X3DObject.ts:177](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L177)

___

### getXData

▸ **getXData**(`threeObj`, `defaults`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `threeObj` | `Object3D`\<`Event`\> |
| `defaults` | [`IX3DObjectData`](../interfaces/X3D_X3DObject.IX3DObjectData.md) |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `_children` | `never`[] |
| `_enable_physics` | `boolean` |
| `_id` | `string` |
| `_name` | `string` |
| `_position` | `Vector3` |
| `_rotation` | `Euler` |
| `_scale` | `Vector3` |
| `_three_obj` | `Object3D`\<`Event`\> |
| `_type` | `string` |

#### Inherited from

[X3DObject](X3D_X3DObject.X3DObject.md).[getXData](X3D_X3DObject.X3DObject.md#getxdata)

#### Defined in

[X3D/X3DObject.ts:158](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L158)
