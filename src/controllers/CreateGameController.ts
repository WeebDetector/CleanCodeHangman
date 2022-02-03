import { BoundaryGameDataStruct } from "../use_cases/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../use_cases/CreateGameUseCase";

export class CreateGameController {
    private readonly createGameInteractor : CreateGameUseCase

    constructor(interactor : CreateGameUseCase) {
        this.createGameInteractor = interactor;
    }

    execute() : BoundaryGameDataStruct {
        return this.createGameInteractor.execute();
    }
}