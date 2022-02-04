import { WordGateway } from "../gateway/WordGateway";
import { CreateGameUseCase } from "../use_cases/CreateGameUseCase";
import { BoundaryGameDataStruct } from "../use_cases/BoundaryGameDataStruct";
import { PlayerGateway } from "../gateway/PlayerGateway";
import { GameGateway } from "../gateway/GameGateway";
import { GameBuilder } from "../domain/GameBuilder";

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
        const gameSession = new GameBuilder(0, 0, new Array(), this.constructLettersGuessedArray(gameWord), playerId, gameWord);
        this.gameGateway.addGame(gameSession.build());
    }

    private constructLettersGuessedArray(gameWord : string) : string[] {
        return new Array(gameWord.length).fill('_');
    }
}