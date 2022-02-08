import { GuessController } from "../../src/controllers/GuessController";
import { GuessUseCase } from "../../src/use_cases/GuessUseCase";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGuessResponse } from "../../src/use_cases/BoundaryGuessResponse";

const EXPECTED_RESPONSE_STRUCT = new BoundaryGuessResponse(true, "Game is still in progress");

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

        expect(guessController.isLetterInWord(1, GUESS).getGuessState()).toBe(true);
        expect(guessController.isLetterInWord(1, GUESS).getGameStateDescription()).toBe("Game is still in progress");
    })
})