import { GameBuilder } from "../../src/domain/GameBuilder";
import { InMemoryPlayerGateway } from "../../src/gateway/InMemoryPlayerGateway";

describe("Testing player gateway", () => {
    let obj : InMemoryPlayerGateway;

    beforeEach(() => {
        obj = new InMemoryPlayerGateway();
    });

    test("Game addition and retrieval", () => {
        expect(obj.addPlayer()).toBe(1);
    })
})