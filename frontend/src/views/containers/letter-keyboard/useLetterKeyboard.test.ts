/**
 * @jest-environment jsdom
 */

/* eslint-disable no-restricted-imports */
import { of } from "rxjs";
import useLetterKeyboard from "./useLetterKeyboard";
import { mock, MockProxy } from "jest-mock-extended";
import { renderHook } from "@testing-library/react-hooks";
import { act } from "react-dom/test-utils";
import { GuessController } from "../../../controllers/GuessController";
import { ViewGuessResponse } from "../../../controllers/models/ViewGuessResponse";

describe("Use Letter Keyboard Hook", () => {
  let guessController: MockProxy<GuessController>;

  beforeEach(() => {
    guessController = mock<GuessController>();
  });

  test("Making a guess", () => {
    const expectedControllerValue = new ViewGuessResponse(
      true,
      "in-progress",
      "______",
      ["a"]
    );
    guessController.guess.mockReturnValue(of(expectedControllerValue));
    const setStateMock = jest.fn();
    const { result } = renderHook(() =>
      useLetterKeyboard(guessController, setStateMock)
    );

    act(() => result.current(1, "a"));

    expect(setStateMock).toHaveBeenCalled();
  });
});
