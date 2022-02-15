/* eslint-disable no-restricted-imports */
import { map, Observable } from "rxjs";
import { Game } from "../../domain/Game";
import { GameGateway } from "../../gateways/api/GameGateway";
import { StartNewGameUseCase } from "../api/StartNewGameUseCase";
import { BoundaryGame } from "../model/BoundaryGame";

export class StartNewGameInteractor implements StartNewGameUseCase {
  private readonly gameGW: GameGateway;

  constructor(gameGW: GameGateway) {
    this.gameGW = gameGW;
  }

  startGame(): Observable<BoundaryGame> {
    return this.gameGW.createGame().pipe(map((game) => this.convertD2B(game)));
  }

  private convertD2B(game: Game): BoundaryGame {
    const playerId = game.playerId;
    const gameWord = this.convertHiddenWordToString(game.chosenWord);
    return new BoundaryGame(playerId, gameWord);
  }

  private convertHiddenWordToString(hiddenWord: [number, string][]): string {
    let word = "";
    hiddenWord.forEach((element) => {
      word += element[1];
    });
    return word;
  }
}
