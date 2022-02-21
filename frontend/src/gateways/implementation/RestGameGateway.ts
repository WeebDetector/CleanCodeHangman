/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { NewGame } from "../../domain/NewGame";
import { Client } from "../api/Client";
import { GameGateway } from "../api/GameGateway";
import { GUESSES_PATH, NEW_GAME_PATH } from "../../RouteConstants";
import { GameInProgress } from "../../domain/GameInProgress";

export class RestGameGateway implements GameGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  createGame(): Observable<NewGame> {
    return this.client.post<NewGame>(NEW_GAME_PATH);
  }

  verifyGuess(
    playerId: number,
    letterGuessed: string
  ): Observable<GameInProgress> {
    const body = {
      userId: playerId,
      letterGuessed: letterGuessed,
    };
    return this.client.post<GameInProgress>(GUESSES_PATH, body);
  }
}
