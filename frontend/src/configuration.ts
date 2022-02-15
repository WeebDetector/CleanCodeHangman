import { GameB2VConverter } from "./controllers/GameB2VConverter";
import { StartGameController } from "./controllers/StartGameController";
import { RestGameGateway } from "./gateways/implementation/RestGameGateway";
import { RxJsAjaxClient } from "./gateways/implementation/RxJsAjaxClient";
import { GameD2BConverter } from "./use-cases/implementation/GameD2BConverter";
import { StartNewGameInteractor } from "./use-cases/implementation/StartNewGameInteractor";


let url;
  if (process.env.REACT_APP_BASE_URL === undefined)
    throw new Error("Url not found");
  else url = process.env.REACT_APP_BASE_URL;

  const client = new RxJsAjaxClient(url);
  const gameGW = new RestGameGateway(client);
  const converterD2B = new GameD2BConverter();
  const startNewGameUC = new StartNewGameInteractor(gameGW, converterD2B);
  const converterB2V = new GameB2VConverter();
  export const startGameController = new StartGameController(
    startNewGameUC,
    converterB2V
  );