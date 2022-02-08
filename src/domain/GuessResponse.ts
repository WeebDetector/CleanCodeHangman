import { Game } from "../domain/Game";

export class GuessResponse {
    private readonly game : Game
    private readonly stateDescription : string

    constructor(game : Game, stateDescription : string) {
        this.game = game;
        this.stateDescription = stateDescription;
    }

    getGame(): Game {
        return this.game;
    }
    getGameStateDescription(): string {
        return this.stateDescription;
    }

}