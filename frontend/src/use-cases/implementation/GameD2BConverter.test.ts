/* eslint-disable no-restricted-imports */
import { NewGame } from "../../domain/NewGame";
import { BoundaryGame } from "../model/BoundaryGame";
import { GameD2BConverter } from "./GameD2BConverter";

describe("Game D2B Converter", () => {
  let converter: GameD2BConverter;
  beforeEach(() => {
    converter = new GameD2BConverter();
  });
  test("Domain model to boundary conversion", () => {
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
});
