

/**
 * X3D Nano Commands
 * 
 * nano-commands are small xcommands that can be triggered by invoking the object.execute method
 */




 import { XNanoCommandPack,XCommand,_xem,_xlog,_xu,XData,XObject } from "xpell-core"


import * as THREE from 'three'

import X3DObject from "./X3DObject"




/**
 * change axis value
 * @param {axis root/parent} root -> this._position / this._rotation / this._scale
 * @param {JSON} xCommand - spell command 
 * 
 * spell command parameters: 
 * - axis -> the axis to change (x/y/z)
 * - dir -> change direction (up/down)
 * - step -> step to move
 */
const change_axis = (root:any, xCommand:XCommand) => {
    const axis = xCommand.getParam(0, "axis","x") 
    const direction = (<string>xCommand.getParam(1, "dir","up")).toLowerCase()
    const step = parseFloat(<string>xCommand.getParam(2, "step",0.01))
    if (direction == "up") {
        root[<string>axis] += step
    } else if (direction == "down") {
        root[<string>axis] -= step
    }
}



const set_axis = (root:any, axis:any, param:any) => {

    if (param) {
        if (param.startsWith("++")) {
            param = param.substring(1)
            root[axis] += parseFloat(param)
        } else if (param.startsWith("--")) {

            param = param.substring(1)
            root[axis] -= parseFloat(param) * (-1)
        } else {
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
    // },
    "rotation":  (xCommand:XCommand,x3dObject?:XObject) => {
        
        //rotation x:0.01 y:++0.01 z:--0.01
        const x = xCommand.getParam(0, "x","0")

        if (x) { set_axis(x3dObject?._rotation, "x", x) }

        const y = xCommand.getParam(1, "y",0)
        if (y) { set_axis(x3dObject?._rotation, "y", y) }

        const z = xCommand.getParam(2, "z",0)
        set_axis(x3dObject?._rotation, "z", z)
    },
    "spin": (xCommand:XCommand,x3dObject?:XObject) => {

        const x = xCommand.getParam(0, "x",0)
        const x_str = (x) ? "x:++" + x : ""

        const y = xCommand.getParam(0, "y",0)
        const y_str = (y) ? "y:++" + y : ""

        const z = xCommand.getParam(0, "z",0)
        const z_str = (z) ? "z:++" + z : ""
        const sstr = `rotation ${x_str} ${y_str} ${z_str}`

        if(x3dObject) x3dObject._on_frame = sstr
    },
    "stop-spin": (xCommand:XCommand,x3dObject?:XObject)  => {
        if(x3dObject) x3dObject.onframe = ""
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
    "follow-joystick": (ns_cmd,x3dObject?:XObject) => {
        const x3do:X3DObject = <X3DObject>x3dObject
        const jm = XData.objects["joy-move"]
        if (jm && x3do) {


            let power = 0.2
            let lvector = (x3do._three_obj) ? x3do._three_obj.position : new THREE.Vector3(0,0,0)
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
            x3do?.setPositionFromVector3(<THREE.Vector3>lvector)


            x3do?._three_obj?.updateMatrixWorld()
            XData.objects["control-target"] =  (change)  ? lvector : undefined

            XData.objects["joystick-vector"] = lvector
            XData.variables["joystick-position"] = `x:${lvector.x.toFixed(2)} y:${lvector.y.toFixed(2)} z:${lvector.z.toFixed(2)}`
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


    //     if (ns_cmd._params) {
    //         const data = XData?.objects[ns_cmd._params.detector]
    //         if (data) {
    //             const kp = data[ns_cmd._params.index]?.landmarks[ns_cmd._params.keypoint]
    //             ns_cmd.s3d_object._disable_frame_3d_state = false
    //             ns_cmd.s3d_object._position.x = kp[0]
    //             ns_cmd.s3d_object._position.y = kp[1]
    //             ns_cmd.s3d_object._position.z = kp[2]
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

    //         ns_cmd.s3d_object._three_obj.quaternion.setFromAxisAngle(ns_cmd.s3d_object._follow_axis_path, radians);
    //         ns_cmd.s3d_object._fraction += 0.001;
    //         if (ns_cmd.s3d_object._fraction > 1) { ns_cmd.s3d_object._fraction = 0 }

    //         ns_cmd.s3d_object._three_obj.updateMatrixWorld()
    //         XData.objects["cam-path-pos"] = newPosition
    //         XData.objects["cam-path-rotation"] = ns_cmd.s3d_object._three_obj.quaternion
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
    //     ns_cmd._params["dir"] = ns_cmd.s3d_object._hover_move_direction
    //     ns_cmd._params["axis"] = axis
    //     ns_cmd._params["step"] = step
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