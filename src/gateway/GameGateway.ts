import { Game } from "../domain/Game";

export interface GameGateway {
    addGame(newGame : Game): void
    getGameById(playerIdToLookFor : number): Game
}