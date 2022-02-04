import { GameBuilder } from "../../src/domain/GameBuilder";

describe('Game', () => {
    test("Game object being created correctly", () => {
        let word = "table";
        let wordStateArray = new Array("table".length).fill('_');
        let gameBuilder = new GameBuilder(0, 0, new Array(), wordStateArray, 1, word);
        let game = gameBuilder.build();
        
        expect(game.getMissedGuesses()).toBe(0);
        expect(game.getCorrectGuesses()).toBe(0);
        expect(game.getLettersGuessed().length).toBe(0);
        expect(game.getCurrentWordState().length).toBe(5);
        expect(game.getPlayerId()).toBe(1);
        expect(game.getWordBeingGuessed()).toBe("table");
    })
})