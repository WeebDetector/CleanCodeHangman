import { InMemoryPlayerGateway } from "../../src/gateway/InMemoryPlayerGateway";

describe("Testing player gateway", () => {
    let playerGateway : InMemoryPlayerGateway;

    beforeEach(() => {
        playerGateway = new InMemoryPlayerGateway();
    });

    test("Player addition", () => {
        expect(playerGateway.addPlayer()).toBe(1);
    })
})