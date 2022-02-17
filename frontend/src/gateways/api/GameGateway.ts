/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { FreshGame } from "../../domain/FreshGame";
import { GameInProgress } from "../../domain/GameInProgress";

export interface GameGateway {
  createGame(): Observable<FreshGame>;

  verifyGuess(
    playerId: number,
    letterGuessed: string
  ): Observable<GameInProgress>;
}
