import { mock, MockProxy } from 'jest-mock-extended';
import { InMemoryWordGateway } from "../../src/gateway/InMemoryWordGateway"
import { RandomGenerator } from "../../src/gateway/RandomGenerator";

const EXPECTED_GENERATOR_RESULT = 2;

describe("Testing word gateway", () => {
    let numberGenerator : MockProxy<RandomGenerator>;
    let obj : InMemoryWordGateway;

    beforeEach(() => {
        numberGenerator = mock<RandomGenerator>();
        obj = new InMemoryWordGateway(numberGenerator);
    });

    test("Word retrieval", () => {
        numberGenerator.generateNumber.mockReturnValue(EXPECTED_GENERATOR_RESULT);
        expect(obj.pickRandomWord()).toBe("sunshine");
    })
})