/* eslint-disable no-restricted-imports */
import { Box, Typography } from "@material-ui/core";
import React, { CSSProperties } from "react";

const TITLE: string[] = ["H", "A", "N", "G", "M", "A", "N"];

function createStyleOptions(letter: string): CSSProperties {
  let styleOptions: CSSProperties;
  letter.toUpperCase() !== "H"
    ? (styleOptions = {
        textTransform: "uppercase",
        textDecorationThickness: "5px",
        textDecorationLine: "underline",
        paddingLeft: "1vw",
      })
    : (styleOptions = {
        textTransform: "uppercase",
        textDecorationThickness: "5px",
        textDecorationLine: "underline",
      });

  return styleOptions;
}

export const GameTitle = () => {
  return (
    <Box sx={{ display: "inline-flex" }}>
      {TITLE.map((letter, index) => {
        return (
          <Typography
            key={"title-letter-" + index}
            variant="h1"
            style={createStyleOptions(letter)}
          >
            {letter}
          </Typography>
        );
      })}
    </Box>
  );
};
