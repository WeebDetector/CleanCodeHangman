/* eslint-disable no-restricted-imports */
import { Box, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  word: string;
}

function convertWordToLettersArray(word: string): string[] {
  const lettersArray: string[] = [];

  for (let i = 0; i < word.length; i++) {
    lettersArray.push(word[i].toUpperCase());
  }

  return lettersArray;
}

export const UnderlinedWord = ({ word }: Props) => {
  const variant = word.toUpperCase() === "HANGMAN" ? "h1" : "h2";
  const wordLettersArray = convertWordToLettersArray(word);

  return (
    <Box sx={{ display: "inline-flex", alignItems: "center" }} >
      {wordLettersArray.map((letter, index) => (
        <Typography
          key={"word-letter-" + index}
          data-testid={"word-letter-" + index}
          variant={variant}
        >
          {letter}
        </Typography>
      ))}
    </Box>
  );
};
