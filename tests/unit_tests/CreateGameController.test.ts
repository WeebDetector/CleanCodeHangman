import { CreateGameController } from "../../src/controllers/CreateGameController";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGameDataStruct } from "../../src/use_cases/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../../src/use_cases/CreateGameUseCase";

const EXPECTED_GAME_DATA_STRUCT = new BoundaryGameDataStruct(1, 'table');

describe("Testing game controller", () => {
    let createGameUC : MockProxy<CreateGameUseCase>;
    let createGameController : CreateGameController;

    beforeEach(() => {
        createGameUC = mock<CreateGameUseCase>();
        createGameController = new CreateGameController(createGameUC);
    });

    test("Controller returns correct values", () => {
        createGameUC.execute.mockReturnValue(EXPECTED_GAME_DATA_STRUCT);
        const game = createGameController.execute();
        
        expect(game.getPlayerId()).toBe(EXPECTED_GAME_DATA_STRUCT.getPlayerId());
        expect(game.getChosenWord()).toBe(EXPECTED_GAME_DATA_STRUCT.getChosenWord());
    })
})