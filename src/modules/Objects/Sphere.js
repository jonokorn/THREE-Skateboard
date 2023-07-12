import { SphereGeometry, MeshStandardMaterial, Mesh } from 'three'

export default function createSphere () {

    const geometry = new SphereGeometry(1, 50, 50)
    const material = new MeshStandardMaterial({color : "rgb(255,255,255)"})
    const sphere   = new Mesh(geometry, material)

    sphere.position.set(0,1,0)
    sphere.castShadow = true

    return sphere
}