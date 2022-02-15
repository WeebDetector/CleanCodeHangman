/* eslint-disable no-restricted-imports */
import { of } from "rxjs";
import { mock, MockProxy } from "jest-mock-extended";
import { StartNewGameUseCase } from "../use-cases/api/StartNewGameUseCase";
import { StartGameController } from "./StartGameController";
import { GameBoundary } from "../use-cases/model/GameBoundary";
import { GameView } from "./models/GameView";

describe("Start New Game Controller", () => {
  let newGameUC: MockProxy<StartNewGameUseCase>;
  let newGameController: StartGameController;

  beforeEach(() => {
    newGameUC = mock<StartNewGameUseCase>();
    newGameController = new StartGameController(newGameUC);
  });

  test("New game is created and returned", (done) => {
    const expectedUCValue = new GameBoundary(1, "______");
    const expectedControllerValue = new GameView(1, "______");
    newGameUC.startGame.mockReturnValue(of(expectedUCValue));

    newGameController.startGame().subscribe((response) => {
      expect(newGameUC.startGame).toBeCalled();
      expect(response).toStrictEqual(expectedControllerValue);
      done();
    });
  });
});
