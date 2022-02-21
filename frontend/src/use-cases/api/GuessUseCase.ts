/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { BoundaryGameInProgress } from "../model/BoundaryGameInProgress";

export interface GuessUseCase {
  guess(
    playerId: number,
    letterGuessed: string
  ): Observable<BoundaryGameInProgress>;
}
