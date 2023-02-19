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

After that import the new Object class to the XUI module with the importObject method:

```XUI.importObject("object-name",MyXUIObject)```



### OnClick Method
This method is invoked when the XUIObject is clicked by the user.

To set the method from the XObject use the _on_click attribute that can receive both textual XCommand (CLI) or callable Javascript function:

The following example is a button that log to the console when it being clicked:
```
{
   _type:"button",
   _id:"my-button",
   _text:"click me",
   style:"border:1px solid black;border-radius:5px",
   _on_click:(xobj:XUIObject,e:HTMLEvent) => {console.log("click")}
}
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
