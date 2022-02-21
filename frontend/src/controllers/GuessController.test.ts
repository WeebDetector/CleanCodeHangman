/* eslint-disable no-restricted-imports */
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { GuessUseCase } from "../use-cases/api/GuessUseCase";
import { BoundaryGameInProgress } from "../use-cases/model/BoundaryGameInProgress";
import { GameB2VConverter } from "./GameB2VConverter";
import { GuessController } from "./GuessController";
import { ViewGameInProgress } from "./models/ViewGameInProgress";

describe("Guess Controller", () => {
  let guessUC: MockProxy<GuessUseCase>;
  let converter: MockProxy<GameB2VConverter>;
  let guessController: GuessController;
  let expectedUCValue: BoundaryGameInProgress;
  let expectedControllerValue: ViewGameInProgress;

  beforeEach(() => {
    guessUC = mock<GuessUseCase>();
    converter = mock<GameB2VConverter>();
    guessController = new GuessController(guessUC, converter);
    expectedUCValue = new BoundaryGameInProgress(true, "in-progress", "______");
    expectedControllerValue = new ViewGameInProgress(
      true,
      "in-progress",
      "______"
    );
  });

  test("Guess is received", (done) => {
    guessUC.guess.mockReturnValue(of(expectedUCValue));
    converter.convertGameInProgress.mockReturnValue(expectedControllerValue);

    guessController.guess(1, "a").subscribe((response) => {
      expect(guessUC.guess).toBeCalledWith(1, "a");
      expect(response).toStrictEqual(expectedControllerValue);
      done();
    });
  });
});
