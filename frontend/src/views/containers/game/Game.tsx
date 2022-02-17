/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { startGameController } from "../../../configuration";
import { ViewGame } from "../../../controllers/models/ViewGame";
import { useGame } from "./useGame";

const GameContainer = () => {
  const [game, setGame] = useState<ViewGame>();
  const { startGame } = useGame(startGameController, setGame);

  return game === undefined ? (
    <div>
      <button onClick={() => startGame()}>start</button>
    </div>
  ) : (
    <div>{game.playerId}</div>
  );
};

export default GameContainer;
