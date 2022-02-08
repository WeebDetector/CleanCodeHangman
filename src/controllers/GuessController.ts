import { BoundaryGuessResponse } from "../use_cases/BoundaryGuessResponse";
import { GuessUseCase } from "../use_cases/GuessUseCase";

export class GuessController {
    private readonly guessUC : GuessUseCase

    constructor(guessUC : GuessUseCase) {
        this.guessUC = guessUC;
    }

    isLetterInWord(playerId : number, guessedLetter : string) : BoundaryGuessResponse {
        return this.guessUC.isLetterInWord(playerId, guessedLetter);
    }
}