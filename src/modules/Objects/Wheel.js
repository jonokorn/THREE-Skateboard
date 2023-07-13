import { MeshStandardMaterial, Mesh, TorusGeometry } from 'three'

export default function createWheel () {

    const geometry = new TorusGeometry(5, 3, 16, 100)
    const material = new MeshStandardMaterial({color : "rgb(190,50,50)"})
    
    const wheel    = new Mesh(geometry, material)

    // --- 

    wheel.scale.set(0.08,0.08,0.08)

    // --- 
    return wheel
}