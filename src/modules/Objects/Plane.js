import { PlaneGeometry, MeshStandardMaterial, Mesh } from 'three'

export default function createPlane () {

    const geometry = new PlaneGeometry(10,10)
    const material = new MeshStandardMaterial({color : 0xFFFFFF})
    const plane    = new Mesh(geometry, material)

    plane.rotation.x = -0.5 * Math.PI

    return plane
}