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
    XEventManager, XEventManager as _xem,type XEventListener

} from "xpell-core"
// export {} from "./src/XUtils"
// export {XData} from "./src/XData"
// export {XParser} from "./src/XParser"
// export {XCommand} from "./src/XCommand"
// export {XLogger,XLogger as _xlog} from "./src/XLogger"
// export {XModule} from "./src/XModule"
// export {XObject,XObjectPack,type IXObjectData} from "./src/XObject"
// export {XObjectManager} from "./src/XObjectManager"
// export {XEventManager, XEventManager as _xem,type XEventListener} from "./src/XEventManager"

// export {default as Xpell} from "xpell-core"
// export {XUtils} from "./src/XUtils"
// export {XData} from "./src/XData"
// export {XParser} from "./src/XParser"
// export {XCommand} from "./src/XCommand"
// export {XLogger} from "./src/XLogger"
// export {XModule} from "./src/XModule"
// import IXObjectData from "./src/XObject"
// export {IXObjectData}
// export {XObject,XObjectPack} from "./src/XObject"
// export {XObjectManager} from "./src/XObjectManager"
// export {XEventManager,XEvent,XEventList} from "./src/XEventManager"




export {XUI} from "./src/XUI/XUI"
export {XUIObject} from "./src/XUI/XUIObject"
export {XUIObjects,XView,XButton,XForm,XHeader,XImage,XLabel,XLink,XList,XNavBar,XTextArea,XTextField,XVideo,XWebcam,XHTML,XInput,XSVG} from "./src/XUI/XUICoreObjects"
export {TopBar} from "./src/XUI/XDashboard"
export {XJoystick} from "./src/XUI/XJoystick"
export {XViewManager} from "./src/XUI/XViewManager"
export {X3D} from "./src/X3D/X3D"
export {X3DObject,type IX3DObjectData} from "./src/X3D/X3DObject"
export {XGeometry,XGroup,XMaterial,XMesh,
    XCamera, type XCameraTypes,type XCameraData,
    XLight,type XLightData, type XLightTypes
} from "./src/X3D/X3DCoreObjects"
export {X3DPrimitives,XBox,XCone,XCylinder,XPlane,XSphere,XTorus} from "./src/X3D/X3DPrivitives"
export {X3DWorld,XWorldStatus} from "./src/X3D/X3DWorld"
export {XEditor,XTransformControls } from "./src/XUI/XEditor"
export {X3DLoader} from "./src/X3D/X3DLoader"


/**
 * Interface and Types
 * -- should be in a single line for each to prevent build errors
 */
// import IX3DObjectData from "./src/X3D/X3DObject"
// import XCameraTypes from "./src/X3D/X3DCoreObjects"
// import XCameraData from "./src/X3D/X3DCoreObjects"
// import XLightData from "./src/X3D/X3DCoreObjects"
// import XLightTypes from "./src/X3D/X3DCoreObjects"
// export type {IX3DObjectData}
// export type {XCameraTypes}
// export type {XCameraData}
// export type {XLightData}
// export type {XLightTypes}

// export * from "./src/X3D/X3DCoreObjects"