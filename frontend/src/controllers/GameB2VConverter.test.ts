/* eslint-disable no-restricted-imports */
import { BoundaryGame } from "../use-cases/model/BoundaryGame";
import { BoundaryGameInProgress } from "../use-cases/model/BoundaryGameInProgress";
import { GameB2VConverter } from "./GameB2VConverter";
import { ViewGame } from "./models/ViewGame";
import { ViewGameInProgress } from "./models/ViewGameInProgress";

describe("Game B2V Converter ", () => {
  let converter: GameB2VConverter;
  beforeEach(() => {
    converter = new GameB2VConverter();
  });

  test("Boundary to view conversion", () => {
    const gameBeforeConversion = new BoundaryGame(1, "______");
    const gameAfterConversion = new ViewGame(1, "______");

    expect(converter.convert(gameBeforeConversion)).toStrictEqual(
      gameAfterConversion
    );
  });

  test("Boundary to view in progress conversion", () => {
    const gameBefore = new BoundaryGameInProgress(
      true,
      "in-progress",
      "______"
    );
    const gameAfter = new ViewGameInProgress(true, "in-progress", "______");

    expect(converter.convertGameInProgress(gameBefore)).toEqual(gameAfter);
  });
});
