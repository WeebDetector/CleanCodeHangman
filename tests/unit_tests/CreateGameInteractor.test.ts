import { GameGateway } from "../../src/gateway/GameGateway";
import { CreateGameInteractor } from "../../src/interactors/CreateGameInteractor";
import { mock, MockProxy } from 'jest-mock-extended';
import { WordGateway } from "../../src/gateway/WordGateway";
import { PlayerGateway } from "../../src/gateway/PlayerGateway";
import { Game } from "../../src/domain/Game";

const EXPECTED_WORD_GATEWAY_RESULT = "table";
const EXPECTED_PLAYER_GATEWAY_RESULT = 1;
const EXPECTED_GAME_GATEWAY_RESULT = new Game(0, new Array(), new Array(), 1, "table");

describe("Testing game interactor", () => {
    let wordGateway : MockProxy<WordGateway>;
    let playerGateway : MockProxy<PlayerGateway>;
    let gameGateway : MockProxy<GameGateway>;
    let createGameUC : CreateGameInteractor;

    beforeEach(() => {
        wordGateway = mock<WordGateway>();
        playerGateway = mock<PlayerGateway>();
        gameGateway = mock<GameGateway>();
        createGameUC = new CreateGameInteractor(wordGateway, playerGateway, gameGateway);
    });
    
    test("Interactor returns correct values", () => {
        wordGateway.pickRandomWord.mockReturnValue(EXPECTED_WORD_GATEWAY_RESULT);
        playerGateway.addPlayer.mockReturnValue(EXPECTED_PLAYER_GATEWAY_RESULT);
        gameGateway.getGameByPlayerId.mockReturnValue(EXPECTED_GAME_GATEWAY_RESULT);
        const gameObject = createGameUC.execute();
        
        expect(gameObject.getPlayerId()).toBe(1);
        expect(gameObject.getChosenWord()).toBe("table");
    })
})