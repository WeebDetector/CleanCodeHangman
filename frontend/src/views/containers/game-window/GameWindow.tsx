/* eslint-disable no-restricted-imports */
import React from "react";
import { ViewGame } from "../../../controllers/models/ViewGame";

interface ViewGameInterface {
  game: ViewGame;
}

const GameWindow = ({ game }: ViewGameInterface) => {
  return <div>{game.playerId}</div>;
};

export default GameWindow;
