import { GameFramework } from "./GameFramework";

export class Game extends GameFramework {
    private readonly missedGuesses: number;
    private readonly correctGuesses: number;
    private readonly lettersGuessed: string[];
    private readonly currentWordState: string[];
    private readonly playerId: number;
    private readonly wordBeingGuessed: string;

    constructor(missedGuesses : number, correctGuesses : number, lettersGuessed : string[],
                currentWordState : string[], playerId : number, chosenWordForTheGame : string) {
        super();
        this.missedGuesses = missedGuesses;
        this.correctGuesses = correctGuesses;
        this.lettersGuessed = lettersGuessed;
        this.currentWordState = currentWordState;
        this.playerId = playerId;
        this.wordBeingGuessed = chosenWordForTheGame;
    }

    getMissedGuesses() : number {
        return this.missedGuesses;
    }

    getCorrectGuesses() : number {
        return this.correctGuesses;
    }

    getLettersGuessed() : string[] {
        return this.lettersGuessed;
    }

    getCurrentWordState() : string[] {
        return this.currentWordState;
    }

    getPlayerId() : number {
        return this.playerId;
    }

    getWordBeingGuessed() : string {
        return this.wordBeingGuessed;
    }

    isNull() : boolean {
        return false;
    }
}