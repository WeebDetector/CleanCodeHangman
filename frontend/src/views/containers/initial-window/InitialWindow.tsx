/* eslint-disable no-restricted-imports */
import { startGameController } from "../../../Configuration";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import useInitialWindow from "./useInitialWindow";
import React from "react";
import { Box, Button } from "@material-ui/core";
import { UnderlinedWord } from "../../components/UnderlinedWord";

interface Props {
  setGame: (game: ViewNewGame) => void;
}

export const InitialWindow = ({ setGame }: Props) => {
  const startGame = useInitialWindow(startGameController, setGame);
  return (
    <Box
      mt="25vh"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <UnderlinedWord word="HANGMAN" />
      <Box pt="10vh">
        <Button
          style={{ minWidth: "10vw", fontSize: "24px" }}
          data-testid="start-btn"
          onClick={startGame}
        >
          <b>start</b>
        </Button>
      </Box>
    </Box>
  );
};
