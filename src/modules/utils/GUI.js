import * as dat   from 'dat.gui'
import * as THREE from "three"
// ---------

export default function setupGUI (objects) {

    const gui = new dat.GUI()

    const options = {
        directionalLightColor : "rgb(255,255,255)",
        showGroundPlane       : true,
        rotateBoard           : false,
    }

    gui.addColor(options, "directionalLightColor").onChange(e =>
        objects.directionalLight.color.set(e)
    )

    gui.add(options, "showGroundPlane").onChange(e =>
        objects.groundPlane.visible = e
    )

    gui.add(options, "rotateBoard").onChange(e => {
        objects.deck.animate    = e 
    })

    gui.add({performTreFlip : function() {

        console.log("360 FLip")

    }}, "performTreFlip")

}