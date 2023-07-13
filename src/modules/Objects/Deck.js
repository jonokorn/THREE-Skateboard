import { BoxGeometry, MeshStandardMaterial, Mesh, CylinderGeometry, Group, TextureLoader, BackSide, FrontSide, DoubleSide } from 'three'

export default function createDeck () {

    let components = []

    // --- 

    const deckWidth  = 2
    const deckHeight = 6
    const deckDepth  = 0.08

    // --- 

    const uvTexture = new TextureLoader().load("../../../assets/woodTexture.png")
    
    // GripTape Material 
    const gripTape = new MeshStandardMaterial({
        color     : "rgb(100,100,100)",
        roughness : 0.9,
        metalness : 0.1,
        wireframe : false,
    })

    const texture = new MeshStandardMaterial({
        map : uvTexture
    })

    // Center Part
    const centerGeometry = new BoxGeometry(deckWidth, deckHeight, deckDepth, 1, 1, 1)
    const center         = new Mesh(centerGeometry, [gripTape, gripTape, gripTape, gripTape, gripTape, texture])
    components.push(center)

    // Nose & Tail
    const tipGeometry = new CylinderGeometry(1, 1, 0.1, 15, 5, false, 0, 3.1)

    const nose         = new Mesh(tipGeometry, [gripTape, texture, gripTape, gripTape, gripTape, gripTape])
    nose.rotation.x    = -0.5 * Math.PI
    nose.rotation.y    = -0.5 * Math.PI
    nose.rotation.z    = -0.075 * Math.PI
    nose.position.set(0,2.9,0)
    components.push(nose)

    const tail         = new Mesh(tipGeometry, [gripTape, gripTape, texture, gripTape, gripTape, gripTape])
    tail.rotation.x    = -0.5 * Math.PI
    tail.rotation.y    = -0.5 * Math.PI
    tail.rotation.z    = 1.075 * Math.PI
    tail.position.set(0,-2.9,0)
    components.push(tail)

    // Deck
    const deck = new Group()

    components.forEach(element => {
        element.castShadow    = true
        element.receiveShadow = true
        deck.add(element)
    })

    deck.position.set(0,0,0)
    deck.rotation.x    = -0.5 * Math.PI
    deck.rotation.z    = -0.5 * Math.PI
    deck.castShadow    = true
    deck.receiveShadow = true

    return deck
}