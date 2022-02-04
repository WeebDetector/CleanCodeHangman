export class Game {
    private readonly missedGuesses: number;
    private readonly correctGuesses: number;
    private readonly lettersGuessed: string[];
    private readonly currentWordState: string[];
    private readonly playerId: number;
    private readonly wordBeingGuessed: string;

    constructor(missedGuesses : number, correctGuesses : number, lettersGuessed : string[],
                currentWordState : string[], playerId : number, chosenWordForTheGame : string) {
        this.missedGuesses = missedGuesses;
        this.correctGuesses = correctGuesses;
        this.lettersGuessed = lettersGuessed;
        this.currentWordState = currentWordState;
        this.playerId = playerId;
        this.wordBeingGuessed = chosenWordForTheGame;
    }

    getMissedGuesses() {
        return this.missedGuesses;
    }

    getCorrectGuesses() {
        return this.correctGuesses;
    }

    getLettersGuessed() {
        return this.lettersGuessed;
    }

    getCurrentWordState() {
        return this.currentWordState;
    }

    getPlayerId() {
        return this.playerId;
    }

    getWordBeingGuessed() {
        return this.wordBeingGuessed;
    }
}