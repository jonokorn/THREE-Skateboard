import * as THREE             from "three"
import createCamera           from "./modules/Camera"
import createRenderer         from "./modules/Renderer"
import createScene            from "./modules/Scene"
import createControls         from "./modules/Controls"
import setupHelpers           from "./modules/utils/Helpers"
import createDirectionalLight from "./modules/Lights/DirectionalLight"
import createAmbientLight     from "./modules/Lights/AmbienLight"
import createPlane            from "./modules/Objects/Plane"
import setupGUI               from "./modules/utils/GUI"
import createSphere           from "./modules/Objects/Sphere"
import createCube             from "./modules/Objects/Cube"
import createDeck             from "./modules/Objects/Deck"
import createTruck            from "./modules/Objects/Truck"

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
scene.add(directionalLight)
const ambienLight = createAmbientLight()
scene.add(ambienLight)

// Geometry 
const groundPlane = createPlane()
//scene.add(groundPlane)

const sphere      = createSphere()
//scene.add(sphere)

const cube        = createCube()
//scene.add(cube)

const truck = createTruck()
scene.add(truck)
const deck = createDeck()
scene.add(deck)



// --------------------

function setup() {
    setupGUI({
        directionalLight : directionalLight,

    })
    camera.position.set(0,2,7)
    controls.update()
}

function animate() {
    renderer.render(scene, camera)
}

setup()
renderer.setAnimationLoop(animate)