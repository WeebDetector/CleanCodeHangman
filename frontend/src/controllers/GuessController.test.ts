/* eslint-disable no-restricted-imports */
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { GuessUseCase } from "../use-cases/api/GuessUseCase";
import { BoundaryGuessResponse } from "../use-cases/model/BoundaryGuessResponse";
import { GameB2VConverter } from "./GameB2VConverter";
import { GuessController } from "./GuessController";
import { ViewGuessResponse } from "./models/ViewGuessResponse";

describe("Guess Controller", () => {
  let guessUC: MockProxy<GuessUseCase>;
  let converter: MockProxy<GameB2VConverter>;
  let guessController: GuessController;
  let expectedUCValue: BoundaryGuessResponse;
  let expectedControllerValue: ViewGuessResponse;

  beforeEach(() => {
    guessUC = mock<GuessUseCase>();
    converter = mock<GameB2VConverter>();
    guessController = new GuessController(guessUC, converter);
    expectedUCValue = new BoundaryGuessResponse(true, "in-progress", "______", [
      "a",
    ]);
    expectedControllerValue = new ViewGuessResponse(
      true,
      "in-progress",
      "______",
      ["a"]
    );
  });

  test("Guess is received", (done) => {
    guessUC.guess.mockReturnValue(of(expectedUCValue));
    converter.convertGuessResponse.mockReturnValue(expectedControllerValue);

    guessController.guess(1, "a").subscribe((response) => {
      expect(guessUC.guess).toBeCalledWith(1, "a");
      expect(response).toStrictEqual(expectedControllerValue);
      done();
    });
  });
});
