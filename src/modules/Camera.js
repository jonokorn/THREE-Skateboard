import { PerspectiveCamera } from 'three'

export default function createCamera () {
    
    let fov         = 75
    let aspectRatio = window.innerWidth / window.innerHeight
    let near        = 0.1
    let far         = 1000

    const camera = new PerspectiveCamera(fov, aspectRatio, near, far)

    camera.lookAt(0,0,0)

    return camera
}