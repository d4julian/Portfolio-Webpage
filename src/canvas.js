import * as THREE from 'three';
import isSplash from './splash';
import { isMobile } from './script';

let mouseX = 0, mouseY = 0;

const scene = new THREE.Scene();
export function getScene() { return scene; }
const canvas = document.getElementById("three-canvas");
const renderer = new THREE.WebGLRenderer({ canvas, antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setPixelRatio(window.devicePixelRatio > 1 ? 2 : 1);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 2000);
camera.position.z = 300;

const wireframe = new THREE.WireframeGeometry(new THREE.IcosahedronGeometry(isMobile() ? window.innerWidth / 6 : window.innerWidth / 12, 4));
export const line = new THREE.LineSegments(wireframe);
line.material.transparent = true;
camera.lookAt(line.position);
//scene.add(line);


const geometry = new THREE.BufferGeometry();
const materials = [], vertices = [];

const textureLoader = new THREE.TextureLoader();

const assignSRGB = texture => texture.colorSpace = THREE.SRGBColorSpace;
let sprite = textureLoader.load("/sp2.png", assignSRGB);
let sprite3 = textureLoader.load("/sp3.png", assignSRGB);

for (let i = 0; i < 10000; i++) {
    const x = Math.random() * 2000 - 1000;
    const y = Math.random() * 2000 - 1000;
    const z = Math.random() * 2000 - 1000;
    vertices.push(x, y, z);
}

geometry.setAttribute("position", new THREE.BufferAttribute(new Float32Array(vertices), 3));
let parameters = [
    [null, sprite3, 10],
    [null, sprite3, 10],
    [null, sprite, 1],
    [null, sprite, 1],
    [null, sprite, 1]
];

for (let i = 0; i < parameters.length; i++) {
    parameters[i][0] = [Math.random(), Math.random() * 0.7 + 0.7, Math.random() * 0.5 + 0.5];
    const color = parameters[i][0];
    const sprite = parameters[i][1];
    const size = parameters[i][2];

    materials[i] = new THREE.PointsMaterial({
        size: size, 
        map: sprite, 
        blending: THREE.AdditiveBlending,
        transparent: true,
        alphaTest: 0.1
    });
    materials[i].color.setHex(color, THREE.SRGBColorSpace);

    const particles = new THREE.Points(geometry, materials[i]);

    particles.rotation.x = Math.random() * 6;
    particles.rotation.y = Math.random() * 6;
    particles.rotation.z = Math.random() * 6;

    scene.add(particles);
}

document.body.addEventListener("pointermove", onPointerMove);
window.addEventListener("resize", onResize);

let halfHeight = window.innerHeight / 2, halfWidth = window.innerWidth / 2;
function onResize() {
    halfHeight = window.innerHeight / 2, halfWidth = window.innerWidth / 2;

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
}

export function fadeWireframe() {
    const material = line.material;
    const startOpacity = material.opacity;
    const startTime = Date.now();
    function animate() {
        const currentTime = Date.now();  // Use Date.now() here as well
        const elapsedTime = currentTime - startTime;
        const progress = Math.min(elapsedTime / 250, 1);

        material.opacity = startOpacity * (1 - progress);
        if (progress < 1) requestAnimationFrame(animate);
    }
    animate();
}

function onPointerMove(event) {
    if (event.isPrimary === false) return;
    mouseX = event.clientX - halfWidth;
    mouseY = event.clientY - halfHeight;
}

function getAge(currentDate) {
    const millisecondsInAYear = 1000 * 60 * 60 * 24 * 365.25;
    return ((currentDate - new Date(2003, 1, 18)) / millisecondsInAYear).toFixed(9);
}

function animate() {
    
    const date = Date.now();
    document.getElementById("age").innerText = `${getAge(date)} year old developer`;
    const time = date * 0.0001;

    const sensitivity = isSplash() ? 0.1 : 0.01
    camera.position.x += (-mouseX - camera.position.x) * sensitivity;
    camera.position.y += (mouseY - camera.position.y) * sensitivity;
    camera.lookAt(line.position);

    for (let i = 0; i < scene.children.length; i ++) {
        const object = scene.children[ i ];
        if (object instanceof THREE.Points) object.rotation.y = time * ((i < 4) ? (i + 1) : - (i + 1));
    }
    for (let i = 0; i < materials.length; i ++) {
        const color = parameters[i][0];
        const h = (360 * (color[ 0 ] + time) % 360) / 360;
        materials[i].color.setHSL(h, color[1], color[2], THREE.SRGBColorSpace);
    }

    renderer.render(scene, camera);
}

renderer.setAnimationLoop(animate);