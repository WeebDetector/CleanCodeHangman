export class RestGuessResponse {
    readonly isGuessCorrect : boolean
    readonly stateDescription : string

    constructor(isGuessCorrect : boolean, stateDescription : string) {
        this.isGuessCorrect = isGuessCorrect;
        this.stateDescription = stateDescription;
    }
}