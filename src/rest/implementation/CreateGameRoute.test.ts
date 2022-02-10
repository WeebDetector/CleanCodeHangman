import { CreateGameRoute } from "./CreateGameRoute";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGameDataStruct } from "../../use_cases/api/entity/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../../use_cases/api/CreateGameUseCase";
import { getMockReq, getMockRes } from '@jest-mock/express'

const EXPECTED_GAME_DATA_STRUCT = new BoundaryGameDataStruct(1, 'table');

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
            playerId: EXPECTED_GAME_DATA_STRUCT.getPlayerId(),
            chosenWord: EXPECTED_GAME_DATA_STRUCT.getChosenWord(),
        }))
    })
})