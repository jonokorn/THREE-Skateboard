import { GridHelper } from 'three'

export default function setupHelpers (scene) {

    const gridHelper = new GridHelper(30,30)
    scene.add(gridHelper)


}