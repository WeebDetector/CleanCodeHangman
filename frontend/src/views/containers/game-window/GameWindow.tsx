/* eslint-disable no-restricted-imports */
import React, { useState } from "react";
import { ViewGame } from "../../../controllers/models/ViewGame";
import { ViewGameInProgress } from "../../../controllers/models/ViewGameInProgress";
import { LetterKeyboard } from "../letter-keyboard/LetterKeyboard";

interface Props {
  game: ViewGame;
}

export const GameWindow = ({ game }: Props) => {
  const [newGame, setGame] = useState<ViewGameInProgress>();

  return (
    <div>
      {newGame === undefined ? (
        <h1 data-testid="gameWord">{game.chosenWord}</h1>
      ) : (
        <h1 data-testid="gameWord">{newGame.chosenWord}</h1>
      )}
      <LetterKeyboard setGame={setGame} playerId={game.playerId} />
    </div>
  );
};
