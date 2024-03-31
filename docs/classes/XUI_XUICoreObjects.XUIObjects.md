[xpell](../README.md) / [Modules](../modules.md) / [XUI/XUICoreObjects](../modules/XUI_XUICoreObjects.md) / XUIObjects

# Class: XUIObjects

[XUI/XUICoreObjects](../modules/XUI_XUICoreObjects.md).XUIObjects

ObjectPack class for multi object registration

## Hierarchy

- [`XObjectPack`](Core_XObject.XObjectPack.md)

  ↳ **`XUIObjects`**

## Table of contents

### Constructors

- [constructor](XUI_XUICoreObjects.XUIObjects.md#constructor)

### Methods

- [getObjects](XUI_XUICoreObjects.XUIObjects.md#getobjects)

## Constructors

### constructor

• **new XUIObjects**(): [`XUIObjects`](XUI_XUICoreObjects.XUIObjects.md)

#### Returns

[`XUIObjects`](XUI_XUICoreObjects.XUIObjects.md)

#### Inherited from

[XObjectPack](Core_XObject.XObjectPack.md).[constructor](Core_XObject.XObjectPack.md#constructor)

## Methods

### getObjects

▸ **getObjects**(): `Object`

Get all registered object in this ObjectPack

#### Returns

`Object`

XObject dictionary

| Name | Type |
| :------ | :------ |
| `button` | typeof [`XButton`](XUI_XUICoreObjects.XButton.md) |
| `circle` | typeof [`XSVGCircle`](XUI_XUICoreObjects.XSVGCircle.md) |
| `div` | typeof [`XView`](XUI_XUICoreObjects.XView.md) |
| `ellipse` | typeof [`XSVGEllipse`](XUI_XUICoreObjects.XSVGEllipse.md) |
| `form` | typeof [`XForm`](XUI_XUICoreObjects.XForm.md) |
| `image` | typeof [`XImage`](XUI_XUICoreObjects.XImage.md) |
| `input` | typeof [`XInput`](XUI_XUICoreObjects.XInput.md) |
| `label` | typeof [`XLabel`](XUI_XUICoreObjects.XLabel.md) |
| `line` | typeof [`XSVGLine`](XUI_XUICoreObjects.XSVGLine.md) |
| `link` | typeof [`XLink`](XUI_XUICoreObjects.XLink.md) |
| `list` | typeof [`XList`](XUI_XUICoreObjects.XList.md) |
| `password` | typeof [`XPassword`](XUI_XUICoreObjects.XPassword.md) |
| `path` | typeof [`XSVGPath`](XUI_XUICoreObjects.XSVGPath.md) |
| `polygon` | typeof [`XSVGPolygon`](XUI_XUICoreObjects.XSVGPolygon.md) |
| `polyline` | typeof [`XSVGPolyline`](XUI_XUICoreObjects.XSVGPolyline.md) |
| `rect` | typeof [`XSVGRect`](XUI_XUICoreObjects.XSVGRect.md) |
| `svg` | typeof [`XSVG`](XUI_XUICoreObjects.XSVG.md) |
| `text` | typeof [`XTextField`](XUI_XUICoreObjects.XTextField.md) |
| `textarea` | typeof [`XTextArea`](XUI_XUICoreObjects.XTextArea.md) |
| `video` | typeof [`XVideo`](XUI_XUICoreObjects.XVideo.md) |
| `view` | typeof [`XView`](XUI_XUICoreObjects.XView.md) |
| `webcam` | typeof [`XWebcam`](XUI_XUICoreObjects.XWebcam.md) |
| `xhtml` | typeof [`XHTML`](XUI_XUICoreObjects.XHTML.md) |

#### Overrides

[XObjectPack](Core_XObject.XObjectPack.md).[getObjects](Core_XObject.XObjectPack.md#getobjects)

#### Defined in

XUI/XUICoreObjects.ts:448
