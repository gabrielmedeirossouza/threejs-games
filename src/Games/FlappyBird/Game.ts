import { GameBuilder } from '../../Core';

import { Environment, Bird, Roof } from './GameObjects';

export class Game extends GameBuilder {
  private spawn = 0;

  public async start() {
    const environment = new Environment();
    const bird = new Bird();
    const roof = new Roof();

    this.gameObjects = [
      environment,
      bird,
      roof,
    ];

    this.camera.position.set(-1200, 200, 400);
    this.camera.lookAt(bird.getGameObject().position);

    this.gameObjects.forEach((gameObject) => {
      const go = gameObject.getGameObject();
      this.scene.add(go);
    });
  }

  public update(currentTime: number) {
    this.gameObjects.forEach((gameObject) => {
      if (gameObject?.update) {
        gameObject.update();
      }
    });

    if (this.spawn + 2000 < currentTime) {
      const roof = new Roof();
      roof.getGameObject().position.set(0, Math.round((Math.random() * 1000) - 500), 1400);
      this.gameObjects.push(roof);
      this.scene.add(roof.getGameObject());
      this.spawn = currentTime;
    }

    this.renderer.render(this.scene, this.camera);
  }
}
