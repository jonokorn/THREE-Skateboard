import { BoxGeometry, MeshStandardMaterial, Mesh, CylinderGeometry, Group, TextureLoader, RepeatWrapping } from 'three'

export default function createDeck () {

    let components = []

    // --- 

    const deckWidth  = 2
    const deckHeight = 6
    const deckDepth  = 0.08

    // --- 
    const textureLoader   = new TextureLoader()
    const woodTexture     = textureLoader.load("../../../assets/woodTexture.png")
    const gripTapeTexture = textureLoader.load("../../../assets/gripTapeTexture.png")
    const normalMap       = textureLoader.load("../../../assets/sandPaperNormalMap.png")
    gripTapeTexture.wrapS = RepeatWrapping
    gripTapeTexture.wrapT = RepeatWrapping    

    //Materials
    const gtm = new MeshStandardMaterial({ //gm = gripTapeMaterial
        //map : gripTapeTexture,
        color : 0x000000,
        normalMap : normalMap
    })

    const wm = new MeshStandardMaterial({ // wm = woodMaterial
        map : woodTexture
    })

    // Center Part
    const centerGeometry = new BoxGeometry(deckWidth, deckHeight, deckDepth, 1, 1, 1)
    const center         = new Mesh(centerGeometry, [wm, wm, wm, wm, gtm, wm])
    components.push(center)

    // Nose & Tail
    const tipGeometry = new CylinderGeometry(1, 1, 0.1, 15, 5, false, 0, 3.1)

    const nose         = new Mesh(tipGeometry, [wm, wm, gtm, gtm, gtm, gtm])
    nose.rotation.x    = -0.5 * Math.PI
    nose.rotation.y    = -0.5 * Math.PI
    nose.rotation.z    = -0.075 * Math.PI
    nose.position.set(0,2.9,0)
    components.push(nose)

    const tail         = new Mesh(tipGeometry, [wm, gtm, wm, gtm, gtm, gtm])
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