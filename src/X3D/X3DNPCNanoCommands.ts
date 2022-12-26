

/**
 * xncp object nano-commands
 * 
 */




import XCommand from "../XCommand"
import {XEventManager as _xem} from "../XEventManager"
import {XLogger as _xlog} from "../XLogger"
import { XNanoCommandPack } from "../XNanoCommands"
import X3DObject from "./X3DObject"
import XData from "../XData"
import * as THREE from 'three'




const get_param = (pos, name, cmd) => {
    return (cmd.params[name]) ? cmd.params[name] : cmd.params[pos]
}










export const _xnpc_nano_commands: XNanoCommandPack = {

    //    "rotation":  (xCommand:XCommand,x3dObject:X3DObject) => {

    //        //rotation x:0.01 y:++0.01 z:--0.01
    //        const x = get_param(0, "x", xCommand)

    //        if (x) { set_axis(x3dObject._rotation, "x", x) }

    //        const y = get_param(1, "y", xCommand)
    //        if (y) { set_axis(x3dObject._rotation, "y", y) }

    //        const z = get_param(2, "z", xCommand)
    //        set_axis(x3dObject._rotation, "z", z)
    //    },

       "spin": (xCommand:XCommand,x3dObject:X3DObject) => {

           const x = get_param(0, "x", xCommand)
           const x_str = (x) ? "x:++" + x : ""

           const y = get_param(0, "y", xCommand)
           const y_str = (y) ? "y:++" + y : ""

           const z = get_param(0, "z", xCommand)
           const z_str = (z) ? "z:++" + z : ""
           const sstr = `rotation ${x_str} ${y_str} ${z_str}`

           // console.log(sstr);
           x3dObject._on_frame = sstr
       },

    "stop-spin": (xCommand: XCommand, x3dObject: X3DObject) => {
        x3dObject.onframe = ""
    },

    "neutral-face": (xCommand: XCommand, x3dObject: X3DObject) => {
        
        
        const character = x3dObject.getThreeObject().children[0]
        if (!x3dObject.hasOwnProperty("neutralIndex") || x3dObject.neutralIndex == 0) {
            x3dObject.neutralIndex = 1
            x3dObject._on_frame = "neutral-face"
        }
        let processing = false

        for (let i = 0; i < character.children[1]["morphTargetInfluences"].length; i++) {
            if (character.children[1]["morphTargetInfluences"][i] > 0) {
                character.children[1]["morphTargetInfluences"][i] -= 0.03
                processing = processing || (character.children[1]["morphTargetInfluences"][i] > 0)
            } else {
                character.children[1]["morphTargetInfluences"][i] = 0

            }
        }
        if (!processing) {
            x3dObject._on_frame = ""
            x3dObject.smileIndex = 0
            x3dObject.faceOrgasmIndex = 0
            if (x3dObject.startLeftEye) {
                (x3dObject.leftEye as THREE.Object3D).quaternion.copy(<THREE.Quaternion>x3dObject.startLeftEye)
                console.log(x3dObject.startLeftEye);
            }
            if (x3dObject.startRightEye) {
                (x3dObject.rightEye as THREE.Object3D).quaternion.copy(<THREE.Quaternion>x3dObject.startRightEye)
            }
        }
    },


    "smile": (xCommand: XCommand, x3dObject: X3DObject) => {
        const character = x3dObject.getThreeObject().children[0]
        console.log(character.children[1]);


        if (!x3dObject.hasOwnProperty("smileIndex") || x3dObject.smileIndex == 0) {
            x3dObject.smileIndex = 0
            x3dObject._on_frame = "smile"
        } else if (x3dObject.smileIndex > 0.7 || x3dObject.smileIndex <= 0) {
            x3dObject._on_frame = "wait 2000 neutral-face"
        }
        if (character.children[9]) {
            character.children[9]["morphTargetInfluences"][1] = ((<number>x3dObject.smileIndex) += 0.01);
        } else {
            (<number>x3dObject.smileIndex) += 0.02
            character.children[1]["morphTargetInfluences"][0] = x3dObject.smileIndex
            // character.children[1]["morphTargetInfluences"][41] = x3dObject.smileIndex

            if (character.children[1]["morphTargetInfluences"][27] < 0.3) {
                character.children[1]["morphTargetInfluences"][27] = x3dObject.smileIndex
                character.children[1]["morphTargetInfluences"][42] = x3dObject.smileIndex
                character.children[1]["morphTargetInfluences"][43] = x3dObject.smileIndex
            }

        }

        // console.log(x3dObject);

        // Testing commands
        // this.setPosition({ x: 1, y: Math.sin(Date.now() / 1000) * 1.2, z: 0 })
        // character.children[9].morphTargetInfluences[1] = Math.sin((Date.now() / 1000) * 12) / 1.5;

        // RPM url
        // ?blendShapes[Wolf3D_Head][mouthSmile]=0.2&blendShapes[Wolf3D_Head][browInnerUp]=0.2


        // https://api.readyplayer.me/v1/avatars/6185a4acfb622cf1cdc49348.glb?textureAtlas=512
        // ?morphTargets=ARKit
    },
    "sad": (xCommand: XCommand, x3dObject: X3DObject) => {
        
        const character = x3dObject.getThreeObject().children[0]
        console.log(character.children[1]);


        if (!x3dObject.hasOwnProperty("smileIndex") || x3dObject.smileIndex == 0) {
            x3dObject.smileIndex = 0
            x3dObject._on_frame = "sad"
        } else if (x3dObject.smileIndex > 0.7 || x3dObject.smileIndex <= 0) {
            x3dObject._on_frame = "wait 2000 neutral-face"
        }

        (<number>x3dObject.smileIndex) += 0.02
        character.children[1]["morphTargetInfluences"][0] = -x3dObject.smileIndex
        character.children[1]["morphTargetInfluences"][3] = x3dObject.smileIndex
        character.children[1]["morphTargetInfluences"][6] = x3dObject.smileIndex
        character.children[1]["morphTargetInfluences"][7] = x3dObject.smileIndex
        
        if (character.children[1]["morphTargetInfluences"][27] < 0.2) {
            character.children[1]["morphTargetInfluences"][27] = x3dObject.smileIndex
            character.children[1]["morphTargetInfluences"][42] = x3dObject.smileIndex
            character.children[1]["morphTargetInfluences"][43] = x3dObject.smileIndex
        }
    },
    "wink": (xCommand: XCommand, x3dObject: X3DObject) => {
        
        const character = x3dObject.getThreeObject().children[0]
        console.log(character.children[1]);


        if (!x3dObject.hasOwnProperty("smileIndex") || x3dObject.smileIndex == 0) {
            x3dObject.smileIndex = 0
            x3dObject._on_frame = "wink"
        } else if (x3dObject.smileIndex > 0.7 || x3dObject.smileIndex <= 0) {
            x3dObject._on_frame = "wait 2000 neutral-face"
        }

        (<number>x3dObject.smileIndex) += 0.04
        // Eye brow outer right
        // character.children[1].morphTargetInfluences[5] = x3dObject.smileIndex
        character.children[1]["morphTargetInfluences"][7] = x3dObject.smileIndex
        // Mouth right
        character.children[1]["morphTargetInfluences"][23] = x3dObject.smileIndex
        // Mouth dimple right
        character.children[1]["morphTargetInfluences"][31] = x3dObject.smileIndex
        // Eye blink right
        character.children[1]["morphTargetInfluences"][43] = (<number>x3dObject.smileIndex) + 0.2
        


        if (character.children[1]["morphTargetInfluences"][27] < 0.3) {
            // Jaw open
            character.children[1]["morphTargetInfluences"][27] = x3dObject.smileIndex
        }
    },

    "ahegao": (xCommand: XCommand, x3dObject: X3DObject) => {
        
        const character = x3dObject.getThreeObject().children[0]

        if (!x3dObject.hasOwnProperty("faceOrgasmIndex") || x3dObject.faceOrgasmIndex <= 0) {
            x3dObject.faceOrgasmIndex = 0
            x3dObject._on_frame = "ahegao"

            if (!x3dObject.rightEye && !x3dObject.leftEye) {
                (x3dObject.getThreeObject() as THREE.Object3D).traverse((child) => {
                    if (child.name == "LeftEye") {
                        x3dObject.leftEye = child
                        x3dObject.startLeftEye = child.quaternion.clone()
                    } else if (child.name == "RightEye") {
                        x3dObject.rightEye = child
                        x3dObject.startRightEye = child.quaternion.clone()
                    }
                })

            }

        } else if (x3dObject.faceOrgasmIndex > 1) {
            x3dObject._on_frame = "wait 2000 neutral-face"
        }


        if (character.children[9]) {
            character.children[9]["morphTargetInfluences"][1] = ( (<number>x3dObject["faceOrgasmIndex"]) += 0.01);
        } else {
            (<number>x3dObject["faceOrgasmIndex"]) += 0.02
            character.children[1]["morphTargetInfluences"][3] = x3dObject.faceOrgasmIndex;
            character.children[1]["morphTargetInfluences"][6] = x3dObject.faceOrgasmIndex;
            character.children[1]["morphTargetInfluences"][7] = x3dObject.faceOrgasmIndex;
            character.children[1]["morphTargetInfluences"][27] = x3dObject.faceOrgasmIndex;
            character.children[1]["morphTargetInfluences"][0] = x3dObject.faceOrgasmIndex;
            x3dObject.leftEye["quaternion"].w = .8
            x3dObject.leftEye["quaternion"].x = -0.05
            x3dObject.leftEye["quaternion"].y = -0.2
            x3dObject.rightEye["quaternion"].w = .8
            x3dObject.rightEye["quaternion"].x = 0.05
            x3dObject.rightEye["quaternion"].y = 0.2
        }
    },

    "wait": (xCommand: XCommand, x3dObject: X3DObject) => {
        const timeout = <number>xCommand._params["1"]
        const nanoExpression = <string>xCommand._params["2"]
        x3dObject._on_frame = ""
        setTimeout(() => {
            x3dObject._on_frame = nanoExpression
        }, timeout);
        // console.log(xCommand.params["1"]);



    },



}

export default _xnpc_nano_commands