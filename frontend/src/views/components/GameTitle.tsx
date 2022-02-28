/* eslint-disable no-restricted-imports */
import { Box, Typography } from "@material-ui/core";
import React, { CSSProperties } from "react";

const TITLE: string[] = ["H", "A", "N", "G", "M", "A", "N"];

export const GameTitle = () => {
  return (
    <Box sx={{ display: "inline-flex" }}>
      {TITLE.map((letter, index) => {
        return (
          <Typography
            key={"title-letter-" + index}
            variant="h1" 
          >
            {letter}
          </Typography>
        );
      })}
    </Box>
  );
};
