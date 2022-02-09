export class RestGuessResponse {
    private isGuessCorrect : boolean
    private stateDescription : string

    constructor(isGuessCorrect : boolean, stateDescription : string) {
        this.isGuessCorrect = isGuessCorrect;
        this.stateDescription = stateDescription;
    }
}