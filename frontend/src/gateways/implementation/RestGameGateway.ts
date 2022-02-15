/* eslint-disable no-restricted-imports */
import { Observable } from "rxjs";
import { Game } from "../../domain/Game";
import { Client } from "../api/Client";
import { GameGateway } from "../api/GameGateway";
import { newGameURL } from "../../RouteConstants";

export class GameGatewayImpl implements GameGateway {
  private readonly client: Client;

  constructor(client: Client) {
    this.client = client;
  }

  createGame(): Observable<Game> {
    return this.client.post<Game>(newGameURL);
  }
}
