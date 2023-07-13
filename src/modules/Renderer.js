import { WebGLRenderer } from 'three'

export default function createRenderer () {

    const renderer = new WebGLRenderer({antialias : true})

    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.shadowMap.enabled = true
    document.body.appendChild(renderer.domElement)
    
    return renderer
}