/* eslint-disable no-restricted-imports */
import { BoundaryGame } from "../use-cases/model/BoundaryGame";
import { BoundaryGameInProgress } from "../use-cases/model/BoundaryGameInProgress";
import { ViewGame } from "./models/ViewGame";
import { ViewGameInProgress } from "./models/ViewGameInProgress";

export class GameB2VConverter {
  convert(game: BoundaryGame): ViewGame {
    return new ViewGame(game.playerId, game.chosenWord);
  }

  convertGameInProgress(game: BoundaryGameInProgress): ViewGameInProgress {
    return new ViewGameInProgress(
      game.isGuessCorrect,
      game.stateDescription,
      game.wordState,
      game.lettersGuessed
    );
  }
}
