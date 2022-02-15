/* eslint-disable no-restricted-imports */
import { useEffect, useState } from "react";
import { ViewGame } from "../../../controllers/models/ViewGame";
import { StartGameController } from "../../../controllers/StartGameController";

export function useGame(startGameController: StartGameController) {
  const [game, setGame] = useState<ViewGame>();

  useEffect(() => {
    const subscription = startGameController
      .startGame()
      .subscribe((game) => setGame(game));

    return () => subscription.unsubscribe();
  }, []);

  return game;
}
