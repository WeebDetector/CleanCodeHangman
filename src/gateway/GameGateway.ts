import { Game } from "../domain/Game";

export interface GameGateway {
    addGame(newGame : Game): void
    getGameByPlayerId(playerIdToLookFor : number): Game
}