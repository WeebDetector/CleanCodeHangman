import { CreateGameController } from "../../src/controllers/CreateGameController";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGameDataStruct } from "../../src/use_cases/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../../src/use_cases/CreateGameUseCase";

const EXPECTED_GAME_DATA_STRUCT = new BoundaryGameDataStruct(1, 'table');

describe("Testing game controller", () => {
    let createGameUC : MockProxy<CreateGameUseCase>;
    let obj : CreateGameController;

    beforeEach(() => {
        createGameUC = mock<CreateGameUseCase>();
        obj = new CreateGameController(createGameUC);
    });

    test("Controller returns correct values", () => {
        createGameUC.execute.mockReturnValue(EXPECTED_GAME_DATA_STRUCT);
        const gameObject = obj.execute();
        
        expect(gameObject.getPlayerId()).toBe(EXPECTED_GAME_DATA_STRUCT.getPlayerId());
        expect(gameObject.getChosenWord()).toBe(EXPECTED_GAME_DATA_STRUCT.getChosenWord());
    })
})