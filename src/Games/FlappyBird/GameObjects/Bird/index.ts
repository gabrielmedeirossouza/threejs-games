import { Group } from 'three';
import { FBXLoader } from 'three/examples/jsm/loaders/FBXLoader';

import path from 'url:./bird.fbx';

import { Jump } from '../../Scripts';

type TScripts = IScripts[];

interface IScripts {
  update: () => void;
}

export class Bird {
  private scripts: TScripts = [];

  private gameObject = new Group();

  constructor() {
    this.start();
    this.subscribeScripts();
  }

  private async start() {
    const loader = new FBXLoader();
    const go = await loader.loadAsync(path);

    this.gameObject.add(go);
  }

  private subscribeScripts() {
    const jump = new Jump(this.gameObject);

    this.scripts = [jump];
  }

  public getGameObject() {
    return this.gameObject;
  }

  public update() {
    this.scripts.forEach((script) => {
      script.update();
    });
  }
}
