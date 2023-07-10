import { OrbitControls } from "three/addons/controls/OrbitControls.js"

export default function createControls (camera, renderer) {

    const orbitControls = new OrbitControls(camera, renderer.domElement)

    return orbitControls
}