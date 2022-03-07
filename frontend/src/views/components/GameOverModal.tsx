/* eslint-disable no-restricted-imports */
import { Modal, Box, Typography, Button } from "@material-ui/core";
import React from "react";
import { ViewNewGame } from "../../controllers/models/ViewNewGame";
import { IN_PROGRESS } from "../../constants/GameStateConstants";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  border: "2px #000",
  borderRadius: 5,
  boxShadow: 24,
  p: 4,
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
};

interface Props {
  stateDescription: string | undefined;
  gameWord: string | undefined;
  setNewGame: (game: ViewNewGame | undefined) => void;
}

function isGameOver(stateDescription: string | undefined) {
  return stateDescription === undefined
    ? false
    : stateDescription !== IN_PROGRESS;
}

export const GameOverModal = ({
  stateDescription,
  gameWord,
  setNewGame,
}: Props) => {
  return (
    <Modal
      data-testid="gameOverModal"
      open={isGameOver(stateDescription)}
      closeAfterTransition
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style} width={{ xs: "70vw", sm: "40vw", md: "20vw" }}>
        <Typography variant="h3" component="h2">
          You {stateDescription}!
        </Typography>
        {stateDescription === "lost" && (
          <Typography variant="h5">The word was {gameWord}</Typography>
        )}
        <Box pt="4vh">
          <Button
            data-testid="returnToStartBtn"
            onClick={() => setNewGame(undefined)}
          >
            <b>Return to start screen</b>
          </Button>
        </Box>
      </Box>
    </Modal>
  );
};
