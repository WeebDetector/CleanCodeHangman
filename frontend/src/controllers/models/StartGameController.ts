// eslint-disable-next-line no-restricted-imports
import { StartNewGameUseCase } from "../../use-cases/api/StartNewGameUseCase";

export class StartGameController {
  private readonly startGameUC: StartNewGameUseCase;

  constructor(startGameUC: StartNewGameUseCase) {
    this.startGameUC = startGameUC;
  }

  startGame() {
    return this.startGameUC.startGame();
  }
}
