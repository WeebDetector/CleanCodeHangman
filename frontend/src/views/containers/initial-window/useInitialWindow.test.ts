/**
 * @jest-environment jsdom
 */

/* eslint-disable no-restricted-imports */
import { of } from "rxjs";
import useInitialWindow from "./useInitialWindow";
import { mock, MockProxy } from "jest-mock-extended";
import { renderHook } from "@testing-library/react-hooks";
import { StartGameController } from "../../../controllers/StartGameController";
import { ViewNewGame } from "../../../controllers/models/ViewNewGame";
import { act } from "react-dom/test-utils";

describe("Use Initial Window Hook", () => {
  let startGameController: MockProxy<StartGameController>;

  beforeEach(() => {
    startGameController = mock<StartGameController>();
  });

  test("New game creation", () => {
    const expectedControllerValue = new ViewNewGame(1, "______");
    startGameController.startGame.mockReturnValue(of(expectedControllerValue));
    const setStateMock = jest.fn();
    const { result } = renderHook(() =>
      useInitialWindow(startGameController, setStateMock)
    );

    act(() => result.current());

    expect(setStateMock).toHaveBeenCalled();
  });
});
