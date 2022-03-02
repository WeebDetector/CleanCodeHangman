/* eslint-disable no-restricted-imports */
import { BoundaryNewGame } from "../use-cases/model/BoundaryNewGame";
import { BoundaryGuessResponse } from "../use-cases/model/BoundaryGuessResponse";
import { GameB2VConverter } from "./GameB2VConverter";
import { ViewNewGame } from "./models/ViewNewGame";
import { ViewGuessResponse } from "./models/ViewGuessResponse";

describe("Game B2V Converter ", () => {
  let converter: GameB2VConverter;
  beforeEach(() => {
    converter = new GameB2VConverter();
  });

  test("Boundary to view new conversion", () => {
    const gameBeforeConversion = new BoundaryNewGame(1, "______");
    const gameAfterConversion = new ViewNewGame(1, "______");

    expect(converter.convert(gameBeforeConversion)).toStrictEqual(
      gameAfterConversion
    );
  });

  test("Boundary to view guess response conversion", () => {
    const gameBefore = new BoundaryGuessResponse(
      true,
      "in-progress",
      "______",
      ["a"],
      0
    );
    const gameAfter = new ViewGuessResponse(
      true,
      "in-progress",
      "______",
      ["a"],
      0
    );

    expect(converter.convertGuessResponse(gameBefore)).toStrictEqual(gameAfter);
  });
});
