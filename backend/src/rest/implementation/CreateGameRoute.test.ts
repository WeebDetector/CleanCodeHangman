import { CreateGameRoute } from "./CreateGameRoute";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGameDataStruct } from "../../use_cases/api/entity/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../../use_cases/api/CreateGameUseCase";
import { getMockReq, getMockRes } from '@jest-mock/express'
import { RestGameDataStruct } from "../api/entity/RestGameDataStruct";

describe("Testing game controller", () => {
    let createGameUC : MockProxy<CreateGameUseCase>;
    let createGameController : CreateGameRoute;

    beforeEach(() => {
        createGameUC = mock<CreateGameUseCase>();
        createGameController = new CreateGameRoute(createGameUC);
    });

    test("Controller returns correct values", () => {
        const freshWordStateMap = new Map<number, string>([
                                    [0, '_'], [1, '_'], [2, '_'],
                                    [3, '_'], [4, '_']]);
        const freshWordStateArray = Array.from(freshWordStateMap);
        const expectedGameDataStruct = new BoundaryGameDataStruct(1, freshWordStateMap);
        const expectedResponseToSend = new RestGameDataStruct(1, freshWordStateArray);
        
        createGameUC.execute.mockReturnValue(expectedGameDataStruct);
        const req = getMockReq();
        const { res } = getMockRes();
        createGameController.execute(req, res);
        
        expect(res.status).toHaveBeenCalledWith(201);
        expect(res.json).toHaveBeenCalledWith(expect.objectContaining({
            playerId: expectedResponseToSend.playerId,
            chosenWord: expectedResponseToSend.chosenWord,
        }))
    })
})