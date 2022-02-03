import { WordGateway } from "../gateway/wordGateway";
import { CreateGameUseCase } from "../usecases/CreateGameUseCase";
import { BoundaryGameDataStruct } from "../usecases/BoundaryGameDataStruct";
import { PlayerGateway } from "../gateway/playerGateway";
import { Game } from "../domain/game";
import { GameGateway } from "../gateway/gameGateway";

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
        var playerIdAndGameWord = new BoundaryGameDataStruct(this.playerGateway.addAPlayer(), this.wordGateway.pickARandomWord())
        this.addAGameToGamesGateway(this.playerGateway.addAPlayer(), this.wordGateway.pickARandomWord());
        return playerIdAndGameWord;
    }

    private addAGameToGamesGateway(playerId : number, gameWord : string) : void {
        var gameSession = new Game(playerId, gameWord)
        this.gameGateway.addGameToAllGamesArray(gameSession);
    }

}