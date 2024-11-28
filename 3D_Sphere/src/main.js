import "./styles.css";
import * as THREE from "three";

//Scene
const scene = new THREE.Scene();

//Objects - Group of Meshes
const group = new THREE.Group();

//Object 1 - Mesh 1
// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshNormalMaterial();
// const mesh1 = new THREE.Mesh(geometry, material);
// mesh1.position.x = -1

//Object 2 - Mesh 2
const material2 = new THREE.MeshNormalMaterial({
    flatShading: false,  // Optional: Makes the shading smoother (default: false)
    wireframe: true,    // Optional: Enables wireframe rendering (default: false)
    opacity: 1,          // Optional: Set transparency level (default: 1)
    transparent: false,  // Optional: Whether the material is transparent (default: false)
    side: THREE.FrontSide,  // Optional: Render only the front side of the geometry (default: THREE.FrontSide)
    reflectivity: 0.5,   // Optional: How much the material reflects its environment (default: 0)
    emissive: new THREE.Color(0x00ff00), // Optional: Material color for emissive effect
});
const mesh2 = new THREE.Mesh(new THREE.SphereGeometry(1, 32, 32), material2);
mesh2.position.x = 0

group.add(mesh2);
scene.add(group);

//AxesHelper
// const axesHelper = new THREE.AxesHelper(4);
// scene.add(axesHelper);

//Camera
const aspect = {
    width: window.innerWidth,
    height: window.innerHeight,
};
const camera = new THREE.PerspectiveCamera(
    75,
    aspect.width / aspect.height,
    1,
    2000
);
camera.position.z = 3;
scene.add(camera);

//Renderer
const canvas = document.querySelector(".draw");
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(aspect.width, aspect.height);

//Animation
const clock = new THREE.Clock();

const animate = () => {
    const elapsedTime = clock.getElapsedTime();
    group.rotation.x = elapsedTime;
    group.rotation.y = elapsedTime;
    group.rotation.z = elapsedTime;
    // mesh1.rotation.x = elapsedTime;
    // mesh1.rotation.y = elapsedTime;
    // mesh1.rotation.z = elapsedTime;
    // mesh2.rotation.x = elapsedTime;
    // mesh2.rotation.y = elapsedTime;
    // mesh2.rotation.z = elapsedTime;
    renderer.render(scene, camera);
    window.requestAnimationFrame(animate);
}

animate();
