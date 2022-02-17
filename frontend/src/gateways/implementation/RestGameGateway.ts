/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { FreshGame } from "../../domain/FreshGame";
import { Client } from "../api/Client";
import { GameGateway } from "../api/GameGateway";
import { GUESS_PATH, NEW_GAME_PATH } from "../../RouteConstants";
import { GameInProgress } from "../../domain/GameInProgress";

export class RestGameGateway implements GameGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  createGame(): Observable<FreshGame> {
    return this.client.post<FreshGame>(NEW_GAME_PATH);
  }

  verifyGuess(
    playerId: number,
    letterGuessed: string
  ): Observable<GameInProgress> {
    const body = {
      userId: playerId,
      letterGuessed: letterGuessed,
    };
    return this.client.post<GameInProgress>(GUESS_PATH, body);
  }
}
