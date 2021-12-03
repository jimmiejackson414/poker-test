import { Hand } from './Hand';

test('Hand should return one pair', () => {
  const allCards = '6H 6C JC 3D 7S';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
  const faces = cards
    .map(a => String.fromCharCode.apply(null, [77 - hand.order.indexOf(a[0])]))
    .sort();

  expect(hand.isOnePair(faces)).toBeTruthy();
});

test('Hand should return two pair', () => {
  const allCards = '6H 6C JC 3D 3S';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
  const faces = cards
    .map(a => String.fromCharCode.apply(null, [77 - hand.order.indexOf(a[0])]))
    .sort();

  expect(hand.isTwoPairs(faces)).toBeTruthy();
});

test('Hand should return three of a kind', () => {
  const allCards = '6H 6C JC 6D 3S';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
  const faces = cards
    .map(a => String.fromCharCode.apply(null, [77 - hand.order.indexOf(a[0])]))
    .sort();

  expect(hand.isThreeOfAKind(faces)).toBeTruthy();
});

test('Hand should return straight', () => {
  const allCards = '2H 3C 4C 5D 6S';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
    const faces = cards
      .map(a => String.fromCharCode.apply(null, [77 - hand.order.indexOf(a[0])]))
      .sort();

  expect(hand.isStraight(faces)).toBeTruthy();
});

test('Hand should return flush', () => {
  const allCards = '6H 7H JH 3H AH';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
  const suits = cards.map(c => c[1]).sort();

  expect(hand.isFlush(suits)).toBeTruthy();
});

test('Hand should return full house', () => {
  const allCards = '6H 6C 6D 3D 3S';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
  const faces = cards
    .map(a => String.fromCharCode.apply(null, [77 - hand.order.indexOf(a[0])]))
    .sort();

  expect(hand.isFullHouse(faces)).toBeTruthy();
});

test('Hand should return four of a kind', () => {
  const allCards = '2H 2C 2S 2D 3S';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
  const faces = cards
    .map(a => String.fromCharCode.apply(null, [77 - hand.order.indexOf(a[0])]))
    .sort();

  expect(hand.isFourOfAKind(faces)).toBeTruthy();
});

test('Hand should return straight flush', () => {
  const allCards = '5H 6H 7H 8H 9H';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
  const faces = cards
    .map(a => String.fromCharCode.apply(null, [77 - hand.order.indexOf(a[0])]))
    .sort();
  const suits = cards.map(c => c[1]).sort();

  expect(hand.isStraightFlush(faces, suits)).toBeTruthy();
});

test('Hand should return royal flush', () => {
  const allCards = 'TS JS QS KS AS';
  const hand = new Hand(allCards);
  const cards = allCards.split(' ');
    const faces = cards
      .map(a => String.fromCharCode.apply(null, [77 - hand.order.indexOf(a[0])]))
      .sort();
    const suits = cards.map(c => c[1]).sort();

  expect(hand.isRoyalFlush(faces, suits)).toBeTruthy();
});