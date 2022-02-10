import { GameBuilder } from "../../domain/GameBuilder";
import { InMemoryGameGateway } from "./InMemoryGameGateway";

describe("Testing game gateway", () => {
    let gameGateway : InMemoryGameGateway;

    beforeEach(() => {
        gameGateway = new InMemoryGameGateway();
    });

    test("Game addition and retrieval", () => {
        gameGateway.addGame(GameBuilder.init(1, "table").build());
        expect(gameGateway.getGameByPlayerId(1)).not.toBeUndefined();
    })

    test("Game retrieval without addition", () => {
        expect(gameGateway.getGameByPlayerId(1)).toBeUndefined();
    })

    test("Updating game", () => {
        gameGateway.addGame(GameBuilder.init(1, "table").build());
        gameGateway.updateGame(1, GameBuilder.init(1, "interface").build());
        expect(gameGateway.getGameByPlayerId(1)?.getWordBeingGuessed()).toBe("interface");
        
    })
})