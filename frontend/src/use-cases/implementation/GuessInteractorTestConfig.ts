/* eslint-disable no-restricted-imports */
import { GameInProgress } from "../../domain/GameInProgress";
import { BoundaryGameInProgress } from "../model/BoundaryGameInProgress";

export const expectedGame = new GameInProgress(true, "in-progress", [
  [0, "_"],
  [1, "_"],
  [2, "a"],
  [3, "_"],
  [4, "_"],
  [5, "_"],
]);
export const expectedGameBoundary = new BoundaryGameInProgress(
  true,
  "in-progress",
  "__a___"
);
