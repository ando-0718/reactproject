import { useEffect } from 'react'
import './App.css'
import * as THREE from "three"
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';


function App() {
  let canvas: HTMLCanvasElement;
  let model: THREE.Group;
  useEffect(() => {
    canvas = document.getElementById("canvas") as HTMLCanvasElement;

    const sizes = {
      width: innerWidth,
      height: innerHeight,
    };

    const scene: THREE.Scene = new THREE.Scene();

    const camera: THREE.PerspectiveCamera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 1000);
    // 
    camera.position.set(-6, 3, 10);

    const renderer: THREE.WebGLRenderer = new THREE.WebGLRenderer({
      canvas: canvas,
      antialias: true,
      alpha: true,
    });
    renderer.setSize(sizes.width, sizes.height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // const geometry: THREE.BoxGeometry = new THREE.BoxGeometry( 1, 1, 1 ); 
    // const material: THREE.MeshBasicMaterial = new THREE.MeshBasicMaterial( {color: 0x00ff00} ); 
    // const cube: THREE.Mesh = new THREE.Mesh( geometry, material ); 
    // scene.add( cube );

    const gltfLoader: GLTFLoader = new GLTFLoader();

    let mixer: THREE.AnimationMixer;

    gltfLoader.load("./models/animation.gltf", (gltf) => {
      model = gltf.scene;
      // model.scale.set(1.3, 1.3, 1.3);
      model.scale.set(0.001, 0.001, 0.001);
      model.rotation.y = -Math.PI / 3;

      scene.add(model);

      mixer = new THREE.AnimationMixer(model);
      const clips = gltf.animations;
      clips.forEach(function (clip) {
        const action = mixer.clipAction(clip);
        action.play();
      })

    });

    const ambientLight: THREE.AmbientLight = new THREE.AmbientLight(0xffffff, 3);
    scene.add(ambientLight);
    const pointLight = new THREE.PointLight(0xffffff, 3, 100);
    scene.add(pointLight);

    const tick = () => {
      renderer.render(scene, camera);

      if(mixer) {
        mixer.update(0.1);
      }
      requestAnimationFrame(tick);
    };
    tick();
  }, []);

  return (
    <>
      <canvas id='canvas'></canvas>
      <div className='mainContent'>
        <h3>Shin Code</h3>
        <p>Web DeveLoper</p>
      </div>
    </>
  )
}

export default App
