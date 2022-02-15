/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { BoundaryGame } from "../model/BoundaryGame";

export interface StartNewGameUseCase {
  startGame(): Observable<BoundaryGame>;
}
