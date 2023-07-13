import * as THREE             from "three"
import createCamera           from "./modules/Camera"
import createRenderer         from "./modules/Renderer"
import createScene            from "./modules/Scene"
import createControls         from "./modules/Controls"
import createDirectionalLight from "./modules/Lights/DirectionalLight"
import createAmbientLight     from "./modules/Lights/AmbienLight"
import createPlane            from "./modules/Objects/Plane"
import setupGUI               from "./modules/utils/GUI"
import createDeck             from "./modules/Objects/Deck"
import createTruck            from "./modules/Objects/Truck"
import createWheel            from "./modules/Objects/Wheel"
import setupHelpers from "./modules/utils/Helpers"

// --------------------

const camera   = createCamera()
const renderer = createRenderer()
const scene    = createScene()
const controls = createControls(camera, renderer)

// --------------------

///setupHelpers(scene)

//  --------------------

// Lights
const directionalLight1 = createDirectionalLight(10,10,10)
const directionalLight2 = createDirectionalLight(0,2,7)
const directionalLight3 = createDirectionalLight(0,2,-7)
const ambienLight       = createAmbientLight()
scene.add(ambienLight)
scene.add(directionalLight1)
scene.add(directionalLight2)
scene.add(directionalLight3)

// Geometry 
const groundPlane = createPlane()
scene.add(groundPlane)

const deck = createDeck()
scene.add(deck)
deck.position.y = 0.6
deck.animate = false

// Trucks
const truck1 = createTruck()
deck.add(truck1)
truck1.position.set(0,2,-0.05)

const truck2 = createTruck()
deck.add(truck2)
truck2.position.set(0,-2,-0.05)

// Wheels
const wheel1 = createWheel()
truck1.add(wheel1)
wheel1.position.set(0, 0.7 ,2)

const wheel2 = createWheel()
truck1.add(wheel2)
wheel2.position.set(0, 0.7, -2)

const wheel3 = createWheel()
truck2.add(wheel3)
wheel3.position.set(0, 0.7 , 2)

const wheel4 = createWheel()
truck2.add(wheel4)
wheel4.position.set(0, 0.7, -2)


// --- 

function setup() {

    //setupHelpers(scene)

    setupGUI({
        directionalLight : directionalLight1,
        groundPlane      : groundPlane,
        deck             : deck,
        scene            : scene,
        setupHelpers     : setupHelpers
    })
    camera.position.set(0,2,5)
    controls.update()
}


function animate() {

    renderer.render(scene, camera)

    if(deck.animate){
        deck.rotation.x += 0.0125
    }
}

setup()
renderer.setAnimationLoop(animate)