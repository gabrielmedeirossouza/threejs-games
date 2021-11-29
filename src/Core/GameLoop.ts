type Game = new () => GameInterface;

interface GameInterface {
  start(): void;
  update(currentTime: number): void;
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

  private loop(currentTime: number = 0) {
    this.game.update(currentTime);

    requestAnimationFrame((e) => this.loop(e));
  }
}
