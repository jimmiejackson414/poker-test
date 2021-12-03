import { Game } from './models/Game';

class App {
  constructor() {
    const game = new Game();
    game.play();
    game.determineGameWinner();
  }
}

new App();