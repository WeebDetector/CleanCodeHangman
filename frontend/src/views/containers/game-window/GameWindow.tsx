/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import { ViewGuessResponse } from "../../../controllers/models/ViewGuessResponse";
import { LetterKeyboard } from "../letter-keyboard/LetterKeyboard";
import { UnderlinedWord } from "../../components/UnderlinedWord";
import { Box } from "@material-ui/core";
import { HangmanIllustration } from "../../components/HangmanIllustration";

interface Props {
  newGame: ViewNewGame;
}

export const GameWindow = ({ newGame }: Props) => {
  const [response, setResponse] = useState<ViewGuessResponse>();

  const lettersGuessed = response === undefined ? [] : response.lettersGuessed;
  const missedGuesses = response === undefined ? 0 : response.missedGuesses

  return (
    <Box
      mt="10vh"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HangmanIllustration drawingState={missedGuesses} />
      {response === undefined ? (
        <UnderlinedWord data-testid="gameWord" word={newGame.chosenWord} />
      ) : (
        <UnderlinedWord data-testid="gameWord" word={response.chosenWord} />
      )}
      <LetterKeyboard
        setResponse={setResponse}
        playerId={newGame.playerId}
        lettersGuessed={lettersGuessed}
      />
    </Box>
  );
};
