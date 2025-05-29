class Deck {
    constructor() {
        this.deck = [];
    }

    createDeck() {
        const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
        const values = [
            'Ace', '2', '3', '4', '5', '6', '7',
            '8', '9', '10', 'Jack', 'Queen', 'King'
        ];
        for (let suit of suits) {
            for (let value of values) {
                this.deck.push(`${value} of ${suit}`);
            }
        }
    }

    shuffleDeck() {
        for (let i = this.deck.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [this.deck[i], this.deck[j]] = [this.deck[j], this.deck[i]];
        }
    }
}

class Game {
    constructor() {
        this.player1 = {
            name: 'Player 1',
            score: 0,
            hand: []
        };
        this.player2 = {
            name: 'Player 2',
            score: 0,
            hand: []
        };
    }

    playGame() {
        const deck = new Deck();
        deck.createDeck();
        deck.shuffleDeck();

        while (deck.deck.length > 0) {
            this.player1.hand.push(deck.deck.pop());
            this.player2.hand.push(deck.deck.pop());
        }


        for (let i = 0; i < this.player1.hand.length; i++) {
            const card1 = this.player1.hand[i];
            const card2 = this.player2.hand[i];

                        const getValue = card => {
                const valueStr = card.split(' ')[0];
                if (valueStr === 'Ace') return 14;
                if (valueStr === 'King') return 13;
                if (valueStr === 'Queen') return 12;
                if (valueStr === 'Jack') return 11;
                return parseInt(valueStr);
            };

            const value1 = getValue(card1);
            const value2 = getValue(card2);

            if (value1 > value2) {
                this.player1.score++;
            } else if (value2 > value1) {
                this.player2.score++;
            }
        }

        console.log(this.player1.hand);
        console.log(this.player2.hand);
        console.log(`${this.player1.name} score: ${this.player1.score}`);
        console.log(`${this.player2.name} score: ${this.player2.score}`);
    }
}

const game = new Game();
game.playGame();