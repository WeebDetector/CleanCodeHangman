import { GuessRoute } from "./GuessRoute";
import { GuessUseCase } from "../../use_cases/api/GuessUseCase";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGuessResponse } from "../../use_cases/api/entity/BoundaryGuessResponse";
import { getMockReq, getMockRes } from '@jest-mock/express'
import { RestGuessResponse } from "../api/entity/RestGuessResponse";

describe("Testing guess controller", () => {

    let guessUC : MockProxy<GuessUseCase>;
    let guessController : GuessRoute

    beforeEach(() => {
        guessUC = mock<GuessUseCase>();
        guessController = new GuessRoute(guessUC);
    });

    test("Letter in the word method", () => {
        const freshWordStateMap = new Map<number, string>([
                                [0, '_'], [1, '_'], [2, '_'],
                                [3, '_'], [4, '_']]);
        const freshWordStateArray = Array.from(freshWordStateMap);
        const expectedResponseStruct = new BoundaryGuessResponse(true, "in-progress", freshWordStateMap, new Array(), 0);
        const expectedCallStruct = new RestGuessResponse(true, 'in-progress', freshWordStateArray, new Array(), 0);
        
        guessUC.isLetterInWord.mockReturnValue(expectedResponseStruct);
        
        const req = getMockReq();
        const { res } = getMockRes();
        guessController.isLetterInWord(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining(expectedCallStruct))
    })
})