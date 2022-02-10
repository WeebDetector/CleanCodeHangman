import { CreateGameRoute } from "./CreateGameRoute";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGameDataStruct } from "../../use_cases/api/entity/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../../use_cases/api/CreateGameUseCase";
import { getMockReq, getMockRes } from '@jest-mock/express'
import { RestGameDataStruct } from "../api/entity/RestGameDataStruct";

const FRESH_WORD_STATE_MAP = new Map<number, string>([
                        [0, '_'], [1, '_'], [2, '_'],
                        [3, '_'], [4, '_']]);
const FRESH_WORD_STATE_ARRAY = Array.from(FRESH_WORD_STATE_MAP);
const EXPECTED_GAME_DATA_STRUCT = new BoundaryGameDataStruct(1, FRESH_WORD_STATE_MAP);
const EXPECTED_RESPONSE_TO_SEND = new RestGameDataStruct(1, FRESH_WORD_STATE_ARRAY);

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