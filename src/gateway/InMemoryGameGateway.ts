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

    getGameByPlayerId(playerId : number): Game | undefined {
        return this.allGames.find(game => game.getPlayerId() === playerId);
    }
}