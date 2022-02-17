/* eslint-disable no-restricted-imports */
import React from "react";
import { startGameController } from "../../../configuration";
import { useGame } from "./useGame";

const GameContainer = () => {
  const hookResponse = useGame(startGameController);

  return (
    <div>
      <h1>{hookResponse?.playerId}</h1>
      <h1>{hookResponse?.chosenWord}</h1>
    </div>
  );
};

export default GameContainer;
