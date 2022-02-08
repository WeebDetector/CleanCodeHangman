import { GameBuilder } from "../../src/domain/GameBuilder";

function fillArray(size: number) {
    return new Array(size).fill('_');
}

describe('Game Builder', () => {
    test("GameBuilder object methods", () => {
        const word = "table";
        let gameBuilder = GameBuilder.init(1, word).setCurrentWordState(fillArray(word.length));
        gameBuilder = gameBuilder.setMissedGuesses(3);
        gameBuilder = gameBuilder.setLettersGuessed(fillArray(1));
        gameBuilder = gameBuilder.setCurrentWordState(new Array());
        const game = gameBuilder.build();
        
        expect(game.getMissedGuesses()).toBe(3);
        expect(game.getCorrectGuesses()).toBe(0);
        expect(game.getLettersGuessed().length).toBe(1);
        expect(game.getCurrentWordState().length).toBe(0);
        expect(game.getPlayerId()).toBe(1);
        expect(game.getWordBeingGuessed()).toBe("table");
    })
})
