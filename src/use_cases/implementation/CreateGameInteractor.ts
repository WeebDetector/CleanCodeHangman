import { WordGateway } from "../../gateway/api/WordGateway";
import { CreateGameUseCase } from "../api/CreateGameUseCase";
import { BoundaryGameDataStruct } from "../api/entity/BoundaryGameDataStruct";
import { PlayerGateway } from "../../gateway/api/PlayerGateway";
import { GameGateway } from "../../gateway/api/GameGateway";
import { GameBuilder } from "../../domain/GameBuilder";

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
        const playerIdAndGameWord = new BoundaryGameDataStruct(this.playerGateway.addPlayer(), this.wordGateway.pickRandomWord())

        this.addGameToGamesGateway(playerIdAndGameWord.getPlayerId(), playerIdAndGameWord.getChosenWord());
        return playerIdAndGameWord;
    }

    private addGameToGamesGateway(playerId : number, gameWord : string) : void {
        const gameSession = GameBuilder.init(playerId, gameWord)
        .setCurrentWordState(this.constructLettersGuessedArray(gameWord));
        this.gameGateway.addGame(gameSession.build());
    }

    private constructLettersGuessedArray(gameWord : string) : string[] {
        return new Array(gameWord.length).fill('_');
    }
}