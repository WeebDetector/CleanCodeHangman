/**
 * @jest-environment jsdom
 */
/* eslint-disable no-restricted-imports */
import React from "react";
import { render, screen } from "@testing-library/react";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import "@testing-library/jest-dom/extend-expect";
import { GameWindow } from "./GameWindow";

describe("Game window tests", () => {
  test("Window is rendered correctly", () => {
    const game = new ViewNewGame(1, "______");

    render(<GameWindow newGame={game} />);

    expect(screen.getByTestId("game-word")).toBeInTheDocument();
    expect(screen.getByTestId("letterKeyboard")).toBeInTheDocument();
  });
});

jest.mock("../../components/UnderlinedWord", () => ({
  UnderlinedWord: () => <div data-testid="game-word" />,
}));