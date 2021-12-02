import { Group } from 'three';
import { GameObject } from '../GameObject';

interface TUpdateProps {
    currentTime?: number;
    deltaTime?: number;
    fps?: number;
}

export abstract class GameScript {
    public gameObject: Group;

    constructor(gameObject: GameObject) {
        this.gameObject = gameObject.gameObject;
    }

    public abstract update({ currentTime, deltaTime, fps }: TUpdateProps): void;
}
