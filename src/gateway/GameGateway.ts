import { Game } from "../domain/Game";
import { GameFramework } from "../domain/GameFramework";

export interface GameGateway {
    addGame(newGame : Game): void
    getGameByPlayerId(playerId : number): GameFramework
}