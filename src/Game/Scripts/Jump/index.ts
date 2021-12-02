import { GameObject, GameScript } from '../../../Core';

// todo: refatorar isso, está de doer a baga dos olhos
export class Jump extends GameScript {
    private arrowUp: boolean = false;

    private arrowDown: boolean = false;

    constructor(gameObject: GameObject) {
        super(gameObject);
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

    update() {
        if (this.arrowUp && this.gameObject.position.y < 300) {
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
