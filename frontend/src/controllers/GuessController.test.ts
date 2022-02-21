/* eslint-disable no-restricted-imports */
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { GuessUseCase } from "../use-cases/api/GuessUseCase";
import { GameB2VConverter } from "./GameB2VConverter";
import { GuessController } from "./GuessController";
import {
  expectedUCValue,
  expectedControllerValue,
} from "../GuessControllerTestConfig";

describe("Guess Controller", () => {
  let guessUC: MockProxy<GuessUseCase>;
  let converter: MockProxy<GameB2VConverter>;
  let guessController: GuessController;

  beforeEach(() => {
    guessUC = mock<GuessUseCase>();
    converter = mock<GameB2VConverter>();
    guessController = new GuessController(guessUC, converter);
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
