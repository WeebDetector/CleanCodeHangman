/* eslint-disable no-restricted-imports */
import { Button } from "@material-ui/core";
import React from "react";
import { guessController } from "../../../Configuration";
import { ViewGuessResponse } from "../../../controllers/models/ViewGuessResponse";
import useLetterKeyboard from "./useLetterKeyboard";

interface Props {
  setResponse: (response: ViewGuessResponse) => void;
  playerId: number;
  lettersGuessed: string[];
}

function isLetterClicked(letter: string, lettersGuessed: string[]) {
  return lettersGuessed.includes(letter);
}

export const LetterKeyboard = ({
  setResponse,
  playerId,
  lettersGuessed,
}: Props) => {
  const letterSequence: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const guess = useLetterKeyboard(guessController, setResponse);

  return (
    <div data-testid="letterKeyboard" key="letterKeyboard">
      {letterSequence.map((row, index) => (
        <div key={"btn-row-" + index}>
          {row.map((letter) => (
            <Button
              data-testid={"btn-" + letter}
              key={letter}
              onClick={() => {
                guess(playerId, letter.toLowerCase());
              }}
              disabled={isLetterClicked(letter.toLowerCase(), lettersGuessed)}
            >
              {letter}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
