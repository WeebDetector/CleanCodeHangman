import { GameGateway } from "../../gateway/api/GameGateway";
import { Game } from "../../domain/Game";
import { GuessInteractor } from "./GuessInteractor";
import { mock, MockProxy } from 'jest-mock-extended';

const WORD = "table";
const FRESH_WORD_STATE_MAP = new Map<number, string>([
                            [0, '_'], [1, '_'], [2, '_'],
                            [3, '_'], [4, '_']]);
const MODIFIED_WORD_STATE_MAP = new Map<number, string>([
                            [0, '_'], [1, 'a'], [2, '_'],
                            [3, '_'], [4, '_']]);
const EXPECTED_GAME_GATEWAY_RESULT = new Game(0, new Array(), FRESH_WORD_STATE_MAP, 1, WORD);

describe("Testing guess interactor", () => {

    let gameGateway : MockProxy<GameGateway>;
    let guessUC : GuessInteractor
    const GUESS = "a";

    beforeEach(() => {
        gameGateway = mock<GameGateway>();
        guessUC = new GuessInteractor(gameGateway);
    });

    test("Letter in the word checking", () => {
        gameGateway.getGameByPlayerId.mockReturnValue(EXPECTED_GAME_GATEWAY_RESULT);
        const gameResponse = guessUC.isLetterInWord(1, GUESS);
    
        expect(gameResponse.getGuessState()).toBe(true);
        expect(gameResponse.getGameStateDescription()).toBe("in-progress");
        expect(gameResponse.getHiddenWord()).toStrictEqual(MODIFIED_WORD_STATE_MAP);
    })

    test("The game doesn't exist case", () => {
        expect(() => {
            guessUC.isLetterInWord(1, GUESS)
        }).toThrow('Game played by player ' + 1 + ' not found');
    })
})