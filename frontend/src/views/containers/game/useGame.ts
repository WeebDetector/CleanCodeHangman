/* eslint-disable no-restricted-imports */
import { ViewGame } from "../../../controllers/models/ViewGame";
import { StartGameController } from "../../../controllers/StartGameController";

export function useGame(
  startGameController: StartGameController,
  setGame: React.Dispatch<React.SetStateAction<ViewGame | undefined>>
): () => void {
  const startGame = () => {
    startGameController.startGame().subscribe(setGame);
  };

  return startGame;
}
