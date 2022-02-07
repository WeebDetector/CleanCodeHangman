import { Game } from "../domain/Game";

export class BoundaryGameToClientResponse {
    private readonly isGuessCorrect : boolean
    private readonly stateDescription : string

    constructor(isGuessCorrect : boolean, stateDescription : string) {
        this.isGuessCorrect = isGuessCorrect;
        this.stateDescription = stateDescription;
    }

    getGuessState(): boolean {
        return this.isGuessCorrect;
    }
    getGameStateDescription(): string {
        return this.stateDescription;
    }

}