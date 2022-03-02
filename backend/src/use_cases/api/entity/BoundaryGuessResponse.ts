export class BoundaryGuessResponse {
    private readonly isGuessCorrect : boolean
    private readonly stateDescription : string
    private readonly hiddenWord : Map<number, string>
    private readonly lettersGuessed: string[]
    private readonly missedGuesses: number

    constructor(isGuessCorrect : boolean, stateDescription : string, hiddenWord : Map<number, string>, lettersGuessed: string[], missedGuesses: number) {
        this.isGuessCorrect = isGuessCorrect;
        this.stateDescription = stateDescription;
        this.hiddenWord = hiddenWord;
        this.lettersGuessed = lettersGuessed;
        this.missedGuesses = missedGuesses;
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

    getMissedGuesses(): number {
        return this.missedGuesses;
    }
}