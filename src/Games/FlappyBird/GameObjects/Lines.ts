import {
  LineBasicMaterial, Vector3, BufferGeometry, Line,
} from 'three';

export class Lines {
  private material: LineBasicMaterial;

  private geometry: BufferGeometry;

  private line: Line;

  constructor() {
    this.material = new LineBasicMaterial({ color: 0x00ff00 });
    this.geometry = new BufferGeometry();

    const points = [];
    points.push(new Vector3(-10, 0, 0));
    points.push(new Vector3(0, 10, 0));
    points.push(new Vector3(10, 0, 0));

    this.geometry.setFromPoints(points);

    this.line = new Line(this.geometry, this.material);
  }

  public create() {
    return this.line;
  }
}
