# Game Play Network

## Poker Test Assignment
In the card game poker, a hand consists of five cards and are ranked, from lowest to highest, in the following way:

- High Card: Highest value card.
- One Pair: Two cards of the same value.
- Two Pairs: Two different pairs.
- Three of a Kind: Three cards of the same value.
- Straight: All cards are consecutive values.
- Flush: All cards of the same suit.
- Full House: Three of a kind and a pair.
- Four of a Kind: Four cards of the same value.
- Straight Flush: All cards are consecutive values of same suit.
- Royal Flush: Ten, Jack, Queen, King, Ace, in same suit.

The cards are valued in the order: 2, 3, 4, 5, 6, 7, 8, 9, 10, Jack, Queen, King, Ace.
If two players have the same ranked hands then the rank made up of the highest value wins; for example, a pair of eights beats a pair of fives (see example 1 below). But if two ranks tie, for example, both players have a pair of queens, then highest cards in each hand are compared (see example 4 below); if the highest cards tie then the next highest cards are compared, and so on.
Attached is a file that contains one-thousand random hands dealt to two players. Each line of the file contains ten cards (separated by a single space): the first five are Player 1's cards and the last five are Player 2's cards. You can assume that all hands are valid (no invalid characters or repeated cards), each player's hand is in no specific order, and in each hand there is a clear winner.
Please build an application that showcases all the hands, what hand each player had and who won for each. There must be a tally for the total number of wins for each player. Tests are also a required element and must (at the minimum) show the happy path for the application. The visual does not have to be elegantly designed, but the data presented must be logically grouped and organized so it is very clear what is being presented.

## Installation
To install all of the necessary packages, make sure you are in the root directory and run:
```bash
npm install
```

## Usage
To run the program (and after everything is installed from the previous step), simply run:
```bash
npm start
```
This will run the Typescript compiler and watch for any file changes automatically.