import { CreateGameController } from "../../src/controllers/createGameController";
import { FakePlayerGateway } from "../../src/gateway/fakePlayerGateway";
import { FakeSingleWordGateway } from "../../src/gateway/fakeSingleWordGateway";
import { CreateGameInteractor } from "../../src/Interactors/createGameInteractor";

describe("Testing game controller", () => {
    var obj;
    let wordGateway = new FakeSingleWordGateway();
    let playerGateway = new FakePlayerGateway();
    let createGameUC = new CreateGameInteractor(wordGateway, playerGateway);

    test("Controller created correctly", () => {
        obj = new CreateGameController(createGameUC);
        expect(obj.execute()).toBe("table");
    })

    /*beforeEach(() => {
        const app = express();
        app.listen(0, () => console.log("Listening to app at 3000"));
        app.use(express.static('src'));
        app.use(express.json());
    }) */
})