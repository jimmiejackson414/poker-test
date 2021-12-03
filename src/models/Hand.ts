import { Rank } from '../types';

export class Hand {
  readonly order = "23456789TJQKA";
  readonly bestRank: Rank;
  highCard: number;
  value: number;
  kicker: number;

  constructor(hand: string) {
    this.bestRank = this.determineRank(hand);
  }

  matchArrays(arr1: any[], arr2: any[]) {
    return Array.isArray(arr1)
      && Array.isArray(arr2)
      && arr1.length === arr2.length
      && arr1.every((val, index) => val === arr2[index]);
  }

  count(c: { [x: string]: any; }, a: string | number) {
    c[a] = (c[a] || 0) + 1;
    return c;
  }

  duplicates(faces: string[]) {
    const counts = faces.reduce(this.count, {});
    return Object.values(counts).reduce(this.count, {});
  }

  isRoyalFlush(faces: string[], suits: string[]) {
    const royalFaces = ['A', 'B', 'C', 'D', 'E'];
    return this.matchArrays(royalFaces, faces)
      && this.isStraight(faces)
      && this.isFlush(suits);
  }

  isStraightFlush(faces: string[], suits: string[]) {
    return this.isFlush(suits) && this.isStraight(faces);
  }

  isFourOfAKind(faces: string[]) {
    return !!this.duplicates(faces)[4];
  }

  isFullHouse(faces: string[]) {
    return !!this.duplicates(faces)[3] && !!this.duplicates(faces)[2];
  }

  isFlush(suits: string[]) {
    return suits[0] === suits[4];
  }

  isStraight(faces: any[]) {
    const first = faces[0].charCodeAt(0);
    return faces.every((f, index) => f.charCodeAt(0) - first === index);
  }

  isThreeOfAKind(faces: string[]) {
    return !!this.duplicates(faces)[3];
  }

  isTwoPairs(faces: string[]) {
    return this.duplicates(faces)[2] > 1;
  }

  isOnePair(faces: string[]) {
    return this.duplicates(faces)[2] === 1;
  }

  determineRank(hand: string): any {
    const cards = hand.split(' ');
    const faces = cards.map(a => String.fromCharCode(77 - this.order.indexOf(a[0]))).sort();
    const suits = cards.map(c => c[1]).sort();

    // determine high value of hand
    // e.g. pair of 8s and pair of 4s should return a value of 8
    const sortedCards = cards
      .map(c => c[0])
      .sort((a, b) => this.order.indexOf(b[0]) - this.order.indexOf(a[0]));

    for (let index = 0; index < sortedCards.length; index++) {
      if (sortedCards[index] === sortedCards[index + 1]) {
        this.highCard = this.order.indexOf(sortedCards[index]);
      }
    }

    // determine kicker
    cards.forEach(c => {
      const cardIndex = this.order.indexOf(c[0]);
      if (!this.kicker || cardIndex > this.kicker) this.kicker = cardIndex;
    });

    if (this.isRoyalFlush(faces, suits)) {
      this.value = 10;
      return Rank.RoyalFlush;
    } else if (this.isStraightFlush(faces, suits)) {
      this.value = 9;
      return Rank.StraightFlush;
    } else if (this.isFourOfAKind(faces)) {
      this.value = 8;
      return Rank.FourOfAKind;
    } else if (this.isFullHouse(faces)) {
      this.value = 7;
      return Rank.FullHouse;
    } else if (this.isFlush(suits)) {
      this.value = 6;
      return Rank.Flush;
    } else if (this.isStraight(faces)) {
      this.value = 5;
      return Rank.Straight;
    } else if (this.isThreeOfAKind(faces)) {
      this.value = 4;
      return Rank.ThreeOfAKind;
    } else if (this.isTwoPairs(faces)) {
      this.value = 3;
      return Rank.TwoPairs;
    } else if (this.isOnePair(faces)) {
      this.value = 2;
      return Rank.OnePair;
    } else {
      this.value = 1;
      return Rank.HighCard;
    }
  }
}