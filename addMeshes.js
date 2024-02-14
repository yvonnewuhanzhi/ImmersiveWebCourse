import {
	TorusKnotGeometry,
    TorusGeometry,
	ConeGeometry,
	BoxGeometry,
	MeshBasicMaterial,
	MeshStandardMaterial,
	MeshLambertMaterial,
	MeshPhysicalMaterial,
	Mesh,
    SphereGeometry,
	TextureLoader,
} from 'three'


const loader = new TextureLoader();

export const planet1 = () => {
    const planet1Geometry = new BoxGeometry(1, 0.4, 1); // 使用 BoxGeometry 创建一个立方体
    const planet1Material = new MeshBasicMaterial({ color: 0xE2AFC1});
    const planet1Mesh = new Mesh(planet1Geometry, planet1Material);
    return planet1Mesh;
};
export const planet2 = () => {
    const planet2Geometry = new BoxGeometry(1, 2, 1); // 使用 BoxGeometry 创建一个立方体
    const planet2Material = new MeshBasicMaterial({ color: 0xE84F78 });
    const planet2Mesh = new Mesh(planet2Geometry, planet2Material);
    return planet2Mesh;
};
export const planet3 = () => {
    const planet3Geometry = new TorusGeometry(3, 0.5, 2, 4); // 创建圆环几何体
    const planet3Material = new MeshBasicMaterial({ color: 0xbfd4f2 });
    const planet3Mesh = new Mesh(planet3Geometry, planet3Material);
    planet3Mesh.position.set(-4, -3, 0);
    return planet3Mesh;
};
export const planet4 = () => {
    const planet4Geometry = new ConeGeometry( 4, 4.5, 3 );  
    const planet4Material = new MeshBasicMaterial({ color: 0x499DAE});
    const planet4Mesh = new Mesh(planet4Geometry, planet4Material);
    return planet4Mesh;
};