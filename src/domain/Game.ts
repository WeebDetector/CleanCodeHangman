import { BoundaryGameUpdateResponse } from "../use_cases/BoundaryGameUpdateResponse";
import { GameBuilder } from "./GameBuilder";

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

    isGameOver() : string {
        const maxMissedGuesses = 10;
        const correctGuessesRequiredToWin = this.getUniqueLettersInAWord();

        if (this.getMissedGuesses() == maxMissedGuesses)
            return "Game is lost";
        else if (this.getCorrectGuesses() == correctGuessesRequiredToWin)
            return "Game is won";
        else
            return "Game is still in progress";
    }

    private getUniqueLettersInAWord() : number {
        const word = this.getWordBeingGuessed();
        let seenLetters = new Array();

        for (let i = 0; i < word.length; i++) {
            if (!seenLetters.includes(word[i]))
                seenLetters.push(word[i]);
        }

        return seenLetters.length;
    }

    updateGame(guessedLetter : string) : BoundaryGameUpdateResponse {
        const wordBeingGuessed = this.getWordBeingGuessed();
        let gameBuilder;

        if (wordBeingGuessed.includes(guessedLetter))
            gameBuilder = this.updateGameAfterCorrectGuess(guessedLetter);
        else
            gameBuilder = this.updateGameAfterIncorrectGuess();

        this.updateLettersGuessed(gameBuilder, guessedLetter);

        const stateDescription = this.isGameOver();
        const updatedGame = gameBuilder.build();
        const response = new BoundaryGameUpdateResponse(updatedGame, stateDescription);

        return response;
    }

    private updateGameAfterCorrectGuess(guessedLetter : string) : GameBuilder {
        let gameBuilder = GameBuilder.of(this);
        const currentWordState = this.getCurrentWordState();
        const updatedWordState = this.updateCurrentWordState(currentWordState, guessedLetter, this.getWordBeingGuessed())
        const correctGuesses = this.getCorrectGuesses() + 1;

        gameBuilder = gameBuilder.setCorrectGuesses(correctGuesses);
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
        gameBuilder = gameBuilder.setMissedGuesses(missedGuesses);

        return gameBuilder;
    }

    private updateLettersGuessed(gameBuilder : GameBuilder, guessedLetter : string) : GameBuilder {
        let lettersGuessed = this.getLettersGuessed();

        lettersGuessed.push(guessedLetter);
        gameBuilder.setLettersGuessed(lettersGuessed);

        return gameBuilder;
    }
}