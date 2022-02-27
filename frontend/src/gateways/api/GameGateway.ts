/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { NewGame } from "../../domain/NewGame";
import { GuessResponse } from "../../domain/GuessResponse";

export interface GameGateway {
  createGame(): Observable<NewGame>;

  verifyGuess(
    playerId: number,
    letterGuessed: string
  ): Observable<GuessResponse>;
}
