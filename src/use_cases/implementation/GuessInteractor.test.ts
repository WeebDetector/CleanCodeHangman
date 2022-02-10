import { GameGateway } from "../../gateway/api/GameGateway";
import { Game } from "../../domain/Game";
import { GuessInteractor } from "./GuessInteractor";
import { mock, MockProxy } from 'jest-mock-extended';

const WORD = "table";
const EXPECTED_GAME_GATEWAY_RESULT = new Game(0, new Array(), constructHiddenWord(''), 1, WORD);

function constructHiddenWord(letter : string) : Map<number, string> {
    const hiddenWord = new Map<number, string>();
    for (let i = 0; i < WORD.length; i++)
        (letter === WORD[i]) ? hiddenWord.set(i, letter) : hiddenWord.set(i, '_');

    return hiddenWord;
}

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
        expect(gameResponse.getHiddenWord()).toStrictEqual(constructHiddenWord(GUESS));
    })

    test("The game doesn't exist case", () => {
        expect(() => {
            guessUC.isLetterInWord(1, GUESS)
        }).toThrow('Game played by player ' + 1 + ' not found');
    })
})