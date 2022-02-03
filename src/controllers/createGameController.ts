import { CreateGameInteractor } from "../Interactors/createGameInteractor";

export class CreateGameController {
    private readonly useCase : CreateGameInteractor

    constructor(useCase : CreateGameInteractor) {
        this.useCase = useCase;
    }

    execute() {
        return this.useCase.execute();
        //var chosenWord = this.useCase.execute();
    }
}