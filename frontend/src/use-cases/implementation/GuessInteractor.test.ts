/* eslint-disable no-restricted-imports */
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { GuessResponse } from "../../domain/GuessResponse";
import { GameGateway } from "../../gateways/api/GameGateway";
import { BoundaryGuessResponse } from "../model/BoundaryGuessResponse";
import { GameD2BConverter } from "./GameD2BConverter";
import { GuessInteractor } from "./GuessInteractor";

describe("Guess Interactor", () => {
  let gameGW: MockProxy<GameGateway>;
  let gameD2BConverter: MockProxy<GameD2BConverter>;
  let guessInteractor: GuessInteractor;
  let expectedGame: GuessResponse;
  let expectedGameBoundary: BoundaryGuessResponse;

  beforeEach(() => {
    gameGW = mock<GameGateway>();
    gameD2BConverter = mock<GameD2BConverter>();
    guessInteractor = new GuessInteractor(gameGW, gameD2BConverter);
    expectedGame = new GuessResponse(
      true,
      "in-progress",
      [
        [0, "_"],
        [1, "_"],
        [2, "a"],
        [3, "_"],
        [4, "_"],
        [5, "_"],
      ],
      ["a"]
    );
    expectedGameBoundary = new BoundaryGuessResponse(
      true,
      "in-progress",
      "__a___",
      ["a"]
    );
  });

  test("Guess is received", (done) => {
    gameGW.verifyGuess.mockReturnValue(of(expectedGame));
    gameD2BConverter.convertGuessResponse.mockReturnValue(expectedGameBoundary);

    guessInteractor.guess(1, "a").subscribe((response) => {
      expect(response).toStrictEqual(expectedGameBoundary);
      done();
    });
  });
});
