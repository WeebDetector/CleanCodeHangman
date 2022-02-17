/**
 * @jest-environment jsdom
 */

/* eslint-disable no-restricted-imports */
import { of } from "rxjs";
import { useGame } from "./useGame";
import { mock, MockProxy } from "jest-mock-extended";
import { renderHook } from "@testing-library/react-hooks";
import { StartGameController } from "../../../controllers/StartGameController";
import { ViewGame } from "../../../controllers/models/ViewGame";
import { act } from "react-dom/test-utils";

describe("Use Game Hook", () => {
  let startGameController: MockProxy<StartGameController>;

  beforeEach(() => {
    startGameController = mock<StartGameController>();
  });

  test("New game creation", () => {
    const expectedControllerValue = new ViewGame(1, "______");
    startGameController.startGame.mockReturnValue(of(expectedControllerValue));
    const setStateMock = jest.fn();
    const { result, rerender } = renderHook(() =>
      useGame(startGameController, setStateMock)
    );

    act(() => {
      result.current.startGame();
    });

    expect(setStateMock).toHaveBeenCalled();
  });
});
