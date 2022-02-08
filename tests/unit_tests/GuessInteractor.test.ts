import { GameGateway } from "../../src/gateway/GameGateway";
import { Game } from "../../src/domain/Game";
import { GuessInteractor } from "../../src/interactors/GuessInteractor";
import { mock, MockProxy } from 'jest-mock-extended';

const EXPECTED_GAME_GATEWAY_RESULT = new Game(0, 0, new Array(), new Array(), 1, "table");

describe("Testing guess interactor", () => {

    let gameGateway : MockProxy<GameGateway>;
    let guessUC : GuessInteractor
    const GUESS = "a";
    const SECOND_GUESS = "l";

    beforeEach(() => {
        gameGateway = mock<GameGateway>();
        guessUC = new GuessInteractor(gameGateway);
    });

    test("Letter in the word checking", () => {
        gameGateway.getGameByPlayerId.mockReturnValue(EXPECTED_GAME_GATEWAY_RESULT);
        const gameResponse = guessUC.isLetterInWord(1, SECOND_GUESS);
    
        expect(gameResponse.getGuessState()).toBe(true);
        expect(gameResponse.getGameStateDescription()).toBe("Game is still in progress");
    })

    test("The game doesn't exist case", () => {
        expect(() => {
            guessUC.isLetterInWord(1, GUESS)
        }).toThrow('Game played by player ' + 1 + ' not found');
    })
})