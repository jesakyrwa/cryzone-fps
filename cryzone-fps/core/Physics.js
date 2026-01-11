import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";

export class Physics {
  constructor(){
    this.world = new CANNON.World({
      gravity: new CANNON.Vec3(0, -9.82, 0)
    });
    this.world.broadphase = new CANNON.SAPBroadphase(this.world);
  }

  update(dt){
    this.world.step(1/60, dt);
  }
}
