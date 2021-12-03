import { Player } from './Player';

const player = new Player('6H 6C JC 3D 3S');

test('Player should have cards', () => {
  expect(player.hand).toBeTruthy();
});