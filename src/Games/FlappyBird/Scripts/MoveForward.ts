import { Group } from 'three';

export class MoveForward {
  private speed: number;

  private gameObject: Group;

  constructor(gameObject: Group, speed = 1) {
    this.gameObject = gameObject;

    this.speed = speed;
  }

  public update() {
    // alterar para +=, pois dessa forma está moveBackward
    this.gameObject.position.z -= this.speed;
  }
}
