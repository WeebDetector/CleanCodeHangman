import { InMemoryWordGateway } from "../../src/gateway/InMemoryWordGateway";
import { GuessInteractor } from "../../src/interactors/GuessInteractor";

describe("Testing guess interactor", () => {

    test("Execute method", () => {
        const obj = new GuessInteractor();
        const guess = "a";
        const wordGateway = new InMemoryWordGateway();
    
        expect(obj.isLetterInWord(guess)).toBe(true);
    })
})