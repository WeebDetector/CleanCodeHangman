/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { Game } from "../../domain/Game";
import { Client } from "../api/Client";
import { GameGateway } from "../api/GameGateway";
import { NEW_GAME_PATH } from "../../RouteConstants";

export class RestGameGateway implements GameGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  createGame(): Observable<Game> {
    return this.client.post<Game>(NEW_GAME_PATH);
  }
}
