import { IGameEngineProps } from '../Core/GameEngine';
import { GameEngine } from '../Core';
import { Environment, Bird } from './GameObjects';

export class Game extends GameEngine {
    constructor(args: IGameEngineProps) {
        super(args);

        const environment = new Environment();
        const bird = new Bird({ position: { x: 0, y: -300, z: -300 } });

        this.addGameObjects([
            environment,
            bird,
        ]);
    }

    // eslint-disable-next-line class-methods-use-this
    protected gameLoop() { }
}
