import './style.css'
import * as THREE from 'three'
import { centerPlanet,planet1,planet2,planet3,planet4 } from './addMeshes'
// import { addBoilerPlateMeshes, addStandardMesh } from './addMeshes'
import { addLight } from './addLights'

const renderer = new THREE.WebGLRenderer()
const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	0.1,
	100
)
const scene = new THREE.Scene()
const meshes = {}
const lights = {}
const clock = new THREE.Clock() //clock

init()
function init() {
	//set up our renderer default settings, add scene/canvas to webpage
	renderer.setSize(window.innerWidth, window.innerHeight)
	document.body.appendChild(renderer.domElement)
    meshes.center = centerPlanet()
	meshes.planet1 = planet1()
	meshes.planet2 = planet2()
	meshes.planet3 = planet3()
	meshes.planet4 = planet4()
	// meshes.default = addBoilerPlateMeshes()
	// meshes.standard = addStandardMesh()
	lights.default = addLight()

	scene.add(lights.default)
	scene.add(meshes.center)
	scene.add(meshes.planet1)
	scene.add(meshes.planet2)
	scene.add(meshes.planet3)
	scene.add(meshes.planet4)
	// scene.add(meshes.standard)
	// scene.add(meshes.default)

	camera.position.set(0, 0, 5)
	resize()
	animate()
}

function resize() {
	window.addEventListener('resize', () => {
		renderer.setSize(window.innerWidth, window.innerHeight)
		camera.aspect = window.innerWidth / window.innerHeight
		camera.updateProjectionMatrix()
	})
}

function animate() {
	requestAnimationFrame(animate)
    //CLOCK
	const tick = clock.getElapsedTime()
	meshes.planet1.position.x=Math.sin(tick)*4
	meshes.planet1.position.y=Math.cos(tick)*4

	meshes.planet2.position.x=Math.cos(tick)*3
	meshes.planet2.position.y=Math.sin(tick)*2
	
	meshes.planet3.position.x=Math.sin(tick)
	meshes.planet3.position.y=Math.cos(tick)
	
	meshes.planet4.position.x=-Math.sin(tick)*6
	meshes.planet4.position.y=-Math.cos(tick)*5.5

	// meshes.default.rotation.x += 0.01
	// meshes.default.rotation.y -= 0.01
	// meshes.standard.rotation.x -= 0.01
	// meshes.standard.rotation.z -= 0.01

	renderer.render(scene, camera)
}
