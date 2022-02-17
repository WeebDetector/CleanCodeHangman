/* eslint-disable no-restricted-imports */
import { mock, MockProxy } from "jest-mock-extended";
import { Observable, of } from "rxjs";
import { GameInProgress } from "../../domain/GameInProgress";
import { GameGateway } from "../../gateways/api/GameGateway";
import { BoundaryGameInProgress } from "../model/BoundaryGameInProgress";
import { GameD2BConverter } from "./GameD2BConverter";
import { GuessInteractor } from "./GuessInteractor";

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
    const expectedGame = new GameInProgress(true, "in-progress", [
      [0, "_"],
      [1, "_"],
      [2, "a"],
      [3, "_"],
      [4, "_"],
      [5, "_"],
    ]);

    const expectedGameBoundary = new BoundaryGameInProgress(
      true,
      "in-progress",
      "__a___"
    );
    gameGW.verifyGuess.mockReturnValue(of(expectedGame));
    gameD2BConverter.convertGameInProgress.mockReturnValue(
      expectedGameBoundary
    );

    const gameObservable$: Observable<BoundaryGameInProgress> =
      guessInteractor.guess(1, "a");

    gameObservable$.subscribe((response) => {
      expect(response).toStrictEqual(expectedGameBoundary);
      done();
    });
  });
});
