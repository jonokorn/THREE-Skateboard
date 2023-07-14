import { DirectionalLight } from 'three'

export default function createDirectionalLight (x, y, z) {

    const directionalLight = new DirectionalLight("rgb(255,255,255)", 0.2)

    directionalLight.position.set(x, y, z)

    directionalLight.castShadow            = true
    directionalLight.shadow.mapSize.width  = 1024
    directionalLight.shadow.mapSize.height = 1024

    return directionalLight

}