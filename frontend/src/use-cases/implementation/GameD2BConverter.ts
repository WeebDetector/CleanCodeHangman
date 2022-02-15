/* eslint-disable no-restricted-imports */
import { Game } from "../../domain/Game";
import { BoundaryGame } from "../model/BoundaryGame";

export class GameD2BConverter {
  convertD2B(game: Game): BoundaryGame {
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
