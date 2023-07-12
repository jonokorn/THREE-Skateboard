import { MeshStandardMaterial, Mesh, BoxGeometry, Group, CylinderGeometry } from 'three'

export default function createTruck () {
    
    const material = new MeshStandardMaterial({
        color : "rgb(255,255,255)",
        roughness : 1,
        metalness : 1.0, 
        wireframe : true
    })


    // Base Plate
    const basePlateGeometry = new BoxGeometry(2,0.2,2)
    const basePlate         = new Mesh(basePlateGeometry, material)

    // Holder
    const holderGeometry = new BoxGeometry(1, 0.6, 1.5)
    const holder         = new Mesh(holderGeometry, material)
    holder.position.y = 0.3

    // Tube 
    const tubeGeometry   = new CylinderGeometry(0.5, 0.5, 12)
    const tube           = new Mesh(tubeGeometry, material)
    tube.position.y      = 0.6
    tube.rotation.x      = -0.5 * Math.PI
    tube.scale.set(0.4, 0.4, 0.4)

    // Truck Group
    const truck = new Group()
    truck.add(basePlate)
    truck.add(holder)
    truck.add(tube)

    truck.rotation.z = Math.PI
    truck.scale.set(0.5, 0.5, 0.5)
    return truck
}