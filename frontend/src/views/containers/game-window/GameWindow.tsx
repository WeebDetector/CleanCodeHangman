/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import { ViewGuessResponse } from "../../../controllers/models/ViewGuessResponse";
import { LetterKeyboard } from "../letter-keyboard/LetterKeyboard";

interface Props {
  newGame: ViewNewGame;
}

export const GameWindow = ({ newGame }: Props) => {
  const [response, setResponse] = useState<ViewGuessResponse>();

  const lettersGuessed = response === undefined ? [] : response.lettersGuessed;

  return (
    <div>
      {response === undefined ? (
        <h1 data-testid="gameWord">{newGame.chosenWord}</h1>
      ) : (
        <h1 data-testid="gameWord">{response.chosenWord}</h1>
      )}
      <LetterKeyboard
        setResponse={setResponse}
        playerId={newGame.playerId}
        lettersGuessed={lettersGuessed}
      />
    </div>
  );
};
