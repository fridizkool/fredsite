import { useRef } from "react";
import { useEffect } from "react";
import * as THREE from "three";

const sizes = {
  width: 800,
  height: 600,
};

export default function CanvasToy() {
  const canvas = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
    camera.position.z = 20;
    const renderer = new THREE.WebGLRenderer();
    if (canvas.current) canvas.current.appendChild(renderer.domElement);
    renderer.domElement.id = "canvas toy";

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
    // const objLoader = new OBJLoader();
    // objLoader.load("monkey.obj", (root) => scene.add(root));
    const mesh = new THREE.Mesh(geometry, material);
    scene.add(mesh);
    scene.add(camera);
    renderer.setSize(sizes.width, sizes.height);
    renderer.render(scene, camera);
    const animate = function () {
      requestAnimationFrame(animate);
      mesh.rotation.x += 0.01;
      mesh.rotation.y += 0.01;
      renderer.render(scene, camera);
    };
    animate();
  }, [canvas]);

  return (
    <>
      <div ref={canvas}></div>
    </>
  );
}
