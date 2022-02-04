import { Game } from "../domain/Game";
import { GameGateway } from "./GameGateway";

export class InMemoryGameGateway implements GameGateway {
    private allGames : Game[];

    constructor() {
        this.allGames = new Array();
    }

    addGame(newGame : Game): void {
        this.allGames.push(newGame);
    }

    getGameByPlayerId(playerId : number): Game {
        return this.findSpecificGame(playerId);
    }

    private findSpecificGame(playerId : number) : Game {
        const game = this.allGames.find(game => game.getPlayerId() === playerId);

        return game ?? new Game(-1, -1, new Array(), new Array(), -1, "");
    } 
}