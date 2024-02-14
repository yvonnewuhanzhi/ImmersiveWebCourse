import './style.css'
import * as THREE from 'three'
import { planet1,planet2,planet3,planet4} from './addMeshes'


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
scene.background = new THREE.Color(0x95c2cc);

init()
function init() {
    
    renderer.setSize(window.innerWidth, window.innerHeight)
    document.body.appendChild(renderer.domElement)
    meshes.planet1 = planet1()
	meshes.planet2 = planet2()
	meshes.planet3 = planet3()
	meshes.planet4 = planet4()

 

    scene.add(meshes.planet1)
    scene.add(meshes.planet2)
    scene.add(meshes.planet3)
    scene.add(meshes.planet4)
	


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
    requestAnimationFrame(animate);

    const tick = clock.getElapsedTime();
    const speed1 = 0.05; 
    const speed2 = 0.08; 
    const speed3 = 0.1; 
    const speed4 = 0.06

    // 计算每个星球的位置
    meshes.planet1.position.x = Math.sin(tick * speed1) * 3; 
    meshes.planet1.position.y = Math.cos(tick * speed1) * 3;

    meshes.planet2.position.x = Math.cos(tick * speed2) * 3; 
    meshes.planet2.position.y = Math.sin(tick * speed2) * 3;

    meshes.planet3.position.x = Math.sin(tick * speed3) -3.5
    meshes.planet3.position.y = Math.cos(tick * speed3) -3

    meshes.planet4.position.x = Math.sin(tick * speed4) 
    meshes.planet4.position.y = Math.cos(tick * speed4) 

    renderer.render(scene, camera);
}
