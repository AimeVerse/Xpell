# XPell - Universal UI Framework

XPell is a universal user interface (UI) framework for distributed application development, such application requires control on several devices with full sync but each device provides a different user interface, Spell enables real-time translation from any command (spell-command) to platform specific command (like HTML, video file, sound, lights and more).  

# XPell.js
This package is an implementation of XPell engine for web applications (Javascript/HTML), the engine supports native HTML DOM manipulation engine (XUI) and real-time 3D engine for browsers based on THREE.JS and WebGL.


## Overview

## Xpell Real-Time Interpreter 
XPell is a rear-time interpreter that provides an interface to control both output and input devices (like screens, lights, sounds, microphones, vr headset etc').

```   
  

## XPell Engine

XPell is a modular framework, meaning the basic engine can load external modules ad run them. 

XPell objects can be identified by the X prefix.

```
  [user] --> XCommand --> [XPell]  
                                  |  
                                  |-----> [XUIell-module-ui]  
                                  |  
                                  |-----> [spell-module-3d]  
                                  |  
                                  |-----> [spell-module]  
```   

The way to communicate with Spell engine is to send SpellCommand that will be analyzed and activate the appropriate module:

```
  [spell-command]
     - module (the name of the module to run the command)
     - created (date/timestamp of the command)
     - op (the operation (method/function) to run within the module)
        - params (list of parameters)
  optional:
     = on-frame (when to run the command)
     = on-event (event to run the command)
```

SpellCommand can be send in several formats:

- CLI style    
  >   module-name op-name on-frame:"frame-number" param1:"param1-value" param2:"param2-value" ...
- JSON 
  > {
    "module":"module-name",
    "op":"op-name",
    "on-frame":"frame-number"
    params: {
      "param1":"param1-value",
      "param2":"param2-value",
    }
  }


Creating Spell Object
-----------------------
Spell objects can be created by calling the interpreter with create command, the parameters is the object meta json:
{
  _id:"object-id",
  _type:"object-type",
  style:"html style",
}



- spell
  - object-manager (om)
  - event-manager (em)
  - spell-command
  - spell-module
  - spell-ui
    - spell-ui-engine
    - spell-ui-module
    - spell-ui-object
    - spell-core-objects
  - spell3d
    - spell3d-engine
    - spell3d-world
    - spell3d-object
      - spell-primitives
      - spell-gltf







Credits & References:

THREE.JS: [threejs.org](https://threejs.org/)
