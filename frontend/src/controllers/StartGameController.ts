/* eslint-disable no-restricted-imports */
import { map, Observable } from "rxjs";
import { StartNewGameUseCase } from "../use-cases/api/StartNewGameUseCase";
import { GameB2VConverter } from "./GameB2VConverter";
import { ViewGame } from "./models/ViewGame";

export class StartGameController {
  private readonly startGameUC: StartNewGameUseCase;
  private readonly converter: GameB2VConverter;

  constructor(startGameUC: StartNewGameUseCase, converter: GameB2VConverter) {
    this.startGameUC = startGameUC;
    this.converter = converter;
  }

  startGame(): Observable<ViewGame> {
    return this.startGameUC
      .startGame()
      .pipe(map((game) => this.converter.convert(game)));
  }
}
