# Xpell - Real-Time User Interface (UI) Engine

Xpell is a real-time user interface (UI) framework for frontend application development. It provides granular control over multiple modules, including DOM management, 3D engine, and AI engine, to ensure that applications can run at high FPS rates.


# Xpell.js

This package is an implementation of Xpell engine for web applications (/Typescript/Javascript/HTML), the engine supports native HTML DOM manipulation engine (XUI) and real-time 3D (X3D) engine for browsers based on THREE.JS and WebGL.

More about the Xpell engine please refer to the [xpell-core](xpell-core.md) file

# Xpell.js Base Module


# XUI
The XUI Module handles the User Interface activities, objects and events. 

## XUIObject

This object extends XObject and wraps HTML DOM Element to control the UI within a browser environment.

This object uses as a base class for any other XUI module objects (like XUI Core Objects).
 
To create a new XUI Object simply extend the XUIObject class:

```
class MyXUIObject extends XUIObject {
   constructor(data:IXUIDataObject) {
      super(data)
      //your own code
   }
}
```

Afterward import the new Object class to the XUI module with the importObject method:

```
XUI.importObject("object-name",MyXUIObject)
```

## View Manager
The View Manager object handles the page view activities automatically for you.
Attached to the XUI Module the View Manager is being initialized by the XUI.

## XUI Core Objects

The following is the XUI Core objects that wraps HTML elements and can be used out-of-the-box:


### XView
This is the basic element within the XUI core objects.

- Wrapping HTML Element: Div
- Xpell name : "view"

### XLabel
Represents a caption for an item in a user interface.

- Wrapping HTML Element: Label
- Xpell name : "label"


### XLink
HyperLink to other page/resource.

- Wrapping HTML Element: A href
- Xpell name : "link"

## XButton
Represents a clickable button in a user interface.

- Wrapping HTML Element: Button
- Xpell name: "button"

### XText
Text input in a user interface.

Wrapping HTML Element: Input (type="text")
Xpell name: "text"

### XTextArea
Text area for multiple lines in a user interface.

Wrapping HTML Element: Textarea
Xpell name: "textarea"

### XVideo
Embed a video in a user interface.

Wrapping HTML Element: Video
Xpell name: "video"

### XWebcam
Embed a video feed from a webcam in a user interface.

Wrapping HTML Element: Video with webcam source
Xpell name: "webcam"

### XImage
Embed an image in a user interface.

Wrapping HTML Element: Img
Xpell name: "image"

### XForm
Create a form to submit data in a user interface.

Wrapping HTML Element: Form
Xpell name: "form"

### XHTML
Include any other HTML tag in a user interface.

Wrapping HTML Element: Any other HTML tag (defined in _html_tag attribute)
Xpell name: "xhtml"



every XUIObject has _on_click attribute that can get text or callable javascript function like:
{
   _type:"button",
   _id:"my-button",
   _text:"click me",
   style:"border:1px solid black;border-radius:5px",
   _on_click:(xobj:XUIObject,e:HTMLEvent) => {console.log("click")}
}


xpell interpreter works with frames that being populated to the children objects, this example is a label that change the content every frame to the current frame number:
{
   _type:"label",
   _on_frame:(obj:XUIObject,frameNumber:number) = {
      obj.getDOMObject().textContent = frameNumber
   }
}


# Getting Started
To begin using Xpell, install the framework and import it into your frontend application. From there, you can utilize its various modules to create a high-performance, real-time UI.


```
npm install xpell
```




# Credits & License

 ---

 Author: Fridman Fridman <tamirf@yahoo.com>

 License:  GPL-3 

 First Release: 22/07/2022

 Copyright Fridman Tamir 2022, all right reserved




 