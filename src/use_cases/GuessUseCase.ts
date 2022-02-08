import { BoundaryGuessResponse } from "./BoundaryGuessResponse";

export interface GuessUseCase {
    isLetterInWord(playerId: number, guessedLetter : string) : BoundaryGuessResponse;
}