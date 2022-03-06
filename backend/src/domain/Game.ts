import { GameBuilder } from "./GameBuilder";
import { GameState } from "./GameState";
import { GuessResponse } from "./GuessResponse";

export class Game {
    private readonly missedGuesses: number;
    private readonly lettersGuessed: string[];
    private readonly currentWordState: Map<number, string>;
    private readonly playerId: number;
    private readonly wordBeingGuessed: string;

    constructor(missedGuesses : number, lettersGuessed : string[],
                currentWordState : Map<number, string>, playerId : number, chosenWordForTheGame : string) {
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
        const uniqueSymbols = new Set(this.currentWordState.values());
        if (uniqueSymbols.has('_'))
            return (uniqueSymbols.size - 1);
        return uniqueSymbols.size;
    }

    getLettersGuessed() : string[] {
        return this.lettersGuessed;
    }

    getCurrentWordState() : Map<number, string> {
        return this.currentWordState;
    }

    getPlayerId() : number {
        return this.playerId;
    }

    getWordBeingGuessed() : string {
        return this.wordBeingGuessed;
    }

    getGameState() : GameState {
        const maxMissedGuesses = 10;
        const correctGuessesRequiredToWin = this.getUniqueLettersInAWord();

        if (this.getMissedGuesses() == maxMissedGuesses) 
            return GameState.Lost;
        else if (this.getCorrectGuesses() == correctGuessesRequiredToWin)
            return GameState.Won;
        return GameState.inProgress;
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

        const updatedGame = gameBuilder.build();
        const stateDescription = updatedGame.getGameState();

        return new GuessResponse(updatedGame, stateDescription);
    }

    private updateGameAfterCorrectGuess(guessedLetter : string) : GameBuilder {
        const gameBuilder = GameBuilder.of(this);
        const updatedWordState = this.updateCurrentWordState(guessedLetter)

        return gameBuilder.setCurrentWordState(updatedWordState);
    }

    private updateCurrentWordState(guessedLetter : string) : Map<number, string> {
        let currentWordState = this.getCurrentWordState();
        const letterIndexes = this.findLetterOccurences(guessedLetter);

        const updatedWordState = new Map<number, string>();

        Array.from(currentWordState.entries()).forEach(entry => {
            const symbol = (letterIndexes.includes(entry[0])) ? guessedLetter : entry[1];

            updatedWordState.set(entry[0], symbol);
        });

        return updatedWordState;
    }

    private findLetterOccurences(guessedLetter : string) : number[] {
        const letterIndexes = new Array();
        for (let i = 0; i < this.wordBeingGuessed.length; i++)
            if (this.wordBeingGuessed[i] === guessedLetter)
                letterIndexes.push(i);
        return letterIndexes;
    }

    private updateGameAfterIncorrectGuess() : GameBuilder {
        let gameBuilder = GameBuilder.of(this);
        const missedGuesses = this.getMissedGuesses() + 1;

        if (missedGuesses === 10) {
            gameBuilder = gameBuilder.setCurrentWordState(this.revealWordAfterLoss())
        }

        return gameBuilder.setMissedGuesses(missedGuesses);
    }

    private revealWordAfterLoss() : Map<number, string> {
        const fullWordMap = new Map<number, string>();

        let letterIndex = 0;
        Array.from(this.getWordBeingGuessed()).forEach(letter => {
            fullWordMap.set(letterIndex++, letter);
        })

        return fullWordMap;
    }

    private updateLettersGuessed(gameBuilder : GameBuilder, guessedLetter : string) : GameBuilder {
        let lettersGuessed = this.getLettersGuessed();

        lettersGuessed.push(guessedLetter);

        return gameBuilder.setLettersGuessed(lettersGuessed);;
    }
}