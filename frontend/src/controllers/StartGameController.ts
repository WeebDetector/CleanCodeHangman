/* eslint-disable no-restricted-imports */
import { map, Observable } from "rxjs";
import { StartNewGameUseCase } from "../use-cases/api/StartNewGameUseCase";
import { BoundaryGame } from "../use-cases/model/BoundaryGame";
import { GameView } from "./models/GameView";

export class StartGameController {
  private readonly startGameUC: StartNewGameUseCase;

  constructor(startGameUC: StartNewGameUseCase) {
    this.startGameUC = startGameUC;
  }

  startGame(): Observable<GameView> {
    return this.startGameUC
      .startGame()
      .pipe(map((game) => this.convertB2V(game)));
  }

  private convertB2V(game: BoundaryGame): GameView {
    return new GameView(game.playerId, game.chosenWord);
  }
}
