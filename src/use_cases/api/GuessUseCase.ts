import { BoundaryGuessResponse } from "./entity/BoundaryGuessResponse";

export interface GuessUseCase {
    isLetterInWord(playerId: number, guessedLetter : string) : BoundaryGuessResponse;
}