/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { BoundaryGuessResponse } from "../model/BoundaryGuessResponse";

export interface GuessUseCase {
  guess(
    playerId: number,
    letterGuessed: string
  ): Observable<BoundaryGuessResponse>;
}
