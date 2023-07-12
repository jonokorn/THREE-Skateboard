import * as dat from 'dat.gui'

export default function setupGUI (objects) {

    const gui = new dat.GUI()

    const options = {
        directionalLightColor : "rgb(255,255,255)",
    }

    gui.addColor(options, "directionalLightColor").onChange(e =>
        objects.directionalLight.color.set(e)
    )

}