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

describe("Use Game Hook", () => {
  let startGameController: MockProxy<StartGameController>;

  beforeEach(() => {
    startGameController = mock<StartGameController>();
  });

  test("New game creation", () => {
    const expectedControllerValue = new ViewGame(1, "______");
    startGameController.startGame.mockReturnValue(of(expectedControllerValue));
    const { result, rerender } = renderHook(() => useGame(startGameController));
    const hookReturn = new ViewGame(1, "______");

    expect(result.current).toStrictEqual(hookReturn);
  });
});
