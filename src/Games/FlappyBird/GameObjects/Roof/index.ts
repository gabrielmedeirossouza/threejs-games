import {
  LineBasicMaterial, Vector3, BufferGeometry, Line, Group,
} from 'three';

import { MoveForward } from '../../Scripts/MoveForward';
import { DestroyOutsideRange } from '../../Scripts/DestroyOutsideRange';

type TScripts = IScripts[];
interface IScripts {
  update: () => void;
}

export class Roof {
  private material: LineBasicMaterial;

  private geometry: BufferGeometry;

  private scripts: TScripts = [];

  private gameObject: Group;

  constructor() {
    this.gameObject = new Group();
    this.material = new LineBasicMaterial({ color: 0x00ff00 });
    this.geometry = new BufferGeometry();

    const points = [];
    points.push(new Vector3(-90, 0, 0));
    points.push(new Vector3(0, 90, 0));
    points.push(new Vector3(90, 0, 0));

    points.push(new Vector3(90, 0, -90));

    points.push(new Vector3(0, 90, -90));
    points.push(new Vector3(0, 90, 0));
    points.push(new Vector3(0, 90, -90));
    points.push(new Vector3(-90, 0, -90));
    points.push(new Vector3(-90, 0, 0));

    this.geometry.setFromPoints(points);

    const object = new Line(this.geometry, this.material);

    this.gameObject.add(object);

    this.subscribeScripts();
  }

  private subscribeScripts() {
    const moveForward = new MoveForward(this.gameObject, 20);
    const destroyOutsideRange = new DestroyOutsideRange(this.gameObject, 1500);

    this.scripts = [moveForward, destroyOutsideRange];
  }

  public getGameObject() {
    return this.gameObject;
  }

  public update() {
    this.scripts.forEach((script) => script.update());
  }
}
