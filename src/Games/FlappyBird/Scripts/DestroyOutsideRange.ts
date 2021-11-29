import { Group } from 'three';

export class DestroyOutsideRange {
  private gameObject: Group;

  private range: number;

  constructor(gameObject: Group, range = 50) {
    this.gameObject = gameObject;
    this.range = range;
  }

  public update() {
    if (this.gameObject.position.z > this.range) {
      this.gameObject.parent?.remove(this.gameObject);
    }
  }
}
