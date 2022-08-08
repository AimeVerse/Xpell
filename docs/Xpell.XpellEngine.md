# Class: XpellEngine

[Xpell](../wiki/Xpell).XpellEngine

## Table of contents

### Constructors

- [constructor](../wiki/Xpell.XpellEngine#constructor)

### Properties

- [#fpsCalc](../wiki/Xpell.XpellEngine##fpscalc)
- [#modules](../wiki/Xpell.XpellEngine##modules)
- [engineId](../wiki/Xpell.XpellEngine#engineid)
- [fps\_mavg](../wiki/Xpell.XpellEngine#fps_mavg)
- [frameNumber](../wiki/Xpell.XpellEngine#framenumber)
- [parser](../wiki/Xpell.XpellEngine#parser)
- [ts](../wiki/Xpell.XpellEngine#ts)
- [version](../wiki/Xpell.XpellEngine#version)

### Methods

- [execute](../wiki/Xpell.XpellEngine#execute)
- [getModule](../wiki/Xpell.XpellEngine#getmodule)
- [info](../wiki/Xpell.XpellEngine#info)
- [load](../wiki/Xpell.XpellEngine#load)
- [loadModule](../wiki/Xpell.XpellEngine#loadmodule)
- [loadModules](../wiki/Xpell.XpellEngine#loadmodules)
- [onFrame](../wiki/Xpell.XpellEngine#onframe)
- [run](../wiki/Xpell.XpellEngine#run)
- [start](../wiki/Xpell.XpellEngine#start)

## Constructors

### constructor

• **new XpellEngine**()

#### Defined in

src/Xpell.ts:69

## Properties

### #fpsCalc

• `Private` **#fpsCalc**: [`FPSCalc`](../wiki/XUtils.FPSCalc)

#### Defined in

src/Xpell.ts:62

___

### #modules

• `Private` **#modules**: `Object` = `{}`

#### Defined in

src/Xpell.ts:64

___

### engineId

• **engineId**: `string`

#### Defined in

src/Xpell.ts:60

___

### fps\_mavg

• **fps\_mavg**: `number`

#### Defined in

src/Xpell.ts:66

___

### frameNumber

• **frameNumber**: `number`

#### Defined in

src/Xpell.ts:61

___

### parser

• **parser**: typeof [`XParser`](../wiki/XParser.XParser)

#### Defined in

src/Xpell.ts:65

___

### ts

• **ts**: `number`

#### Defined in

src/Xpell.ts:67

___

### version

• **version**: `string`

#### Defined in

src/Xpell.ts:59

## Methods

### execute

▸ **execute**(`xcmd`): `any`

Execute Xpell Command

#### Parameters

| Name | Type |
| :------ | :------ |
| `xcmd` | [`XCommand`](../wiki/XCommand.XCommand) |

#### Returns

`any`

#### Defined in

src/Xpell.ts:126

___

### getModule

▸ **getModule**(`moduleName`): [`XModule`](../wiki/XModule.XModule)

#### Parameters

| Name | Type |
| :------ | :------ |
| `moduleName` | `string` |

#### Returns

[`XModule`](../wiki/XModule.XModule)

#### Defined in

src/Xpell.ts:154

___

### info

▸ **info**(): `void`

#### Returns

`void`

#### Defined in

src/Xpell.ts:103

___

### load

▸ **load**(): `void`

#### Returns

`void`

#### Defined in

src/Xpell.ts:99

___

### loadModule

▸ **loadModule**(`xModule`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xModule` | [`XModule`](../wiki/XModule.XModule) |

#### Returns

`void`

#### Defined in

src/Xpell.ts:83

___

### loadModules

▸ **loadModules**(`xModulesArray`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `xModulesArray` | [] |

#### Returns

`void`

#### Defined in

src/Xpell.ts:92

___

### onFrame

▸ **onFrame**(): `void`

Main onFrame method
calls all the sub-modules onFrame methods (if implemented)

#### Returns

`void`

#### Defined in

src/Xpell.ts:140

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

src/Xpell.ts:113

___

### start

▸ **start**(): `void`

Start Xpell engine for web browsers using requestAnimationFrame

#### Returns

`void`

#### Defined in

src/Xpell.ts:161
