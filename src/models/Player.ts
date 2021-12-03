import { Hand } from './Hand';

export class Player {
  readonly hand: any;

  constructor(cards: string) {
    if (cards) {
      const newHand = new Hand(cards);
      this.hand = {
        rank: newHand.bestRank,
        kicker: newHand.kicker,
        value: newHand.value,
        highCard: newHand.highCard,
        cards,
      };
    }
  }
}