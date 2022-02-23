/* eslint-disable no-restricted-imports */
import { of } from "rxjs";
import { mock, MockProxy } from "jest-mock-extended";
import { StartNewGameUseCase } from "../use-cases/api/StartNewGameUseCase";
import { StartGameController } from "./StartGameController";
import { BoundaryNewGame } from "../use-cases/model/BoundaryNewGame";
import { ViewNewGame } from "./models/ViewNewGame";
import { GameB2VConverter } from "./GameB2VConverter";

describe("Start New Game Controller", () => {
  let newGameUC: MockProxy<StartNewGameUseCase>;
  let gameB2VConverter: MockProxy<GameB2VConverter>;
  let newGameController: StartGameController;

  beforeEach(() => {
    newGameUC = mock<StartNewGameUseCase>();
    gameB2VConverter = mock<GameB2VConverter>();
    newGameController = new StartGameController(newGameUC, gameB2VConverter);
  });

  test("New game is created and returned", (done) => {
    const expectedUCValue = new BoundaryNewGame(1, "______");
    const expectedControllerValue = new ViewNewGame(1, "______");
    newGameUC.startGame.mockReturnValue(of(expectedUCValue));
    gameB2VConverter.convert.mockReturnValue(expectedControllerValue);

    newGameController.startGame().subscribe((response) => {
      expect(newGameUC.startGame).toBeCalled();
      expect(response).toStrictEqual(expectedControllerValue);
      done();
    });
  });
});
