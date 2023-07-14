import { PlaneGeometry, MeshStandardMaterial, Mesh, TextureLoader } from 'three'

export default function createPlane () {

    const textureLoader = new TextureLoader()
    const geometry      = new PlaneGeometry(20,20)

    const texture       = textureLoader.load("../../../assets/concreteTexture.png")
    const normalMap     = textureLoader.load("../../../assets/concreteNormalMap.jpeg")

    const material      = new MeshStandardMaterial({
        color     : "rgb(190,190,190)",
        normalMap : normalMap
    })
    const plane         = new Mesh(geometry, material)

    // --- 

    plane.rotation.x    = -0.5 * Math.PI
    plane.receiveShadow = true
    plane.castShadow    = true
    plane.visible       = false

    // --- 
    
    return plane
}