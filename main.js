import {OrbitControls} from "./three.js-master/examples/jsm/controls/OrbitControls.js"

// Setup

// define planets in solar system
const moonTexture = new THREE.TextureLoader().load('texture/moon.jpg'); //define textures used
const venus = new THREE.TextureLoader().load('texture/venus.jpg'); //define textures used
const mars = new THREE.TextureLoader().load('texture/mars.jpg'); //define textures used
const suntexture = new THREE.TextureLoader().load('texture/sun.jpg'); //define textures used
const earthTexture = new THREE.TextureLoader().load('texture/earth.jpg');
const mercuryTexture = new THREE.TextureLoader().load('texture/mercury.jpg');

// edit solar system
let solarsystem = [{
  map: mercuryTexture,
  name: 'mercury', radius: 0.383, orbit: 11.387, speed: 1.607,
  satellites: [{
    map: moonTexture, rotation: [1, 1, 1],
      name: 'rock', radius: 0.1, orbit: 2, speed: 6,
  },{
    map: moonTexture,
      name: 'moon', radius: 0.15, orbit: 1, speed: 3  ,
  }]
}, {
  map: venus,
  name: 'venus', radius: 0.949, orbit: 15.723, speed: 1.174,
  satellites: []
}, {
  map: earthTexture,
  name: 'earth', radius: 1, orbit: 20, speed: 1,
  satellites: [{
    map: moonTexture, rotation: [0, 0.05, 0.05],
      name: 'deimos', radius: 0.2724, orbit: 1.7, speed: 3,
  }]
}, {
  map: mars,
  name: 'mars', radius: 1, orbit: 30.48, speed: 0.802,
  satellites: []
}

];

//start scene

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(12,15,15);
renderer.render(scene, camera);

// to add in 
// planets
// create planets
solarsystem.forEach(d => create(d, scene));
// sun (working)
//define and create sun
let sun = sphere({radius:8, orbit:0, map:suntexture});
scene.add(sun)
// create
function create(d, target) {
  var o = new THREE.Object3D(d.name);
  d.rotation && o.rotateX(d.rotation[0]);
  d.rotation && o.rotateY(d.rotation[1]);
  d.rotation && o.rotateZ(d.rotation[2]);
  o.add(orbit(d));
  let p = sphere(d)
  o.add(p);
  d.satellites && d.satellites.forEach(d1 => create(d1, p))
  target.add(o);
  d.o=o; 
}

// Circle


// orbit 
function orbit(d) {
  var o = new THREE.Object3D('orbit '+d.name);
  o.rotateX(Math.PI/2);  
  var lineGeometry =  new THREE.Line( new THREE.CircleBufferGeometry( d.orbit, 64,0,0 ), new THREE.LineBasicMaterial( { color: 0xffffff } ) );; 
  var ringGeometry = new THREE.Line( new THREE.RingGeometry( d.orbit,d.orbit, 64,0,0 ), new THREE.LineBasicMaterial( { color: 0xffffff } ) );
  o.add(ringGeometry,lineGeometry);
  return o;
}
// sphere (working?)
function sphere(d){
  var o = new THREE.Object3D('sphere '+d.name);
  o.translateX(d.orbit);
  var geometry = new THREE.SphereGeometry( d.radius, 20, 20 );
  var material = new THREE.MeshBasicMaterial( { map: d.map} );
  o.add( new THREE.Mesh( geometry, material ) ); 
  return o;
}

//render

// Torus (remove later)
/*
const geometry = new THREE.TorusGeometry(10, 3, 16, 100);
const material = new THREE.MeshStandardMaterial({ color: 0xff6347 });
const torus = new THREE.Mesh(geometry, material); // claim as parent

scene.add(torus);
*/
// Lights (change later)

const pointLight = new THREE.PointLight(0xffffff, 1, 100 );
pointLight.position.set(0 , 0, 0);

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight);

// Helpers

// const lightHelper = new THREE.PointLightHelper(pointLight)
// const gridHelper = new THREE.GridHelper(200, 50);
// scene.add(lightHelper, gridHelper)
// const controls = new OrbitControls(camera, renderer.domElement);

//star (To edit to fit solar system)
let stars = []; //grouping all stars

function addStar() {
  const geometry = new THREE.BoxGeometry(3,3,3);
  
  const material = new THREE.MeshBasicMaterial({ color: 0xffffff , wireframe:true});
  
  let star = new THREE.Mesh(geometry, material);

  //give a random rotation to each star generated

  star.rotation.x = Math.random(-1.0,1.0);
  star.rotation.z = Math.random(-1.0,1.0);
  star.rotation.y = Math.random(-1.0,1.0);

  const [x, y, z] = Array(3)
    .fill()
    .map(() => THREE.MathUtils.randFloatSpread(200));

  star.position.set(x, y, z);
  
  stars.push(star); // save star to array of stars group
  scene.add(star);
}
Array(300).fill().forEach(addStar); //deploy each star 


// Background (keep there but change pic)

const spaceTexture = new THREE.TextureLoader().load('texture/space.jpg');
scene.background = spaceTexture;

// Moon (to be removed)
/*
const moonTexture = new THREE.TextureLoader().load('moon.jpg');
const normalTexture = new THREE.TextureLoader().load('normal.jpg');

const moon = new THREE.Mesh(
  new THREE.SphereGeometry(3, 32, 32),
  new THREE.MeshStandardMaterial({
    map: moonTexture,
    normalMap: normalTexture,
  })
);

//scene.add(moon);
torus.add(moon);// add moon as child to torus

moon.position.z = 30;
moon.position.setX(-10);
*/

// Scroll Animation (modify to fit new solar system)

function moveCamera() {
  const t = document.body.getBoundingClientRect().top - 200;
  
  /*moon.rotation.x += 0.05;
  moon.rotation.y += 0.075;
  moon.rotation.z += 0.05;*/

  camera.position.z = t * -0.006;
  //camera.position.x = t * -0.0002;
  camera.position.y = t * -0.01;
}

document.body.onscroll = moveCamera;
moveCamera();

//on windows resize
window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize() {
  
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
  
    renderer.setSize(window.innerWidth, window.innerHeight);
  
}

// testing xyz axis 
/*
const axesHelper = new THREE.AxesHelper( 10 );
scene.add( axesHelper );
*/
// Animation Loop

let t=0;
let dt = 2; //rate of orbit
function animate() {
  requestAnimationFrame(animate);
  

  let t2 = dt - t;
  for (let k = 0; k < stars.length; k++) {
    let star = stars[k];
    star.rotation.x += 0.002;
    star.rotation.y += 0.001;
  }

  camera.lookAt(0,0,0);
  solarsystem.forEach(upd);
  sun.rotateY(t2/1000);
  
    
    function upd(d) {
        d.o.rotateY(t2/10000*d.speed);
        d.satellites && d.satellites.forEach(upd)
    }

  console.log(camera.position);
  
  //torus.rotation.x += 0.01;
  //torus.rotation.y -= 0.005;
  //torus.rotation.z += 0.01;

  //moon.rotation.x += 0.005;
  //stars.rotation.y += 0.001;
  //controls.update();
  renderer.render(scene, camera);
  
}

animate();