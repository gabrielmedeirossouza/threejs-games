import {
  AmbientLight, PointLight, Group,
} from 'three';

export class Environment {
  private gameObject: Group;

  constructor() {
    this.gameObject = new Group();

    const light = new AmbientLight('#606060');

    const pointLight = new PointLight('tomato', 0.5);
    pointLight.position.set(-2000, 500, 5000);

    this.gameObject.add(light, pointLight);
  }

  public getGameObject() {
    return this.gameObject;
  }
}
