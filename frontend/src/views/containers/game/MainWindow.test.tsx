/**
 * @jest-environment jsdom
 */
/* eslint-disable no-restricted-imports */
import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { MainWindow } from "./MainWindow";
import { ViewGame } from "../../../controllers/models/ViewGame";

jest.mock("../initial-window/InitialWindow", () => ({
  InitialWindow: () => <div data-testid="initial-window" />,
}));

describe("Main window tests", () => {
  test("Loads the initial window when game is undefined", () => {
    render(<MainWindow />);

    expect(screen.getByTestId("initial-window")).toBeInTheDocument();
  });

  test("Loads game window when game is defined", () => {
    const game = new ViewGame(1, "______");
    const useStateMock: any = () => [game, jest.fn()];
    jest.spyOn(React, "useState").mockImplementation(useStateMock);

    render(<MainWindow />);

    expect(screen.getByTestId("game-window")).toBeInTheDocument();
  });
});

jest.mock("../game-window/GameWindow", () => ({
  GameWindow: () => <div data-testid="game-window" />,
}));

jest.mock("../initial-window/InitialWindow", () => ({
  InitialWindow: () => <div data-testid="initial-window" />,
}));
