import { GameB2VConverter } from "./controllers/GameB2VConverter";
import { GuessController } from "./controllers/GuessController";
import { StartGameController } from "./controllers/StartGameController";
import { RestGameGateway } from "./gateways/implementation/RestGameGateway";
import { RxJsAjaxClient } from "./gateways/implementation/RxJsAjaxClient";
import { GameD2BConverter } from "./use-cases/implementation/GameD2BConverter";
import { GuessInteractor } from "./use-cases/implementation/GuessInteractor";
import { StartNewGameInteractor } from "./use-cases/implementation/StartNewGameInteractor";

//@ts-ignore
const client = new RxJsAjaxClient(process.env.REACT_APP_API_URL);
const gameGW = new RestGameGateway(client);
const converterD2B = new GameD2BConverter();
const startNewGameUC = new StartNewGameInteractor(gameGW, converterD2B);
const guessUC = new GuessInteractor(gameGW, converterD2B);
const converterB2V = new GameB2VConverter();

export const startGameController = new StartGameController(
  startNewGameUC,
  converterB2V
);
export const guessController = new GuessController(guessUC, converterB2V);
