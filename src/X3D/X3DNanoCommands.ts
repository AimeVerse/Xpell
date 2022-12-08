

/**
 * spell3d object nano-spells
 * 
 * nano-spells are spell(3d) objects commands that can be triggered by invoking the object.execute method
 */




 import { XNanoCommandPack } from "../XNanoCommands"

 import XCommand from "../XCommand"
 import { XEventManager as _xem } from "../XEventManager"
 import { XLogger as _xlog } from "../XLogger"

import * as THREE from 'three'

import XData from "../XData";
import * as _XU from "../XUtils"
import X3DObject from "./X3DObject"



const get_param = (pos, name, cmd) => {
    return (cmd.params[name]) ? cmd.params[name] : cmd.params[pos]
}


/**
 * change axis value
 * @param {axis root/parent} root -> this._position / this._rotation / this._scale
 * @param {JSON} scmd - spell command 
 * 
 * spell command parameters: 
 * - axis -> the axis to change (x/y/z)
 * - dir -> change direction (up/down)
 * - step -> step to move
 */
const change_axis = (root, scmd) => {
    const axis = get_param(0, "axis", scmd) // (scmd.params.axis) ? scmd.params.axis : scmd.params[0]
    const direction = get_param(1, "dir", scmd).toLowerCase()
    const step = parseFloat(get_param(2, "step", scmd))
    if (direction == "up") {
        root[axis] += step
    } else if (direction == "down") {
        root[axis] -= step
    }
}



const set_axis = (root, axis, param) => {

    if (param) {
        if (param.startsWith("++")) {
            param = param.substring(1)
            // console.log("changing ++",param)
            root[axis] += parseFloat(param)
        } else if (param.startsWith("--")) {

            param = param.substring(1)
            // console.log("changing --",param)
            root[axis] -= parseFloat(param) * (-1)
        } else {
            // console.log("no changing")
            root[axis] = parseFloat(param)
        }

    }

}





