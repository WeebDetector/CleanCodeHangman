/* eslint-disable no-restricted-imports */
import React from "react";
import { ViewGame } from "../../../controllers/models/ViewGame";
import "@testing-library/jest-dom/extend-expect";

interface ViewGameInterface {
  game: ViewGame;
}

export const GameWindow = ({ game }: ViewGameInterface) => {
  return <div data-testid="player-id">{game.playerId}</div>;
};
