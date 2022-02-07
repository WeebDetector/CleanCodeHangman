import { InMemoryPlayerGateway } from "../../src/gateway/InMemoryPlayerGateway";

describe("Testing player gateway", () => {
    let obj : InMemoryPlayerGateway;

    beforeEach(() => {
        obj = new InMemoryPlayerGateway();
    });

    test("Player addition", () => {
        expect(obj.addPlayer()).toBe(1);
    })
})