/* eslint-disable no-restricted-imports */
import { map, Observable } from "rxjs";
import { Game } from "../../domain/Game";
import { GameGateway } from "../../gateways/api/GameGateway";
import { StartNewGameUseCase } from "../api/StartNewGameUseCase";
import { GameBoundary } from "../model/GameBoundary";

export class StartNewGameInteractor implements StartNewGameUseCase {
  private readonly gameGW: GameGateway;

  constructor(gameGW: GameGateway) {
    this.gameGW = gameGW;
  }

  startGame(): Observable<GameBoundary> {
    return this.gameGW.createGame().pipe(map((game) => this.convertD2B(game)));
  }

  private convertD2B(game: Game): GameBoundary {
    const playerId = game.playerId;
    const gameWord = this.convertHiddenWordToString(game.chosenWord);
    return new GameBoundary(playerId, gameWord);
  }

  private convertHiddenWordToString(hiddenWord: [number, string][]): string {
    let word = "";
    hiddenWord.forEach((element) => {
      word += element[1];
    });
    return word;
  }
}
