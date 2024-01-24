Xpell Release Notes

1.1.3
-------
- Fix color light & intensity error
- "orbit" X3D nano-command

1.1.0
-------
- Xpell core inside (no external dependencies)
- Wormholes included
- x3d load async fix

1.0.7
--------

- build support cdn dist
XUI: 
    - No Joystick (remove nipple js)
  

1.0.1
-------------
XUI:
    - XUIObject new attribute : _parent_element_id to indicate the HTML parent element to mount the object to (if this attribute is undefined the object will be mount to the ViewManager default parent element)
    - attribute _data_source is moved to XObject
    - attribute _on_frame_skip_data_source is deprecated (use _process_data instead -> if false the data_source will not be processed in every frame)
    - new methods:
      - loadObject (creates a XUIObject and mount it to the views element - similar to loadControl)
    - SVG Support tag 
X3D:
    - X3D loader sets loading percentage in XData "x3d-object" as {_model_url:"the loading model",_loaded:0:_total:1024}
    - new method loadObject(x3dObject) to 
    - X3DObject new changes
      - attributes
        - _on_load - trigger when model loaded
        - _on_click - trigger on raycast click from 3D objects.
        - _load_animations - to load all animations from base model
        - _play_all_animations - auto play model animations (calls _load_animations if necessary)
        - supported background for scene 
          - solid-color
          - gradient
          - image
          - video
          - cube-texture
          - sphere-texture
          - hdri
      - XLoader support draco loader
      - X3DObject position/rotation/scale error fix for TransformControls
  XEM:
      - change "on" method listener and add options (XEventListener and XEventListenerOptions)
      - new "once" method to run the listener once (equiv to send options {once:true} to "on" method)
      - remove method to remove listener
      - support html events on "on", "once" and "fire" methods
Xpell-Core:
    - XData Changes:
        - "variables" and "objects" properties are deprecated (will be supported in the next versions)
        - new private (#) variables for "objects" (accessed by accessors)
        - new _o getters replaces "objects" properties
        - "variables" is deprecated use objects to store primitives
        - new method:
            * clean() -> cleans the XData Memory 
            * delete(objectId) -> delete object from XData
            * pick(objectId) -> 
    - XObjectManager Changes:
        - new private (#) for internal properties
        - module.om is deprecated use module._object_manager instead (to create, remove or get object use the XModule method directly)
        - new alias method to getObject named "go", example ==> module._object_manager.go(id)
    - XObject Changes:
        - new properties:
            * _data_source - the name of the data source id (XDate object-id)
            * _on_data: Function | string - a function or xpell command when data is present on the data source
            * _process_frame:boolean -  if false the onFrame and _on_frame will not be execute (true by default)
            * _process_data:boolean -  if false the onFrame and _on_data will not be execute (true by default)
        - new methods:
            * onData(xobj,data) triggers when data arrives (if override this method make sure to call super.onData(data) to run the _on_data attribute)
    - XModule Changes:
        - new methods
            * getObject(objectId) -> gets an object from the module object manager


XDB:  
    - XDB package created
    - data types : Objects + strings
    - encoding - base64 / plain text


1.0.5:
----------
- X3D create function is async
- X3D object name attribute : _model_url 
- X3D new Primitive : XModel - any generic model (gltf/glb) (_model_url attribute)



1.0.45:
----------
- X3D world support TWEEN update 
- X3DObject setRotationFromQuaternion
- X3D new primitive -> circle



1.0.42:
----------
- XUI view manager (show/hide page/view)
- XAPP json new format (_views & _controls in one json)
- XAI - Local TTS (browser o/s voice)


1.0.4
-------
- Xpell 3D (X3D) 
- XWorld
- X3DCoreObjects
- X3DPrimitives
- XNanoCommands (+ XUI + X3D)
- Positional Audio
- XJoystick
- XDashboard
- Scene Background (X3D.addEnvironmentMap)
- Cannon JS physics engine support
- Object Manager remove objects (remove method)
- X3D Raycast fires "raycast-data" event 
- X3D Object importAnimationFromFBX/importAnimationFromGLTF 
- XObject + XUIObjects + X3D Objects "_on_frame", "_on_mount", "_on_create" support for anonymous function in json
- XUIObjects supports also "_on_click" anonymous function


1.0.3
-------
- Full TS compatibility
- View Manager page loading

1.0.2
------
- Typedoc documentation system embedded (npm run docs -> generate docs)

1.0.1
---------

- xhtml object
- basic display block "show"
- svg