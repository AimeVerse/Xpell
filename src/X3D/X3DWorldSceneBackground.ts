
import * as THREE from 'three'
import { X3D } from './X3D'
import { RGBELoader } from 'three/examples/jsm/loaders/RGBELoader.js'
import X3DWorld from './X3DWorld'



export enum X3DSceneBackgroundTypes {
    _solid_color = "solid-color",
    _gradient = "gradient",
    _image = "image",
    _video = "video",
    _cube_texture = "cube-texture",
    _sphere_texture = "sphere-texture",
    _hdri = "hdri"
}


export type X3DSceneBackgroundHandler = {
    (scene: THREE.Scene, params: X3DSceneBackgroundParams): void
}

// export type X3DSceneBackgroundTypes = "solid-color" | "gradient" | "image" | "video" | "cube-texture" | "sphere-texture" | "hdri"



export type X3DSceneBackgroundParams = {
    [k: string]: any
    _color?: string
    _color1?: string
    _color2?: string
    _direction_deg?: number
    _url?: string
    _px?: string
    _nx?: string
    _py?: string
    _ny?: string
    _pz?: string
    _nz?: string
    _path?: string
}

/**
     * Background type
     * @description solid-color | gradient | image | video | cube-texture | sphere-texture
     * params for:
     * solid-color: color:string
     * gradient: color1, color2, direction
     * image: url
     * video: url
     * cube-texture: [url1, url2, url3, url4, url5, url6]
     * sphere-texture: url
     */
export type X3DSceneBackground = {

    _type: X3DSceneBackgroundTypes
    _params: {
        [k: string]: any
    }
}



export const createSceneBackgroundBasicHandlers = (world: X3DWorld) => {
    const types = X3DSceneBackgroundTypes
    world.addBackgroundHandler(types._solid_color, (scene, params) => {
        const color = (params._color) ? params._color : "black"
        if (color == "clear" || color == "transparent") {
            scene.background = null
        }
        else {
            scene.background = new THREE.Color(color)
        }
    })

    world.addBackgroundHandler(types._gradient, (scene, params) => {
        const color1Param = (params._color1) ? params._color1 : "black"
        const color2Param = (params._color2) ? params._color2 : "white"
        const direction = (params._direction_deg) ? params._direction_deg : 45
        // Define the gradient colors
        const color1 = new THREE.Color(color1Param); // Red
        const color2 = new THREE.Color(color2Param); // Blue

        // Create a canvas with the gradient
        const canvas = document.createElement('canvas');
        const context: any = canvas.getContext('2d');

        //create gradient direction
        const directionRad =  direction * Math.PI / 180
        const x0 = 0 //+ window.innerWidth * directionRad 
        const y0 = 0 //+ window.innerHeight * directionRad
        const x1 = Math.cos(directionRad) * window.innerWidth
        const y1 = Math.sin(directionRad) * window.innerHeight

        const gradient = context.createLinearGradient(x0, y0, x1, y1);

        // const gradient = context.createLinearGradient(0, 0, window.innerWidth, window.innerHeight);
        gradient.addColorStop(0, color1.getStyle());
        gradient.addColorStop(1, color2.getStyle());
        context.fillStyle = gradient;
        context.fillRect(0, 0, window.innerWidth, window.innerHeight);

        // Create a texture from the canvas
        const texture = new THREE.CanvasTexture(canvas);

        // Set the texture as the background
        scene.background = texture;
    })

    world.addBackgroundHandler(types._image, (scene, params) => {
        if (params._url) {
            const texture = new THREE.TextureLoader().load(params._url);
            scene.background = texture;
        } else {
            console.warn("X3DSceneBackground: no url provided for image background")
        }
    })

    world.addBackgroundHandler(types._video, async (scene, params) => {
        //load video from cdn with cors enabled
        if (params._url) {
            const video = document.createElement('video');
            video.src = params._url;
            video.crossOrigin = "anonymous"
            video.autoplay = true;
            video.loop = true;
            video.muted = true;
            video.play();
            const texture = new THREE.VideoTexture(video);
            scene.background = texture
        } else {
            console.warn("X3DSceneBackground: no url provided for video background")
        }
    })

    world.addBackgroundHandler(types._cube_texture, async (scene, params) => {
        const pxUrl = (params._px) ? params._px : ""
        const nxUrl = (params._nx) ? params._nx : ""
        const pyUrl = (params._py) ? params._py : ""
        const nyUrl = (params._ny) ? params._ny : ""
        const pzUrl = (params._pz) ? params._pz : ""
        const nzUrl = (params._nz) ? params._nz : ""
        const urls = [pxUrl, nxUrl, pyUrl, nyUrl, pzUrl, nzUrl];
        const reflectionCube = new THREE.CubeTextureLoader()
        if (params._path) {
            const endSlash = (params._path.endsWith("/")) ? "" : "/"
            reflectionCube.setPath(params._path + endSlash)
        }
        scene.background = reflectionCube.load(urls)
    })

    world.addBackgroundHandler(types._sphere_texture, async (scene, params) => {
        if (params._url) {
            const texture = new THREE.TextureLoader().load(params._url);
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.background = texture;
        } else {
            console.warn("X3DSceneBackground: no url provided for sphere texture background")
        }
    })

    world.addBackgroundHandler(types._hdri, async (scene, params) => {
        if (params._url) {    
            const texture = await new RGBELoader().loadAsync(params._url);
            texture.mapping = THREE.EquirectangularReflectionMapping;
            scene.background = texture;
            scene.environment = texture;
        } else {
            console.warn("X3DSceneBackground: no url provided for hdri background")
        }

    })
}