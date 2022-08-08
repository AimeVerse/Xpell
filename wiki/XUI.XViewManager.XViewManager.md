# Class: XViewManager

[XUI/XViewManager](../wiki/XUI.XViewManager).XViewManager

## Table of contents

### Constructors

- [constructor](../wiki/XUI.XViewManager.XViewManager#constructor)

### Properties

- [activeView](../wiki/XUI.XViewManager.XViewManager#activeview)
- [parentHTMLElement](../wiki/XUI.XViewManager.XViewManager#parenthtmlelement)
- [rawViews](../wiki/XUI.XViewManager.XViewManager#rawviews)
- [views](../wiki/XUI.XViewManager.XViewManager#views)

### Methods

- [addRawView](../wiki/XUI.XViewManager.XViewManager#addrawview)
- [addRawViews](../wiki/XUI.XViewManager.XViewManager#addrawviews)
- [addView](../wiki/XUI.XViewManager.XViewManager#addview)
- [createView](../wiki/XUI.XViewManager.XViewManager#createview)
- [getView](../wiki/XUI.XViewManager.XViewManager#getview)
- [hasView](../wiki/XUI.XViewManager.XViewManager#hasview)
- [hashchange](../wiki/XUI.XViewManager.XViewManager#hashchange)
- [init](../wiki/XUI.XViewManager.XViewManager#init)
- [loadPage](../wiki/XUI.XViewManager.XViewManager#loadpage)
- [showPage](../wiki/XUI.XViewManager.XViewManager#showpage)
- [showView](../wiki/XUI.XViewManager.XViewManager#showview)

## Constructors

### constructor

• **new XViewManager**()

Spell View Manager constructor

**`Member`**

raw_views This object contains the textual JSON representation of views (these are not SpellView objects, uses for caching views before loading)

**`Member`**

views SpellView objects that are ready to use (show, hide...)

#### Defined in

src/XUI/XViewManager.ts:31

## Properties

### activeView

• **activeView**: `string`

#### Defined in

src/XUI/XViewManager.ts:23

___

### parentHTMLElement

• **parentHTMLElement**: `string` = `"xplayer"`

#### Defined in

src/XUI/XViewManager.ts:24

___

### rawViews

• **rawViews**: `Record`<`string`, [`XObject`](../wiki/XObject.XObject)\> = `{}`

#### Defined in

src/XUI/XViewManager.ts:21

___

### views

• **views**: `Record`<`string`, [`XUIObjects`](../wiki/XUI.XUICoreObjects.XUIObjects)\> = `{}`

#### Defined in

src/XUI/XViewManager.ts:22

## Methods

### addRawView

▸ **addRawView**(`view_name`, `view_data`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view_name` | `any` |
| `view_data` | `any` |

#### Returns

`void`

#### Defined in

src/XUI/XViewManager.ts:79

___

### addRawViews

▸ **addRawViews**(`vuz`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vuz` | `any` |

#### Returns

`void`

#### Defined in

src/XUI/XViewManager.ts:74

___

### addView

▸ **addView**(`view`, `view_name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view` | `any` |
| `view_name` | `any` |

#### Returns

`void`

#### Defined in

src/XUI/XViewManager.ts:62

___

### createView

▸ **createView**(`view_data`, `auto_add?`): [`XUIObject`](../wiki/XUI.XUIObject.XUIObject)

Creates new SpellView

**`Description`**

turns view-data (JSON) to a spell object

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `view_data` | `any` | `undefined` |  |
| `auto_add` | `boolean` | `true` | if true and the view data (view_data) contains a "name" string the new view will be added automatically to the view manager |

#### Returns

[`XUIObject`](../wiki/XUI.XUIObject.XUIObject)

#### Defined in

src/XUI/XViewManager.ts:50

___

### getView

▸ **getView**(`view_name`): [`XUIObjects`](../wiki/XUI.XUICoreObjects.XUIObjects)

#### Parameters

| Name | Type |
| :------ | :------ |
| `view_name` | `any` |

#### Returns

[`XUIObjects`](../wiki/XUI.XUICoreObjects.XUIObjects)

#### Defined in

src/XUI/XViewManager.ts:66

___

### hasView

▸ **hasView**(`view_name`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `view_name` | `any` |

#### Returns

`boolean`

#### Defined in

src/XUI/XViewManager.ts:70

___

### hashchange

▸ **hashchange**(): `void`

handle the hashchange browser event, used to support Back functionality.

#### Returns

`void`

#### Defined in

src/XUI/XViewManager.ts:97

___

### init

▸ **init**(): `void`

#### Returns

`void`

#### Defined in

src/XUI/XViewManager.ts:37

___

### loadPage

▸ **loadPage**(`default_view_name`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `default_view_name` | `any` |

#### Returns

`void`

#### Defined in

src/XUI/XViewManager.ts:83

___

### showPage

▸ **showPage**(`viewName`): `void`

Show view as page (set as active view and dismiss former active)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewName` | `string` |

#### Returns

`void`

#### Defined in

src/XUI/XViewManager.ts:133

___

### showView

▸ **showView**(`viewName`): `void`

Show view on screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewName` | `string` |

#### Returns

`void`

#### Defined in

src/XUI/XViewManager.ts:113
