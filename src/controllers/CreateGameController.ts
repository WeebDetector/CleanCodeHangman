import { Request, Response } from "express";
import { BoundaryGameDataStruct } from "../use_cases/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../use_cases/CreateGameUseCase";

export class CreateGameController {
    private readonly createGameUC : CreateGameUseCase

    constructor(createGameUC : CreateGameUseCase) {
        this.createGameUC = createGameUC;
    }

    execute(req : Request, res : Response) : void {
        const interactorResponse = this.createGameUC.execute();
        res.status(201).json({
            playerId: interactorResponse.getPlayerId(),
            chosenWord: interactorResponse.getChosenWord(),
        });
    }
}