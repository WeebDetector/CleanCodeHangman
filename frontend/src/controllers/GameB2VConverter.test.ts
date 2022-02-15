/* eslint-disable no-restricted-imports */
import { BoundaryGame } from "../use-cases/model/BoundaryGame";
import { GameB2VConverter } from "./GameB2VConverter";
import { ViewGame } from "./models/ViewGame";

describe("Game B2V Converter ", () => {
  let converter: GameB2VConverter;
  beforeEach(() => {
    converter = new GameB2VConverter();
  });

  test("Boundary to view conversion", () => {
    const gameBeforeConversion = new BoundaryGame(1, "______");
    const gameAfterConversion = new ViewGame(1, "______");

    expect(converter.convertB2V(gameBeforeConversion)).toStrictEqual(
      gameAfterConversion
    );
  });
});
