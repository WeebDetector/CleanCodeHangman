/* eslint-disable no-restricted-imports */
import { map, Observable } from "rxjs";
import { GameGateway } from "../../gateways/api/GameGateway";
import { StartNewGameUseCase } from "../api/StartNewGameUseCase";
import { BoundaryNewGame } from "../model/BoundaryNewGame";
import { GameD2BConverter } from "./GameD2BConverter";

export class StartNewGameInteractor implements StartNewGameUseCase {
  private readonly gameGW: GameGateway;
  private readonly converter: GameD2BConverter;

  constructor(gameGW: GameGateway, converter: GameD2BConverter) {
    this.gameGW = gameGW;
    this.converter = converter;
  }

  startGame(): Observable<BoundaryNewGame> {
    return this.gameGW
      .createGame()
      .pipe(map((game) => this.converter.convert(game)));
  }
}
