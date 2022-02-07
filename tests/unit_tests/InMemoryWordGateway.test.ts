import { mock, MockProxy } from 'jest-mock-extended';
import { InMemoryWordGateway } from "../../src/gateway/InMemoryWordGateway"
import { RandomIntGenerator } from "../../src/gateway/RandomIntGenerator";

const EXPECTED_GENERATOR_RESULT = 2;

describe("Testing word gateway", () => {
    let numberGenerator : MockProxy<RandomIntGenerator>;
    let obj : InMemoryWordGateway;

    beforeEach(() => {
        numberGenerator = mock<RandomIntGenerator>();
        obj = new InMemoryWordGateway(numberGenerator);
    });

    test("Word retrieval", () => {
        numberGenerator.generateNumber.mockReturnValue(EXPECTED_GENERATOR_RESULT);
        expect(obj.pickRandomWord()).toBe("sunshine");
    })
})