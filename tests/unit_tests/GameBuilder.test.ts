import { GameBuilder } from "../../src/domain/GameBuilder";

function fillArray(size: number) {
    return new Array(size).fill('_');
}

describe('Game Builder', () => {
    test("GameBuilder object methods", () => {
        let word = "table";
        let gameBuilder = new GameBuilder(0, 0, new Array(), fillArray(word.length), 1, word);
        gameBuilder = gameBuilder.setCorrectGuesses(1);
        gameBuilder = gameBuilder.setMissedGuesses(3);
        gameBuilder = gameBuilder.setLettersGuessed(fillArray(1));
        gameBuilder = gameBuilder.setCurrentWordState(new Array());
        let game = gameBuilder.build();
        
        expect(game.getMissedGuesses()).toBe(3);
        expect(game.getCorrectGuesses()).toBe(1);
        expect(game.getLettersGuessed().length).toBe(1);
        expect(game.getCurrentWordState().length).toBe(0);
        expect(game.getPlayerId()).toBe(1);
        expect(game.getWordBeingGuessed()).toBe("table");
    })
})
