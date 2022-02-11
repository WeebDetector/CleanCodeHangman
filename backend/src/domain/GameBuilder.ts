import { Game } from "./Game";

export class GameBuilder {
    private readonly missedGuesses: number;
    private readonly lettersGuessed: string[];
    private readonly currentWordState: Map<number, string>;
    private readonly playerId: number;
    private readonly wordBeingGuessed: string;

    private constructor(missedGuesses : number, lettersGuessed : string[],
        currentWordState : Map<number, string>, playerId : number, chosenWordForTheGame : string) {
            this.missedGuesses = missedGuesses;
            this.lettersGuessed = lettersGuessed;
            this.currentWordState = currentWordState;
            this.playerId = playerId;
            this.wordBeingGuessed = chosenWordForTheGame;
    }

    static init(playerId : number, gameWord : string) : GameBuilder {
        return new GameBuilder(0, new Array(), new Map<number, string>(), playerId, gameWord);
    }

    static of(game: Game): GameBuilder {
        return new GameBuilder(game.getMissedGuesses(), game.getLettersGuessed(),
                               game.getCurrentWordState(), game.getPlayerId(), game.getWordBeingGuessed());
    }

    setMissedGuesses(missedGuesses : number) : GameBuilder {
        return new GameBuilder(missedGuesses, this.lettersGuessed, this.currentWordState, this.playerId, this.wordBeingGuessed);
    }

    setLettersGuessed(lettersGuessed : string[]) : GameBuilder {
        return new GameBuilder(this.missedGuesses, lettersGuessed, this.currentWordState, this.playerId, this.wordBeingGuessed);
    }

    setCurrentWordState(currentWordState : Map<number, string>) : GameBuilder {
        return new GameBuilder(this.missedGuesses, this.lettersGuessed, currentWordState, this.playerId, this.wordBeingGuessed);
    }

    build() : Game {
        return new Game(this.missedGuesses, this.lettersGuessed, this.currentWordState, this.playerId, this.wordBeingGuessed);
    }
}