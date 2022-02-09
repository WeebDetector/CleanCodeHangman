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
        const uniqueSymbols = new Set(this.currentWordState);
        if (uniqueSymbols.has('_'))
            return (uniqueSymbols.size - 1);
        return uniqueSymbols.size;
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

    getGameState() : 'won' | 'lost' | 'in-progress' {
        const maxMissedGuesses = 10;
        const correctGuessesRequiredToWin = this.getUniqueLettersInAWord();

        if (this.getMissedGuesses() == maxMissedGuesses) 
            return 'lost';
        else if (this.getCorrectGuesses() == correctGuessesRequiredToWin)
            return 'won'
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

        let gameBuilder = wordBeingGuessed.includes(guessedLetter)
                    ? this.updateGameAfterCorrectGuess(guessedLetter)
                    : this.updateGameAfterIncorrectGuess();

        gameBuilder = this.updateLettersGuessed(gameBuilder, guessedLetter);

        const stateDescription = this.getGameState();
        const updatedGame = gameBuilder.build();

        return new GuessResponse(updatedGame, stateDescription);;
    }

    private updateGameAfterCorrectGuess(guessedLetter : string) : GameBuilder {
        let gameBuilder = GameBuilder.of(this);
        const updatedWordState = this.updateCurrentWordState(guessedLetter)

        return gameBuilder.setCurrentWordState(updatedWordState);
    }

    private updateCurrentWordState(guessedLetter : string) : string[] {
        let currentWordState = this.getCurrentWordState();
        let letterIndex = this.wordBeingGuessed.indexOf(guessedLetter);
        while (letterIndex != -1) {
            if (currentWordState[letterIndex] == '_')
                currentWordState[letterIndex] = guessedLetter;
            letterIndex = this.wordBeingGuessed.indexOf(guessedLetter, letterIndex + 1);
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