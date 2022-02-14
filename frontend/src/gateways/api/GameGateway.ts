/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { Game } from "../../domain/Game";

export interface GameGateway {
  createGame(): Observable<Game>;
}
