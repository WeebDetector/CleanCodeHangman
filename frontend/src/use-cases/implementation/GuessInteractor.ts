/* eslint-disable no-restricted-imports */
import { map, Observable } from "rxjs";
import { GameGateway } from "../../gateways/api/GameGateway";
import { GuessUseCase } from "../api/GuessUseCase";
import { BoundaryGuessResponse } from "../model/BoundaryGuessResponse";
import { GameD2BConverter } from "./GameD2BConverter";

export class GuessInteractor implements GuessUseCase {
  private readonly gameGW: GameGateway;
  private readonly gameD2BConverter: GameD2BConverter;

  constructor(gameGW: GameGateway, gameD2BConverter: GameD2BConverter) {
    this.gameGW = gameGW;
    this.gameD2BConverter = gameD2BConverter;
  }

  guess(
    playerId: number,
    letterGuessed: string
  ): Observable<BoundaryGuessResponse> {
    return this.gameGW
      .verifyGuess(playerId, letterGuessed)
      .pipe(map((game) => this.gameD2BConverter.convertGuessResponse(game)));
  }
}
