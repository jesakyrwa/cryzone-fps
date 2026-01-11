import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.158/build/three.module.js";
import { PointerLockControls } from "https://cdn.jsdelivr.net/npm/three@0.158/examples/jsm/controls/PointerLockControls.js";
import { Physics } from "./Physics.js";
import { Loop } from "./Loop.js";
import { Player } from "../player/Player.js";
import { Map } from "../world/Map.js";

export class Game {
  constructor() {
    this.scene = new THREE.Scene();
    this.scene.background = new THREE.Color(0x0b0f14);

    this.camera = new THREE.PerspectiveCamera(75, innerWidth/innerHeight, 0.1, 1000);

    this.renderer = new THREE.WebGLRenderer({ antialias:true });
    this.renderer.setSize(innerWidth, innerHeight);
    document.body.appendChild(this.renderer.domElement);

    this.controls = new PointerLockControls(this.camera, document.body);

    document.getElementById("ui").onclick = () => this.controls.lock();
    this.controls.addEventListener("lock", ()=>ui.style.display="none");
    this.controls.addEventListener("unlock", ()=>ui.style.display="flex");

    this.scene.add(this.controls.getObject());

    this.physics = new Physics();
    this.player = new Player(this);
    this.map = new Map(this);

    this.loop = new Loop(this);
  }

  start() {
    this.loop.start();
  }

  render() {
    this.renderer.render(this.scene, this.camera);
  }
}

