import * as THREE from 'three';

const scene = new THREE.Scene();

// const geometry = new THREE.BoxGeometry(1, 1, 1);
// const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
// const mesh = new THREE.Mesh(geometry, material);
// // mesh.position.x = 0.7;
// // mesh.position.y = -0.6;
// // mesh.position.z = 1;
// mesh.position.set(0.7, -0.6, 1);
// mesh.scale.set(2, 0.5, 0.5);
// mesh.rotation.reorder('YXZ');
// mesh.rotation.set(Math.PI * .25, Math.PI / 2, 0);
// scene.add(mesh);

const group = new THREE.Group();
scene.add(group);

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
);
group.add(cube1);

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x00ff00 })
);
cube2.position.set(-2, 0, 0)
group.add(cube2);

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0x0000ff })
);
cube3.position.set(2, 0, 0)
group.add(cube3);

group.position.set(0, 1, 0);
group.scale.set(1, 2, 1);
group.rotation.set(0, 2, 0);

const axisHelper = new THREE.AxesHelper();
scene.add(axisHelper);

// mesh.position.normalize();
// console.log(mesh.position.length());

const sizes = {
    width: 800,
    height: 600,
};

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 5;
camera.position.x = -1;
camera.position.y = 1;
scene.add(camera);

// camera.lookAt(mesh.position);
// console.log(mesh.position.distanceTo(camera.position));

const canvas = document.querySelector('.webgl');
const renderer = new THREE.WebGLRenderer({
    canvas,
});
renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);
