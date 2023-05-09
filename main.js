import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';



// global variables
let scene;
let camera;
let renderer;
const canvas1 = document.querySelector('.webgl');

// scene setup
scene = new THREE.Scene();

// camera setup
const fov = 60;
const aspect = (window.innerWidth) / (window.innerHeight+115);
const near = 0.1;
const far = 1000;

camera = new THREE.PerspectiveCamera(fov, aspect, near, far);


camera.position.z = 2.3;
scene.add(camera);

// renderer setup
renderer = new THREE.WebGLRenderer({
    canvas: canvas1,
    antialias: true,
});
renderer.setSize(window.innerWidth , window.innerHeight +115);
renderer.setPixelRatio((window.devicePixelRatio) ? window.devicePixelRatio : 1);
renderer.autoClear = false;
renderer.setClearColor(0x000000, 0.0);
const earthTexture = new THREE.TextureLoader().load('texture/earthimg.jpg');
const spaceTexture = new THREE.TextureLoader().load('texture/galaxy.png');
const bumpTexture = new THREE.TextureLoader().load('texture/earthbump.jpg');
const cloudTexture = new THREE.TextureLoader().load('texture/earthCloud.png');

// orbit control setup
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.enablePan = false;
controls.enableZoom = false;


// earth geometry
const earthGeometry = new THREE.SphereGeometry(0.6 , 32, 32);

// earth material
const earthMaterial = new THREE.MeshPhongMaterial({
    roughness: 1,
    metalness: 0,
    map: earthTexture,
    bumpMap: bumpTexture,
    bumpScale: 0.3
});

// earth mesh
const earthMesh = new THREE.Mesh(earthGeometry, earthMaterial);
scene.add(earthMesh);

// cloud Geometry
const cloudGeometry = new THREE.SphereGeometry(0.63, 32, 32);

// cloud metarial
const cloudMetarial = new THREE.MeshPhongMaterial({
    map: cloudTexture,
    transparent: true,
});

// cloud mesh
const cloudMesh = new THREE.Mesh(cloudGeometry, cloudMetarial);
scene.add(cloudMesh);

// galaxy geometry
const starGeometry = new THREE.SphereGeometry(80, 64, 64);

// galaxy material
const starMaterial = new THREE.MeshBasicMaterial({
    map : spaceTexture,
    side: THREE.BackSide
});

// galaxy mesh
const starMesh = new THREE.Mesh(starGeometry, starMaterial);
scene.add(starMesh);

// ambient light
const ambientlight = new THREE.AmbientLight(0xffffff, 0.4);
scene.add(ambientlight);

// point light
const pointLight = new THREE.PointLight(0xffffff, 0.6)
pointLight.position.set(5, 3, 5);
scene.add(pointLight);

// point light helper
// const Helper = new THREE.PointLightHelper(pointLight);
// scene.add(Helper);

// handling resizing
window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
    render();
}, false);





// spinning animation
const animate = () => {
    requestAnimationFrame(animate);
    // starMesh.rotation.y -= 0.00092  ;
    earthMesh.rotation.y -= 0.0015;
    cloudMesh.rotation.y -= 0.002;
    // galaxyMesh.rotation.y-=0.005;
    // hgMesh.rotation.y -= 0.01;
    controls.update();
    render();
    
};

// rendering
const render = () => {
    renderer.render(scene, camera);
}

animate();




function movecamera(){
    const t = document.body.getBoundingClientRect().top;
    // starMesh.rotation.y -= 0.009;
    earthMesh.rotation.y -= 0.005;
    cloudMesh.rotation.y -= 0.009;



}
document.body.onscroll = movecamera;
movecamera();


const bottomNav = document.querySelector('.nav-menu');
const hamburgerMenu = document.querySelector('#menuToggle');
const menuList = document.querySelector('#menu');
let lastScrollPosition = window.pageYOffset;
    // Set initial opacity of hamburger menu to 0
    hamburgerMenu.style.opacity = 0;

    // After 2 seconds, set opacity of hamburger menu to 1
    setTimeout(function() {
      hamburgerMenu.style.opacity = 1;
    }, 3000);

window.addEventListener('scroll', function() {
  const currentScrollPosition = window.pageYOffset;

  if (lastScrollPosition > currentScrollPosition) {
    // user is scrolling up, so show the navigation bar
    bottomNav.classList.remove('slide-up');
    bottomNav.style.opacity = 1;
    hamburgerMenu.classList.remove('visible');
  } else {
    // user is scrolling down, so hide the navigation bar
    bottomNav.classList.add('slide-up');
    bottomNav.style.opacity = 0.0; // decrease the opacity here
    if (currentScrollPosition + window.innerHeight >= document.body.scrollHeight) {
      // user has scrolled to the bottom, so show the hamburger menu
      hamburgerMenu.classList.add('visible');
      menuList.innerHTML = bottomNav.innerHTML; // copy the
    }
  }
})

$(window).on("scroll", function () {
  $(".landing").css("bottom", $(window).scrollTop() * -1);
  
});

$(document).on('scroll' , function(){
    
  $('.heading').css("transition-duration" ,   "0.6s");
  $('.heading').css("top" , Math.max(58 - 0.4*scrollY  , 18) + "%");
  $('.leftbox').css("transition-duration" ,   "0.6s");
  $('.leftbox').css("left" , Math.min(-23 + 6*scrollY , 7 )  + "%");
  $('.rightbox').css("transition-duration" ,   "0.6s");
  $('.rightbox').css("left" , Math.max(120 - 6*scrollY ,65)  + "%");

  $('.image').css("transition-duration" ,   "0.6s");
  $('.image').css("left" , Math.max(120 - 6*scrollY ,71)  + "%");
})
/*timeline*/



