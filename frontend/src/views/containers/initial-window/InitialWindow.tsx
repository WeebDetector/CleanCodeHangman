/* eslint-disable no-restricted-imports */
import { startGameController } from "../../../configuration";
import { ViewGame } from "../../../controllers/models/ViewGame";
import { useGame } from "../game/useGame";
import React from "react";

interface initialWindowProps {
  setGame: React.Dispatch<React.SetStateAction<ViewGame | undefined>>;
}

const InitialWindow = ({ setGame }: initialWindowProps) => {
  const startGame = useGame(startGameController, setGame);

  return (
    <div>
      <button onClick={() => startGame()}>start</button>
    </div>
  );
};

export default InitialWindow;
