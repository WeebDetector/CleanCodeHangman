/* eslint-disable no-restricted-imports */
import { NewGame } from "../../domain/NewGame";
import { GuessResponse } from "../../domain/GuessResponse";
import { BoundaryNewGame } from "../model/BoundaryNewGame";
import { BoundaryGuessResponse } from "../model/BoundaryGuessResponse";

export class GameD2BConverter {
  convert(game: NewGame): BoundaryNewGame {
    const playerId = game.playerId;
    const gameWord = this.convertHiddenWordToString(game.chosenWord);
    return new BoundaryNewGame(playerId, gameWord);
  }

  convertGuessResponse(game: GuessResponse): BoundaryGuessResponse {
    const gameWord = this.convertHiddenWordToString(game.wordState);
    return new BoundaryGuessResponse(
      game.isGuessCorrect,
      game.stateDescription,
      gameWord,
      game.lettersGuessed
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
