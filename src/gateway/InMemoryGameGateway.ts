import { Game } from "../domain/Game";
import { GameBuilder } from "../domain/GameBuilder";
import { GameGateway } from "./GameGateway";

export class InMemoryGameGateway implements GameGateway {
    private allGames : Game[];

    constructor() {
        this.allGames = new Array();
    }

    addGame(newGame : Game): void {
        this.allGames.push(newGame);
    }

    getGameByPlayerId(playerIdToLookFor : number): Game {
        return this.findSpecificGame(playerIdToLookFor);
    }

    private findSpecificGame(playerId : number) : Game {
        return this.allGames.find(game => game.getPlayerId() === playerId) ?? new Game(-1, -1, new Array(), new Array(), -1, "");
    } 
}