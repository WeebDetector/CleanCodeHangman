import { GameBuilder } from "../../src/domain/GameBuilder";
import { InMemoryGameGateway } from "../../src/gateway/InMemoryGameGateway";

describe("Testing game gateway", () => {
    let obj : InMemoryGameGateway;

    beforeEach(() => {
        obj = new InMemoryGameGateway();
    });

    test("Game addition and retrieval", () => {
        obj.addGame(GameBuilder.init(1, "table").build());
        expect(obj.getGameByPlayerId(1)).not.toBeUndefined();
    })

    test("Game retrieval without addition", () => {
        expect(obj.getGameByPlayerId(1)).toBeUndefined();
    })
})