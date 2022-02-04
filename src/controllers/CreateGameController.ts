import { BoundaryGameDataStruct } from "../use_cases/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../use_cases/CreateGameUseCase";

export class CreateGameController {
    private readonly createGameUC : CreateGameUseCase

    constructor(interactor : CreateGameUseCase) {
        this.createGameUC = interactor;
    }

    execute() : BoundaryGameDataStruct {
        return this.createGameUC.execute();
    }
}