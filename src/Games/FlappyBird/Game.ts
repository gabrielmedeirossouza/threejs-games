import {
  PerspectiveCamera, Scene, WebGLRenderer,
} from 'three';

import { Lines } from './GameObjects';

export class Game {
  private width: number;

  private height: number;

  private scene: Scene;

  private renderer: WebGLRenderer;

  private camera: PerspectiveCamera;

  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new Scene();
    this.renderer = new WebGLRenderer();
    this.camera = new PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
  }

  public start() {
    document.body.appendChild(this.renderer.domElement);

    this.renderer.setSize(this.width, this.height);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);

    const lines = new Lines().create();

    this.scene.add(lines);
  }

  public update() {
    this.renderer.render(this.scene, this.camera);
  }
}
