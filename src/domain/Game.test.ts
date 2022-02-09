import { Game } from "./Game";
import { GameBuilder } from "./GameBuilder";

const WORD = "table";
const WORD_STATE_ARRAY = new Array(WORD.length).fill('_');
const CORRECT_GUESS = "a";
const INCORRECT_GUESS = "o";

describe('Testing game', () => {

    let gameBuilder : GameBuilder
    let game : Game

    beforeEach(() => {
        gameBuilder = GameBuilder.init(1, WORD).setCurrentWordState(WORD_STATE_ARRAY);
        game = gameBuilder.build();
    });

    test("Game object being created correctly", () => {
        expect(game.getMissedGuesses()).toBe(0);
        expect(game.getCorrectGuesses()).toBe(0);
        expect(game.getLettersGuessed().length).toBe(0);
        expect(game.getCurrentWordState().length).toBe(5);
        expect(game.getPlayerId()).toBe(1);
        expect(game.getWordBeingGuessed()).toBe("table");
    })

    test("Game object updates correctly with a correct guess", () => {
        expect(game.getCorrectGuesses()).toBe(0);
        expect(game.getLettersGuessed().length).toBe(0);
        const response = game.guess(CORRECT_GUESS);
        expect(response.getGame().getCorrectGuesses()).toBe(1);
        expect(response.getGame().getLettersGuessed()).toContain(CORRECT_GUESS);
        expect(response.getGame().getCurrentWordState()).toContain(CORRECT_GUESS);

    })

    test("Game object updates correctly with an incorrect guess", () => {
        expect(game.getMissedGuesses()).toBe(0);
        const response = game.guess(INCORRECT_GUESS);
        expect(response.getGame().getMissedGuesses()).toBe(1);
    })

    test("Game ending conditions: victory", () => {
        const winningArray = ['t', 'a', 'b', 'l', 'e'];
        const newGameBuilder = gameBuilder.setCurrentWordState(winningArray);
        const wonGame = newGameBuilder.build();

        expect(wonGame.isGameOver()).toBe("won");
    })

    test("Game ending conditions: defeat", () => {
        const newGameBuilder = gameBuilder.setMissedGuesses(10);
        const lostGame = newGameBuilder.build();

        expect(lostGame.isGameOver()).toBe("lost");
    })

    test("Guessing a letter that was guessed already", () => {
        const response = game.guess(CORRECT_GUESS);
        expect(response.getGame().getLettersGuessed()).toContain(CORRECT_GUESS);
        expect(() => {
            response.getGame().guess(CORRECT_GUESS)
        }).toThrow('Letter ' + CORRECT_GUESS + ' has already been guessed');
    })
})