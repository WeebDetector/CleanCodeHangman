/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { GameBoundary } from "../model/GameBoundary";

export interface StartNewGameUseCase {
  startGame(): Observable<GameBoundary>;
}
