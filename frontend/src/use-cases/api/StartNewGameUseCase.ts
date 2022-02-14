import { Observable } from "rxjs";
// eslint-disable-next-line no-restricted-imports
import { Game } from "../../domain/Game";

export interface StartNewGameUseCase {
  startGame(): Observable<Game>;
}
