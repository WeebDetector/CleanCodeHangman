/* eslint-disable no-restricted-imports */
import { startGameController } from "../../../Configuration";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import useInitialWindow from "./useInitialWindow";
import React from "react";
import { Box, Button, Grid } from "@material-ui/core";
import { GameTitle } from "../../components/GameTitle";

interface Props {
  setGame: (game: ViewNewGame) => void;
}

export const InitialWindow = ({ setGame }: Props) => {
  const startGame = useInitialWindow(startGameController, setGame);

  return (
    <Box m="25vh">
      <Grid container direction="column" alignItems="center">
        <GameTitle />
        <Grid container justifyContent="center" style={{ paddingTop: "10vh" }}>
          <Button
            style={{ minWidth: "10vw" }}
            data-testid="start-btn"
            onClick={startGame}
          >
            start
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
