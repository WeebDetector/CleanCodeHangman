import { Game } from "../domain/Game";
import { GameBuilder } from "../domain/GameBuilder";
import { GameGateway } from "../gateway/GameGateway";
import { GuessUseCase } from "../use_cases/GuessUseCase";

export class GuessInteractor implements GuessUseCase {
    private readonly gameGateway : GameGateway;

    constructor(gameGateway : GameGateway) {
        this.gameGateway = gameGateway;
    }

    isLetterInWord(playerId : number, guessedLetter: string): boolean {
        const gameSession = this.gameGateway.getGameByPlayerId(playerId);

        if (gameSession === undefined) {
            throw new Error("Game is undefined");
        } else {
            const updatedGame = this.updateGame(gameSession, guessedLetter);

            return gameSession!.getCorrectGuesses() == updatedGame.getCorrectGuesses();
        }
    }

    private updateGame(gameSession : Game, guessedLetter : string) : Game {
        const wordBeingGuessed = gameSession.getWordBeingGuessed();
        const gameBuilder = GameBuilder.of(gameSession);

        let lettersGuessed = gameSession.getLettersGuessed();
        let currentWordState = gameSession.getCurrentWordState();

        lettersGuessed.push(guessedLetter);

        if (wordBeingGuessed.includes(guessedLetter)) {
            const updatedWordState = this.updateCurrentWordState(currentWordState, guessedLetter, wordBeingGuessed);

            gameBuilder.setCorrectGuesses(gameSession.getCorrectGuesses() + 1);
            gameBuilder.setCurrentWordState(updatedWordState);
        } else {
            gameBuilder.setMissedGuesses(gameSession.getMissedGuesses() + 1);
        }
        gameBuilder.setLettersGuessed(lettersGuessed);
        
        const updatedGame = gameBuilder.build();
        
        this.gameGateway.updateGame(updatedGame.getPlayerId(), updatedGame)
        return updatedGame;
    }

    private updateCurrentWordState(currentWordState : string[], guessedLetter : string, wordBeingGuessed : string) : string[] {
        let letterIndex = wordBeingGuessed.indexOf(guessedLetter);
        while (letterIndex != -1) {
            if (currentWordState[letterIndex] == '_') {
                currentWordState[letterIndex] = guessedLetter;
            }
            letterIndex = wordBeingGuessed.indexOf(guessedLetter, letterIndex + 1);
        }
        return currentWordState;
    }
}