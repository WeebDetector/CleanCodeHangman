import { Game } from "../domain/Game";
import { GameGateway } from "../gateway/GameGateway";
import { BoundaryGameToClientResponse } from "../use_cases/BoundaryGameToClientResponse";
import { GuessUseCase } from "../use_cases/GuessUseCase";

export class GuessInteractor implements GuessUseCase {
    private readonly gameGateway : GameGateway;

    constructor(gameGateway : GameGateway) {
        this.gameGateway = gameGateway;
    }

    isLetterInWord(playerId : number, guessedLetter: string): BoundaryGameToClientResponse {
        const gameSession = this.gameGateway.getGameByPlayerId(playerId);

        if (gameSession === undefined)
            throw new Error("Game played by player " + playerId + " not found");
        else {
            const response = gameSession.updateGame(guessedLetter);

            this.gameGateway.updateGame(playerId, response.getGame());

            const responseToClient = new BoundaryGameToClientResponse(this.isGuessCorrect(gameSession, guessedLetter), response.getGameStateDescription())

            return responseToClient;
        }
    }

    private isGuessCorrect(gameSession : Game, guessedLetter : string) : boolean {
        return gameSession.getWordBeingGuessed().includes(guessedLetter);
    }
}