import {OrbitControls} from "./three.js-master/examples/jsm/controls/OrbitControls.js"

// Setup

// define planets in solar system
const moonTexture = new THREE.TextureLoader().load('texture/moon.jpg'); //define textures used
const venus = new THREE.TextureLoader().load('texture/venus.jpg'); //define textures used
const mars = new THREE.TextureLoader().load('texture/mars.jpg'); //define textures used
const suntexture = new THREE.TextureLoader().load('texture/sun.jpg'); //define textures used
const earthTexture = new THREE.TextureLoader().load('texture/earth.jpg');

let solarsystem = [{
  map: mars,
  name: 'mars', radius: 2, orbit: 20, speed: 1.607,
  satellites: [{
    map: moonTexture, rotation: [1, 1, 1],
      name: 'rock', radius: 0.5, orbit: 4, speed: 6,
  },{
    map: moonTexture,
      name: 'moon', radius: 1, orbit: 6, speed: 1,
  }]
}, {
  map: venus,
  name: 'mars', radius: 2, orbit: 30, speed: 1.174,
  satellites: []
}, {
  map: earthTexture,
  name: 'earth', radius: 2, orbit: 50, speed: 1,
  satellites: [{
    map: moonTexture,
      name: 'deimos', radius: 0.5, orbit: 4, speed: 3,
  }]
}];

//start scene

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

const renderer = new THREE.WebGLRenderer({
  canvas: document.querySelector('#bg'),
});

renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
camera.position.set(15,15,15);
renderer.render(scene, camera);

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


// Scroll Animation (modify to fit new solar system)

function moveCamera() {
  const t = document.body.getBoundingClientRect().top;
  
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
  
  renderer.render(scene, camera);
  
}

animate();