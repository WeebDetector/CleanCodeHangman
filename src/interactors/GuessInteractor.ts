import { GameGateway } from "../gateway/GameGateway";
import { GuessUseCase } from "../use_cases/GuessUseCase";

export class GuessInteractor implements GuessUseCase {
    private readonly gameGateway : GameGateway;

    constructor(gameGateway : GameGateway) {
        this.gameGateway = gameGateway;
    }

    isLetterInWord(playerId : number, guessedLetter: string): boolean {
        const gameSession = this.gameGateway.getGameByPlayerId(playerId);

        if (gameSession !== undefined) {
            throw new Error("Game is undefined");
        } else {
            return gameSession!.getWordBeingGuessed().includes(guessedLetter);
        }
    }
}