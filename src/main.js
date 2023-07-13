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

// --------------------

const camera   = createCamera()
const renderer = createRenderer()
const scene    = createScene()
const controls = createControls(camera, renderer)

// --------------------

///setupHelpers(scene)

//  --------------------

// Lights
const directionalLight = createDirectionalLight()
const helper           = new THREE.DirectionalLightHelper(directionalLight, 5)
const ambienLight      = createAmbientLight()
scene.add(ambienLight)
scene.add(directionalLight)
//scene.add(helper)

// Geometry 
const groundPlane = createPlane()
scene.add(groundPlane)

const deck = createDeck()
scene.add(deck)
deck.position.y = 0.6

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
    setupGUI({
        directionalLight : directionalLight,
        groundPlane      : groundPlane,
        deck             : deck
    })
    camera.position.set(0,2,7)
    controls.update()
}

function animate() {

    renderer.render(scene, camera)

    if(deck.animate){
        deck.rotation.x += 0.0125
        console.log(deck.rotation.x)
    }
}

setup()
renderer.setAnimationLoop(animate)