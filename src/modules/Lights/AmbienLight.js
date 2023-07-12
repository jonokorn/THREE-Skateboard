import { AmbientLight } from 'three'

export default function createAmbientLight () {

    const ambienLight = new AmbientLight(0x333333)

    return ambienLight

}