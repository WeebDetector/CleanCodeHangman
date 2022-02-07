import { Game } from "../domain/Game";

export interface GameGateway {
    addGame(newGame : Game): void
    updateGame(playerId : number, updatedVersion : Game) : void
    getGameByPlayerId(playerId : number): Game | undefined   
}