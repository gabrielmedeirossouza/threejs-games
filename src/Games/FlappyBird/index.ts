import {
  LineBasicMaterial, PerspectiveCamera, Scene, WebGLRenderer, Vector3, BufferGeometry, Line,
} from 'three';

export class FlappyBird {
  private width: number;

  private height: number;

  constructor() {
    this.width = window.innerWidth;
    this.height = window.innerHeight;
  }

  public start() {
    const scene = new Scene();
    const renderer = new WebGLRenderer();

    renderer.setSize(this.width, this.height);

    document.body.appendChild(renderer.domElement);

    const camera = new PerspectiveCamera(75, this.width / this.height, 0.1, 1000);
    camera.position.set(0, 0, 100);
    camera.lookAt(0, 0, 0);

    const material = new LineBasicMaterial({ color: 0x00ff00 });
    const points = [];
    points.push(new Vector3(-10, 0, 0));
    points.push(new Vector3(0, 10, 0));
    points.push(new Vector3(10, 0, 0));

    const geometry = new BufferGeometry().setFromPoints(points);

    const line = new Line(geometry, material);

    scene.add(line);

    renderer.render(scene, camera);
  }
}
