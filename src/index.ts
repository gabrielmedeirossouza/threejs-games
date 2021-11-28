import * as Games from './Games';
import { GameLoop } from './Core';

const { FlappyBirdGame } = Games;

const gameLoop = new GameLoop(FlappyBirdGame);
gameLoop.start();
