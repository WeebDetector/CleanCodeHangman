import { Request, Response } from "express";
import { BoundaryGuessResponse } from "../../use_cases/api/entity/BoundaryGuessResponse";
import { GuessUseCase } from "../../use_cases/api/GuessUseCase";
import { RestGuessResponse } from "../api/entity/RestGuessResponse";

export class GuessRoute {
    private readonly guessUC : GuessUseCase

    constructor(guessUC : GuessUseCase) {
        this.guessUC = guessUC;
    }

    isLetterInWord(req : Request, res : Response) : void {
        const data = req.body;
        const interactorResponse = this.guessUC.isLetterInWord(data.userId, data.letterGuessed);
        const restResponse = this.convertB2R(interactorResponse);
        res.status(200).json(restResponse);
    }

    private convertB2R(interactorResponse: BoundaryGuessResponse) : RestGuessResponse {
        const hiddenWordArray = this.convertMapToArray(interactorResponse.getHiddenWord());
        return new RestGuessResponse(interactorResponse.getGuessState(),
                                     interactorResponse.getGameStateDescription(),
                                     hiddenWordArray,
                                     interactorResponse.getLettersGuessed(),
                                     interactorResponse.getMissedGuesses());
    }

    private convertMapToArray(hiddenWordMap : Map<number, string>) {
        return Array.from(hiddenWordMap);
    }
}