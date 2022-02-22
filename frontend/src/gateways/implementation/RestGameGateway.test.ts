/* eslint-disable no-restricted-imports */
import { Observable, of } from "rxjs";
import { NewGame } from "../../domain/NewGame";
import { RestGameGateway } from "./RestGameGateway";
import { mock, MockProxy } from "jest-mock-extended";
import { Client } from "../api/Client";
import { GameInProgress } from "../../domain/GameInProgress";

describe("Game gateway", () => {
  let client: MockProxy<Client>;
  let gameGateway: RestGameGateway;
  beforeEach(() => {
    client = mock<Client>();
    gameGateway = new RestGameGateway(client);
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
    client.post.mockReturnValue(of(expectedGame));
    const gameObservable$: Observable<NewGame> = gameGateway.createGame();

    gameObservable$.subscribe((response) => {
      expect(response).toBe(expectedGame);
      done();
    });
  });

  test("Guess verification", (done) => {
    const expectedGame = new GameInProgress(
      true,
      "in-progress",
      [
        [0, "_"],
        [1, "_"],
        [2, "_"],
        [3, "_"],
        [4, "_"],
        [5, "_"],
      ],
      ["a"]
    );
    client.post.mockReturnValue(of(expectedGame));
    const gameObservable$: Observable<GameInProgress> = gameGateway.verifyGuess(
      1,
      "a"
    );

    gameObservable$.subscribe((response) => {
      expect(response).toBe(expectedGame);
      done();
    });
  });
});
