/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { BoundaryNewGame } from "../model/BoundaryNewGame";

export interface StartNewGameUseCase {
  startGame(): Observable<BoundaryNewGame>;
}
