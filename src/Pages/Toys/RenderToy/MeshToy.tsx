import * as THREE from "three";
export default function MeshToy() {
  const size = 100;
  const points = [];
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      for (let k = 0; k < size; k++) {
        points.push(new THREE.Vector2());
      }
    }
  }
  const mesh = new THREE.Shape();

  return mesh;
}
