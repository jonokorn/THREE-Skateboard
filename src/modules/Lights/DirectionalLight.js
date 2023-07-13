import { DirectionalLight } from 'three'

export default function createDirectionalLight () {

    const directionalLight = new DirectionalLight("rgb(255,255,255)", 0.1)

    directionalLight.position.set(10,10,10)
    directionalLight.castShadow = true

    directionalLight.shadow.mapSize.width = 1024
    directionalLight.shadow.mapSize.height = 1024

    return directionalLight

}