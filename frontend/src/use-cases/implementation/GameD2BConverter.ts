/* eslint-disable no-restricted-imports */
import { NewGame } from "../../domain/NewGame";
import { GameInProgress } from "../../domain/GameInProgress";
import { BoundaryGame } from "../model/BoundaryGame";
import { BoundaryGameInProgress } from "../model/BoundaryGameInProgress";

export class GameD2BConverter {
  convert(game: NewGame): BoundaryGame {
    const playerId = game.playerId;
    const gameWord = this.convertHiddenWordToString(game.chosenWord);
    return new BoundaryGame(playerId, gameWord);
  }

  convertGameInProgress(game: GameInProgress): BoundaryGameInProgress {
    const gameWord = this.convertHiddenWordToString(game.chosenWord);
    return new BoundaryGameInProgress(
      game.isGuessCorrect,
      game.stateDescription,
      gameWord
    );
  }

  private convertHiddenWordToString(hiddenWord: [number, string][]): string {
    let word = "";
    hiddenWord.forEach((element) => {
      word += element[1];
    });
    return word;
  }
}
