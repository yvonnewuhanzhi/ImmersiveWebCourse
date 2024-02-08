import {
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	MeshLambertMaterial,
	MeshPhysicalMaterial,
	Mesh,
	SphereGeometry,
	TextureLoader,
} from 'three'

// export const addBoilerPlateMeshes = () => {
// 	const box = new BoxGeometry(1, 1, 1)
// 	const boxMaterial = new MeshBasicMaterial({ color: 0xff0000 })
// 	const boxMesh = new Mesh(box, boxMaterial)
// 	boxMesh.position.set(-2, 0, 0)
// 	return boxMesh
// }

// export const addStandardMesh = () => {
// 	const box = new BoxGeometry(1, 1, 1)
// 	const boxMaterial = new MeshStandardMaterial({ color: 0x00ff00 })
// 	const boxMesh = new Mesh(box, boxMaterial)
// 	boxMesh.position.set(2, 0, 0)
// 	return boxMesh
// }
const loader = new TextureLoader();



export const centerPlanet = () => {
	
	const color = loader.load('/textures/Blue_Ice_001_COLOR.jpg')
	const displace = loader.load('/textures/Ice_001_DISP.png')
	const normal = loader.load('/textures/Ice_001_NRM.jpg')
	const centerPlanetGeometry = new SphereGeometry(0.5, 32, 16)
	const centerPlanetMaterial = new MeshPhysicalMaterial({
	map: color,
	displacementMap: displace,
	normalMap: normal,
	metalness: 0.0,
	roughness: 0.1,
	thickness: 1.5,
	})
	const centerPlanetMesh = new Mesh(
	centerPlanetGeometry,
	centerPlanetMaterial
	)
	return centerPlanetMesh
	}

export const planet1 = () => {
	const planet1Geometry = new SphereGeometry(0.2, 32, 16)
	const planet1Material = new MeshStandardMaterial({ color: 0xa6e0b3, metalness: 0.6, roughness: 1.0 })
	const planet1Mesh = new Mesh(planet1Geometry, planet1Material)
	return planet1Mesh
}
export const planet2 = () => {
	const planet2Geometry = new SphereGeometry(0.3, 32, 16)
	const planet2Material = new MeshPhysicalMaterial({ color: 0xa8e3da, sheen:0.7})
	const planet2Mesh = new Mesh(planet2Geometry, planet2Material)
	return planet2Mesh
}
export const planet3 = () => {
	const planet3Geometry = new SphereGeometry(0.1, 32, 16)
	const planet3Material = new MeshLambertMaterial({ color: 0xf8f7ff, emissive: 0xe398e3})
	const planet3Mesh = new Mesh(planet3Geometry, planet3Material)
	return planet3Mesh
}
export const planet4 = () => {
	const planet4Geometry = new SphereGeometry(0.4, 16, 16)
	const planet4Material = new MeshBasicMaterial({ color: 0xe8f5b0,wireframe:true })
	const planet4Mesh = new Mesh(planet4Geometry, planet4Material)
	return planet4Mesh
}