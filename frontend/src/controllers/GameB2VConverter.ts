/* eslint-disable no-restricted-imports */
import { BoundaryNewGame } from "../use-cases/model/BoundaryNewGame";
import { BoundaryGuessResponse } from "../use-cases/model/BoundaryGuessResponse";
import { ViewNewGame } from "./models/ViewNewGame";
import { ViewGuessResponse } from "./models/ViewGuessResponse";

export class GameB2VConverter {
  convert(game: BoundaryNewGame): ViewNewGame {
    return new ViewNewGame(game.playerId, game.chosenWord);
  }

  convertGuessResponse(game: BoundaryGuessResponse): ViewGuessResponse {
    return new ViewGuessResponse(
      game.isGuessCorrect,
      game.stateDescription,
      game.wordState,
      game.lettersGuessed,
      game.missedGuesses
    );
  }
}
