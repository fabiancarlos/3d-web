const app = new WHS.App([
  new WHS.ElementModule({
    container: document.getElementById('app')
  }),
  new WHS.SceneModule(),
  new WHS.CameraModule({
    position: {
      y: 20,
      x: -50,
      z: 0
    }
  }),
  new WHS.RenderingModule({
    bgColor: '#222222',

    renderer: {
      antialias: true,
      shadowmap: {
        type: THREE.PCFSoftShadowMap
      }
    }
  }, {shadow: true}),
  new WHS.OrbitControlsModule(),
  new WHS.ResizeModule()
]);

// Sphere
const sphere = new WHS.Sphere({ // Create sphere comonent.
  geometry: {
    radius: 5,
    widthSegments: 65,
    heightSegments: 65
  },

  material: new THREE.MeshPhongMaterial({
    color: 0xF2F2F2
  }),

  position: new THREE.Vector3(20, 5, 10)
});

sphere.addTo(app);

var positionDistnace = 4.25;
document.addEventListener('keydown', function(event){
  if(event.keyCode == 39) {
    rightPressed = true;
    sphere.position.z += positionDistnace;
  }else if(event.keyCode == 37) {
    leftPressed = true;
    sphere.position.z -= positionDistnace;
  }
  if(event.keyCode == 40) {
    downPressed = true;
    sphere.position.x -= positionDistnace;
  }else if(event.keyCode == 38) {
    upPressed = true;
    sphere.position.x += positionDistnace;
  }
  console.log("down", sphere.position.x);
}, true);

// Plane
new WHS.Plane({
  geometry: {
    width: 100,
    height: 100
  },

  material: new THREE.MeshPhongMaterial({color: 0x447F8B}),

  rotation: {
    x: -Math.PI / 2
  }
}).addTo(app);

// Lights
new WHS.PointLight({
  light: {
    intensity: 0.8,
    distance: 100
  },

  shadow: {
    fov: 90
  },

  position: new THREE.Vector3(0, 10, 10)
}).addTo(app);

new WHS.AmbientLight({
  light: {
    intensity: 0.4
  }
}).addTo(app);

// Start the app
app.start();
