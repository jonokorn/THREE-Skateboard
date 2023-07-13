import * as dat   from 'dat.gui'
import * as THREE from "three"
import { convertArray } from 'three/src/animation/AnimationUtils'


// -------

export default function setupGUI (objects) {

    const gui = new dat.GUI()

    const options = {
        directionalLightColor : "rgb(255,255,255)",
        wireFrame             : false,
        showGround            : false,
        rotateBoard           : false,

    }

    gui.addColor(options, "directionalLightColor").onChange(e =>
        objects.directionalLight.color.set(e)
    )

    gui.add(options, "showGround").onChange(e =>
        objects.groundPlane.visible = e
    )

    gui.add(objects.deck.rotation , "x", -Math.PI, Math.PI, 0.01).name("rotateX")
    gui.add(objects.deck.rotation , "y", -Math.PI, Math.PI, 0.01).name("rotateY")
    gui.add(objects.deck.rotation , "z", -Math.PI, Math.PI, 0.01).name("rotateZ")

    gui.add(options, "rotateBoard").onChange(e => {
        objects.deck.animate    = e 
    })

    gui.add({performTreFlip : function() {

        console.log("360 FLip")

    }}, "performTreFlip")

    gui.add({showHelpers : function() {

        console.log(objects)
        objects.setupHelpers(objects.scene)

    }}, "showHelpers")
}