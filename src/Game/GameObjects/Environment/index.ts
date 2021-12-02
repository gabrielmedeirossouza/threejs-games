import {
    AmbientLight, PointLight,
} from 'three';
import { GameObject } from '../../../Core';

export class Environment extends GameObject {
    constructor() {
        super();

        const light = new AmbientLight('#606060');

        const pointLight = new PointLight('tomato', 0.5);
        pointLight.position.set(0, 0, 0);

        this.gameObject.add(light);
        this.gameObject.add(pointLight);
    }
}
