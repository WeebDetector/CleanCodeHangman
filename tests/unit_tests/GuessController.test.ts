import { GuessController } from "../../src/controllers/GuessController";
import { GuessUseCase } from "../../src/use_cases/GuessUseCase";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGuessResponse } from "../../src/use_cases/BoundaryGuessResponse";
import { getMockReq, getMockRes } from '@jest-mock/express'

const EXPECTED_RESPONSE_STRUCT = new BoundaryGuessResponse(true, "in-progress");

describe("Testing guess controller", () => {

    let guessUC : MockProxy<GuessUseCase>;
    let guessController : GuessController
    const GUESS = "a";

    beforeEach(() => {
        guessUC = mock<GuessUseCase>();
        guessController = new GuessController(guessUC);
    });

    test("Letter in the word method", () => {
        guessUC.isLetterInWord.mockReturnValue(EXPECTED_RESPONSE_STRUCT);
        
        const req = getMockReq();
        const { res } = getMockRes();
        guessController.isLetterInWord(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            guessStatus: EXPECTED_RESPONSE_STRUCT.getGuessState(),
            gameState: EXPECTED_RESPONSE_STRUCT.getGameStateDescription(),
        }))
    })
})