/**
 * Xpell - Real-Time User Interface Platform
 * Typescript Edition
 * Library Entry Point
 * 
 * @description Universal User Interface (UI) Engine for Javascript supporting devices & browsers
 * @author Fridman Fridman <tamirf@yahoo.com>
 * @since  22/07/2022
 * @Copyright Fridman Tamir 2022, all right reserved
 *
 *      This program is free software; you can redistribute it and/or
 *		modify it under the terms of the GNU General Public License
 *		as published by the Free Software Foundation; either version
 *		3 of the License, or (at your option) any later version.
 *
 */


/**
 * Xpell - Real-Time User Interface Platform
 * Typescript Edition
 * Library Entry Point
 * 
 * @description Universal User Interface (UI) Engine for Javascript supporting devices & browsers
 * @author Fridman Fridman <fridman.tamir@gmail.com>
 * @since  22/07/2022
 * @Copyright Fridman Tamir 2022, all right reserved
 *
 *      This program is free software; you can redistribute it and/or
 *		modify it under the terms of the GNU General Public License
 *		as published by the Free Software Foundation; either version
 *		3 of the License, or (at your option) any later version.
 *
 */

const XFolder = "./src/"

/**
 * Xpell Core exports
 */

export {
    Xpell,Xpell as _x,
    XUtils,XUtils as _xu,
    XData, XData as _xd,type XDataObject,type XDataVariable,_XData,
    XParser,XCommand,XModule,type XCommandData, type XModuleData,GenericModule as XGenericModule,
    XLogger,XLogger as _xlog,_XLogger,
    XObjectManager,XObject,XObjectPack,type IXObjectData,type XDataXporterHandler,
    type XObjectData,type XObjectOnEventIndex,type XObjectOnEventHandler,
    type XEventListener,type XEvent,
    type XNanoCommandPack,type XNanoCommand,
    XEventManager,XEventManager as _xem,_XEventManager,
    type HTMLEventListenersIndex,type XEventListenerOptions
} from "./src/Core/Xpell"

export {XUI,type XUIApp,XUIModule} from "./src/XUI/XUI"

export {XUIObject} from "./src/XUI/XUIObject"

export {XUIObjects,XView,XButton,XForm,XHeader,XImage,XLabel,XLink,XList,XNavBar,
    XTextArea,XTextField,XVideo,XWebcam,
    XHTML,XInput,XSVG,XPassword,XSVGCircle,
    XSVGEllipse,XSVGLine,XSVGPolygon,XSVGRect,XSVGPolyline,XSVGPath
} from "./src/XUI/XUICoreObjects"

export {TopBar} from "./src/XUI/XDashboard"
// export {XJoystick} from "./src/XUI/XJoystick"
export {XViewManager,type XViewsPack} from "./src/XUI/XViewManager"
export {X3D,type X3DApp,type X3DSceneControl,type X3DPhysicsEngines,type X3DHelpers,
    type X3AxesHelper, type XHelperData,X3DModule
} from "./src/X3D/X3D"

export {
    type X3DSceneBackground, type X3DSceneBackgroundTypes, 
    type X3DSceneBackgroundHandler,type X3DSceneBackgroundParams
} from "./src/X3D/X3DWorldSceneBackground"
export {X3DObject,type IX3DObjectData,type XVector3Data,XVector3,type X3DListener,} from "./src/X3D/X3DObject"

export {XGeometry,XGroup,XMaterial,XMesh,
    XCamera, type XCameraTypes,type XCameraData,
    XLight,type XLightData, type XLightTypes
} from "./src/X3D/X3DCoreObjects"

export {X3DPrimitives,XBox,XCone,XCylinder,XPlane,XSphere,XTorus,XCircle} from "./src/X3D/X3DPrimitives"
export {X3DWorld,XWorldStatus} from "./src/X3D/X3DWorld"
export {XEditor,XTransformControls } from "./src/XUI/XEditor"
export {X3DLoader} from "./src/X3D/X3DLoader"
export {XDB,XDB as _xdb,_XDataBase} from "./src/XDB/XDB"

export {XAI,XAI as _xai,XAIModule} from "./src/XAI/XAI"
export {XAIObject} from "./src/XAI/XAIObject"
export {XAIObjects,XTTS} from "./src/XAI/XAICoreObjects"


import {Xpell} from "./src/Core/Xpell"
export default Xpell

