import { Request, Response } from "express";
import { BoundaryGuessResponse } from "../use_cases/BoundaryGuessResponse";
import { GuessUseCase } from "../use_cases/GuessUseCase";

export class GuessController {
    private readonly guessUC : GuessUseCase

    constructor(guessUC : GuessUseCase) {
        this.guessUC = guessUC;
    }

    isLetterInWord(req : Request, res : Response) : void {
        const data = req.body;
        const interactorResponse = this.guessUC.isLetterInWord(data.userId, data.letterGuessed);
        res.status(200).json({
            guessStatus: interactorResponse.getGuessState(),
            gameState: interactorResponse.getGameStateDescription(),  
        })
    }
}