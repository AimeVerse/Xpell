/**
 * spell3d object nano-spells
 *
 * nano-spells are spell(3d) objects commands that can be triggered by invoking the object.execute method
 */
export declare const xNanoCommands: {
    move: (ns_cmd: any) => void;
    position: (ns_cmd: any) => void;
    scale: (ns_cmd: any) => void;
    rotation: (ns_cmd: any) => void;
    spin: (ns_cmd: any) => void;
    "stop-spin": (ns_cmd: any) => void;
    log: (ns_cmd: any) => void;
    rotate: (ns_cmd: any) => void;
    "rotate-toward": (ns_cmd: any) => void;
    "play-sound": (ns_cmd: any) => void;
    play: (ns_cmd: any) => void;
    "follow-joystick": (ns_cmd: any) => void;
    "follow-keypoint": (ns_cmd: any) => void;
    "follow-path": (ns_cmd: any) => void;
    hover: (ns_cmd: any) => void;
};
export default xNanoCommands;
