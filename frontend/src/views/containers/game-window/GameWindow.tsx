/* eslint-disable no-restricted-imports */
import React from "react";
import { ViewGame } from "../../../controllers/models/ViewGame";

interface Props {
  game: ViewGame;
}

export const GameWindow = ({ game }: Props) => {
  return <div data-testid="player-id">{game.playerId}</div>;
};
