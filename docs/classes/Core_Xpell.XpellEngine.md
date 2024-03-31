[xpell](../README.md) / [Modules](../modules.md) / [Core/Xpell](../modules/Core_Xpell.md) / XpellEngine

# Class: XpellEngine

[Core/Xpell](../modules/Core_Xpell.md).XpellEngine

Xpell main engine

## Table of contents

### Constructors

- [constructor](Core_Xpell.XpellEngine.md#constructor)

### Properties

- [#\_modules](Core_Xpell.XpellEngine.md##_modules)
- [#fps\_calc](Core_Xpell.XpellEngine.md##fps_calc)
- [\_engine\_id](Core_Xpell.XpellEngine.md#_engine_id)
- [\_frame\_number](Core_Xpell.XpellEngine.md#_frame_number)
- [\_log\_rules](Core_Xpell.XpellEngine.md#_log_rules)
- [\_version](Core_Xpell.XpellEngine.md#_version)
- [parser](Core_Xpell.XpellEngine.md#parser)

### Accessors

- [verbose](Core_Xpell.XpellEngine.md#verbose)

### Methods

- [delay](Core_Xpell.XpellEngine.md#delay)
- [execute](Core_Xpell.XpellEngine.md#execute)
- [getModule](Core_Xpell.XpellEngine.md#getmodule)
- [getParam](Core_Xpell.XpellEngine.md#getparam)
- [info](Core_Xpell.XpellEngine.md#info)
- [loadModule](Core_Xpell.XpellEngine.md#loadmodule)
- [loadModules](Core_Xpell.XpellEngine.md#loadmodules)
- [log](Core_Xpell.XpellEngine.md#log)
- [onFrame](Core_Xpell.XpellEngine.md#onframe)
- [run](Core_Xpell.XpellEngine.md#run)
- [start](Core_Xpell.XpellEngine.md#start)

## Constructors

### constructor

• **new XpellEngine**(): [`XpellEngine`](Core_Xpell.XpellEngine.md)

#### Returns

[`XpellEngine`](Core_Xpell.XpellEngine.md)

#### Defined in

[Core/Xpell.ts:66](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L66)

## Properties

### #\_modules

• `Private` **#\_modules**: `Object` = `{}`

#### Index signature

▪ [name: `string`]: `any`

#### Defined in

[Core/Xpell.ts:63](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L63)

___

### #fps\_calc

• `Private` **#fps\_calc**: [`FPSCalc`](Core_XUtils.FPSCalc.md)

#### Defined in

[Core/Xpell.ts:61](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L61)

___

### \_engine\_id

• **\_engine\_id**: `string`

#### Defined in

[Core/Xpell.ts:57](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L57)

___

### \_frame\_number

• **\_frame\_number**: `number`

#### Defined in

[Core/Xpell.ts:58](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L58)

___

### \_log\_rules

• **\_log\_rules**: `Object` = `{}`

#### Defined in

[Core/Xpell.ts:59](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L59)

___

### \_version

• **\_version**: `string`

#### Defined in

[Core/Xpell.ts:56](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L56)

___

### parser

• **parser**: typeof [`XParser`](Core_XParser.XParser.md)

#### Defined in

[Core/Xpell.ts:64](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L64)

## Accessors

### verbose

• `set` **verbose**(`val`): `void`

Enable Xpell logs to console

#### Parameters

| Name | Type |
| :------ | :------ |
| `val` | `boolean` |

#### Returns

`void`

#### Defined in

[Core/Xpell.ts:82](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L82)

## Methods

### delay

▸ **delay**(`ms`): `Promise`\<`unknown`\>

Delay the execution of the next command

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `ms` | `number` | delay in milliseconds |

#### Returns

`Promise`\<`unknown`\>

#### Defined in

[Core/Xpell.ts:103](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L103)

___

### execute

▸ **execute**(`xcmd`): `any`

Execute Xpell Command

#### Parameters

| Name | Type |
| :------ | :------ |
| `xcmd` | [`XCommand`](Core_XCommand.XCommand.md) |

#### Returns

`any`

#### Defined in

[Core/Xpell.ts:159](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L159)

___

### getModule

▸ **getModule**(`moduleName`): [`XModule`](Core_XModule.XModule.md)

Gets Xpell module by name

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `moduleName` | `string` | name of the loaded module |

#### Returns

[`XModule`](Core_XModule.XModule.md)

#### Defined in

[Core/Xpell.ts:193](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L193)

___

### getParam

▸ **getParam**(`name`, `defaultValue?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | `string` |
| `defaultValue?` | `string` |

#### Returns

`any`

#### Defined in

[Core/Xpell.ts:205](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L205)

___

### info

▸ **info**(): `void`

Display information about the Xpell engine to the console

#### Returns

`void`

#### Defined in

[Core/Xpell.ts:136](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L136)

___

### loadModule

▸ **loadModule**(`xModule`): `void`

Loads Xpell module into the engine

#### Parameters

| Name | Type |
| :------ | :------ |
| `xModule` | [`XModule`](Core_XModule.XModule.md) |

#### Returns

`void`

#### Defined in

[Core/Xpell.ts:114](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L114)

___

### loadModules

▸ **loadModules**(`xModulesArray`): `void`

Loads multiple module at ones

#### Parameters

| Name | Type |
| :------ | :------ |
| `xModulesArray` | [`XModule`](Core_XModule.XModule.md)[] |

#### Returns

`void`

#### Defined in

[Core/Xpell.ts:127](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L127)

___

### log

▸ **log**(`message?`, `...optionalParams`): `void`

Logs message to console using Xpell logger
make sure to enable verbose mode to see the logs
this method is a wrapper for XLogger.log

#### Parameters

| Name | Type |
| :------ | :------ |
| `message?` | `any` |
| `...optionalParams` | `any`[] |

#### Returns

`void`

#### Defined in

[Core/Xpell.ts:94](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L94)

___

### onFrame

▸ **onFrame**(): `void`

Main onFrame method
calls all the sub-modules onFrame methods (if implemented)

#### Returns

`void`

#### Defined in

[Core/Xpell.ts:173](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L173)

___

### run

▸ **run**(`stringXCommand`): `any`

Run textual xCommand -

#### Parameters

| Name | Type |
| :------ | :------ |
| `stringXCommand` | `string` |

#### Returns

`any`

#### Defined in

[Core/Xpell.ts:146](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L146)

___

### start

▸ **start**(): `void`

Start Xpell engine for web browsers using requestAnimationFrame

#### Returns

`void`

#### Defined in

[Core/Xpell.ts:200](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/Xpell.ts#L200)
