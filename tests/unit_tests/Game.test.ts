import { GameBuilder } from "../../src/domain/GameBuilder";

describe('Game', () => {
    test("Game object being created correctly", () => {
        const word = "table";
        const wordStateArray = new Array("table".length).fill('_');
        const gameBuilder = new GameBuilder(0, 0, new Array(), wordStateArray, 1, word);
        const game = gameBuilder.build();
        
        expect(game.getMissedGuesses()).toBe(0);
        expect(game.getCorrectGuesses()).toBe(0);
        expect(game.getLettersGuessed().length).toBe(0);
        expect(game.getCurrentWordState().length).toBe(5);
        expect(game.getPlayerId()).toBe(1);
        expect(game.getWordBeingGuessed()).toBe("table");
    })
})