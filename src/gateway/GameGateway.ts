import { Game } from "../domain/game";

export interface GameGateway {
    addGameToAllGamesArray(newGame : Game): void
    getGameById(playerIdToLookFor : number): Game
}