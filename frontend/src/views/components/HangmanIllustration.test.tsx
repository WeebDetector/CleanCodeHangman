/**
 * @jest-environment jsdom
 */
/* eslint-disable no-restricted-imports */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { HangmanIllustration } from "./HangmanIllustration";

describe("Hangman illustration tests", () => {
  test("Illustration is rendered correctly", () => {
    render(<HangmanIllustration drawingState={5} />);

    expect(screen.getByTestId("0")).toBeInTheDocument();
    expect(screen.getByTestId("1")).toBeInTheDocument();
    expect(screen.getByTestId("2")).toBeInTheDocument();
    expect(screen.getByTestId("3")).toBeInTheDocument();
    expect(screen.getByTestId("4")).toBeInTheDocument();
    expect(screen.getByTestId("head")).toBeInTheDocument();
  });
});
