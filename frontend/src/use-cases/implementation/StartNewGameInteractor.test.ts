/* eslint-disable no-restricted-imports */
import { Observable, of } from "rxjs";
import { Game } from "../../domain/Game";
import { mock, MockProxy } from "jest-mock-extended";
import { GameGateway } from "../../gateways/api/GameGateway";
import { StartNewGameInteractor } from "./StartNewGameInteractor";

describe("Start New Game Interactor", () => {
  let gameGW: MockProxy<GameGateway>;
  let newGameInteractor: StartNewGameInteractor;

  beforeEach(() => {
    gameGW = mock<GameGateway>();
    newGameInteractor = new StartNewGameInteractor(gameGW);
  });

  test("New game is created and returned", (done) => {
    const expectedGame = new Game(1, [
      [0, "_"],
      [1, "_"],
      [2, "_"],
      [3, "_"],
      [4, "_"],
      [5, "_"],
    ]);
    gameGW.createGame.mockReturnValue(of(expectedGame));
    const gameObservable$: Observable<Game> = newGameInteractor.startGame();

    gameObservable$.subscribe((response) => {
      expect(response).toBe(expectedGame);
    });
    done();
  });
});
