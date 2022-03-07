/**
 * @jest-environment jsdom
 */
/* eslint-disable no-restricted-imports */
import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { GameOverModal } from "./GameOverModal";

describe("Game over modal tests", () => {
  test("Modal opens up and renders calls setState if in-modal button clicked", () => {
    const setStateMock = jest.fn();
    render(
      <GameOverModal
        stateDescription="lost"
        gameWord="table"
        setNewGame={setStateMock}
      />
    );
    fireEvent.click(screen.getByTestId("returnToStartBtn"));

    expect(setStateMock).toHaveBeenCalled();
  });
});
