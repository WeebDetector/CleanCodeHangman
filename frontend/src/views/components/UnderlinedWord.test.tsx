/**
 * @jest-environment jsdom
 */
/* eslint-disable no-restricted-imports */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { UnderlinedWord } from "./UnderlinedWord";

describe("Underlined word tests", () => {
  test("Underlined word is rendered correctly", () => {

    render(<UnderlinedWord word="HANGMAN" />);

    expect(screen.getByTestId("word-letter-0")).toBeInTheDocument();
    expect(screen.getByTestId("word-letter-1")).toBeInTheDocument();
    expect(screen.getByTestId("word-letter-2")).toBeInTheDocument();
    expect(screen.getByTestId("word-letter-3")).toBeInTheDocument();
    expect(screen.getByTestId("word-letter-4")).toBeInTheDocument();
    expect(screen.getByTestId("word-letter-5")).toBeInTheDocument();
    expect(screen.getByTestId("word-letter-6")).toBeInTheDocument();
  });
});