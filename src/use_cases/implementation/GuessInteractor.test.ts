import { GameGateway } from "../../gateway/api/GameGateway";
import { Game } from "../../domain/Game";
import { GuessInteractor } from "./GuessInteractor";
import { mock, MockProxy } from 'jest-mock-extended';

const EXPECTED_GAME_GATEWAY_RESULT = new Game(0, new Array(), new Map<number, string>(), 1, "table");

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
    })

    test("The game doesn't exist case", () => {
        expect(() => {
            guessUC.isLetterInWord(1, GUESS)
        }).toThrow('Game played by player ' + 1 + ' not found');
    })
})