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

const XFolder = "./src/"

/**
 * Xpell-Core exports
 */

export {
    Xpell,Xpell as _x,
    XUtils,XUtils as _xu,
    XData,XParser,XCommand,XModule,
    XLogger,XLogger as _xlog,
    XObjectManager,XObject,XObjectPack,type IXObjectData,
    type XEventListener,type XEvent
} from "xpell-core"

export {XEventManager,XEventManager as _xem,_XEventManager_WEB,type HTMLEventListenersIndex,type XEventListenerOptions} from "./src/XEM/XEventManager"
export {XUI,type XUIApp} from "./src/XUI/XUI"
export {XUIObject} from "./src/XUI/XUIObject"
export {XUIObjects,XView,XButton,XForm,XHeader,XImage,XLabel,XLink,XList,XNavBar,XTextArea,XTextField,XVideo,XWebcam,XHTML,XInput,XSVG} from "./src/XUI/XUICoreObjects"
export {TopBar} from "./src/XUI/XDashboard"
export {XJoystick} from "./src/XUI/XJoystick"
export {XViewManager} from "./src/XUI/XViewManager"
export {X3D,type X3DApp} from "./src/X3D/X3D"
export {X3DObject,type IX3DObjectData} from "./src/X3D/X3DObject"
export {XGeometry,XGroup,XMaterial,XMesh,
    XCamera, type XCameraTypes,type XCameraData,
    XLight,type XLightData, type XLightTypes
} from "./src/X3D/X3DCoreObjects"
export {X3DPrimitives,XBox,XCone,XCylinder,XPlane,XSphere,XTorus,XCircle} from "./src/X3D/X3DPrimitives"
export {X3DWorld,XWorldStatus} from "./src/X3D/X3DWorld"
export {XEditor,XTransformControls } from "./src/XUI/XEditor"
export {X3DLoader} from "./src/X3D/X3DLoader"

