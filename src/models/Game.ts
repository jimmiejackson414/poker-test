const fs = require('fs');

import { Player } from './Player';

export class Game {
  allHands: string[];
  player1: Player | null;
  player1Wins: number = 0;
  player2: Player | null;
  player2Wins: number = 0;
  gameData: Array<any> = [];

  constructor() {
    this.allHands = fs.readFileSync('./src/poker.txt').toString().split('\n');
    this.player1 = null;
    this.player2 = null;
  }

  formatWinner(winner: Player, loser: Player, wins: string) {
    this[wins] += 1;
    this.gameData.push({ 'Player': 'NEW HAND' });
    this.gameData.push({ 'Player': 'Player 1', 'Hand': winner.hand.cards, 'Rank': winner.hand.rank, 'Is Winner?': String.fromCodePoint(0x1F603) });
    this.gameData.push({ 'Player': 'Player 2', 'Hand': loser.hand.cards, 'Rank': loser.hand.rank, 'Is Winner?': String.fromCodePoint(0x1F621) });
    this.gameData.push({ 'Player': '-----', 'Hand': '-----', 'Rank': '-----', 'Is Winner?': '-----' });
  }

  determineGameWinner() {
    console.log('********************')
    console.table(this.gameData);
    console.log('***** TOTALS *****')
    console.log(`Player 1 Wins: ${this.player1Wins}`)
    console.log(`Player 2 Wins: ${this.player2Wins}`)
    console.log(`${this.player1Wins > this.player2Wins ? 'Player 1 is the Winner!' : 'Player 2 is the Winner!'}`)
  }

  determineHandWinner() {
    // if players have same hand value
    if (this.player1.hand.value === this.player2.hand.value) {
      // first determine if player1 has higher matching hand
      // e.g. if player1 has pair of 8s and player2 has pair of 4s
      if (this.player1.hand.highCard > this.player2.hand.highCard) {
        this.formatWinner(this.player1, this.player2, 'player1Wins');
      } else if (this.player1.hand.highCard < this.player2.hand.highCard) {
          this.formatWinner(this.player2, this.player1, 'player2Wins');
      } else {
        // otherwise, determine if player1 has higher kicker
        if (this.player1.hand.kicker > this.player2.hand.kicker) {
          this.formatWinner(this.player1, this.player2, 'player1Wins');
        // if player2 has higher kicker
        } else {
          this.formatWinner(this.player2, this.player1, 'player2Wins');
        }
      }
    // if player1 has better hand
    } else if (this.player1.hand.value > this.player2.hand.value) {
      this.formatWinner(this.player1, this.player2, 'player1Wins');
    // if player2 has better hand
    } else {
        this.formatWinner(this.player2, this.player1, 'player2Wins');
    }
  }

  play() {
    for (const x of this.allHands) {
      const hands = x.match(/\b[\w']+(?:[^\w\n]+[\w']+){0,4}\b/g);

      if (hands) {
        this.player1 = new Player(hands[0]);
        this.player2 = new Player(hands[1]);
      }
      this.determineHandWinner();
    }
  }
}