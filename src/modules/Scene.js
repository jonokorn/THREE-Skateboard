import { Scene, Color, TextureLoader } from 'three'

export default function createScene () {

    const scene      = new Scene()

    const backgroundTexture = new TextureLoader().load('../../assets/sky.jpg')
    //scene.background = new Color("skyblue")
    scene.background = backgroundTexture
    return scene
}