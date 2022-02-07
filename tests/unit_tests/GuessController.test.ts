import { GuessController } from "../../src/controllers/GuessController";
import { GuessUseCase } from "../../src/use_cases/GuessUseCase";
import { mock, MockProxy } from 'jest-mock-extended';

const EXPECTED_USE_CASE_RESULT = true

describe("Testing guess controller", () => {

    let guessUC : MockProxy<GuessUseCase>;
    let obj : GuessController
    const guess = "a";

    beforeEach(() => {
        guessUC = mock<GuessUseCase>();
        obj = new GuessController(guessUC);
    });

    test("Letter in the word method", () => {
        guessUC.isLetterInWord.mockReturnValue(EXPECTED_USE_CASE_RESULT);

        expect(obj.isLetterInWord(1, guess)).toBe(true);
    })
})