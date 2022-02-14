/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { Game } from "../../domain/Game";
import { GameGateway } from "../../gateways/api/GameGateway";
import { StartNewGameUseCase } from "../api/StartNewGameUseCase";

export class StartNewGameInteractor implements StartNewGameUseCase {
  private readonly gameGW: GameGateway;

  constructor(gameGW: GameGateway) {
    this.gameGW = gameGW;
  }

  startGame(): Observable<Game> {
    return this.gameGW.createGame();
  }
}
