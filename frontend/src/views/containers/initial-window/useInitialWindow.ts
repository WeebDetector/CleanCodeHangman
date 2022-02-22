/* eslint-disable no-restricted-imports */
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import { StartGameController } from "../../../controllers/StartGameController";

export default function useInitialWindow(
  startGameController: StartGameController,
  setGame: (game: ViewNewGame) => void
): () => void {
  const startGame = () => {
    startGameController.startGame().subscribe(setGame);
  };

  return startGame;
}
