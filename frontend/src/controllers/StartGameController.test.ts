/* eslint-disable no-restricted-imports */
import { of } from "rxjs";
import { mock, MockProxy } from "jest-mock-extended";
import { StartNewGameUseCase } from "../use-cases/api/StartNewGameUseCase";
import { StartGameController } from "./StartGameController";
import { BoundaryGame } from "../use-cases/model/BoundaryGame";
import { ViewGame } from "./models/ViewGame";
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
    const expectedUCValue = new BoundaryGame(1, "______");
    const expectedControllerValue = new ViewGame(1, "______");
    newGameUC.startGame.mockReturnValue(of(expectedUCValue));
    gameB2VConverter.convert.mockReturnValue(expectedControllerValue);

    newGameController.startGame().subscribe((response) => {
      expect(newGameUC.startGame).toBeCalled();
      expect(response).toStrictEqual(expectedControllerValue);
      done();
    });
  });
});
