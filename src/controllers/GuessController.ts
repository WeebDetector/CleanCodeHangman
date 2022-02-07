import { BoundaryGameToClientResponse } from "../use_cases/BoundaryGameToClientResponse";
import { GuessUseCase } from "../use_cases/GuessUseCase";

export class GuessController {
    private readonly guessUC : GuessUseCase

    constructor(guessUC : GuessUseCase) {
        this.guessUC = guessUC;
    }

    isLetterInWord(playerId : number, guessedLetter : string) : BoundaryGameToClientResponse {
        return this.guessUC.isLetterInWord(playerId, guessedLetter);
    }
}