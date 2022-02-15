/* eslint-disable no-restricted-imports */
import { Observable, of } from "rxjs";
import { Game } from "../../domain/Game";
import { GameGatewayImpl } from "./RestGameGateway";
import { mock, MockProxy } from "jest-mock-extended";
import { Client } from "../api/Client";
import { NEW_GAME_URL } from "../../RouteConstants";

describe("Game gateway", () => {
  let client: MockProxy<Client>;
  let gameGateway: GameGatewayImpl;
  beforeEach(() => {
    client = mock<Client>();
    gameGateway = new GameGatewayImpl(client);
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
    client.post.mockReturnValue(of(expectedGame));
    const gameObservable$: Observable<Game> = gameGateway.createGame();

    gameObservable$.subscribe((response) => {
      expect(client.post).toBeCalledWith(NEW_GAME_URL);
      expect(response).toBe(expectedGame);
      done();
    });
  });
});
