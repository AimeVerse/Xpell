[xpell](../README.md) / [Modules](../modules.md) / [X3D/X3DCoreObjects](../modules/X3D_X3DCoreObjects.md) / HemisphereLight

# Class: HemisphereLight

[X3D/X3DCoreObjects](../modules/X3D_X3DCoreObjects.md).HemisphereLight

XLight - Xpell wrapper for Three Light

## Hierarchy

- [`XLight`](X3D_X3DCoreObjects.XLight.md)

  ↳ **`HemisphereLight`**

## Table of contents

### Constructors

- [constructor](X3D_X3DCoreObjects.HemisphereLight.md#constructor)

### Properties

- [#\_anim\_loaded](X3D_X3DCoreObjects.HemisphereLight.md##_anim_loaded)
- [\_3d\_set\_once](X3D_X3DCoreObjects.HemisphereLight.md#_3d_set_once)
- [\_animation\_clips](X3D_X3DCoreObjects.HemisphereLight.md#_animation_clips)
- [\_animation\_mixer](X3D_X3DCoreObjects.HemisphereLight.md#_animation_mixer)
- [\_auto\_play\_animation](X3D_X3DCoreObjects.HemisphereLight.md#_auto_play_animation)
- [\_cache\_cmd\_txt](X3D_X3DCoreObjects.HemisphereLight.md#_cache_cmd_txt)
- [\_cache\_jcmd](X3D_X3DCoreObjects.HemisphereLight.md#_cache_jcmd)
- [\_cannon\_obj](X3D_X3DCoreObjects.HemisphereLight.md#_cannon_obj)
- [\_cannon\_shape](X3D_X3DCoreObjects.HemisphereLight.md#_cannon_shape)
- [\_children](X3D_X3DCoreObjects.HemisphereLight.md#_children)
- [\_clock](X3D_X3DCoreObjects.HemisphereLight.md#_clock)
- [\_color](X3D_X3DCoreObjects.HemisphereLight.md#_color)
- [\_current\_action](X3D_X3DCoreObjects.HemisphereLight.md#_current_action)
- [\_data\_source](X3D_X3DCoreObjects.HemisphereLight.md#_data_source)
- [\_disable\_frame\_3d\_state](X3D_X3DCoreObjects.HemisphereLight.md#_disable_frame_3d_state)
- [\_enable\_physics](X3D_X3DCoreObjects.HemisphereLight.md#_enable_physics)
- [\_event\_listeners\_ids](X3D_X3DCoreObjects.HemisphereLight.md#_event_listeners_ids)
- [\_fade\_duration](X3D_X3DCoreObjects.HemisphereLight.md#_fade_duration)
- [\_fraction](X3D_X3DCoreObjects.HemisphereLight.md#_fraction)
- [\_groundColor](X3D_X3DCoreObjects.HemisphereLight.md#_groundcolor)
- [\_id](X3D_X3DCoreObjects.HemisphereLight.md#_id)
- [\_intensity](X3D_X3DCoreObjects.HemisphereLight.md#_intensity)
- [\_is\_light](X3D_X3DCoreObjects.HemisphereLight.md#_is_light)
- [\_light](X3D_X3DCoreObjects.HemisphereLight.md#_light)
- [\_load\_animations](X3D_X3DCoreObjects.HemisphereLight.md#_load_animations)
- [\_log\_rules](X3D_X3DCoreObjects.HemisphereLight.md#_log_rules)
- [\_mass](X3D_X3DCoreObjects.HemisphereLight.md#_mass)
- [\_model\_url](X3D_X3DCoreObjects.HemisphereLight.md#_model_url)
- [\_name](X3D_X3DCoreObjects.HemisphereLight.md#_name)
- [\_nano\_commands](X3D_X3DCoreObjects.HemisphereLight.md#_nano_commands)
- [\_on](X3D_X3DCoreObjects.HemisphereLight.md#_on)
- [\_on\_click](X3D_X3DCoreObjects.HemisphereLight.md#_on_click)
- [\_on\_create](X3D_X3DCoreObjects.HemisphereLight.md#_on_create)
- [\_on\_data](X3D_X3DCoreObjects.HemisphereLight.md#_on_data)
- [\_on\_event](X3D_X3DCoreObjects.HemisphereLight.md#_on_event)
- [\_on\_frame](X3D_X3DCoreObjects.HemisphereLight.md#_on_frame)
- [\_on\_load](X3D_X3DCoreObjects.HemisphereLight.md#_on_load)
- [\_on\_mount](X3D_X3DCoreObjects.HemisphereLight.md#_on_mount)
- [\_once](X3D_X3DCoreObjects.HemisphereLight.md#_once)
- [\_parent](X3D_X3DCoreObjects.HemisphereLight.md#_parent)
- [\_position](X3D_X3DCoreObjects.HemisphereLight.md#_position)
- [\_positional\_audio](X3D_X3DCoreObjects.HemisphereLight.md#_positional_audio)
- [\_positional\_audio\_source](X3D_X3DCoreObjects.HemisphereLight.md#_positional_audio_source)
- [\_process\_data](X3D_X3DCoreObjects.HemisphereLight.md#_process_data)
- [\_process\_frame](X3D_X3DCoreObjects.HemisphereLight.md#_process_frame)
- [\_rotation](X3D_X3DCoreObjects.HemisphereLight.md#_rotation)
- [\_scale](X3D_X3DCoreObjects.HemisphereLight.md#_scale)
- [\_skyColor](X3D_X3DCoreObjects.HemisphereLight.md#_skycolor)
- [\_three\_class](X3D_X3DCoreObjects.HemisphereLight.md#_three_class)
- [\_three\_obj](X3D_X3DCoreObjects.HemisphereLight.md#_three_obj)
- [\_threes\_class\_args](X3D_X3DCoreObjects.HemisphereLight.md#_threes_class_args)
- [\_type](X3D_X3DCoreObjects.HemisphereLight.md#_type)
- [\_visible](X3D_X3DCoreObjects.HemisphereLight.md#_visible)
- [\_xem\_options](X3D_X3DCoreObjects.HemisphereLight.md#_xem_options)
- [\_xporter](X3D_X3DCoreObjects.HemisphereLight.md#_xporter)
- [xtype](X3D_X3DCoreObjects.HemisphereLight.md#xtype)

### Accessors

- [canon](X3D_X3DCoreObjects.HemisphereLight.md#canon)
- [three](X3D_X3DCoreObjects.HemisphereLight.md#three)

### Methods

- [addEventListener](X3D_X3DCoreObjects.HemisphereLight.md#addeventlistener)
- [addNanoCommand](X3D_X3DCoreObjects.HemisphereLight.md#addnanocommand)
- [addNanoCommandPack](X3D_X3DCoreObjects.HemisphereLight.md#addnanocommandpack)
- [addXporterDataIgnoreFields](X3D_X3DCoreObjects.HemisphereLight.md#addxporterdataignorefields)
- [addXporterInstanceXporter](X3D_X3DCoreObjects.HemisphereLight.md#addxporterinstancexporter)
- [append](X3D_X3DCoreObjects.HemisphereLight.md#append)
- [checkAndRunInternalFunction](X3D_X3DCoreObjects.HemisphereLight.md#checkandruninternalfunction)
- [clearAttributes](X3D_X3DCoreObjects.HemisphereLight.md#clearattributes)
- [clearPositionalAudio](X3D_X3DCoreObjects.HemisphereLight.md#clearpositionalaudio)
- [createPositionalAudio](X3D_X3DCoreObjects.HemisphereLight.md#createpositionalaudio)
- [dispose](X3D_X3DCoreObjects.HemisphereLight.md#dispose)
- [emptyDataSource](X3D_X3DCoreObjects.HemisphereLight.md#emptydatasource)
- [execute](X3D_X3DCoreObjects.HemisphereLight.md#execute)
- [getCannonObject](X3D_X3DCoreObjects.HemisphereLight.md#getcannonobject)
- [getThreeObject](X3D_X3DCoreObjects.HemisphereLight.md#getthreeobject)
- [hide](X3D_X3DCoreObjects.HemisphereLight.md#hide)
- [importAnimationFromFBXFile](X3D_X3DCoreObjects.HemisphereLight.md#importanimationfromfbxfile)
- [importAnimationFromGLTF](X3D_X3DCoreObjects.HemisphereLight.md#importanimationfromgltf)
- [importAnimations](X3D_X3DCoreObjects.HemisphereLight.md#importanimations)
- [init](X3D_X3DCoreObjects.HemisphereLight.md#init)
- [loadAnimations](X3D_X3DCoreObjects.HemisphereLight.md#loadanimations)
- [loadModel](X3D_X3DCoreObjects.HemisphereLight.md#loadmodel)
- [loadThreeObjectFromGLTF](X3D_X3DCoreObjects.HemisphereLight.md#loadthreeobjectfromgltf)
- [onClick](X3D_X3DCoreObjects.HemisphereLight.md#onclick)
- [onCreate](X3D_X3DCoreObjects.HemisphereLight.md#oncreate)
- [onData](X3D_X3DCoreObjects.HemisphereLight.md#ondata)
- [onFrame](X3D_X3DCoreObjects.HemisphereLight.md#onframe)
- [onLoad](X3D_X3DCoreObjects.HemisphereLight.md#onload)
- [onMount](X3D_X3DCoreObjects.HemisphereLight.md#onmount)
- [parse](X3D_X3DCoreObjects.HemisphereLight.md#parse)
- [parse3d](X3D_X3DCoreObjects.HemisphereLight.md#parse3d)
- [parseEvents](X3D_X3DCoreObjects.HemisphereLight.md#parseevents)
- [parseFields](X3D_X3DCoreObjects.HemisphereLight.md#parsefields)
- [parseFieldsFromXDataObject](X3D_X3DCoreObjects.HemisphereLight.md#parsefieldsfromxdataobject)
- [pauseAudio](X3D_X3DCoreObjects.HemisphereLight.md#pauseaudio)
- [playAllAnimations](X3D_X3DCoreObjects.HemisphereLight.md#playallanimations)
- [playAnimation](X3D_X3DCoreObjects.HemisphereLight.md#playanimation)
- [playAudio](X3D_X3DCoreObjects.HemisphereLight.md#playaudio)
- [removeAllEventListeners](X3D_X3DCoreObjects.HemisphereLight.md#removealleventlisteners)
- [removeEventListener](X3D_X3DCoreObjects.HemisphereLight.md#removeeventlistener)
- [run](X3D_X3DCoreObjects.HemisphereLight.md#run)
- [set3DState](X3D_X3DCoreObjects.HemisphereLight.md#set3dstate)
- [setPosition](X3D_X3DCoreObjects.HemisphereLight.md#setposition)
- [setPositionFromVector3](X3D_X3DCoreObjects.HemisphereLight.md#setpositionfromvector3)
- [setPositionalAudioSource](X3D_X3DCoreObjects.HemisphereLight.md#setpositionalaudiosource)
- [setRotation](X3D_X3DCoreObjects.HemisphereLight.md#setrotation)
- [setRotationFromEuler](X3D_X3DCoreObjects.HemisphereLight.md#setrotationfromeuler)
- [setRotationFromQuaternion](X3D_X3DCoreObjects.HemisphereLight.md#setrotationfromquaternion)
- [setScale](X3D_X3DCoreObjects.HemisphereLight.md#setscale)
- [setScaleFromVector3](X3D_X3DCoreObjects.HemisphereLight.md#setscalefromvector3)
- [show](X3D_X3DCoreObjects.HemisphereLight.md#show)
- [stopAllAnimations](X3D_X3DCoreObjects.HemisphereLight.md#stopallanimations)
- [stopAnimation](X3D_X3DCoreObjects.HemisphereLight.md#stopanimation)
- [toString](X3D_X3DCoreObjects.HemisphereLight.md#tostring)
- [toXData](X3D_X3DCoreObjects.HemisphereLight.md#toxdata)
- [toggle](X3D_X3DCoreObjects.HemisphereLight.md#toggle)
- [getFromThreeObject](X3D_X3DCoreObjects.HemisphereLight.md#getfromthreeobject)
- [getXData](X3D_X3DCoreObjects.HemisphereLight.md#getxdata)

## Constructors

### constructor

• **new HemisphereLight**(`data`): [`HemisphereLight`](X3D_X3DCoreObjects.HemisphereLight.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `data` | [`HemisphereLightData`](../interfaces/X3D_X3DCoreObjects.HemisphereLightData.md) |

#### Returns

[`HemisphereLight`](X3D_X3DCoreObjects.HemisphereLight.md)

#### Overrides

[XLight](X3D_X3DCoreObjects.XLight.md).[constructor](X3D_X3DCoreObjects.XLight.md#constructor)

#### Defined in

[X3D/X3DCoreObjects.ts:145](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L145)

## Properties

### #\_anim\_loaded

• `Private` **#\_anim\_loaded**: `boolean` = `false`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[#_anim_loaded](X3D_X3DCoreObjects.XLight.md##_anim_loaded)

#### Defined in

[X3D/X3DObject.ts:154](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L154)

___

### \_3d\_set\_once

• **\_3d\_set\_once**: `boolean`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_3d_set_once](X3D_X3DCoreObjects.XLight.md#_3d_set_once)

#### Defined in

[X3D/X3DObject.ts:125](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L125)

___

### \_animation\_clips

• `Protected` **\_animation\_clips**: `Object`

protected fields should not be override by XData object

#### Index signature

▪ [name: `string`]: `THREE.AnimationAction`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_animation_clips](X3D_X3DCoreObjects.XLight.md#_animation_clips)

#### Defined in

[X3D/X3DObject.ts:135](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L135)

___

### \_animation\_mixer

• `Protected` **\_animation\_mixer**: ``null`` \| `AnimationMixer`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_animation_mixer](X3D_X3DCoreObjects.XLight.md#_animation_mixer)

#### Defined in

[X3D/X3DObject.ts:138](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L138)

___

### \_auto\_play\_animation

• **\_auto\_play\_animation**: `boolean` = `false`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_auto_play_animation](X3D_X3DCoreObjects.XLight.md#_auto_play_animation)

#### Defined in

[X3D/X3DObject.ts:129](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L129)

___

### \_cache\_cmd\_txt

• `Protected` `Optional` **\_cache\_cmd\_txt**: `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_cache_cmd_txt](X3D_X3DCoreObjects.XLight.md#_cache_cmd_txt)

#### Defined in

[Core/XObject.ts:116](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L116)

___

### \_cache\_jcmd

• `Protected` `Optional` **\_cache\_jcmd**: `any`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_cache_jcmd](X3D_X3DCoreObjects.XLight.md#_cache_jcmd)

#### Defined in

[Core/XObject.ts:117](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L117)

___

### \_cannon\_obj

• **\_cannon\_obj**: `undefined` \| ``null`` \| `Body`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_cannon_obj](X3D_X3DCoreObjects.XLight.md#_cannon_obj)

#### Defined in

[X3D/X3DObject.ts:115](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L115)

___

### \_cannon\_shape

• **\_cannon\_shape**: `undefined` \| ``null`` \| `Shape`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_cannon_shape](X3D_X3DCoreObjects.XLight.md#_cannon_shape)

#### Defined in

[X3D/X3DObject.ts:116](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L116)

___

### \_children

• **\_children**: ([`XObject`](Core_XObject.XObject.md) \| [`XObjectData`](../modules/Core_XObject.md#xobjectdata))[] = `[]`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_children](X3D_X3DCoreObjects.XLight.md#_children)

#### Defined in

[Core/XObject.ts:93](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L93)

___

### \_clock

• `Protected` **\_clock**: `Clock`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_clock](X3D_X3DCoreObjects.XLight.md#_clock)

#### Defined in

[X3D/X3DObject.ts:136](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L136)

___

### \_color

• `Optional` **\_color**: `number` \| `Color` = `0xffffff`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_color](X3D_X3DCoreObjects.XLight.md#_color)

#### Defined in

[X3D/X3DCoreObjects.ts:120](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L120)

___

### \_current\_action

• `Protected` **\_current\_action**: ``null`` \| `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_current_action](X3D_X3DCoreObjects.XLight.md#_current_action)

#### Defined in

[X3D/X3DObject.ts:141](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L141)

___

### \_data\_source

• `Optional` **\_data\_source**: `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_data_source](X3D_X3DCoreObjects.XLight.md#_data_source)

#### Defined in

[Core/XObject.ts:96](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L96)

___

### \_disable\_frame\_3d\_state

• **\_disable\_frame\_3d\_state**: `boolean`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_disable_frame_3d_state](X3D_X3DCoreObjects.XLight.md#_disable_frame_3d_state)

#### Defined in

[X3D/X3DObject.ts:127](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L127)

___

### \_enable\_physics

• **\_enable\_physics**: `boolean`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_enable_physics](X3D_X3DCoreObjects.XLight.md#_enable_physics)

#### Defined in

[X3D/X3DObject.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L118)

___

### \_event\_listeners\_ids

• `Protected` **\_event\_listeners\_ids**: `Object` = `{}`

#### Index signature

▪ [eventName: `string`]: `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_event_listeners_ids](X3D_X3DCoreObjects.XLight.md#_event_listeners_ids)

#### Defined in

[Core/XObject.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L118)

___

### \_fade\_duration

• **\_fade\_duration**: `number`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_fade_duration](X3D_X3DCoreObjects.XLight.md#_fade_duration)

#### Defined in

[X3D/X3DObject.ts:126](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L126)

___

### \_fraction

• `Protected` **\_fraction**: `number`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_fraction](X3D_X3DCoreObjects.XLight.md#_fraction)

#### Defined in

[X3D/X3DObject.ts:137](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L137)

___

### \_groundColor

• **\_groundColor**: `number` \| `Color`

#### Defined in

[X3D/X3DCoreObjects.ts:143](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L143)

___

### \_id

• **\_id**: `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_id](X3D_X3DCoreObjects.XLight.md#_id)

#### Defined in

[X3D/X3DObject.ts:109](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L109)

___

### \_intensity

• `Optional` **\_intensity**: `number` = `1.0`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_intensity](X3D_X3DCoreObjects.XLight.md#_intensity)

#### Defined in

[X3D/X3DCoreObjects.ts:121](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L121)

___

### \_is\_light

• `Readonly` **\_is\_light**: `boolean` = `true`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_is_light](X3D_X3DCoreObjects.XLight.md#_is_light)

#### Defined in

[X3D/X3DCoreObjects.ts:118](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L118)

___

### \_light

• `Optional` **\_light**: [`XLightTypes`](../modules/X3D_X3DCoreObjects.md#xlighttypes) = `"ambient"`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_light](X3D_X3DCoreObjects.XLight.md#_light)

#### Defined in

[X3D/X3DCoreObjects.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L119)

___

### \_load\_animations

• **\_load\_animations**: `boolean` = `false`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_load_animations](X3D_X3DCoreObjects.XLight.md#_load_animations)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[_log_rules](X3D_X3DCoreObjects.XLight.md#_log_rules)

#### Defined in

[X3D/X3DObject.ts:145](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L145)

___

### \_mass

• **\_mass**: `number`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_mass](X3D_X3DCoreObjects.XLight.md#_mass)

#### Defined in

[X3D/X3DObject.ts:117](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L117)

___

### \_model\_url

• **\_model\_url**: `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_model_url](X3D_X3DCoreObjects.XLight.md#_model_url)

#### Defined in

[X3D/X3DObject.ts:123](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L123)

___

### \_name

• **\_name**: `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_name](X3D_X3DCoreObjects.XLight.md#_name)

#### Defined in

[X3D/X3DObject.ts:111](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L111)

___

### \_nano\_commands

• `Protected` **\_nano\_commands**: `Object` = `{}`

#### Index signature

▪ [k: `string`]: [`XNanoCommand`](../interfaces/Core_XNanoCommands.XNanoCommand.md)

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_nano_commands](X3D_X3DCoreObjects.XLight.md#_nano_commands)

#### Defined in

[Core/XObject.ts:115](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L115)

___

### \_on

• **\_on**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_on](X3D_X3DCoreObjects.XLight.md#_on)

#### Defined in

[Core/XObject.ts:97](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L97)

___

### \_on\_click

• `Optional` **\_on\_click**: [`X3DListener`](../modules/X3D_X3DObject.md#x3dlistener)

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_on_click](X3D_X3DCoreObjects.XLight.md#_on_click)

#### Defined in

[X3D/X3DObject.ts:131](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L131)

___

### \_on\_create

• `Optional` **\_on\_create**: `string` \| `Function`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_on_create](X3D_X3DCoreObjects.XLight.md#_on_create)

#### Defined in

[Core/XObject.ts:99](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L99)

___

### \_on\_data

• `Optional` **\_on\_data**: `string` \| `Function`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_on_data](X3D_X3DCoreObjects.XLight.md#_on_data)

#### Defined in

[Core/XObject.ts:102](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L102)

___

### \_on\_event

• `Optional` **\_on\_event**: `string` \| `Function`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_on_event](X3D_X3DCoreObjects.XLight.md#_on_event)

#### Defined in

[Core/XObject.ts:103](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L103)

___

### \_on\_frame

• `Optional` **\_on\_frame**: `string` \| `Function`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_on_frame](X3D_X3DCoreObjects.XLight.md#_on_frame)

#### Defined in

[Core/XObject.ts:101](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L101)

___

### \_on\_load

• `Optional` **\_on\_load**: [`X3DListener`](../modules/X3D_X3DObject.md#x3dlistener)

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_on_load](X3D_X3DCoreObjects.XLight.md#_on_load)

#### Defined in

[X3D/X3DObject.ts:130](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L130)

___

### \_on\_mount

• `Optional` **\_on\_mount**: `string` \| `Function`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_on_mount](X3D_X3DCoreObjects.XLight.md#_on_mount)

#### Defined in

[Core/XObject.ts:100](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L100)

___

### \_once

• **\_once**: [`XObjectOnEventIndex`](../interfaces/Core_XObject.XObjectOnEventIndex.md) = `{}`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_once](X3D_X3DCoreObjects.XLight.md#_once)

#### Defined in

[Core/XObject.ts:98](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L98)

___

### \_parent

• **\_parent**: ``null`` \| [`XObject`](Core_XObject.XObject.md) = `null`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_parent](X3D_X3DCoreObjects.XLight.md#_parent)

#### Defined in

[Core/XObject.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L94)

___

### \_position

• **\_position**: `Vector3`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_position](X3D_X3DCoreObjects.XLight.md#_position)

#### Defined in

[X3D/X3DObject.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L119)

___

### \_positional\_audio

• `Protected` **\_positional\_audio**: `undefined` \| ``null`` \| `PositionalAudio`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_positional_audio](X3D_X3DCoreObjects.XLight.md#_positional_audio)

#### Defined in

[X3D/X3DObject.ts:142](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L142)

___

### \_positional\_audio\_source

• **\_positional\_audio\_source**: `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_positional_audio_source](X3D_X3DCoreObjects.XLight.md#_positional_audio_source)

#### Defined in

[X3D/X3DObject.ts:124](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L124)

___

### \_process\_data

• **\_process\_data**: `boolean` = `true`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_process_data](X3D_X3DCoreObjects.XLight.md#_process_data)

#### Defined in

[Core/XObject.ts:108](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L108)

___

### \_process\_frame

• **\_process\_frame**: `boolean` = `true`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_process_frame](X3D_X3DCoreObjects.XLight.md#_process_frame)

#### Defined in

[Core/XObject.ts:107](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L107)

___

### \_rotation

• **\_rotation**: `Euler`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_rotation](X3D_X3DCoreObjects.XLight.md#_rotation)

#### Defined in

[X3D/X3DObject.ts:120](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L120)

___

### \_scale

• **\_scale**: `Vector3`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_scale](X3D_X3DCoreObjects.XLight.md#_scale)

#### Defined in

[X3D/X3DObject.ts:121](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L121)

___

### \_skyColor

• **\_skyColor**: `number` \| `Color`

#### Defined in

[X3D/X3DCoreObjects.ts:142](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L142)

___

### \_three\_class

• **\_three\_class**: `any`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_three_class](X3D_X3DCoreObjects.XLight.md#_three_class)

#### Defined in

[X3D/X3DObject.ts:112](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L112)

___

### \_three\_obj

• **\_three\_obj**: ``null`` \| `Object3D`\<`Event`\>

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_three_obj](X3D_X3DCoreObjects.XLight.md#_three_obj)

#### Defined in

[X3D/X3DObject.ts:114](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L114)

___

### \_threes\_class\_args

• **\_threes\_class\_args**: `any`[]

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_threes_class_args](X3D_X3DCoreObjects.XLight.md#_threes_class_args)

#### Defined in

[X3D/X3DObject.ts:113](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L113)

___

### \_type

• **\_type**: `string`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_type](X3D_X3DCoreObjects.XLight.md#_type)

#### Defined in

[X3D/X3DObject.ts:110](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L110)

___

### \_visible

• **\_visible**: `boolean`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_visible](X3D_X3DCoreObjects.XLight.md#_visible)

#### Defined in

[X3D/X3DObject.ts:122](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L122)

___

### \_xem\_options

• `Protected` **\_xem\_options**: [`XEventListenerOptions`](../modules/Core_XEventManager.md#xeventlisteneroptions)

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_xem_options](X3D_X3DCoreObjects.XLight.md#_xem_options)

#### Defined in

[X3D/X3DObject.ts:143](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L143)

___

### \_xporter

• `Protected` **\_xporter**: [`XDataXporter`](../modules/Core_XObject.md#xdataxporter)

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[_xporter](X3D_X3DCoreObjects.XLight.md#_xporter)

#### Defined in

[Core/XObject.ts:119](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L119)

___

### xtype

▪ `Static` **xtype**: `string` = `"light"`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[xtype](X3D_X3DCoreObjects.XLight.md#xtype)

#### Defined in

[X3D/X3DCoreObjects.ts:117](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DCoreObjects.ts#L117)

## Accessors

### canon

• `get` **canon**(): `Body`

#### Returns

`Body`

#### Inherited from

XLight.canon

#### Defined in

[X3D/X3DObject.ts:387](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L387)

___

### three

• `get` **three**(): `Object3D`\<`Event`\> \| `Promise`\<`Object3D`\<`Event`\>\>

#### Returns

`Object3D`\<`Event`\> \| `Promise`\<`Object3D`\<`Event`\>\>

#### Inherited from

XLight.three

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

[XLight](X3D_X3DCoreObjects.XLight.md).[addEventListener](X3D_X3DCoreObjects.XLight.md#addeventlistener)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[addNanoCommand](X3D_X3DCoreObjects.XLight.md#addnanocommand)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[addNanoCommandPack](X3D_X3DCoreObjects.XLight.md#addnanocommandpack)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[addXporterDataIgnoreFields](X3D_X3DCoreObjects.XLight.md#addxporterdataignorefields)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[addXporterInstanceXporter](X3D_X3DCoreObjects.XLight.md#addxporterinstancexporter)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[append](X3D_X3DCoreObjects.XLight.md#append)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[checkAndRunInternalFunction](X3D_X3DCoreObjects.XLight.md#checkandruninternalfunction)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[clearAttributes](X3D_X3DCoreObjects.XLight.md#clearattributes)

#### Defined in

[Core/XObject.ts:597](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L597)

___

### clearPositionalAudio

▸ **clearPositionalAudio**(): `void`

clears the positional audio from the object and the Three object

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[clearPositionalAudio](X3D_X3DCoreObjects.XLight.md#clearpositionalaudio)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[createPositionalAudio](X3D_X3DCoreObjects.XLight.md#createpositionalaudio)

#### Defined in

[X3D/X3DObject.ts:483](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L483)

___

### dispose

▸ **dispose**(): `Promise`\<`void`\>

Dispose all object memory (destructor)

#### Returns

`Promise`\<`void`\>

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[dispose](X3D_X3DCoreObjects.XLight.md#dispose)

#### Defined in

[X3D/X3DObject.ts:227](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L227)

___

### emptyDataSource

▸ **emptyDataSource**(): `void`

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[emptyDataSource](X3D_X3DCoreObjects.XLight.md#emptydatasource)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[execute](X3D_X3DCoreObjects.XLight.md#execute)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[getCannonObject](X3D_X3DCoreObjects.XLight.md#getcannonobject)

#### Defined in

[X3D/X3DObject.ts:444](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L444)

___

### getThreeObject

▸ **getThreeObject**(): `Object3D`\<`Event`\> \| `Promise`\<`Object3D`\<`Event`\>\>

This method gets the Three object of the X3DObject

#### Returns

`Object3D`\<`Event`\> \| `Promise`\<`Object3D`\<`Event`\>\>

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[getThreeObject](X3D_X3DCoreObjects.XLight.md#getthreeobject)

#### Defined in

[X3D/X3DObject.ts:398](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L398)

___

### hide

▸ **hide**(): `void`

Hide the X3DObject

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[hide](X3D_X3DCoreObjects.XLight.md#hide)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[importAnimationFromFBXFile](X3D_X3DCoreObjects.XLight.md#importanimationfromfbxfile)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[importAnimationFromGLTF](X3D_X3DCoreObjects.XLight.md#importanimationfromgltf)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[importAnimations](X3D_X3DCoreObjects.XLight.md#importanimations)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[init](X3D_X3DCoreObjects.XLight.md#init)

#### Defined in

[Core/XObject.ts:167](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L167)

___

### loadAnimations

▸ **loadAnimations**(): `Promise`\<`void`\>

loads animation on start or after create object

#### Returns

`Promise`\<`void`\>

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[loadAnimations](X3D_X3DCoreObjects.XLight.md#loadanimations)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[loadModel](X3D_X3DCoreObjects.XLight.md#loadmodel)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[loadThreeObjectFromGLTF](X3D_X3DCoreObjects.XLight.md#loadthreeobjectfromgltf)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[onClick](X3D_X3DCoreObjects.XLight.md#onclick)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[onCreate](X3D_X3DCoreObjects.XLight.md#oncreate)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[onData](X3D_X3DCoreObjects.XLight.md#ondata)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[onFrame](X3D_X3DCoreObjects.XLight.md#onframe)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[onLoad](X3D_X3DCoreObjects.XLight.md#onload)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[onMount](X3D_X3DCoreObjects.XLight.md#onmount)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[parse](X3D_X3DCoreObjects.XLight.md#parse)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[parse3d](X3D_X3DCoreObjects.XLight.md#parse3d)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[parseEvents](X3D_X3DCoreObjects.XLight.md#parseevents)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[parseFields](X3D_X3DCoreObjects.XLight.md#parsefields)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[parseFieldsFromXDataObject](X3D_X3DCoreObjects.XLight.md#parsefieldsfromxdataobject)

#### Defined in

[Core/XObject.ts:311](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L311)

___

### pauseAudio

▸ **pauseAudio**(): `void`

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[pauseAudio](X3D_X3DCoreObjects.XLight.md#pauseaudio)

#### Defined in

[X3D/X3DObject.ts:524](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L524)

___

### playAllAnimations

▸ **playAllAnimations**(): `void`

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[playAllAnimations](X3D_X3DCoreObjects.XLight.md#playallanimations)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[playAnimation](X3D_X3DCoreObjects.XLight.md#playanimation)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[playAudio](X3D_X3DCoreObjects.XLight.md#playaudio)

#### Defined in

[X3D/X3DObject.ts:516](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L516)

___

### removeAllEventListeners

▸ **removeAllEventListeners**(): `void`

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[removeAllEventListeners](X3D_X3DCoreObjects.XLight.md#removealleventlisteners)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[removeEventListener](X3D_X3DCoreObjects.XLight.md#removeeventlistener)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[run](X3D_X3DCoreObjects.XLight.md#run)

#### Defined in

[Core/XObject.ts:501](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L501)

___

### set3DState

▸ **set3DState**(): `void`

This method sets the 3D State of the object (position, rotation & scale).

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[set3DState](X3D_X3DCoreObjects.XLight.md#set3dstate)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[setPosition](X3D_X3DCoreObjects.XLight.md#setposition)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[setPositionFromVector3](X3D_X3DCoreObjects.XLight.md#setpositionfromvector3)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[setPositionalAudioSource](X3D_X3DCoreObjects.XLight.md#setpositionalaudiosource)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[setRotation](X3D_X3DCoreObjects.XLight.md#setrotation)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[setRotationFromEuler](X3D_X3DCoreObjects.XLight.md#setrotationfromeuler)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[setRotationFromQuaternion](X3D_X3DCoreObjects.XLight.md#setrotationfromquaternion)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[setScale](X3D_X3DCoreObjects.XLight.md#setscale)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[setScaleFromVector3](X3D_X3DCoreObjects.XLight.md#setscalefromvector3)

#### Defined in

[X3D/X3DObject.ts:361](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L361)

___

### show

▸ **show**(): `void`

Show the X3DObject (if it was hidden)

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[show](X3D_X3DCoreObjects.XLight.md#show)

#### Defined in

[X3D/X3DObject.ts:603](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L603)

___

### stopAllAnimations

▸ **stopAllAnimations**(): `void`

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[stopAllAnimations](X3D_X3DCoreObjects.XLight.md#stopallanimations)

#### Defined in

[X3D/X3DObject.ts:790](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L790)

___

### stopAnimation

▸ **stopAnimation**(): `void`

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[stopAnimation](X3D_X3DCoreObjects.XLight.md#stopanimation)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[toString](X3D_X3DCoreObjects.XLight.md#tostring)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[toXData](X3D_X3DCoreObjects.XLight.md#toxdata)

#### Defined in

[Core/XObject.ts:543](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XObject.ts#L543)

___

### toggle

▸ **toggle**(): `void`

Toggle the X3DObject visibility

#### Returns

`void`

#### Inherited from

[XLight](X3D_X3DCoreObjects.XLight.md).[toggle](X3D_X3DCoreObjects.XLight.md#toggle)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[getFromThreeObject](X3D_X3DCoreObjects.XLight.md#getfromthreeobject)

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

[XLight](X3D_X3DCoreObjects.XLight.md).[getXData](X3D_X3DCoreObjects.XLight.md#getxdata)

#### Defined in

[X3D/X3DObject.ts:158](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/X3D/X3DObject.ts#L158)
