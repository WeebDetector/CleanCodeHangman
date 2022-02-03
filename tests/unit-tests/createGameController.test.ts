import { CreateGameController } from "../../src/controllers/createGameController";
import { mock, MockProxy } from 'jest-mock-extended';
import { BoundaryGameDataStruct } from "../../src/usecases/BoundaryGameDataStruct";
import { CreateGameUseCase } from "../../src/usecases/CreateGameUseCase";

describe("Testing game controller", () => {
    const expectedGameDataStruct = new BoundaryGameDataStruct(1, 'table');
    var createGameUC : MockProxy<CreateGameUseCase> = mock<CreateGameUseCase>();
    var obj = new CreateGameController(createGameUC);

    test("Controller created with the right structure", () => {
        createGameUC.execute.mockReturnValue(expectedGameDataStruct);
        var gameObject = obj.execute()
        expect(gameObject.getPlayerId()).toBe(expectedGameDataStruct.getPlayerId());
        expect(gameObject.getChosenWord()).toBe(expectedGameDataStruct.getChosenWord());
    })
})