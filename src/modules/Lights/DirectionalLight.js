import { DirectionalLight } from 'three'

export default function createDirectionalLight () {

    const directionalLight = new DirectionalLight("rgb(255,255,255)", 0.5)

    directionalLight.position.set(10,10,10)
    directionalLight.castShadow = true

    return directionalLight

}