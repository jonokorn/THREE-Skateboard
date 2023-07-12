import { BoxGeometry, MeshStandardMaterial, Mesh, CylinderGeometry, Group } from 'three'

export default function createDeck () {

    const deckWidth  = 2
    const deckHeight = 6
    const deckDepth  = 0.08


    // GripTape Material 
    const gripTape = new MeshStandardMaterial({
        color     : "rgb(100,100,100)",
        roughness : 0.9,
        metalness : 0.1,
        wireframe : true
    })

    // Center Part
    const centerGeometry = new BoxGeometry(deckWidth, deckHeight, deckDepth, 1, 1, 1)
    const centerMaterial = new MeshStandardMaterial({color : "rba(120,120,120)", wireframe : false})
    const center   = new Mesh(centerGeometry, gripTape)

    // Nose & Tail
    const tipGeometry = new CylinderGeometry(1, 1, 0.1, 15, 5, false, 0, 3.1)
    const tipMaterial = new MeshStandardMaterial({color : "rba(120,120,120)", wireframe : false})

    const nose        = new Mesh(tipGeometry, gripTape)
    nose.position.set(0,2.9,0)
    nose.rotation.x = -0.5 * Math.PI
    nose.rotation.y = -0.5 * Math.PI
    nose.rotation.z = -0.075 * Math.PI

    const tail        = new Mesh(tipGeometry, gripTape)
    tail.position.set(0,-2.9,0)
    tail.rotation.x = -0.5 * Math.PI
    tail.rotation.y = -0.5 * Math.PI
    tail.rotation.z = 1.075 * Math.PI

    // Deck
    const deck = new Group()
    deck.add(center)
    deck.add(nose)
    deck.add(tail)

    deck.position.set(0,1,0)
    deck.rotation.x = -0.5 * Math.PI
    deck.rotation.z = -0.5 * Math.PI

    return deck
}