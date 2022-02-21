/* eslint-disable no-restricted-imports */
import { Button } from "@material-ui/core";
import React from "react";
import { guessController } from "../../../Configuration";
import { ViewGameInProgress } from "../../../controllers/models/ViewGameInProgress";
import useLetterKeyboard from "./useLetterKeyboard";

interface Props {
  setGame: (game: ViewGameInProgress) => void;
}

const LETTERS_CLICKED: string[] = [];

function isLetterClicked(letter: string) {
  if (!LETTERS_CLICKED.includes(letter)) {
    return false;
  }
  return true;
}

export const LetterKeyboard = ({ setGame }: Props) => {
  const letterSequence: string[][] = [
    ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
    ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
    ["Z", "X", "C", "V", "B", "N", "M"],
  ];
  const guess = useLetterKeyboard(guessController, setGame);
  //@ts-ignore
  const userId: number = sessionStorage.getItem("userId");

  return (
    <div data-testid="letterKeyboard" key="letterKeyboard">
      {letterSequence.map((row, index) => (
        <div key={index}>
          {row.map((letter, index) => (
            <Button
              data-testid={letter}
              key={letter}
              onClick={() => {
                guess(userId, letter.toLowerCase());
                LETTERS_CLICKED.push(letter);
              }}
              disabled={isLetterClicked(letter)}
            >
              {letter}
            </Button>
          ))}
        </div>
      ))}
    </div>
  );
};
