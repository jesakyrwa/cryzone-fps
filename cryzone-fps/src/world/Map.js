import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";
import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";

export class Map {
  constructor(game){
    const floor = new THREE.Mesh(
      new THREE.PlaneGeometry(200,200),
      new THREE.MeshStandardMaterial({color:0x111111})
    );
    floor.rotation.x = -Math.PI/2;
    game.scene.add(floor);

    const floorBody = new CANNON.Body({
      type: CANNON.Body.STATIC,
      shape: new CANNON.Plane()
    });
    floorBody.quaternion.setFromEuler(-Math.PI/2,0,0);
    game.physics.world.addBody(floorBody);

    game.scene.add(new THREE.HemisphereLight(0xffffff,0x444444,1));
  }
}
