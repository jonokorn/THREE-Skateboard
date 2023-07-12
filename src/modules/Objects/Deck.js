import { BoxGeometry, MeshStandardMaterial, Mesh } from 'three'

export default function createDeck () {

    const deckWidth  = 2
    const deckHeight = 8
    const deckDepth  = 0.1

    // --- 

    const geometry = new BoxGeometry(deckWidth, deckHeight, deckDepth, 50, 25, 10)
    const material = new MeshStandardMaterial({color : "rba(120,120,120)", wireframe : true})

    // --- 

    const deck = new Mesh(geometry, material)

    deck.position.set(0,1,0)
    deck.rotation.x = -0.5 * Math.PI
    deck.rotation.z = -0.5 * Math.PI


    console.log(deck)
    return deck
}