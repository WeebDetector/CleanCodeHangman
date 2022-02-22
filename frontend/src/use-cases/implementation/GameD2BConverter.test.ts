/* eslint-disable no-restricted-imports */
import { GameInProgress } from "../../domain/GameInProgress";
import { NewGame } from "../../domain/NewGame";
import { BoundaryGame } from "../model/BoundaryGame";
import { BoundaryGameInProgress } from "../model/BoundaryGameInProgress";
import { GameD2BConverter } from "./GameD2BConverter";

describe("Game D2B Converter", () => {
  let converter: GameD2BConverter;
  let gameInProgressBefore: GameInProgress;
  let gameInProgressAfter: BoundaryGameInProgress;
  beforeEach(() => {
    converter = new GameD2BConverter();
    gameInProgressBefore = new GameInProgress(
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

    gameInProgressAfter = new BoundaryGameInProgress(
      true,
      "in-progress",
      "______",
      ["a"]
    );
  });
  test("Domain model to boundary new conversion", () => {
    const gameBefore = new NewGame(1, [
      [0, "_"],
      [1, "_"],
      [2, "_"],
      [3, "_"],
      [4, "_"],
      [5, "_"],
    ]);
    const gameAfter = new BoundaryGame(1, "______");

    expect(converter.convert(gameBefore)).toStrictEqual(gameAfter);
  });

  test("Domain model to boundary in progress conversion", () => {
    expect(converter.convertGameInProgress(gameInProgressBefore)).toStrictEqual(
      gameInProgressAfter
    );
  });
});
