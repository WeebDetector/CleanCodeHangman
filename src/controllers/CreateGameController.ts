import { BoundaryGameDataStruct } from "../use_cases/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../use_cases/CreateGameUseCase";

export class CreateGameController {
    private readonly createGameUC : CreateGameUseCase

    constructor(createGameUC : CreateGameUseCase) {
        this.createGameUC = createGameUC;
    }

    execute() : BoundaryGameDataStruct {
        return this.createGameUC.execute();
    }
}