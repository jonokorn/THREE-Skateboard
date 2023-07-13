import { MeshStandardMaterial, Mesh, TorusGeometry, TextureLoader } from 'three'

export default function createWheel () {

    const geometry = new TorusGeometry(5, 5, 16, 100)
    const normalMap = new TextureLoader().load("../../../assets/dirtNormalMap.jpg")
    const material = new MeshStandardMaterial({
        color : 0xFFFFFF,
        normalMap : normalMap
    })
    
    const wheel    = new Mesh(geometry, material)

    // --- 

    wheel.scale.set(0.06,0.06,0.06)

    // --- 
    return wheel
}