import { WordGateway } from "../gateway/WordGateway";
import { CreateGameUseCase } from "../use_cases/CreateGameUseCase";
import { BoundaryGameDataStruct } from "../use_cases/BoundaryGameDataStruct";
import { PlayerGateway } from "../gateway/PlayerGateway";
import { Game } from "../domain/game";
import { GameGateway } from "../gateway/GameGateway";

export class CreateGameInteractor implements CreateGameUseCase {
    private readonly wordGateway : WordGateway;
    private readonly playerGateway : PlayerGateway;
    private readonly gameGateway : GameGateway;

    constructor(wordGateway : WordGateway, playerGateway : PlayerGateway, gameGateway : GameGateway) {
        this.wordGateway = wordGateway;
        this.playerGateway = playerGateway;
        this.gameGateway = gameGateway
    }

    execute() : BoundaryGameDataStruct {
        var playerIdAndGameWord = new BoundaryGameDataStruct(this.playerGateway.addPlayer(), this.wordGateway.pickRandomWord())
        this.addGameToGamesGateway(this.playerGateway.addPlayer(), this.wordGateway.pickRandomWord());
        return playerIdAndGameWord;
    }

    private addGameToGamesGateway(playerId : number, gameWord : string) : void {
        var gameSession = new Game(playerId, gameWord)
        this.gameGateway.addGameToAllGamesArray(gameSession);
    }

}