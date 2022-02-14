import React, { useEffect, useState } from "react";
import { ajax } from "rxjs/ajax";
import { map } from "rxjs/operators";
// eslint-disable-next-line no-restricted-imports
import { Game } from "../../../domain/Game";
//const ViewModel = require("../../model/ViewModel");

function useGame() {
  const [game, setNewGame] = useState(new Game(-1, []));
  const url = "http://localhost:3000/games";

  useEffect(() => {
    const sub$ = ajax
      .post<Game>(url)
      .pipe(
        map((received) => {
          const newGame = new Game(
            received.response.playerId,
            received.response.chosenWord
          );
          setNewGame(newGame);
        })
      )
      .subscribe();

    return () => sub$.unsubscribe();
  }, []);

  return <div>{game.playerId}</div>;
}

export default useGame;
