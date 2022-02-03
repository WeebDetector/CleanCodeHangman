import { Game } from "../../src/domain/game";

describe('Game', () => {
    var obj;
    test("Game object being created correctly", () => {
        obj = new Game(1, "table");
        expect(obj.getMissedGuesses()).toBe(0);
        expect(obj.getCorrectGuesses()).toBe(0);
        expect(obj.getLettersGuessed().length).toBe(0);
        expect(obj.getCurrentWordState().length).toBe(5);
        expect(obj.getPlayerId()).toBe(1);
        expect(obj.getWordBeingGuessed()).toBe("table");
    })
})