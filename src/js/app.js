import Game, { GameSavingData, readGameSaving as LoadGame, writeGameSaving as saveGame } from './game.js';

const game = new Game();
game.start();
