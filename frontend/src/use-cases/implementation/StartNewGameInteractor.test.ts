/* eslint-disable no-restricted-imports */
import { Observable, of } from "rxjs";
import { NewGame } from "../../domain/NewGame";
import { mock, MockProxy } from "jest-mock-extended";
import { GameGateway } from "../../gateways/api/GameGateway";
import { StartNewGameInteractor } from "./StartNewGameInteractor";
import { BoundaryNewGame } from "../model/BoundaryNewGame";
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
    const expectedGame = new NewGame(1, [
      [0, "_"],
      [1, "_"],
      [2, "_"],
      [3, "_"],
      [4, "_"],
      [5, "_"],
    ]);

    const expectedGameBoundary = new BoundaryNewGame(1, "______");
    gameGW.createGame.mockReturnValue(of(expectedGame));
    gameD2BConverter.convert.mockReturnValue(expectedGameBoundary);
    const gameObservable$: Observable<BoundaryNewGame> =
      newGameInteractor.startGame();

    gameObservable$.subscribe((response) => {
      expect(response).toStrictEqual(expectedGameBoundary);
      done();
    });
  });
});
