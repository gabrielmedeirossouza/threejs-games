import { GameScript, GameObject } from '../../../Core';

export class DestroyOutsideRange extends GameScript {
    private range: number;

    constructor(gameObject: GameObject, range = 50) {
        super(gameObject);
        this.range = range;
    }

    public update() {
        if (this.gameObject.position.z > this.range) {
            this.gameObject.parent?.remove(this.gameObject);
        }
    }
}
