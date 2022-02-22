/* eslint-disable no-restricted-imports */
import { startGameController } from "../../../Configuration";
import { ViewGame } from "../../../controllers/models/ViewGame";
import useInitialWindow from "./useInitialWindow";
import React from "react";

interface Props {
  setGame: (game: ViewGame) => void;
}

export const InitialWindow = ({ setGame }: Props) => {
  const startGame = useInitialWindow(startGameController, setGame);

  return (
    <button data-testid="start-btn" onClick={startGame}>
      start
    </button>
  );
};
