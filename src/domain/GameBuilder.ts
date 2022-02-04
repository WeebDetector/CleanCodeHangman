import { Game } from "./Game";

export class GameBuilder {
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

    static of(game: Game): GameBuilder {
        return new GameBuilder(game.getMissedGuesses(), game.getCorrectGuesses(), game.getLettersGuessed(),
                               game.getCurrentWordState(), game.getPlayerId(), game.getWordBeingGuessed());
    }

    setMissedGuesses(missedGuesses : number) : GameBuilder {
        return new GameBuilder(missedGuesses, this.correctGuesses, this.lettersGuessed, this.currentWordState, this.playerId, this.wordBeingGuessed);
    }

    setCorrectGuesses(correctGuesses : number) : GameBuilder {
        return new GameBuilder(this.missedGuesses, correctGuesses, this.lettersGuessed, this.currentWordState, this.playerId, this.wordBeingGuessed);
    }

    setLettersGuessed(lettersGuessed : string[]) : GameBuilder {
        return new GameBuilder(this.missedGuesses, this.correctGuesses, lettersGuessed, this.currentWordState, this.playerId, this.wordBeingGuessed);
    }

    setCurrentWordState(currentWordState : string[]) : GameBuilder {
        return new GameBuilder(this.missedGuesses, this.correctGuesses, this.lettersGuessed, currentWordState, this.playerId, this.wordBeingGuessed);
    }

    build() : Game {
        return new Game(this.missedGuesses, this.correctGuesses, this.lettersGuessed, this.currentWordState, this.playerId, this.wordBeingGuessed);
    }
}