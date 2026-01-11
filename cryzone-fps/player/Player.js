import * as CANNON from "https://cdn.jsdelivr.net/npm/cannon-es@0.20.0/dist/cannon-es.js";

export class Player {
  constructor(game){
    this.game = game;

    this.body = new CANNON.Body({
      mass: 80,
      shape: new CANNON.Sphere(0.4),
      position: new CANNON.Vec3(0,2,0),
      fixedRotation: true
    });

    game.physics.world.addBody(this.body);
  }

  update(){
    const cam = this.game.camera;
    cam.position.copy(this.body.position);
  }
}
