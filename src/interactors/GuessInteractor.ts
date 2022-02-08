import { Game } from "../domain/Game";
import { GameGateway } from "../gateway/GameGateway";
import { BoundaryGuessResponse } from "../use_cases/BoundaryGuessResponse";
import { GuessUseCase } from "../use_cases/GuessUseCase";

export class GuessInteractor implements GuessUseCase {
    private readonly gameGateway : GameGateway;

    constructor(gameGateway : GameGateway) {
        this.gameGateway = gameGateway;
    }

    isLetterInWord(playerId : number, guessedLetter: string): BoundaryGuessResponse {
        const gameSession = this.gameGateway.getGameByPlayerId(playerId);

        if (gameSession === undefined)
            throw new Error("Game played by player " + playerId + " not found");
            const response = gameSession.updateGame(guessedLetter);

            this.gameGateway.updateGame(playerId, response.getGame());

        return new BoundaryGuessResponse(this.isGuessCorrect(gameSession, guessedLetter), response.getGameStateDescription())
    }

    private isGuessCorrect(gameSession : Game, guessedLetter : string) : boolean {
        return gameSession.getWordBeingGuessed().includes(guessedLetter);
    }
}