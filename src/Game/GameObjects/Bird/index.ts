import path from 'url:./models/bird.fbx';
import { GameObject } from '../../../Core';

import { Jump, TurnAroundBody } from '../../Scripts';

export class Bird extends GameObject {
    constructor({ position = { x: 0, y: 0, z: 0 }, rotation = { x: 0, y: 0, z: 0 } }) {
        super();

        this.loadFBX(path);

        this.gameObject.position.set(position.x, position.y, position.z);
        this.gameObject.rotation.set(rotation.x, rotation.y, rotation.z);

        const jump = new Jump(this);
        const turnAroundBody = new TurnAroundBody(this);

        this.addScripts([turnAroundBody, jump]);
    }
}
