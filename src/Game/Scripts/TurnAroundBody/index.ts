import { GameScript } from '../../../Core';

export class TurnAroundBody extends GameScript {
    update() {
        this.gameObject.rotation.y += 0.01;
    }
}
