# Xpell - Real-Time User Interface (UI) Engine

Xpell is a real-time user interface (UI) framework for frontend application development. It provides granular control over multiple modules, including DOM management, 3D engine, and AI engine, to ensure that applications can run at high FPS rates.


## Overview

## Xpell Real-Time Interpreter 
Xpell is a rear-time interpreter that provides an interface to control both output and input devices (like screens, lights, sounds, microphones, vr headset etc').


  

## Xpell Engine

Xpell is a modular framework, meaning the basic engine can load external modules and run them. 


## XEventManager (XEM)

The XEventManager (_xem) is a critical component of the Xpell event system. It is responsible for managing events, both dispatching and listening to them. The XEventManager allows developers to easily create custom events and respond to them in a flexible and dynamic way.

The XEventManager is a powerful tool for creating custom event systems within Xpell and can be used to implement complex functionality in a simple and modular way.

Usage:

1. Event Listen
```    // listen to event name "my-event" and display the event data to the console when fired
       _xem.on("my-event",(eventName,data)=>{
           console.log("XEM Event " + eventName,data)
       })
```

2. Event Fire
```     //fire (trigger) event name "my-event" and simple object as data
       _xem.fire("my-event",{_data_param:"my data"}) 
```
 


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
   ```const myObject = XModule.create({_id:"xobject-id",_type:"xobject-xpell-name"})```


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


### XObject Base Methods

The following list describes the XObject base method, these methods can be override when extending the object (just remember to call the super class method to bubble the call to the parent class):

#### OnCreate Method 
This method invoked when the object is begin created.

To set the method from the XData object use the `_on_create` attribute that can receive both textual XCommand (CLI) or callable Javascript function:

Example with JS anonymous function:
```
{
    _id:"my-obj",
    _type:"xobject",
    _on_create:(xobj:XObject) => { //write JS code here}
}
```

Example with XCommand CLI style:
```
{
    _id:"my-obj",
    _type:"xobject",
    _on_create:"log" //will run "log" xnano-command that will log the object to the console
}
```


### OnFrame Method

Since Xpell Interpreter works with frames as a basic clock every module and object defines `async onFrame(frameNumber:number)` method to handle frame based code.

The onFrame method will include the code from the `_on_frame` attribute that can receive both textual XCommand (CLI) or callable Javascript function:

The following example writes the frame number to the console each frame.
```
{
   _type:"xobject",
   _on_frame:(obj:XObject,frameNumber:number) = {
     console.log(frameNumber)
   }
}
```
* When Overriding this method call super.onFrame(frameNumber) method to bubble the event
* Do not use complex code since it can affect the general system frame rate
  


### OnMount Method
This method is invoked when the object is mounted in the DOM tree. This method is useful when you need to access the DOM elements or interact with them.

To set the method from the XObject use the _on_mount attribute that can receive both textual XCommand (CLI) or callable Javascript function:

Example with JS anonymous function:
```
{
    _id:"my-obj",
    _type:"xobject",
    _on_mount:(xobj:XObject) => { //write JS code here}
}

```






# Credits & License

 ---

 Author: Fridman Fridman <tamirf@yahoo.com>

 License:  GPL-3 

 First Release: 22/07/2022

 Copyright Fridman Tamir 2022, all right reserved




 