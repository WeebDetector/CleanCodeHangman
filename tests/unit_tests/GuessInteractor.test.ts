import { GameGateway } from "../../src/gateway/GameGateway";
import { Game } from "../../src/domain/Game";
import { GuessInteractor } from "../../src/interactors/GuessInteractor";
import { mock, MockProxy } from 'jest-mock-extended';

const EXPECTED_GAME_GATEWAY_RESULT = new Game(0, 0, new Array(), new Array(), 1, "table");

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
    
        expect(guessUC.isLetterInWord(1, GUESS).getGuessState()).toBe(true);
        expect(guessUC.isLetterInWord(1, GUESS).getGameStateDescription()).toBe("Game is still in progress");
    })

    test("The game doesn't exist case", () => {
        expect(() => {
            guessUC.isLetterInWord(1, GUESS)
        }).toThrow('Game played by player ' + 1 + ' not found');
    })
})