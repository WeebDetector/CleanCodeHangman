/* eslint-disable no-restricted-imports */
import { ViewGame } from "../../../controllers/models/ViewGame";
import { StartGameController } from "../../../controllers/StartGameController";

export default function useInitialWindow(
  startGameController: StartGameController,
  setGame: (game: ViewGame) => void
): () => void {
  const startGame = () => {
    startGameController.startGame().subscribe(setGame);
  };

  return startGame;
}
