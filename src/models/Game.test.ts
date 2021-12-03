import { Game } from './Game';

test('new game reads txt file', () => {
  const game = new Game();
  expect(game.allHands).toBeTruthy();
});

test('player 1 should win the hand', () => {
  const game = new Game();
  game.allHands = ['6H 6C JC 3D 3S 6D 6S JC 4D 7S'];
  game.play();

  expect(game.player1Wins).toEqual(1);
  expect(game.player2Wins).toEqual(0);
});

test('player 2 should win the hand', () => {
  const game = new Game();
  game.allHands = ['4H 4D JS KH 7S 8H 8D 9H 2S 4C'];
  game.play();

  expect(game.player1Wins).toEqual(0);
  expect(game.player2Wins).toEqual(1);
});

test('player 1 should win the game', () => {
  const game = new Game();
  game.allHands = [
    '8C TS KC 9H 4S 7D 2S 5D 3S AC',
    '5C AD 5D AC 9C 7C 5H 8D TD KS',
    '3H 7H 6S KC JS QH TD JC 2D 8S',
    'TH 8H 5C QS TC 9H 4D JC KS JS',
    '7C 5H KC QH JD AS KH 4C AD 4S'
  ];
  game.play();

  expect(game.player1Wins).toEqual(2);
  expect(game.player2Wins).toEqual(3);
});

test('Same pairs should return Player 2 as winner because of higher kicker', () => {
  const game = new Game();
  game.allHands = ['2S 2D 7S 8C KC 2C 2H 4D AD JH']
  game.play();

  expect(game.player1Wins).toEqual(0);
  expect(game.player2Wins).toEqual(1);
});