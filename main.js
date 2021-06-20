import {OrbitControls} from "./three.js-master/examples/jsm/controls/OrbitControls.js"
//Setup

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75,window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio); 
renderer.setSize( window.innerWidth, window.innerHeight);
camera.position.setZ(30);

renderer.render(scene, camera);

// create and add torus to scene
const geometry = new THREE.TorusGeometry(10,3, 16,100);
const material = new THREE.MeshStandardMaterial({ color: 0xFF6347});
const torus = new THREE.Mesh( geometry, material ); // combining geometry and material

scene.add(torus);

const pointLight = new THREE.PointLight(0xffffff); //add a light point to view the 3d obnject
pointLight.position.set(20,20,20);

const ambientLight = new THREE.AmbientLight(0xffffff); // colour of the ambient light
scene.add(pointLight, ambientLight);

const lightHelper = new THREE.PointLightHelper(pointLight); //create a grid around where the light source is facing
const gridHelper = new THREE.GridHelper(200, 50); // define the size of the grid created 
scene.add(lightHelper,gridHelper);

const controls = new OrbitControls( camera, renderer.domElement );

function animate(){
  // we don't want to call the render method over and over in the code, 
  // so a better approach is to just use a revursive function
  requestAnimationFrame(animate);
  // control the rotation speed of the x,y,z axis
  torus.rotation.x += 0.01; 
  torus.rotation.y += 0.005;
  torus.rotation.z += 0.01;

  controls.update(); // update the view based on the mouse dragging the screen
  //render the scene and ready the camera
  renderer.render(scene, camera);
}
animate();

