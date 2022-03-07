/* eslint-disable no-restricted-imports */
import { Box, Button } from "@material-ui/core";
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
    <Box
      data-testid="letterKeyboard"
      key="letterKeyboard"
      pt="10vh"
      sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      {letterSequence.map((row, index) => (
        <Box key={"btn-row-" + index} pb="0.5vh">
          {row.map((letter) => (
            <Button
              data-testid={"btn-" + letter}
              key={letter}
              onClick={() => {
                guess(playerId, letter.toLowerCase());
              }}
              disabled={isLetterClicked(letter.toLowerCase(), lettersGuessed)}
              style={{
                marginRight: "0.1vw",
                marginLeft: "0.1vw",
                fontSize: "20px",
              }}
            >
              <b>{letter}</b>
            </Button>
          ))}
        </Box>
      ))}
    </Box>
  );
};
