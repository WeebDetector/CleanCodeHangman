import { Game } from "./Game";
import { GameBuilder } from "./GameBuilder";

const WORD = "table";
const FRESH_WORD_STATE_MAP = new Map<number, string>([
                        [0, '_'], [1, '_'], [2, '_'],
                        [3, '_'], [4, '_']]);
const MODIFIED_WORD_STATE_MAP = new Map<number, string>([
                        [0, 't'], [1, 'a'], [2, 'b'],
                        [3, 'l'], [4, 'e']]);
const CORRECT_GUESS = "a";
const INCORRECT_GUESS = "o";

describe('Testing game', () => {

    let gameBuilder : GameBuilder
    let game : Game

    beforeEach(() => {
        gameBuilder = GameBuilder.init(1, WORD).setCurrentWordState(FRESH_WORD_STATE_MAP);
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
        const response = game.guess(INCORRECT_GUESS);
        expect(response.getGame().getMissedGuesses()).toBe(1);
    })

    test("Game ending conditions: victory", () => {
        const wonGame = gameBuilder.setCurrentWordState(MODIFIED_WORD_STATE_MAP).build();

        expect(wonGame.getGameState()).toBe("won");
    })

    test("Game ending conditions: defeat", () => {
        const newGameBuilder = gameBuilder.setMissedGuesses(10);
        const lostGame = newGameBuilder.build();

        expect(lostGame.getGameState()).toBe("lost");
    })

    test("Guessing a letter that was guessed already", () => {
        const response = game.guess(CORRECT_GUESS);
        expect(response.getGame().getLettersGuessed()).toContain(CORRECT_GUESS);
        expect(() => {
            response.getGame().guess(CORRECT_GUESS)
        }).toThrow('Letter ' + CORRECT_GUESS + ' has already been guessed');
    })
})