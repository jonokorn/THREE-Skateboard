import { AxesHelper, DirectionalLight, DirectionalLightHelper, GridHelper } from 'three'

export default function setupHelpers (scene) {

    const gridHelper = new GridHelper(30,30)
    scene.add(gridHelper)

    const axesHelper = new AxesHelper(10, 10, "rgba(0,0,0,0)", "rgba(255,0,0,1)")
    scene.add(axesHelper)

    scene.traverse(child => {
        if (child instanceof DirectionalLight) {
            scene.add(new DirectionalLightHelper(child, 2))
        }
    })

}