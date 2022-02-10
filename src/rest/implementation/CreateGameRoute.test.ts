import { CreateGameRoute } from "./CreateGameRoute";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGameDataStruct } from "../../use_cases/api/entity/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../../use_cases/api/CreateGameUseCase";
import { getMockReq, getMockRes } from '@jest-mock/express'
import { RestGameDataStruct } from "../api/entity/RestGameDataStruct";

const EXPECTED_GAME_DATA_STRUCT = new BoundaryGameDataStruct(1, constructHiddenWord("table"));
const EXPECTED_RESPONSE_TO_SEND = new RestGameDataStruct(1, constructArray("table"));

function constructArray(word : string) : [number, string][] {
    const arrayToExpect = new Array();
    for (let i = 0; i < word.length; i++)
        arrayToExpect.push([i, '_']);

    return arrayToExpect;
}

function constructHiddenWord(word : string) : Map<number, string> {
    const hiddenWord = new Map<number, string>();
    for (let i = 0; i < word.length; i++)
        hiddenWord.set(i, '_');

    return hiddenWord;
}

describe("Testing game controller", () => {
    let createGameUC : MockProxy<CreateGameUseCase>;
    let createGameController : CreateGameRoute;

    beforeEach(() => {
        createGameUC = mock<CreateGameUseCase>();
        createGameController = new CreateGameRoute(createGameUC);
    });

    test("Controller returns correct values", () => {
        createGameUC.execute.mockReturnValue(EXPECTED_GAME_DATA_STRUCT);
        const req = getMockReq();
        const { res } = getMockRes();
        createGameController.execute(req, res);
        
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            playerId: EXPECTED_RESPONSE_TO_SEND.playerId,
            chosenWord: EXPECTED_RESPONSE_TO_SEND.chosenWord,
        }))
    })
})