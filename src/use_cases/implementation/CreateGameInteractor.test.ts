import { GameGateway } from "../../gateway/api/GameGateway";
import { CreateGameInteractor } from "./CreateGameInteractor";
import { mock, MockProxy } from 'jest-mock-extended';
import { WordGateway } from "../../gateway/api/WordGateway";
import { PlayerGateway } from "../../gateway/api/PlayerGateway";
import { Game } from "../../domain/Game";

const EXPECTED_WORD_GATEWAY_RESULT = "table";
const EXPECTED_PLAYER_GATEWAY_RESULT = 1;
const EXPECTED_GAME_GATEWAY_RESULT = new Game(0, new Array(), constructHiddenWord(EXPECTED_WORD_GATEWAY_RESULT), 1, EXPECTED_WORD_GATEWAY_RESULT);

function constructHiddenWord(word : string) : Map<number, string> {
    const hiddenWord = new Map<number, string>();
    for (let i = 0; i < word.length; i++)
        hiddenWord.set(i, '_');

    return hiddenWord;
}

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
        const hiddenWord = constructHiddenWord(EXPECTED_WORD_GATEWAY_RESULT);
        const gameObject = createGameUC.execute();
        
        expect(gameObject.getPlayerId()).toBe(1);
        expect(gameObject.getChosenWord()).toStrictEqual(hiddenWord);
    })
})