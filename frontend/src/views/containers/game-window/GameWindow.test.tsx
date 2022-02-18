/**
 * @jest-environment jsdom
 */
/* eslint-disable no-restricted-imports */
import React from "react";
import { render, screen } from "@testing-library/react";
import { ViewGame } from "../../../controllers/models/ViewGame";
import { GameWindow } from "./GameWindow";

describe("Game window tests", () => {
  test("Window is rendered correctly", () => {
    const game = new ViewGame(1, "______");

    render(<GameWindow game={game} />);

    expect(screen.getByTestId("player-id")).toBeInTheDocument();
  });
});
