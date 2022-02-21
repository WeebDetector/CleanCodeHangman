/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { ViewGame } from "../../../controllers/models/ViewGame";
import { GameWindow } from "../game-window/GameWindow";
import { InitialWindow } from "../initial-window/InitialWindow";

export const MainWindow = () => {
  const [game, setGame] = useState<ViewGame | undefined>(undefined);

  return game === undefined ? (
    <InitialWindow setGame={setGame} />
  ) : (
    <GameWindow game={game} />
  );
};
