import { FakePlayerGateway } from "../gateway/fakePlayerGateway";
import { WordGateway } from "../gateway/wordGateway";
import { FakeWordGateway } from "../gateway/fakeWordGateway";
import { CreateGameUseCase } from "../usecases/CreateGameUseCase";

export class CreateGameInteractor implements CreateGameUseCase {
    private readonly wordGateway : WordGateway;
    private readonly playerGateway : FakePlayerGateway;

    constructor(wordGateway : FakeWordGateway, playerGateway : FakePlayerGateway) {
        this.wordGateway = wordGateway;
        this.playerGateway = playerGateway;
    }

    execute() : string {
        return this.wordGateway.pickARandomWord();
    }

}