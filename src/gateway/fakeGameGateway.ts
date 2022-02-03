import { Game } from "../domain/game";
import { GameGateway } from "./gameGateway";

export class FakeGameGateway implements GameGateway {
    private allGames : Game[];

    constructor() {
        this.allGames = new Array();
    }

    addGameToAllGamesArray(newGame : Game): void {
        this.allGames.push(newGame);
    }

    getGameById(playerIdToLookFor : number): Game {
        return this.findASpecificGame(playerIdToLookFor);
    }

    private findASpecificGame(playerId : number) : Game {
        var test = new Game(-1, "");
        for (let i = 0; i < this.allGames.length; i++) {
            if (playerId === this.allGames[i].getPlayerId()) {
                return this.allGames[i];
            }
        }
        return test;
    }
}