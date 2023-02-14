# Xpell - Real-Time User Interface (UI) Engine

Xpell is a real-time user interface (UI) framework for frontend application development. It provides granular control over multiple modules, including DOM management, 3D engine, and AI engine, to ensure that applications can run at high FPS rates.


## Overview

## Xpell Real-Time Interpreter 
Xpell is a rear-time interpreter that provides an interface to control both output and input devices (like screens, lights, sounds, microphones, vr headset etc').


  

## Xpell Engine

Xpell is a modular framework, meaning the basic engine can load external modules and run them. 


## Xpell Command

Xpell provides a command (XCommand) system to enable communication between modules in the framework. When a command is received by the Xpell interpreter, it is routed to the requested module for execution.

Commands can be executed synchronously or asynchronously, and can pass data as arguments. The Xpell Command System helps to create a modular architecture for Xpell, allowing different modules to communicate and work together seamlessly.

Xpell interpreter has the ability to handle commands in two formats:

### CLI style format

This is a text-based interface with the following structure:

Format:
```module-name op object:object-id param1:param1-value param2:param2-value ...```

Example: 
Run the xpell `_info` command: 
```xpell info```

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


## Xpell Module (XModule)

Every Xpell Module (XModule) uses as a interpretation layer for specific engine, flow manager or any other module.


## Xpell Object (XObject)

XModules can create objects that can provide abstract interface to the module objects, for example XObject is a generic Xpell Object but XUIObject is an object that wraps HTML Element there for it uses as an abstraction layer to handle the HTML Element.

Xpell Objects can be identified by the X prefix like XObject.


### Creating  XObject

There are two ways to create a new Xpell Object of type XObject:

1. Create Javascript object instance:
   ```const myXObject = new XObject({_id:"xobject-id",_type:"xobject-xpell-name"})```

2. Using the XModule create method:
   ```const myObject = XModule.create({_id:"xobject-id",_type:"xobject-xpell-name"})`


#### XObject Data
Every XObject can be created by the interpreter with a simple data object in a JSON format.

The interface/type of the data is defined in the IXObjectData TypeScript interface:

```
interface IXObjectData  {
    [k: string]: string | null | [] | undefined | Function | boolean | number | {}
    _id: string 
    _name?: string
    _type: string
    _children?: Array<IXObjectData>
    _xversion?: number 
}
```

for example to define a new XObject with the id="obj1" and with one child object use the following data object:
```
{
    _id:"obj1",
    _type:"xobject",
    _children:[
        {
            _id:"child-object",
            _type:"xobject"
        }
    ]
}
```

* Every XObject data attribute starts with an underscore sign "_", nevertheless it is possible to add also attributes that will not be used by the interpreter but they will be transferred to the wrapped object directly, for example if the XObject wraps an HTML element this mechanism enable setting also HTML attribute to the object like style, class etc'.
  

### _on_frame attribute


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




 