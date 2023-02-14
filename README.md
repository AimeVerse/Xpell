# Xpell - Real-Time User Interface (UI) Engine

Xpell is a real-time user interface (UI) framework for frontend application development. It provides granular control over multiple modules, including DOM management, 3D engine, and AI engine, to ensure that applications can run at high FPS rates.


# Xpell.js

This package is an implementation of Xpell engine for web applications (/Typescript/Javascript/HTML), the engine supports native HTML DOM manipulation engine (XUI) and real-time 3D (X3D) engine for browsers based on THREE.JS and WebGL.

More about the Xpell engine please refer to the [a relative link](xpell-core.MD) file

# Getting Started
To begin using Xpell, install the framework and import it into your frontend application. From there, you can utilize its various modules to create a high-performance, real-time UI.


## Overview

## Xpell Real-Time Interpreter 
Xpell is a rear-time interpreter that provides an interface to control both output and input devices (like screens, lights, sounds, microphones, vr headset etc').


  

## Xpell Engine

Xpell is a modular framework, meaning the basic engine can load external modules and run them. 

## Xpell Module (XModule)

Every Xpell Module (XModule) uses as a interpretation layer for specific engine, flow manager or any other module.



## Xpell Object (XObject)

XModules can create objects that can provide abstract interface to the module objects, for example XObject is a generic Xpell Object but XUIObject is an object that wraps HTML Element there for it uses as an abstraction layer to handle the HTML Element.

Xpell Objects can be identified by the X prefix like XObject.

## Xpell Command

Xpell provides a command (XCommand) system to enable communication between modules in the framework. When a command is received by the Xpell interpreter, it is routed to the requested module for execution.

Commands can be executed synchronously or asynchronously, and can pass data as arguments. The Xpell Command System helps to create a modular architecture for Xpell, allowing different modules to communicate and work together seamlessly.

Xpell interpreter has the ability to handle commands in two formats:

### CLI style format

This is a text-based interface with the following structure:

Format:
```
module-name op object:object-id param1:param1-value param2:param2-value ...
```

Example: 
Run the xpell `_info` command: 
```
xpell info
```

### JSON format

Xpell interpreter can handle JSON formatted commands which enable more flexible data structures and the ability to include JavaScript anonymous functions as a parameter. The following JSON Schema defines the format of the XCommand data:

Format (Schema):
```
{
    _module: string, // The XModule that should execute the command
    _object?: string, // The XObject within the XModule to execute the command (optional)
    _op: string, // The operation (method) to run in the module
    _params?: { // XCommand parameters object
        [k: string]: string | number | Function
    }
}
```
Example: 
```
{
   _module:"xpell",
   _op:"info"
}
```

```
  [user] --> XCommand --> [Xpell]  
                                  |  
                                  |-----> [XUI] -> UI Module  (HTML)
                                  |  
                                  |-----> [X3D] -> 3D Module (three.js)  
                                  |  
                                  |-----> [xpell-module]  -> Base Module
```   

The way to communicate with Xpell engine is to send XCommand that will be analyzed and activate the appropriate module:

```
  [XCommand]
     - module (the name of the module to run the command)
     - created (date/timestamp of the command)
     - op (the operation (method/function) to run within the module)
        - params (list of parameters)
  optional:
     = on-frame (when to run the command)
     = on-event (event to run the command)
```


# XUI

## View Manager
The View Manager object handles the page view activities automatically for you.
Attached to the XUI Module the View Manager is being initialized by the XUI.



XUIObject extends xpell object (XObject), every XUIObject wraps html elements as needed. the following list is XUI core objects:
view:DIV
label:label
link : a href
button :Button,
text : input type=”input”
password : input type=”password”
input:Input
textarea:textarea
video: Video,
image:img,
form:Form,
Webcam:video with webcam source
Xhtml:any other html tag that defined in _html_tag xpell attribute
svg:SVG


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




```
npm install xpell
```




# Credits & License

 ---

 Author: Fridman Fridman <tamirf@yahoo.com>

 License:  GPL-3 

 First Release: 22/07/2022

 Copyright Fridman Tamir 2022, all right reserved




 