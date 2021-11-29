import { Group } from 'three';

// todo: refatorar isso, está de doer os olhos
export class Jump {
  private gameObject: Group;

  private arrowUp: boolean = false;

  private arrowDown: boolean = false;

  constructor(gameObject: Group) {
    this.gameObject = gameObject;

    document.addEventListener('keydown', (event) => {
      if (event.key === 'ArrowUp') {
        this.arrowUp = true;
      }

      if (event.key === 'ArrowDown') {
        this.arrowDown = true;
      }
    });

    document.addEventListener('keyup', (event) => {
      if (event.key === 'ArrowUp') {
        this.arrowUp = false;
      }

      if (event.key === 'ArrowDown') {
        this.arrowDown = false;
      }
    });
  }

  public update() {
    if (this.arrowUp && this.gameObject.position.y < 600) {
      this.gameObject.position.y += 20;
      this.gameObject.rotation.x = -0.6;
    } else if (this.arrowDown && this.gameObject.position.y > -200) {
      this.gameObject.position.y -= 20;
      this.gameObject.rotation.x = 0.6;
    } else {
      this.gameObject.rotation.x = 0;
    }
  }
}
