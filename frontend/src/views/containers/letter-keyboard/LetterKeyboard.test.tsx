/**
 * @jest-environment jsdom
 */
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { LetterKeyboard } from "./LetterKeyboard";
import * as useLetterKeyboard from "./useLetterKeyboard";

describe("Letter keyboard tests", () => {
  test("Button click calls the hook", () => {
    const setStateMock = jest.fn();
    jest.spyOn(useLetterKeyboard, "default").mockReturnValue(setStateMock);
    render(
      <LetterKeyboard setGame={setStateMock} playerId={1} lettersGuessed={[]} />
    );
    fireEvent.click(screen.getByTestId("btn-A"));

    expect(setStateMock).toHaveBeenCalledWith(1, "a");
  });
});
