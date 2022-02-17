/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { ViewGame } from "../../../controllers/models/ViewGame";
import GameWindow from "../game-window/GameWindow";
import InitialWindow from "../initial-window/InitialWindow";

const GameContainer = () => {
  const [game, setGame] = useState<ViewGame>();

  return game === undefined ? (
    <InitialWindow setGame={setGame} />
  ) : (
    <GameWindow game={game} />
  );
};

export default GameContainer;
