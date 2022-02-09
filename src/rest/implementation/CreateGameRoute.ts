import { Request, Response } from "express";
import { RestGameDataStruct } from "../api/entity/RestGameDataStruct";
import { CreateGameUseCase } from "../../use_cases/api/CreateGameUseCase";
import { BoundaryGameDataStruct } from "../../use_cases/api/entity/BoundaryGameDataStruct";

export class CreateGameRoute {
    private readonly createGameUC : CreateGameUseCase

    constructor(createGameUC : CreateGameUseCase) {
        this.createGameUC = createGameUC;
    }

    execute(req : Request, res : Response) : void {
        const interactorResponse = this.createGameUC.execute();
        const restResponse = this.convertB2R(interactorResponse);
        res.status(201).json(restResponse);
    }

    private convertB2R(interactorResponse: BoundaryGameDataStruct) : RestGameDataStruct {
        return new RestGameDataStruct(interactorResponse.getPlayerId(), interactorResponse.getChosenWord());
    }
}