export const _x3dobject_nano_commands:XNanoCommandPack = {
    // "move": (ns_cmd) => {
    //     //move axis direction 1 
    //     // axis x,y,z
    //     // direction up (+) / down (-)
    //     // step 1-100
    //     change_axis(ns_cmd.s3d_object._position, ns_cmd)
    // },
    // "position": (ns_cmd) => {
    //     //position x:0.01 y:++0.01 z:--0.01
    //     set_axis(ns_cmd.s3d_object._position, "x", get_param(0, "x", ns_cmd))
    //     set_axis(ns_cmd.s3d_object._position, "y", get_param(1, "y", ns_cmd))
    //     set_axis(ns_cmd.s3d_object._position, "z", get_param(2, "z", ns_cmd))
    // },
    // "scale": (ns_cmd) => {
    //     //scale x:0.01 y:++0.01 z:--0.01
    //     set_axis(ns_cmd.s3d_object._scale, "x", get_param(0, "x", ns_cmd))
    //     set_axis(ns_cmd.s3d_object._scale, "y", get_param(1, "y", ns_cmd))
    //     set_axis(ns_cmd.s3d_object._scale, "z", get_param(2, "z", ns_cmd))
    //     console.log("scale");
    // },
    "rotation":  (xCommand:XCommand,x3dObject:X3DObject) => {
        
        //rotation x:0.01 y:++0.01 z:--0.01
        const x = get_param(0, "x", xCommand)

        if (x) { set_axis(x3dObject._rotation, "x", x) }

        const y = get_param(1, "y", xCommand)
        if (y) { set_axis(x3dObject._rotation, "y", y) }

        const z = get_param(2, "z", xCommand)
        set_axis(x3dObject._rotation, "z", z)
    },
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
    "stop-spin": (xCommand:XCommand,x3dObject:X3DObject)  => {
        x3dObject.onframe = ""
    },
    // "rotate": (ns_cmd) => {
    //     // transfer positioning control to THREE from Spell
    //     ns_cmd.s3d_object._disable_frame_3d_state = true;
    //     ns_cmd.s3d_object._rotation_dir = Math.PI / 2
    //     ns_cmd.s3d_object.onframe = `rotate-toward dir:${ns_cmd.s3d_object._rotation_dir}`
    //     ns_cmd.s3d_object._three_obj.up = new THREE.Vector3(0, 1, 0);
    //     ns_cmd.s3d_object._rotation_angle = new THREE.Vector3(1, 0, 0)
    //     ns_cmd.s3d_object._quaternion = new THREE.Quaternion(1, 0, 0);
    // },
    // "rotate-toward": (ns_cmd) => {
    //     //ns_cmd.s3d_object._rotation.z
    //     //console.log(ns_cmd.s3d_object._three_obj.rotation.x - parseFloat(ns_cmd.s3d_object._rotatation_dir))
    //     if (ns_cmd.s3d_object._three_obj.rotation.x == ns_cmd.s3d_object._rotatation_dir) {
    //         ns_cmd.s3d_object._disable_frame_3d_state = false
    //         ns_cmd.s3d_object._quaternion = null
    //         ns_cmd.s3d_object._rotation.x = ns_cmd.s3d_object._three_obj.rotation._x
    //         ns_cmd.s3d_object._rotation.y = ns_cmd.s3d_object._three_obj.rotation._y
    //         ns_cmd.s3d_object._rotation.z = ns_cmd.s3d_object._three_obj.rotation._z
    //         ns_cmd.s3d_object.onframe = ""
    //     } else {
    //         ns_cmd.s3d_object._quaternion.setFromAxisAngle(ns_cmd.s3d_object._rotation_angle, ns_cmd.s3d_object._rotation_dir)
    //         ns_cmd.s3d_object._three_obj.quaternion.rotateTowards(ns_cmd.s3d_object._quaternion, 0.1)
    //     }


    // },
    // "play-sound": (ns_cmd) => {
    //     // console.log(ns_cmd.s3d_object._positional_audio)
    //     // ns_cmd.s3d_object._positional_audio.pause()

    // },
    // "play": (ns_cmd) => {

    //     if (ns_cmd.s3d_object._animation_mixer) {
    //         const clip = get_param(1, "clip", ns_cmd)

    //         if (clip) {
    //             const anim = ns_cmd.s3d_object._animation_clips[clip]
    //             if (anim) {
    //                 if (ns_cmd.s3d_object._current_action) {
    //                     ns_cmd.s3d_object._animation_clips[ns_cmd.s3d_object._current_action].fadeOut(ns_cmd.s3d_object._fade_duration)
    //                     anim.reset().fadeIn(ns_cmd.s3d_object._fade_duration).play();
    //                 } else {
    //                     anim.play()
    //                 }
    //                 //ns_cmd.s3d_object._disable_frame_3d_state = true
    //                 ns_cmd.s3d_object._current_action = clip
    //             }
    //         }
    //     }
    // },
    "follow-joystick": (ns_cmd,x3dObject:X3DObject) => {
        const jm = XData.objects["joy-move"]
        if (jm) {


            let power = 0.2
            let lvector = x3dObject._three_obj.position
            let tempVector = new THREE.Vector3();
            const upVector = new THREE.Vector3(0, 1, 0);
            let change = false
            //   // move the player
            const angle = XData.variables["control-azimuth"]
            if (jm.forward > 0) {
                tempVector.set(0, 0, -jm.forward * power).applyAxisAngle(upVector, <number>angle)
                lvector.addScaledVector(tempVector, 1)
                change = true
            }

            if (jm.backward > 0) {
                tempVector.set(0, 0, jm.backward * power).applyAxisAngle(upVector, <number>angle)
                lvector.addScaledVector(tempVector, 1)
                change = true
            }

            if (jm.left > 0) {
                tempVector.set(-jm.left * power, 0, 0).applyAxisAngle(upVector, <number>angle)
                lvector.addScaledVector(tempVector, 1)
                change = true
            }

            if (jm.right > 0) {
                tempVector.set(jm.right * power, 0, 0).applyAxisAngle(upVector, <number>angle)
                lvector.addScaledVector(tempVector, 1)
                change = true
            }

            if (jm.up > 0) {
                tempVector.set(0, jm.up * power, 0).applyAxisAngle(upVector, <number>angle)
                lvector.addScaledVector(tempVector, 1)
                change = true
            }

            if (jm.down > 0) {
                tempVector.set(0, -jm.down * power, 0).applyAxisAngle(upVector, <number>angle)
                lvector.addScaledVector(tempVector, 1)
                change = true
            }

            //let tv = new THREE.Vector3(ns_cmd.s3d_object._position.x, ns_cmd.s3d_object._position.y, ns_cmd.s3d_object._position.z)
            //tv.addScaledVector(lvector, 1)
            //
            //console.log(ns_cmd.s3d_object)
            x3dObject.setPositionFromVector3(lvector)


            x3dObject._three_obj.updateMatrixWorld()
            //console.log("ct")
            XData.objects["control-target"] =  (change)  ? lvector : undefined

            XData.objects["joystick-vector"] = lvector
            XData.variables["joystick-position"] = `x:${lvector.x.toFixed(2)} y:${lvector.y.toFixed(2)} z:${lvector.z.toFixed(2)}`
            //console.log(SpellData.variables["joystick-position"])
            //   //controls.target.set( mesh.position.x, mesh.position.y, mesh.position.z );
            //   // reposition camera
            //   camera.position.sub(controls.target)
            //   controls.target.copy(mesh.position)
            //   camera.position.add(mesh.position)


            // };
        }
    },
    //follow-keypoint detector:detector-name index:detected-object-index keypoint:keypoint-number
    // "follow-keypoint": (ns_cmd) => {


    //     if (ns_cmd.params) {
    //         const data = XData?.objects[ns_cmd.params.detector]
    //         if (data) {
    //             const kp = data[ns_cmd.params.index]?.landmarks[ns_cmd.params.keypoint]
    //             ns_cmd.s3d_object._disable_frame_3d_state = false
    //             ns_cmd.s3d_object._position.x = kp[0]
    //             ns_cmd.s3d_object._position.y = kp[1]
    //             ns_cmd.s3d_object._position.z = kp[2]
    //             console.log(ns_cmd.s3d_object._position)
    //         }
    //     }
    // },
    // "follow-path": (ns_cmd) => {
    //     const cp = XData.objects["cam-path"]
    //     if (cp) {

    //         const tangent = cp.getTangent(ns_cmd.s3d_object._fraction);

    //         if (!ns_cmd.s3d_object._follow_axis_path) {
    //             ns_cmd.s3d_object._up = new THREE.Vector3(0, 1, 0);
    //             ns_cmd.s3d_object._follow_axis_path = new THREE.Vector3()
    //         }

    //         const newPosition = cp.getPoint(ns_cmd.s3d_object._fraction);
    //         ns_cmd.s3d_object._follow_axis_path.crossVectors(ns_cmd.s3d_object._up, tangent).normalize();
    //         const radians = Math.acos(ns_cmd.s3d_object._up.dot(tangent));
    //         // console.log("radians " + radians);

    //         ns_cmd.s3d_object._three_obj.quaternion.setFromAxisAngle(ns_cmd.s3d_object._follow_axis_path, radians);
    //         // console.log(ns_cmd.s3d_object._follow_axis_path,tangent);
    //         ns_cmd.s3d_object._fraction += 0.001;
    //         if (ns_cmd.s3d_object._fraction > 1) { ns_cmd.s3d_object._fraction = 0 }

    //         ns_cmd.s3d_object._three_obj.updateMatrixWorld()
    //         //console.log("ct")
    //         XData.objects["cam-path-pos"] = newPosition
    //         XData.objects["cam-path-rotation"] = ns_cmd.s3d_object._three_obj.quaternion
    //         //console.log(SpellData.variables["joystick-position"])
    //         //   //controls.target.set( mesh.position.x, mesh.position.y, mesh.position.z );
    //         //   // reposition camera
    //         //   camera.position.sub(controls.target)
    //         //   controls.target.copy(mesh.position)
    //         //   camera.position.add(mesh.position)


    //         // };
    //     }
    // },
    // //hover - hover up 0.1 and down 0.1 (y-axis) for 60 frames (1 sec)
    // //  "onframe":"hover axis:z step:0.01 radius:2"
    // "hover": (ns_cmd) => {
    //     const axis = get_param(0, "axis", ns_cmd)
    //     const step = get_param(1, "step", ns_cmd)
    //     const radius = get_param(2, "radius", ns_cmd)
    //     ns_cmd.params["dir"] = ns_cmd.s3d_object._hover_move_direction
    //     ns_cmd.params["axis"] = axis
    //     ns_cmd.params["step"] = step
    //     if (!ns_cmd.s3d_object._hovering) {
    //         ns_cmd.s3d_object._disable_frame_3d_state = false;
    //         ns_cmd.s3d_object._hovering = true
    //         ns_cmd.s3d_object._hover_start_frame = ns_cmd.s3d_object._frame_number
    //         ns_cmd.s3d_object._hover_move_direction = "up" // 1 = up , 0 = down
    //         ns_cmd.s3d_object._hover_axis_start_value = ns_cmd.s3d_object._position[axis]

    //         ns_cmd.s3d_object.onframe = `hover axis:${axis} dir:${ns_cmd.s3d_object._hover_move_direction} step:${step} radius:${radius}`
    //     }
    //     else {
    //         change_axis(ns_cmd.s3d_object._position, ns_cmd)
    //         const diff = (ns_cmd.s3d_object._position[axis] - ns_cmd.s3d_object._hover_axis_start_value)
    //         if (Math.abs(diff) > radius) {
    //             ns_cmd.s3d_object._hover_move_direction = (ns_cmd.s3d_object._hover_move_direction == "up") ? "down" : "up"
    //             ns_cmd.s3d_object._hover_axis_start_value = ns_cmd.s3d_object._position[axis]
    //             ns_cmd.s3d_object.onframe = `hover axis:${axis} dir:${ns_cmd.s3d_object._hover_move_direction} step:${step} radius:${radius}`
    //         }
    //     }


    // }

}

export default _x3dobject_nano_commands