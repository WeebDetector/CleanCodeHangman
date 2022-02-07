import { Game } from "../domain/Game";

export interface GameGateway {
    addGame(newGame : Game): void
    getGameByPlayerId(playerId : number): Game | undefined
}