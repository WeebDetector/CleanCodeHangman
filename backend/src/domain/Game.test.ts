import { Game } from "./Game";
import { GameBuilder } from "./GameBuilder";

const CORRECT_GUESS = "a";

describe('Testing game', () => {

    let gameBuilder : GameBuilder
    let game : Game

    beforeEach(() => {
        const word = "table";
        const freshWordStateMap = new Map<number, string>([
                                    [0, '_'], [1, '_'], [2, '_'],
                                    [3, '_'], [4, '_']]);
        gameBuilder = GameBuilder.init(1, word).setCurrentWordState(freshWordStateMap);
        game = gameBuilder.build();
    });

    test("Game object being created correctly", () => {
        expect(game.getMissedGuesses()).toBe(0);
        expect(game.getCorrectGuesses()).toBe(0);
        expect(game.getLettersGuessed().length).toBe(0);
        expect(game.getCurrentWordState().size).toBe(5);
        expect(game.getPlayerId()).toBe(1);
        expect(game.getWordBeingGuessed()).toBe("table");
    })

    test("Game object updates correctly with a correct guess", () => {
        const response = game.guess(CORRECT_GUESS);
        expect(response.getGame().getCorrectGuesses()).toBe(1);
        expect(response.getGame().getLettersGuessed()).toContain(CORRECT_GUESS);
        expect(response.getGame().getCurrentWordState().values()).toContain(CORRECT_GUESS);

    })

    test("Game object updates correctly with an incorrect guess", () => {
        const incorrectGuess = "o";
        const response = game.guess(incorrectGuess);
        expect(response.getGame().getMissedGuesses()).toBe(1);
    })

    test("Game ending conditions: victory", () => {
        const modifiedWordStateMap = new Map<number, string>([
                                    [0, 't'], [1, 'a'], [2, 'b'],
                                    [3, 'l'], [4, 'e']]);
        const wonGame = gameBuilder.setCurrentWordState(modifiedWordStateMap).build();

        expect(wonGame.getGameState()).toBe("won");
    })

    test("Game ending conditions: defeat", () => {
        const newGameBuilder = gameBuilder.setMissedGuesses(9);
        const builtGame = newGameBuilder.build();
        const lostGame = builtGame.guess("z");
        console.log(lostGame.getGame())
        const wordStateMapAfterLoss = new Map<number, string>([
            [0, 't'], [1, 'a'], [2, 'b'],
            [3, 'l'], [4, 'e']]);

        expect(lostGame.getGame().getGameState()).toBe("lost");
        expect(lostGame.getGame().getCurrentWordState()).toStrictEqual(wordStateMapAfterLoss);
    })

    test("Guessing a letter that was guessed already", () => {
        const response = game.guess(CORRECT_GUESS);
        expect(response.getGame().getLettersGuessed()).toContain(CORRECT_GUESS);
        expect(() => {
            response.getGame().guess(CORRECT_GUESS)
        }).toThrow('Letter ' + CORRECT_GUESS + ' has already been guessed');
    })
})