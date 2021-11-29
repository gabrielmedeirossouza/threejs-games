import {
  PerspectiveCamera, Scene, WebGLRenderer, Group,
} from 'three';

type TGameObjects = IGameObject[];

interface IGameObject {
  getGameObject: () => Group;
  update?: () => void;
}

export class GameBuilder {
  private width: number;

  private height: number;

  public gameObjects: TGameObjects = [];

  public scene: Scene;

  public renderer: WebGLRenderer;

  public camera: PerspectiveCamera;

  constructor(
    fov: number = 75,
    aspect: number = window.innerWidth / window.innerHeight,
    near: number = 0.1,
    far: number = 100000,
  ) {
    this.width = window.innerWidth;
    this.height = window.innerHeight;

    this.scene = new Scene();
    this.renderer = new WebGLRenderer({ antialias: true });
    this.camera = new PerspectiveCamera(fov, aspect, near, far);

    this.startScene();
  }

  private startScene() {
    document.body.appendChild(this.renderer.domElement);

    this.renderer.setSize(this.width, this.height);
    this.camera.position.set(0, 0, 100);
    this.camera.lookAt(0, 0, 0);
  }
}
