import { GuessUseCase } from "../use_cases/GuessUseCase";

export class GuessController {
    private readonly guessUC : GuessUseCase

    constructor(guessUC : GuessUseCase) {
        this.guessUC = guessUC;
    }

    isLetterInWord(playerId : number, guessedLetter : string) : boolean {
        return this.guessUC.isLetterInWord(guessedLetter);
    }
}