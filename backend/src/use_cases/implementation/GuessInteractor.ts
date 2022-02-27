import { Game } from "../../domain/Game";
import { GameGateway } from "../../gateway/api/GameGateway";
import { BoundaryGuessResponse } from "../api/entity/BoundaryGuessResponse";
import { GuessUseCase } from "../api/GuessUseCase";

export class GuessInteractor implements GuessUseCase {
    private readonly gameGateway : GameGateway;

    constructor(gameGateway : GameGateway) {
        this.gameGateway = gameGateway;
    }

    isLetterInWord(playerId : number, guessedLetter: string): BoundaryGuessResponse {
        const gameSession = this.gameGateway.getGameByPlayerId(playerId);

        if (gameSession === undefined)
            throw new Error("Game played by player " + playerId + " not found");

            const response = gameSession.guess(guessedLetter);
            const postUpdateGame = response.getGame();

            this.gameGateway.updateGame(playerId, postUpdateGame);

        return new BoundaryGuessResponse(this.isGuessCorrect(gameSession, guessedLetter),
                                        response.getGameStateDescription(),
                                        postUpdateGame.getCurrentWordState(),
                                        postUpdateGame.getLettersGuessed());
    }

    private isGuessCorrect(gameSession : Game, guessedLetter : string) : boolean {
        return gameSession.getWordBeingGuessed().includes(guessedLetter);
    }
}