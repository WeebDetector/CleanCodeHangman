/* eslint-disable no-restricted-imports */
import { startGameController } from "../../../configuration";
import { ViewGame } from "../../../controllers/models/ViewGame";
import { useMainWindow } from "../game/useMainWindow";
import React from "react";

interface initialWindowProps {
  setGame: React.Dispatch<React.SetStateAction<ViewGame | undefined>>;
}

const InitialWindow = ({ setGame }: initialWindowProps) => {
  const startGame = useMainWindow(startGameController, setGame);

  return (
    <div>
      <button onClick={() => startGame()}>start</button>
    </div>
  );
};

export default InitialWindow;
