# Xpell - Real-Time User Interface (UI) Engine

Xpell is a real-time user interface (UI) framework for frontend application development, such application requires control on several modules like dom management, 3D engine and AI engine to run within high FPS.

Xpell enables real-time translation from any command (XCommand) to platform specific command (like HTML, video file, sound, lights and more).  

# Xpell.js
This package is an implementation of Xpell engine for web applications (/Typescript/Javascript/HTML), the engine supports native HTML DOM manipulation engine (XUI) and real-time 3D (X3D) engine for browsers based on THREE.JS and WebGL.


## Overview

## Xpell Real-Time Interpreter 
Xpell is a rear-time interpreter that provides an interface to control both output and input devices (like screens, lights, sounds, microphones, vr headset etc').


  

## Xpell Engine

Xpell is a modular framework, meaning the basic engine can load external modules ad run them. 

Xpell objects can be identified by the X prefix.

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




# Credits & License

 ---

 Author: Fridman Fridman <tamirf@yahoo.com>

 License:  GPL-3 

 First Release: 22/07/2022

 Copyright Fridman Tamir 2022, all right reserved

 
 