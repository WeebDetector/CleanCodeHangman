import { BoundaryGameDataStruct } from "../usecases/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../usecases/CreateGameUseCase";

export class CreateGameController {
    private readonly createGameInteractor : CreateGameUseCase

    constructor(interactor : CreateGameUseCase) {
        this.createGameInteractor = interactor;
    }

    execute() : BoundaryGameDataStruct {
        return this.createGameInteractor.execute();
    }
}