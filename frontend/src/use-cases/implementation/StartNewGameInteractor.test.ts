/* eslint-disable no-restricted-imports */
import { Observable, of } from "rxjs";
import { Game } from "../../domain/Game";
import { mock, MockProxy } from "jest-mock-extended";
import { GameGateway } from "../../gateways/api/GameGateway";
import { StartNewGameInteractor } from "./StartNewGameInteractor";
import { BoundaryGame } from "../model/BoundaryGame";
import { GameD2BConverter } from "./GameD2BConverter";

describe("Start New Game Interactor", () => {
  let gameGW: MockProxy<GameGateway>;
  let gameD2BConverter: MockProxy<GameD2BConverter>;
  let newGameInteractor: StartNewGameInteractor;

  beforeEach(() => {
    gameGW = mock<GameGateway>();
    gameD2BConverter = mock<GameD2BConverter>();
    newGameInteractor = new StartNewGameInteractor(gameGW, gameD2BConverter);
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

    const expectedGameBoundary = new BoundaryGame(1, "______");
    gameGW.createGame.mockReturnValue(of(expectedGame));
    gameD2BConverter.convertD2B.mockReturnValue(expectedGameBoundary);
    const gameObservable$: Observable<BoundaryGame> =
      newGameInteractor.startGame();

    gameObservable$.subscribe((response) => {
      expect(gameGW.createGame).toBeCalled();
      expect(response).toStrictEqual(expectedGameBoundary);
      done();
    });
  });
});
