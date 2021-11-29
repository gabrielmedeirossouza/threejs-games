import { GameLoop } from './Core';
import * as Games from './Games';

const { FlappyBirdGame } = Games;

const gameLoop = new GameLoop(FlappyBirdGame);
gameLoop.start();
