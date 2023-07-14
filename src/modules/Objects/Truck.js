import { MeshStandardMaterial, Mesh, BoxGeometry, Group, CylinderGeometry, TorusGeometry } from 'three'

export default function createTruck () {

    let components = []

    // --- 
    
    const material = new MeshStandardMaterial({
        color     : 0xffffff,
        emissive  : 0x000000,
        roughness : 0.0,
        metalness : 1.0, 
        wireframe : false
    })


    // Base Plate
    const basePlateGeometry = new BoxGeometry(2 ,0.2, 2)
    const basePlate         = new Mesh(basePlateGeometry, material)
    components.push(basePlate)

    // Holder
    const holderGeometry = new BoxGeometry(1, 0.85, 2)
    const holder         = new Mesh(holderGeometry, material)
    holder.position.y    = 0.3
    components.push(holder)

    // Tube 
    const tubeGeometry   = new CylinderGeometry(0.4, 0.4, 12)
    const tube           = new Mesh(tubeGeometry, material)
    tube.position.y      = 0.75
    tube.rotation.x      = -0.5 * Math.PI
    tube.scale.set(0.4, 0.4, 0.4)
    components.push(tube)

    // Bolts
    const boltGeometry   = new TorusGeometry(10, 5.7, 6, 5)
    const bolt1          = new Mesh(boltGeometry, material)
    const bolt2          = new Mesh(boltGeometry, material)
    tube.add(bolt1)
    tube.add(bolt2)
    bolt1.scale.set(0.05, 0.05, 0.05)
    bolt2.scale.set(0.05, 0.05, 0.05)
    bolt1.rotation.x = -0.5 * Math.PI
    bolt2.rotation.x = -0.5 * Math.PI
    bolt1.position.y = 6
    bolt2.position.y = -6

    // Screws
    const screwGeometry = new CylinderGeometry(6, 6, 5, 16)
    const screw1        = new Mesh(screwGeometry, material)
    screw1.scale.set(0.02, 0.02, 0.02)
    screw1.position.y   = -0.20
    screw1.position.z   = 0.75
    screw1.position.x   = 0.75

    const screw2        = screw1.clone()
    screw2.position.z   = 0.75
    screw2.position.x   = -0.75

    const screw3        = screw1.clone()
    screw3.position.z   = -0.75
    screw3.position.x   = -0.75

    const screw4        = screw1.clone()
    screw4.position.z   = -0.75
    screw4.position.x   = 0.75
    components.push(screw1)
    components.push(screw2)
    components.push(screw3)
    components.push(screw4)


    // Truck Group
    const truck = new Group()
    
    components.forEach(element => {
        element.castShadow    = true
        element.receiveShadow = true
        truck.add(element)
    })

    // --- 

    truck.rotation.x = -0.5 * Math.PI
    truck.rotation.y = -0.5 * Math.PI          
    truck.scale.set(0.4, 0.4, 0.4)

    // ---

    return truck
}