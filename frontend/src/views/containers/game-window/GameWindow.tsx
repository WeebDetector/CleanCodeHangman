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
  console.log(newGame);
  let index = 0;
  const [response, setResponse] = useState<ViewGuessResponse>();

  const lettersGuessed = response === undefined ? [] : response.lettersGuessed;

  index++;

  console.log(index);

  return (
    <Box
      m="25vh"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <HangmanIllustration drawingState={0} />
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
