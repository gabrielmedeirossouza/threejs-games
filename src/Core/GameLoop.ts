type Game = new () => GameInterface;

interface GameInterface {
  start(): void;
  update(): void;
}

export class GameLoop {
  private game;

  constructor(Game: Game) {
    this.game = new Game();
  }

  public start() {
    this.game.start();
    this.loop();
  }

  private loop() {
    this.game.update();

    requestAnimationFrame(() => this.loop());
  }
}
