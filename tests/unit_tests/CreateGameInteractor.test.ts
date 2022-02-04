import { GameGateway } from "../../src/gateway/GameGateway";
import { CreateGameInteractor } from "../../src/interactors/CreateGameInteractor";
import { mock, MockProxy } from 'jest-mock-extended';
import { WordGateway } from "../../src/gateway/WordGateway";
import { PlayerGateway } from "../../src/gateway/PlayerGateway";
import { CreateGameUseCase } from "../../src/use_cases/CreateGameUseCase";

const EXPECTED_WORD_GATEWAY_RESULT = "table";
const EXPECTED_PLAYER_GATEWAY_RESULT = 1;

describe("Testing game interactor", () => {
    let wordGateway : MockProxy<WordGateway>;
    let playerGateway : MockProxy<PlayerGateway>;
    let gameGateway : MockProxy<GameGateway>;
    let createGameUC : CreateGameUseCase;

    beforeEach(() => {
        wordGateway = mock<WordGateway>();
        playerGateway = mock<PlayerGateway>();
        gameGateway = mock<GameGateway>();
        createGameUC = new CreateGameInteractor(wordGateway, playerGateway, gameGateway);
    });
    
    test("Iterator returns correct values", () => {
        wordGateway.pickRandomWord.mockReturnValue(EXPECTED_WORD_GATEWAY_RESULT);
        playerGateway.addPlayer.mockReturnValue(EXPECTED_PLAYER_GATEWAY_RESULT);
        const gameObject = createGameUC.execute();
        
        expect(gameObject.getPlayerId()).toBe(1);
        expect(gameObject.getChosenWord()).toBe("table");
    })
})