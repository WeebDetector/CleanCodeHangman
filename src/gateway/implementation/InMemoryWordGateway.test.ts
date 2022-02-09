import { mock, MockProxy } from 'jest-mock-extended';
import { InMemoryWordGateway } from "./InMemoryWordGateway"
import { RandomIntGenerator } from "./RandomIntGenerator";

const EXPECTED_GENERATOR_RESULT = 2;

describe("Testing word gateway", () => {
    let numberGenerator : MockProxy<RandomIntGenerator>;
    let wordGateway : InMemoryWordGateway;

    beforeEach(() => {
        numberGenerator = mock<RandomIntGenerator>();
        wordGateway = new InMemoryWordGateway(numberGenerator);
    });

    test("Word retrieval", () => {
        numberGenerator.generateNumber.mockReturnValue(EXPECTED_GENERATOR_RESULT);
        expect(wordGateway.pickRandomWord()).toBe("sunshine");
    })
})