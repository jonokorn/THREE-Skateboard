import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three'

export default function createCube () {

    const geometry = new BoxGeometry(1,1,1)
    const material = new MeshStandardMaterial({color : "rgb(45,60,180)"})
    const box      = new Mesh(geometry, material)

    box.position.set(2,2,2)
    box.castShadow = true

    return box
}