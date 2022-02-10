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
        const player = this.playerGateway.addPlayer();
        const word = this.wordGateway.pickRandomWord();
        const hiddenWord = this.constructHiddenWord(word);

        this.addGameToGamesGateway(player, word, hiddenWord);
        const playerIdAndGameWord = new BoundaryGameDataStruct(player, hiddenWord);

        return playerIdAndGameWord;
    }
    private constructHiddenWord(gameWord : string) : Map<number, string> {
        const hiddenWord = new Map<number, string>();
        for (let i = 0; i < gameWord.length; i++) {
            hiddenWord.set(i, '_');
        }

        return hiddenWord;
    }

    private addGameToGamesGateway(playerId : number, gameWord : string, hiddenWord : Map<number, string>) : void {
        const gameSession = GameBuilder.init(playerId, gameWord)
        .setCurrentWordState(hiddenWord)
        .build();
        this.gameGateway.addGame(gameSession);
    }
}