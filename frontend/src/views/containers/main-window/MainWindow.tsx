/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import { GameWindow } from "../game-window/GameWindow";
import { InitialWindow } from "../initial-window/InitialWindow";

export const MainWindow = () => {
  const [newGame, setGame] = useState<ViewNewGame | undefined>(undefined);

  return newGame === undefined ? (
    <InitialWindow setGame={setGame} />
  ) : (
    <GameWindow newGame={newGame} />
  );
};
