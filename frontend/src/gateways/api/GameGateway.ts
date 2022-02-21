/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { NewGame } from "../../domain/NewGame";
import { GameInProgress } from "../../domain/GameInProgress";

export interface GameGateway {
  createGame(): Observable<NewGame>;

  verifyGuess(
    playerId: number,
    letterGuessed: string
  ): Observable<GameInProgress>;
}
