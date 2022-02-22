/* eslint-disable no-restricted-imports */
import { map, Observable } from "rxjs";
import { GuessUseCase } from "../use-cases/api/GuessUseCase";
import { GameB2VConverter } from "./GameB2VConverter";
import { ViewGuessResponse } from "./models/ViewGuessResponse";

export class GuessController {
  private readonly guessUC: GuessUseCase;
  private readonly converter: GameB2VConverter;

  constructor(guessUC: GuessUseCase, converter: GameB2VConverter) {
    this.guessUC = guessUC;
    this.converter = converter;
  }

  guess(
    playerId: number,
    letterGuessed: string
  ): Observable<ViewGuessResponse> {
    return this.guessUC
      .guess(playerId, letterGuessed)
      .pipe(map((game) => this.converter.convertGuessResponse(game)));
  }
}
