/* eslint-disable no-restricted-imports */
import { startGameController } from "../../../Configuration";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import useInitialWindow from "./useInitialWindow";
import React from "react";

interface Props {
  setGame: (game: ViewNewGame) => void;
}

export const InitialWindow = ({ setGame }: Props) => {
  const startGame = useInitialWindow(startGameController, setGame);

  return (
    <button data-testid="start-btn" onClick={startGame}>
      start
    </button>
  );
};
