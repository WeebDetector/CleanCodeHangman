import { Game } from "../domain/Game";
import { GameFramework } from "../domain/GameFramework";
import { NullGame } from "../domain/NullGame";
import { GameGateway } from "./GameGateway";

export class InMemoryGameGateway implements GameGateway {
    private allGames : Game[];

    constructor() {
        this.allGames = new Array();
    }

    addGame(newGame : Game): void {
        this.allGames.push(newGame);
    }

    getGameByPlayerId(playerId : number): GameFramework {
        return this.findSpecificGame(playerId);
    }

    private findSpecificGame(playerId : number) : GameFramework {
        const game = this.allGames.find(game => game.getPlayerId() === playerId);
        
        return game ?? new NullGame();
    } 
}