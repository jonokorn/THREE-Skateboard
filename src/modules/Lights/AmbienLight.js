import { AmbientLight } from 'three'

export default function createAmbientLight () {

    const ambienLight = new AmbientLight(0x404040)

    return ambienLight

}