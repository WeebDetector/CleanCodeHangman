import { GuessController } from "../../src/controllers/GuessController";
import { GuessInteractor } from "../../src/interactors/GuessInteractor";

describe("Testing guess controller", () => {

    test("Execute method", () => {
        const GuessUC = new GuessInteractor();
        const obj = new GuessController(GuessUC);
        const guess = "a";
    
        expect(obj.isLetterInWord(guess)).toBe(true);
    })
})