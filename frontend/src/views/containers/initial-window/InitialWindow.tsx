/* eslint-disable no-restricted-imports */
import { startGameController } from "../../../Configuration";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import useInitialWindow from "./useInitialWindow";
import React from "react";
import { Box, Button, Typography } from "@material-ui/core";
import { GameTitle } from "../../components/GameTitle";

interface Props {
  setGame: (game: ViewNewGame) => void;
}

export const InitialWindow = ({ setGame }: Props) => {
  const startGame = useInitialWindow(startGameController, setGame);
  
  return (
    <Box
      m="25vh"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <GameTitle />
      <Box pt="10vh">
        <Button
          style={{ minWidth: "10vw" }}
          data-testid="start-btn"
          onClick={startGame}
        >
          start
        </Button>
      </Box>
    </Box>
  );
};
