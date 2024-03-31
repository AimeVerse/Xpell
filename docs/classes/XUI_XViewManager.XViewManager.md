[xpell](../README.md) / [Modules](../modules.md) / [XUI/XViewManager](../modules/XUI_XViewManager.md) / XViewManager

# Class: XViewManager

[XUI/XViewManager](../modules/XUI_XViewManager.md).XViewManager

## Table of contents

### Constructors

- [constructor](XUI_XViewManager.XViewManager.md#constructor)

### Properties

- [#\_active\_view](XUI_XViewManager.XViewManager.md##_active_view)
- [#\_default\_parent\_element](XUI_XViewManager.XViewManager.md##_default_parent_element)
- [#\_id](XUI_XViewManager.XViewManager.md##_id)
- [#\_raw\_views](XUI_XViewManager.XViewManager.md##_raw_views)
- [#\_views](XUI_XViewManager.XViewManager.md##_views)
- [\_log\_rules](XUI_XViewManager.XViewManager.md#_log_rules)

### Accessors

- [\_active\_view](XUI_XViewManager.XViewManager.md#_active_view)
- [\_default\_parent\_element](XUI_XViewManager.XViewManager.md#_default_parent_element)
- [\_id](XUI_XViewManager.XViewManager.md#_id)

### Methods

- [addRawView](XUI_XViewManager.XViewManager.md#addrawview)
- [addView](XUI_XViewManager.XViewManager.md#addview)
- [addViewPack](XUI_XViewManager.XViewManager.md#addviewpack)
- [createView](XUI_XViewManager.XViewManager.md#createview)
- [getView](XUI_XViewManager.XViewManager.md#getview)
- [hasView](XUI_XViewManager.XViewManager.md#hasview)
- [hidePage](XUI_XViewManager.XViewManager.md#hidepage)
- [hideView](XUI_XViewManager.XViewManager.md#hideview)
- [init](XUI_XViewManager.XViewManager.md#init)
- [loadPage](XUI_XViewManager.XViewManager.md#loadpage)
- [onBrowserUrlHashChanged](XUI_XViewManager.XViewManager.md#onbrowserurlhashchanged)
- [showPage](XUI_XViewManager.XViewManager.md#showpage)
- [showView](XUI_XViewManager.XViewManager.md#showview)

## Constructors

### constructor

• **new XViewManager**(): [`XViewManager`](XUI_XViewManager.XViewManager.md)

#### Returns

[`XViewManager`](XUI_XViewManager.XViewManager.md)

#### Defined in

XUI/XViewManager.ts:33

## Properties

### #\_active\_view

• `Private` **#\_active\_view**: ``null`` \| `string`

#### Defined in

XUI/XViewManager.ts:29

___

### #\_default\_parent\_element

• `Private` **#\_default\_parent\_element**: `string` = `"xplayer"`

#### Defined in

XUI/XViewManager.ts:30

___

### #\_id

• `Private` **#\_id**: `string`

#### Defined in

XUI/XViewManager.ts:20

___

### #\_raw\_views

• `Private` **#\_raw\_views**: `Record`\<`string`, [`XObjectData`](../modules/Core_XObject.md#xobjectdata)\> = `{}`

#### Defined in

XUI/XViewManager.ts:27

___

### #\_views

• `Private` **#\_views**: `Record`\<`string`, [`XUIObjects`](XUI_XUICoreObjects.XUIObjects.md)\> = `{}`

#### Defined in

XUI/XViewManager.ts:28

___

### \_log\_rules

• **\_log\_rules**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `_create` | `boolean` |
| `_init` | `boolean` |

#### Defined in

XUI/XViewManager.ts:21

## Accessors

### \_active\_view

• `get` **_active_view**(): ``null`` \| `string`

#### Returns

``null`` \| `string`

#### Defined in

XUI/XViewManager.ts:39

___

### \_default\_parent\_element

• `get` **_default_parent_element**(): `string`

#### Returns

`string`

#### Defined in

XUI/XViewManager.ts:40

___

### \_id

• `get` **_id**(): `string`

#### Returns

`string`

#### Defined in

XUI/XViewManager.ts:38

## Methods

### addRawView

▸ **addRawView**(`viewName`, `viewData`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewName` | `string` |
| `viewData` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) |

#### Returns

`void`

#### Defined in

XUI/XViewManager.ts:111

___

### addView

▸ **addView**(`view`, `viewName`): `void`

Adds an instance of a view (XView) to the View Manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `view` | [`XUIObjects`](XUI_XUICoreObjects.XUIObjects.md) | The view instance |
| `viewName` | `string` | The view name |

#### Returns

`void`

#### Defined in

XUI/XViewManager.ts:81

___

### addViewPack

▸ **addViewPack**(`vuz`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `vuz` | [`XViewsPack`](../modules/XUI_XViewManager.md#xviewspack) |

#### Returns

`void`

#### Defined in

XUI/XViewManager.ts:103

___

### createView

▸ **createView**(`viewData`, `auto_add?`): `Promise`\<[`XUIObject`](XUI_XUIObject.XUIObject.md)\>

Creates new SpellView

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `viewData` | [`XObjectData`](../modules/Core_XObject.md#xobjectdata) | `undefined` |  |
| `auto_add` | `boolean` | `true` | if true and the view data (view_data) contains a "name" string the new view will be added automatically to the view manager |

#### Returns

`Promise`\<[`XUIObject`](XUI_XUIObject.XUIObject.md)\>

**`Description`**

turns view-data (JSON) to a spell object

#### Defined in

XUI/XViewManager.ts:60

___

### getView

▸ **getView**(`viewName`): [`XUIObjects`](XUI_XUICoreObjects.XUIObjects.md)

Retrieve the view instance from the View Manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewName` | `string` | The view name to retrieve |

#### Returns

[`XUIObjects`](XUI_XUICoreObjects.XUIObjects.md)

XView

#### Defined in

XUI/XViewManager.ts:90

___

### hasView

▸ **hasView**(`viewName`): `boolean`

Checks if there is an instance of a view in the View Manager

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `viewName` | `string` | The view name |

#### Returns

`boolean`

#### Defined in

XUI/XViewManager.ts:99

___

### hidePage

▸ **hidePage**(`viewName`): `void`

Hide the active page and the page URL

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewName` | `string` |

#### Returns

`void`

#### Defined in

XUI/XViewManager.ts:184

___

### hideView

▸ **hideView**(`viewName`): `void`

Show view on screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewName` | `string` |

#### Returns

`void`

#### Defined in

XUI/XViewManager.ts:173

___

### init

▸ **init**(): `void`

Initialized the View Manager and register "hashchange" event on the window to control the url string

#### Returns

`void`

**`Fire`**

"xui-vm-loaded" event

#### Defined in

XUI/XViewManager.ts:46

___

### loadPage

▸ **loadPage**(`defaultViewName`): `void`

Load page (entire screen) on top of the active page
This method handles the first routing where the view name is in the url (http://server:port/#view-name)

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `defaultViewName` | `string` | this param is the default view to load in case the url param is empty |

#### Returns

`void`

#### Defined in

XUI/XViewManager.ts:120

___

### onBrowserUrlHashChanged

▸ **onBrowserUrlHashChanged**(): `void`

handle the hashchange browser event, used to support Back functionality.

#### Returns

`void`

#### Defined in

XUI/XViewManager.ts:138

___

### showPage

▸ **showPage**(`viewName`): `Promise`\<[`XUIObjects`](XUI_XUICoreObjects.XUIObjects.md)\>

Show view as page (set as active view and dismiss former active)

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewName` | `string` |

#### Returns

`Promise`\<[`XUIObjects`](XUI_XUICoreObjects.XUIObjects.md)\>

#### Defined in

XUI/XViewManager.ts:194

___

### showView

▸ **showView**(`viewName`): `Promise`\<`void`\>

Show view on screen

#### Parameters

| Name | Type |
| :------ | :------ |
| `viewName` | `string` |

#### Returns

`Promise`\<`void`\>

#### Defined in

XUI/XViewManager.ts:155
