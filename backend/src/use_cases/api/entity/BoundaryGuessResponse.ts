export class BoundaryGuessResponse {
    private readonly isGuessCorrect : boolean
    private readonly stateDescription : string
    private readonly hiddenWord : Map<number, string>
    private readonly lettersGuessed: string[]

    constructor(isGuessCorrect : boolean, stateDescription : string, hiddenWord : Map<number, string>, lettersGuessed: string[]) {
        this.isGuessCorrect = isGuessCorrect;
        this.stateDescription = stateDescription;
        this.hiddenWord = hiddenWord;
        this.lettersGuessed = lettersGuessed;
    }

    getGuessState(): boolean {
        return this.isGuessCorrect;
    }
    getGameStateDescription(): string {
        return this.stateDescription;
    }

    getHiddenWord(): Map<number, string> {
        return this.hiddenWord;
    }

    getLettersGuessed(): string[] {
        return this.lettersGuessed;
    }
}