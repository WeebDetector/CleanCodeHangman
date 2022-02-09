import { GameBuilder } from "./GameBuilder";
import { GuessResponse } from "./GuessResponse";

export class Game {
    private readonly missedGuesses: number;
    private readonly lettersGuessed: string[];
    private readonly currentWordState: string[];
    private readonly playerId: number;
    private readonly wordBeingGuessed: string;

    constructor(missedGuesses : number, lettersGuessed : string[],
                currentWordState : string[], playerId : number, chosenWordForTheGame : string) {
        this.missedGuesses = missedGuesses;
        this.lettersGuessed = lettersGuessed;
        this.currentWordState = currentWordState;
        this.playerId = playerId;
        this.wordBeingGuessed = chosenWordForTheGame;
    }

    getMissedGuesses() : number {
        return this.missedGuesses;
    }

    getCorrectGuesses() : number {
        const set = new Set(this.currentWordState);
        if (set.has('_'))
            return (set.size - 1);
        return set.size;
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

    isGameOver() : 'won' | 'lost' | 'in-progress' {
        const maxMissedGuesses = 10;
        const correctGuessesRequiredToWin = this.getUniqueLettersInAWord();

        if (this.getMissedGuesses() == maxMissedGuesses)
            return 'lost';
        else if (this.getCorrectGuesses() == correctGuessesRequiredToWin)
            return 'won';
        return 'in-progress';
    }

    private getUniqueLettersInAWord() : number {
        const word = this.getWordBeingGuessed();
        const wordLetters = Array.from(word);

        return new Set(wordLetters).size;
    }

    guess(guessedLetter : string) : GuessResponse {
        if (this.lettersGuessed.includes(guessedLetter))
            throw new Error("Letter " + guessedLetter + " has already been guessed");

        const wordBeingGuessed = this.getWordBeingGuessed();
        let gameBuilder;

        gameBuilder = wordBeingGuessed.includes(guessedLetter)
                    ? this.updateGameAfterCorrectGuess(guessedLetter)
                    : this.updateGameAfterIncorrectGuess();

        this.updateLettersGuessed(gameBuilder, guessedLetter);

        const stateDescription = this.isGameOver();
        const updatedGame = gameBuilder.build();

        return new GuessResponse(updatedGame, stateDescription);;
    }

    private updateGameAfterCorrectGuess(guessedLetter : string) : GameBuilder {
        let gameBuilder = GameBuilder.of(this);
        const currentWordState = this.getCurrentWordState();
        const updatedWordState = this.updateCurrentWordState(currentWordState, guessedLetter, this.getWordBeingGuessed())

        gameBuilder = gameBuilder.setCurrentWordState(updatedWordState);

        return gameBuilder;
    }

    private updateCurrentWordState(currentWordState : string[], guessedLetter : string, wordBeingGuessed : string) : string[] {
        let letterIndex = wordBeingGuessed.indexOf(guessedLetter);
        while (letterIndex != -1) {
            if (currentWordState[letterIndex] == '_')
                currentWordState[letterIndex] = guessedLetter;
            letterIndex = wordBeingGuessed.indexOf(guessedLetter, letterIndex + 1);
        }
        return currentWordState;
    }

    private updateGameAfterIncorrectGuess() : GameBuilder {
        let gameBuilder = GameBuilder.of(this);
        const missedGuesses = this.getMissedGuesses() + 1;

        return gameBuilder.setMissedGuesses(missedGuesses);
    }

    private updateLettersGuessed(gameBuilder : GameBuilder, guessedLetter : string) : GameBuilder {
        let lettersGuessed = this.getLettersGuessed();

        lettersGuessed.push(guessedLetter);

        return gameBuilder.setLettersGuessed(lettersGuessed);;
    }
}