/* eslint-disable no-restricted-imports */
import { BoundaryGame } from "../use-cases/model/BoundaryGame";
import { ViewGame } from "./models/ViewGame";

export class GameB2VConverter {
  convert(game: BoundaryGame): ViewGame {
    return new ViewGame(game.playerId, game.chosenWord);
  }
}
