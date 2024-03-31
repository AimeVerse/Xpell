[xpell](../README.md) / [Modules](../modules.md) / [Core/XUtils](../modules/Core_XUtils.md) / FPSCalc

# Class: FPSCalc

[Core/XUtils](../modules/Core_XUtils.md).FPSCalc

FPS Calculator
 FPSCalc

## Table of contents

### Constructors

- [constructor](Core_XUtils.FPSCalc.md#constructor)

### Properties

- [#accumulatedFPS](Core_XUtils.FPSCalc.md##accumulatedfps)
- [#historyMovingAvg](Core_XUtils.FPSCalc.md##historymovingavg)
- [#lastTimestamp](Core_XUtils.FPSCalc.md##lasttimestamp)

### Methods

- [calc](Core_XUtils.FPSCalc.md#calc)

## Constructors

### constructor

• **new FPSCalc**(): [`FPSCalc`](Core_XUtils.FPSCalc.md)

#### Returns

[`FPSCalc`](Core_XUtils.FPSCalc.md)

## Properties

### #accumulatedFPS

• `Private` **#accumulatedFPS**: `number` = `0`

#### Defined in

[Core/XUtils.ts:125](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L125)

___

### #historyMovingAvg

• `Private` **#historyMovingAvg**: `number` = `0`

#### Defined in

[Core/XUtils.ts:126](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L126)

___

### #lastTimestamp

• `Private` **#lastTimestamp**: `number` = `0`

#### Defined in

[Core/XUtils.ts:127](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L127)

## Methods

### calc

▸ **calc**(): `number`

Calc FPS according to moving average formula

#### Returns

`number`

Accumulated FPS value

#### Defined in

[Core/XUtils.ts:135](https://github.com/fridman-tamir/XPell/blob/be3d5a4/src/Core/XUtils.ts#L135)
