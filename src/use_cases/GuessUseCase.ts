import { BoundaryGameToClientResponse } from "./BoundaryGameToClientResponse";

export interface GuessUseCase {
    isLetterInWord(playerId: number, guessedLetter : string) : BoundaryGameToClientResponse;
}