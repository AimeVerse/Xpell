/**
 * XUI Animations
 * @description XUI Animations are a set of animations that can be applied to XUI objects
 * The animations are css based and are applied to the style property of the XUI object
 * @author Kylie Koshet 
 * @since  02/07/2024
 * @see XUI Animation uses Animate.css library (https://animate.style) for animations
 * 
 */


import 'animate.css';

export class _AnimateCSS {

    _animation_base_class = "animate__animated"
    
    _animations = {
        BOUNCE: 'animate__bounce',
        FLASH: 'animate__flash',
        PULSE: 'animate__pulse',
        RUBBER_BAND: 'animate__rubberBand',
        SHAKE_X: 'animate__shakeX',
        SHAKE_Y: 'animate__shakeY',
        HEAD_SHAKE: 'animate__headShake',
        SWING: 'animate__swing',
        TADA: 'animate__tada',
        WOBBLE: 'animate__wobble',
        JELLO: 'animate__jello',
        HEART_BEAT: 'animate__heartBeat',
        BACK_IN_DOWN: 'animate__backInDown',
        BACK_IN_LEFT: 'animate__backInLeft',
        BACK_IN_RIGHT: 'animate__backInRight',
        BACK_IN_UP: 'animate__backInUp',
        BACK_OUT_DOWN: 'animate__backOutDown',
        BACK_OUT_LEFT: 'animate__backOutLeft',
        BACK_OUT_RIGHT: 'animate__backOutRight',
        BACK_OUT_UP: 'animate__backOutUp',
        BOUNCE_IN: 'animate__bounceIn',
        BOUNCE_IN_DOWN: 'animate__bounceInDown',
        BOUNCE_IN_LEFT: 'animate__bounceInLeft',
        BOUNCE_IN_RIGHT: 'animate__bounceInRight',
        BOUNCE_IN_UP: 'animate__bounceInUp',
        BOUNCE_OUT: 'animate__bounceOut',
        BOUNCE_OUT_DOWN: 'animate__bounceOutDown',
        BOUNCE_OUT_LEFT: 'animate__bounceOutLeft',
        BOUNCE_OUT_RIGHT: 'animate__bounceOutRight',
        BOUNCE_OUT_UP: 'animate__bounceOutUp',
        FADE_IN: 'animate__fadeIn',
        FADE_IN_DOWN: 'animate__fadeInDown',
        FADE_IN_DOWN_BIG: 'animate__fadeInDownBig',
        FADE_IN_LEFT: 'animate__fadeInLeft',
        FADE_IN_LEFT_BIG: 'animate__fadeInLeftBig',
        FADE_IN_RIGHT: 'animate__fadeInRight',
        FADE_IN_RIGHT_BIG: 'animate__fadeInRightBig',
        FADE_IN_UP: 'animate__fadeInUp',
        FADE_IN_UP_BIG: 'animate__fadeInUpBig',
        FADE_IN_TOP_LEFT: 'animate__fadeInTopLeft',
        FADE_IN_TOP_RIGHT: 'animate__fadeInTopRight',
        FADE_IN_BOTTOM_LEFT: 'animate__fadeInBottomLeft',
        FADE_IN_BOTTOM_RIGHT: 'animate__fadeInBottomRight',
        FADE_OUT: 'animate__fadeOut',
        FADE_OUT_DOWN: 'animate__fadeOutDown',
        FADE_OUT_DOWN_BIG: 'animate__fadeOutDownBig',
        FADE_OUT_LEFT: 'animate__fadeOutLeft',
        FADE_OUT_LEFT_BIG: 'animate__fadeOutLeftBig',
        FADE_OUT_RIGHT: 'animate__fadeOutRight',
        FADE_OUT_RIGHT_BIG: 'animate__fadeOutRightBig',
        FADE_OUT_UP: 'animate__fadeOutUp',
        FADE_OUT_UP_BIG: 'animate__fadeOutUpBig',
        FADE_OUT_TOP_LEFT: 'animate__fadeOutTopLeft',
        FADE_OUT_TOP_RIGHT: 'animate__fadeOutTopRight',
        FADE_OUT_BOTTOM_RIGHT: 'animate__fadeOutBottomRight',
        FADE_OUT_BOTTOM_LEFT: 'animate__fadeOutBottomLeft',
        FLIP: 'animate__flip',
        FLIP_IN_X: 'animate__flipInX',
        FLIP_IN_Y: 'animate__flipInY',
        FLIP_OUT_X: 'animate__flipOutX',
        FLIP_OUT_Y: 'animate__flipOutY',
        LIGHT_SPEED_IN_RIGHT: 'animate__lightSpeedInRight',
        LIGHT_SPEED_IN_LEFT: 'animate__lightSpeedInLeft',
        LIGHT_SPEED_OUT_RIGHT: 'animate__lightSpeedOutRight',
        LIGHT_SPEED_OUT_LEFT: 'animate__lightSpeedOutLeft',
        ROTATE_IN: 'animate__rotateIn',
        ROTATE_IN_DOWN_LEFT: 'animate__rotateInDownLeft',
        ROTATE_IN_DOWN_RIGHT: 'animate__rotateInDownRight',
        ROTATE_IN_UP_LEFT: 'animate__rotateInUpLeft',
        ROTATE_IN_UP_RIGHT: 'animate__rotateInUpRight',
        ROTATE_OUT: 'animate__rotateOut',
        ROTATE_OUT_DOWN_LEFT: 'animate__rotateOutDownLeft',
        ROTATE_OUT_DOWN_RIGHT: 'animate__rotateOutDownRight',
        ROTATE_OUT_UP_LEFT: 'animate__rotateOutUpLeft',
        ROTATE_OUT_UP_RIGHT: 'animate__rotateOutUpRight',
        HINGE: 'animate__hinge',
        JACK_IN_THE_BOX: 'animate__jackInTheBox',
        ROLL_IN: 'animate__rollIn',
        ROLL_OUT: 'animate__rollOut',
        ZOOM_IN: 'animate__zoomIn',
        ZOOM_IN_DOWN: 'animate__zoomInDown',
        ZOOM_IN_LEFT: 'animate__zoomInLeft',
        ZOOM_IN_RIGHT: 'animate__zoomInRight',
        ZOOM_IN_UP: 'animate__zoomInUp',
        ZOOM_OUT: 'animate__zoomOut',
        ZOOM_OUT_DOWN: 'animate__zoomOutDown',
        ZOOM_OUT_LEFT: 'animate__zoomOutLeft',
        ZOOM_OUT_RIGHT: 'animate__zoomOutRight',
        ZOOM_OUT_UP: 'animate__zoomOutUp',
        SLIDE_IN_DOWN: 'animate__slideInDown',
        SLIDE_IN_LEFT: 'animate__slideInLeft',
        SLIDE_IN_RIGHT: 'animate__slideInRight',
        SLIDE_IN_UP: 'animate__slideInUp',
        SLIDE_OUT_DOWN: 'animate__slideOutDown',
        SLIDE_OUT_LEFT: 'animate__slideOutLeft',
        SLIDE_OUT_RIGHT: 'animate__slideOutRight',
        SLIDE_OUT_UP: 'animate__slideOutUp'
    };
}

export const  XUIAnimate = new _AnimateCSS()
export default XUIAnimate