export class RestGuessResponse {
    readonly isGuessCorrect : boolean
    readonly stateDescription : string
    readonly wordState : [number, string][]
    readonly lettersGuessed: string[]

    constructor(isGuessCorrect : boolean, stateDescription : string, wordState : [number, string][], lettersGuessed: string[]) {
        this.isGuessCorrect = isGuessCorrect;
        this.stateDescription = stateDescription;
        this.wordState = wordState;
        this.lettersGuessed = lettersGuessed;
    }
}