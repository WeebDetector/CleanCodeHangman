import { GuessController } from "../../src/controllers/GuessController";
import { GuessUseCase } from "../../src/use_cases/GuessUseCase";
import { mock, MockProxy } from 'jest-mock-extended';

const EXPECTED_USE_CASE_RESULT = true

describe("Testing guess controller", () => {

    let guessUC : MockProxy<GuessUseCase>;
    let guessController : GuessController
    const GUESS = "a";

    beforeEach(() => {
        guessUC = mock<GuessUseCase>();
        guessController = new GuessController(guessUC);
    });

    test("Letter in the word method", () => {
        guessUC.isLetterInWord.mockReturnValue(EXPECTED_USE_CASE_RESULT);

        expect(guessController.isLetterInWord(1, GUESS)).toBe(true);
    })
})