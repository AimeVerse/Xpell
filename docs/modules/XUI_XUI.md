[xpell](../README.md) / [Modules](../modules.md) / XUI/XUI

# Module: XUI/XUI

## Table of contents

### References

- [XUICoreObjects](XUI_XUI.md#xuicoreobjects)
- [XUIObject](XUI_XUI.md#xuiobject)
- [XViewManager](XUI_XUI.md#xviewmanager)
- [default](XUI_XUI.md#default)

### Classes

- [XUIModule](../classes/XUI_XUI.XUIModule.md)

### Type Aliases

- [XUIApp](XUI_XUI.md#xuiapp)

### Variables

- [FIRST\_USER\_GESTURE](XUI_XUI.md#first_user_gesture)
- [XUI](XUI_XUI.md#xui)

## References

### XUICoreObjects

Renames and re-exports [XUIObjects](../classes/XUI_XUICoreObjects.XUIObjects.md)

___

### XUIObject

Re-exports [XUIObject](../classes/XUI_XUIObject.XUIObject.md)

___

### XViewManager

Re-exports [XViewManager](../classes/XUI_XViewManager.XViewManager.md)

___

### default

Renames and re-exports [XUI](XUI_XUI.md#xui)

## Type Aliases

### XUIApp

Ƭ **XUIApp**: `Object`

XUIApp is the Xpell UI Application object, it can hold views and controls

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_controls?` | \{ `[k: string]`: {} \| `string`; `_parent_element`: `string` \| {}  } |
| `_controls._parent_element` | `string` \| {} |
| `_views?` | [`XViewsPack`](XUI_XViewManager.md#xviewspack) |
| `xpell?` | \{ `version?`: `number`  } |
| `xpell.version?` | `number` |

#### Defined in

XUI/XUI.ts:20

## Variables

### FIRST\_USER\_GESTURE

• `Const` **FIRST\_USER\_GESTURE**: ``"first-user-gesture"``

#### Defined in

XUI/XUI.ts:30

___

### XUI

• `Const` **XUI**: [`XUIModule`](../classes/XUI_XUI.XUIModule.md)

#### Defined in

XUI/XUI.ts:339
