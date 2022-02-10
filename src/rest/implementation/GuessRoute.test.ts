import { GuessRoute } from "./GuessRoute";
import { GuessUseCase } from "../../use_cases/api/GuessUseCase";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGuessResponse } from "../../use_cases/api/entity/BoundaryGuessResponse";
import { getMockReq, getMockRes } from '@jest-mock/express'
import { RestGuessResponse } from "../api/entity/RestGuessResponse";

const EXPECTED_RESPONSE_STRUCT = new BoundaryGuessResponse(true, "in-progress", constructHiddenWord("table"));
const EXPECTED_CALL_STRUCT = new RestGuessResponse(true, 'in-progress', constructArray("table"));

function constructArray(word : string) : [number, string][] {
    const arrayToExpect = new Array();
    for (let i = 0; i < word.length; i++)
        arrayToExpect.push([i, '_']);

    return arrayToExpect;
}

function constructHiddenWord(word : string) : Map<number, string> {
    const hiddenWord = new Map<number, string>();
    for (let i = 0; i < word.length; i++)
        hiddenWord.set(i, '_');

    return hiddenWord;
}

describe("Testing guess controller", () => {

    let guessUC : MockProxy<GuessUseCase>;
    let guessController : GuessRoute

    beforeEach(() => {
        guessUC = mock<GuessUseCase>();
        guessController = new GuessRoute(guessUC);
    });

    test("Letter in the word method", () => {
        guessUC.isLetterInWord.mockReturnValue(EXPECTED_RESPONSE_STRUCT);
        
        const req = getMockReq();
        const { res } = getMockRes();
        guessController.isLetterInWord(req, res);

        expect(res.status).toHaveBeenCalledWith(200);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining(EXPECTED_CALL_STRUCT))
    })
})