const canvas = document.querySelector("#bg");

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 0.1, 200);
camera.position.set(0, 0, 18);

const renderer = new THREE.WebGLRenderer({
  canvas,
  antialias: true,
  alpha: true,
});
renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
renderer.setSize(window.innerWidth, window.innerHeight);

scene.fog = new THREE.FogExp2(0x031019, 0.03);

const ambient = new THREE.AmbientLight(0xb5deff, 0.45);
const keyLight = new THREE.DirectionalLight(0x8fe9ff, 1.1);
keyLight.position.set(5, 4, 6);
const fillLight = new THREE.DirectionalLight(0x2e94d9, 0.65);
fillLight.position.set(-5, -2, 3);
scene.add(ambient, keyLight, fillLight);

const rig = new THREE.Group();
scene.add(rig);

const wireMaterial = new THREE.MeshStandardMaterial({
  color: 0x8de1ff,
  metalness: 0.2,
  roughness: 0.35,
  emissive: 0x0d3948,
  wireframe: true,
});

const solidMaterial = new THREE.MeshStandardMaterial({
  color: 0x7bd2ff,
  metalness: 0.42,
  roughness: 0.25,
  transparent: true,
  opacity: 0.16,
  emissive: 0x071c28,
});

const icosaWire = new THREE.Mesh(new THREE.IcosahedronGeometry(5.4, 1), wireMaterial);
const icosaSolid = new THREE.Mesh(new THREE.IcosahedronGeometry(4.9, 2), solidMaterial);

const knot = new THREE.Mesh(
  new THREE.TorusKnotGeometry(2.2, 0.38, 150, 24),
  new THREE.MeshStandardMaterial({
    color: 0xa7edff,
    metalness: 0.68,
    roughness: 0.18,
    emissive: 0x123846,
    emissiveIntensity: 0.4,
  })
);

rig.add(icosaWire, icosaSolid, knot);

const particleCount = window.innerWidth < 720 ? 750 : 1400;
const positions = new Float32Array(particleCount * 3);
const scales = new Float32Array(particleCount);

for (let i = 0; i < particleCount; i += 1) {
  const i3 = i * 3;
  positions[i3] = THREE.MathUtils.randFloatSpread(120);
  positions[i3 + 1] = THREE.MathUtils.randFloatSpread(95);
  positions[i3 + 2] = THREE.MathUtils.randFloatSpread(120);
  scales[i] = Math.random() * 1.4 + 0.2;
}

const particlesGeometry = new THREE.BufferGeometry();
particlesGeometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
particlesGeometry.setAttribute("aScale", new THREE.BufferAttribute(scales, 1));

const particlesMaterial = new THREE.PointsMaterial({
  color: 0xb6e6ff,
  size: 0.08,
  sizeAttenuation: true,
  transparent: true,
  opacity: 0.85,
  depthWrite: false,
  blending: THREE.AdditiveBlending,
});

const particles = new THREE.Points(particlesGeometry, particlesMaterial);
scene.add(particles);

const pointer = { x: 0, y: 0 };
window.addEventListener("pointermove", (event) => {
  pointer.x = (event.clientX / window.innerWidth) * 2 - 1;
  pointer.y = -(event.clientY / window.innerHeight) * 2 + 1;
});

const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealItems.forEach((item, index) => {
    item.style.transitionDelay = `${Math.min(index * 70, 260)}ms`;
    observer.observe(item);
  });
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

function onResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();
  renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
  renderer.setSize(window.innerWidth, window.innerHeight);
}

window.addEventListener("resize", onResize);

const clock = new THREE.Clock();

function animate() {
  const elapsed = clock.getElapsedTime();

  const scrollY = window.scrollY || window.pageYOffset;
  const normalizedScroll = scrollY / Math.max(document.body.scrollHeight - window.innerHeight, 1);

  rig.rotation.y = elapsed * 0.13 + normalizedScroll * 1.4;
  rig.rotation.x = Math.sin(elapsed * 0.26) * 0.15 + normalizedScroll * 0.32;

  knot.rotation.x = elapsed * 0.32;
  knot.rotation.y = elapsed * 0.48;
  icosaWire.rotation.x = -elapsed * 0.08;
  icosaSolid.rotation.y = elapsed * 0.1;

  particles.rotation.y = elapsed * 0.02;
  particles.rotation.x = Math.sin(elapsed * 0.09) * 0.08;

  camera.position.x += (pointer.x * 1.5 - camera.position.x) * 0.03;
  camera.position.y += (pointer.y * 1.1 - camera.position.y) * 0.03;
  camera.position.z = 18 - normalizedScroll * 3.8;
  camera.lookAt(0, 0, 0);

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

animate();