/* eslint-disable no-restricted-imports */
import { mock, MockProxy } from "jest-mock-extended";
import { of } from "rxjs";
import { GameGateway } from "../../gateways/api/GameGateway";
import { GameD2BConverter } from "./GameD2BConverter";
import { GuessInteractor } from "./GuessInteractor";
import {
  expectedGame,
  expectedGameBoundary,
} from "../../GuessInteractorTestConfig";

describe("Guess Interactor", () => {
  let gameGW: MockProxy<GameGateway>;
  let gameD2BConverter: MockProxy<GameD2BConverter>;
  let guessInteractor: GuessInteractor;

  beforeEach(() => {
    gameGW = mock<GameGateway>();
    gameD2BConverter = mock<GameD2BConverter>();
    guessInteractor = new GuessInteractor(gameGW, gameD2BConverter);
  });

  test("Guess is received", (done) => {
    gameGW.verifyGuess.mockReturnValue(of(expectedGame));
    gameD2BConverter.convertGameInProgress.mockReturnValue(
      expectedGameBoundary
    );

    guessInteractor.guess(1, "a").subscribe((response) => {
      expect(response).toStrictEqual(expectedGameBoundary);
      done();
    });
  });
});
